(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ce397de6"],{"039b":function(t,e,n){"use strict";var a=n("a1a5"),s=n.n(a);s.a},1526:function(t,e,n){t.exports=n.p+"img/button-key.79e4057e.svg"},4471:function(t,e,n){},"6c15":function(t,e,n){t.exports=n.p+"img/domain.5194defa.svg"},8818:function(t,e,n){"use strict";var a=n("4471"),s=n.n(a);s.a},a1a5:function(t,e,n){},c222:function(t,e,n){t.exports=n.p+"img/domain-hov.cce19f91.svg"},cb09:function(t,e,n){t.exports=n.p+"img/domain-sale.f07a77b5.svg"},ef00:function(t,e,n){t.exports=n.p+"img/domain-sale-hov.e110128d.svg"},f4d0:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"dapps-container"},[n("div",[n("interface-container-title",{attrs:{title:t.$t("common.dapps")}}),n("div",{staticClass:"buttons-container"},t._l(Object.keys(t.localDapps),function(e){return n("dapp-buttons",{key:t.localDapps[e].title,attrs:{title:t.$t(t.localDapps[e].title),icon:t.localDapps[e].icon,"icon-disabled":t.localDapps[e].iconDisabled,desc:t.$t(t.localDapps[e].desc),param:t.localDapps[e].route,"supported-networks":t.localDapps[e].supportedNetworks}})}),1)],1)])},s=[],i=n("55c1"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:["dapps-button",t.supported?"":"disabled"]},[n("router-link",{attrs:{to:t.param,tag:"div"}},[n("img",{attrs:{src:t.supported?t.icon:t.iconDisabled}}),n("div",[n("h4",[t._v(t._s(t.title))]),n("p",[t._v(t._s(t.desc))])])])],1)},c=[],r=(n("7f7f"),n("6762"),n("2fdb"),n("cebc")),p=n("2f62"),d={props:{title:{type:String,default:""},desc:{type:String,default:""},icon:{type:String,default:""},iconDisabled:{type:String,default:""},param:{type:String,default:""},supportedNetworks:{type:Array,default:function(){return[]}}},computed:Object(r["a"])({},Object(p["b"])({network:"network"}),{supported:function(){return this.supportedNetworks.includes(this.network.type.name)}})},u=d,l=(n("039b"),n("2877")),f=Object(l["a"])(u,o,c,!1,null,"14a01cf3",null),b=f.exports,m=n("cb09"),g=n.n(m),v=n("ef00"),D=n.n(v),k=n("6c15"),w=n.n(k),y=n("c222"),h=n.n(y),_=n("fda64"),S=n.n(_),x=n("1526"),E=n.n(x),N=n("8761"),O={registerDomain:{route:"/interface/dapps/register-domain",icon:w.a,iconDisabled:h.a,title:"interface.registerEns",desc:"interface.registerENSDescShort",supportedNetworks:[N["ETH"].name,N["GOERLI"].name,N["ROP"].name,N["RIN"].name]},domainSale:{route:"/interface/dapps/buy-subdomain",icon:g.a,iconDisabled:D.a,title:"interface.subdomains",desc:"interface.buySubDomains",supportedNetworks:[N["ETH"].name]},secureTransaction:{route:"/interface/dapps/secure-transaction",icon:S.a,iconDisabled:E.a,title:"dapps.safesend_title",desc:"dapps.safesend_desc",supportedNetworks:[N["ETH"].name]}},j=O,$={name:"DappsContainer",components:{"interface-container-title":i["a"],"dapp-buttons":b},data:function(){return{localDapps:j}}},T=$,C=(n("8818"),Object(l["a"])(T,a,s,!1,null,"43a7366f",null)),H=C.exports;n.d(e,"default",function(){return H})},fda64:function(t,e,n){t.exports=n.p+"img/button-key-hover.c1cbfefc.svg"}}]);
//# sourceMappingURL=chunk-ce397de6.25bbb1d6.js.map