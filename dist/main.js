(()=>{var n={757:(n,e,a)=>{n.exports=a(666)},666:n=>{var e=function(n){"use strict";var e,a=Object.prototype,t=a.hasOwnProperty,i="function"==typeof Symbol?Symbol:{},l=i.iterator||"@@iterator",o=i.asyncIterator||"@@asyncIterator",r=i.toStringTag||"@@toStringTag";function c(n,e,a){return Object.defineProperty(n,e,{value:a,enumerable:!0,configurable:!0,writable:!0}),n[e]}try{c({},"")}catch(n){c=function(n,e,a){return n[e]=a}}function s(n,e,a,t){var i=e&&e.prototype instanceof b?e:b,l=Object.create(i.prototype),o=new F(t||[]);return l._invoke=function(n,e,a){var t=u;return function(i,l){if(t===v)throw new Error("Generator is already running");if(t===h){if("throw"===i)throw l;return A()}for(a.method=i,a.arg=l;;){var o=a.delegate;if(o){var r=T(o,a);if(r){if(r===f)continue;return r}}if("next"===a.method)a.sent=a._sent=a.arg;else if("throw"===a.method){if(t===u)throw t=h,a.arg;a.dispatchException(a.arg)}else"return"===a.method&&a.abrupt("return",a.arg);t=v;var c=d(n,e,a);if("normal"===c.type){if(t=a.done?h:p,c.arg===f)continue;return{value:c.arg,done:a.done}}"throw"===c.type&&(t=h,a.method="throw",a.arg=c.arg)}}}(n,a,o),l}function d(n,e,a){try{return{type:"normal",arg:n.call(e,a)}}catch(n){return{type:"throw",arg:n}}}n.wrap=s;var u="suspendedStart",p="suspendedYield",v="executing",h="completed",f={};function b(){}function m(){}function y(){}var g={};g[l]=function(){return this};var x=Object.getPrototypeOf,w=x&&x(x(P([])));w&&w!==a&&t.call(w,l)&&(g=w);var E=y.prototype=b.prototype=Object.create(g);function L(n){["next","throw","return"].forEach((function(e){c(n,e,(function(n){return this._invoke(e,n)}))}))}function C(n,e){function a(i,l,o,r){var c=d(n[i],n,l);if("throw"!==c.type){var s=c.arg,u=s.value;return u&&"object"==typeof u&&t.call(u,"__await")?e.resolve(u.__await).then((function(n){a("next",n,o,r)}),(function(n){a("throw",n,o,r)})):e.resolve(u).then((function(n){s.value=n,o(s)}),(function(n){return a("throw",n,o,r)}))}r(c.arg)}var i;this._invoke=function(n,t){function l(){return new e((function(e,i){a(n,t,e,i)}))}return i=i?i.then(l,l):l()}}function T(n,a){var t=n.iterator[a.method];if(t===e){if(a.delegate=null,"throw"===a.method){if(n.iterator.return&&(a.method="return",a.arg=e,T(n,a),"throw"===a.method))return f;a.method="throw",a.arg=new TypeError("The iterator does not provide a 'throw' method")}return f}var i=d(t,n.iterator,a.arg);if("throw"===i.type)return a.method="throw",a.arg=i.arg,a.delegate=null,f;var l=i.arg;return l?l.done?(a[n.resultName]=l.value,a.next=n.nextLoc,"return"!==a.method&&(a.method="next",a.arg=e),a.delegate=null,f):l:(a.method="throw",a.arg=new TypeError("iterator result is not an object"),a.delegate=null,f)}function k(n){var e={tryLoc:n[0]};1 in n&&(e.catchLoc=n[1]),2 in n&&(e.finallyLoc=n[2],e.afterLoc=n[3]),this.tryEntries.push(e)}function S(n){var e=n.completion||{};e.type="normal",delete e.arg,n.completion=e}function F(n){this.tryEntries=[{tryLoc:"root"}],n.forEach(k,this),this.reset(!0)}function P(n){if(n){var a=n[l];if(a)return a.call(n);if("function"==typeof n.next)return n;if(!isNaN(n.length)){var i=-1,o=function a(){for(;++i<n.length;)if(t.call(n,i))return a.value=n[i],a.done=!1,a;return a.value=e,a.done=!0,a};return o.next=o}}return{next:A}}function A(){return{value:e,done:!0}}return m.prototype=E.constructor=y,y.constructor=m,m.displayName=c(y,r,"GeneratorFunction"),n.isGeneratorFunction=function(n){var e="function"==typeof n&&n.constructor;return!!e&&(e===m||"GeneratorFunction"===(e.displayName||e.name))},n.mark=function(n){return Object.setPrototypeOf?Object.setPrototypeOf(n,y):(n.__proto__=y,c(n,r,"GeneratorFunction")),n.prototype=Object.create(E),n},n.awrap=function(n){return{__await:n}},L(C.prototype),C.prototype[o]=function(){return this},n.AsyncIterator=C,n.async=function(e,a,t,i,l){void 0===l&&(l=Promise);var o=new C(s(e,a,t,i),l);return n.isGeneratorFunction(a)?o:o.next().then((function(n){return n.done?n.value:o.next()}))},L(E),c(E,r,"Generator"),E[l]=function(){return this},E.toString=function(){return"[object Generator]"},n.keys=function(n){var e=[];for(var a in n)e.push(a);return e.reverse(),function a(){for(;e.length;){var t=e.pop();if(t in n)return a.value=t,a.done=!1,a}return a.done=!0,a}},n.values=P,F.prototype={constructor:F,reset:function(n){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(S),!n)for(var a in this)"t"===a.charAt(0)&&t.call(this,a)&&!isNaN(+a.slice(1))&&(this[a]=e)},stop:function(){this.done=!0;var n=this.tryEntries[0].completion;if("throw"===n.type)throw n.arg;return this.rval},dispatchException:function(n){if(this.done)throw n;var a=this;function i(t,i){return r.type="throw",r.arg=n,a.next=t,i&&(a.method="next",a.arg=e),!!i}for(var l=this.tryEntries.length-1;l>=0;--l){var o=this.tryEntries[l],r=o.completion;if("root"===o.tryLoc)return i("end");if(o.tryLoc<=this.prev){var c=t.call(o,"catchLoc"),s=t.call(o,"finallyLoc");if(c&&s){if(this.prev<o.catchLoc)return i(o.catchLoc,!0);if(this.prev<o.finallyLoc)return i(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return i(o.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return i(o.finallyLoc)}}}},abrupt:function(n,e){for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a];if(i.tryLoc<=this.prev&&t.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var l=i;break}}l&&("break"===n||"continue"===n)&&l.tryLoc<=e&&e<=l.finallyLoc&&(l=null);var o=l?l.completion:{};return o.type=n,o.arg=e,l?(this.method="next",this.next=l.finallyLoc,f):this.complete(o)},complete:function(n,e){if("throw"===n.type)throw n.arg;return"break"===n.type||"continue"===n.type?this.next=n.arg:"return"===n.type?(this.rval=this.arg=n.arg,this.method="return",this.next="end"):"normal"===n.type&&e&&(this.next=e),f},finish:function(n){for(var e=this.tryEntries.length-1;e>=0;--e){var a=this.tryEntries[e];if(a.finallyLoc===n)return this.complete(a.completion,a.afterLoc),S(a),f}},catch:function(n){for(var e=this.tryEntries.length-1;e>=0;--e){var a=this.tryEntries[e];if(a.tryLoc===n){var t=a.completion;if("throw"===t.type){var i=t.arg;S(a)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(n,a,t){return this.delegate={iterator:P(n),resultName:a,nextLoc:t},"next"===this.method&&(this.arg=e),f}},n}(n.exports);try{regeneratorRuntime=e}catch(n){Function("r","regeneratorRuntime = r")(e)}}},e={};function a(t){var i=e[t];if(void 0!==i)return i.exports;var l=e[t]={exports:{}};return n[t](l,l.exports,a),l.exports}a.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return a.d(e,{a:e}),e},a.d=(n,e)=>{for(var t in e)a.o(e,t)&&!a.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:e[t]})},a.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{"use strict";function n(n,e,a,t,i,l,o){try{var r=n[l](o),c=r.value}catch(n){return void a(n)}r.done?e(c):Promise.resolve(c).then(t,i)}var e=a(757),t=a.n(e);const i=function(){var n=document.querySelector(".header-nav"),e=document.querySelector(".ham"),a=document.querySelector("#nav-home"),t=document.querySelector("#nav-concrete"),i=document.querySelector("#nav-steel"),l=document.querySelector("#nav-about");(e||a||t||i||l)&&(e.addEventListener("click",(function(){n.classList.toggle("showHeaderNav"),e.classList.toggle("showClose")})),a.addEventListener("click",(function(){n.classList.toggle("showHeaderNav"),e.classList.toggle("showClose")})),t.addEventListener("click",(function(){n.classList.toggle("showHeaderNav"),e.classList.toggle("showClose")})),i.addEventListener("click",(function(){n.classList.toggle("showHeaderNav"),e.classList.toggle("showClose")})),l.addEventListener("click",(function(){n.classList.toggle("showHeaderNav"),e.classList.toggle("showClose")})))};var l,o;(l=t().mark((function n(){var e,a,l,o,r,c,s,d,u,p,v;return t().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=document.querySelector(".header"),n.next=3,'\n    <nav class="header-nav">\n        <ul class="header-list-container">\n            <li class="nav-item" id="nav-home">Home</li>\n            <li class="nav-item" id="nav-concrete">Concreto</li>\n            <li class="nav-item" id="nav-steel">Acero</li>\n            <li class="nav-item" id="nav-about">About</li>\n        </ul>\n    </nav>\n\n    <div class="header-main">\n        <div class="header-logo">\n            <a href="#"></a>\n        </div>\n\n        <div class="header-hamburger">\n            <button class="ham"></button>\n        </div>\n    </div>\n    ';case 3:return e.innerHTML=n.sent,a=document.querySelector(".footer"),n.next=7,'\n        <div class="footer-container">\n            <p class="footer-container-p">Desarrollado por <a href="https://twitter.com/axlyaguana11" target="_blank">Axel Yaguana</a> y <a href="https://twitter.com/Francis21312" target="_blank">Francisco Baculima</a></p>\n            <ul class="footer-list-container">\n                <li class="footer-list-item">\n                    <a href="https://github.com/fjbaculima/Plataforma-de-Informes/tree/optimizations" target="_blank">GitHub</a>\n                </li>\n                <li class="footer-list-item">\n                    <a href="https://www.habitatyvivienda.gob.ec/documentos-normativos-nec-norma-ecuatoriana-de-la-construccion/" target="_blank">NEC 15</a>\n                </li>\n                <li class="footer-list-item">\n                    <a href="https://www.patreon.com/" target="_blank">Donaciones</a>\n                </li>\n            </ul>\n        </div>\n    ';case 7:a.innerHTML=n.sent,i(),l=document.querySelector("#nav-home"),o=document.querySelector("#nav-steel"),r=document.querySelector("#nav-concrete"),c=document.querySelector("#nav-about"),s=document.querySelector(".main"),d=function(){s.innerHTML='\n    <div class="main-home">\n        <div class="container-h1 h1-home-container">\n           <h1 class="h1">Crea tus informes estructurales en un par de minutos</h1>\n       </div>\n\n       <article class="article-home">\n       <p class="p p-home">\n        Ahora puedes crear tus informes estructurales en unos cuantos minutos. Solo llena los campos solicitados, da click en generar informe y obtendrás un documento en PDF con los detalles de tu proyecto estructural.\n       </p>\n       \n       \x3c!-- <div class="home-button-container">\n        <button type="button" class="button button-input button-home" id="steel-home-button">Informe de Acero</button>\n        <button type="button" class=" button button-input button-home" id="concrete-home-button">Informe de Concreto</button>\n       </div> --\x3e\n\n       </article>\n    </div>\n    '},u=function(){s.innerHTML='\n        <div class="container-h1">\n           <h1 class="h1">Pancho, pon aquí lo de acero</h1>\n        </div>\n\n        <article>\n            <p>Ya haz algo :v</p>\n        </article>\n    '},p=function(){s.innerHTML='\n\n    <div class="container-h1">\n           <h1 class="h1">Crea tu informe estructural de concreto</h1>\n       </div>\n        <form class="form">\n            <div class="personal-data field">\n                <div class="container-h2">\n                    <h2 class="h2">Ingresa tus datos personales</h2>\n                </div>\n\n                <div class="personal-data-input field-input">\n                    <div class="personal-data-container input-container">\n                        <label class="label" for="name">Tu nombre</label>\n                        <input class="input" type="text" name="name" id="name" placeholder="Tu nombre...">\n                    </div>\n\n                    <div class="personal-data-container input-container">\n                        <label class="label" for="name">Tu registro de la Senescyt</label>\n                        <input class="input" type="text" name="name" id="name" placeholder="Número de registro">\n                    </div>\n\n                    <div class="personal-data-container input-container"> \n                        <label class="label" for="profession">Tu profesión</label>\n                        <select class="input" name="profession" id="profession">\n                            <option  value="ingenieroCivil">Ingeniera/o Civil</option>\n                            <option value="ingenieroMecanico">Ingeniera/o Mecánica/o</option>\n                            <option value="arquitecto">Arquitecta/o</option>\n                        </select>\n                    </div>  \n                </div>\n            </div>\n\n            <div class="project-data field">\n                <div class="container-h2">\n                    <h2 class="h2">Ingresa los datos del proyecto</h2>\n                </div>\n                <div class="project-data-input field-input">\n\n                    <div class="project-data-container input-container">\n                        <label class="label" for="projectName">Proyecto</label>\n                        <input class="input" type="text" name="projectName" id="projectName" placeholder="Nombre del proyecto">\n                    </div>\n\n                    <div class="project-data-container input-container">\n                        <label class="label" for="client">Cliente</label>\n                        <input class="input" type="text" name="client" id="client" placeholder="Nombre de tu cliente...">\n                    </div>\n\n                    <div class="project-data-container input-container">\n                        <label class="label" for="address">Dirección</label>\n                        <input class="input" type="text" name="address" id="address" placeholder="Calle, cantón, provincia...">\n                    </div>\n\n                    <div class="project-data-container input-container">\n                        <button class="button button-input" id="croquis">Subir croquis</button>\n                    </div>\n\n                </div>\n            </div>\n\n            <div class="standard-data field">\n                <div class="container-h2">\n                    <h2 class="h2">Selecciona las normas de diseño</h2>\n                </div>\n                <div class="standard-data-input field-input">\n                    <div class="standard-data-container input-container">\n                        <input type="checkbox" name="NEC15" id="NEC15">\n                        <label class="label label-checkbox" for="NEC15">Norma Ecuatoriana de la construcción (NEC 2015)</label>\n                    </div>\n\n                    <div class="standard-data-container input-container">\n                        <input type="checkbox" name="ACI" id="ACI">\n                        <label class="label label-checkbox" for="ACI">Building Code Requirements for Structural Concrete (ACI 318-19)</label>\n                    </div>\n\n                    <div class="standard-data-container input-container">\n                        <input type="checkbox" name="ASCE" id="ASCE">\n                        <label class="label label-checkbox" for="ASCE">Minimum Design Loads for Buildings and Other Structures (ASCE 7-10)</label>\n                    </div>\n\n                    <div class="standard-data-container input-container">\n                        <input type="checkbox" name="ASTM" id="ASTM">\n                        <label class="label label-checkbox" for="ASTM">ASTM A706</label>\n                    </div>\n                </div>\n            </div>\n\n            <div class="personal-data field">\n                <div class="container-h2">\n                    <h2 class="h2">Ingresa las caracterísitcas de los materiales</h2>\n                </div>\n                <div class="material-data-input field-input">\n                    <div class="container-h3">\n                        <h3 class="h3">Concreto</h3>\n                    </div>\n\n                    <div class="material-data-container input-container">\n                        \n                        <label class="label" for="concrete">Resistencia a la compresión a los 28 días (f\'c), kg/cm²</label>\n                        <input class="input" type="text" name="concrete" id="concrete" placeholder="Resistencia en kg/cm²">\n                    </div>\n\n                    <div class="container-h3">\n                        <h3 class="h3">Concreto</h3>\n                    </div>\n\n                    <div class="material-data-container input-container">\n                       \n                        <label class="label" for="steel-flow">Resistencia a la fluencia del acero (fy), kg/cm²</label>\n                        <input class="input" type="text" name="steel-flow" id="steel-flow" placeholder="Resistencia en kg/cm²">\n                    </div>\n                    <div class="material-data-container input-container">\n                        <label class="label" for="modulus-of-elasticity">Módulo de elasticidad (E), kg/cm²</label>\n                        <input class="input" type="text" name="modulus-of-elasticity" id="modulus-of-elasticity" placeholder="Módulo de elasticidad en kg/cm²">\n                    </div>    \n                    \n                </div>\n            </div>\n\n            <div class="personal-data field">\n                <div class="container-h2">\n                    <h2 class="h2">Cargas</h2>\n                </div>\n\n                <div class="load-data-input field-input">\n\n                    <div class="container-h3">\n                        <h3 class="h3">Cargas Gravitacionales</h3>\n                    </div>\n\n                    <div class="load-data-container input-container">\n                        <label class="label" for="structure-weight">Peso propio de la estructura de hormigón</label>\n                        <input class="input" type="text" name="structure-weight" id="structure-weight" placeholder="Peso propio de la estructura">\n                    </div>    \n\n                    <div class="material-data-container input-container">   \n                        <label class="label" for="structure-weight">Peso propiol acero de refuerzo</label>\n                        <input class="input" type="text" name="steel-weight" id="steel-weight" placeholder="Peso propio del acero de refuerzo">\n                    </div>    \n\n                    <div class="material-data-container input-container">\n                        <label class="label" for="deadLoad">Carga muerta adicional</label>\n                        <input class="input" type="text" name="deadLoad" id="deadLoad" placeholder="Peso propio del acero de refuerzo">\n                    </div>\n                    \n                    <div class="material-data-container input-container">\n                        <label class="label" for="liveLoad">Cargas vivas, Toneladas</label>\n                        <input class="input" type="text" name="liveLoad" id="liveLoad" placeholder="Cargas vivas totales">\n                    </div>\n\n                    <div class="container-h3">\n                        <h3 class="h3">Cargas sísmicas</h3>\n                    </div>\n\n                    \n                    <div class="load-data-container input-container">\n                        <label class="label" for="parroquia">Parroquia</label>\n                        <input class="input" type="text" name="parroquia" id="parroquia" placeholder="parroquia">\n                    </div>\n\n                    <div class="load-data-container input-container">\n                        <label class="label" for="canton">Cantón</label>\n                        <input class="input" type="text" name="canton" id="canton" placeholder="Cantón...">\n                    </div>\n\n                    <div class="load-data-container input-container">\n                        <label class="label" for="province">Provincia</label>\n                        <input class="input" type="text" name="province" id="province" placeholder="province">\n                    </div>\n\n                    <div class="load-data-container input-container">\n                        <label class="label" for="seismicZone">Zona sísimica</label>\n                        <input class="input" type="text" name="seismicZone" id="seismicZone" placeholder="Zona sísmica: I, II, II, IV, V">\n                    </div>\n\n                    <div class="load-data-container input-container">\n                        <label class="label" for="soilType">Tipo de suelo</label>\n                        <select class="input" name="soilType" id="soilType">\n                            <option value="A">A</option>\n                            <option value="B">B</option>\n                            <option value="C">C</option>\n                            <option value="D">D</option>\n                            <option value="E">E</option>\n                        </select>\n                    </div>\n\n                    <div class="load-data-container input-container">\n                        <label class="label" for="importanceCoeff">Coeficiente de importancia</label>\n                        <input class="input" type="text" name="importanceCoeff" id="importanceCoeff" placeholder="Coeficiente de importancia según tipo de estructura">\n                    </div>\n\n                    <div class="load-data-container input-container">\n                        <label class="label" for="basal">Cortante basal</label>\n                        <input class="input" type="text" name="basal" id="basal" placeholder="Cortante basal">\n                    </div>\n                    \n                    <div class="load-data-container input-container">\n                        <label class="label" for="reducción">Factor de reducción</label>\n                        <input class="input" type="text" name="reductionFactor" id="reductionFactor" placeholder="Factor de reducción de respuesta">\n                    </div>\n\n                    <div class="load-data-container input-container">\n                        <label class="label" for="Z">Factor de aceleración de zona sísmica (Z)</label>\n                        <input class="input" type="text" name="Z" id="Z" placeholder="Factor Z">\n                    </div>\n\n                    <div class="load-data-container input-container">\n                        <label class="label" for="n">Relación de amplificación espectral (n)</label>\n                        <input class="input" type="text" name="n" id="n" placeholder="Relación de amplificación espectral">\n                    </div>\n\n                    <div class="load-data-container input-container">\n                        <label class="label" for="Ct">Coeficiente Ct</label>\n                        <input class="input" type="text" name="Ct" id="Ct" placeholder="Coeficiente Ct">\n                    </div>\n\n                    <div class="load-data-container input-container">\n                        <label class="label" for="alpha">Coeficiente para periodo (&alpha;)</label>\n                        <input class="input" type="text" name="alpha" id="alpha" placeholder="Coeficiente para periodo">\n                    </div>\n\n                    <div class="load-data-container input-container">\n                        <label class="label" for="Fa">Factor de sitio (Fa)</label>\n                        <input class="input" type="text" name="Fa" id="Fa" placeholder="Factor de sitio (Fa)">\n                    </div>\n\n                    <div class="load-data-container input-container">\n                        <label class="label" for="Fd">Factor de sitio (Fd)</label>\n                        <input class="input" type="text" name="Fd" id="Fd" placeholder="Factor de sitio (Fd)">\n                    </div>\n\n                    <div class="load-data-container input-container">\n                        <label class="label" for="Fs">Factor de comportamiento inelástico (Fs)</label>\n                        <input class="input" type="text" name="Fs" id="Fs" placeholder="Factor Fs">\n                    </div>\n\n                    <div class="load-data-container input-container">\n                        <label class="label" for="r">Factor asociado al Tr (r)</label>\n                        <input class="input" type="text" name="r" id="r" placeholder="Factor asociado al Tr (r)">\n                    </div>\n\n                    <div class="load-data-container input-container">\n                        <label class="label" for="phiP">Factor de irregularidad en planta (&Phi;p)</label>\n                        <input class="input" type="text" name="phiP" id="phiP" placeholder="Factor de irregularidad en planta">\n                    </div>\n\n                    <div class="load-data-container input-container">\n                        <label class="label" for="phiE">Factor de irregularidad en elevación (&Phi;e)</label>\n                        <input class="input" type="text" name="phiE" id="phiE" placeholder="Factor de irregularidad en elevación">\n                    </div>\n\n                    <div class="load-data-container input-container">\n                        <label class="label" for="g">Aceleración de la gravedad</label>\n                        <input class="input" type="text" name="g" id="g" placeholder="Aceleración de la gravedad (g)">\n                    </div>\n\n                    <div class="load-data-container input-container">\n                        <label class="label" for="T">Periodo método 1 (T)</label>\n                        <input class="input" type="text" name="T" id="T" placeholder="Periodo m[étodo 1 (T)">\n                    </div>\n\n                    <div class="load-data-container input-container">\n                        <label class="label" for="Tt">Periodo menor al método 2 (1.3T)</label>\n                        <input class="input" type="text" name="Tt" id="Tt" placeholder="Periodo menor al método 2 (1.3T)">\n                    </div>\n\n                    <div class="load-data-container input-container">\n                        <label class="label" for="TO">Periodo límite en T=TO</label>\n                        <input class="input" type="text" name="TO" id="TO" placeholder="TO">\n                    </div>\n\n                    <div class="load-data-container input-container">\n                        <label class="label" for="TC">Periodo límite en T=TC</label>\n                        <input class="input" type="text" name="TC" id="TC" placeholder="TC">\n                    </div>\n\n                    <div class="load-data-container input-container">\n                        <label class="label" for="TL">Periodo límite en T=TL</label>\n                        <input class="input" type="text" name="TL" id="TL" placeholder="TL">\n                    </div>\n\n                    <div class="load-data-container input-container">\n                        <label class="label" for="Sa">Aceleración en T=0 (Sa)</label>\n                        <input class="input" type="text" name="Sa" id="Sa" placeholder="Sa">\n                    </div>\n\n                    <div class="load-data-container input-container">\n                        <label class="label" for="Sao">Aceleración en T=TO (Sao)</label>\n                        <input class="input" type="text" name="Sao" id="Sao" placeholder="Sao">\n                    </div>\n\n                    <div class="load-data-container input-container">\n                        <label class="label" for="f">Factor de reducción (f)</label>\n                        <input class="input" type="text" name="f" id="f" placeholder="f">\n                    </div>\n\n                </div>\n\n            </div>\n\n            <div class="personal-data field">\n                <div class="container-h2">\n                    <h2 class="h2">Combinaciones de cargas de diseño</h2>\n                </div>\n                <div class="standard-data-input field-input">\n\n                    <div class="standard-data-container input-container">\n                        <input type="checkbox" name="EQ1" id="EQ1">\n                        <label class="label label-checkbox" for="EQ1">1.4D</label>\n                    </div>\n\n                    <div class="standard-data-container input-container">\n                        <input type="checkbox" name="EQ2" id="EQ2">\n                        <label class="label label-checkbox" for="EQ2">1.2D + 1.6L + 0.5max(Lr, S, R)</label>\n                    </div>\n\n                    <div class="standard-data-container input-container">\n                        <input type="checkbox" name="EQ3" id="EQ3">\n                        <label class="label label-checkbox" for="EQ3">1.2D + 1.6max(Lr, S, R) + max(Lr, 0.5W)</label>\n                    </div>\n\n                    <div class="standard-data-container input-container">\n                        <input type="checkbox" name="EQ4" id="EQ4">\n                        <label class="label label-checkbox" for="EQ4">1.2D + W + L + 0.5max(Lr, S, 0.5W)</label>\n                    </div>\n\n                    <div class="standard-data-container input-container">\n                        <input type="checkbox" name="EQ5" id="EQ5">\n                        <label class="label label-checkbox" for="EQ5">1.2D + E + L + 0.2S</label>\n                    </div>\n\n                    <div class="standard-data-container input-container">\n                        <input type="checkbox" name="EQ6" id="EQ6">\n                        <label class="label label-checkbox" for="EQ6">0.9D + W</label>\n                    </div>\n\n                    <div class="standard-data-container input-container">\n                        <input type="checkbox" name="EQ7" id="EQ7">\n                        <label class="label label-checkbox" for="EQ7">0.9D + E</label>\n                    </div>\n                </div>\n            </div>\n\n            <div class="displacement-data field">\n                <div class="container-h2">\n                    <h2 class="h2">Derivas admisibles</h2>\n                </div>\n                <div class="displacement-data-input field-input">\n                    <div class="displacement-data-container input-container">\n                        <label class="label" for="displacement">Estructura de: </label>\n                        <select class="input" name="displacement" id="displacement">\n                            <option value="concrete">Hormigón armado, metálica y madera, con desplazamiento máximo de 0.02</option>\n                            <option value="masonry">Mampostería, con desplazamiento máximo de 0.01</option>\n                        </select>\n                    </div>\n                </div>\n            </div>\n\n            <div class="math-data field">\n                <div class="container-h2">\n                    <h2 class="h2">Modelo matemático</h2>\n                </div>\n\n                <div class="math-data-input field-input">\n\n                    <div class="personal-data-container input-container">\n                        <label class="label" for="software">Software</label>\n                        <input class="input" type="text" name="software" id="software" placeholder="Software que usaste">\n                    </div>\n\n                    <div class="personal-data-container input-container">\n                    <label class="label" for="sitemaEstructural">Sistema estructural</label>\n                    <input class="input" type="text" name="sistemaEstructural" id="sistemaEstructural" placeholder="Aporticado" value="Aporticado">\n                    </div>\n\n                    <div class="project-data-container input-container">\n                        <button class="button button-input" id="mathModel">Subir Modelo Matemático</button>\n                    </div>\n                </div>\n            </div>\n        </form>\n    \n    '},v=function(){s.innerHTML='\n    <div class="main-about">\n        <div class="container-h1 h1-about-container">\n           <h1 class="h1">Sobre Reportes Estructurales</h1>\n        </div>\n\n        <article class="article-about">\n            <p class="p p-about">Reportería es una plataforma para generar informes estructurales de edificaciones de hasta 5 plantas. Fue desarrollada como trabajo de titulación de la Escuela de Ingeniería Civil de la Universidad Técnica Particular de Loja.</p>\n        </article>\n    </div>\n    '},l.addEventListener("click",d),o.addEventListener("click",u),r.addEventListener("click",p),c.addEventListener("click",v),window.addEventListener("load",d);case 23:case"end":return n.stop()}}),n)})),o=function(){var e=this,a=arguments;return new Promise((function(t,i){var o=l.apply(e,a);function r(e){n(o,t,i,r,c,"next",e)}function c(e){n(o,t,i,r,c,"throw",e)}r(void 0)}))},function(){return o.apply(this,arguments)})()})()})();