(self["webpackChunk"]=self["webpackChunk"]||[]).push([[717],{43671:function(e){e.exports={footer:"footer___2kkpn"}},68061:function(e){e.exports={header:"header___3JfK-"}},13277:function(){},97042:function(e,t,n){"use strict";n.d(t,{qw:function(){return i},Tk:function(){return a},ri:function(){return o}});var r=JSON.parse('[{"inputs":[{"internalType":"address","name":"_addr","type":"address"},{"internalType":"uint256","name":"_start","type":"uint256"},{"internalType":"uint256","name":"_end","type":"uint256"}],"name":"unclaimed","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"}]'),i={Injected:"Injected"},o={1:{name:"Ethereum",id:1,contract:"0xDaba3aBC83528024dA820d5Dd6b3676DF3f3Ad54"},3:{name:"Ropsten",id:3},4:{name:"Rinkeby",id:4},5:{name:"G\xf6rli",id:5},10:{name:"Optimistic",id:10},42:{name:"Kovan",id:42},56:{name:"Bsc",id:56},128:{name:"Heco",id:128},137:{name:"Matic",id:137},250:{name:"Fantom",id:250},1285:{name:"Moonriver",id:1285,contract:"0xC799237233E24e1703FE88CdD14C6816551A4dEE"},43113:{name:"Avalanche Fuji",id:43113},43114:{name:"Avalanche",id:43114}},a={flashNft:"0xDaba3aBC83528024dA820d5Dd6b3676DF3f3Ad54",flashNftABI:r}},94084:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return ue}});var r=n(77044),i=(n(65056),n(13277),n(96156)),o=n(22122),a=n(28481),s=n(67294),c=n(94184),l=n.n(c),u=n(98423),d=n(54549),f=n(86032),m=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n},h=function(e){var t,n=e.prefixCls,r=e.className,a=e.checked,c=e.onChange,u=e.onClick,d=m(e,["prefixCls","className","checked","onChange","onClick"]),h=s.useContext(f.E_),v=h.getPrefixCls,g=function(e){null===c||void 0===c||c(!a),null===u||void 0===u||u(e)},p=v("tag",n),w=l()(p,(t={},(0,i.Z)(t,"".concat(p,"-checkable"),!0),(0,i.Z)(t,"".concat(p,"-checkable-checked"),a),t),r);return s.createElement("span",(0,o.Z)({},d,{className:w,onClick:g}))},v=h,g=n(98787),p=n(21790),w=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n},x=new RegExp("^(".concat(g.Y.join("|"),")(-inverse)?$")),b=new RegExp("^(".concat(g.E.join("|"),")$")),y=function(e,t){var n,r=e.prefixCls,c=e.className,m=e.style,h=e.children,v=e.icon,g=e.color,y=e.onClose,E=e.closeIcon,j=e.closable,_=void 0!==j&&j,C=w(e,["prefixCls","className","style","children","icon","color","onClose","closeIcon","closable"]),k=s.useContext(f.E_),F=k.getPrefixCls,N=k.direction,O=s.useState(!0),S=(0,a.Z)(O,2),A=S[0],T=S[1];s.useEffect((function(){"visible"in C&&T(C.visible)}),[C.visible]);var I=function(){return!!g&&(x.test(g)||b.test(g))},Z=(0,o.Z)({backgroundColor:g&&!I()?g:void 0},m),$=I(),P=F("tag",r),U=l()(P,(n={},(0,i.Z)(n,"".concat(P,"-").concat(g),$),(0,i.Z)(n,"".concat(P,"-has-color"),g&&!$),(0,i.Z)(n,"".concat(P,"-hidden"),!A),(0,i.Z)(n,"".concat(P,"-rtl"),"rtl"===N),n),c),D=function(e){e.stopPropagation(),null===y||void 0===y||y(e),e.defaultPrevented||"visible"in C||T(!1)},H=function(){return _?E?s.createElement("span",{className:"".concat(P,"-close-icon"),onClick:D},E):s.createElement(d.Z,{className:"".concat(P,"-close-icon"),onClick:D}):null},R="onClick"in C||h&&"a"===h.type,G=(0,u.Z)(C,["visible"]),V=v||null,L=V?s.createElement(s.Fragment,null,V,s.createElement("span",null,h)):h,Y=s.createElement("span",(0,o.Z)({},G,{ref:t,className:U,style:Z}),L,H());return R?s.createElement(p.Z,null,Y):Y},E=s.forwardRef(y);E.displayName="Tag",E.CheckableTag=v;var j=E,_=n(97042),C=n(85893);function k(){var e,t,n=(0,r.Ge)(),i=n.chainId;return(0,C.jsx)(C.Fragment,{children:i&&(null===(e=_.ri[i])||void 0===e?void 0:e.name)&&(0,C.jsx)(j,{children:null===(t=_.ri[i])||void 0===t?void 0:t.name})})}var F=n(43671),N=n.n(F);function O(){return(0,C.jsxs)("div",{className:N().footer,children:[(0,C.jsx)("a",{href:"https://twitter.com/0xatem",target:"_blank",rel:"noreferrer",children:(0,C.jsx)("span",{children:"Twitter"})}),(0,C.jsx)("a",{href:"https://github.com/0xatem/flashnft",target:"_blank",rel:"noreferrer",children:(0,C.jsx)("span",{children:"Github"})}),(0,C.jsx)("a",{href:"https://gitcoin.co/grants/3525/flashnftloot-tools",target:"_blank",rel:"noreferrer",children:(0,C.jsx)("span",{children:"Donate"})}),(0,C.jsx)("div",{children:(0,C.jsx)(k,{})})]})}var S=n(58015);function A(){var e=(0,r.Ge)(),t=e.account;e.chainId;return(0,C.jsx)("span",{children:(0,C.jsx)("span",{children:null===t?"":(0,S.Tg)(t,4)||""})})}var T=n(57337),I=n(93286),Z=n(80711),$=n(48794),P=n(2593);const U=new Z.Yd($.i),D={},H=P.O$.from(0),R=P.O$.from(-1);function G(e,t,n,r){const i={fault:t,operation:n};return void 0!==r&&(i.value=r),U.throwError(e,Z.Yd.errors.NUMERIC_FAULT,i)}let V="0";while(V.length<256)V+=V;function L(e){if("number"!==typeof e)try{e=P.O$.from(e).toNumber()}catch(t){}return"number"===typeof e&&e>=0&&e<=256&&!(e%1)?"1"+V.substring(0,e):U.throwArgumentError("invalid decimal size","decimals",e)}function Y(e,t){null==t&&(t=0);const n=L(t);e=P.O$.from(e);const r=e.lt(H);r&&(e=e.mul(R));let i=e.mod(n).toString();while(i.length<n.length-1)i="0"+i;i=i.match(/^([0-9]*[1-9]|0)(0*)/)[1];const o=e.div(n).toString();return e=1===n.length?o:o+"."+i,r&&(e="-"+e),e}function B(e,t){null==t&&(t=0);const n=L(t);"string"===typeof e&&e.match(/^-?[0-9.,]+$/)||U.throwArgumentError("invalid decimal value","value",e);const r="-"===e.substring(0,1);r&&(e=e.substring(1)),"."===e&&U.throwArgumentError("missing value","value",e);const i=e.split(".");i.length>2&&U.throwArgumentError("too many decimal points","value",e);let o=i[0],a=i[1];o||(o="0"),a||(a="0");while("0"===a[a.length-1])a=a.substring(0,a.length-1);a.length>n.length-1&&G("fractional component exceeds decimals","underflow","parseFixed"),""===a&&(a="0");while(a.length<n.length-1)a+="0";const s=P.O$.from(o),c=P.O$.from(a);let l=s.mul(n).add(c);return r&&(l=l.mul(R)),l}class z{constructor(e,t,n,r){e!==D&&U.throwError("cannot use FixedFormat constructor; use FixedFormat.from",Z.Yd.errors.UNSUPPORTED_OPERATION,{operation:"new FixedFormat"}),this.signed=t,this.width=n,this.decimals=r,this.name=(t?"":"u")+"fixed"+String(n)+"x"+String(r),this._multiplier=L(r),Object.freeze(this)}static from(e){if(e instanceof z)return e;"number"===typeof e&&(e=`fixed128x${e}`);let t=!0,n=128,r=18;if("string"===typeof e)if("fixed"===e);else if("ufixed"===e)t=!1;else{const i=e.match(/^(u?)fixed([0-9]+)x([0-9]+)$/);i||U.throwArgumentError("invalid fixed format","format",e),t="u"!==i[1],n=parseInt(i[2]),r=parseInt(i[3])}else if(e){const i=(t,n,r)=>null==e[t]?r:(typeof e[t]!==n&&U.throwArgumentError("invalid fixed format ("+t+" not "+n+")","format."+t,e[t]),e[t]);t=i("signed","boolean",t),n=i("width","number",n),r=i("decimals","number",r)}return n%8&&U.throwArgumentError("invalid fixed format width (not byte aligned)","format.width",n),r>80&&U.throwArgumentError("invalid fixed format (decimals too large)","format.decimals",r),new z(D,t,n,r)}}class M{constructor(e,t,n,r){U.checkNew(new.target,M),e!==D&&U.throwError("cannot use FixedNumber constructor; use FixedNumber.from",Z.Yd.errors.UNSUPPORTED_OPERATION,{operation:"new FixedFormat"}),this.format=r,this._hex=t,this._value=n,this._isFixedNumber=!0,Object.freeze(this)}_checkFormat(e){this.format.name!==e.format.name&&U.throwArgumentError("incompatible format; use fixedNumber.toFormat","other",e)}addUnsafe(e){this._checkFormat(e);const t=B(this._value,this.format.decimals),n=B(e._value,e.format.decimals);return M.fromValue(t.add(n),this.format.decimals,this.format)}subUnsafe(e){this._checkFormat(e);const t=B(this._value,this.format.decimals),n=B(e._value,e.format.decimals);return M.fromValue(t.sub(n),this.format.decimals,this.format)}mulUnsafe(e){this._checkFormat(e);const t=B(this._value,this.format.decimals),n=B(e._value,e.format.decimals);return M.fromValue(t.mul(n).div(this.format._multiplier),this.format.decimals,this.format)}divUnsafe(e){this._checkFormat(e);const t=B(this._value,this.format.decimals),n=B(e._value,e.format.decimals);return M.fromValue(t.mul(this.format._multiplier).div(n),this.format.decimals,this.format)}floor(){const e=this.toString().split(".");1===e.length&&e.push("0");let t=M.from(e[0],this.format);const n=!e[1].match(/^(0*)$/);return this.isNegative()&&n&&(t=t.subUnsafe(W.toFormat(t.format))),t}ceiling(){const e=this.toString().split(".");1===e.length&&e.push("0");let t=M.from(e[0],this.format);const n=!e[1].match(/^(0*)$/);return!this.isNegative()&&n&&(t=t.addUnsafe(W.toFormat(t.format))),t}round(e){null==e&&(e=0);const t=this.toString().split(".");if(1===t.length&&t.push("0"),(e<0||e>80||e%1)&&U.throwArgumentError("invalid decimal count","decimals",e),t[1].length<=e)return this;const n=M.from("1"+V.substring(0,e),this.format),r=q.toFormat(this.format);return this.mulUnsafe(n).addUnsafe(r).floor().divUnsafe(n)}isZero(){return"0.0"===this._value||"0"===this._value}isNegative(){return"-"===this._value[0]}toString(){return this._value}toHexString(e){if(null==e)return this._hex;e%8&&U.throwArgumentError("invalid byte width","width",e);const t=P.O$.from(this._hex).fromTwos(this.format.width).toTwos(e).toHexString();return(0,I.$m)(t,e/8)}toUnsafeFloat(){return parseFloat(this.toString())}toFormat(e){return M.fromString(this._value,e)}static fromValue(e,t,n){return null!=n||null==t||(0,P.Zm)(t)||(n=t,t=null),null==t&&(t=0),null==n&&(n="fixed"),M.fromString(Y(e,t),z.from(n))}static fromString(e,t){null==t&&(t="fixed");const n=z.from(t),r=B(e,n.decimals);!n.signed&&r.lt(H)&&G("unsigned value cannot be negative","overflow","value",e);let i=null;n.signed?i=r.toTwos(n.width).toHexString():(i=r.toHexString(),i=(0,I.$m)(i,n.width/8));const o=Y(r,n.decimals);return new M(D,i,o,n)}static fromBytes(e,t){null==t&&(t="fixed");const n=z.from(t);if((0,I.lE)(e).length>n.width/8)throw new Error("overflow");let r=P.O$.from(e);n.signed&&(r=r.fromTwos(n.width));const i=r.toTwos((n.signed?0:1)+n.width).toHexString(),o=Y(r,n.decimals);return new M(D,i,o,n)}static from(e,t){if("string"===typeof e)return M.fromString(e,t);if((0,I._t)(e))return M.fromBytes(e,t);try{return M.fromValue(e,0,t)}catch(n){if(n.code!==Z.Yd.errors.INVALID_ARGUMENT)throw n}return U.throwArgumentError("invalid FixedNumber value","value",e)}static isFixedNumber(e){return!(!e||!e._isFixedNumber)}}const W=M.from(1),q=M.from("0.5"),J="units/5.4.0",K=(new Z.Yd(J),["wei","kwei","mwei","gwei","szabo","finney","ether"]);function Q(e,t){if("string"===typeof t){const e=K.indexOf(t);-1!==e&&(t=3*e)}return Y(e,null!=t?t:18)}function X(e){return Q(e,18)}function ee(){var e=(0,r.Ge)(),t=e.account,n=e.library,i=e.chainId,o=s.useState(),a=(0,T.Z)(o,2),c=a[0],l=a[1];s.useEffect((()=>{if(t&&n){var e=!1;return n.getBalance(t).then((t=>{e||l(t)})).catch((()=>{e||l(void 0)})),()=>{e=!0,l(void 0)}}}),[t,n,i]);var u=X(c||0);return(0,C.jsx)("span",{children:(0,C.jsx)("span",{children:c?"\u039e".concat(Number(u).toFixed(4)):""})})}var te=n(30950),ne=new te._k({supportedChainIds:Object.keys(_.ri).map((e=>Number(e)))}),re={[_.qw.Injected]:ne};function ie(){var e=(0,r.Ge)(),t=e.activate,n=e.active,i=(0,s.useState)(!1),o=(0,T.Z)(i,2),a=o[0],c=o[1];return(0,s.useEffect)((()=>{ne.isAuthorized().then((e=>{e?t(ne,void 0,!0).catch((()=>{c(!0)})):c(!0)}))}),[]),(0,s.useEffect)((()=>{!a&&n&&c(!0)}),[a,n]),a}function oe(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=(0,r.Ge)(),n=t.active,i=t.error,o=t.activate;(0,s.useEffect)((()=>{var t=window,r=t.ethereum;if(r&&r.on&&!n&&!i&&!e){var a=()=>{console.log("Handling 'connect' event"),o(ne)},s=e=>{console.log("Handling 'chainChanged' event with payload",e),o(ne)},c=e=>{console.log("Handling 'accountsChanged' event with payload",e),e.length>0&&o(ne)},l=e=>{console.log("Handling 'networkChanged' event with payload",e),o(ne)};return r.on("connect",a),r.on("chainChanged",s),r.on("accountsChanged",c),r.on("networkChanged",l),()=>{r.removeListener&&(r.removeListener("connect",a),r.removeListener("chainChanged",s),r.removeListener("accountsChanged",c),r.removeListener("networkChanged",l))}}}),[n,i,e,o])}function ae(){var e=(0,r.Ge)(),t=e.connector,n=e.activate,i=e.deactivate,o=s.useState(),a=(0,T.Z)(o,2),c=a[0],l=a[1];s.useEffect((()=>{c&&c===t&&l(void 0)}),[c,t]);var u=ie();return oe(!u||!!c),(0,C.jsx)(C.Fragment,{children:[_.qw.Injected].map((e=>{var r=re[e],o=r===t;return(0,C.jsx)("div",{onClick:()=>{l(r),n(re[e])},children:(0,C.jsx)("div",{children:o?(0,C.jsx)("div",{onClick:i,children:"Dismiss"}):(0,C.jsx)("div",{children:"Connect Wallet"})})},e)}))})}var se=n(68061),ce=n.n(se);function le(){return(0,C.jsx)(C.Fragment,{children:(0,C.jsxs)("div",{className:ce().header,children:[(0,C.jsx)(A,{}),(0,C.jsx)(ee,{}),(0,C.jsx)(ae,{})]})})}function ue(e){return(0,C.jsxs)(r.Ht,{getLibrary:S.av,children:[(0,C.jsx)(le,{}),(0,C.jsx)("div",{className:"contentWrap",children:e.children}),(0,C.jsx)(O,{})]})}},58015:function(e,t,n){"use strict";n.d(t,{NV:function(){return u},Tg:function(){return d},uN:function(){return l},av:function(){return s}});n(94043),n(77044),n(30950),n(71046);var r=n(56492),i=n(17859),o=n.n(i),a={balance:"0"},s=(new(o())(a),e=>{var t=new r.Q(e);return t.pollingInterval=12e3,t}),c=()=>{var e;return"undefined"!==typeof window.web3&&(e=new Web3(window.web3.currentProvider)),e},l=(e,t)=>{var n=c();if(n)return new n.eth.Contract(e,t)},u=e=>(new Web3).utils.toChecksumAddress(e),d=(e,t)=>e?"".concat(e.substring(0,t+2),"...").concat(e.slice(-1*t)):""},98787:function(e,t,n){"use strict";n.d(t,{E:function(){return i},Y:function(){return o}});var r=n(93355),i=(0,r.b)("success","processing","error","default","warning"),o=(0,r.b)("pink","red","yellow","orange","cyan","green","blue","purple","geekblue","magenta","volcano","gold","lime")},96159:function(e,t,n){"use strict";n.d(t,{l$:function(){return i},Tm:function(){return a}});var r=n(67294),i=r.isValidElement;function o(e,t,n){return i(e)?r.cloneElement(e,"function"===typeof n?n(e.props||{}):n):t}function a(e,t){return o(e,e,t)}},93355:function(e,t,n){"use strict";n.d(t,{b:function(){return r}});var r=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t}},46601:function(){}}]);