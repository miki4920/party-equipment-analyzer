import json
import os

from common.model import Character, Item


class CreateDatabase:
    def __init__(self):
        self.coin_dictionary = {"pp": 10, "gp": 1, "sp": 0.1, "cp": 0.01, }
        self.ids = ["AOh3phVs5PQ2Ae9A", "J5njm4YwaRu9sj3T", "MAi78zS5iDn4d5wp", "v9KEi6wvQBIMIAAA", "aLgv3EleWVLOWT68"]
        self.foundry_path = os.getenv("FOUNDRY_PATH")
        self.properties_path = "../properties.json"
        self.properties = self.get_properties()

    def get_properties(self):
        with open(self.properties_path, "r") as file:
            return json.load(file)

    def get_foundry_file(self):
        with open(self.foundry_path, "r") as file:
            text = file.readlines()
            file = [json.loads(line) for line in text][::-1]
        return file

    def remove_duplicate_ids(self, json_file):
        unique_characters = []
        for line in json_file:
            if line["_id"] in self.ids:
                unique_characters.append(line)
                self.ids.remove(line["_id"])
        return unique_characters

    def item_value_converter(self, data):
        gold_value = 0
        level = data["level"]["value"]
        for entry in data:
            if self.properties.get(entry) and data[entry]["value"]:
                gold_value += self.properties[entry][str(data[entry]["value"])]["price"]
                level = max(self.properties[entry][str(data[entry]["value"])]["level"], level)
        for coin_type, coin_quantity in data["price"]["value"].items():
            gold_value += self.coin_dictionary[coin_type] * coin_quantity
        if data["price"].get("per"):
            gold_value /= data["price"]["per"]
        return round(gold_value, 2), level

    def insert_into_database(self, db):
        characters = self.remove_duplicate_ids(self.get_foundry_file())
        for character in characters:
            items = character["items"]
            character = Character(name=character["name"])
            db.session.add(character)
            for item in items:
                if item["data"].get("price") and "infused" not in item["data"]["traits"]["value"]:
                    item_value, level = self.item_value_converter(item["data"])
                    consumable = "consumable" in item["data"]["traits"]["value"]
                    item = Item(owner=character, name=item["name"], description=item["data"]["description"]["value"],
                                level=level, value=item_value,
                                quantity=item["data"]["quantity"], consumable=consumable)
                    db.session.add(item)
            db.session.commit()


