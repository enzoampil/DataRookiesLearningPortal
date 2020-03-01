(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{123:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return u}));var o=n(1),r=n(9),a=(n(0),n(144)),i={id:"level3",title:"Level 3: Managing Data Workflows"},c={id:"level3",title:"Level 3: Managing Data Workflows",description:"Data Science and its related fields have a tendency to be messy and iterrative. To try and solve that, others have developed tools to try to tame that mess and prevent your code from breaking. Here are just a few examples of tools you could use to help organize and maintain your code.",source:"@site/docs/Level 3: Managing Data Workflows.md",permalink:"/docs/level3",editUrl:"https://github.com/DataRookies/DataRookiesLearningPortal/edit/master/docs/Level 3: Managing Data Workflows.md",sidebar:"levels",previous:{title:"Level 2: Tools for Data Science",permalink:"/docs/level2"},next:{title:"Bonus 1: Complete Bootcamp Classes",permalink:"/docs/bonus1"}},l=[{value:"Git",id:"git",children:[]},{value:"Anaconda",id:"anaconda",children:[]},{value:"Cookiecutter",id:"cookiecutter",children:[]},{value:"Docker",id:"docker",children:[]},{value:"Disclaimer",id:"disclaimer",children:[]}],s={rightToc:l};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Data Science and its related fields have a tendency to be messy and iterrative. To try and solve that, others have developed tools to try to tame that mess and prevent your code from breaking. Here are just a few examples of tools you could use to help organize and maintain your code."),Object(a.b)("h2",{id:"git"},"Git"),Object(a.b)("p",null,"Git is some form of version control (and the most widely used, if we're not mistaken) which helps you maintain your code and save checkpoints. When paired with Github and other cloud based repository managment tools, you're sure your code is with you whenever you need it!"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(o.a)({parentName:"li"},{href:"https://guides.github.com/introduction/git-handbook/"}),"Git Handbook")," - Github")),Object(a.b)("h2",{id:"anaconda"},"Anaconda"),Object(a.b)("p",null,"Python requires you to install packages and dependencies in order to run cool Data Science tasks. However, there is a tendency for packages to need other packages, packages to conflict with other packages, things going missing, things randomly breaking...it can be a chore. Anaconda helps clean that all up, and we highly encourage everyone to use Anaconda to manage their Python environments to prevent unnecessary debugging. It can be chore to learn at first, but we promise it's worth it!"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(o.a)({parentName:"li"},{href:"https://linuxhint.com/anaconda-python-tutorial/"}),"Anaconda Python Tutorial")," - linuxhint")),Object(a.b)("h2",{id:"cookiecutter"},"Cookiecutter"),Object(a.b)("p",null,"In the process of analyzing and working with data, you will start to feel the need to organize your files. Keeping your files organized and seeting up a project well will stop you from eventually getting lost in a mountain of messy files when you need to look for a specific function you wrote weeks back. This is where cookiecutter comes in, with just a few lines on your terminal, it will create all the folders you need to effectively tackle your data science project!"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(o.a)({parentName:"li"},{href:"https://www.pydanny.com/cookie-project-templates-made-easy.html"}),"Cookiecutter: Project Templates Made Easy")," - PYDANNY")),Object(a.b)("h2",{id:"docker"},"Docker"),Object(a.b)("p",null,"As you do your analysis or build tools with your Data Science skills, you will eventually need to share your work or run the process in a much stronger computer. But transferring all your files won't ensure that it works, the other computer might lack packages, dependencies, and the like. Docker helps solve this problem by letting you build containers that will make it easy to run code on other computers and save you the trouble of fixing dependencies when they don't work."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(o.a)({parentName:"li"},{href:"https://towardsdatascience.com/docker-for-data-scientists-5732501f0ba4"}),"Docker for Data Scientists")," - Towards Data Science")),Object(a.b)("h2",{id:"disclaimer"},"Disclaimer"),Object(a.b)("p",null,"This project is definitely a work in progress and we would love to see your contributions in this. Our limited experience will limit the resources shown here, but with your help we can make this the hub for anyone who wants to learn Data Science related skills and tools!"))}u.isMDXComponent=!0},144:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return b}));var o=n(0),r=n.n(o);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),u=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},d=function(e){var t=u(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},h=Object(o.forwardRef)((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=u(n),h=o,b=d["".concat(i,".").concat(h)]||d[h]||p[h]||a;return n?r.a.createElement(b,c({ref:t},s,{components:n})):r.a.createElement(b,c({ref:t},s))}));function b(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=h;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=n[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"}}]);