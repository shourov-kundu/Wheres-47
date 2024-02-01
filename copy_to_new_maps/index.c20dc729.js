import{_ as E,o as v,c as b,a as n,b as d,d as g,t as c,w as y,s as it,e as ie,p as H,f as q,Q as Gt,g as Y,C as L,n as j,J as p,q as ot,F as P,N as st,r as Q,k as Te,I as B,v as at,x as w,l as C,D as Ne,P as Ae,S as xt,V as Z,W as ee,X as te,Y as Ce,Z as rt,$ as zt,a0 as ct,a1 as Yt,a2 as Jt,a3 as Xt,a4 as Qt,a5 as Zt,j as lt,M as I,R as en,h as tn,B as nn,i as on,H as sn,T as an,U as rn}from"./entry.db787e62.js";import{_ as W}from"./GameIcon.6da36731.js";import{_ as Me}from"./GameButton.8dbdfc1c.js";import{v as dt,u as cn}from"./useAuthenticatedFetch.5b4a294f.js";import{_ as ln}from"./Alert.a36ea043.js";import{u as dn}from"./fetch.d6edc54b.js";import{_ as un}from"./hitmaps.abeba6ac.js";const fn={},mn=e=>(H("data-v-2a6869de"),e=e(),q(),e),gn={class:"navbar navbar-expand-lg","data-bs-theme":"dark"},hn={class:"container-fluid"},pn=mn(()=>n("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbar-content","aria-controls":"navbar-content","aria-expanded":"false","aria-label":"Toggle navigation"},[n("span",{class:"navbar-toggler-icon"})],-1)),vn={class:"collapse navbar-collapse",id:"navbar-content"},bn={class:"navbar-nav me-auto mb-2 mb-lg-0"},_n={class:"nav-item"},yn={class:"nav-link",href:"#games"},wn={class:"nav-item"},kn={class:"nav-link",href:"#game-modes"},$n={class:"nav-item"},Sn={class:"nav-link",href:"#partners"},In={class:"nav-item"},Dn={class:"nav-link",href:"#kofi"},Tn={class:"navbar-nav ms-auto mb-2 mb-lg-0"},Nn={class:"nav-item"},An={class:"nav-link",href:"https://hitmaps.readme.io/reference"},Cn={class:"nav-item"};function Mn(e,t){const i=it,o=ie;return v(),b("nav",gn,[n("div",hn,[pn,n("div",vn,[n("ul",bn,[n("li",_n,[n("a",yn,[d(i,{name:"fa6-solid:gamepad"}),g(" "+c(e.$t("navbar.games")),1)])]),n("li",wn,[n("a",kn,[d(i,{name:"fa6-solid:dice"}),g(" "+c(e.$t("custom-game-modes.header")),1)])]),n("li",$n,[n("a",Sn,[d(i,{name:"fa6-solid:handshake"}),g(" "+c(e.$t("partnership.header")),1)])]),n("li",In,[n("a",Dn,[d(i,{name:"cib:ko-fi"}),g(" "+c(e.$t("ko-fi.ko-fi-supporters")),1)])])]),n("ul",Tn,[n("li",Nn,[n("a",An,[d(i,{name:"fa:code"}),g(" API ")])]),n("li",Cn,[d(o,{class:"nav-link",to:"/support-the-site"},{default:y(()=>[d(i,{name:"fa6-solid:money-bill"}),g(" "+c(e.$t("footer.support-the-site")),1)]),_:1})])])])])])}const En=E(fn,[["render",Mn],["__scopeId","data-v-2a6869de"]]);const Pn={class:"image"},On={class:"text"},Bn={__name:"GameCard",props:{game:Object},setup(e){const i=Gt({"--game-tile-url":e.game.tileUrl}),{t:o}=Y();return(s,a)=>{const l=W,f=ie;return v(),L(f,ot(s.$attrs,{to:`/games/${e.game.slug}`}),{default:y(()=>[n("div",{class:"row game-card",style:j(p(i))},[n("div",{class:"col-xl-4 d-none d-xl-block",style:j(`background: url(${e.game.tileUrl}) no-repeat center center; background-size: cover`)},null,4),n("div",{class:"col-xl-8 game-info",style:j(`background: rgba(0, 0, 0, .3) url(${e.game.tileUrl}) no-repeat center center; background-size: cover`)},[n("div",Pn,[d(l,{icon:e.game.icon,"font-style":"normal"},null,8,["icon"])]),n("div",On,[n("h4",null,c(p(o)("game-type."+e.game.type)),1),n("h3",null,c(e.game.fullName),1)])],4)],4)]),_:1},16,["to"])}}},ut=E(Bn,[["__scopeId","data-v-7b02417d"]]);const Rn=e=>(H("data-v-4be1ca1d"),e=e(),q(),e),Ln={class:"single-game d-none d-lg-flex"},jn={style:{position:"relative","flex-grow":"1"}},Fn=["src"],Vn=Rn(()=>n("div",{class:"card-img-overlay d-flex flex-column justify-content-end",style:{padding:"0"}},null,-1)),Un={class:"card-footer"},Kn={class:"image"},Hn={class:"text"},qn={__name:"SingleGameCard",props:{game:Object},setup(e){return Y(),(t,i)=>{const o=W,s=ie,a=ut;return v(),b(P,null,[n("div",Ln,[d(s,{to:`/games/${e.game.slug}`},{default:y(()=>[n("div",{class:"card game",style:j(`background: url('${e.game.tileUrl}') center center / cover no-repeat`)},[n("div",jn,[n("img",{src:e.game.tileUrl,class:"card-img-top",alt:""},null,8,Fn),Vn]),n("div",null,[n("div",Un,[n("div",Kn,[d(o,{icon:e.game.icon,"font-style":"normal"},null,8,["icon"])]),n("div",Hn,[n("h4",null,c(t.$t("game-type."+e.game.type)),1),n("h3",null,c(e.game.fullName),1)])])])],4)]),_:1},8,["to"])]),d(a,{class:"d-flex d-lg-none",game:e.game},null,8,["game"])],64)}}},Wn=E(qn,[["__scopeId","data-v-4be1ca1d"]]),Gn={props:{date:{type:String,required:!0}},computed:{parsedDate:function(){return new Date(this.date).getTime()},seconds:function(){return Math.trunc((this.parsedDate-this.now)/1e3%60)},minutes:function(){return Math.trunc((this.parsedDate-this.now)/1e3/60%60)},hours:function(){return Math.trunc((this.parsedDate-this.now)/1e3/60/60)},days:function(){return Math.trunc((this.parsedDate-this.now)/1e3/60/60/24)}},methods:{twoDigits(e){return e<0?"00":e<10?"0"+e:e}},data(){return{now:new Date}},mounted(){setInterval(()=>{this.now=new Date},1e3)}},xn={key:0},zn={key:1};function Yn(e,t,i,o,s,a){return a.days<2?(v(),b("div",xn,c(a.twoDigits(a.hours))+":"+c(a.twoDigits(a.minutes))+":"+c(a.twoDigits(a.seconds)),1)):(v(),b("div",zn,c(e.$t("elusive-target.n-days",{days:a.days})),1))}const ft=E(Gn,[["render",Yn]]),oe=e=>(H("data-v-48937b3d"),e=e(),q(),e),Jn={class:"selector"},Xn=oe(()=>n("span",{class:"carousel-control-prev-icon","aria-hidden":"true"},null,-1)),Qn=oe(()=>n("span",{class:"visually-hidden"},"Previous",-1)),Zn=[Xn,Qn],ei={class:"dots"},ti=["onClick"],ni=oe(()=>n("span",{class:"carousel-control-next-icon","aria-hidden":"true"},null,-1)),ii=oe(()=>n("span",{class:"visually-hidden"},"Next",-1)),oi=[ni,ii],si=st({__name:"CarouselSelector",props:{elements:Array,selectedIndex:{type:Number,required:!1,default:0}},emits:["indexSelected"],setup(e,{emit:t}){return(i,o)=>(v(),b("div",Jn,[n("button",{type:"button",onClick:o[0]||(o[0]=s=>i.$emit("indexSelected",e.selectedIndex===0?e.elements.length-1:e.selectedIndex-1))},Zn),n("div",ei,[(v(!0),b(P,null,Q(e.elements,(s,a)=>(v(),b("span",{class:Te(["dot",{active:a===e.selectedIndex}]),onClick:l=>i.$emit("indexSelected",a)},"•",10,ti))),256))]),n("button",{type:"button",onClick:o[1]||(o[1]=s=>i.$emit("indexSelected",e.selectedIndex+1))},oi)]))}});const ai=E(si,[["__scopeId","data-v-48937b3d"]]);const ri={class:"row game-card"},ci={class:"upper"},li={class:"image"},di={class:"text"},ui={key:0,class:"mkii"},fi={key:0,class:"countdown"},mi={class:"image"},gi={class:"target-arrives"},hi={class:"row"},pi={key:0,class:"col-xl"},vi={class:"embed-responsive embed-responsive-16by9"},bi=["src"],_i={class:"col-xl"},yi=["innerHTML"],wi={__name:"ElusiveTargetMobileCard",props:{elusiveTargets:Array},emits:["notificationModal"],setup(e){const i=B(e.elusiveTargets[0]),{t:o}=Y(),s=dt(),a=B(null);function l(){a.value.showModal()}function f(){a.value.hideModal()}return(m,r)=>{const h=W,u=ft,K=Me,$=Ne,D=Ae,T=at("tooltip");return v(),b("a",ot(m.$attrs,{href:"#"}),[n("div",ri,[n("div",{class:"col-xl-4 d-none d-xl-block",style:j(`background: url(${p(i).tileUrl}) no-repeat center center; background-size: cover`)},null,4),n("div",{class:"col-xl-8 game-info",style:j(`background: rgba(0, 0, 0, .3) url(${p(i).tileUrl}) no-repeat center center; background-size: cover`)},[n("div",ci,[n("div",li,[d(h,{icon:"elusive","font-style":"normal"})]),n("div",di,[n("h4",null,c(p(o)("game-type.Elusive Target")),1),n("h3",null,[g(c(p(i).name)+" ",1),p(i).reactivated?w((v(),b("span",ui,[g("2")])),[[T,m.$t("elusive-target.reactivated-target"),"left"]]):C("",!0)])]),w((v(),b("div",{onclick:"return false;",class:"image float-right notification-icon",onClick:r[0]||(r[0]=G=>m.$emit("notificationModal"))},[d(h,{icon:"audio","font-style":"normal"})])),[[T,m.$t("elusive-target.notifications.manage-notifications"),"left"]])]),p(i).beginningTime?(v(),b("div",fi,[n("div",mi,[d(h,{icon:"timed","font-style":"normal"})]),n("div",{class:Te(["text timer",{"not-playable":new Date(p(i).beginningTime)>new Date}])},[n("div",gi,c(m.$t("elusive-target.target-arrives")),1),d(u,{class:"elusive-countdown",date:new Date(p(i).beginningTime)>new Date?p(i).beginningTime:p(i).endingTime},null,8,["date"])],2),w(d(h,{onClick:l,icon:"background","font-style":"normal","extra-classes":"normal briefing-icon float-right"},null,512),[[T,m.$t("elusive-target.mission-briefing"),"left"]])])):C("",!0)],4)]),d(D,null,{default:y(()=>[d($,{id:`briefing-modal-${p(s)}`,"modal-title":p(i).name,ref_key:"briefingModal",ref:a},{"modal-footer":y(()=>[d(K,{"data-dismiss":"modal",onClick:f},{default:y(()=>[d(h,{icon:"failed","font-style":"normal"}),g(" "+c(m.$t("form.close")),1)]),_:1})]),default:y(()=>[n("div",hi,[p(i).videoBriefingUrl!=null?(v(),b("div",pi,[n("div",vi,[n("iframe",{src:p(i).videoBriefingUrl,class:"embed-responsive-item",frameborder:"0",allow:"accelerometer; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""},null,8,bi)])])):C("",!0),n("div",_i,[n("p",{innerHTML:p(i).briefing},null,8,yi)])])]),_:1},8,["id","modal-title"])]),_:1})],16)}}},ki=E(wi,[["__scopeId","data-v-b38afe0f"]]);const $i=e=>(H("data-v-29451f37"),e=e(),q(),e),Si={class:"single-game d-none d-lg-flex"},Ii=["href"],Di=$i(()=>n("div",{style:{position:"relative","flex-grow":"1"}},[n("div",{class:"card-img-overlay d-flex flex-column justify-content-end",style:{padding:"0"}})],-1)),Ti={class:"card-footer"},Ni={key:0,class:"countdown"},Ai={class:"image"},Ci={class:"target-arrives"},Mi={class:"lower"},Ei={class:"image"},Pi={class:"text"},Oi={key:0,class:"mkii"},Bi={class:"row"},Ri={key:0,class:"col-xl"},Li={class:"embed-responsive embed-responsive-16by9"},ji=["src"],Fi={class:"col-xl"},Vi=["innerHTML"],Ui={class:"d-flex d-lg-none mobile-et"},Ki={__name:"ElusiveTargetCard",props:{elusiveTargets:Array},emits:["notificationModal"],setup(e){const t=e;Y();const i=B(t.elusiveTargets[0]),o=xt(()=>[i]),s=B(0),a=B({name:"",videoBriefingUrl:"",briefing:""}),l=dt(),f=B(null);let m=u();function r($){a.value=$,f.value.showModal()}function h(){f.value.hideModal()}function u(){return setInterval(()=>{K(s.value+1,!1)},5e3)}function K($,D=!0){D&&(clearInterval(m),m=u()),s.value=$%t.elusiveTargets.length,i.value=t.elusiveTargets[s.value]}return($,D)=>{const T=W,G=ft,J=ai,re=Me,ce=Ne,le=Ae,X=ki,_=at("tooltip");return v(),b(P,null,[n("div",Si,[n("a",{href:p(i).missionUrl??"#"},[n("div",{class:"card game",style:j(`background: url('${p(i).tileUrl}') center center / cover no-repeat`)},[Di,n("div",null,[n("div",Ti,[p(i).beginningTime?(v(),b("div",Ni,[n("div",Ai,[d(T,{icon:"timed","font-style":"normal"})]),n("div",{class:Te(["text timer",{"not-playable":new Date(p(i).beginningTime)>new Date}])},[n("div",Ci,c($.$t("elusive-target.target-arrives")),1),d(G,{class:"elusive-countdown",date:new Date(p(i).beginningTime)>new Date?p(i).beginningTime:p(i).endingTime},null,8,["date"])],2),w(d(T,{onClick:D[0]||(D[0]=x=>r(p(i))),onclick:"return false",icon:"background","font-style":"normal","extra-classes":"normal briefing-icon float-right"},null,512),[[_,$.$t("elusive-target.mission-briefing"),"left"]])])):C("",!0),n("div",Mi,[n("div",Ei,[d(T,{icon:"elusive","font-style":"normal"})]),n("div",Pi,[n("h4",null,c($.$t("game-type.Elusive Target")),1),n("h3",null,[g(c(p(i).name)+" ",1),p(i).reactivated?w((v(),b("span",Oi,[g("2")])),[[_,$.$t("elusive-target.reactivated-target"),"left"]]):C("",!0)])]),w((v(),b("div",{onclick:"return false;",class:"image float-right notification-icon",onClick:D[1]||(D[1]=x=>$.$emit("notificationModal"))},[d(T,{icon:"audio","font-style":"normal"})])),[[_,$.$t("elusive-target.notifications.manage-notifications"),"left"]])])])])],4)],8,Ii),e.elusiveTargets.length>1?(v(),L(J,{key:0,elements:e.elusiveTargets,"selected-index":p(s),onIndexSelected:K},null,8,["elements","selected-index"])):C("",!0)]),d(le,null,{default:y(()=>[d(ce,{id:`briefing-modal-${p(l)}`,"modal-title":p(a).name,ref_key:"briefingModal",ref:f},{"modal-footer":y(()=>[d(re,{"data-dismiss":"modal",onClick:h},{default:y(()=>[d(T,{icon:"failed","font-style":"normal"}),g(" "+c($.$t("form.close")),1)]),_:1})]),default:y(()=>[n("div",Bi,[p(a).videoBriefingUrl!=null?(v(),b("div",Ri,[n("div",Li,[n("iframe",{src:p(a).videoBriefingUrl,class:"embed-responsive-item",frameborder:"0",allow:"accelerometer; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""},null,8,ji)])])):C("",!0),n("div",Fi,[n("p",{innerHTML:p(a).briefing},null,8,Vi)])])]),_:1},8,["id","modal-title"])]),_:1}),n("div",Ui,[d(X,{class:"d-flex d-lg-none","elusive-targets":p(o),onNotificationModal:D[2]||(D[2]=x=>$.$emit("notificationModal"))},null,8,["elusive-targets"]),e.elusiveTargets.length>1?(v(),L(J,{key:0,elements:e.elusiveTargets,"selected-index":p(s),onIndexSelected:K},null,8,["elements","selected-index"])):C("",!0)])],64)}}},Hi=E(Ki,[["__scopeId","data-v-29451f37"]]),qi=(e,t)=>t.some(i=>e instanceof i);let He,qe;function Wi(){return He||(He=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Gi(){return qe||(qe=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const mt=new WeakMap,ke=new WeakMap,gt=new WeakMap,de=new WeakMap,Ee=new WeakMap;function xi(e){const t=new Promise((i,o)=>{const s=()=>{e.removeEventListener("success",a),e.removeEventListener("error",l)},a=()=>{i(O(e.result)),s()},l=()=>{o(e.error),s()};e.addEventListener("success",a),e.addEventListener("error",l)});return t.then(i=>{i instanceof IDBCursor&&mt.set(i,e)}).catch(()=>{}),Ee.set(t,e),t}function zi(e){if(ke.has(e))return;const t=new Promise((i,o)=>{const s=()=>{e.removeEventListener("complete",a),e.removeEventListener("error",l),e.removeEventListener("abort",l)},a=()=>{i(),s()},l=()=>{o(e.error||new DOMException("AbortError","AbortError")),s()};e.addEventListener("complete",a),e.addEventListener("error",l),e.addEventListener("abort",l)});ke.set(e,t)}let $e={get(e,t,i){if(e instanceof IDBTransaction){if(t==="done")return ke.get(e);if(t==="objectStoreNames")return e.objectStoreNames||gt.get(e);if(t==="store")return i.objectStoreNames[1]?void 0:i.objectStore(i.objectStoreNames[0])}return O(e[t])},set(e,t,i){return e[t]=i,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function Yi(e){$e=e($e)}function Ji(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...i){const o=e.call(ue(this),t,...i);return gt.set(o,t.sort?t.sort():[t]),O(o)}:Gi().includes(e)?function(...t){return e.apply(ue(this),t),O(mt.get(this))}:function(...t){return O(e.apply(ue(this),t))}}function Xi(e){return typeof e=="function"?Ji(e):(e instanceof IDBTransaction&&zi(e),qi(e,Wi())?new Proxy(e,$e):e)}function O(e){if(e instanceof IDBRequest)return xi(e);if(de.has(e))return de.get(e);const t=Xi(e);return t!==e&&(de.set(e,t),Ee.set(t,e)),t}const ue=e=>Ee.get(e);function Qi(e,t,{blocked:i,upgrade:o,blocking:s,terminated:a}={}){const l=indexedDB.open(e,t),f=O(l);return o&&l.addEventListener("upgradeneeded",m=>{o(O(l.result),m.oldVersion,m.newVersion,O(l.transaction))}),i&&l.addEventListener("blocked",()=>i()),f.then(m=>{a&&m.addEventListener("close",()=>a()),s&&m.addEventListener("versionchange",()=>s())}).catch(()=>{}),f}const Zi=["get","getKey","getAll","getAllKeys","count"],eo=["put","add","delete","clear"],fe=new Map;function We(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(fe.get(t))return fe.get(t);const i=t.replace(/FromIndex$/,""),o=t!==i,s=eo.includes(i);if(!(i in(o?IDBIndex:IDBObjectStore).prototype)||!(s||Zi.includes(i)))return;const a=async function(l,...f){const m=this.transaction(l,s?"readwrite":"readonly");let r=m.store;return o&&(r=r.index(f.shift())),(await Promise.all([r[i](...f),s&&m.done]))[0]};return fe.set(t,a),a}Yi(e=>({...e,get:(t,i,o)=>We(t,i)||e.get(t,i,o),has:(t,i)=>!!We(t,i)||e.has(t,i)}));const ht="@firebase/installations",Pe="0.6.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pt=1e4,vt=`w:${Pe}`,bt="FIS_v2",to="https://firebaseinstallations.googleapis.com/v1",no=60*60*1e3,io="installations",oo="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const so={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["not-registered"]:"Firebase Installation is not registered.",["installation-not-found"]:"Firebase Installation not found.",["request-failed"]:'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',["app-offline"]:"Could not process request. Application offline.",["delete-pending-registration"]:"Can't delete installation while there is a pending registration request."},F=new rt(io,oo,so);function _t(e){return e instanceof zt&&e.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yt({projectId:e}){return`${to}/projects/${e}/installations`}function wt(e){return{token:e.token,requestStatus:2,expiresIn:ro(e.expiresIn),creationTime:Date.now()}}async function kt(e,t){const o=(await t.json()).error;return F.create("request-failed",{requestName:e,serverCode:o.code,serverMessage:o.message,serverStatus:o.status})}function $t({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function ao(e,{refreshToken:t}){const i=$t(e);return i.append("Authorization",co(t)),i}async function St(e){const t=await e();return t.status>=500&&t.status<600?e():t}function ro(e){return Number(e.replace("s","000"))}function co(e){return`${bt} ${e}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lo({appConfig:e,heartbeatServiceProvider:t},{fid:i}){const o=yt(e),s=$t(e),a=t.getImmediate({optional:!0});if(a){const r=await a.getHeartbeatsHeader();r&&s.append("x-firebase-client",r)}const l={fid:i,authVersion:bt,appId:e.appId,sdkVersion:vt},f={method:"POST",headers:s,body:JSON.stringify(l)},m=await St(()=>fetch(o,f));if(m.ok){const r=await m.json();return{fid:r.fid||i,registrationStatus:2,refreshToken:r.refreshToken,authToken:wt(r.authToken)}}else throw await kt("Create Installation",m)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function It(e){return new Promise(t=>{setTimeout(t,e)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uo(e){return btoa(String.fromCharCode(...e)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fo=/^[cdef][\w-]{21}$/,Se="";function mo(){try{const e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;const i=go(e);return fo.test(i)?i:Se}catch{return Se}}function go(e){return uo(e).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function se(e){return`${e.appName}!${e.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dt=new Map;function Tt(e,t){const i=se(e);Nt(i,t),ho(i,t)}function Nt(e,t){const i=Dt.get(e);if(i)for(const o of i)o(t)}function ho(e,t){const i=po();i&&i.postMessage({key:e,fid:t}),vo()}let R=null;function po(){return!R&&"BroadcastChannel"in self&&(R=new BroadcastChannel("[Firebase] FID Change"),R.onmessage=e=>{Nt(e.data.key,e.data.fid)}),R}function vo(){Dt.size===0&&R&&(R.close(),R=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bo="firebase-installations-database",_o=1,V="firebase-installations-store";let me=null;function Oe(){return me||(me=Qi(bo,_o,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(V)}}})),me}async function ne(e,t){const i=se(e),s=(await Oe()).transaction(V,"readwrite"),a=s.objectStore(V),l=await a.get(i);return await a.put(t,i),await s.done,(!l||l.fid!==t.fid)&&Tt(e,t.fid),t}async function At(e){const t=se(e),o=(await Oe()).transaction(V,"readwrite");await o.objectStore(V).delete(t),await o.done}async function ae(e,t){const i=se(e),s=(await Oe()).transaction(V,"readwrite"),a=s.objectStore(V),l=await a.get(i),f=t(l);return f===void 0?await a.delete(i):await a.put(f,i),await s.done,f&&(!l||l.fid!==f.fid)&&Tt(e,f.fid),f}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Be(e){let t;const i=await ae(e.appConfig,o=>{const s=yo(o),a=wo(e,s);return t=a.registrationPromise,a.installationEntry});return i.fid===Se?{installationEntry:await t}:{installationEntry:i,registrationPromise:t}}function yo(e){const t=e||{fid:mo(),registrationStatus:0};return Ct(t)}function wo(e,t){if(t.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(F.create("app-offline"));return{installationEntry:t,registrationPromise:s}}const i={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},o=ko(e,i);return{installationEntry:i,registrationPromise:o}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:$o(e)}:{installationEntry:t}}async function ko(e,t){try{const i=await lo(e,t);return ne(e.appConfig,i)}catch(i){throw _t(i)&&i.customData.serverCode===409?await At(e.appConfig):await ne(e.appConfig,{fid:t.fid,registrationStatus:0}),i}}async function $o(e){let t=await Ge(e.appConfig);for(;t.registrationStatus===1;)await It(100),t=await Ge(e.appConfig);if(t.registrationStatus===0){const{installationEntry:i,registrationPromise:o}=await Be(e);return o||i}return t}function Ge(e){return ae(e,t=>{if(!t)throw F.create("installation-not-found");return Ct(t)})}function Ct(e){return So(e)?{fid:e.fid,registrationStatus:0}:e}function So(e){return e.registrationStatus===1&&e.registrationTime+pt<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Io({appConfig:e,heartbeatServiceProvider:t},i){const o=Do(e,i),s=ao(e,i),a=t.getImmediate({optional:!0});if(a){const r=await a.getHeartbeatsHeader();r&&s.append("x-firebase-client",r)}const l={installation:{sdkVersion:vt,appId:e.appId}},f={method:"POST",headers:s,body:JSON.stringify(l)},m=await St(()=>fetch(o,f));if(m.ok){const r=await m.json();return wt(r)}else throw await kt("Generate Auth Token",m)}function Do(e,{fid:t}){return`${yt(e)}/${t}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Re(e,t=!1){let i;const o=await ae(e.appConfig,a=>{if(!Mt(a))throw F.create("not-registered");const l=a.authToken;if(!t&&Ao(l))return a;if(l.requestStatus===1)return i=To(e,t),a;{if(!navigator.onLine)throw F.create("app-offline");const f=Mo(a);return i=No(e,f),f}});return i?await i:o.authToken}async function To(e,t){let i=await xe(e.appConfig);for(;i.authToken.requestStatus===1;)await It(100),i=await xe(e.appConfig);const o=i.authToken;return o.requestStatus===0?Re(e,t):o}function xe(e){return ae(e,t=>{if(!Mt(t))throw F.create("not-registered");const i=t.authToken;return Eo(i)?Object.assign(Object.assign({},t),{authToken:{requestStatus:0}}):t})}async function No(e,t){try{const i=await Io(e,t),o=Object.assign(Object.assign({},t),{authToken:i});return await ne(e.appConfig,o),i}catch(i){if(_t(i)&&(i.customData.serverCode===401||i.customData.serverCode===404))await At(e.appConfig);else{const o=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await ne(e.appConfig,o)}throw i}}function Mt(e){return e!==void 0&&e.registrationStatus===2}function Ao(e){return e.requestStatus===2&&!Co(e)}function Co(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+no}function Mo(e){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}function Eo(e){return e.requestStatus===1&&e.requestTime+pt<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Po(e){const t=e,{installationEntry:i,registrationPromise:o}=await Be(t);return o?o.catch(console.error):Re(t).catch(console.error),i.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Oo(e,t=!1){const i=e;return await Bo(i),(await Re(i,t)).token}async function Bo(e){const{registrationPromise:t}=await Be(e);t&&await t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ro(e){if(!e||!e.options)throw ge("App Configuration");if(!e.name)throw ge("App Name");const t=["projectId","apiKey","appId"];for(const i of t)if(!e.options[i])throw ge(i);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}function ge(e){return F.create("missing-app-config-values",{valueName:e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Et="installations",Lo="installations-internal",jo=e=>{const t=e.getProvider("app").getImmediate(),i=Ro(t),o=Ce(t,"heartbeat");return{app:t,appConfig:i,heartbeatServiceProvider:o,_delete:()=>Promise.resolve()}},Fo=e=>{const t=e.getProvider("app").getImmediate(),i=Ce(t,Et).getImmediate();return{getId:()=>Po(i),getToken:s=>Oo(i,s)}};function Vo(){ee(new te(Et,jo,"PUBLIC")),ee(new te(Lo,Fo,"PRIVATE"))}Vo();Z(ht,Pe);Z(ht,Pe,"esm2017");const Uo=(e,t)=>t.some(i=>e instanceof i);let ze,Ye;function Ko(){return ze||(ze=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Ho(){return Ye||(Ye=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Pt=new WeakMap,Ie=new WeakMap,Ot=new WeakMap,he=new WeakMap,Le=new WeakMap;function qo(e){const t=new Promise((i,o)=>{const s=()=>{e.removeEventListener("success",a),e.removeEventListener("error",l)},a=()=>{i(M(e.result)),s()},l=()=>{o(e.error),s()};e.addEventListener("success",a),e.addEventListener("error",l)});return t.then(i=>{i instanceof IDBCursor&&Pt.set(i,e)}).catch(()=>{}),Le.set(t,e),t}function Wo(e){if(Ie.has(e))return;const t=new Promise((i,o)=>{const s=()=>{e.removeEventListener("complete",a),e.removeEventListener("error",l),e.removeEventListener("abort",l)},a=()=>{i(),s()},l=()=>{o(e.error||new DOMException("AbortError","AbortError")),s()};e.addEventListener("complete",a),e.addEventListener("error",l),e.addEventListener("abort",l)});Ie.set(e,t)}let De={get(e,t,i){if(e instanceof IDBTransaction){if(t==="done")return Ie.get(e);if(t==="objectStoreNames")return e.objectStoreNames||Ot.get(e);if(t==="store")return i.objectStoreNames[1]?void 0:i.objectStore(i.objectStoreNames[0])}return M(e[t])},set(e,t,i){return e[t]=i,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function Go(e){De=e(De)}function xo(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...i){const o=e.call(pe(this),t,...i);return Ot.set(o,t.sort?t.sort():[t]),M(o)}:Ho().includes(e)?function(...t){return e.apply(pe(this),t),M(Pt.get(this))}:function(...t){return M(e.apply(pe(this),t))}}function zo(e){return typeof e=="function"?xo(e):(e instanceof IDBTransaction&&Wo(e),Uo(e,Ko())?new Proxy(e,De):e)}function M(e){if(e instanceof IDBRequest)return qo(e);if(he.has(e))return he.get(e);const t=zo(e);return t!==e&&(he.set(e,t),Le.set(t,e)),t}const pe=e=>Le.get(e);function Bt(e,t,{blocked:i,upgrade:o,blocking:s,terminated:a}={}){const l=indexedDB.open(e,t),f=M(l);return o&&l.addEventListener("upgradeneeded",m=>{o(M(l.result),m.oldVersion,m.newVersion,M(l.transaction))}),i&&l.addEventListener("blocked",()=>i()),f.then(m=>{a&&m.addEventListener("close",()=>a()),s&&m.addEventListener("versionchange",()=>s())}).catch(()=>{}),f}function ve(e,{blocked:t}={}){const i=indexedDB.deleteDatabase(e);return t&&i.addEventListener("blocked",()=>t()),M(i).then(()=>{})}const Yo=["get","getKey","getAll","getAllKeys","count"],Jo=["put","add","delete","clear"],be=new Map;function Je(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(be.get(t))return be.get(t);const i=t.replace(/FromIndex$/,""),o=t!==i,s=Jo.includes(i);if(!(i in(o?IDBIndex:IDBObjectStore).prototype)||!(s||Yo.includes(i)))return;const a=async function(l,...f){const m=this.transaction(l,s?"readwrite":"readonly");let r=m.store;return o&&(r=r.index(f.shift())),(await Promise.all([r[i](...f),s&&m.done]))[0]};return be.set(t,a),a}Go(e=>({...e,get:(t,i,o)=>Je(t,i)||e.get(t,i,o),has:(t,i)=>!!Je(t,i)||e.has(t,i)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xo="/firebase-messaging-sw.js",Qo="/firebase-cloud-messaging-push-scope",Rt="BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4",Zo="https://fcmregistrations.googleapis.com/v1",Lt="google.c.a.c_id",es="google.c.a.c_l",ts="google.c.a.ts",ns="google.c.a.e";var Xe;(function(e){e[e.DATA_MESSAGE=1]="DATA_MESSAGE",e[e.DISPLAY_NOTIFICATION=3]="DISPLAY_NOTIFICATION"})(Xe||(Xe={}));/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License. You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under the License
 * is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express
 * or implied. See the License for the specific language governing permissions and limitations under
 * the License.
 */var z;(function(e){e.PUSH_RECEIVED="push-received",e.NOTIFICATION_CLICKED="notification-clicked"})(z||(z={}));/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function A(e){const t=new Uint8Array(e);return btoa(String.fromCharCode(...t)).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function is(e){const t="=".repeat((4-e.length%4)%4),i=(e+t).replace(/\-/g,"+").replace(/_/g,"/"),o=atob(i),s=new Uint8Array(o.length);for(let a=0;a<o.length;++a)s[a]=o.charCodeAt(a);return s}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _e="fcm_token_details_db",os=5,Qe="fcm_token_object_Store";async function ss(e){if("databases"in indexedDB&&!(await indexedDB.databases()).map(a=>a.name).includes(_e))return null;let t=null;return(await Bt(_e,os,{upgrade:async(o,s,a,l)=>{var f;if(s<2||!o.objectStoreNames.contains(Qe))return;const m=l.objectStore(Qe),r=await m.index("fcmSenderId").get(e);if(await m.clear(),!!r){if(s===2){const h=r;if(!h.auth||!h.p256dh||!h.endpoint)return;t={token:h.fcmToken,createTime:(f=h.createTime)!==null&&f!==void 0?f:Date.now(),subscriptionOptions:{auth:h.auth,p256dh:h.p256dh,endpoint:h.endpoint,swScope:h.swScope,vapidKey:typeof h.vapidKey=="string"?h.vapidKey:A(h.vapidKey)}}}else if(s===3){const h=r;t={token:h.fcmToken,createTime:h.createTime,subscriptionOptions:{auth:A(h.auth),p256dh:A(h.p256dh),endpoint:h.endpoint,swScope:h.swScope,vapidKey:A(h.vapidKey)}}}else if(s===4){const h=r;t={token:h.fcmToken,createTime:h.createTime,subscriptionOptions:{auth:A(h.auth),p256dh:A(h.p256dh),endpoint:h.endpoint,swScope:h.swScope,vapidKey:A(h.vapidKey)}}}}}})).close(),await ve(_e),await ve("fcm_vapid_details_db"),await ve("undefined"),as(t)?t:null}function as(e){if(!e||!e.subscriptionOptions)return!1;const{subscriptionOptions:t}=e;return typeof e.createTime=="number"&&e.createTime>0&&typeof e.token=="string"&&e.token.length>0&&typeof t.auth=="string"&&t.auth.length>0&&typeof t.p256dh=="string"&&t.p256dh.length>0&&typeof t.endpoint=="string"&&t.endpoint.length>0&&typeof t.swScope=="string"&&t.swScope.length>0&&typeof t.vapidKey=="string"&&t.vapidKey.length>0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rs="firebase-messaging-database",cs=1,U="firebase-messaging-store";let ye=null;function je(){return ye||(ye=Bt(rs,cs,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(U)}}})),ye}async function jt(e){const t=Ve(e),o=await(await je()).transaction(U).objectStore(U).get(t);if(o)return o;{const s=await ss(e.appConfig.senderId);if(s)return await Fe(e,s),s}}async function Fe(e,t){const i=Ve(e),s=(await je()).transaction(U,"readwrite");return await s.objectStore(U).put(t,i),await s.done,t}async function ls(e){const t=Ve(e),o=(await je()).transaction(U,"readwrite");await o.objectStore(U).delete(t),await o.done}function Ve({appConfig:e}){return e.appId}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ds={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["only-available-in-window"]:"This method is available in a Window context.",["only-available-in-sw"]:"This method is available in a service worker context.",["permission-default"]:"The notification permission was not granted and dismissed instead.",["permission-blocked"]:"The notification permission was not granted and blocked instead.",["unsupported-browser"]:"This browser doesn't support the API's required to use the Firebase SDK.",["indexed-db-unsupported"]:"This browser doesn't support indexedDb.open() (ex. Safari iFrame, Firefox Private Browsing, etc)",["failed-service-worker-registration"]:"We are unable to register the default service worker. {$browserErrorMessage}",["token-subscribe-failed"]:"A problem occurred while subscribing the user to FCM: {$errorInfo}",["token-subscribe-no-token"]:"FCM returned no token when subscribing the user to push.",["token-unsubscribe-failed"]:"A problem occurred while unsubscribing the user from FCM: {$errorInfo}",["token-update-failed"]:"A problem occurred while updating the user from FCM: {$errorInfo}",["token-update-no-token"]:"FCM returned no token when updating the user to push.",["use-sw-after-get-token"]:"The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.",["invalid-sw-registration"]:"The input to useServiceWorker() must be a ServiceWorkerRegistration.",["invalid-bg-handler"]:"The input to setBackgroundMessageHandler() must be a function.",["invalid-vapid-key"]:"The public VAPID key must be a string.",["use-vapid-key-after-get-token"]:"The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used."},S=new rt("messaging","Messaging",ds);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function us(e,t){const i=await Ke(e),o=Vt(t),s={method:"POST",headers:i,body:JSON.stringify(o)};let a;try{a=await(await fetch(Ue(e.appConfig),s)).json()}catch(l){throw S.create("token-subscribe-failed",{errorInfo:l==null?void 0:l.toString()})}if(a.error){const l=a.error.message;throw S.create("token-subscribe-failed",{errorInfo:l})}if(!a.token)throw S.create("token-subscribe-no-token");return a.token}async function fs(e,t){const i=await Ke(e),o=Vt(t.subscriptionOptions),s={method:"PATCH",headers:i,body:JSON.stringify(o)};let a;try{a=await(await fetch(`${Ue(e.appConfig)}/${t.token}`,s)).json()}catch(l){throw S.create("token-update-failed",{errorInfo:l==null?void 0:l.toString()})}if(a.error){const l=a.error.message;throw S.create("token-update-failed",{errorInfo:l})}if(!a.token)throw S.create("token-update-no-token");return a.token}async function Ft(e,t){const o={method:"DELETE",headers:await Ke(e)};try{const a=await(await fetch(`${Ue(e.appConfig)}/${t}`,o)).json();if(a.error){const l=a.error.message;throw S.create("token-unsubscribe-failed",{errorInfo:l})}}catch(s){throw S.create("token-unsubscribe-failed",{errorInfo:s==null?void 0:s.toString()})}}function Ue({projectId:e}){return`${Zo}/projects/${e}/registrations`}async function Ke({appConfig:e,installations:t}){const i=await t.getToken();return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e.apiKey,"x-goog-firebase-installations-auth":`FIS ${i}`})}function Vt({p256dh:e,auth:t,endpoint:i,vapidKey:o}){const s={web:{endpoint:i,auth:t,p256dh:e}};return o!==Rt&&(s.web.applicationPubKey=o),s}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ms=7*24*60*60*1e3;async function gs(e){const t=await vs(e.swRegistration,e.vapidKey),i={vapidKey:e.vapidKey,swScope:e.swRegistration.scope,endpoint:t.endpoint,auth:A(t.getKey("auth")),p256dh:A(t.getKey("p256dh"))},o=await jt(e.firebaseDependencies);if(o){if(bs(o.subscriptionOptions,i))return Date.now()>=o.createTime+ms?ps(e,{token:o.token,createTime:Date.now(),subscriptionOptions:i}):o.token;try{await Ft(e.firebaseDependencies,o.token)}catch(s){console.warn(s)}return Ze(e.firebaseDependencies,i)}else return Ze(e.firebaseDependencies,i)}async function hs(e){const t=await jt(e.firebaseDependencies);t&&(await Ft(e.firebaseDependencies,t.token),await ls(e.firebaseDependencies));const i=await e.swRegistration.pushManager.getSubscription();return i?i.unsubscribe():!0}async function ps(e,t){try{const i=await fs(e.firebaseDependencies,t),o=Object.assign(Object.assign({},t),{token:i,createTime:Date.now()});return await Fe(e.firebaseDependencies,o),i}catch(i){throw await hs(e),i}}async function Ze(e,t){const o={token:await us(e,t),createTime:Date.now(),subscriptionOptions:t};return await Fe(e,o),o.token}async function vs(e,t){const i=await e.pushManager.getSubscription();return i||e.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:is(t)})}function bs(e,t){const i=t.vapidKey===e.vapidKey,o=t.endpoint===e.endpoint,s=t.auth===e.auth,a=t.p256dh===e.p256dh;return i&&o&&s&&a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function et(e){const t={from:e.from,collapseKey:e.collapse_key,messageId:e.fcmMessageId};return _s(t,e),ys(t,e),ws(t,e),t}function _s(e,t){if(!t.notification)return;e.notification={};const i=t.notification.title;i&&(e.notification.title=i);const o=t.notification.body;o&&(e.notification.body=o);const s=t.notification.image;s&&(e.notification.image=s);const a=t.notification.icon;a&&(e.notification.icon=a)}function ys(e,t){t.data&&(e.data=t.data)}function ws(e,t){var i,o,s,a,l;if(!t.fcmOptions&&!(!((i=t.notification)===null||i===void 0)&&i.click_action))return;e.fcmOptions={};const f=(s=(o=t.fcmOptions)===null||o===void 0?void 0:o.link)!==null&&s!==void 0?s:(a=t.notification)===null||a===void 0?void 0:a.click_action;f&&(e.fcmOptions.link=f);const m=(l=t.fcmOptions)===null||l===void 0?void 0:l.analytics_label;m&&(e.fcmOptions.analyticsLabel=m)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ks(e){return typeof e=="object"&&!!e&&Lt in e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ut("hts/frbslgigp.ogepscmv/ieo/eaylg","tp:/ieaeogn-agolai.o/1frlglgc/o");Ut("AzSCbw63g1R0nCw85jG8","Iaya3yLKwmgvh7cF0q4");function Ut(e,t){const i=[];for(let o=0;o<e.length;o++)i.push(e.charAt(o)),o<t.length&&i.push(t.charAt(o));return i.join("")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $s(e){if(!e||!e.options)throw we("App Configuration Object");if(!e.name)throw we("App Name");const t=["projectId","apiKey","appId","messagingSenderId"],{options:i}=e;for(const o of t)if(!i[o])throw we(o);return{appName:e.name,projectId:i.projectId,apiKey:i.apiKey,appId:i.appId,senderId:i.messagingSenderId}}function we(e){return S.create("missing-app-config-values",{valueName:e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ss{constructor(t,i,o){this.deliveryMetricsExportedToBigQueryEnabled=!1,this.onBackgroundMessageHandler=null,this.onMessageHandler=null,this.logEvents=[],this.isLogServiceStarted=!1;const s=$s(t);this.firebaseDependencies={app:t,appConfig:s,installations:i,analyticsProvider:o}}_delete(){return Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Is(e){try{e.swRegistration=await navigator.serviceWorker.register(Xo,{scope:Qo}),e.swRegistration.update().catch(()=>{})}catch(t){throw S.create("failed-service-worker-registration",{browserErrorMessage:t==null?void 0:t.message})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ds(e,t){if(!t&&!e.swRegistration&&await Is(e),!(!t&&e.swRegistration)){if(!(t instanceof ServiceWorkerRegistration))throw S.create("invalid-sw-registration");e.swRegistration=t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ts(e,t){t?e.vapidKey=t:e.vapidKey||(e.vapidKey=Rt)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Kt(e,t){if(!navigator)throw S.create("only-available-in-window");if(Notification.permission==="default"&&await Notification.requestPermission(),Notification.permission!=="granted")throw S.create("permission-blocked");return await Ts(e,t==null?void 0:t.vapidKey),await Ds(e,t==null?void 0:t.serviceWorkerRegistration),gs(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ns(e,t,i){const o=As(t);(await e.firebaseDependencies.analyticsProvider.get()).logEvent(o,{message_id:i[Lt],message_name:i[es],message_time:i[ts],message_device_time:Math.floor(Date.now()/1e3)})}function As(e){switch(e){case z.NOTIFICATION_CLICKED:return"notification_open";case z.PUSH_RECEIVED:return"notification_foreground";default:throw new Error}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Cs(e,t){const i=t.data;if(!i.isFirebaseMessaging)return;e.onMessageHandler&&i.messageType===z.PUSH_RECEIVED&&(typeof e.onMessageHandler=="function"?e.onMessageHandler(et(i)):e.onMessageHandler.next(et(i)));const o=i.data;ks(o)&&o[ns]==="1"&&await Ns(e,i.messageType,o)}const tt="@firebase/messaging",nt="0.12.4";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ms=e=>{const t=new Ss(e.getProvider("app").getImmediate(),e.getProvider("installations-internal").getImmediate(),e.getProvider("analytics-internal"));return navigator.serviceWorker.addEventListener("message",i=>Cs(t,i)),t},Es=e=>{const t=e.getProvider("messaging").getImmediate();return{getToken:o=>Kt(t,o)}};function Ps(){ee(new te("messaging",Ms,"PUBLIC")),ee(new te("messaging-internal",Es,"PRIVATE")),Z(tt,nt),Z(tt,nt,"esm2017")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Os(){try{await Jt()}catch{return!1}return typeof window<"u"&&Xt()&&Qt()&&"serviceWorker"in navigator&&"PushManager"in window&&"Notification"in window&&"fetch"in window&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bs(e=Yt()){return Os().then(t=>{if(!t)throw S.create("unsupported-browser")},t=>{throw S.create("indexed-db-unsupported")}),Ce(ct(e),"messaging").getImmediate()}async function Rs(e,t){return e=ct(e),Kt(e,t)}Ps();const Ls=st({name:"ElusiveTargetNotificationsModal",setup(){const e=lt();return{environment:e.public.firebaseEnvironment,apiDomain:e.public.apiDomain}},data(){return{messaging:null,messagingSupported:void 0,messagingPermitted:void 0,token:null,notifications:{new:{almostPlayable:!1,becomesPlayable:!1,sevenDays:!1,fiveDays:!1,threeDays:!1,oneDay:!1,ended:!1},reactivation:{almostPlayable:!1,becomesPlayable:!1,sevenDays:!1,fiveDays:!1,threeDays:!1,oneDay:!1,ended:!1}},previousNotificationsState:{new:{almostPlayable:!1,becomesPlayable:!1,sevenDays:!1,fiveDays:!1,threeDays:!1,oneDay:!1,ended:!1},reactivation:{almostPlayable:!1,becomesPlayable:!1,sevenDays:!1,fiveDays:!1,threeDays:!1,oneDay:!1,ended:!1}}}},mounted(){try{const e=Zt();this.messaging=Bs(e),this.messagingSupported=!0}catch(e){console.log(e),this.messagingSupported=!1}},methods:{loadTokenState(){this.messagingSupported&&Rs(this.messaging,{vapidKey:"BPNrkIqrzWoYKu9BblgGOX-DuOjUwQnHm5dXANfAmrNYiCkL2bY3-oinMFfM7K5rRcW7Ej6PygQfGbCXw1pklG4"}).then(e=>{this.token=e,this.messagingPermitted=!0,this.setInitialCheckboxState()}).catch(e=>{console.error(e),this.messagingPermitted=!1})},setInitialCheckboxState(){this.notifications.new.almostPlayable=window.localStorage.getItem(`${this.token}|hitmaps-${this.environment}-elusive-target-coming`)==="1",this.notifications.new.becomesPlayable=window.localStorage.getItem(`${this.token}|hitmaps-${this.environment}-elusive-target-playable`)==="1",this.notifications.new.sevenDays=window.localStorage.getItem(`${this.token}|hitmaps-${this.environment}-elusive-target-7`)==="1",this.notifications.new.fiveDays=window.localStorage.getItem(`${this.token}|hitmaps-${this.environment}-elusive-target-5`)==="1",this.notifications.new.threeDays=window.localStorage.getItem(`${this.token}|hitmaps-${this.environment}-elusive-target-3`)==="1",this.notifications.new.oneDay=window.localStorage.getItem(`${this.token}|hitmaps-${this.environment}-elusive-target-1`)==="1",this.notifications.new.ended=window.localStorage.getItem(`${this.token}|hitmaps-${this.environment}-elusive-target-end`)==="1",this.notifications.reactivation.almostPlayable=window.localStorage.getItem(`${this.token}|hitmaps-${this.environment}-reactivation-elusive-target-coming`)==="1",this.notifications.reactivation.becomesPlayable=window.localStorage.getItem(`${this.token}|hitmaps-${this.environment}-reactivation-elusive-target-playable`)==="1",this.notifications.reactivation.sevenDays=window.localStorage.getItem(`${this.token}|hitmaps-${this.environment}-reactivation-elusive-target-7`)==="1",this.notifications.reactivation.fiveDays=window.localStorage.getItem(`${this.token}|hitmaps-${this.environment}-reactivation-elusive-target-5`)==="1",this.notifications.reactivation.threeDays=window.localStorage.getItem(`${this.token}|hitmaps-${this.environment}-reactivation-elusive-target-3`)==="1",this.notifications.reactivation.oneDay=window.localStorage.getItem(`${this.token}|hitmaps-${this.environment}-reactivation-elusive-target-1`)==="1",this.notifications.reactivation.ended=window.localStorage.getItem(`${this.token}|hitmaps-${this.environment}-reactivation-elusive-target-end`)==="1",this.previousNotificationsState.new.almostPlayable=this.notifications.new.almostPlayable,this.previousNotificationsState.new.becomesPlayable=this.notifications.new.becomesPlayable,this.previousNotificationsState.new.sevenDays=this.notifications.new.sevenDays,this.previousNotificationsState.new.fiveDays=this.notifications.new.fiveDays,this.previousNotificationsState.new.threeDays=this.notifications.new.threeDays,this.previousNotificationsState.new.oneDay=this.notifications.new.oneDay,this.previousNotificationsState.new.ended=this.notifications.new.ended,this.previousNotificationsState.reactivation.almostPlayable=this.notifications.reactivation.almostPlayable,this.previousNotificationsState.reactivation.becomesPlayable=this.notifications.reactivation.becomesPlayable,this.previousNotificationsState.reactivation.sevenDays=this.notifications.reactivation.sevenDays,this.previousNotificationsState.reactivation.fiveDays=this.notifications.reactivation.fiveDays,this.previousNotificationsState.reactivation.threeDays=this.notifications.reactivation.threeDays,this.previousNotificationsState.reactivation.oneDay=this.notifications.reactivation.oneDay,this.previousNotificationsState.reactivation.ended=this.notifications.reactivation.ended},toggleNotificationState(){let e=!1,t=!1;this.notifications.new.almostPlayable!==this.previousNotificationsState.new.almostPlayable&&(e=!0,t=this.notifications.new.almostPlayable),this.notifications.new.becomesPlayable!==this.previousNotificationsState.new.becomesPlayable&&(e=!0,t=this.notifications.new.becomesPlayable),this.notifications.new.sevenDays!==this.previousNotificationsState.new.sevenDays&&(e=!0,t=this.notifications.new.sevenDays),this.notifications.new.fiveDays!==this.previousNotificationsState.new.fiveDays&&(e=!0,t=this.notifications.new.fiveDays),this.notifications.new.threeDays!==this.previousNotificationsState.new.threeDays&&(e=!0,t=this.notifications.new.threeDays),this.notifications.new.oneDay!==this.previousNotificationsState.new.oneDay&&(e=!0,t=this.notifications.new.oneDay),this.notifications.new.ended!==this.previousNotificationsState.new.ended&&(e=!0,t=this.notifications.new.ended),this.notifications.reactivation.almostPlayable!==this.previousNotificationsState.reactivation.almostPlayable&&(e=!0,t=this.notifications.reactivation.almostPlayable),this.notifications.reactivation.becomesPlayable!==this.previousNotificationsState.reactivation.becomesPlayable&&(e=!0,t=this.notifications.reactivation.becomesPlayable),this.notifications.reactivation.sevenDays!==this.previousNotificationsState.reactivation.sevenDays&&(e=!0,t=this.notifications.reactivation.sevenDays),this.notifications.reactivation.fiveDays!==this.previousNotificationsState.reactivation.fiveDays&&(e=!0,t=this.notifications.reactivation.fiveDays),this.notifications.reactivation.threeDays!==this.previousNotificationsState.reactivation.threeDays&&(e=!0,t=this.notifications.reactivation.threeDays),this.notifications.reactivation.oneDay!==this.previousNotificationsState.reactivation.oneDay&&(e=!0,t=this.notifications.reactivation.oneDay),this.notifications.reactivation.ended!==this.previousNotificationsState.reactivation.ended&&(e=!0,t=this.notifications.reactivation.ended);const i=`hitmaps-${this.environment}-requestType`;e&&cn(`${this.apiDomain}/api/notifications`,{method:"POST",body:{token:this.token,state:t?"SUBSCRIBING":"UNSUBSCRIBING",topic:i}}).then(o=>{window.localStorage.setItem(`${this.token}|${i}`,t?"1":"0"),this.previousNotificationsState.new.almostPlayable=this.notifications.new.almostPlayable,this.previousNotificationsState.new.becomesPlayable=this.notifications.new.becomesPlayable,this.previousNotificationsState.new.sevenDays=this.notifications.new.sevenDays,this.previousNotificationsState.new.fiveDays=this.notifications.new.fiveDays,this.previousNotificationsState.new.threeDays=this.notifications.new.threeDays,this.previousNotificationsState.new.oneDay=this.notifications.new.oneDay,this.previousNotificationsState.new.ended=this.notifications.new.ended,this.previousNotificationsState.reactivation.almostPlayable=this.notifications.reactivation.almostPlayable,this.previousNotificationsState.reactivation.becomesPlayable=this.notifications.reactivation.becomesPlayable,this.previousNotificationsState.reactivation.sevenDays=this.notifications.reactivation.sevenDays,this.previousNotificationsState.reactivation.fiveDays=this.notifications.reactivation.fiveDays,this.previousNotificationsState.reactivation.threeDays=this.notifications.reactivation.threeDays,this.previousNotificationsState.reactivation.oneDay=this.notifications.reactivation.oneDay,this.previousNotificationsState.reactivation.ended=this.notifications.reactivation.ended,this.$toastr.s("Notification preferences updated!")})},showModal(){this.$refs["notification-modal"].showModal(),this.loadTokenState()},hideModal(){this.$refs["notification-modal"].hideModal()}}});const Ht=e=>(H("data-v-9834817a"),e=e(),q(),e),js={key:0},Fs={class:"spinner-grow",role:"status"},Vs={class:"visually-hidden"},Us={key:1},Ks=Ht(()=>n("ul",null,[n("li",null,[g(" Android "),n("ul",null,[n("li",null,[n("a",{href:"https://play.google.com/store/apps/details?id=com.android.chrome&hl=en_US"}," Google Chrome ")]),n("li",null,[n("a",{href:"https://play.google.com/store/apps/details?id=org.mozilla.firefox&hl=en_US"}," Firefox ")]),n("li",null,[n("a",{href:"https://play.google.com/store/apps/details?id=com.brave.browser&hl=en_US"}," Brave ")])])]),n("li",null,[g(" Desktop "),n("ul",null,[n("li",null,[n("a",{href:"https://www.google.com/chrome/"}," Google Chrome ")]),n("li",null,"Microsoft Edge"),n("li",null,[n("a",{href:"https://www.mozilla.org/en-US/firefox/new/"}," Firefox ")]),n("li",null,[n("a",{href:"https://www.opera.com/computer"}," Opera ")])])])],-1)),Hs={key:0},qs=Ht(()=>n("p",{id:"error-container"},null,-1)),Ws={key:1},Gs={key:2},xs={class:"table"},zs=["data-firebase-topic"],Ys=["data-firebase-topic"],Js=["data-firebase-topic"],Xs=["data-firebase-topic"],Qs=["data-firebase-topic"],Zs=["data-firebase-topic"],ea=["data-firebase-topic"],ta=["data-firebase-topic"],na=["data-firebase-topic"],ia=["data-firebase-topic"],oa=["data-firebase-topic"],sa=["data-firebase-topic"],aa=["data-firebase-topic"],ra=["data-firebase-topic"];function ca(e,t,i,o,s,a){const l=W,f=Me,m=Ne;return v(),L(m,{ref:"notification-modal",id:"notification-modal","modal-title":e.$t("elusive-target.notifications.manage-notifications-modal-title")},{"modal-footer":y(()=>[d(f,{onClick:e.hideModal},{default:y(()=>[d(l,{icon:"failed","font-style":"normal"}),g(" "+c(e.$t("form.close")),1)]),_:1},8,["onClick"])]),default:y(()=>[e.messagingSupported===void 0?(v(),b("div",js,[n("h6",null,c(e.$t("elusive-target.notifications.checking-if-enabled")),1),n("div",Fs,[n("span",Vs,c(e.$t("form.loading")),1)])])):e.messagingSupported?(v(),b(P,{key:2},[e.messagingPermitted===void 0?(v(),b("div",Hs,[n("h6",null,c(e.$t("elusive-target.notifications.device-not-enrolled")),1),qs])):e.messagingPermitted?(v(),b("div",Gs,[n("table",xs,[n("thead",null,[n("tr",null,[n("td",null,c(e.$t("elusive-target.notifications.send-me-a-notification-when")),1),n("td",null,c(e.$t("elusive-target.notifications.new-et")),1),n("td",null,c(e.$t("elusive-target.notifications.reactivated-et")),1)])]),n("tbody",null,[n("tr",null,[n("td",null,c(e.$t("elusive-target.notifications.announced")),1),n("td",null,[w(n("input",{type:"checkbox",class:"form-check-input",id:"elusive-target-coming",onChange:t[0]||(t[0]=(...r)=>e.toggleNotificationState&&e.toggleNotificationState(...r)),"data-firebase-topic":"hitmaps-"+e.environment+"-elusive-target-coming","onUpdate:modelValue":t[1]||(t[1]=r=>e.notifications.new.almostPlayable=r)},null,40,zs),[[I,e.notifications.new.almostPlayable]])]),n("td",null,[w(n("input",{type:"checkbox",class:"form-check-input",id:"reactivation-elusive-target-coming",onChange:t[2]||(t[2]=(...r)=>e.toggleNotificationState&&e.toggleNotificationState(...r)),"data-firebase-topic":"hitmaps-"+e.environment+"-reactivation-elusive-target-coming","onUpdate:modelValue":t[3]||(t[3]=r=>e.notifications.reactivation.almostPlayable=r)},null,40,Ys),[[I,e.notifications.reactivation.almostPlayable]])])]),n("tr",null,[n("td",null,c(e.$t("elusive-target.notifications.playable")),1),n("td",null,[w(n("input",{type:"checkbox",class:"form-check-input",id:"elusive-target-playable",onChange:t[4]||(t[4]=(...r)=>e.toggleNotificationState&&e.toggleNotificationState(...r)),"data-firebase-topic":"hitmaps-"+e.environment+"-elusive-target-playable","onUpdate:modelValue":t[5]||(t[5]=r=>e.notifications.new.becomesPlayable=r)},null,40,Js),[[I,e.notifications.new.becomesPlayable]])]),n("td",null,[w(n("input",{type:"checkbox",class:"form-check-input",id:"reactivation-elusive-target-playable",onChange:t[6]||(t[6]=(...r)=>e.toggleNotificationState&&e.toggleNotificationState(...r)),"data-firebase-topic":"hitmaps-"+e.environment+"-reactivation-elusive-target-playable","onUpdate:modelValue":t[7]||(t[7]=r=>e.notifications.reactivation.becomesPlayable=r)},null,40,Xs),[[I,e.notifications.reactivation.becomesPlayable]])])]),n("tr",null,[n("td",null,c(e.$t("elusive-target.notifications.7-days")),1),n("td",null,[w(n("input",{type:"checkbox",class:"form-check-input",id:"elusive-target-7",onChange:t[8]||(t[8]=(...r)=>e.toggleNotificationState&&e.toggleNotificationState(...r)),"data-firebase-topic":"hitmaps-"+e.environment+"-elusive-target-7","onUpdate:modelValue":t[9]||(t[9]=r=>e.notifications.new.sevenDays=r)},null,40,Qs),[[I,e.notifications.new.sevenDays]])]),n("td",null,[w(n("input",{type:"checkbox",class:"form-check-input",id:"reactivation-elusive-target-7",onChange:t[10]||(t[10]=(...r)=>e.toggleNotificationState&&e.toggleNotificationState(...r)),"data-firebase-topic":"hitmaps-"+e.environment+"-reactivation-elusive-target-7","onUpdate:modelValue":t[11]||(t[11]=r=>e.notifications.reactivation.sevenDays=r)},null,40,Zs),[[I,e.notifications.reactivation.sevenDays]])])]),n("tr",null,[n("td",null,c(e.$t("elusive-target.notifications.5-days")),1),n("td",null,[w(n("input",{type:"checkbox",class:"form-check-input",id:"elusive-target-5",onChange:t[12]||(t[12]=(...r)=>e.toggleNotificationState&&e.toggleNotificationState(...r)),"data-firebase-topic":"hitmaps-"+e.environment+"-elusive-target-5","onUpdate:modelValue":t[13]||(t[13]=r=>e.notifications.new.fiveDays=r)},null,40,ea),[[I,e.notifications.new.fiveDays]])]),n("td",null,[w(n("input",{type:"checkbox",class:"form-check-input",id:"reactivation-elusive-target-5",onChange:t[14]||(t[14]=(...r)=>e.toggleNotificationState&&e.toggleNotificationState(...r)),"data-firebase-topic":"hitmaps-"+e.environment+"-reactivation-elusive-target-5","onUpdate:modelValue":t[15]||(t[15]=r=>e.notifications.reactivation.fiveDays=r)},null,40,ta),[[I,e.notifications.reactivation.fiveDays]])])]),n("tr",null,[n("td",null,c(e.$t("elusive-target.notifications.3-days")),1),n("td",null,[w(n("input",{type:"checkbox",class:"form-check-input",id:"elusive-target-3",onChange:t[16]||(t[16]=(...r)=>e.toggleNotificationState&&e.toggleNotificationState(...r)),"data-firebase-topic":"hitmaps-"+e.environment+"-elusive-target-3","onUpdate:modelValue":t[17]||(t[17]=r=>e.notifications.new.threeDays=r)},null,40,na),[[I,e.notifications.new.threeDays]])]),n("td",null,[w(n("input",{type:"checkbox",class:"form-check-input",id:"reactivation-elusive-target-3",onChange:t[18]||(t[18]=(...r)=>e.toggleNotificationState&&e.toggleNotificationState(...r)),"data-firebase-topic":"hitmaps-"+e.environment+"-reactivation-elusive-target-3","onUpdate:modelValue":t[19]||(t[19]=r=>e.notifications.reactivation.threeDays=r)},null,40,ia),[[I,e.notifications.reactivation.threeDays]])])]),n("tr",null,[n("td",null,c(e.$t("elusive-target.notifications.1-day")),1),n("td",null,[w(n("input",{type:"checkbox",class:"form-check-input",id:"elusive-target-1",onChange:t[20]||(t[20]=(...r)=>e.toggleNotificationState&&e.toggleNotificationState(...r)),"data-firebase-topic":"hitmaps-"+e.environment+"-elusive-target-1","onUpdate:modelValue":t[21]||(t[21]=r=>e.notifications.new.oneDay=r)},null,40,oa),[[I,e.notifications.new.oneDay]])]),n("td",null,[w(n("input",{type:"checkbox",class:"form-check-input",id:"reactivation-elusive-target-1",onChange:t[22]||(t[22]=(...r)=>e.toggleNotificationState&&e.toggleNotificationState(...r)),"data-firebase-topic":"hitmaps-"+e.environment+"-reactivation-elusive-target-1","onUpdate:modelValue":t[23]||(t[23]=r=>e.notifications.reactivation.oneDay=r)},null,40,sa),[[I,e.notifications.reactivation.oneDay]])])]),n("tr",null,[n("td",null,c(e.$t("elusive-target.notifications.ended")),1),n("td",null,[w(n("input",{type:"checkbox",class:"form-check-input",id:"elusive-target-end",onChange:t[24]||(t[24]=(...r)=>e.toggleNotificationState&&e.toggleNotificationState(...r)),"data-firebase-topic":"hitmaps-"+e.environment+"-elusive-target-end","onUpdate:modelValue":t[25]||(t[25]=r=>e.notifications.new.ended=r)},null,40,aa),[[I,e.notifications.new.ended]])]),n("td",null,[w(n("input",{type:"checkbox",class:"form-check-input",id:"reactivation-elusive-target-end",onChange:t[26]||(t[26]=(...r)=>e.toggleNotificationState&&e.toggleNotificationState(...r)),"data-firebase-topic":"hitmaps-"+e.environment+"-reactivation-elusive-target-end","onUpdate:modelValue":t[27]||(t[27]=r=>e.notifications.reactivation.ended=r)},null,40,ra),[[I,e.notifications.reactivation.ended]])])])])])])):(v(),b("div",Ws,[n("h6",null,c(e.$t("elusive-target.notifications.notifications-blocked")),1)]))],64)):(v(),b("div",Us,[n("h6",null,c(e.$t("elusive-target.notifications.unsupported-browser")),1),Ks]))]),_:1},8,["modal-title"])}const la=E(Ls,[["render",ca],["__scopeId","data-v-9834817a"]]);const k=e=>(H("data-v-2cfa87cd"),e=e(),q(),e),da={class:"content",style:{background:"url('https://media.hitmaps.com/img/hitman3/backgrounds/menu_bg.jpg') no-repeat center center fixed","background-size":"cover"}},ua={class:"container-fluid"},fa={class:"text-center site-header"},ma=k(()=>n("img",{src:un,class:"img-fluid",alt:"HITMAPS Logo"},null,-1)),ga={key:0,class:"container-fluid"},ha={class:"row dashboard",id:"games"},pa={class:"col-lg-4 section"},va={class:"heading"},ba=k(()=>n("hr",{class:"bar"},null,-1)),_a=k(()=>n("hr",{class:"bar"},null,-1)),ya={class:"game-cards"},wa={class:"col-lg-4 section"},ka={class:"heading"},$a=k(()=>n("hr",{class:"bar"},null,-1)),Sa=k(()=>n("hr",{class:"bar"},null,-1)),Ia={class:"game-cards"},Da={class:"col-lg-4 section"},Ta={class:"heading"},Na=k(()=>n("hr",{class:"bar"},null,-1)),Aa=k(()=>n("hr",{class:"bar"},null,-1)),Ca={class:"game-cards"},Ma={class:"patreon community-server",id:"game-modes"},Ea={class:"row intro"},Pa={class:"col-xs-12"},Oa={href:"https://gitlab.com/grappigegovert/localghost/-/jobs/artifacts/master/download?job=build_patcher",target:"_blank"},Ba=k(()=>n("code",null,"gm.hitmaps.com",-1)),Ra={class:"patreon game-mode community-server",id:"game-modes-roulette"},La={class:"row roulette"},ja={class:"col-lg-4"},Fa=k(()=>n("img",{src:"https://media.hitmaps.com/img/hitmaps-custom/roulette-logo.png",class:"img-fluid",alt:"HITMAPS Roulette Logo"},null,-1)),Va={class:"row"},Ua={class:"col-xs-12 available-on"},Ka={class:"badge bg-success"},Ha={class:"badge bg-success"},qa={class:"badge bg-success"},Wa={class:"badge bg-success"},Ga=k(()=>n("div",{class:"col-xs-12"},[n("img",{src:"https://media.hitmaps.com/img/hitmaps-custom/sample-website-spin.png?w=500",class:"img-fluid",alt:"Screenshot of Website Spin"})],-1)),xa={class:"col-lg-8"},za={href:"https://thekotti.github.io/hitman.html"},Ya={class:"btn square-button white",target:"_blank",href:"https://roulette.hitmaps.com"},Ja={class:"patreon game-mode community-server",id:"game-modes-ghost-mode"},Xa={class:"row game-mode ghost-mode"},Qa={class:"col-lg-4"},Za={class:"row"},er={class:"col-xs-12 available-on"},tr={class:"badge bg-danger"},nr={class:"badge bg-danger"},ir={class:"badge bg-success"},or={class:"badge bg-success"},sr=k(()=>n("div",{class:"col-xs-12"},[n("img",{src:"https://media.hitmaps.com/img/hitman3/gamemodes/briefing_ghostmode.jpg?w=500",alt:"Ghost Mode Image",class:"img-fluid"})],-1)),ar={class:"col-lg-8"},rr={class:"btn square-button white",target:"_blank",href:"https://www.nexusmods.com/hitman3/mods/260"},cr={class:"row"},lr=k(()=>n("div",{class:"col"},[n("p",null,[n("b",null,"HITMAN™ 2")]),n("ul",null,[n("li",null,"Miami"),n("li",null,"Santa Fortuna")])],-1)),dr={class:"col"},ur=k(()=>n("p",null,[n("b",null,"HITMAN™ World of Assassination")],-1)),fr={href:"https://www.nexusmods.com/hitman3/mods/303",target:"_blank"},mr=k(()=>n("li",null,"Miami",-1)),gr=k(()=>n("li",null,"Santa Fortuna",-1)),hr={class:"patreon game-mode community-server",id:"game-modes-taskmaster"},pr={class:"row taskmaster"},vr={class:"col-lg-4"},br={class:"row"},_r={class:"col-xs-12 available-on"},yr={class:"badge bg-danger"},wr={class:"badge bg-danger"},kr={class:"badge bg-danger"},$r={class:"badge bg-success"},Sr=k(()=>n("div",{class:"col-xs-12"},[n("img",{src:"https://media.hitmaps.com/img/hitmaps-custom/taskmaster-screenshot.jpg?w=500",alt:"Ghost Mode Image",class:"img-fluid"})],-1)),Ir={class:"col-lg-8"},Dr=on('<div class="row" data-v-2cfa87cd><div class="col" data-v-2cfa87cd><ul data-v-2cfa87cd><li data-v-2cfa87cd>The Showstopper (Paris)</li><li data-v-2cfa87cd>World of Tomorrow (Sapienza)</li><li data-v-2cfa87cd>A Gilded Cage (Marrakesh)</li><li data-v-2cfa87cd>Club 27 (Bangkok)</li><li data-v-2cfa87cd>Freedom Fighters (Colorado)</li><li data-v-2cfa87cd>Situs Inversus (Hokkaido)</li></ul></div><div class="col" data-v-2cfa87cd><ul data-v-2cfa87cd><li data-v-2cfa87cd>The Finish Line (Miami)</li><li data-v-2cfa87cd>Three-Headed Serpent (Santa Fortuna)</li><li data-v-2cfa87cd>Chasing A Ghost (Mumbai)</li><li data-v-2cfa87cd>Another Life (Whittleton Creek)</li><li data-v-2cfa87cd>The Ark Society (Isle of Sgail)</li><li data-v-2cfa87cd>Golden Handshake (New York)</li><li data-v-2cfa87cd>The Last Resort (Haven Island)</li></ul></div><div class="col" data-v-2cfa87cd><ul data-v-2cfa87cd><li data-v-2cfa87cd>On Top Of The World (Dubai)</li><li data-v-2cfa87cd>Death In The Family (Dartmoor)</li><li data-v-2cfa87cd>Apex Predator (Berlin)</li><li data-v-2cfa87cd>End of an Era (Chongqing)</li><li data-v-2cfa87cd>The Farewell (Mendoza)</li><li data-v-2cfa87cd>Shadows in the Water (Ambrose Island)</li></ul></div></div>',1),Tr={class:"patreon",id:"partners"},Nr={class:"row intro"},Ar={class:"col-xs-12"},Cr={class:"row"},Mr={class:"col-md-6 partner"},Er=k(()=>n("div",{class:"image"},[n("img",{src:"https://media.hitmaps.com/img/hitmaps-custom/f7sc-logo.png",style:{width:"128px",height:"128px"},alt:"F7SC Logo"})],-1)),Pr={class:"text"},Or={href:"https://discord.gg/FVxTKdU",target:"_blank",class:"btn square-button blurple"},Br={class:"col-md-6 partner"},Rr=k(()=>n("div",{class:"image"},[n("img",{src:"https://media.hitmaps.com/img/hitmaps-custom/rrstats-logo.png",style:{width:"128px",height:"128px"},alt:"RRStats Logo"})],-1)),Lr={class:"text"},jr={href:"https://rrstats.currymaker.net",target:"_blank",class:"btn btn-dark square-button"},Fr={class:"patreon community-server",id:"kofi"},Vr={class:"row intro"},Ur={class:"col-xs-12"},Kr={class:"row"},Hr={class:"col"},qr={href:"https://ko-fi.com/mrmike227",class:"btn patreon-button"},Wr={__name:"index",async setup(e){let t,i;const o=lt(),{t:s}=Y(),{data:a,pending:l}=([t,i]=en(()=>dn(`${o.public.apiDomain}/api/web/home`,"$PslAyef5YX")),t=await t,i(),t),f=a.value.games,m=a.value.elusiveTargets,r=B(null);function h(){r.value.showModal()}return tn({ogTitle:()=>rn.siteTitle(s("home"))}),(u,K)=>{const $=an,D=sn,T=En,G=ut,J=Wn,re=Hi,ce=la,le=Ae,X=nn("i18n-t"),_=it,x=W,qt=ln,Wt=ie;return v(),b(P,null,[d(D,null,{default:y(()=>[d($,null,{default:y(()=>[g(c(u.$t("home")),1)]),_:1})]),_:1}),n("div",da,[d(T),n("header",ua,[n("div",fa,[ma,n("h1",null,c(u.$t("interactive-maps-for-hitman")),1)])]),p(l)?C("",!0):(v(),b("div",ga,[n("div",ha,[n("div",pa,[n("div",va,[ba,n("h2",null,c(u.$t("world-of-assassination")),1),_a]),n("div",ya,[(v(!0),b(P,null,Q(p(f).filter(N=>["hitman","hitman2","hitman3"].includes(N.slug)),N=>(v(),L(G,{game:N},null,8,["game"]))),256)),(v(!0),b(P,null,Q(p(f).filter(N=>["sniper-assassin"].includes(N.slug)),N=>(v(),L(G,{game:N},null,8,["game"]))),256))])]),n("div",wa,[n("div",ka,[$a,n("h2",null,c(u.$t("legacy-hitman")),1),Sa]),n("div",Ia,[(v(!0),b(P,null,Q(p(f).filter(N=>["absolution"].includes(N.slug)),N=>(v(),L(J,{game:N},null,8,["game"]))),256))])]),n("div",Da,[n("div",Ta,[Na,n("h2",null,c(u.$t("live-community-events")),1),Aa]),n("div",Ca,[d(re,{"elusive-targets":p(m),onNotificationModal:h},null,8,["elusive-targets"])])])]),d(le,null,{default:y(()=>[d(ce,{ref_key:"notificationModal",ref:r},null,512)]),_:1})])),n("div",Ma,[n("div",Ea,[n("div",Pa,[n("h1",null,c(u.$t("custom-game-modes.header")),1),n("p",null,c(u.$t("custom-game-modes.intro")),1),n("p",null,[d(X,{keypath:"custom-game-modes.download-instructions"},{serverPatcher:y(()=>[n("a",Oa,c(u.$t("custom-game-modes.server-patcher")),1)]),serverUrl:y(()=>[Ba]),_:1})]),n("p",null,c(u.$t("custom-game-modes.disclaimer")),1)])])]),n("div",Ra,[n("div",La,[n("div",ja,[Fa,n("div",Va,[n("div",Ua,[n("span",Ka,[d(_,{name:"fa6-solid:check"}),g(" "+c(u.$t("custom-game-modes.web")),1)]),n("span",Ha,[d(_,{name:"fa6-solid:check"}),g(" HITMAN™ ")]),n("span",qa,[d(_,{name:"fa6-solid:check"}),g(" HITMAN™ 2 ")]),n("span",Wa,[d(_,{name:"fa6-solid:check"}),g(" HITMAN™ World of Assassination ")])]),Ga])]),n("div",xa,[n("p",null,[d(X,{keypath:"custom-game-modes.roulette.intro"},{hitmanRoulette:y(()=>[n("a",za,c(u.$t("custom-game-modes.roulette.hitman-roulette")),1)]),_:1})]),n("ul",null,[n("li",null,[n("b",null,c(u.$t("custom-game-modes.roulette.list-item-tournament-mode.header")),1),g(" "+c(u.$t("custom-game-modes.roulette.list-item-tournament-mode.details")),1)]),n("li",null,[n("b",null,c(u.$t("custom-game-modes.roulette.list-item-control.header")),1),g(" "+c(u.$t("custom-game-modes.roulette.list-item-control.details")),1)]),n("li",null,[n("b",null,c(u.$t("custom-game-modes.roulette.list-item-overlay.header")),1),g(" "+c(u.$t("custom-game-modes.roulette.list-item-overlay.details")),1)])]),n("p",null,c(u.$t("custom-game-modes.roulette.in-game-intro")),1),n("p",null,[n("i",null,c(u.$t("custom-game-modes.roulette.footer")),1)]),n("a",Ya,[g(c(u.$t("custom-game-modes.roulette.visit-button"))+" ",1),d(_,{name:"fa6-solid:arrow-up-right-from-square"})])])])]),n("div",Ja,[n("div",Xa,[n("div",Qa,[n("h2",null,[d(x,{icon:"versus","font-style":"solid"}),g(" "+c(u.$t("mission-types.ghost mode")),1)]),n("div",Za,[n("div",er,[n("span",tr,[d(_,{name:"fa6-solid:xmark"}),g(" "+c(u.$t("custom-game-modes.web")),1)]),n("span",nr,[d(_,{name:"fa6-solid:xmark"}),g(" HITMAN™ ")]),n("span",ir,[d(_,{name:"fa6-solid:check"}),g(" HITMAN™ 2 ")]),n("span",or,[d(_,{name:"fa6-solid:check"}),g(" HITMAN™ World of Assassination ")])]),sr])]),n("div",ar,[n("p",null,c(u.$t("custom-game-modes.ghost-mode.intro")),1),d(qt,{type:"info","alert-heading":u.$t("custom-game-modes.ghost-mode.mod-note-header")},{default:y(()=>[n("p",null,c(u.$t("custom-game-modes.ghost-mode.mod-note-content")),1),n("a",rr,[g(c(u.$t("custom-game-modes.ghost-mode.mod-note-cta"))+" ",1),d(_,{name:"fa6-solid:arrow-up-right-from-square"})])]),_:1},8,["alert-heading"]),n("p",null,c(u.$t("custom-game-modes.ghost-mode.maps")),1),n("div",cr,[lr,n("div",dr,[ur,n("ul",null,[n("li",null,[g("Hawke's Bay ("),n("a",fr,[g("via mod"),d(_,{name:"fa6-solid:arrow-up-right-from-square"})]),g(")")]),mr,gr])])])])])]),n("div",hr,[n("div",pr,[n("div",vr,[n("h2",null,[d(x,{icon:"completion-list","font-style":"solid"}),g(" "+c(u.$t("custom-game-modes.taskmaster.header")),1)]),n("div",br,[n("div",_r,[n("span",yr,[d(_,{name:"fa6-solid:xmark"}),g(" "+c(u.$t("custom-game-modes.web")),1)]),n("span",wr,[d(_,{name:"fa6-solid:xmark"}),g(" HITMAN™ ")]),n("span",kr,[d(_,{name:"fa6-solid:xmark"}),g(" HITMAN™ 2 ")]),n("span",$r,[d(_,{name:"fa6-solid:check"}),g(" HITMAN™ World of Assassination ")])]),Sr])]),n("div",Ir,[n("p",null,c(u.$t("custom-game-modes.taskmaster.intro")),1),n("p",null,c(u.$t("custom-game-modes.taskmaster.inspired-by")),1),n("p",null,c(u.$t("custom-game-modes.taskmaster.missions")),1),Dr])])]),n("div",Tr,[n("div",Nr,[n("div",Ar,[n("h1",null,c(u.$t("partnership.header")),1)])]),n("div",Cr,[n("div",Mr,[Er,n("div",Pr,[n("h3",null,c(u.$t("partnership.f7sc.header")),1),n("p",null,c(u.$t("partnership.f7sc.paragraph")),1),n("a",Or,[d(_,{name:"fa6-brands:discord"}),g(" "+c(u.$t("partnership.f7sc.call-to-action")),1)])])]),n("div",Br,[Rr,n("div",Lr,[n("h3",null,c(u.$t("partnership.rr-stats.header")),1),n("p",null,c(u.$t("partnership.rr-stats.paragraph")),1),n("a",jr,[d(_,{name:"fa-solid:arrow-right"}),g(" "+c(u.$t("partnership.rr-stats.call-to-action")),1)])])])])]),n("div",Fr,[n("div",Vr,[n("div",Ur,[n("h1",null,c(u.$t("ko-fi.ko-fi-supporters")),1),n("p",null,c(u.$t("ko-fi.ko-fi-supporters-description")),1),n("p",null,[n("i",null,c(u.$t("ko-fi.no-current-supporters")),1)])])]),n("div",Kr,[n("div",Hr,[n("a",qr,[d(_,{name:"cib:ko-fi"}),g(" "+c(u.$t("ko-fi.become-a-supporter")),1)]),d(Wt,{to:"/support-the-site",class:"btn square-button white"},{default:y(()=>[d(_,{name:"fa6-solid:arrow-right"}),g(" "+c(u.$t("ko-fi.view-all-supporters")),1)]),_:1})])])])])],64)}}},Zr=E(Wr,[["__scopeId","data-v-2cfa87cd"]]);export{Zr as default};
