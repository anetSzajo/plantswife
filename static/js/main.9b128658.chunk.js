(this.webpackJsonpplantswife=this.webpackJsonpplantswife||[]).push([[0],{104:function(e,t,a){},113:function(e,t,a){e.exports=a(222)},135:function(e,t,a){},136:function(e,t,a){},142:function(e,t,a){},143:function(e,t,a){},144:function(e,t,a){},145:function(e,t,a){},146:function(e,t,a){},147:function(e,t,a){},148:function(e,t,a){},149:function(e,t,a){},150:function(e,t,a){},151:function(e,t,a){},152:function(e,t,a){},153:function(e,t,a){},214:function(e,t,a){},215:function(e,t,a){},216:function(e,t,a){},218:function(e,t,a){},219:function(e,t,a){},220:function(e,t,a){},222:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(22),c=a.n(r),o=a(21),i=a.n(o),s=(a(135),a(7)),m=a(12),u=a(11),p=a(13),d=a(14),h=a(19),E=a(18);a(136);var v=function(){return l.a.createElement("button",{className:"addNewPlantButton"},l.a.createElement(m.b,{to:"/createNewPlant"},"ADD NEW PLANT"))},g=(a(72),a(73));var f=function(e){var t=e.plant;return l.a.createElement("div",{className:"plantDescription"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"column first"},"Id:"),l.a.createElement("div",{className:"column"},t.id)),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"column first"},"Name:"),l.a.createElement("div",{className:"column"},t.name)),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"column first"},"Next watering:"),l.a.createElement("div",{className:"column"},g(t.watering.nextTimeProcessed).format("LLL"))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"column first"},"Next spraing:"),l.a.createElement("div",{className:"column"},g(t.spraing.nextTimeProcessed).format("LLL"))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"column first"},"Next feeding:"),l.a.createElement("div",{className:"column"},g(t.feeding.nextTimeProcessed).format("LLL"))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"column first"},"Place:"),l.a.createElement("div",{className:"column"},t.place)))};a(142);var b=function(e){return l.a.createElement("div",{className:"plantPhoto__container ".concat(e.fullDescriptionView&&"largePhoto")},l.a.createElement("img",{className:"plantPhoto",src:"/plantsPhotos/monstera.png",alt:""}))},w=(a(143),function(e){Object(h.a)(a,e);var t=Object(E.a)(a);function a(){return Object(p.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"handlePlantProcessed",value:function(e){var t=this;i.a.post("plants/".concat(this.props.plantId,"/").concat(e),{},{headers:{"Content-Type":"application/json"}}).then((function(e){return t.props.plantProcessTriggered()})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"plantButtons-bar"},l.a.createElement("button",{className:"plantButton",onClick:function(){return e.handlePlantProcessed("watering")}},l.a.createElement("img",{src:"/icons/watering-can.png",alt:"",className:"".concat(this.props.fullDescriptionView&&"largeButton")})),l.a.createElement("button",{className:"plantButton",onClick:function(){return e.handlePlantProcessed("spraing")}},l.a.createElement("img",{src:"/icons/water-sprayer.png",alt:"",className:"".concat(this.props.fullDescriptionView&&"largeButton")})),l.a.createElement("button",{className:"plantButton",onClick:function(){return e.handlePlantProcessed("feeding")}},l.a.createElement("img",{src:"/icons/bottle.png",alt:"",className:"".concat(this.props.fullDescriptionView&&"largeButton")})))}}]),a}(l.a.Component));a(144);var N=function(e){var t=e.plant;return l.a.createElement("button",{className:"moreInfoButton"},l.a.createElement(m.b,{to:"/plantViewPage/".concat(t.id)},"more..."))};a(145);var y=function(e){var t=e.plant,a=e.plantProcessTriggered;return l.a.createElement("div",{className:"plantListElement"},l.a.createElement("div",{className:"plantListElement__menu"},l.a.createElement(b,null),l.a.createElement(w,{plantId:t.id,plantProcessTriggered:a})),l.a.createElement(f,{plant:t}),l.a.createElement(N,{plant:t}))};var O=function(e){var t=e.plants,a=e.plantProcessTriggered;return l.a.createElement("div",null,t.map((function(e){return l.a.createElement(y,{key:"".concat(e.name).concat(e.id),plant:e,plantProcessTriggered:a})})))},P=Object(n.createContext)();function k(){return Object(n.useContext)(P)}var j=function(e){Object(h.a)(a,e);var t=Object(E.a)(a);function a(){var e;Object(p.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={plants:[]},e.fetchPlants=function(t){i.a.get("plants",{headers:{Authorization:"Bearer ".concat(e.context.authTokens.access_token)}}).then((function(a){t?e.setState({plants:a.data.filter((function(e){return e.place===t}))}):e.setState({plants:a.data})})).catch((function(e){console.log(e)}))},e}return Object(d.a)(a,[{key:"componentDidMount",value:function(){this.fetchPlants(this.props.place)}},{key:"render",value:function(){var e=this,t=this.state.plants;return l.a.createElement(O,{plants:t,plantProcessTriggered:function(){return e.fetchPlants(e.props.place)}})}}]),a}(l.a.Component);j.contextType=P;var C=j;a(146);var T=function(){return l.a.createElement("div",{className:"AppLogo"},l.a.createElement("h1",null,"PLANTSWIFE"))};a(147);var S=function(){return l.a.createElement("div",{className:"homePage"},l.a.createElement("img",{className:"homePageBackground",src:"../plantsPhotos/plants2.jpg",alt:""}),l.a.createElement(T,null))};a(148);var x=function(){return l.a.createElement("button",{className:"filterByPlace--button"},l.a.createElement(m.b,{to:"/filterByPlace"},"FIND BY PLACE"))};a(149);var I=function(){var e=k().setAuthTokens;return l.a.createElement("div",null,l.a.createElement("button",{className:"logoutButton",onClick:function(){e()}},l.a.createElement("img",{alt:"",src:"/../icons/logout.png"})))},A=function(e){Object(h.a)(a,e);var t=Object(E.a)(a);function a(){return Object(p.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){var e,t;return l.a.createElement("div",null,l.a.createElement(S,null),l.a.createElement(v,null),l.a.createElement(x,null),l.a.createElement(I,null),l.a.createElement(C,{filterByPlace:null===(e=this.props.location.state)||void 0===e?void 0:e.filterByPlace,place:null===(t=this.props.location.state)||void 0===t?void 0:t.place}))}}]),a}(l.a.Component),B=a(6);a(150);var D=function(){return l.a.createElement("button",{className:"addNewPlantPhotoButton"},l.a.createElement("img",{src:"/icons/ar-camera.png",alt:""}))};a(151);var L=function(){return l.a.createElement("button",{className:"goHomeButton"},l.a.createElement(m.b,{to:"/"},"HOME"))},W=a(16),F=a(40),M=a.n(F),q=new Map([["everyday",[1,"d"]],["onceAWeek",[1,"w"]],["twiceAWeek",[3,"d"]],["threeTimesAWeek",[2,"d"]],["onceAMonth",[1,"M"]]]),H=function(){function e(){Object(p.a)(this,e)}return Object(d.a)(e,null,[{key:"fromNewPlantForm",value:function(e){return{name:e.name,notes:e.notes,place:e.place,watering:{interval:e.wateringInterval,lastTimeProcessed:e.lastWatering,nextTimeProcessed:e.nextWatering},spraing:{interval:e.spraingInterval,lastTimeProcessed:e.lastSpraing,nextTimeProcessed:e.nextSpraing},feeding:{interval:e.feedingInterval,lastTimeProcessed:e.lastFeeding,nextTimeProcessed:e.nextFeeding}}}}]),e}(),R=(a(152),function(e){Object(h.a)(a,e);var t=Object(E.a)(a);function a(){return Object(p.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"calendar-icon__container"},this.props.calendarIcon?l.a.createElement("img",{src:"/icons/calendar.png",alt:"",className:"calendar-icon"}):null,l.a.createElement("input",{value:this.props.value,onChange:this.props.onChange,onClick:this.props.onClick}))}}]),a}(l.a.Component)),z=(a(153),a(73)),_=function(e){Object(h.a)(a,e);var t=Object(E.a)(a);function a(){var e;Object(p.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={plant:e.props.plant},e.formatIntervalString=function(e){return e.replace(/([a-zA-Z])(?=[A-Z])/g,"$1 ").toLowerCase()},e.calculateNextAction=function(e,t){return z(e).add(t[0],t[1]).format("LLL")},e.updateAction=function(t,a){var n=e.calculateNextAction(e.state.plant[a].lastTimeProcessed,q.get(e.state.plant[a].interval));e.setState({plant:Object(B.a)(Object(B.a)({},e.state.plant),{},Object(W.a)({},a,Object(B.a)(Object(B.a)({},e.state.plant[a]),{},{nextTimeProcessed:n})))})},e.handleProcessDateChange=function(t,a){t=t.toString(),e.setState({plant:Object(B.a)(Object(B.a)({},e.state.plant),{},Object(W.a)({},a,Object(B.a)(Object(B.a)({},e.state.plant[a]),{},{lastTimeProcessed:t})))},(function(){e.updateAction(e.state.plant,a)}))},e.handleIntervalSelect=function(t,a){e.setState({plant:Object(B.a)(Object(B.a)({},e.state.plant),{},Object(W.a)({},t.target.name,Object(B.a)(Object(B.a)({},e.state.plant[t.target.name]),{},{interval:t.target.value})))},(function(){e.updateAction(e.state.plant,a)}))},e.handleInput=function(t){e.setState({plant:Object(B.a)(Object(B.a)({},e.state.plant),{},Object(W.a)({},t.target.name,t.target.value))})},e}return Object(d.a)(a,[{key:"UNSAFE_componentWillReceiveProps",value:function(e){this.setState({plant:e.plant})}},{key:"render",value:function(){var e=this,t=this.state.plant;return l.a.createElement("div",{className:"plantFullDescription"},l.a.createElement("div",{className:"plantDescription"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"column first"},"Id:"),l.a.createElement("div",{className:this.props.isEditOn?"editedColumn":"column"},t.id)),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"column first"},"Name:"),l.a.createElement("div",{className:"column"},this.props.isEditOn?l.a.createElement("input",{type:"text",name:"name",value:t.name,onChange:this.handleInput}):l.a.createElement("div",null,t.name))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"column first"},"Next watering:"),l.a.createElement("div",{className:this.props.isEditOn?"editedColumn":"column"},z(t.watering.nextTimeProcessed).format("LLL"))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"column first"},"Next spraing:"),l.a.createElement("div",{className:this.props.isEditOn?"editedColumn":"column"},z(t.spraing.nextTimeProcessed).format("LLL"))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"column first"},"Next feeding:"),l.a.createElement("div",{className:this.props.isEditOn?"editedColumn":"column"},z(t.feeding.nextTimeProcessed).format("LLL"))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"column first"},"Place:"),l.a.createElement("div",{className:"column"},this.props.isEditOn?l.a.createElement("select",{value:t.place,name:"place",onChange:this.handleInput},l.a.createElement("option",{value:"livingRoom"},"Living room"),l.a.createElement("option",{value:"diningRoom"},"Dining room"),l.a.createElement("option",{value:"bedroom"},"Bedroom"),l.a.createElement("option",{value:"kitchen"},"Kitchen"),l.a.createElement("option",{value:"hall"},"Hall"),l.a.createElement("option",{value:"balcony"},"Balcony")):l.a.createElement("div",null,this.formatIntervalString(t.place))))),l.a.createElement("div",{className:"plantDescription"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"column first"},"Watering interval:"),l.a.createElement("div",{className:"column"},this.props.isEditOn?l.a.createElement("select",{className:"column",value:t.watering.interval,name:"watering",onChange:function(t){return e.handleIntervalSelect(t,"watering")}},l.a.createElement("option",{value:"everyday"},"Everyday"),l.a.createElement("option",{value:"onceAWeek"},"Once a week"),l.a.createElement("option",{value:"twiceAWeek"},"Twice a week"),l.a.createElement("option",{value:"threeTimesAWeek"},"Three times a week"),l.a.createElement("option",{value:"onceAMonth"},"Once a month")):l.a.createElement("div",{className:"column"},this.formatIntervalString(t.watering.interval)))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"column first"},"Last watering:"),l.a.createElement("div",{className:"column dateInputColumn"},this.props.isEditOn?l.a.createElement(M.a,{selected:Date.parse(t.watering.lastTimeProcessed),onChange:function(t){return e.handleProcessDateChange(t,"watering")},name:"watering",placeholderText:"Select date and time",maxDate:new Date,dateFormat:"MM/dd/yyyy hh:mm",showTimeSelect:!0,popperPlacement:"bottom",customInput:l.a.createElement(R,null)}):l.a.createElement("div",{className:"column"},z(t.watering.lastTimeProcessed).format("LLL")))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"column first"},"Spraing interval:"),l.a.createElement("div",{className:"column"},this.props.isEditOn?l.a.createElement("select",{className:"column",value:t.spraing.interval,name:"spraing",onChange:function(t){return e.handleIntervalSelect(t,"spraing")}},l.a.createElement("option",{value:"everyday"},"Everyday"),l.a.createElement("option",{value:"onceAWeek"},"Once a week"),l.a.createElement("option",{value:"twiceAWeek"},"Twice a week"),l.a.createElement("option",{value:"threeTimesAWeek"},"Three times a week"),l.a.createElement("option",{value:"onceAMonth"},"Once a month")):l.a.createElement("div",{className:"column"},this.formatIntervalString(t.spraing.interval)))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"column first"},"Last spraing:"),l.a.createElement("div",{className:"column"},this.props.isEditOn?l.a.createElement(M.a,{selected:Date.parse(t.spraing.lastTimeProcessed),onChange:function(t){return e.handleProcessDateChange(t,"spraing")},name:"spraing",placeholderText:"Select date and time",maxDate:new Date,dateFormat:"MM/dd/yyyy hh:mm",showTimeSelect:!0,popperPlacement:"bottom",customInput:l.a.createElement(R,null)}):l.a.createElement("div",{className:"column"},z(t.spraing.lastTimeProcessed).format("LLL")))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"column first"},"Feeding interval:"),l.a.createElement("div",{className:"column"},this.props.isEditOn?l.a.createElement("select",{className:"column",value:t.feeding.interval,name:"feeding",onChange:function(t){return e.handleIntervalSelect(t,"feeding")}},l.a.createElement("option",{value:"everyday"},"Everyday"),l.a.createElement("option",{value:"onceAWeek"},"Once a week"),l.a.createElement("option",{value:"twiceAWeek"},"Twice a week"),l.a.createElement("option",{value:"threeTimesAWeek"},"Three times a week"),l.a.createElement("option",{value:"onceAMonth"},"Once a month")):l.a.createElement("div",null,this.formatIntervalString(this.props.plant.feeding.interval)))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"column first"},"Last feeding:"),l.a.createElement("div",{className:"column"},this.props.isEditOn?l.a.createElement(M.a,{selected:Date.parse(t.feeding.lastTimeProcessed),onChange:function(t){return e.handleProcessDateChange(t,"feeding")},name:"feeding",placeholderText:"Select date and time",maxDate:new Date,dateFormat:"MM/dd/yyyy hh:mm",showTimeSelect:!0,popperPlacement:"bottom",customInput:l.a.createElement(R,null)}):l.a.createElement("div",{className:"column"},z(t.feeding.lastTimeProcessed).format("LLL")))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"column first"},"Notes:"),l.a.createElement("div",{className:"column"},this.props.isEditOn?l.a.createElement("textarea",{name:"notes",value:t.notes,onChange:this.handleInput}):l.a.createElement("div",{className:"column"},t.notes)))),l.a.createElement("div",null,this.props.isEditOn?l.a.createElement("div",{className:"buttonsContainer"},l.a.createElement("button",{className:"saveButton",onClick:function(){return e.props.submitUpdatedPlantForm(e.state.plant)}},l.a.createElement("img",{src:"/icons/floppy-disk.png",alt:""})),l.a.createElement("button",{className:"cancelButton",onClick:this.props.handleCancelButton},l.a.createElement("img",{src:"/icons/cancel.png",alt:""}))):l.a.createElement("div",{className:"buttonsContainer"},l.a.createElement("button",{className:"editButton",onClick:this.props.handleEditButton},l.a.createElement("img",{src:"/icons/edit-icon.png",alt:""})),l.a.createElement("button",{className:"deleteButton",onClick:this.props.handleDeleteButton},l.a.createElement("img",{src:"/icons/trash.png",alt:""})))))}}]),a}(l.a.Component),U=(a(214),function(e){Object(h.a)(a,e);var t=Object(E.a)(a);function a(){var e;Object(p.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={plantById:{},loaded:!1,redirectToHome:!1,isEditOn:!1},e.fetchPlant=function(){var t=e.props.match.params.plantid;i.a.get("plants/".concat(t),{headers:{Authorization:"Bearer ".concat(e.context.authTokens.access_token)}}).then((function(t){return e.setState({plantById:t.data,loaded:!0})})).catch((function(e){console.log(e)}))},e.handleEditButton=function(){e.setState({isEditOn:!0})},e.submitUpdatedPlantForm=function(t){i.a.put("plants/".concat(t.id),Object(B.a)({},t),{headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(e.context.authTokens.access_token)}}).then((function(t){return e.setState({isEditOn:!1})})).then((function(){return e.fetchPlant()})).catch((function(e){console.log(e)}))},e.handleCancelButton=function(){e.setState({isEditOn:!1})},e.handleDeleteButton=function(){i.a.delete("plants/".concat(e.state.plantById.id),{headers:{Authorization:"Bearer ".concat(e.context.authTokens.access_token)}}).then((function(e){return console.log("Plant deleted")})).then((function(t){return e.setState({redirectToHome:!0})})).catch((function(e){console.log(e)}))},e}return Object(d.a)(a,[{key:"componentDidMount",value:function(){this.fetchPlant()}},{key:"render",value:function(){var e=this;return this.state.redirectToHome?l.a.createElement(u.a,{to:"/"}):this.state.loaded?l.a.createElement("div",{className:"plantViewPageBody"},l.a.createElement(b,{fullDescriptionView:!0}),l.a.createElement(D,null),l.a.createElement(w,{plantId:this.state.plantById.id,fullDescriptionView:!0,plantProcessTriggered:function(){return e.fetchPlant()}}),l.a.createElement(_,{plant:this.state.plantById,isEditOn:this.state.isEditOn,handleEditButton:this.handleEditButton,handleDeleteButton:this.handleDeleteButton,handleCancelButton:this.handleCancelButton,submitUpdatedPlantForm:this.submitUpdatedPlantForm}),l.a.createElement(L,null)):null}}]),a}(l.a.Component));U.contextType=P;var V=U;a(215),a(216);var $=function(){return l.a.createElement("div",{className:"footer"},l.a.createElement("p",{className:"footer-name"}," \xa9 Szajos"))},J=a(247),K=a(246),Z=(a(217),a(218),a(73));function Y(e){return l.a.createElement(K.a,Object.assign({elevation:6,variant:"filled"},e))}var G=function(e){Object(h.a)(a,e);var t=Object(E.a)(a);function a(e){var n;return Object(p.a)(this,a),(n=t.call(this,e)).handleClick=function(){return n.setState({open:!0})},n.handleClose=function(e,t){"clickaway"!==t&&n.setState({open:!1})},n.defaultEmptyPlant=function(){return{name:"",wateringInterval:"",lastWatering:"",nextWatering:"",spraingInterval:"",lastSpraing:"",nextSpraing:"",feedingInterval:"",lastFeeding:"",nextFeeding:"",place:"",notes:""}},n.handleDateChange=function(e,t){e=Z(e).format(),n.setState({plant:Object(B.a)(Object(B.a)({},n.state.plant),{},Object(W.a)({},t,e))},(function(){return n.checkAction(n.state.plant)}))},n.handleInput=function(e){n.setState({plant:Object(B.a)(Object(B.a)({},n.state.plant),{},Object(W.a)({},e.target.name,e.target.value))},(function(){return n.checkAction(n.state.plant)}))},n.calculateNextAction=function(e,t){return Z(e).add(t[0],t[1]).format()},n.checkAction=function(e){if(e.lastWatering&&e.wateringInterval){var t=n.calculateNextAction(e.lastWatering,q.get(n.state.plant.wateringInterval));n.setState({plant:Object(B.a)(Object(B.a)({},n.state.plant),{},{nextWatering:t})})}if(e.lastSpraing&&e.spraingInterval){var a=n.calculateNextAction(e.lastSpraing,q.get(n.state.plant.spraingInterval));n.setState({plant:Object(B.a)(Object(B.a)({},n.state.plant),{},{nextSpraing:a})})}if(e.lastFeeding&&e.feedingInterval){var l=n.calculateNextAction(e.lastFeeding,q.get(n.state.plant.feedingInterval));n.setState({plant:Object(B.a)(Object(B.a)({},n.state.plant),{},{nextFeeding:l})})}},n.handleSubmit=function(e){e.preventDefault();var t=H.fromNewPlantForm(n.state.plant);i.a.post("".concat("http://10.10.10.14:3069","/plants"),Object(B.a)({},t),{headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(n.context.authTokens.access_token)}}).then((function(e){console.log(e),console.log(t)})).then((function(e){return n.setState({redirectToHome:!0})})).catch((function(e){n.handleClick(),console.log(e)}))},n.state={plant:e.plant?e.plant:n.defaultEmptyPlant(),redirectToHome:!1,open:!1},n}return Object(d.a)(a,[{key:"render",value:function(){var e=this,t=this.state.plant,a=this.state.open;return this.state.redirectToHome?l.a.createElement(u.a,{to:"/"}):l.a.createElement("div",{className:"newPlantFormPage"},l.a.createElement(J.a,{open:a,autoHideDuration:6e3,onClose:this.handleClose,anchorOrigin:{vertical:"top",horizontal:"center"}},l.a.createElement(Y,{onClose:this.handleClose,severity:"warning"},"Please fill all fields with * and submit.")),l.a.createElement("div",null,l.a.createElement("h1",null,"NEW PLANT FORM"),l.a.createElement("form",{className:"newPlantForm",onSubmit:this.handleSubmit},l.a.createElement("label",{className:"required-field"},"Name"),l.a.createElement("input",{type:"text",name:"name",value:t.name,onChange:this.handleInput}),l.a.createElement("label",{className:"required-field"},"Watering interval"),l.a.createElement("select",{value:t.wateringInterval,name:"wateringInterval",onChange:this.handleInput},l.a.createElement("option",{value:""},"Choose an option..."),l.a.createElement("option",{value:"everyday"},"Everyday"),l.a.createElement("option",{value:"onceAWeek"},"Once a week"),l.a.createElement("option",{value:"twiceAWeek"},"Twice a week"),l.a.createElement("option",{value:"threeTimesAWeek"},"Three times a week"),l.a.createElement("option",{value:"onceAMonth"},"Once a month")),l.a.createElement("label",{className:"required-field"},"Last watering"),l.a.createElement(M.a,{selected:Date.parse(this.state.plant.lastWatering),onChange:function(t){return e.handleDateChange(t,"lastWatering")},name:"lastWatering",placeholderText:"Select date and time",maxDate:new Date,dateFormat:"MM/dd/yyyy HH:mm",showTimeSelect:!0,popperPlacement:"bottom",customInput:l.a.createElement(R,{calendarIcon:"true"})}),l.a.createElement("label",null,"NextWatering"),l.a.createElement("p",null,this.state.plant.nextWatering),l.a.createElement("label",{className:"required-field"},"Spraing interval"),l.a.createElement("select",{value:t.spraingInterval,name:"spraingInterval",onChange:this.handleInput},l.a.createElement("option",{value:""},"Choose an option..."),l.a.createElement("option",{value:"everyday"},"Everyday"),l.a.createElement("option",{value:"onceAWeek"},"Once a week"),l.a.createElement("option",{value:"twiceAWeek"},"Twice a week"),l.a.createElement("option",{value:"threeTimesAWeek"},"Three times a week"),l.a.createElement("option",{value:"onceAMonth"},"Once a month")),l.a.createElement("label",{className:"required-field"},"Last spraing"),l.a.createElement(M.a,{selected:Date.parse(this.state.plant.lastSpraing),onChange:function(t){return e.handleDateChange(t,"lastSpraing")},name:"lastSpraing",placeholderText:"Select date and time",maxDate:new Date,dateFormat:"MM/dd/yyyy HH:mm",showTimeSelect:!0,popperPlacement:"bottom",customInput:l.a.createElement(R,{calendarIcon:"true"})}),l.a.createElement("label",null,"Next spraing"),l.a.createElement("p",null,this.state.plant.nextSpraing),l.a.createElement("label",{className:"required-field"},"Feeding interval"),l.a.createElement("select",{value:t.feedingInterval,name:"feedingInterval",onChange:this.handleInput},l.a.createElement("option",{value:""},"Choose an option..."),l.a.createElement("option",{value:"everyday"},"Everyday"),l.a.createElement("option",{value:"onceAWeek"},"Once a week"),l.a.createElement("option",{value:"twiceAWeek"},"Twice a week"),l.a.createElement("option",{value:"threeTimesAWeek"},"Three times a week"),l.a.createElement("option",{value:"onceAMonth"},"Once a month")),l.a.createElement("label",{className:"required-field"},"Last feeding"),l.a.createElement(M.a,{selected:Date.parse(this.state.plant.lastFeeding),onChange:function(t){return e.handleDateChange(t,"lastFeeding")},name:"lastFeeding",placeholderText:"Select date and time",maxDate:new Date,dateFormat:"MM/dd/yyyy HH:mm",showTimeSelect:!0,popperPlacement:"bottom",customInput:l.a.createElement(R,{calendarIcon:"true"})}),l.a.createElement("label",null,"Next feeding"),l.a.createElement("p",null,this.state.plant.nextFeeding),l.a.createElement("label",null,"Place"),l.a.createElement("select",{value:t.place,name:"place",onChange:this.handleInput},l.a.createElement("option",{value:""},"Choose a place.."),l.a.createElement("option",{value:"livingRoom"},"Living room"),l.a.createElement("option",{value:"diningRoom"},"Dining room"),l.a.createElement("option",{value:"bedroom"},"Bedroom"),l.a.createElement("option",{value:"kitchen"},"Kitchen"),l.a.createElement("option",{value:"hall"},"Hall"),l.a.createElement("option",{value:"balcony"},"Balcony")),l.a.createElement("label",null,"Notes"),l.a.createElement("textarea",{name:"notes",value:t.notes,onChange:this.handleInput,placeholder:"Put your notes here..."}),l.a.createElement("input",{type:"submit",value:"SUBMIT",className:"submit-button"}),l.a.createElement(L,null)),console.log(t)))}}]),a}(l.a.Component);G.contextType=P;var Q=G,X=(a(219),function(e){Object(h.a)(a,e);var t=Object(E.a)(a);function a(){var e;Object(p.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={filterByPlace:!1},e.handleClick=function(){e.setState({filterByPlace:!0})},e}return Object(d.a)(a,[{key:"render",value:function(){return this.state.filterByPlace?l.a.createElement(u.a,{to:{pathname:"/",state:{place:this.props.place,filterByPlace:!0}}}):l.a.createElement("button",{className:"findByPlaceTile",onClick:this.handleClick},l.a.createElement("img",{src:this.props.img,alt:""}),l.a.createElement("p",null,this.props.name))}}]),a}(l.a.Component)),ee=(a(220),function(e){Object(h.a)(a,e);var t=Object(E.a)(a);function a(){return Object(p.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"componentDidMount",value:function(){document.body.style.backgroundColor="#F2F2F2"}},{key:"componentWillUnmount",value:function(){document.body.style.backgroundColor=null}},{key:"render",value:function(){return l.a.createElement("div",{className:"findByPlacePage"},l.a.createElement("h1",null,"Choose a place to see all the plants living there..."),l.a.createElement("div",{className:"placeTiles--list"},l.a.createElement(X,{img:"/icons/armchair.png",name:"Living Room",place:"livingRoom"}),l.a.createElement(X,{img:"/icons/bed.png",name:"Bedroom",place:"bedroom"}),l.a.createElement(X,{img:"/icons/dinner.png",name:"Dining Room",place:"diningRoom"}),l.a.createElement(X,{img:"/icons/kitchen.png",name:"Kitchen",place:"kitchen"}),l.a.createElement(X,{img:"/icons/balcony.png",name:"Balcony",place:"balcony"}),l.a.createElement(X,{img:"/icons/hall.png",name:"Hall",place:"hall"})),l.a.createElement(L,null))}}]),a}(l.a.Component)),te=a(68);a(104);var ae=function(e){var t=Object(n.useState)(""),a=Object(s.a)(t,2),r=a[0],c=a[1],o=Object(n.useState)(""),i=Object(s.a)(o,2),u=i[0],p=i[1],d=Object(te.a)(),h=d.register,E=d.errors,v=d.handleSubmit;return l.a.createElement("div",{className:"authFormPage",style:{backgroundImage:"url(/plantsPhotos/homeJungle.jpg)"}},l.a.createElement(T,null),l.a.createElement("div",{className:"card"},l.a.createElement("div",{className:"logoImgContainer"},l.a.createElement("img",{alt:"",src:"/icons/user.png"})),l.a.createElement("form",{onSubmit:v((function(){return e.onSubmit(r,u)}))},l.a.createElement("input",{name:"email",type:"email",placeholder:"Email",onChange:function(e){c(e.target.value)},ref:h({required:!0,pattern:/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/})}),E.email&&"required"===E.email.type&&l.a.createElement("p",null,"Required"),E.email&&"pattern"===E.email.type&&l.a.createElement("p",null,"Please enter valid email address (e.g. plantswife@gmail.com)"),l.a.createElement("input",{name:"password",type:"password",placeholder:"Password",onChange:function(e){p(e.target.value)},ref:h({required:!0,pattern:/^(?=.*\d).{4,8}$/})}),E.password&&"required"===E.password.type&&l.a.createElement("p",null,"Required"),E.password&&"pattern"===E.password.type&&l.a.createElement("p",null,"Password must be between 4 and 8 digits long and include at least one numeric digit."),l.a.createElement("button",{type:"submit"},"Login")),l.a.createElement(m.b,{to:"/signUp"},"Don't have an account?")))};function ne(e){return l.a.createElement(K.a,Object.assign({elevation:6,variant:"filled"},e))}var le=function(e){var t,a=Object(n.useState)(!1),r=Object(s.a)(a,2),c=r[0],o=r[1],m=Object(n.useState)(!1),p=Object(s.a)(m,2),d=p[0],h=p[1],E=function(){h(!0)},v=function(e,t){"clickaway"!==t&&h(!1)},g=k().setAuthTokens,f=(null===(t=e.location.state)||void 0===t?void 0:t.referer)||"/";return c?l.a.createElement(u.a,{to:f}):l.a.createElement("div",null,l.a.createElement(J.a,{open:d,autoHideDuration:6e3,onClose:v,anchorOrigin:{vertical:"top",horizontal:"center"}},l.a.createElement(ne,{onClose:v,severity:"error"},"Email or password are incorrect! Try again.")),l.a.createElement(ae,{onSubmit:function(e,t){i.a.post("".concat("http://10.10.10.14:3069","/auth/login"),{email:e,password:t}).then((function(e){201===e.status?(g(e.data),o(!0),console.log(e.data)):E()})).catch((function(e){E()}))}}),l.a.createElement($,null))};var re=function(e){var t=Object(n.useState)(""),a=Object(s.a)(t,2),r=a[0],c=a[1],o=Object(n.useState)(""),i=Object(s.a)(o,2),u=i[0],p=i[1],d=Object(n.useState)(""),h=Object(s.a)(d,2),E=h[0],v=h[1],g=Object(te.a)(),f=g.register,b=g.getValues,w=g.errors,N=g.handleSubmit;return l.a.createElement("div",{className:"authFormPage",style:{backgroundImage:"url(/plantsPhotos/homeJungle.jpg)"}},l.a.createElement(T,null),l.a.createElement("div",{className:"card"},l.a.createElement("div",{className:"logoImgContainer"},l.a.createElement("img",{alt:"",src:"/icons/user.png"})),l.a.createElement("form",{onSubmit:N((function(){return e.onSubmit(r,u,E)}))},l.a.createElement("input",{name:"name",type:"text",placeholder:"Name",onChange:function(e){c(e.target.value)},ref:f({required:!0,minLength:4})}),w.name&&"required"===w.name.type&&l.a.createElement("p",null,"Required"),w.name&&"minLength"===w.name.type&&l.a.createElement("p",{role:"alert"},"Name must be min 4 digits long."),l.a.createElement("input",{name:"email",type:"email",placeholder:"Email",onChange:function(e){p(e.target.value)},ref:f({required:!0,pattern:/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/})}),w.email&&"required"===w.email.type&&l.a.createElement("p",null,"Required"),w.email&&"pattern"===w.email.type&&l.a.createElement("p",null,"Please enter valid email address (e.g. plantswife@gmail.com)"),l.a.createElement("input",{name:"password",type:"password",placeholder:"Password",onChange:function(e){v(e.target.value)},ref:f({required:!0,pattern:/^(?=.*\d).{4,8}$/})}),w.password&&"required"===w.password.type&&l.a.createElement("p",null,"Required"),w.password&&"pattern"===w.password.type&&l.a.createElement("p",null,"Password must be between 4 and 8 digits long and include at least one numeric digit."),l.a.createElement("input",{name:"repeatPassword",type:"password",placeholder:"Repeat password",ref:f({required:"Required",validate:function(e){return e===b().password||"Passwords don't match."}})}),w.repeatPassword&&l.a.createElement("p",null,w.repeatPassword.message),l.a.createElement("button",{type:"submit"},"Sign Up")),l.a.createElement(m.b,{to:"/login"},"Already have an account?")))};function ce(e){return l.a.createElement(K.a,Object.assign({elevation:6,variant:"filled"},e))}var oe=function(){var e=Object(n.useState)(!1),t=Object(s.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(!1),o=Object(s.a)(c,2),m=o[0],p=o[1],d=function(){p(!0)},h=function(e,t){"clickaway"!==t&&p(!1)},E=k().setAuthTokens;return a?l.a.createElement(u.a,{to:"/"}):l.a.createElement("div",null,l.a.createElement(J.a,{open:m,autoHideDuration:6e3,onClose:h,anchorOrigin:{vertical:"top",horizontal:"center"}},l.a.createElement(ce,{onClose:h,severity:"error"},"Email is already taken! Try with another email.")),l.a.createElement(re,{onSubmit:function(e,t,a){i.a.post("".concat("http://10.10.10.14:3069","/auth/register"),{name:e,email:t,password:a}).then((function(e){201===e.status?(E(e.data),r(!0)):d()})).catch((function(e){d()}))}}),l.a.createElement($,null))},ie=a(107);var se=function(e){var t=e.component,a=Object(ie.a)(e,["component"]),n=k().authTokens;return l.a.createElement(u.b,Object.assign({},a,{render:function(e){return n?l.a.createElement(t,e):l.a.createElement(u.a,{to:{pathname:"/login",state:{referer:e.location}}})}}))};var me=function(e){var t=JSON.parse(localStorage.getItem("tokens")),a=Object(n.useState)(t),r=Object(s.a)(a,2),c=r[0],o=r[1];return l.a.createElement("div",{className:"App"},l.a.createElement(P.Provider,{value:{authTokens:c,setAuthTokens:function(e){e?localStorage.setItem("tokens",JSON.stringify(e)):localStorage.clear(),o(e)}}},l.a.createElement(m.a,null,l.a.createElement(u.d,null,l.a.createElement(u.b,{exact:!0,path:"/login",component:le}),l.a.createElement(u.b,{exact:!0,path:"/signUp",component:oe}),l.a.createElement(se,{exact:!0,path:"/createNewPlant",component:Q}),l.a.createElement(se,{exact:!0,path:"/filterByPlace",component:ee}),l.a.createElement(se,{exact:!0,path:"/plantViewPage/:plantid",component:V}),l.a.createElement(se,{exact:!0,path:"/",component:A})))),l.a.createElement($,null))};i.a.defaults.baseURL="http://10.10.10.14:3069",c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(me,null)),document.getElementById("root"))},72:function(e,t,a){}},[[113,1,2]]]);
//# sourceMappingURL=main.9b128658.chunk.js.map