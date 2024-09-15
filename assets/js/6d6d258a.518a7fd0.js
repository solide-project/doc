"use strict";(self.webpackChunksolide_docs=self.webpackChunksolide_docs||[]).push([[8177],{2140:(e,i,r)=>{r.r(i),r.d(i,{assets:()=>a,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>d,toc:()=>c});var t=r(4848),n=r(8453);r(2168);const o={sidebar_position:1},s="Import a contract address in Solide",d={id:"ide/sol-ide-contract",title:"Import a contract address in Solide",description:"This document provides instructions on how to load a verified smart contract directly from a chain using an iframe or via SolideIDE.",source:"@site/docs/ide/sol-ide-contract.md",sourceDirName:"ide",slug:"/ide/sol-ide-contract",permalink:"/docs/ide/sol-ide-contract",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"\u26d3\ufe0f Support Chains",permalink:"/docs/supported-chains"},next:{title:"Import Github Repository",permalink:"/docs/ide/sol-ide-github"}},a={},c=[{value:"Resource",id:"resource",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Required",id:"required",level:3},{value:"Sample",id:"sample",level:2}];function l(e){const i={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,n.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.h1,{id:"import-a-contract-address-in-solide",children:"Import a contract address in Solide"}),"\n",(0,t.jsxs)(i.p,{children:["This document provides instructions on how to load a ",(0,t.jsx)(i.strong,{children:"verified"})," smart contract directly from a chain using an iframe or via SolideIDE."]}),"\n",(0,t.jsx)(i.h2,{id:"resource",children:"Resource"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.a,{href:"https://github.com/solide-project/solide",children:"Source Code"})}),"\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.a,{href:"https://solide0x.tech/",children:"Solide IDE"})}),"\n"]}),"\n",(0,t.jsx)(i.h2,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsx)(i.h3,{id:"required",children:"Required"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"chainId"}),": Required. The chain ID of the contract to load. See ",(0,t.jsx)(i.a,{href:"/docs/supported-chains",children:"Chain IDs"})," for a list of valid chain IDs."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"address"}),": Required. A valid contract address to load that must be verified or have its implementation verified if the contract is using a proxy."]}),"\n"]}),"\n",(0,t.jsx)(i.h2,{id:"sample",children:"Sample"}),"\n",(0,t.jsxs)(i.p,{children:["The following example demonstrates how to load a verified Wrapped Ether (",(0,t.jsx)(i.code,{children:"MaticWETH"}),") contract from the Polygon Mainnet (",(0,t.jsx)(i.code,{children:"137"}),")."]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-html",metastring:'title="MaticWETH.sol" showLineNumbers',children:'<iframe \r\n  src="{SolideURL}/address/137/0x7ceb23fd6bc0add59e62ac25578270cff1b9f619"\r\n  height="400" width="300"></iframe>\n'})})]})}function h(e={}){const{wrapper:i}={...(0,n.R)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},2168:(e,i,r)=>{r.d(i,{A:()=>n});var t=r(4848);const n=e=>{let{url:i}=e;return(0,t.jsx)("iframe",{src:i,height:"400",width:"300",style:{borderRadius:"8px",width:"100%",overflow:"hidden"}})}},8453:(e,i,r)=>{r.d(i,{R:()=>s,x:()=>d});var t=r(6540);const n={},o=t.createContext(n);function s(e){const i=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function d(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),t.createElement(o.Provider,{value:i},e.children)}}}]);