(this["webpackJsonpportfolio-kamilborowski"]=this["webpackJsonpportfolio-kamilborowski"]||[]).push([[0],{28:function(n,e,t){},46:function(n,e,t){},47:function(n,e,t){},50:function(n,e,t){},51:function(n,e,t){"use strict";t.r(e);var o,a,i,r,s,c,d,l,p,m,b,u,f,j,h,x,g,O,v,w,y,k,z,M,E,S,T,B,L,R,q,H,C,Y,I,N,P,W,F,K,A,_,U,X,J,D,G,Q,V,Z,$,nn,en,tn,on,an,rn,sn,cn,dn,ln,pn,mn=t(3),bn=t.n(mn),un=t(20),fn=t.n(un),jn=(t(28),t(6)),hn=t.n(jn),xn=(t(46),t(4)),gn=t(1),On=t(2),vn=(t(47),t(0)),wn=On.b.div(o||(o=Object(gn.a)(["\n  z-index: 999;\n  position: fixed;\n  pointer-events: none;\n  width: 30px;\n  height: 30px;\n  mix-blend-mode: difference;\n"]))),yn=On.b.div(a||(a=Object(gn.a)(["\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 33%;\n  height: 33%;\n  background-color: #dbdbdb;\n  border-radius: 50%;\n"]))),kn=Object(On.b)(yn)(i||(i=Object(gn.a)(["\n  width: 100%;\n  height: 100%;\n  background-color: transparent;\n  border: 2px solid #dbdbdb;\n  transition: transform 0.15s, border 0.3s ease-in-out;\n"]))),zn=function(){var n=Object(mn.useState)(0),e=Object(xn.a)(n,2),t=e[0],o=e[1],a=Object(mn.useState)(0),i=Object(xn.a)(a,2),r=i[0],s=i[1],c={transform:"translate(".concat(t,"px, ").concat(r,"px) ")},d={transform:"translate(".concat(t-10,"px, ").concat(r-10,"px) ")};return Object(mn.useEffect)((function(){window.addEventListener("mousemove",(function(n){o(n.clientX),s(n.clientY)}))}),[]),Object(vn.jsxs)(wn,{children:[Object(vn.jsx)(yn,{style:c}),Object(vn.jsx)(kn,{className:"cursorBorder",style:d})]})},Mn=function(n){var e=document.querySelectorAll('[data-anim="fade-up"]'),t=document.querySelectorAll('[data-anim="fade-scale"]'),o=document.querySelectorAll('[data-anim="fade-opacity"]');e.forEach((function(e){var t=e.offsetTop;t-.9*window.innerHeight<n&&(e.style.opacity="1",e.style.animation="fadeUp 1s both"),t-1.1*window.innerHeight>n&&(e.style.opacity="0",e.style.animation=null)})),t.forEach((function(e){var t=e.offsetTop;t-.9*window.innerHeight<n&&(e.style.opacity="1",e.style.animation="fadeScale 1s both"),t-1.1*window.innerHeight>n&&(e.style.opacity="0",e.style.animation=null)})),o.forEach((function(e){var t=e.offsetTop;t-.9*window.innerHeight<n&&(e.style.opacity="1",e.style.animation="fadeOpacity 1s both"),t-1.1*window.innerHeight>n&&(e.style.opacity="0",e.style.animation=null)}))},En=On.b.div(s||(s=Object(gn.a)(["\n  margin: 20% auto 0;\n\n  width: 100px;\n  height: 100px;\n\n  border-radius: 50%;\n  border-right: 10px solid black;\n  border-left: 10px solid black;\n  border-top: 10px solid white;\n  border-bottom: 10px solid white};\n\n  animation: "," 1.5s ease-in-out infinite;\n"])),(function(){return Object(On.c)(r||(r=Object(gn.a)(["\nfrom {  transform:rotate(0)}\n to { transform:rotate(360deg)}\n"])))})),Sn=function(){return Object(vn.jsx)(En,{})},Tn=t.p+"static/media/github.e661aeb6.svg",Bn=t.p+"static/media/linkedin.9e111ed8.svg",Ln=On.b.div(c||(c=Object(gn.a)(["\n  padding: 10px;\n  position: relative;\n\n  grid-area: ",";\n"])),(function(n){return n.name})),Rn=On.b.label(d||(d=Object(gn.a)(['\n  cursor: pointer;\n  position: absolute;\n  left: 18px;\n  top: 40px;\n  transition: 0.3s ease-in-out;\n\n  font-size: 20px;\n  font-family: "Roboto", sans-serif;\n  color: #373738;\n  cursor: none;\n']))),qn=On.b.input(l||(l=Object(gn.a)(['\n  margin-top: 24px;\n  border: none;\n  width: 100%;\n  height: 30px;\n  cursor: pointer;\n  padding: 10px;\n\n  background-color: transparent;\n  font-size: 20px;\n  font-family: "Roboto", sans-serif;\n  color: #373738;\n\n  cursor: none;\n\n  :focus ~ label {\n    top: 10px;\n    font-size: 14px;\n  }\n\n  :not(:placeholder-shown) ~ label {\n    top: 10px;\n    font-size: 14px;\n  }\n']))),Hn=On.b.div(p||(p=Object(gn.a)(["\n  width: 100%;\n  height: 2px;\n  background-color: #818181;\n"]))),Cn=function(n){var e=n.children,t=n.name,o=n.onMouseEnter,a=n.onMouseOut,i=n.set,r=n.value;return Object(vn.jsxs)(Ln,{name:t,children:[Object(vn.jsx)(qn,{type:"text",id:t,placeholder:" ",value:r,onChange:function(n){return i(n.target.value)},onMouseEnter:o,onMouseOut:a}),Object(vn.jsx)(Rn,{htmlFor:t,onMouseEnter:o,onMouseOut:a,children:e}),Object(vn.jsx)(Hn,{})]})},Yn=On.b.div(m||(m=Object(gn.a)(["\n  margin-top: 30px;\n  padding: 10px;\n  position: relative;\n\n  grid-area: ",";\n"])),(function(n){return n.name})),In=On.b.label(b||(b=Object(gn.a)(['\n  cursor: pointer;\n  position: absolute;\n  left: 18px;\n  top: 0px;\n  transition: 0.3s ease-in-out;\n\n  font-size: 20px;\n  font-family: "Roboto", sans-serif;\n  color: #373738;\n  cursor: none;\n']))),Nn=On.b.textarea(u||(u=Object(gn.a)(['\n  margin-top: 24px;\n  border: 1px solid #a5a5a5;\n  width: 100%;\n  height: 170px;\n  cursor: pointer;\n  padding: 10px;\n\n  background-color: transparent;\n  font-size: 20px;\n  font-family: "Roboto", sans-serif;\n  color: #373738;\n  cursor: none;\n']))),Pn=function(n){var e=n.children,t=n.name,o=n.onMouseEnter,a=n.onMouseOut,i=n.value,r=n.set;return Object(vn.jsxs)(Yn,{name:t,children:[Object(vn.jsx)(In,{htmlFor:t,onMouseEnter:o,onMouseOut:a,children:e}),Object(vn.jsx)(Nn,{type:"text",id:t,placeholder:" ",onMouseEnter:o,onMouseOut:a,value:i,onChange:function(n){return r(n.target.value)}})]})},Wn=On.b.div(f||(f=Object(gn.a)(['\n  max-width: 640px;\n  margin: 24px auto;\n  display: grid;\n  grid-template-areas:\n    "name"\n    "email"\n    "message"\n    "sendMessage"\n    "button";\n']))),Fn=On.b.p(j||(j=Object(gn.a)(['\n  grid-area: sendMessage;\n  font-size: 16px;\n  font-family: "Roboto", sans-serif;\n  text-transform: uppercase;\n  font-weight: 400;\n  color: #171717;\n\n  transition: 0.3s ease-in-out;\n\n  display: ',";\n"])),(function(n){return""!==n.sendmessage?"block":"none"})),Kn=On.b.button(h||(h=Object(gn.a)(['\n  width: calc(100% - 20px);\n  grid-area: button;\n\n  margin: 20px 10px 0 auto;\n\n  padding: 15px 60px;\n  background: #f1f1f1;\n  font-size: 16px;\n  font-family: "Roboto", sans-serif;\n  text-transform: uppercase;\n  font-weight: 400;\n  color: #171717;\n  border: none;\n  border-radius: 5px;\n  box-shadow: 0 0 10px 3px rgba(0, 0, 0, 0.2);\n\n  cursor: none;\n\n  transition: 0.3s ease-in-out;\n\n  :hover {\n    background-color: #313131;\n    color: #f1f1f1;\n  }\n']))),An=function(){var n=Object(mn.useState)(""),e=Object(xn.a)(n,2),t=e[0],o=e[1],a=Object(mn.useState)(""),i=Object(xn.a)(a,2),r=i[0],s=i[1],c=Object(mn.useState)(""),d=Object(xn.a)(c,2),l=d[0],p=d[1],m=Object(mn.useState)(""),b=Object(xn.a)(m,2),u=b[0],f=b[1],j=Object(mn.useState)(!1),h=Object(xn.a)(j,2),x=h[0],g=h[1],O=function(){document.querySelector(".cursorBorder").classList.add("active")},v=function(){document.querySelector(".cursorBorder").classList.remove("active")};return Object(vn.jsx)(Wn,{"data-anim":"fade-up",children:x?Object(vn.jsx)(Sn,{}):Object(vn.jsxs)(vn.Fragment,{children:[Object(vn.jsx)(Cn,{name:"name",onMouseEnter:O,onMouseOut:v,set:o,value:t,children:"Wpisz swoje imi\u0119"}),Object(vn.jsx)(Cn,{name:"email",onMouseEnter:O,onMouseOut:v,set:s,value:r,children:"Wpisz sw\xf3j email"}),Object(vn.jsx)(Pn,{name:"message",onMouseEnter:O,onMouseOut:v,set:p,value:l,children:"Wiadomo\u015b\u0107:"}),Object(vn.jsx)(Fn,{sendmessage:u,children:u}),Object(vn.jsx)(Kn,{onMouseEnter:O,onMouseOut:v,onClick:function(){g(!0),""!==t&&""!==r&&""!==l?(console.log("idziemy w axiosa"),hn.a.post("https://kamilborowskiportfolio.herokuapp.com/contact",{name:t,email:r,message:l}).then((function(n){console.log(n),f(n.data),o(""),s(""),p(""),g(!1),setTimeout((function(){f("")}),1e4)})).catch((function(n){g(!1),f("Wyst\u0105pi\u0142 b\u0142\u0105d podczas wysy\u0142ania"),setTimeout((function(){f("")}),1e4)}))):(f("Uzupe\u0142nij wszystkie pola formularza"),g(!1))},disabled:!1,children:"Wy\u015blij"})]})})},_n=On.b.h2(x||(x=Object(gn.a)(['\n  opacity: 0;\n\n  font-family: "Handlee", sans-serif;\n\n  letter-spacing: 5px;\n  text-transform: uppercase;\n\n  font-size: 50px;\n\n  @media (max-width: 800px) {\n    font-size: 25px;\n  }\n']))),Un=function(n){var e=n.children,t=n.className,o=n.id;return Object(vn.jsx)(_n,{className:t,id:o,"data-anim":"fade-up",children:e})},Xn=On.b.section(g||(g=Object(gn.a)(["\n  background-color: ",";\n  color: ",";\n  padding: 100px;\n\n  :nth-child(3) {\n    padding: 0 100px;\n  }\n\n  @media (max-width: 800px) {\n    padding: 25px;\n  }\n"])),(function(n){return"dark"===n.theme?"#171717":"#f5f5f5"}),(function(n){return"dark"===n.theme?"#f5f5f5":"#171717"})),Jn=function(n){var e=n.children,t=n.theme,o=n.name,a=n.id,i=n.scrollTop,r=Object(mn.useRef)(null);return Object(mn.useEffect)((function(){r.current.offsetTop-.75*window.innerHeight<i&&(document.getElementById("".concat(o)).style.animation="fadeUp 1s both")}),[o,i]),Object(vn.jsxs)(Xn,{id:a,ref:r,theme:t,children:[Object(vn.jsxs)(Un,{id:o,children:["#",o]}),e]})},Dn=On.b.a(O||(O=Object(gn.a)(['\n  font-family: "Roboto Condensed", sans-serif;\n  display: inline-block;\n  color: #171717;\n  cursor: none;\n  text-decoration: none;\n  font-size: 36px;\n\n  margin: 36px 0;\n\n  transition: 0.3s ease-in-out;\n\n  :hover {\n    transform: scale(1.1);\n  }\n\n  @media (max-width: 800px) {\n    font-size: 18px;\n  }\n']))),Gn=On.b.a(v||(v=Object(gn.a)(["\n  margin: 0 40px;\n  cursor: none;\n"]))),Qn=On.b.img(w||(w=Object(gn.a)(["\n  transition: 0.3s ease-in-out;\n\n  :hover {\n    transform: scale(1.1);\n  }\n"]))),Vn=function(n){var e=n.scrollTop,t=function(){document.querySelector(".cursorBorder").classList.add("active")},o=function(){document.querySelector(".cursorBorder").classList.remove("active")};return Object(vn.jsxs)(Jn,{id:"contact",theme:"light",name:"Kontakt",scrollTop:e,children:[Object(vn.jsx)(An,{}),Object(vn.jsx)(Dn,{href:"mailto:k.borowski@onet.pl",onMouseEnter:t,onMouseOut:o,"data-anim":"fade-up",children:"k.borowski@onet.pl"}),Object(vn.jsxs)("div",{children:[Object(vn.jsx)(Gn,{href:"https://github.com/KamilBorowski1995",target:"_blank",rel:"noreferrer",onMouseEnter:t,onMouseOut:o,"data-anim":"fade-up",children:Object(vn.jsx)(Qn,{src:Tn,alt:"Github Logo z SimpleIcons.org."})}),Object(vn.jsx)(Gn,{href:"https://www.linkedin.com/in/kamil-borowski-44b95a104/",target:"_blank",rel:"noreferrer",onMouseEnter:t,onMouseOut:o,"data-anim":"fade-up",children:Object(vn.jsx)(Qn,{src:Bn,alt:"Linkedin Logo z SimpleIcons.org."})})]})]})},Zn=Object(On.c)(y||(y=Object(gn.a)(["\nfrom {\n    transform: translateY(-40%);\n    opacity: 0\n  }\n  \n   to {\n    transform: translateY(-50%);\n    opacity: 1\n  }\n"]))),$n=On.b.nav(k||(k=Object(gn.a)(["\n  position: fixed;\n  top: 50%;\n  right: 50px;\n\n  transform: translateY(-50%);\n\n  @media (max-width: 800px) {\n    right: 20px;\n  }\n\n  animation-duration: 1s;\n  animation-fill-mode: backwards;\n  animation-delay: 1.5s;\n  animation-name: ",";\n"])),Zn),ne=On.b.li(z||(z=Object(gn.a)(["\n  width: 20px;\n  height: 20px;\n  background-color: ",";\n  margin: 20px 0;\n\n  border-radius: 50%;\n\n  transition: 0.3s ease-in-out;\n  list-style: none;\n\n  @media (max-width: 800px) {\n    width: 15px;\n    height: 15px;\n  }\n\n  :hover {\n    background-color: #9e9e9e;\n    transform: scale(1.3);\n  }\n"])),(function(n){return n.name===n.activePage?"#6b6b6b":"#313131"})),ee=On.b.a(M||(M=Object(gn.a)(["\n  cursor: none;\n  display: block;\n  width: 100%;\n  height: 100%;\n"]))),te=function(n){var e=n.scrollTop,t=Object(mn.useState)("home"),o=Object(xn.a)(t,2),a=o[0],i=o[1];Object(mn.useEffect)((function(){for(var n=[document.getElementById("home"),document.getElementById("skills"),document.getElementById("projects"),document.getElementById("contact")],t=0;t<n.length;t++)n[t+1]&&(e>=n[t].offsetTop&&e<n[t+1].offsetTop&&i(n[t].id),e>=n[n.length-1].offsetTop&&i(n[3].id))}),[e]);var r=function(){document.querySelector(".cursorBorder").classList.add("active")},s=function(){document.querySelector(".cursorBorder").classList.remove("active")};return Object(vn.jsx)($n,{children:Object(vn.jsxs)("ul",{children:[Object(vn.jsx)(ne,{name:"home",activePage:a,onMouseEnter:r,onMouseOut:s,children:Object(vn.jsx)(ee,{href:"#home"})}),Object(vn.jsx)(ne,{name:"skills",activePage:a,onMouseEnter:r,onMouseOut:s,children:Object(vn.jsx)(ee,{href:"#skills"})}),Object(vn.jsx)(ne,{name:"projects",activePage:a,onMouseEnter:r,onMouseOut:s,children:Object(vn.jsx)(ee,{href:"#projects"})}),Object(vn.jsx)(ne,{name:"contact",activePage:a,onMouseEnter:r,onMouseOut:s,children:Object(vn.jsx)(ee,{href:"#contact"})})]})})},oe=Object(On.c)(E||(E=Object(gn.a)(["\nfrom {\n     opacity: 0\n  }\n  \n   to {\n     opacity: 1\n  }\n"]))),ae=On.b.div(S||(S=Object(gn.a)(["\n  position: absolute;\n  width: ",";\n  height: ",";\n  border-radius: 50%;\n  background-color: #313131;\n  transition: 1s;\n\n  animation-duration: 1s;\n  animation-fill-mode: backwards;\n  animation-delay: 2.5s;\n  animation-name: ",";\n\n  @media (max-width: 800px) {\n    width: ",";\n    height: ",";\n  }\n"])),(function(n){return"".concat(n.size/20,"vw")}),(function(n){return"".concat(n.size/20,"vw")}),oe,(function(n){return"".concat(n.size/15,"vw")}),(function(n){return"".concat(n.size/15,"vw")})),ie=function(n){var e=n.className,t=n.size,o=void 0===t?200:t,a=Object(mn.useState)(0),i=Object(xn.a)(a,2),r=i[0],s=i[1],c=Object(mn.useState)(0),d=Object(xn.a)(c,2),l=d[0],p=d[1],m=Object(mn.useState)(0),b=Object(xn.a)(m,2),u=b[0],f=b[1],j=Object(mn.useState)(0),h=Object(xn.a)(j,2),x=h[0],g=h[1],O=Object(mn.useRef)(null),v={transform:"translate(".concat(r,"px, ").concat(l,"px) ")};return Object(vn.jsx)(ae,{ref:O,size:o,className:e,style:v,onMouseEnter:function(n){var e=O.current.offsetTop,t=O.current.offsetLeft,o=O.current.clientWidth;window.addEventListener("mousemove",(function(n){f(n.clientX),g(n.clientY)})),s(u>=t+o/2?function(n){return n-20}:function(n){return n+20}),p(x>=e+o/2?function(n){return n-20}:function(n){return n+20})}})},re=t.p+"static/media/arrow.15e81fa1.svg",se=Object(On.c)(T||(T=Object(gn.a)(["\nfrom {\n    transform: scale3d(1, 1, 1);\n  }\n\n  30% {\n    transform: scale3d(1.25, 0.75, 1);\n  }\n\n  40% {\n    transform: scale3d(0.75, 1.25, 1);\n  }\n\n  50% {\n    transform: scale3d(1.15, 0.85, 1);\n  }\n\n  65% {\n    transform: scale3d(.95, 1.05, 1);\n  }\n\n  75% {\n    transform: scale3d(1.05, .95, 1);\n  }\n\n  to {\n    transform: scale3d(1, 1, 1);\n  }\n"]))),ce=Object(On.c)(B||(B=Object(gn.a)(["\nfrom {\n    transform: translateY(-10%);\n    opacity: 0\n  }\n20% {\n  opacity: 0\n}\n80% {\n  opacity: 1\n }\n  to {\n    transform: translateY(0%);\n \n  }\n"]))),de=Object(On.c)(L||(L=Object(gn.a)(["\nfrom {\n    transform: translate(-50% ,-10%);\n    opacity: 0\n  }\n \n\n  to {\n    transform: translate(-50%, 0);\n    opacity: 1\n  }\n"]))),le=Object(On.c)(R||(R=Object(gn.a)(["\nfrom { transform: translateY(100%) }\nto { transform: translateY(0%) }\n"]))),pe=Object(On.c)(q||(q=Object(gn.a)(["\n    0% {\n      opacity: 1\n    }\n    45% {\n      opacity: 0\n    }\n    65% {\n      opacity: 0\n    }   \n    100% {\n      opacity: 1\n    }\n"]))),me=On.b.header(H||(H=Object(gn.a)(['\n  position: relative;\n  background-color: #171717;\n  color: #dbdbdb;\n  width: 100vw;\n  padding: 10px;\n  overflow: hidden;\n  margin: 0 auto;\n  height: 100%;\n  font-family: "Handlee", sans-serif;\n\n  letter-spacing: 5px;\n  text-transform: uppercase;\n\n  transition: 0.3s ease-in-out;\n\n  clip-path: polygon(0 0%, 100% 0, 100% 100%, 0% 100%);\n\n  animation: '," 0.5s ease-in-out;\n\n  @media (min-width: 800px) {\n    ","\n  }\n"])),le,(function(n){return!0===n.ticking&&Object(On.a)(C||(C=Object(gn.a)(["\n        clip-path: polygon(0 0, 100% 0, 100% 100%, 0 97%);\n      "])))})),be=On.b.div(Y||(Y=Object(gn.a)(["\n  z-index: 1;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n\n  animation: "," 2s;\n"])),ce),ue=On.b.h1(I||(I=Object(gn.a)(["\n  font-size: 80px;\n  margin-bottom: 15px;\n  z-index: 1;\n  display: flex;\n  justify-content: center;\n\n  @media (max-width: 800px) {\n    font-size: 50px;\n    flex-direction: column;\n  }\n"]))),fe=On.b.div(N||(N=Object(gn.a)([""]))),je=On.b.div(P||(P=Object(gn.a)(["\n  @media (max-width: 800px) {\n    margin-bottom: 10px;\n  }\n"]))),he=On.b.span(W||(W=Object(gn.a)(["\n  display: inline-block;\n  animation-duration: 1s;\n  animation-fill-mode: both;\n  animation-iteration-count: 1;\n  transition: 0.3s ease-in-out;\n\n  :hover {\n    animation-name: ",";\n    color: #525252;\n  }\n"])),se),xe=Object(On.b)(he)(F||(F=Object(gn.a)(["\n  width: 15px;\n"]))),ge=On.b.p(K||(K=Object(gn.a)(["\n  font-size: 35px;\n  z-index: 1;\n  display: flex;\n  justify-content: center;\n\n  @media (max-width: 800px) {\n    font-size: 25px;\n    flex-direction: column;\n  }\n"]))),Oe=Object(On.b)(ie)(A||(A=Object(gn.a)(["\n  top: 0;\n\n  :nth-child(2) {\n    top: 15%;\n    left: 25%;\n  }\n  :nth-child(3) {\n    top: 12%;\n    left: 61%;\n  }\n  :nth-child(4) {\n    top: 45%;\n    left: 48%;\n  }\n  :nth-child(5) {\n    top: 60%;\n    left: 35%;\n  }\n  :nth-child(6) {\n    top: 23%;\n    left: 50%;\n  }\n"]))),ve=On.b.a(_||(_=Object(gn.a)(['\n  position: absolute;\n  transform: translateX(-50%);\n  bottom: 100px;\n  /* width: 250px; */\n  border: 1px solid #f5f5f5;\n  border-radius: 10px;\n  background-color: transparent;\n  padding: 30px 40px;\n  text-transform: uppercase;\n  color: #f5f5f5;\n  cursor: none;\n  text-decoration: none;\n\n  font-family: "Roboto Condensed", sans-serif;\n  font-size: 24px;\n  letter-spacing: 2px;\n\n  transition: 0.3s ease-in-out;\n  z-index: 0;\n\n  :hover {\n    background-color: #313131;\n    border: 1px solid #313131;\n  }\n\n  overflow: hidden;\n\n  animation-duration: 1s;\n  animation-fill-mode: backwards;\n  animation-delay: 2s;\n  animation-name: ',";\n\n  margin: 0 auto;\n  justify-content: center;\n  align-items: center;\n"])),de),we=On.b.img(U||(U=Object(gn.a)(["\n  position: absolute;\n  top: 50%;\n  left: 50%;\n\n  transform: translate(-50%, -50%);\n\n  animation: "," 4s infinite 2s;\n"])),pe),ye=function(n){var e=n.ticking,t=function(n){for(var e=n.children,t=[],o=0;o<e.length;o++)t.push(e[o]);return t.map((function(n,e){return" "===n?Object(vn.jsx)(xe,{children:n},n+e):Object(vn.jsx)(he,{children:n},n+e)}))};return Object(vn.jsxs)(me,{id:"home",className:"App-header",ticking:e,children:[Object(vn.jsxs)(be,{children:[Object(vn.jsxs)(ue,{children:[Object(vn.jsx)(fe,{children:Object(vn.jsx)(t,{children:"Kamil "})}),Object(vn.jsx)(fe,{children:Object(vn.jsx)(t,{children:"Borowski "})})]}),Object(vn.jsxs)(ge,{children:[Object(vn.jsx)(je,{children:Object(vn.jsx)(t,{children:"Fron-end "})}),Object(vn.jsx)(je,{children:Object(vn.jsx)(t,{children:"Developer "})})]})]}),Object(vn.jsx)(Oe,{size:380}),Object(vn.jsx)(Oe,{size:200}),Object(vn.jsx)(Oe,{size:300}),Object(vn.jsx)(Oe,{size:150}),Object(vn.jsx)(Oe,{size:130}),Object(vn.jsx)(ve,{href:"#skills",onMouseEnter:function(){document.querySelector(".cursorBorder").classList.add("active")},onMouseOut:function(){document.querySelector(".cursorBorder").classList.remove("active")},children:Object(vn.jsx)(we,{src:re,alt:"arrow"})})]})},ke=(t(50),t.p+"static/media/js.b972f7ca.svg"),ze=t.p+"static/media/nodejs.0e9af1af.svg",Me=t.p+"static/media/react.2839c248.svg",Ee=t.p+"static/media/mongodb.029a6f10.svg",Se=t.p+"static/media/play.6ebe4163.svg",Te=On.b.div(X||(X=Object(gn.a)(['\n  max-width: 1400px;\n  margin: 0px auto;\n\n  font-family: "Handlee";\n  letter-spacing: 5px;\n  text-transform: uppercase;\n\n  @media (max-width: 800px) {\n    margin-bottom: 5px;\n  }\n']))),Be=On.b.div(J||(J=Object(gn.a)(["\n  opacity: 0;\n  height: 100%;\n  overflow: hidden;\n  border-radius: 15px;\n  border: 2px solid #dbdbdb;\n  position: relative;\n\n  color: #171717;\n\n  transition: 0.4s ease-in-out;\n\n  :hover > img {\n    transform: scale(1.2);\n  }\n\n  :hover > div {\n    opacity: 0.9;\n    transform: scale(1);\n  }\n"]))),Le=On.b.img(D||(D=Object(gn.a)(["\n  width: 100%;\n  height: 100%;\n  transform: scale(1);\n  transition: 0.4s ease-in-out;\n"]))),Re=On.b.div(G||(G=Object(gn.a)(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: #fff;\n\n  display: flex;\n  flex-direction: column;\n  justify-content: space-evenly;\n\n  opacity: 0;\n  transform: scale(1.1);\n  transition: 0.4s ease-in-out;\n"]))),qe=On.b.h3(Q||(Q=Object(gn.a)(['\n  font-family: "Roboto Condensed", sans-serif;\n  font-size: 24px;\n  letter-spacing: 2px;\n  /* padding: 20px; */\n\n  @media (max-width: 800px) {\n    /* padding: 10px; */\n  }\n']))),He=On.b.div(V||(V=Object(gn.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  /* padding: 0 0 20px; */\n"]))),Ce=On.b.img(Z||(Z=Object(gn.a)(["\n  height: 40px;\n  margin: 0 10px;\n\n  @media (max-width: 800px) {\n    width: 25px;\n    margin: 0 5px;\n  }\n"]))),Ye=On.b.a($||($=Object(gn.a)(["\n  margin: 0 20px;\n  cursor: none;\n  @media (max-width: 800px) {\n    margin: 0 10px;\n  }\n"]))),Ie=On.b.img(nn||(nn=Object(gn.a)(["\n  transition: 0.2s linear;\n\n  width: 60px;\n\n  @media (max-width: 800px) {\n    width: 40px;\n  }\n  :hover {\n    transform: scale(1.2);\n  }\n"]))),Ne=function(n){var e=n.name,t=n.tech,o=n.link,a=n.image,i=function(){document.querySelector(".cursorBorder").classList.add("active")},r=function(){document.querySelector(".cursorBorder").classList.remove("active")};return Object(vn.jsx)(Te,{children:Object(vn.jsxs)(Be,{"data-anim":"fade-up",children:[Object(vn.jsx)(Le,{src:a,alt:"obrazek ze strony"}),Object(vn.jsxs)(Re,{children:[Object(vn.jsx)(qe,{children:e}),Object(vn.jsx)(He,{children:t.map((function(n){return"react"===n?Object(vn.jsx)(Ce,{src:Me,alt:"logo react"}):"node"===n?Object(vn.jsx)(Ce,{src:ze,alt:"logo node.js"}):"mongodb"===n?Object(vn.jsx)(Ce,{src:Ee,alt:"logo mongodb"}):"js"===n?Object(vn.jsx)(Ce,{src:ke,alt:"logo js"}):null}))}),Object(vn.jsxs)("div",{children:[o.git&&Object(vn.jsx)(Ye,{href:o.git,target:"_blank",rel:"noreferrer",onMouseEnter:i,onMouseOut:r,children:Object(vn.jsx)(Ie,{src:Tn,alt:"obrazek ze strony"})}),o.live&&Object(vn.jsx)(Ye,{href:o.live,target:"_blank",rel:"noreferrer",onMouseEnter:i,onMouseOut:r,children:Object(vn.jsx)(Ie,{src:Se,alt:"obrazek ze strony"})})]})]})]})})},Pe=t.p+"static/media/carpage.19894ec4.png",We=t.p+"static/media/cosmoswar.6c36b372.png",Fe=t.p+"static/media/fotoika.70b9851e.png",Ke=t.p+"static/media/prox-shop.659d1dd2.png",Ae=[{name:"Manaorder",tech:["react","node","mongodb"],image:t.p+"static/media/manaorder-1.1e843e00.png",link:{git:"https://github.com/KamilBorowski1995/ManaOrder",live:"https://kamilborowski1995.github.io/ManaOrder/"}},{name:"CosmosWar",tech:["react"],image:We,link:{git:"https://github.com/KamilBorowski1995/cosmos-war",live:"https://kamilborowski1995.github.io/cosmos-war/"}},{name:"Fotoika.com",tech:["react","node","mongodb"],image:Fe,link:{live:"http://fotoika.com/"}},{name:"Prox - Sklep",tech:["react","node","mongodb"],image:Ke,link:{}},{name:"Car-sharing",tech:["react"],image:Pe,link:{git:"https://github.com/KamilBorowski1995/car-sharing",live:"https://kamilborowski1995.github.io/car-sharing/"}},{name:"Planner Mobile",tech:["react","node","mongodb"],image:t.p+"static/media/planner.44cf84ca.png",link:{git:"https://github.com/KamilBorowski1995/planner",live:"https://kamilborowski1995.github.io/planner/"}}],_e=On.b.section(en||(en=Object(gn.a)(["\n  background-color: #171717;\n  padding: 100px;\n\n  color: #f5f5f5;\n\n  @media (max-width: 800px) {\n    padding: 25px;\n  }\n\n  transition: 0.3s ease-in-out;\n"]))),Ue=Object(On.b)(Un)(tn||(tn=Object(gn.a)(["\n  margin-bottom: 50px;\n"]))),Xe=On.b.div(on||(on=Object(gn.a)(["\n  max-width: 1400px;\n  margin: 0 auto;\n\n  display: grid;\n\n  grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));\n  grid-gap: 20px;\n\n  @media (max-width: 800px) {\n    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n  }\n"]))),Je=function(){return Object(vn.jsxs)(_e,{id:"projects","data-anim":"fade-opacity",children:[Object(vn.jsx)(Ue,{id:"projectsTitle",children:"#Projekty"}),Object(vn.jsx)(Xe,{children:Ae.map((function(n){var e=n.name,t=n.tech,o=n.link,a=n.image;return Object(vn.jsx)(Ne,{name:e,tech:t,link:o,image:a},e+t)}))})]})},De=On.b.div(an||(an=Object(gn.a)(["\n  opacity: 0;\n\n  margin: 0 20px 50px;\n"]))),Ge=On.b.div(rn||(rn=Object(gn.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n\n  transition: 0.3s ease-in-out;\n  :hover {\n    transform: scale(1.15);\n  }\n"]))),Qe=On.b.img(sn||(sn=Object(gn.a)(["\n  padding: 15px;\n\n  max-height: 100px;\n"]))),Ve=On.b.p(cn||(cn=Object(gn.a)(['\n  font-family: "Handlee", sans-serif;\n  text-transform: uppercase;\n\n  font-size: 16px;\n\n  @media (max-width: 800px) {\n    font-size: 14px;\n  }\n']))),Ze=function(n){var e=n.name,t=n.path,o=n.from;n.scrollTop;return Object(vn.jsx)(De,{id:e,"data-anim":"fade-up",children:Object(vn.jsxs)(Ge,{children:[Object(vn.jsx)(Qe,{src:t,alt:o}),Object(vn.jsx)(Ve,{children:e})]})},e)},$e=On.b.div(dn||(dn=Object(gn.a)(["\n  max-width: 1100px;\n\n  margin: 25px auto 0;\n  display: flex;\n  justify-content: space-evenly;\n\n  flex-wrap: wrap;\n"]))),nt=function(n){var e=n.children,t=n.db,o=n.scrollTop,a=n.id;return Object(vn.jsx)(Jn,{id:a,theme:"light",name:e,scrollTop:o,children:Object(vn.jsx)($e,{children:t.map((function(n){var e=n.name,t=n.path,a=n.from;return Object(vn.jsx)(Ze,{name:e,path:t,from:a,scrollTop:o})}))})})},et=t.p+"static/media/adobexd.1089f266.svg",tt=t.p+"static/media/css3.ae24e17f.svg",ot=t.p+"static/media/html5.80bac84b.svg",at=t.p+"static/media/reactrouter.eeff471f.svg",it=t.p+"static/media/sass.e51bbc62.svg",rt=t.p+"static/media/storybook.896245ba.svg",st=t.p+"static/media/sc.7665948c.svg",ct=t.p+"static/media/nest.2a27ae17.svg",dt=t.p+"static/media/redux.06850f86.svg",lt=t.p+"static/media/ts.fac859cb.svg",pt=[{name:"html5",path:ot,from:"https://simpleicons.org/"},{name:"css3",path:tt,from:"https://simpleicons.org/"},{name:"javascript",path:ke,from:"https://fontawesome.com/"},{name:"react",path:Me,from:"https://simpleicons.org/"},{name:"React-Router",path:at,from:"https://simpleicons.org/"},{name:"Sass",path:it,from:"https://simpleicons.org/"},{name:"Styled-Components",path:st,from:"https://simpleicons.org/"},{name:"StoryBook",path:rt,from:"https://simpleicons.org/"},{name:"node",path:ze,from:"https://fontawesome.com/"},{name:"mongodb",path:Ee,from:"https://simpleicons.org/"},{name:"github",path:Tn,from:"https://simpleicons.org/"},{name:"adobexd",path:et,from:"https://simpleicons.org/"}],mt=[{name:"Nest.js",path:ct,from:"https://seeklogo.com"},{name:"Redux",path:dt,from:"https://simpleicons.org/"},{name:"TypeScript",path:lt,from:"https://fontawesome.com/"}],bt=On.b.div(ln||(ln=Object(gn.a)(["\n  height: 100vh;\n  width: 100%;\n  overflow-y: scroll;\n  overflow-x: hidden;\n\n  transition: 0.3s ease-in;\n\n  ::-webkit-scrollbar {\n    display: none;\n  }\n\n  scroll-behavior: smooth;\n\n  @media (min-width: 800px) {\n    ","\n  }\n"])),(function(n){return!0===n.ticking&&Object(On.a)(pn||(pn=Object(gn.a)(["\n        transform: scale3d(0.98, 0.95, 1);\n      "])))})),ut=function(){var n=Object(mn.useState)(!1),e=Object(xn.a)(n,2),t=e[0],o=e[1],a=Object(mn.useState)(!1),i=Object(xn.a)(a,2),r=i[0],s=i[1],c=Object(mn.useState)(0),d=Object(xn.a)(c,2),l=d[0],p=d[1];return Object(mn.useEffect)((function(){Mn(l)}),[l]),Object(mn.useEffect)((function(){setTimeout((function(){s(!1)}),1e3)}),[r]),Object(mn.useEffect)((function(){null!==window.onload?window.onload=function(){setTimeout((function(){return o(!0)}),1e3)}:setTimeout((function(){return o(!0)}),1e3)}),[]),Object(vn.jsx)(vn.Fragment,{children:t?Object(vn.jsxs)(vn.Fragment,{children:[Object(vn.jsxs)(bt,{ticking:r,onScroll:function(n){s(!0),p(n.target.scrollTop)},children:[Object(vn.jsx)(ye,{ticking:r}),Object(vn.jsx)(nt,{db:pt,scrollTop:l,"data-anim":"fade-up",id:"skills",children:"Skillsy"}),Object(vn.jsx)(nt,{db:mt,scrollTop:l,id:"learn",children:"W trakcie nauki"}),Object(vn.jsx)(Je,{scrollTop:l}),Object(vn.jsx)(Vn,{scrollTop:l})]}),Object(vn.jsx)(te,{scrollTop:l})]}):Object(vn.jsx)(Sn,{})})};var ft=function(){return Object(mn.useEffect)((function(){hn.a.get("https://kamilborowskiportfolio.herokuapp.com/contact").then((function(n){})).catch((function(n){})).then((function(){}))}),[]),Object(vn.jsxs)("div",{className:"App",children:[Object(vn.jsx)(zn,{}),Object(vn.jsx)(ut,{})]})};fn.a.render(Object(vn.jsx)(bn.a.StrictMode,{children:Object(vn.jsx)(ft,{})}),document.getElementById("root"))}},[[51,1,2]]]);
//# sourceMappingURL=main.2a132357.chunk.js.map