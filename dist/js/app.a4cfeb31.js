(function(t){function e(e){for(var i,a,c=e[0],o=e[1],u=e[2],d=0,l=[];d<c.length;d++)a=c[d],Object.prototype.hasOwnProperty.call(s,a)&&s[a]&&l.push(s[a][0]),s[a]=0;for(i in o)Object.prototype.hasOwnProperty.call(o,i)&&(t[i]=o[i]);f&&f(e);while(l.length)l.shift()();return r.push.apply(r,u||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],i=!0,c=1;c<n.length;c++){var o=n[c];0!==s[o]&&(i=!1)}i&&(r.splice(e--,1),t=a(a.s=n[0]))}return t}var i={},s={app:0},r=[];function a(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=i,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)a.d(n,i,function(e){return t[e]}.bind(null,i));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/weather/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],o=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var f=o;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"004f":function(t,e,n){t.exports=n.p+"img/Rain.5ee170bc.svg"},"04aa":function(t,e,n){t.exports=n.p+"img/Snow.20df6662.svg"},"064b":function(t,e,n){},"08bd":function(t,e,n){t.exports=n.p+"img/sunset.d75c13fc.svg"},"18a3":function(t,e,n){"use strict";var i=n("3769"),s=n.n(i);s.a},"1ba1":function(t,e,n){t.exports=n.p+"img/broken clouds.19461b5b.svg"},"1c90":function(t,e,n){t.exports=n.p+"img/021-rain.4ce8407e.svg"},2441:function(t,e,n){t.exports=n.p+"img/Pressure.0e142d37.svg"},3769:function(t,e,n){},"3f2c":function(t,e,n){t.exports=n.p+"img/021-snowing.5f390dc4.svg"},"407d":function(t,e,n){t.exports=n.p+"img/021-cloudy.f105593b.svg"},"42b4":function(t,e,n){"use strict";var i=n("d106"),s=n.n(i);s.a},"4a5a":function(t,e,n){},"56cc":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var i=n("2b0e"),s=n("bc3a"),r=n.n(s),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},c=[],o=(n("8e6e"),n("6b54"),n("96cf"),n("3b8d")),u=n("bd86"),f=(n("ac6a"),n("456d"),n("2f62")),d="10d07494e770c41f4af2a455d92ee8f5",l={APPID:d,units:"metric",lang:"en"};function p(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,i)}return n}function g(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?p(n,!0).forEach(function(e){Object(u["a"])(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):p(n).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}var v={created:function(){Object.keys(this.GET_CITIES).length&&this.getWeather(Object.keys(this.GET_CITIES))},computed:g({},Object(f["c"])(["GET_CITIES"])),methods:g({},Object(f["b"])(["UPDATE_CITIES","ADD_CITY"]),{getWeather:function(){var t=Object(o["a"])(regeneratorRuntime.mark(function t(e){var n=this;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:this.$http.get("/group",{params:g({},l,{id:e.toString()})}).then(function(t){n.UPDATE_CITIES(t.data.list)}).catch(function(t){console.log(t)});case 1:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}()})},_=v,m=(n("cf25"),n("2877")),y=Object(m["a"])(_,a,c,!1,null,null,null),b=y.exports,h=n("8c4f"),O=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"weather"},[n("search"),Object.keys(t.GET_CITIES).length?n("div",{staticClass:"weather__cities"},t._l(t.GET_CITIES,function(t){return n("city-card",{key:t.id,attrs:{id:t.id,name:t.name,temperature:t.main.temp,weather:t.weather[0].main}})}),1):n("div",{staticClass:"weather__placeholder"},[n("h1",[t._v("No cities added")]),n("p",[t._v("Please enter city name and press 'Add'")])])],1)},C=[],w=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"search"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.city,expression:"city"}],ref:"input",staticClass:"search__input",attrs:{type:"text",placeholder:"Type city name here"},domProps:{value:t.city},on:{input:function(e){e.target.composing||(t.city=e.target.value)}}}),n("button",{staticClass:"search__add",attrs:{disabled:!t.isCityFinded},on:{click:function(e){return t.ADD_CITY(t.currentCityInfo)}}},[t._v("Add")]),n("div",{directives:[{name:"show",rawName:"v-show",value:t.city&&!t.isCityFinded,expression:"city && !isCityFinded"}],staticClass:"search__meassage"},[t._v("City with such name not found")])])},j=[];function P(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,i)}return n}function E(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?P(n,!0).forEach(function(e){Object(u["a"])(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):P(n).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}var D={name:"search",data:function(t){return{city:"",currentCityInfo:null,isCityFinded:!1}},mounted:function(){this.$refs.input.focus()},methods:E({},Object(f["b"])(["ADD_CITY"]),{getWeather:function(){var t=Object(o["a"])(regeneratorRuntime.mark(function t(e){var n=this;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:this.$http.get("/weather",{params:E({},l,{q:e})}).then(function(t){n.isCityFinded=!0,n.currentCityInfo=t.data}).catch(function(t){n.isCityFinded=!1,n.currentCityInfo=null,console.log(t)});case 1:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}()}),watch:{city:function(t){this.getWeather(t)}}},x=D,I=(n("944a"),Object(m["a"])(x,w,j,!1,null,"aeff5d6c",null)),T=I.exports,S=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("router-link",{staticClass:"city",style:t.getStyle(),attrs:{to:"/"+t.id}},[n("div",{staticClass:"city__remove",on:{click:function(e){return e.preventDefault(),t.REMOVE_CITY(t.id)}}}),n("img",{staticClass:"city__image",attrs:{src:"/images/"+t.weather+".svg",alt:"weather image"}}),n("div",{staticClass:"city__temerature"},[t._v(t._s(Math.round(t.temperature))+"℃")]),n("div",{staticClass:"city__name"},[t._v(t._s(t.name))])])},M=[];n("c5f6");function k(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,i)}return n}function A(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?k(n,!0).forEach(function(e){Object(u["a"])(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):k(n).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}var F={props:{id:Number,name:String,temperature:Number,weather:String},methods:A({},Object(f["b"])(["REMOVE_CITY"]),{getStyle:function(){var t=["#FD9207","#FDBE07","#1E22B0","#0E65A2","#FD4607","#A405A4","#05B05E","#049F8A","#05B05E"],e=["#FEAD45","#FECF45","#5155D8","#4296D1","#FE7445","#D239D2","#3AD88C","#38CFBA","#3AD88C"],n=Math.floor(Math.random()*t.length);return{background:"linear-gradient(to right bottom, ".concat(e[n],", ").concat(t[n],")"),boxShadow:"0px 25px 21px -15px ".concat(e[n])}}}),computed:{}},$=F,Y=(n("b693"),Object(m["a"])($,S,M,!1,null,"0052bcd2",null)),G=Y.exports;function R(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,i)}return n}function H(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?R(n,!0).forEach(function(e){Object(u["a"])(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):R(n).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}var W={components:{Search:T,CityCard:G},computed:H({},Object(f["c"])(["GET_CITIES"]))},U=W,N=(n("42b4"),Object(m["a"])(U,O,C,!1,null,"3e209b72",null)),L=N.exports,B=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"city__wrapper"},[t.city?i("div",{staticClass:"city"},[i("a",{staticClass:"city__back",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.$router.go(-1)}}},[t._v("Go back")]),i("div",{staticClass:"city__name"},[t._v(t._s(t.city.name))]),i("div",{staticClass:"city__current-weather"},[i("div",{staticClass:"city__main"},[i("img",{staticClass:"city__image",attrs:{src:n("f57b")("./"+t.city.weather[0].main+".svg"),alt:""}}),i("div",{staticClass:"city__temp"},[t._v(t._s(Math.round(t.city.main.temp))+" °C")])]),i("div",{staticClass:"city__additional"},[i("div",{staticClass:"city__info info"},[i("div",{staticClass:"info__heading"},[t._v("Humidity")]),i("div",{staticClass:"info__container"},[i("img",{staticClass:"info__image",attrs:{src:"/images/Humidity.svg"}}),i("div",{staticClass:"info__value"},[t._v(t._s(t.city.main.humidity)+" %")])])]),i("div",{staticClass:"city__info info"},[i("div",{staticClass:"info__heading"},[t._v("Pressure")]),i("div",{staticClass:"info__container"},[i("img",{staticClass:"info__image",attrs:{src:"/images/Pressure.svg"}}),i("div",{staticClass:"info__value"},[t._v(t._s(Math.round(t.city.main.pressure))+" hPa")])])]),i("div",{staticClass:"city__info info"},[i("div",{staticClass:"info__heading"},[t._v("Max. temp.")]),i("div",{staticClass:"info__container"},[i("img",{staticClass:"info__image",attrs:{src:"/images/Max.svg"}}),i("div",{staticClass:"info__value"},[t._v(t._s(Math.round(t.city.main.temp_max))+" °C")])])]),i("div",{staticClass:"city__info info"},[i("div",{staticClass:"info__heading"},[t._v("Min. temp.")]),i("div",{staticClass:"info__container"},[i("img",{staticClass:"info__image",attrs:{src:"/images/Min.svg"}}),i("div",{staticClass:"info__value"},[t._v(t._s(Math.round(t.city.main.temp_min))+" °C")])])]),i("div",{staticClass:"city__info info"},[i("div",{staticClass:"info__heading"},[t._v("Wind speed")]),i("div",{staticClass:"info__container"},[i("img",{staticClass:"info__image",attrs:{src:"/images/Wind.svg"}}),i("div",{staticClass:"info__value"},[t._v(t._s(t.city.wind.speed)+" m/s")])])]),i("div",{staticClass:"city__info info"},[i("div",{staticClass:"info__heading"},[t._v("Sunrise")]),i("div",{staticClass:"info__container"},[i("img",{staticClass:"info__image",attrs:{src:"/images/sunrise.svg"}}),i("div",{staticClass:"info__value"},[t._v(t._s(t.sunrise))])])]),i("div",{staticClass:"city__info info"},[i("div",{staticClass:"info__heading"},[t._v("Sunset")]),i("div",{staticClass:"info__container"},[i("img",{staticClass:"info__image",attrs:{src:"/images/sunset.svg"}}),i("div",{staticClass:"info__value"},[t._v(t._s(t.sunset))])])])])]),t.isForecastLoaded?i("div",{staticClass:"city__forecast-weather"},t._l(t.forecast,function(t){return i("forecast-day",{key:t.id,attrs:{"day-info":t}})}),1):i("div",{staticClass:"city__forecast-loading"},[t._v("Loading forecast ...")])]):i("div",[t._v("\n    Such city was not found. Go\n    "),i("router-link",{attrs:{to:"/"}},[t._v("HOME")])],1)])},V=[],z=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"day"},[n("img",{staticClass:"day__image",attrs:{src:"/images/"+t.dayInfo.weather[0].main+".svg",alt:"weather icon"}}),n("div",{staticClass:"day__time"},[t._v(t._s(t.time))]),n("div",{staticClass:"day__temp"},[t._v(t._s(Math.round(t.dayInfo.main.temp))+" °C")]),n("div",{staticClass:"day__info info"},[n("img",{staticClass:"info__image",attrs:{src:"/images/Humidity.svg"}}),t._v("\n    "+t._s(t.dayInfo.main.humidity)+" %\n  ")]),n("div",{staticClass:"day__info info"},[n("img",{staticClass:"info__image",attrs:{src:"/images/Pressure.svg"}}),t._v("\n    "+t._s(Math.round(t.dayInfo.main.pressure))+" hPa\n  ")]),n("div",{staticClass:"day__info info"},[n("img",{staticClass:"info__image",attrs:{src:"/images/Wind.svg"}}),t._v("\n    "+t._s(t.dayInfo.wind.speed)+" m/s\n  ")])])},J=[],q={props:{dayInfo:Object},computed:{time:function(){var t=new Date(1e3*this.dayInfo.dt),e=("0"+t.getHours()).slice(-2),n=("0"+t.getMinutes()).slice(-2);return"".concat(e,":").concat(n)}}},K=q,Q=(n("18a3"),Object(m["a"])(K,z,J,!1,null,"1e220326",null)),X=Q.exports;function Z(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,i)}return n}function tt(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?Z(n,!0).forEach(function(e){Object(u["a"])(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Z(n).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}var et={components:{ForecastDay:X},data:function(t){return{forecast:[],isForecastLoaded:!1}},created:function(){this.getForecast(this.$route.params.id)},computed:{city:function(){return console.log(this.$store.getters.GET_CITY(this.$route.params.id)),this.$store.getters.GET_CITY(this.$route.params.id)},sunrise:function(){var t=new Date(1e3*this.city.sys.sunrise),e=("0"+t.getHours()).slice(-2),n=("0"+t.getMinutes()).slice(-2);return"".concat(e,":").concat(n)},sunset:function(){var t=new Date(1e3*this.city.sys.sunset),e=("0"+t.getHours()).slice(-2),n=("0"+t.getMinutes()).slice(-2);return"".concat(e,":").concat(n)}},methods:{getForecast:function(t){var e=this;this.$http.get("/forecast",{params:tt({},l,{id:t})}).then(function(t){e.isForecastLoaded=!0,e.forecast=t.data.list.slice(0,8)}).catch(function(t){console.log(t)})}}},nt=et,it=(n("f957"),Object(m["a"])(nt,B,V,!1,null,"617e9e77",null)),st=it.exports;i["a"].use(h["a"]);var rt=new h["a"]({mode:"history",base:"/weather/",routes:[{path:"/",name:"home",component:L},{path:"/:id",component:st}]}),at=n("bfa9");function ct(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,i)}return n}function ot(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?ct(n,!0).forEach(function(e){Object(u["a"])(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):ct(n).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}var ut=new at["a"]({key:"weather",storage:window.localStorage});i["a"].use(f["a"]);var ft=new f["a"].Store({state:{cities:{}},getters:{GET_CITIES:function(t){return t.cities},GET_CITY:function(t){return function(e){return t.cities[e]}}},mutations:{ADD_CITY:function(t,e){console.log(e),t.cities=ot({},t.cities,Object(u["a"])({},e.id,e))},REMOVE_CITY:function(t,e){delete t.cities[e],t.cities=ot({},t.cities)},UPDATE_CITIES:function(t,e){e.forEach(function(e){console.log(e),t.cities[e.id]=e})}},actions:{ADD_CITY:function(t,e){e&&(console.log(e),t.commit("ADD_CITY",e))},REMOVE_CITY:function(t,e){t.commit("REMOVE_CITY",e)},UPDATE_CITIES:function(t,e){t.commit("UPDATE_CITIES",e)}},plugins:[ut.plugin]});i["a"].config.productionTip=!1;var dt=r.a.create({baseURL:"https://api.openweathermap.org/data/2.5"});i["a"].prototype.$http=dt,new i["a"]({router:rt,store:ft,render:function(t){return t(b)}}).$mount("#app")},"62d0":function(t,e,n){t.exports=n.p+"img/Min.940c7545.svg"},"634b":function(t,e,n){t.exports=n.p+"img/sunrise.41a7ecb7.svg"},"634c":function(t,e,n){t.exports=n.p+"img/Clear.ef790a4b.svg"},6849:function(t,e,n){t.exports=n.p+"img/021-sunset.f814b969.svg"},"6c17":function(t,e,n){t.exports=n.p+"img/Mist.60710c9b.svg"},"6fe6":function(t,e,n){t.exports=n.p+"img/021-snowflake.e99cb206.svg"},"7b1d":function(t,e,n){t.exports=n.p+"img/Max.4f7d4d54.svg"},"7cdc":function(t,e,n){t.exports=n.p+"img/Humidity.f90d4bd3.svg"},"801f":function(t,e,n){t.exports=n.p+"img/Drizzle.23e71edd.svg"},8295:function(t,e,n){t.exports=n.p+"img/scattered clouds.7ee70f9f.svg"},"920b":function(t,e,n){t.exports=n.p+"img/021-winter.19c88f05.svg"},"944a":function(t,e,n){"use strict";var i=n("064b"),s=n.n(i);s.a},"9b85":function(t,e,n){t.exports=n.p+"img/021-cloud.cb7f1d95.svg"},"9cad":function(t,e,n){t.exports=n.p+"img/021-snowing-2.fb889be0.svg"},b693:function(t,e,n){"use strict";var i=n("dd1b"),s=n.n(i);s.a},b78e:function(t,e,n){t.exports=n.p+"img/Clouds.cfb1e955.svg"},bf7d:function(t,e,n){t.exports=n.p+"img/021-sunrise.bebb286b.svg"},cc35:function(t,e,n){t.exports=n.p+"img/Tornado.f511bc84.svg"},cf25:function(t,e,n){"use strict";var i=n("56cc"),s=n.n(i);s.a},d106:function(t,e,n){},d3f5:function(t,e,n){t.exports=n.p+"img/Wind.fc46147e.svg"},dd1b:function(t,e,n){},de18:function(t,e,n){t.exports=n.p+"img/021-snowing-1.5831cc74.svg"},de50:function(t,e,n){t.exports=n.p+"img/Thunderstorm.4b969a4c.svg"},e9d8:function(t,e,n){t.exports=n.p+"img/021-night.91f59dfa.svg"},f57b:function(t,e,n){var i={"./021-cloud.svg":"9b85","./021-cloudy.svg":"407d","./021-night-1.svg":"ff1c","./021-night.svg":"e9d8","./021-rain.svg":"1c90","./021-snowflake.svg":"6fe6","./021-snowing-1.svg":"de18","./021-snowing-2.svg":"9cad","./021-snowing.svg":"3f2c","./021-summer.svg":"f5f3","./021-sunrise.svg":"bf7d","./021-sunset.svg":"6849","./021-winter.svg":"920b","./Clear.svg":"634c","./Clouds.svg":"b78e","./Drizzle.svg":"801f","./Humidity.svg":"7cdc","./Max.svg":"7b1d","./Min.svg":"62d0","./Mist.svg":"6c17","./Pressure.svg":"2441","./Rain.svg":"004f","./Snow.svg":"04aa","./Thunderstorm.svg":"de50","./Tornado.svg":"cc35","./Wind.svg":"d3f5","./broken clouds.svg":"1ba1","./scattered clouds.svg":"8295","./sunrise.svg":"634b","./sunset.svg":"08bd"};function s(t){var e=r(t);return n(e)}function r(t){if(!n.o(i,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return i[t]}s.keys=function(){return Object.keys(i)},s.resolve=r,t.exports=s,s.id="f57b"},f5f3:function(t,e,n){t.exports=n.p+"img/021-summer.3fe3e19c.svg"},f957:function(t,e,n){"use strict";var i=n("4a5a"),s=n.n(i);s.a},ff1c:function(t,e,n){t.exports=n.p+"img/021-night-1.6de43503.svg"}});
//# sourceMappingURL=app.a4cfeb31.js.map