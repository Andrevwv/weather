(function(t){function e(e){for(var n,s,c=e[0],o=e[1],u=e[2],l=0,d=[];l<c.length;l++)s=c[l],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&d.push(r[s][0]),r[s]=0;for(n in o)Object.prototype.hasOwnProperty.call(o,n)&&(t[n]=o[n]);f&&f(e);while(d.length)d.shift()();return a.push.apply(a,u||[]),i()}function i(){for(var t,e=0;e<a.length;e++){for(var i=a[e],n=!0,c=1;c<i.length;c++){var o=i[c];0!==r[o]&&(n=!1)}n&&(a.splice(e--,1),t=s(s.s=i[0]))}return t}var n={},r={app:0},a=[];function s(e){if(n[e])return n[e].exports;var i=n[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,s),i.l=!0,i.exports}s.m=t,s.c=n,s.d=function(t,e,i){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(s.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(i,n,function(e){return t[e]}.bind(null,n));return i},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/<weather>/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],o=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var f=o;a.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},"064b":function(t,e,i){},"18a3":function(t,e,i){"use strict";var n=i("3769"),r=i.n(n);r.a},3769:function(t,e,i){},"42b4":function(t,e,i){"use strict";var n=i("d106"),r=i.n(n);r.a},"49a6":function(t,e,i){},"56cc":function(t,e,i){},"56d7":function(t,e,i){"use strict";i.r(e);i("cadf"),i("551c"),i("f751"),i("097d");var n=i("2b0e"),r=i("bc3a"),a=i.n(r),s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("router-view")],1)},c=[],o=(i("8e6e"),i("6b54"),i("96cf"),i("3b8d")),u=i("bd86"),f=(i("ac6a"),i("456d"),i("2f62")),l="10d07494e770c41f4af2a455d92ee8f5",d={APPID:l,units:"metric",lang:"en"};function p(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),i.push.apply(i,n)}return i}function _(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?p(i,!0).forEach(function(e){Object(u["a"])(t,e,i[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):p(i).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))})}return t}var v={created:function(){Object.keys(this.GET_CITIES).length&&this.getWeather(Object.keys(this.GET_CITIES))},computed:_({},Object(f["c"])(["GET_CITIES"])),methods:_({},Object(f["b"])(["UPDATE_CITIES","ADD_CITY"]),{getWeather:function(){var t=Object(o["a"])(regeneratorRuntime.mark(function t(e){var i=this;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:this.$http.get("/group",{params:_({},d,{id:e.toString()})}).then(function(t){i.UPDATE_CITIES(t.data.list)}).catch(function(t){console.log(t)});case 1:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}()})},y=v,m=(i("cf25"),i("2877")),g=Object(m["a"])(y,s,c,!1,null,null,null),h=g.exports,b=i("8c4f"),O=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"weather"},[i("search"),Object.keys(t.GET_CITIES).length?i("div",{staticClass:"weather__cities"},t._l(t.GET_CITIES,function(t){return i("city-card",{key:t.id,attrs:{id:t.id,name:t.name,temperature:t.main.temp,weather:t.weather[0].main}})}),1):i("div",{staticClass:"weather__placeholder"},[i("h1",[t._v("No cities added")]),i("p",[t._v("Please enter city name and press 'Add'")])])],1)},C=[],w=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"search"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.city,expression:"city"}],ref:"input",staticClass:"search__input",attrs:{type:"text",placeholder:"Type city name here"},domProps:{value:t.city},on:{input:function(e){e.target.composing||(t.city=e.target.value)}}}),i("button",{staticClass:"search__add",attrs:{disabled:!t.isCityFinded},on:{click:function(e){return t.ADD_CITY(t.currentCityInfo)}}},[t._v("Add")]),i("div",{directives:[{name:"show",rawName:"v-show",value:t.city&&!t.isCityFinded,expression:"city && !isCityFinded"}],staticClass:"search__meassage"},[t._v("City with such name not found")])])},j=[];function P(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),i.push.apply(i,n)}return i}function E(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?P(i,!0).forEach(function(e){Object(u["a"])(t,e,i[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):P(i).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))})}return t}var D={name:"search",data:function(t){return{city:"",currentCityInfo:null,isCityFinded:!1}},mounted:function(){this.$refs.input.focus()},methods:E({},Object(f["b"])(["ADD_CITY"]),{getWeather:function(){var t=Object(o["a"])(regeneratorRuntime.mark(function t(e){var i=this;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:this.$http.get("/weather",{params:E({},d,{q:e})}).then(function(t){i.isCityFinded=!0,i.currentCityInfo=t.data}).catch(function(t){i.isCityFinded=!1,i.currentCityInfo=null,console.log(t)});case 1:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}()}),watch:{city:function(t){this.getWeather(t)}}},I=D,T=(i("944a"),Object(m["a"])(I,w,j,!1,null,"aeff5d6c",null)),S=T.exports,M=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("router-link",{staticClass:"city",style:t.getStyle(),attrs:{to:"/"+t.id}},[i("div",{staticClass:"city__remove",on:{click:function(e){return e.preventDefault(),t.REMOVE_CITY(t.id)}}}),i("img",{staticClass:"city__image",attrs:{src:"/images/"+t.weather+".svg",alt:"weather image"}}),i("div",{staticClass:"city__temerature"},[t._v(t._s(Math.round(t.temperature))+"℃")]),i("div",{staticClass:"city__name"},[t._v(t._s(t.name))])])},k=[];i("c5f6");function x(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),i.push.apply(i,n)}return i}function A(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?x(i,!0).forEach(function(e){Object(u["a"])(t,e,i[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):x(i).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))})}return t}var F={props:{id:Number,name:String,temperature:Number,weather:String},methods:A({},Object(f["b"])(["REMOVE_CITY"]),{getStyle:function(){var t=["#FD9207","#FDBE07","#1E22B0","#0E65A2","#FD4607","#A405A4","#05B05E","#049F8A","#05B05E"],e=["#FEAD45","#FECF45","#5155D8","#4296D1","#FE7445","#D239D2","#3AD88C","#38CFBA","#3AD88C"],i=Math.floor(Math.random()*t.length);return{background:"linear-gradient(to right bottom, ".concat(e[i],", ").concat(t[i],")"),boxShadow:"0px 25px 21px -15px ".concat(e[i])}}}),computed:{}},$=F,Y=(i("b693"),Object(m["a"])($,M,k,!1,null,"0052bcd2",null)),G=Y.exports;function R(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),i.push.apply(i,n)}return i}function H(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?R(i,!0).forEach(function(e){Object(u["a"])(t,e,i[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):R(i).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))})}return t}var W={components:{Search:S,CityCard:G},computed:H({},Object(f["c"])(["GET_CITIES"]))},U=W,B=(i("42b4"),Object(m["a"])(U,O,C,!1,null,"3e209b72",null)),L=B.exports,N=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"city__wrapper"},[t.city?i("div",{staticClass:"city"},[i("a",{staticClass:"city__back",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.$router.go(-1)}}},[t._v("Go back")]),i("div",{staticClass:"city__name"},[t._v(t._s(t.city.name))]),i("div",{staticClass:"city__current-weather"},[i("div",{staticClass:"city__main"},[i("img",{staticClass:"city__image",attrs:{src:"/images/"+t.city.weather[0].main+".svg",alt:""}}),i("div",{staticClass:"city__temp"},[t._v(t._s(Math.round(t.city.main.temp))+" °C")])]),i("div",{staticClass:"city__additional"},[i("div",{staticClass:"city__info info"},[i("div",{staticClass:"info__heading"},[t._v("Humidity")]),i("div",{staticClass:"info__container"},[i("img",{staticClass:"info__image",attrs:{src:"/images/Humidity.svg"}}),i("div",{staticClass:"info__value"},[t._v(t._s(t.city.main.humidity)+" %")])])]),i("div",{staticClass:"city__info info"},[i("div",{staticClass:"info__heading"},[t._v("Pressure")]),i("div",{staticClass:"info__container"},[i("img",{staticClass:"info__image",attrs:{src:"/images/Pressure.svg"}}),i("div",{staticClass:"info__value"},[t._v(t._s(Math.round(t.city.main.pressure))+" hPa")])])]),i("div",{staticClass:"city__info info"},[i("div",{staticClass:"info__heading"},[t._v("Max. temp.")]),i("div",{staticClass:"info__container"},[i("img",{staticClass:"info__image",attrs:{src:"/images/Max.svg"}}),i("div",{staticClass:"info__value"},[t._v(t._s(Math.round(t.city.main.temp_max))+" °C")])])]),i("div",{staticClass:"city__info info"},[i("div",{staticClass:"info__heading"},[t._v("Min. temp.")]),i("div",{staticClass:"info__container"},[i("img",{staticClass:"info__image",attrs:{src:"/images/Min.svg"}}),i("div",{staticClass:"info__value"},[t._v(t._s(Math.round(t.city.main.temp_min))+" °C")])])]),i("div",{staticClass:"city__info info"},[i("div",{staticClass:"info__heading"},[t._v("Wind speed")]),i("div",{staticClass:"info__container"},[i("img",{staticClass:"info__image",attrs:{src:"/images/Wind.svg"}}),i("div",{staticClass:"info__value"},[t._v(t._s(t.city.wind.speed)+" m/s")])])]),i("div",{staticClass:"city__info info"},[i("div",{staticClass:"info__heading"},[t._v("Sunrise")]),i("div",{staticClass:"info__container"},[i("img",{staticClass:"info__image",attrs:{src:"/images/sunrise.svg"}}),i("div",{staticClass:"info__value"},[t._v(t._s(t.sunrise))])])]),i("div",{staticClass:"city__info info"},[i("div",{staticClass:"info__heading"},[t._v("Sunset")]),i("div",{staticClass:"info__container"},[i("img",{staticClass:"info__image",attrs:{src:"/images/sunset.svg"}}),i("div",{staticClass:"info__value"},[t._v(t._s(t.sunset))])])])])]),t.isForecastLoaded?i("div",{staticClass:"city__forecast-weather"},t._l(t.forecast,function(t){return i("forecast-day",{key:t.id,attrs:{"day-info":t}})}),1):i("div",{staticClass:"city__forecast-loading"},[t._v("Loading forecast ...")])]):i("div",[t._v("\n    Such city was not found. Go\n    "),i("router-link",{attrs:{to:"/"}},[t._v("HOME")])],1)])},V=[],J=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"day"},[i("img",{staticClass:"day__image",attrs:{src:"/images/"+t.dayInfo.weather[0].main+".svg",alt:"weather icon"}}),i("div",{staticClass:"day__time"},[t._v(t._s(t.time))]),i("div",{staticClass:"day__temp"},[t._v(t._s(Math.round(t.dayInfo.main.temp))+" °C")]),i("div",{staticClass:"day__info info"},[i("img",{staticClass:"info__image",attrs:{src:"/images/Humidity.svg"}}),t._v("\n    "+t._s(t.dayInfo.main.humidity)+" %\n  ")]),i("div",{staticClass:"day__info info"},[i("img",{staticClass:"info__image",attrs:{src:"/images/Pressure.svg"}}),t._v("\n    "+t._s(Math.round(t.dayInfo.main.pressure))+" hPa\n  ")]),i("div",{staticClass:"day__info info"},[i("img",{staticClass:"info__image",attrs:{src:"/images/Wind.svg"}}),t._v("\n    "+t._s(t.dayInfo.wind.speed)+" m/s\n  ")])])},q=[],z={props:{dayInfo:Object},computed:{time:function(){var t=new Date(1e3*this.dayInfo.dt),e=("0"+t.getHours()).slice(-2),i=("0"+t.getMinutes()).slice(-2);return"".concat(e,":").concat(i)}}},K=z,Q=(i("18a3"),Object(m["a"])(K,J,q,!1,null,"1e220326",null)),X=Q.exports;function Z(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),i.push.apply(i,n)}return i}function tt(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?Z(i,!0).forEach(function(e){Object(u["a"])(t,e,i[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):Z(i).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))})}return t}var et={components:{ForecastDay:X},data:function(t){return{forecast:[],isForecastLoaded:!1}},created:function(){this.getForecast(this.$route.params.id)},computed:{city:function(){return console.log(this.$store.getters.GET_CITY(this.$route.params.id)),this.$store.getters.GET_CITY(this.$route.params.id)},sunrise:function(){var t=new Date(1e3*this.city.sys.sunrise),e=("0"+t.getHours()).slice(-2),i=("0"+t.getMinutes()).slice(-2);return"".concat(e,":").concat(i)},sunset:function(){var t=new Date(1e3*this.city.sys.sunset),e=("0"+t.getHours()).slice(-2),i=("0"+t.getMinutes()).slice(-2);return"".concat(e,":").concat(i)}},methods:{getForecast:function(t){var e=this;this.$http.get("/forecast",{params:tt({},d,{id:t})}).then(function(t){e.isForecastLoaded=!0,e.forecast=t.data.list.slice(0,8)}).catch(function(t){console.log(t)})}}},it=et,nt=(i("97f2"),Object(m["a"])(it,N,V,!1,null,"6f87377b",null)),rt=nt.exports;n["a"].use(b["a"]);var at=new b["a"]({mode:"history",base:"/<weather>/",routes:[{path:"/",name:"home",component:L},{path:"/:id",component:rt}]}),st=i("bfa9");function ct(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),i.push.apply(i,n)}return i}function ot(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?ct(i,!0).forEach(function(e){Object(u["a"])(t,e,i[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):ct(i).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))})}return t}var ut=new st["a"]({key:"weather",storage:window.localStorage});n["a"].use(f["a"]);var ft=new f["a"].Store({state:{cities:{}},getters:{GET_CITIES:function(t){return t.cities},GET_CITY:function(t){return function(e){return t.cities[e]}}},mutations:{ADD_CITY:function(t,e){console.log(e),t.cities=ot({},t.cities,Object(u["a"])({},e.id,e))},REMOVE_CITY:function(t,e){delete t.cities[e],t.cities=ot({},t.cities)},UPDATE_CITIES:function(t,e){e.forEach(function(e){console.log(e),t.cities[e.id]=e})}},actions:{ADD_CITY:function(t,e){e&&(console.log(e),t.commit("ADD_CITY",e))},REMOVE_CITY:function(t,e){t.commit("REMOVE_CITY",e)},UPDATE_CITIES:function(t,e){t.commit("UPDATE_CITIES",e)}},plugins:[ut.plugin]});n["a"].config.productionTip=!1;var lt=a.a.create({baseURL:"https://api.openweathermap.org/data/2.5"});n["a"].prototype.$http=lt,new n["a"]({router:at,store:ft,render:function(t){return t(h)}}).$mount("#app")},"944a":function(t,e,i){"use strict";var n=i("064b"),r=i.n(n);r.a},"97f2":function(t,e,i){"use strict";var n=i("49a6"),r=i.n(n);r.a},b693:function(t,e,i){"use strict";var n=i("dd1b"),r=i.n(n);r.a},cf25:function(t,e,i){"use strict";var n=i("56cc"),r=i.n(n);r.a},d106:function(t,e,i){},dd1b:function(t,e,i){}});
//# sourceMappingURL=app.ea90be76.js.map