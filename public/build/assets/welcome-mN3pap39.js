import{c as E,u as R,j as n,H as $}from"./app-0wXTMt39.js";import"./app-CWgois0U.js";function F(e){return`${e.includes("localhost")?`http://${e}`:`https://${e}`}/login`}function M(e){return e.split(" ").slice(0,2).map(r=>r[0]?.toUpperCase()??"").join("")}function S(e){const r=["#1e3a5f","#1e3a5f","#1e3a5f","#2a5298","#1e3a5f","#1e3a5f","#1d4ed8","#0f766e"];let a=0;for(let t=0;t<e.length;t++)a=e.charCodeAt(t)+((a<<5)-a);return r[Math.abs(a)%r.length]}function H(e){return!e||e==="basic"?null:{pro:{label:"Pro",bg:"#1e3a5f",color:"#2a5298"},enterprise:{label:"Enterprise",bg:"#ea7c2522",color:"#ea7c25"}}[e]??null}function D(){const e=E.c(40),{companies:r,appName:a}=R().props;let t,c,d,p,o,i,s,l;if(e[0]!==r||e[1]!==a){const C=r===void 0?[]:r,v=a===void 0?"Contents-MS":a,y=C.filter(T),_=`Welcome — ${v}`;e[10]!==_?(s=n.jsx($,{title:_}),e[10]=_,e[11]=s):s=e[11],e[12]===Symbol.for("react.memo_cache_sentinel")?(l=n.jsx("style",{children:`
                @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700;800&family=Inter:wght@400;500;600&display=swap');
                *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
                body { font-family: 'Inter', sans-serif; background: #1e3a5f; }

                .wr { min-height: 100vh; background: #1e3a5f; color: #fff; position: relative; overflow-x: hidden; }

                /* ambient glows */
                .wr::before {
                    content: '';
                    position: fixed; top: -150px; right: -100px;
                    width: 500px; height: 500px;
                    background: radial-gradient(circle, rgba(234,124,37,.18) 0%, transparent 70%);
                    pointer-events: none; z-index: 0;
                }
                .wr::after {
                    content: '';
                    position: fixed; bottom: -120px; left: -80px;
                    width: 400px; height: 400px;
                    background: radial-gradient(circle, rgba(42,82,152,.2) 0%, transparent 70%);
                    pointer-events: none; z-index: 0;
                }

                /* ─ Header ─ */
                .hdr {
                    position: relative; z-index: 10;
                    display: flex; align-items: center; justify-content: space-between;
                    padding: 16px 40px;
                    border-bottom: 1px solid rgba(255,255,255,.07);
                    background: rgba(11,26,46,.9);
                    backdrop-filter: blur(10px);
                }
                .hdr-brand { display: flex; align-items: center; gap: 14px; text-decoration: none; }
                .hdr-logo  { height: 46px; width: auto; object-fit: contain; }
                .hdr-title {
                    font-family: 'Montserrat', sans-serif;
                    font-size: 15px; font-weight: 700; color: #fff; letter-spacing: .03em;
                }
                .hdr-tag {
                    font-size: 10px; color: #ea7c25; font-weight: 700;
                    letter-spacing: .12em; text-transform: uppercase; margin-top: 2px;
                }
                .hdr-reg {
                    font-size: 12px; font-weight: 600;
                    color: rgba(255,255,255,.45); text-decoration: none;
                    padding: 8px 18px;
                    border: 1px solid rgba(234,124,37,.3); border-radius: 7px;
                    transition: all .18s;
                }
                .hdr-reg:hover { color: #ea7c25; border-color: #ea7c25; background: rgba(234,124,37,.08); }

                /* ─ Hero ─ */
                .hero {
                    position: relative; z-index: 10;
                    text-align: center;
                    padding: 68px 24px 48px;
                    max-width: 700px; margin: 0 auto;
                }
                .eyebrow {
                    display: inline-block;
                    font-size: 10px; font-weight: 700;
                    letter-spacing: .18em; text-transform: uppercase;
                    color: #ea7c25;
                    background: rgba(234,124,37,.1);
                    border: 1px solid rgba(234,124,37,.25);
                    border-radius: 100px; padding: 5px 18px; margin-bottom: 22px;
                }
                .h1 {
                    font-family: 'Montserrat', sans-serif;
                    font-size: clamp(2rem, 5vw, 3.4rem);
                    font-weight: 800; line-height: 1.08;
                    letter-spacing: -.025em; color: #fff;
                }
                .h1 em { font-style: normal; color: #ea7c25; }
                .sub {
                    margin-top: 18px; font-size: 15px;
                    color: rgba(255,255,255,.4); line-height: 1.65;
                    max-width: 480px; margin-left: auto; margin-right: auto;
                }
                .divider {
                    width: 44px; height: 3px; background: #ea7c25;
                    border-radius: 2px; margin: 28px auto 0;
                }

                /* ─ Section ─ */
                .sec {
                    position: relative; z-index: 10;
                    max-width: 980px; margin: 0 auto;
                    padding: 0 24px 80px;
                }
                .count {
                    font-size: 11px; color: rgba(255,255,255,.25);
                    letter-spacing: .1em; text-align: center;
                    margin-bottom: 18px; font-weight: 600; text-transform: uppercase;
                }

                /* ─ Cards ─ */
                .grid {
                    display: grid; gap: 10px;
                    grid-template-columns: repeat(auto-fill, minmax(285px, 1fr));
                }
                .card {
                    display: flex; align-items: center; gap: 14px;
                    padding: 15px 17px; border-radius: 12px;
                    border: 1px solid rgba(255,255,255,.08);
                    background: rgba(255,255,255,.04);
                    text-decoration: none; color: inherit;
                    position: relative; overflow: hidden;
                    transition: all .22s ease;
                    backdrop-filter: blur(6px);
                }
                .card-bar {
                    position: absolute; left: 0; top: 18%; bottom: 18%;
                    width: 3px; background: #ea7c25; border-radius: 0 2px 2px 0;
                    opacity: 0; transition: opacity .2s;
                }
                .card:hover { border-color: rgba(234,124,37,.38); background: rgba(234,124,37,.05); transform: translateY(-2px); box-shadow: 0 10px 36px rgba(0,0,0,.35); }
                .card:hover .card-bar { opacity: 1; }

                .av {
                    flex-shrink: 0; width: 44px; height: 44px; border-radius: 10px;
                    display: flex; align-items: center; justify-content: center;
                    font-family: 'Montserrat', sans-serif;
                    font-size: 13px; font-weight: 800; color: #fff;
                    border: 1px solid rgba(255,255,255,.1);
                }
                .av img { width: 100%; height: 100%; object-fit: contain; border-radius: 9px; }

                .inf { flex: 1; min-width: 0; }
                .inf-row { display: flex; align-items: center; gap: 7px; }
                .cname {
                    font-family: 'Montserrat', sans-serif;
                    font-size: 13px; font-weight: 700; color: #fff;
                    white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
                    transition: color .18s;
                }
                .card:hover .cname { color: #ea7c25; }
                .badge {
                    flex-shrink: 0; font-size: 9px; font-weight: 700;
                    letter-spacing: .08em; text-transform: uppercase;
                    padding: 2px 7px; border-radius: 100px; border: 1px solid;
                }
                .dom {
                    font-size: 11px; color: rgba(255,255,255,.3);
                    white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
                    margin-top: 3px; transition: color .18s;
                }
                .card:hover .dom { color: rgba(255,255,255,.52); }
                .arr { flex-shrink: 0; color: rgba(255,255,255,.18); transition: all .18s; }
                .card:hover .arr { color: #ea7c25; transform: translateX(4px); }

                /* ─ Empty ─ */
                .empty {
                    text-align: center; padding: 56px 32px;
                    border: 1px dashed rgba(255,255,255,.12);
                    border-radius: 16px; background: rgba(255,255,255,.02);
                }
                .empty p { font-size: 14px; color: rgba(255,255,255,.28); margin-bottom: 22px; }
                .cta {
                    display: inline-flex; align-items: center; gap: 8px;
                    background: #ea7c25; color: #fff;
                    font-family: 'Montserrat', sans-serif;
                    font-size: 13px; font-weight: 700; letter-spacing: .02em;
                    padding: 11px 22px; border-radius: 8px; text-decoration: none;
                    transition: background .18s;
                }
                .cta:hover { background: #c96a1a; }

                /* ─ Footer ─ */
                .ftr {
                    position: relative; z-index: 10;
                    text-align: center; padding: 0 24px 48px;
                    display: flex; flex-direction: column; align-items: center; gap: 12px;
                }
                .ftr-line { width: 52px; height: 1px; background: rgba(255,255,255,.1); }
                .ftr-p { font-size: 13px; color: rgba(255,255,255,.3); }
                .ftr-p a { color: #ea7c25; text-decoration: none; font-weight: 600; }
                .ftr-p a:hover { color: #f9a85a; }
                .ftr-copy { font-size: 11px; color: rgba(255,255,255,.15); letter-spacing: .04em; }

                @media (max-width: 600px) {
                    .hdr { padding: 14px 20px; }
                    .hdr-tag { display: none; }
                    .grid { grid-template-columns: 1fr; }
                }
            `}),e[12]=l):l=e[12],p="wr";let j;e[13]===Symbol.for("react.memo_cache_sentinel")?(j=n.jsx("img",{src:"/vmg-out-logo.png",alt:"VMG Logo",className:"hdr-logo",onError:P}),e[13]=j):j=e[13];let f;e[14]!==v?(f=n.jsx("div",{className:"hdr-title",children:v}),e[14]=v,e[15]=f):f=e[15];let k;e[16]===Symbol.for("react.memo_cache_sentinel")?(k=n.jsx("div",{className:"hdr-tag",children:"Manage website content Easy"}),e[16]=k):k=e[16];let m;e[17]!==f?(m=n.jsxs("a",{href:"https://vmg.co.tz",target:"_blank",rel:"noreferrer",className:"hdr-brand",children:[j,n.jsxs("div",{children:[f,k]})]}),e[17]=f,e[18]=m):m=e[18];let N;e[19]===Symbol.for("react.memo_cache_sentinel")?(N=n.jsx("a",{href:"/register-company",className:"hdr-reg",children:"+ Register Company"}),e[19]=N):N=e[19],e[20]!==m?(o=n.jsxs("header",{className:"hdr",children:[m,N]}),e[20]=m,e[21]=o):o=e[21];let z;e[22]===Symbol.for("react.memo_cache_sentinel")?(z=n.jsx("span",{className:"eyebrow",children:"Multi-Tenant CMS Portal"}),e[22]=z):z=e[22],e[23]===Symbol.for("react.memo_cache_sentinel")?(i=n.jsxs("section",{className:"hero",children:[z,n.jsxs("h1",{className:"h1",children:["BE ",n.jsx("em",{children:"TRANSFORMED!"})]}),n.jsx("p",{className:"sub",children:"Select your workspace below to access your CMS dashboard, or register a new company to get started."}),n.jsx("div",{className:"divider"})]}),e[23]=i):i=e[23],t="sec",c=y.length>4&&n.jsxs("p",{className:"count",children:[y.length," workspaces available"]}),d=y.length===0?n.jsxs("div",{className:"empty",children:[n.jsx("p",{children:"No workspaces registered yet."}),n.jsx("a",{href:"/register-company",className:"cta",children:"Register the first company →"})]}):n.jsx("div",{className:"grid",children:y.map(L)}),e[0]=r,e[1]=a,e[2]=t,e[3]=c,e[4]=d,e[5]=p,e[6]=o,e[7]=i,e[8]=s,e[9]=l}else t=e[2],c=e[3],d=e[4],p=e[5],o=e[6],i=e[7],s=e[8],l=e[9];let g;e[24]!==t||e[25]!==c||e[26]!==d?(g=n.jsxs("section",{className:t,children:[c,d]}),e[24]=t,e[25]=c,e[26]=d,e[27]=g):g=e[27];let h;e[28]===Symbol.for("react.memo_cache_sentinel")?(h=n.jsx("div",{className:"ftr-line"}),e[28]=h):h=e[28];let b;e[29]===Symbol.for("react.memo_cache_sentinel")?(b=n.jsxs("p",{className:"ftr-p",children:["Don't have a workspace?"," ",n.jsx("a",{href:"/register-company",children:"Register your company"})]}),e[29]=b):b=e[29];let u;e[30]===Symbol.for("react.memo_cache_sentinel")?(u=n.jsxs("footer",{className:"ftr",children:[h,b,n.jsxs("p",{className:"ftr-copy",children:["© ",new Date().getFullYear()," VMG. All rights reserved."]})]}),e[30]=u):u=e[30];let x;e[31]!==g||e[32]!==p||e[33]!==o||e[34]!==i?(x=n.jsxs("div",{className:p,children:[o,i,g,u]}),e[31]=g,e[32]=p,e[33]=o,e[34]=i,e[35]=x):x=e[35];let w;return e[36]!==x||e[37]!==s||e[38]!==l?(w=n.jsxs(n.Fragment,{children:[s,l,x]}),e[36]=x,e[37]=s,e[38]=l,e[39]=w):w=e[39],w}function L(e){const r=H(e.plan);return n.jsxs("a",{href:F(e.domain),className:"card",children:[n.jsx("div",{className:"card-bar"}),n.jsx("div",{className:"av",style:{background:e.logo?"rgba(255,255,255,0.06)":S(e.name)},children:e.logo?n.jsx("img",{src:e.logo,alt:e.name,onError:a=>{const t=a.currentTarget.parentElement;a.currentTarget.remove(),t.style.background=S(e.name),t.textContent=M(e.name)}}):M(e.name)}),n.jsxs("div",{className:"inf",children:[n.jsxs("div",{className:"inf-row",children:[n.jsx("span",{className:"cname",children:e.name}),r&&n.jsx("span",{className:"badge",style:{background:r.bg,color:r.color,borderColor:r.color+"55"},children:r.label})]}),n.jsx("div",{className:"dom",children:e.domain})]}),n.jsx("svg",{className:"arr",width:"16",height:"16",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2.5,children:n.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9 5l7 7-7 7"})})]},e.id)}function P(e){e.target.style.display="none"}function T(e){return e.status!=="inactive"}export{D as default};
