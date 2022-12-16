"use strict";(self.webpackChunkcs_639_website=self.webpackChunkcs_639_website||[]).push([[753],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=o,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||a;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},655:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var r=n(7462),o=(n(7294),n(3905));const a={sidebar_position:5},i="Conclusion & Future Work",l={unversionedId:"conclusion",id:"conclusion",title:"Conclusion & Future Work",description:"In summary, we enhanced low-light image using our re-implemented KinD algorithm in Pytorch. This method is based on retinex theory and contains three neural network, layer decomposition net, illumination adjustment net, and reflectance restoration net. We also test the method by objective and subjective evaluations and we list its strength and weakness in the bottom.",source:"@site/docs/5-conclusion.md",sourceDirName:".",slug:"/conclusion",permalink:"/CS639-Website/docs/conclusion",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/5-conclusion.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Evaluation",permalink:"/CS639-Website/docs/Evaluation"},next:{title:"Project Proposal",permalink:"/CS639-Website/docs/project-proposal"}},s={},c=[{value:"Strength",id:"strength",level:2},{value:"Weakness",id:"weakness",level:2}],u={toc:c};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"conclusion--future-work"},"Conclusion & Future Work"),(0,o.kt)("p",null,"In summary, we enhanced low-light image using our re-implemented KinD algorithm in Pytorch. This method is based on retinex theory and contains three neural network, layer decomposition net, illumination adjustment net, and reflectance restoration net. We also test the method by objective and subjective evaluations and we list its strength and weakness in the bottom."),(0,o.kt)("h2",{id:"strength"},"Strength"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Enhance low-light image with user-controllable ratio"),(0,o.kt)("li",{parentName:"ul"},"Clearly remove degradations"),(0,o.kt)("li",{parentName:"ul"},"Trainable without ground truth of illumination map and reflectance map")),(0,o.kt)("h2",{id:"weakness"},"Weakness"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Results contain artifacts, like color inconsistency and halos"),(0,o.kt)("li",{parentName:"ul"},"Cannot generalize: different camera modules need to collect new dataset and re-train the model")),(0,o.kt)("p",null,"For future work, it might be a good topic to figure out how to make the model able to apply to all types of devices. Also, tweaking the architecutre and loss functions are also worth-trying to alleviate artifacts."))}d.isMDXComponent=!0}}]);