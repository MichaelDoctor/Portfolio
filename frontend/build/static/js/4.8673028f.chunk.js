(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[4],{185:function(e,c,t){"use strict";t.r(c);var a=t(5),s=t(0),i=t(92),n=t(113),r=t(72),d=t(114),l=t.n(d),j=t(163),o=t.n(j),b=function(){var e=Object(s.useState)({}),c=Object(r.a)(e,2),t=c[0],d=c[1],j=Object(s.useState)(null),b=Object(r.a)(j,2),h=b[0],m=b[1];Object(s.useEffect)((function(){d({csrfmiddlewaretoken:document.getElementsByName("csrfmiddlewaretoken")[0].value})}),[]);var x=function(e){var c=e.target.name,a=e.target.value;d(Object(n.a)(Object(n.a)({},t),{},Object(i.a)({},c,a)))},O=function(e){var c=e.name,t=e.email,a=e.subject,s=e.message,i={headers:{"Content-Type":"application/json","X-CSRFTOKEN":e.csrfmiddlewaretoken}},n=JSON.stringify({name:c,email:t,subject:a,message:s});o.a.post("".concat("https://michael-doctor.me","/api/contact/"),n,i).then((function(e){m(!0)})).catch((function(e){m(!1)}))};return Object(a.jsxs)("div",{className:"intro",id:"intro",children:[Object(a.jsx)("div",{className:"intro-headers",children:Object(a.jsxs)("div",{"data-w-id":"4fd5e6bb-fcca-cf65-a65c-b63fb2bddcd8",className:"intro-left",children:[Object(a.jsx)("h3",{className:"intro-heading slider-name",children:"Michael Doctor"}),Object(a.jsx)("div",{className:"hr slider-hr"}),Object(a.jsxs)("h6",{className:"intro-heading sub-text",children:["Not A Real Doctor. ",Object(a.jsx)("br",{}),"A Calgary Based Software Developer.",Object(a.jsx)("br",{}),Object(a.jsxs)("span",{className:"slider-desc",children:[Object(a.jsx)("br",{}),"I can't save a life",Object(a.jsx)("br",{}),"But I can code!"," "]}),Object(a.jsx)("br",{})]}),Object(a.jsx)("h6",{className:"intro-heading slider-icon",children:Object(a.jsx)("span",{className:"text-span-2",children:Object(a.jsx)("i",{classNameName:"fas fa-laptop-code"})})}),Object(a.jsx)("a",{"data-w-id":"864c17c6-f601-4ed6-4f78-27458c8446eb",href:"#projects",className:"slider-btn hover1 main w-button jiggle pop",children:"Check out my projects"})]})}),Object(a.jsx)("div",{className:"contact-container",children:null===h?Object(a.jsx)("div",{"data-w-id":"90d4d6af-99d2-01e0-d7aa-e624b32ba2ea",className:"intro-right",children:Object(a.jsx)("section",{id:"contact-form",className:"contact-form",children:Object(a.jsxs)("div",{className:"form-container w-container",children:[Object(a.jsx)("h4",{className:"intro-heading",children:"Contact Me"}),Object(a.jsx)("div",{className:"contact-block w-form",children:Object(a.jsxs)("form",{name:"contact-form",id:"contactform",onSubmit:function(e){e.preventDefault();var c=t.csrfmiddlewaretoken,a=t.name,s=t.email,i=t.subject,n=t.message;d({csrfmiddlewaretoken:c}),O({name:a,email:s,subject:i,message:n,csrfmiddlewaretoken:c})},children:[Object(a.jsx)(l.a,{}),Object(a.jsxs)("div",{className:"contact-form-grid",children:[Object(a.jsx)("div",{id:"w-node-_3eab9ac5-2a77-c5c9-e70d-25c5fe1a622d-92169540",className:"input-container",children:Object(a.jsx)("input",{type:"text",className:"intro-form w-input",maxLength:"256",name:"name",placeholder:"Name",id:"input",required:!0,onChange:x})}),Object(a.jsx)("div",{id:"w-node-_3eab9ac5-2a77-c5c9-e70d-25c5fe1a6231-92169540",className:"input-container",children:Object(a.jsx)("input",{type:"email",className:"intro-form w-input",maxLength:"256",name:"email",placeholder:"Email",id:"input",required:!0,onChange:x})}),Object(a.jsx)("div",{id:"w-node-_3eab9ac5-2a77-c5c9-e70d-25c5fe1a6235-92169540",className:"input-container",children:Object(a.jsx)("input",{type:"tel",className:"intro-form w-input",maxLength:"256",name:"subject",placeholder:"Subject",id:"input",required:!0,onChange:x})}),Object(a.jsx)("div",{id:"w-node-_3eab9ac5-2a77-c5c9-e70d-25c5fe1a6239-92169540",className:"input-container",children:Object(a.jsx)("textarea",{maxLength:"5000",id:"comments",name:"message",placeholder:"Message",required:!0,className:"intro-form w-input",onChange:x})}),Object(a.jsx)("div",{id:"w-node-_790286dd-0c84-9803-c390-f5352b0e60c0-92169540",className:"input-container",children:Object(a.jsx)("input",{type:"submit",name:"submit",value:"Submit",className:"slider-btn hover1 proj-btn w-button"})})]})]})})]})})}):h?Object(a.jsxs)("div",{className:"contact-result",children:[Object(a.jsx)("h3",{className:"contact-msg",children:"Message Sent successfully"}),Object(a.jsx)("h1",{children:Object(a.jsx)("i",{className:"fas fa-check-circle"})}),Object(a.jsx)(l.a,{})]}):Object(a.jsxs)("div",{className:"contact-result",children:[Object(a.jsx)("h3",{className:"contact-msg",children:"Internal Error: Failed to send"}),Object(a.jsx)("h1",{children:Object(a.jsx)("i",{className:"fas fa-times-circle"})}),Object(a.jsx)(l.a,{})]})})]})},h=t(91),m=function(e){var c=e.icon,t=e.title,s=e.direction;return Object(a.jsxs)("div",{className:s,children:[Object(a.jsx)("div",{className:"grid-icon-container",children:Object(a.jsx)("div",{className:"grid-icon",children:Object(a.jsx)("h1",{className:"heading logo-heading",children:Object(a.jsx)("span",{className:"grid-fa",children:Object(a.jsx)("i",{className:c})})})})}),Object(a.jsx)("div",{className:"grid-name",children:Object(a.jsx)("h4",{className:"heading logo-heading",children:t})})]})},x=t(181),O=t.n(x),u=t(183),f=function(e,c){var t=Object(s.useState)(null),a=Object(r.a)(t,2),i=a[0],n=a[1],d=Object(s.useState)(!0),l=Object(r.a)(d,2),j=l[0],o=l[1];return Object(s.useEffect)((function(){Object(u.a)(O.a.mark((function t(){var a,s;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch(e);case 3:return a=t.sent,t.next=6,a.json();case 6:s=t.sent,c(s),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),n(t.t0);case 13:return t.prev=13,o(!1),t.finish(13);case 16:case"end":return t.stop()}}),t,null,[[0,10,13,16]])})))()}),[e,c]),{loading:j,error:i}},v=function(){var e=Object(s.useState)([]),c=Object(r.a)(e,2),t=c[0],i=c[1];return f("https://michael-doctor.me/api/skills/languages/",i),Object(a.jsxs)("div",{className:"section-1 content-left",children:[Object(a.jsxs)("div",{"data-w-id":"555ee04a-b52e-f8fb-a4a6-d21ac831f8d7",className:"section-heading left slide-left",children:[Object(a.jsx)("div",{className:"section-title",children:Object(a.jsx)("h1",{className:"heading div-head",children:"Languages"})}),Object(a.jsx)("div",{className:"hr"}),Object(a.jsx)("div",{className:"section-desc",children:Object(a.jsx)("div",{className:"about-sub",children:"These are the languages I use!"})})]}),Object(a.jsx)("div",{"data-w-id":"555ee04a-b52e-f8fb-a4a6-d21ac831f8d7",className:"icons slide-left",children:Object(a.jsx)("div",{className:"icon-container",children:t.map((function(e){var c=e.id,t=e.icon,s=e.title;return Object(a.jsx)(m,{icon:t,title:s,direction:"grid left"},c)}))})})]})},N=function(){var e=Object(s.useState)([]),c=Object(r.a)(e,2),t=c[0],i=c[1];return f("https://michael-doctor.me/api/skills/frameworks/",i),Object(a.jsxs)("div",{className:"section-1 content-right",children:[Object(a.jsxs)("div",{"data-w-id":"f65e9104-11ba-98e7-f9f8-2e70377c93c4",className:"section-heading right slide-right",children:[Object(a.jsx)("div",{className:"section-title",children:Object(a.jsx)("h1",{className:"heading div-head",children:"Frameworks"})}),Object(a.jsx)("div",{className:"hr"}),Object(a.jsx)("div",{className:"section-desc",children:Object(a.jsx)("div",{className:"about-sub",children:"These are the frameworks I use!"})})]}),Object(a.jsx)("div",{"data-w-id":"f65e9104-11ba-98e7-f9f8-2e70377c93c4",className:"icons slide-right",children:Object(a.jsx)("div",{className:"icon-container",children:t.map((function(e){var c=e.id,t=e.icon,s=e.title;return Object(a.jsx)(m,{icon:t,title:s,direction:"grid left"},c)}))})})]})},p=function(){return Object(a.jsx)("div",{className:"about-me-container",id:"about",children:Object(a.jsxs)("div",{className:"section-heading about","data-w-id":"555ee04a-b52e-f8fb-a4a6-d21ac831f8d7",children:[Object(a.jsxs)("div",{className:"about-header slide-left",children:[Object(a.jsx)("div",{className:"section-title",children:Object(a.jsx)("h1",{className:"heading div-head",children:"A Little Bit about me"})}),Object(a.jsx)("div",{className:"hr"}),Object(a.jsx)("div",{className:"about-sub",children:"Calgary based Software Developer. Aspiring Full-Stack Web and iOS Developer."})]}),Object(a.jsxs)("div",{className:"section-desc slide-left",children:[Object(a.jsx)("div",{className:"about-divider"}),Object(a.jsx)("div",{className:"about-desc",children:"Currently, I'm a software development student at Southern Alberta Institute of Technology (SAIT). I'm passionate about full-stack web development and iOS development. My preferred frameworks are React, Express, and UIKit. The programming languages that I use most are Javascript and Swift."}),Object(a.jsx)("div",{className:"about-divider end"})]})]})})},g=function(e){var c=e.img,t=e.title,s=e.author,i=e.date,n=e.content,r=e.link;return Object(a.jsxs)("div",{className:"project-content",children:[Object(a.jsx)("div",{className:"project-gap"}),Object(a.jsxs)("div",{className:"project",children:[Object(a.jsxs)("div",{className:"project-left",children:[Object(a.jsx)("div",{className:"project-img",children:Object(a.jsx)("img",{src:c,loading:"lazy",width:"150",height:"100",sizes:"150px",alt:"project",className:"proj-img"})}),Object(a.jsxs)("div",{className:"project-author",children:[Object(a.jsx)("h4",{className:"project-title",children:t}),Object(a.jsxs)("h6",{className:"proj-author",children:["By: ",s]})]})]}),Object(a.jsxs)("div",{className:"project-right",children:[Object(a.jsxs)("div",{className:"project-desc",children:[Object(a.jsxs)("h6",{className:"heading-3",children:["Updated: ",i]}),Object(a.jsx)("div",{className:"proj-desc-content",children:n})]}),Object(a.jsx)("div",{className:"project-btn-container",children:Object(a.jsx)("a",{href:r,className:"slider-btn hover1 proj-btn w-button",children:"Check it out"})})]})]}),Object(a.jsx)("div",{className:"project-gap"})]})},w=function(){var e=Object(s.useState)([]),c=Object(r.a)(e,2),t=c[0],i=c[1];return f("https://michael-doctor.me/api/projects/",i),Object(a.jsxs)("div",{className:"projects-container",id:"projects",children:[Object(a.jsxs)("div",{"data-w-id":"555ee04a-b52e-f8fb-a4a6-d21ac831f8d7",className:"section-heading projects slide-left",children:[Object(a.jsx)("div",{className:"section-title",children:Object(a.jsx)("h1",{className:"heading div-head",children:"My Projects"})}),Object(a.jsx)("div",{className:"hr"}),Object(a.jsx)("div",{className:"section-desc",children:Object(a.jsxs)("div",{className:"text-block",children:["Check out my"," ",Object(a.jsxs)("a",{href:"https://github.com/MichaelDoctor",className:"link",children:["Github ",Object(a.jsx)("i",{className:"fab fa-github"})]})]})})]}),Object(a.jsx)("div",{"data-w-id":"555ee04a-b52e-f8fb-a4a6-d21ac831f8d7",className:"projects proj-block slide-left",children:Object(a.jsx)("div",{className:"project-container",children:t.map((function(e){return Object(a.jsx)(g,{img:e.img,title:e.title,author:e.author,datetime:e.date_time,date:e.date,content:e.content,link:e.link},e.id)}))})})]})},k=t(90),y=function(e){Object(s.useEffect)((function(){var c=document.createElement("script");return c.type="text/javascript",c.src=e,c.async=!0,document.body.appendChild(c),function(){document.body.removeChild(c)}}),[e])},S=function(){return Object(a.jsxs)("div",{className:"projects-container",id:"blogs",children:[Object(a.jsxs)("div",{"data-w-id":"555ee04a-b52e-f8fb-a4a6-d21ac831f8d7",className:"section-heading projects slide-left",children:[Object(a.jsx)("div",{className:"section-title",children:Object(a.jsx)("h1",{className:"heading div-head",children:"My Blogs"})}),Object(a.jsx)("div",{className:"hr"}),Object(a.jsx)("div",{className:"section-desc",children:Object(a.jsxs)("div",{className:"text-block",children:["Check out my"," ",Object(a.jsxs)("a",{href:"https://github.com/MichaelDoctor",className:"link",children:["Github ",Object(a.jsx)("i",{className:"fab fa-github"})]})]})})]}),Object(a.jsx)("div",{"data-w-id":"555ee04a-b52e-f8fb-a4a6-d21ac831f8d7",className:"projects proj-block slide-left",children:Object(a.jsx)("div",{className:"project-container",children:[{id:1,img:"https://res.cloudinary.com/hsse18xji/image/upload/v1/media/photos/2020/09/03/beer_nyllny",title:"Swift Part 1",author:"Michael Doctor",date:"February 13, 2021",content:"Temporary content. Think of one later!",link:"/Swift_1"}].map((function(e){return Object(a.jsx)(g,{img:e.img,title:e.title,author:e.author,date:e.date,content:e.content,link:e.link},e.id)}))})})]})};c.default=function(){return y("https://res.cloudinary.com/hsse18xji/raw/upload/v1606877900/portfolio/js/jquery_xpecxx.js"),y("https://res.cloudinary.com/hsse18xji/raw/upload/v1607053094/portfolio/js/webflow.animation_skydrw.js"),Object(a.jsxs)("div",{className:"container",children:[Object(a.jsx)(b,{}),Object(a.jsx)(h.a,{}),Object(a.jsxs)("div",{className:"content-container",children:[Object(a.jsx)("div",{className:"nav-gap"}),Object(a.jsxs)("div",{className:"content flex-content",id:"home",children:[Object(a.jsx)(v,{}),Object(a.jsx)(N,{})]})]}),Object(a.jsxs)("div",{className:"content-container",children:[Object(a.jsx)("div",{className:"nav-gap"}),Object(a.jsxs)("div",{className:"info-content",children:[Object(a.jsx)(p,{}),Object(a.jsx)(w,{}),Object(a.jsx)(S,{})]}),Object(a.jsx)(k.a,{})]})]})}},90:function(e,c,t){"use strict";var a=t(5);t(0);c.a=function(){return Object(a.jsxs)("div",{"data-w-id":"f50d5e09-e817-9552-6d28-c27f47cc01b0",className:"footer opacity-scroll",children:[Object(a.jsx)("div",{className:"hr"}),Object(a.jsxs)("div",{className:"footer-container",id:"footer",children:[Object(a.jsxs)("div",{className:"footer-info",children:[Object(a.jsx)("h5",{className:"footer-header",children:"Michael Doctor's Portfolio"}),Object(a.jsx)("div",{className:"footer-desc",children:"My personal website portfolio was made with React, Django, PostgreSQL, and Webflow."})]}),Object(a.jsxs)("div",{className:"footer-links",children:[Object(a.jsx)("h5",{className:"footer-header",children:"Links"}),Object(a.jsxs)("a",{href:"https://github.com/MichaelDoctor",className:"link",target:"_blank",rel:"noopener noreferrer",children:[Object(a.jsx)("i",{className:"fab fa-github"})," Github"]}),Object(a.jsxs)("a",{href:"https://www.linkedin.com/in/michael-doctor-403/",className:"link",target:"_blank",rel:"noopener noreferrer",children:[Object(a.jsx)("i",{className:"fab fa-linkedin"})," LinkedIn"]})]}),Object(a.jsxs)("div",{className:"footer-contact",children:[Object(a.jsx)("h5",{className:"footer-header",children:"Contact Info"}),Object(a.jsx)("h6",{className:"footer-name",children:"Michael Doctor"}),Object(a.jsxs)("div",{className:"text-block-2",children:["Canada",Object(a.jsx)("br",{}),"Calgary, AB"]}),Object(a.jsxs)("a",{href:"#intro",className:"link",children:[Object(a.jsx)("i",{className:"fab fa-google"})," michaeldoctoryyc"]})]})]})]})}},91:function(e,c,t){"use strict";var a=t(5),s=(t(0),function(e){var c=e.url,t=e.text;return Object(a.jsxs)("a",{href:c,className:"nav-link hover1",children:[t,Object(a.jsx)("br",{})]})}),i=t(11);c.a=function(){return Object(a.jsx)("div",{"data-collapse":"medium","data-animation":"default","data-duration":"400","data-w-id":"2b4fe990-422b-aafa-0844-15043c40d507",role:"banner",className:"navbar w-nav",children:Object(a.jsxs)("div",{className:"container w-container",children:[Object(a.jsx)(i.b,{to:"/",className:"brand hover1 w-nav-brand",children:Object(a.jsxs)("div",{className:"nav-logo",children:[Object(a.jsx)("i",{className:"fas fa-code"})," MICHAEL DOCTOR"]})}),Object(a.jsxs)("nav",{role:"navigation",className:"nav-links w-nav-menu",children:[Object(a.jsx)(s,{url:"/#intro",text:"Home"}),Object(a.jsx)(s,{url:"/#projects",text:"Projects"}),Object(a.jsx)(s,{url:"/#blogs",text:"Blogs"}),Object(a.jsx)(s,{url:"/#about",text:"About Me"}),Object(a.jsx)(s,{url:"/#intro",text:"Contact Me"})]}),Object(a.jsx)("div",{className:"menu-button hover1 w-nav-button",children:Object(a.jsx)("div",{className:"icon w-icon-nav-menu"})})]})})}}}]);
//# sourceMappingURL=4.8673028f.chunk.js.map