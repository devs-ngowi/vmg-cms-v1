import{c as E,u as F,j as e,H as $}from"./app-Df5WH-Or.js";import"./app-CWgois0U.js";function D(n){return n.startsWith("http://")||n.startsWith("https://")?`${n.replace(/\/$/,"")}/login`:`${n.includes("localhost")?`http://${n}`:`https://${n}`}/login`}function M(n){return n.split(" ").slice(0,2).map(r=>r[0]?.toUpperCase()??"").join("")}function S(n){const r=["#005F8C","#075985","#0369A1","#0C4A6E","#0E7490","#155E75"];let a=0;for(let t=0;t<n.length;t++)a=n.charCodeAt(t)+((a<<5)-a);return r[Math.abs(a)%r.length]}function R(n){return!n||n==="basic"?null:{pro:{label:"Pro",bg:"rgba(0, 95, 140, 0.14)",color:"#38BDF8"},enterprise:{label:"Enterprise",bg:"rgba(0, 95, 140, 0.18)",color:"#7DD3FC"}}[n]??null}function T(){const n=E.c(40),{companies:r,appName:a}=F().props;let t,c,p,d,i,o,s,l;if(n[0]!==r||n[1]!==a){const C=r===void 0?[]:r,y=a===void 0?"Contents-MS":a,w=C.filter(W),z=`Welcome — ${y}`;n[10]!==z?(s=e.jsx($,{title:z}),n[10]=z,n[11]=s):s=n[11],n[12]===Symbol.for("react.memo_cache_sentinel")?(l=e.jsx("style",{children:`
                @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700;800&family=Inter:wght@400;500;600&display=swap');

                :root {
                    --vmg-primary: #005F8C;
                    --vmg-primary-dark: #003F63;
                    --vmg-primary-deep: #082F49;
                    --vmg-primary-light: #38BDF8;
                    --vmg-primary-soft: rgba(0, 95, 140, 0.14);
                    --vmg-white: #ffffff;
                }

                *, *::before, *::after {
                    box-sizing: border-box;
                    margin: 0;
                    padding: 0;
                }

                body {
                    font-family: 'Inter', sans-serif;
                    background: var(--vmg-primary-deep);
                }

                .wr {
                    min-height: 100vh;
                    background:
                        radial-gradient(circle at top right, rgba(56, 189, 248, 0.16), transparent 34%),
                        radial-gradient(circle at bottom left, rgba(0, 95, 140, 0.22), transparent 30%),
                        linear-gradient(135deg, var(--vmg-primary-deep), var(--vmg-primary-dark));
                    color: var(--vmg-white);
                    position: relative;
                    overflow-x: hidden;
                }

                .hdr {
                    position: relative;
                    z-index: 10;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    padding: 16px 40px;
                    border-bottom: 1px solid rgba(255,255,255,.08);
                    background: rgba(0, 63, 99, .92);
                    backdrop-filter: blur(10px);
                }

                .hdr-brand {
                    display: flex;
                    align-items: center;
                    gap: 14px;
                    text-decoration: none;
                }

                .hdr-logo {
                    height: 46px;
                    width: auto;
                    object-fit: contain;
                }

                .hdr-title {
                    font-family: 'Montserrat', sans-serif;
                    font-size: 15px;
                    font-weight: 700;
                    color: #fff;
                    letter-spacing: .03em;
                }

                .hdr-tag {
                    font-size: 10px;
                    color: var(--vmg-primary-light);
                    font-weight: 700;
                    letter-spacing: .12em;
                    text-transform: uppercase;
                    margin-top: 2px;
                }

                .hdr-reg {
                    font-size: 12px;
                    font-weight: 700;
                    color: #fff;
                    text-decoration: none;
                    padding: 8px 18px;
                    border: 1px solid rgba(125, 211, 252, .45);
                    border-radius: 7px;
                    transition: all .18s ease;
                }

                .hdr-reg:hover {
                    color: var(--vmg-primary-light);
                    border-color: var(--vmg-primary-light);
                    background: rgba(56, 189, 248, .1);
                }

                .hero {
                    position: relative;
                    z-index: 10;
                    text-align: center;
                    padding: 68px 24px 48px;
                    max-width: 700px;
                    margin: 0 auto;
                }

                .eyebrow {
                    display: inline-block;
                    font-size: 10px;
                    font-weight: 700;
                    letter-spacing: .18em;
                    text-transform: uppercase;
                    color: var(--vmg-primary-light);
                    background: rgba(56, 189, 248, .1);
                    border: 1px solid rgba(56, 189, 248, .28);
                    border-radius: 100px;
                    padding: 5px 18px;
                    margin-bottom: 22px;
                }

                .h1 {
                    font-family: 'Montserrat', sans-serif;
                    font-size: clamp(2rem, 5vw, 3.4rem);
                    font-weight: 800;
                    line-height: 1.08;
                    letter-spacing: -.025em;
                    color: #fff;
                }

                .h1 em {
                    font-style: normal;
                    color: var(--vmg-primary-light);
                }

                .sub {
                    margin-top: 18px;
                    font-size: 15px;
                    color: rgba(255,255,255,.68);
                    line-height: 1.65;
                    max-width: 480px;
                    margin-left: auto;
                    margin-right: auto;
                }

                .divider {
                    width: 44px;
                    height: 3px;
                    background: var(--vmg-primary-light);
                    border-radius: 2px;
                    margin: 28px auto 0;
                }

                .sec {
                    position: relative;
                    z-index: 10;
                    max-width: 980px;
                    margin: 0 auto;
                    padding: 0 24px 80px;
                }

                .count {
                    font-size: 11px;
                    color: rgba(255,255,255,.45);
                    letter-spacing: .1em;
                    text-align: center;
                    margin-bottom: 18px;
                    font-weight: 600;
                    text-transform: uppercase;
                }

                .grid {
                    display: grid;
                    gap: 10px;
                    grid-template-columns: repeat(auto-fill, minmax(285px, 1fr));
                }

                .card {
                    display: flex;
                    align-items: center;
                    gap: 14px;
                    padding: 15px 17px;
                    border-radius: 12px;
                    border: 1px solid rgba(255,255,255,.1);
                    background: rgba(255,255,255,.055);
                    text-decoration: none;
                    color: inherit;
                    position: relative;
                    overflow: hidden;
                    transition: all .22s ease;
                    backdrop-filter: blur(6px);
                }

                .card-bar {
                    position: absolute;
                    left: 0;
                    top: 18%;
                    bottom: 18%;
                    width: 3px;
                    background: var(--vmg-primary-light);
                    border-radius: 0 2px 2px 0;
                    opacity: 0;
                    transition: opacity .2s;
                }

                .card:hover {
                    border-color: rgba(56, 189, 248, .5);
                    background: rgba(0, 95, 140, .22);
                    transform: translateY(-2px);
                    box-shadow: 0 10px 36px rgba(0,0,0,.35);
                }

                .card:hover .card-bar {
                    opacity: 1;
                }

                .av {
                    flex-shrink: 0;
                    width: 44px;
                    height: 44px;
                    border-radius: 10px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-family: 'Montserrat', sans-serif;
                    font-size: 13px;
                    font-weight: 800;
                    color: #fff;
                    border: 1px solid rgba(255,255,255,.14);
                }

                .av img {
                    width: 100%;
                    height: 100%;
                    object-fit: contain;
                    border-radius: 9px;
                }

                .inf {
                    flex: 1;
                    min-width: 0;
                }

                .inf-row {
                    display: flex;
                    align-items: center;
                    gap: 7px;
                }

                .cname {
                    font-family: 'Montserrat', sans-serif;
                    font-size: 13px;
                    font-weight: 700;
                    color: #fff;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    transition: color .18s;
                }

                .card:hover .cname {
                    color: var(--vmg-primary-light);
                }

                .badge {
                    flex-shrink: 0;
                    font-size: 9px;
                    font-weight: 700;
                    letter-spacing: .08em;
                    text-transform: uppercase;
                    padding: 2px 7px;
                    border-radius: 100px;
                    border: 1px solid;
                }

                .dom {
                    font-size: 11px;
                    color: rgba(255,255,255,.42);
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    margin-top: 3px;
                    transition: color .18s;
                }

                .card:hover .dom {
                    color: rgba(255,255,255,.72);
                }

                .arr {
                    flex-shrink: 0;
                    color: rgba(255,255,255,.32);
                    transition: all .18s;
                }

                .card:hover .arr {
                    color: var(--vmg-primary-light);
                    transform: translateX(4px);
                }

                .empty {
                    text-align: center;
                    padding: 56px 32px;
                    border: 1px dashed rgba(255,255,255,.16);
                    border-radius: 16px;
                    background: rgba(255,255,255,.035);
                }

                .empty p {
                    font-size: 14px;
                    color: rgba(255,255,255,.55);
                    margin-bottom: 22px;
                }

                .cta {
                    display: inline-flex;
                    align-items: center;
                    gap: 8px;
                    background: var(--vmg-primary);
                    color: #fff;
                    font-family: 'Montserrat', sans-serif;
                    font-size: 13px;
                    font-weight: 700;
                    letter-spacing: .02em;
                    padding: 11px 22px;
                    border-radius: 8px;
                    text-decoration: none;
                    transition: background .18s;
                }

                .cta:hover {
                    background: var(--vmg-primary-dark);
                }

                .ftr {
                    position: relative;
                    z-index: 10;
                    text-align: center;
                    padding: 0 24px 48px;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 12px;
                }

                .ftr-line {
                    width: 52px;
                    height: 1px;
                    background: rgba(255,255,255,.14);
                }

                .ftr-p {
                    font-size: 13px;
                    color: rgba(255,255,255,.52);
                }

                .ftr-p a {
                    color: var(--vmg-primary-light);
                    text-decoration: none;
                    font-weight: 600;
                }

                .ftr-p a:hover {
                    color: #bae6fd;
                }

                .ftr-copy {
                    font-size: 11px;
                    color: rgba(255,255,255,.28);
                    letter-spacing: .04em;
                }

                @media (max-width: 600px) {
                    .hdr {
                        padding: 14px 20px;
                    }

                    .hdr-tag {
                        display: none;
                    }

                    .grid {
                        grid-template-columns: 1fr;
                    }
                }
            `}),n[12]=l):l=n[12],d="wr";let j;n[13]===Symbol.for("react.memo_cache_sentinel")?(j=e.jsx("img",{src:"/vmg-out-logo.png",alt:"VMG Logo",className:"hdr-logo",onError:B}),n[13]=j):j=n[13];let f;n[14]!==y?(f=e.jsx("div",{className:"hdr-title",children:y}),n[14]=y,n[15]=f):f=n[15];let k;n[16]===Symbol.for("react.memo_cache_sentinel")?(k=e.jsx("div",{className:"hdr-tag",children:"Manage website content easily"}),n[16]=k):k=n[16];let h;n[17]!==f?(h=e.jsxs("a",{href:"https://vmg.co.tz",target:"_blank",rel:"noreferrer",className:"hdr-brand",children:[j,e.jsxs("div",{children:[f,k]})]}),n[17]=f,n[18]=h):h=n[18];let N;n[19]===Symbol.for("react.memo_cache_sentinel")?(N=e.jsx("a",{href:"/register-company",className:"hdr-reg",children:"+ Register Company"}),n[19]=N):N=n[19],n[20]!==h?(i=e.jsxs("header",{className:"hdr",children:[h,N]}),n[20]=h,n[21]=i):i=n[21];let _;n[22]===Symbol.for("react.memo_cache_sentinel")?(_=e.jsx("span",{className:"eyebrow",children:"Multi-Tenant CMS Portal"}),n[22]=_):_=n[22],n[23]===Symbol.for("react.memo_cache_sentinel")?(o=e.jsxs("section",{className:"hero",children:[_,e.jsxs("h1",{className:"h1",children:["BE ",e.jsx("em",{children:"TRANSFORMED!"})]}),e.jsx("p",{className:"sub",children:"Select your workspace below to access your CMS dashboard, or register a new company to get started."}),e.jsx("div",{className:"divider"})]}),n[23]=o):o=n[23],t="sec",c=w.length>4&&e.jsxs("p",{className:"count",children:[w.length," workspaces available"]}),p=w.length===0?e.jsxs("div",{className:"empty",children:[e.jsx("p",{children:"No workspaces registered yet."}),e.jsx("a",{href:"/register-company",className:"cta",children:"Register the first company →"})]}):e.jsx("div",{className:"grid",children:w.map(A)}),n[0]=r,n[1]=a,n[2]=t,n[3]=c,n[4]=p,n[5]=d,n[6]=i,n[7]=o,n[8]=s,n[9]=l}else t=n[2],c=n[3],p=n[4],d=n[5],i=n[6],o=n[7],s=n[8],l=n[9];let g;n[24]!==t||n[25]!==c||n[26]!==p?(g=e.jsxs("section",{className:t,children:[c,p]}),n[24]=t,n[25]=c,n[26]=p,n[27]=g):g=n[27];let x;n[28]===Symbol.for("react.memo_cache_sentinel")?(x=e.jsx("div",{className:"ftr-line"}),n[28]=x):x=n[28];let b;n[29]===Symbol.for("react.memo_cache_sentinel")?(b=e.jsxs("p",{className:"ftr-p",children:["Don't have a workspace? ",e.jsx("a",{href:"/register-company",children:"Register your company"})]}),n[29]=b):b=n[29];let v;n[30]===Symbol.for("react.memo_cache_sentinel")?(v=e.jsxs("footer",{className:"ftr",children:[x,b,e.jsxs("p",{className:"ftr-copy",children:["© ",new Date().getFullYear()," VMG. All rights reserved."]})]}),n[30]=v):v=n[30];let m;n[31]!==g||n[32]!==d||n[33]!==i||n[34]!==o?(m=e.jsxs("div",{className:d,children:[i,o,g,v]}),n[31]=g,n[32]=d,n[33]=i,n[34]=o,n[35]=m):m=n[35];let u;return n[36]!==m||n[37]!==s||n[38]!==l?(u=e.jsxs(e.Fragment,{children:[s,l,m]}),n[36]=m,n[37]=s,n[38]=l,n[39]=u):u=n[39],u}function A(n){const r=R(n.plan);return e.jsxs("a",{href:D(n.domain),className:"card",children:[e.jsx("div",{className:"card-bar"}),e.jsx("div",{className:"av",style:{background:n.logo?"rgba(255,255,255,0.06)":S(n.name)},children:n.logo?e.jsx("img",{src:n.logo,alt:n.name,onError:a=>{const t=a.currentTarget.parentElement;a.currentTarget.remove(),t.style.background=S(n.name),t.textContent=M(n.name)}}):M(n.name)}),e.jsxs("div",{className:"inf",children:[e.jsxs("div",{className:"inf-row",children:[e.jsx("span",{className:"cname",children:n.name}),r&&e.jsx("span",{className:"badge",style:{background:r.bg,color:r.color,borderColor:`${r.color}55`},children:r.label})]}),e.jsx("div",{className:"dom",children:n.domain})]}),e.jsx("svg",{className:"arr",width:"16",height:"16",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2.5,children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9 5l7 7-7 7"})})]},n.id)}function B(n){n.target.style.display="none"}function W(n){return n.status!=="inactive"}export{T as default};
