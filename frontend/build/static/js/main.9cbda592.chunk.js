(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{19:function(t,e,a){"use strict";a.r(e);var r=a(3),n=a(1),s=a(2),c=a(5),i=a(4),o=a(6),h=a.n(o),l=a(18),d=a.n(l),u=a(10),j=a(8),b=a(15),p=(a(28),a(0));j.e.register(j.d,j.i,j.b,j.n,j.o,j.g);var v=a(30),O=function(t){Object(c.a)(a,t);var e=Object(i.a)(a);function a(){return Object(n.a)(this,a),e.apply(this,arguments)}return Object(s.a)(a,[{key:"renderCharacters",value:function(){for(var t=[],e=0;e<this.props.data.length;e++){var a=this.props.data[e].name===this.props.active?"active":"";t.push(Object(p.jsx)("li",{children:Object(p.jsx)("button",{className:a,onClick:this.props.onClick,children:this.props.data[e].name})},Object(u.a)()))}return t.push(Object(p.jsx)("li",{children:Object(p.jsx)("button",{onClick:this.props.refreshData,children:"Refresh Data"})},Object(u.a)())),t}},{key:"render",value:function(){var t=this.renderCharacters();return Object(p.jsx)(h.a.Fragment,{children:Object(p.jsx)("nav",{children:Object(p.jsxs)("div",{id:"sticky_nav",children:[Object(p.jsx)("header",{children:"Wealth"}),Object(p.jsx)("header",{children:"Manager"}),Object(p.jsx)("ul",{children:t})]})})})}}]),a}(h.a.Component),g=function(t){Object(c.a)(a,t);var e=Object(i.a)(a);function a(t){var r;return Object(n.a)(this,a),(r=e.call(this,t)).options={responsive:!0,onClick:r.graphClickEvent(r.props.updateActive)},r}return Object(s.a)(a,[{key:"graphClickEvent",value:function(t){return function(e){var a=e.chart.getElementsAtEventForMode(e,"nearest",{intersect:!0},!0);if(a.length){var r=a[0],n=e.chart.data.labels[r.index];t(n)}}}},{key:"wealth",value:function(t){return t.reduce((function(t,e){return t+parseFloat(e.total)}),0)}},{key:"wealthWithoutConsumables",value:function(t){return t.reduce((function(t,e){return t+((a=e).consumable?0:parseFloat(a.total));var a}),0)}},{key:"hashColor",value:function(t){return"#"+v(t).slice(10,16)}},{key:"getGraphData",value:function(t,e){for(var a=[],r={},n=0;n<t.length;n++){var s=this.hashColor(t[n].name),c=s+"40";a.push([t[n].name,e(t[n].items),s,c])}a.sort((function(t,e){return e[1]-t[1]})),r.labels=[],r.data=[],r.borderColor=[],r.backgroundColor=[];for(var i=0,o=a;i<o.length;i++){var h=o[i];r.labels.push(h[0]),r.data.push(h[1]),r.borderColor.push(h[2]),r.backgroundColor.push(h[3])}return r}},{key:"graph",value:function(t,e){return console.log(t.borderColor+"33"),{labels:t.labels,datasets:[{label:e,data:t.data,backgroundColor:t.backgroundColor,borderColor:t.borderColor,borderWidth:1}]}}},{key:"render",value:function(){var t=this.getGraphData(this.props.data,this.wealth),e=this.graph(t,"Wealth in GP"),a=this.getGraphData(this.props.data,this.wealthWithoutConsumables),r=this.graph(a,"Wealth in GP without consumables");return Object(p.jsxs)(h.a.Fragment,{children:[Object(p.jsx)("div",{className:"chart",children:Object(p.jsx)(b.a,{options:this.options,data:e,type:"bar"})}),Object(p.jsx)("div",{className:"chart",children:Object(p.jsx)(b.a,{options:this.options,data:r,type:"bar"})})]})}}]),a}(h.a.Component),f=function(t){Object(c.a)(a,t);var e=Object(i.a)(a);function a(){var t;Object(n.a)(this,a);for(var r=arguments.length,s=new Array(r),c=0;c<r;c++)s[c]=arguments[c];return(t=e.call.apply(e,[this].concat(s))).tableHeader=["name","level","quantity","value","total","consumable"],t}return Object(s.a)(a,[{key:"capitalizeFirstLetter",value:function(t){return t.charAt(0).toUpperCase()+t.slice(1)}},{key:"renderHeaderRow",value:function(){var t,e=[],a=Object(r.a)(this.tableHeader);try{for(a.s();!(t=a.n()).done;){var n=t.value,s="";n===this.props.sorting&&(s="active",isNaN(this.props.data[0].items[0][n])?s+=this.props.ascending?" headerSortAscending":" headerSortDescending":s+=this.props.ascending?" headerSortAscendingNumber":" headerSortDescendingNumber"),e.push(Object(p.jsx)("th",{className:"tableHeader",children:Object(p.jsx)("button",{onClick:this.props.onClick,className:s,children:this.capitalizeFirstLetter(n)})},Object(u.a)()))}}catch(c){a.e(c)}finally{a.f()}return Object(p.jsx)(h.a.Fragment,{children:Object(p.jsx)("tr",{children:e},Object(u.a)())},Object(u.a)())}},{key:"renderRow",value:function(t){return Object(p.jsx)(h.a.Fragment,{children:Object(p.jsxs)("tr",{children:[Object(p.jsx)("th",{children:Object(p.jsx)("p",{children:t.name})},Object(u.a)()),Object(p.jsx)("th",{children:Object(p.jsx)("p",{children:t.level})},Object(u.a)()),Object(p.jsx)("th",{children:Object(p.jsx)("p",{children:t.quantity})},Object(u.a)()),Object(p.jsx)("th",{children:Object(p.jsxs)("p",{children:[t.value," GP"]})},Object(u.a)()),Object(p.jsx)("th",{children:Object(p.jsxs)("p",{children:[t.total," GP"]})},Object(u.a)()),Object(p.jsx)("th",{children:Object(p.jsx)("p",{children:t.consumable?"\u2713":"\u2717"})},Object(u.a)())]},Object(u.a)())},Object(u.a)())}},{key:"compareFct",value:function(t,e){t=t[this.props.sorting],e=e[this.props.sorting];var a=this.props.ascending?1:-1;return(isNaN(t)?isNaN(e)?t.localeCompare(e):1:isNaN(e)?-1:parseFloat(t)-parseFloat(e))*a}},{key:"renderRows",value:function(){var t=this,e=[];e.push(this.renderHeaderRow());for(var a=0;a<this.props.data.length;a++)if(this.props.data[a].name===this.props.active){var r=this.props.data[a].items;r=r.sort((function(e,a){return t.compareFct(e,a)}));for(var n=0;n<r.length;n++)e.push(this.renderRow(r[n],n))}return e}},{key:"render",value:function(){return Object(p.jsx)(h.a.Fragment,{children:Object(p.jsx)("table",{children:Object(p.jsx)("tbody",{children:this.renderRows()})})})}}]),a}(h.a.Component),x=function(t){Object(c.a)(a,t);var e=Object(i.a)(a);function a(t){var r;return Object(n.a)(this,a),(r=e.call(this,t)).state={data:{},active:"",sorting:"name",ascending:!0},r}return Object(s.a)(a,[{key:"getData",value:function(){var t=this;fetch("https://wealth-viewer.herokuapp.com/wealth").then((function(t){return t.json()})).then((function(e){t.setState({data:e,active:e[0].name})}))}},{key:"componentDidMount",value:function(){this.getData()}},{key:"sortTable",value:function(t){var e=t.target.innerText.toLowerCase();e===this.state.sorting?this.setState({ascending:!this.state.ascending}):this.setState({sorting:e,ascending:!0})}},{key:"render",value:function(){var t=this;return 0===Object.keys(this.state.data).length?Object(p.jsx)("h1",{children:" Data is Loading, please stand by... "}):Object(p.jsxs)(h.a.Fragment,{children:[Object(p.jsx)(O,{data:this.state.data,active:this.state.active,onClick:function(e){return t.setState({active:e.target.innerText})},refreshData:function(){return t.getData()}}),Object(p.jsxs)("main",{children:[Object(p.jsx)("header",{children:this.state.active}),Object(p.jsx)("div",{id:"charts",children:Object(p.jsx)(g,{data:this.state.data,updateActive:function(e){return t.setState({active:e})}})}),Object(p.jsx)("section",{id:"table",children:Object(p.jsx)(f,{data:this.state.data,active:this.state.active,sorting:this.state.sorting,ascending:this.state.ascending,onClick:function(e){t.sortTable(e)}})})]})]})}}]),a}(h.a.Component);d.a.createRoot(document.getElementById("root")).render(Object(p.jsx)(x,{}))},28:function(t,e,a){}},[[19,1,2]]]);
//# sourceMappingURL=main.9cbda592.chunk.js.map