"use strict";(self.webpackChunknativev2=self.webpackChunknativev2||[]).push([[93],{618:function(e,n,t){t.r(n),t.d(n,{default:function(){return M}});var o=t(4942),a=t(3366),r=t(7462),i=t(2791),s=t(8182),c=t(4419),l=t(1393),d=t(1046),u=t(9107),p=t(7318),h=t(1217),f=t(5878);function m(e){return(0,h.Z)("MuiAccordionSummary",e)}var x=(0,f.Z)("MuiAccordionSummary",["root","expanded","focusVisible","disabled","gutters","contentGutters","content","expandIconWrapper"]),v=t(184),b=["children","className","expandIcon","focusVisibleClassName","onClick"],Z=(0,l.ZP)(u.Z,{name:"MuiAccordionSummary",slot:"Root",overridesResolver:function(e,n){return n.root}})((function(e){var n,t=e.theme,a=e.ownerState,i={duration:t.transitions.duration.shortest};return(0,r.Z)((n={display:"flex",minHeight:48,padding:t.spacing(0,2),transition:t.transitions.create(["min-height","background-color"],i)},(0,o.Z)(n,"&.".concat(x.focusVisible),{backgroundColor:(t.vars||t).palette.action.focus}),(0,o.Z)(n,"&.".concat(x.disabled),{opacity:(t.vars||t).palette.action.disabledOpacity}),(0,o.Z)(n,"&:hover:not(.".concat(x.disabled,")"),{cursor:"pointer"}),n),!a.disableGutters&&(0,o.Z)({},"&.".concat(x.expanded),{minHeight:64}))})),g=(0,l.ZP)("div",{name:"MuiAccordionSummary",slot:"Content",overridesResolver:function(e,n){return n.content}})((function(e){var n=e.theme,t=e.ownerState;return(0,r.Z)({display:"flex",flexGrow:1,margin:"12px 0"},!t.disableGutters&&(0,o.Z)({transition:n.transitions.create(["margin"],{duration:n.transitions.duration.shortest})},"&.".concat(x.expanded),{margin:"20px 0"}))})),w=(0,l.ZP)("div",{name:"MuiAccordionSummary",slot:"ExpandIconWrapper",overridesResolver:function(e,n){return n.expandIconWrapper}})((function(e){var n=e.theme;return(0,o.Z)({display:"flex",color:(n.vars||n).palette.action.active,transform:"rotate(0deg)",transition:n.transitions.create("transform",{duration:n.transitions.duration.shortest})},"&.".concat(x.expanded),{transform:"rotate(180deg)"})})),y=i.forwardRef((function(e,n){var t=(0,d.Z)({props:e,name:"MuiAccordionSummary"}),o=t.children,l=t.className,u=t.expandIcon,h=t.focusVisibleClassName,f=t.onClick,x=(0,a.Z)(t,b),y=i.useContext(p.Z),N=y.disabled,j=void 0!==N&&N,A=y.disableGutters,k=y.expanded,I=y.toggle,S=(0,r.Z)({},t,{expanded:k,disabled:j,disableGutters:A}),C=function(e){var n=e.classes,t=e.expanded,o=e.disabled,a=e.disableGutters,r={root:["root",t&&"expanded",o&&"disabled",!a&&"gutters"],focusVisible:["focusVisible"],content:["content",t&&"expanded",!a&&"contentGutters"],expandIconWrapper:["expandIconWrapper",t&&"expanded"]};return(0,c.Z)(r,m,n)}(S);return(0,v.jsxs)(Z,(0,r.Z)({focusRipple:!1,disableRipple:!0,disabled:j,component:"div","aria-expanded":k,className:(0,s.Z)(C.root,l),focusVisibleClassName:(0,s.Z)(C.focusVisible,h),onClick:function(e){I&&I(e),f&&f(e)},ref:n,ownerState:S},x,{children:[(0,v.jsx)(g,{className:C.content,ownerState:S,children:o}),u&&(0,v.jsx)(w,{className:C.expandIconWrapper,ownerState:S,children:u})]}))}));function N(e){return(0,h.Z)("MuiAccordionDetails",e)}(0,f.Z)("MuiAccordionDetails",["root"]);var j=["className"],A=(0,l.ZP)("div",{name:"MuiAccordionDetails",slot:"Root",overridesResolver:function(e,n){return n.root}})((function(e){return{padding:e.theme.spacing(1,2,2)}})),k=i.forwardRef((function(e,n){var t=(0,d.Z)({props:e,name:"MuiAccordionDetails"}),o=t.className,i=(0,a.Z)(t,j),l=t,u=function(e){var n=e.classes;return(0,c.Z)({root:["root"]},N,n)}(l);return(0,v.jsx)(A,(0,r.Z)({className:(0,s.Z)(u.root,o),ref:n,ownerState:l},i))})),I=t(1131),S=t(4108),C=t.p+"static/media/5.84d481b27aa0071563a1.webp",G=[{p:"What blockchain is it on?",r:"The ERC-721 token is on the Ethereum Blockchain and file hosting is IPFS."},{p:"What can you do with your Native Alien?",r:"Anything you want. Each holder is given ownership and commercial usage rights of their NFT."},{p:"Can I use the Native Aliens Logo?",r:"No, you cannot use the Native Aliens Logo, name or NA as it is trademarked and owned by Native Aliens."},{p:"How do I contact the team?",r:"Join our Discord, and feel free to ask any questions you have."},{p:"What is the total supply?",r:"The total supply is 10,000"},{p:"How do I get on presale list?",r:"Presale is over."},{p:"If I move my aliens to a cold wallet will I lose my holder's role?",r:"Yes, you will need to verify again with your new wallet that holds your aliens."}];function M(e){var n=e.faq,t={colorBG:{color:"white",background:"rgb(127,109,250)"},colorBG2:{color:"white",backgroundColor:"#8a7ae7"},white:{color:"white"}},o="What is Native Aliens?",a="Native Aliens is a NFT collection of 10,000 Native Aliens, uniquely generated from over 139 hand drawn traits! Owning a Native Alien NFT allows you to take part in the project and be part of the community.";return(0,v.jsx)(S.H_,{imgUrl:C,ref:n,style:{padding:"1%"},children:(0,v.jsxs)(S.Ef,{children:[(0,v.jsx)(S.Z4,{children:"FAQ'S"}),(0,v.jsxs)(S.ar,{style:t.colorBG,children:[(0,v.jsx)(y,{expandIcon:(0,v.jsx)(I.Z,{sx:t.white}),"aria-controls":"panel1a-content",id:"panel1a-header",children:(0,v.jsx)("p",{style:{fontSize:"24px"},children:o})}),(0,v.jsx)(k,{children:(0,v.jsx)("p",{children:a})})]}),G.map((function(e){return(0,v.jsxs)(S.ar,{sx:t.colorBG2,children:[(0,v.jsx)(y,{expandIcon:(0,v.jsx)(I.Z,{sx:t.white}),"aria-controls":"panel2a-content",id:"panel2a-header",children:(0,v.jsx)("p",{children:e.p})}),(0,v.jsx)(k,{children:(0,v.jsx)("p",{children:e.r})})]},e.p)}))]})})}},1131:function(e,n,t){var o=t(4836);n.Z=void 0;var a=o(t(5649)),r=t(184),i=(0,a.default)((0,r.jsx)("path",{d:"M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z"}),"ExpandMore");n.Z=i}}]);
//# sourceMappingURL=93.91aba153.chunk.js.map