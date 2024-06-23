"use strict";(self.webpackChunksolide_docs=self.webpackChunksolide_docs||[]).push([[2223],{2105:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>i,toc:()=>l});var r=n(4848),c=n(8453);const s={sidebar_position:1,description:"Contract Plugin for Web3.js."},o="Web3 Plugin Contracts",i={id:"tools/web3-contract-plugin",title:"Web3 Plugin Contracts",description:"Contract Plugin for Web3.js.",source:"@site/docs/tools/web3-contract-plugin.md",sourceDirName:"tools",slug:"/tools/web3-contract-plugin",permalink:"/docs/tools/web3-contract-plugin",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,description:"Contract Plugin for Web3.js."},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udfe1 Movide (Comming Soon)",permalink:"/docs/ide/move-ide"},next:{title:"\ud83e\udded Solidity Database",permalink:"/docs/tools/solidity-database"}},a={},l=[{value:"Resource",id:"resource",level:2},{value:"Getting Started",id:"getting-started",level:2},{value:"Sample",id:"sample",level:2}];function d(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,c.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"web3-plugin-contracts",children:"Web3 Plugin Contracts"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"web3-plugin-contracts"})," is a TypeScript library and a Web3.js plugin designed to simplify the process of loading and accessing source contracts and interacting with smart contracts. With this plugin, developers can seamlessly interact with Web3's Contracts class using only a contract address."]}),"\n",(0,r.jsx)(t.h2,{id:"resource",children:"Resource"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://www.npmjs.com/package/web3-plugin-contracts",children:"Npm Package"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://github.com/solide-project/web3-plugin-contracts",children:"Source Code"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://web3js.org/plugins",children:"Featured in Web3js"})}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"getting-started",children:"Getting Started"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"npm i web3 web3-plugin-contracts\n"})}),"\n",(0,r.jsx)(t.h2,{id:"sample",children:"Sample"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-typescript",children:'import Web3, { Contract } from "web3";\r\nimport { ContractPlugin } from \'web3-plugin-contract\';\r\n\r\n// Given a RPC, create web3 instance\r\nconst rpc: string = \'https://eth.drpc.org/\';\r\nconst web3 = new Web3(\r\n\tnew Web3.providers.HttpProvider(rpc));\r\n\r\n// Optional API key, need for etherscan related chains\r\nconst API_KEY = ""; \r\n\r\n// Load plugin\r\nweb3.registerPlugin(new ContractPlugin(API_KEY));\r\n\r\n// Verified smart contract\r\nconst contractAddress = "0x75cb093E4D61d2A2e65D8e0BBb01DE8d89b53481";\r\n\r\n// Get contract source: includes, source code, compiler information, metadata\r\nconst data = await web3.contractPlugin.source(contractAddress);\r\nconsole.log(data)\r\n\r\n// Get web3 Contract instance\r\nconst contract: Contract = await web3.contractPlugin.contract(contractAddress);\r\nconst name: string = await contract.methods.name().call()\n'})})]})}function u(e={}){const{wrapper:t}={...(0,c.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>i});var r=n(6540);const c={},s=r.createContext(c);function o(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:o(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);