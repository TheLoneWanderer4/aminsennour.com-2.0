(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{32:function(module,__webpack_exports__,__webpack_require__){"use strict";var _home_nafal_Documents_Dev_aminsennour_com_2_0_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(1),_home_nafal_Documents_Dev_aminsennour_com_2_0_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(2),_home_nafal_Documents_Dev_aminsennour_com_2_0_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(4),_home_nafal_Documents_Dev_aminsennour_com_2_0_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(3),_home_nafal_Documents_Dev_aminsennour_com_2_0_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(5),react__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__),_index_css__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(56),_index_css__WEBPACK_IMPORTED_MODULE_6___default=__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_6__),bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(12),bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_7___default=__webpack_require__.n(bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_7__),operators=[{value:"*",id:"multiply",className:""},{value:"+",id:"add",className:""},{value:"-",id:"subtract",className:""},{value:"/",id:"divide",className:""}],buttons=[{value:"7",id:"seven",className:""},{value:"8",id:"eight",className:""},{value:"9",id:"nine",className:""},{value:"4",id:"four",className:""},{value:"5",id:"five",className:""},{value:"6",id:"six",className:""},{value:"1",id:"one",className:""},{value:"2",id:"two",className:""},{value:"3",id:"three",className:""},{value:"0",id:"zero",className:""},{value:".",id:"decimal",className:""}],isOperator=/[*\/+-]/,endsWithOperator=/[*+-\/]$/,startsWithOperator=/^[*+-\/]/,leadingZero=/\b0+/g,constainsDecimal=/\./g,reset={input:"0",formula:"0",curNum:"0"},Buttons=function(e){return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",{className:"buttons"},operators.map(function(t){return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button",{className:"btn btn-default bttn bg-light shadow-sm",id:t.id,key:t.id,onClick:function(){return e.handleButton(t.value)}},t.value)}),buttons.map(function(t){return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button",{className:"btn btn-default bttn bg-light shadow-sm",id:t.id,key:t.id,onClick:function(){return e.handleButton(t.value)}},t.value)}),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button",{id:"clear",className:"btn bttn btn-warning",onClick:e.handleClear},"AC"),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button",{className:"btn bttn btn-warning equals",id:"equals",onClick:e.handleEqual},"="))},Display=function(e){return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",{className:"navbar navbar-dark bg-dark text-light flex-column align-items-end"},react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",{id:"display",className:"formula"},e.formula),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",{className:"input"},e.input))},App=function(_React$Component){function App(props){var _this;return Object(_home_nafal_Documents_Dev_aminsennour_com_2_0_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.a)(this,App),_this=Object(_home_nafal_Documents_Dev_aminsennour_com_2_0_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__.a)(this,Object(_home_nafal_Documents_Dev_aminsennour_com_2_0_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__.a)(App).call(this,props)),_this.handleEqual=function(){var formula=_this.state.formula;formula=formula.match(endsWithOperator)||formula.match(startsWithOperator)?"Error: Cannont Start or End in Operator":eval(_this.state.formula).toString(),_this.setState({input:"0",formula:formula})},_this.handleClear=function(){_this.setState(reset)},_this.handleButton=function(e){var t=_this.state.formula.replace(leadingZero,""),a=_this.state.curNum.replace(leadingZero,"");e.match(isOperator)?a="":e.match(constainsDecimal)&&a.match(constainsDecimal)?e="":a+=e,e.match(isOperator)&&t.match(endsWithOperator)&&(t=t.substring(0,t.length-1)),_this.setState({input:e,formula:t+e,curNum:a})},_this.state=reset,_this}return Object(_home_nafal_Documents_Dev_aminsennour_com_2_0_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__.a)(App,_React$Component),Object(_home_nafal_Documents_Dev_aminsennour_com_2_0_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__.a)(App,[{key:"render",value:function(){return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",{className:"calcWrap"},react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",{className:"calculator bg-primary shadow-lg"},react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(Display,{input:this.state.input,formula:this.state.formula}),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(Buttons,{handleButton:this.handleButton,handleEqual:this.handleEqual,handleClear:this.handleClear})))}}]),App}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);__webpack_exports__.a=App},36:function(e,t,a){e.exports=a(76)},41:function(e,t,a){},42:function(e,t,a){},47:function(e,t,a){},48:function(e,t,a){},49:function(e,t,a){},50:function(e,t,a){},51:function(e,t,a){},52:function(e,t,a){},53:function(e,t,a){},54:function(e,t,a){},55:function(e,t,a){},56:function(e,t,a){},57:function(e,t,a){},58:function(e,t,a){},60:function(e,t,a){},69:function(e,t){},72:function(e,t,a){},76:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(30),i=a.n(s),c=a(1),l=a(2),o=a(4),m=a(3),u=a(5),d=a(11);a(41),a(42);var h=function(e){return r.a.createElement("div",{className:"p-4"},r.a.createElement("a",{className:"card project-card shadow-lg p-0 bord text-decoration-none text-dark",target:"_blank",rel:"noopener noreferrer",href:e.project.projectURL?e.project.projectURL:"#/react-"+e.project.title},r.a.createElement("div",{className:"card-body text-dark bg-light border-bottom"},r.a.createElement("h3",{className:"card-title m-0"},e.project.title)),r.a.createElement("div",{className:"row no-gutters bg"},r.a.createElement("div",{className:"col-md-4 m-auto project-img-wrapper"},r.a.createElement("img",{id:"project-img",className:"card-img-top",src:e.project.imageURL,alt:e.project.imageURL})),r.a.createElement("div",{className:"col-md-8 border-left d-flex align-items-center"},r.a.createElement("ul",{className:"list-group list-group-flush"},e.project.listItems.map(function(e){return r.a.createElement("li",{key:e,className:"list-group-item"},e)}))))))},_=a(27),p=function(e){var t=e.title,a=e.desc;return r.a.createElement("div",{className:"p-4"},r.a.createElement("div",{className:"d-flex flex-column justify-content-center"},r.a.createElement("div",{className:"card project-card shadow-sm"},r.a.createElement("div",{className:"card-body text-dark bg-light border-bottom"},r.a.createElement("h3",{className:"card-title m-0"},t)),r.a.createElement("div",{className:"p-3",dangerouslySetInnerHTML:{__html:_(a)}}))))},f=a(14),b=a.n(f),v=function(e){function t(e){return Object(c.a)(this,t),Object(o.a)(this,Object(m.a)(t).call(this,e))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(b.a,{duration:30,className:"m-0"},r.a.createElement(p,{title:this.props.projectsJSON.label,desc:this.props.projectsJSON.desc}),r.a.createElement("div",null,this.props.projectsJSON.projects.map(function(e){return r.a.createElement(h,{key:e.title,project:e})})))}}]),t}(r.a.Component),E=(a(47),a(48),function(){return r.a.createElement("div",{className:"p-4 home-card intro-section"},r.a.createElement("div",{className:"intro-card-wrapper d-flex flex-column justify-content-center"},r.a.createElement("div",{className:"card shadow-lg"},r.a.createElement("div",{className:"card-body border-bottom bg-light"},r.a.createElement("h1",{className:"card-title m-0"},"Hi, I'm Amin Sennour.")),r.a.createElement("div",{className:"card-body m-0 p-0 d-flex flex-column justify-content-center align-items-center"},r.a.createElement("a",{href:"https://github.com/TheLoneWanderer4",target:"_blank",className:"badge badge-primary p-2 m-4 "},"Software Developer")))))}),g=(a(49),function(){return r.a.createElement("div",{className:"p-4 home-card text-center"},r.a.createElement("div",{className:"card shadow-lg"},r.a.createElement("div",{className:"card-body border-bottom bg-light"},r.a.createElement("h2",{className:"card-title m-0"},"Education")),r.a.createElement("div",{className:"card-body"},r.a.createElement("div",{className:"d-flex flex-column align-items-center text-left"},r.a.createElement("div",null,r.a.createElement("li",{className:"current"},"University of Arizona, Computer Science ",r.a.createElement("span",null,"(2018-2022)")),r.a.createElement("li",{className:"current"},"University of Arizona, Math ",r.a.createElement("span",null,"(2018-2022)")))))))}),k=(a(50),function(e){return r.a.createElement("div",{className:"projects home-card p-4"},r.a.createElement("div",{className:"card shadow-lg"},r.a.createElement("div",{className:"card-body border-bottom bg-light"},r.a.createElement("h4",{className:"card-title m-0"},"Look at the things I've made")),r.a.createElement("div",{className:"card-body"},r.a.createElement("div",{className:"d-flex flex-row justify-content-center"},e.projectsList.map(function(e){return r.a.createElement("a",{key:e.label,className:"btn btn-primary m-2 shadow-sm ",href:"/#/"+e.label},e.label)})))))}),y=(a(51),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).state={contacts:[]},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentWillMount",value:function(){var e=this;fetch("https://raw.githubusercontent.com/TheLoneWanderer4/aminsennour.com-2.0/master/data/contacts.json").then(function(e){return e.json()}).then(function(t){e.setState({contacts:t})})}},{key:"render",value:function(){return r.a.createElement("div",{className:"home-card p-4"},r.a.createElement("div",{className:"card shadow-lg"},r.a.createElement("div",{className:"card-body border-bottom bg-light text-center"},r.a.createElement("h3",{className:"card-title m-0"},"Contact Me")),r.a.createElement("div",{className:"card-body d-flex flex-column align-items-center"},r.a.createElement("div",{className:"list-group w-100 text-center"},this.state.contacts.map(function(e){return r.a.createElement("a",{key:e.label,className:"list-group-item list-group-item-action",href:e.url},e.label," ")})))))}}]),t}(r.a.Component)),w=function(e){return r.a.createElement(b.a,{duration:30,className:"m-0"},r.a.createElement("div",{className:"home"},r.a.createElement("div",null,r.a.createElement(E,null)),r.a.createElement("div",null,r.a.createElement(g,null)),r.a.createElement("div",null,r.a.createElement(k,{projectsList:e.projectsList})),r.a.createElement("div",null,r.a.createElement(y,null))))},N=(a(52),function(e){return r.a.createElement("div",{className:"navWrap"},r.a.createElement("nav",{className:"navbar fixed-top navbar-dark bg-dark"},r.a.createElement("a",{className:"navbar-brand",href:"/#/"},"Amin Sennour")))}),C=a(31),j=(a(53),function(e){return Object(C.a)(e),r.a.createElement("footer",{id:"footer",className:"bg-dark text-light text-center p-4"},r.a.createElement("div",{className:"copyright"},"Made from Dallas TX and Tucson AZ"))}),O=(a(54),a(12),function(e){var t=e.quote;return r.a.createElement("div",{className:"card-body",id:"text"},t)}),D=function(e){var t=e.author;return r.a.createElement("div",{id:"author",className:""},"- ",t)},S=function(e){var t=e.onClick;return r.a.createElement("div",{id:"new-quote",className:"btn btn-secondary",onClick:t},"New Quote")},R=function(e){var t=e.quote,a=e.author;return r.a.createElement("a",{id:"tweet-quote",className:"btn btn-secondary",href:"https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text="+encodeURIComponent('"'+t+'" '+a)},"Tweet")},T=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).handleNewQuote=function(){var e=a.state.quotes,t=e[Math.floor(Math.random()*e.length)];a.setState({currentQuote:t})},a.state={quotes:[],currentQuote:{quote:"",author:""}},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json").then(function(e){return e.json()}).then(function(t){console.log(t);var a=t.quotes;e.setState({quotes:a,currentQuote:a[0]})})}},{key:"render",value:function(){return r.a.createElement("div",{className:"quote"},r.a.createElement("div",{className:"card shadow content",id:"quote-box"},r.a.createElement(O,{id:"text",quote:this.state.currentQuote.quote}),r.a.createElement("div",{className:"buttons-group m-2"},r.a.createElement(R,{quote:this.state.currentQuote.quote,author:this.state.currentQuote.author}),r.a.createElement(D,{id:"author",author:this.state.currentQuote.author}),r.a.createElement(S,{onClick:this.handleNewQuote}))))}}]),t}(n.Component),L=(a(55),a(27));L.setOptions({breaks:!0});var M=function(e){var t=e.handleChange,a=e.value;return r.a.createElement("textarea",{id:"editor",value:a,onChange:t})},P=function(e){var t=e.input;return r.a.createElement("div",{id:"preview",dangerouslySetInnerHTML:{__html:L(t)}})},I=function(e){var t=e.onClick,a=e.title;return r.a.createElement("nav",{className:"navbar navbar-dark bg-dark"},r.a.createElement("span",{className:"badge text-light"}," ",a," "),r.a.createElement("button",{className:"navbar-toggler bg-primary",onClick:t},r.a.createElement("span",{className:"badge text-light"}," Fullscreen ")))},A=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).handleEditorUpdate=function(e){a.setState({input:e.target.value}),console.log(a.state.input)},a.hanleEditorFullScreen=function(){a.setState({editorFullScreen:!a.state.editorFullScreen,previewFullScreen:!1})},a.hanlePreivewFullScreen=function(){a.setState({editorFullScreen:!1,previewFullScreen:!a.state.previewFullScreen})},a.state={input:"",editorFullScreen:!1,previewFullScreen:!1},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.setState({input:"# Welcome to my React Markdown Previewer!\n\n## This is a sub-heading...\n### And here's some other cool stuff:\n\nHeres some code, `<div></div>`, between 2 backticks.\n\n```\n// this is multi-line code:\n\nfunction anotherExample(firstLine, lastLine) {\n  if (firstLine == '```' && lastLine == '```') {\n    return multiLineCode;\n  }\n}\n```\n\nYou can also make text **bold**... whoa!\nOr _italic_.\nOr... wait for it... **_both!_**\nAnd feel free to go crazy ~~crossing stuff out~~.\n\nThere's also [links](https://www.freecodecamp.com), and\n> Block Quotes!\n\nAnd if you want to get really crazy, even tables:\n\nWild Header | Crazy Header | Another Header?\n------------ | ------------- | -------------\nYour content can | be here, and it | can be here....\nAnd here. | Okay. | I think we get it.\n\n- And of course there are lists.\n  - Some are bulleted.\n     - With different indentation levels.\n        - That look like this.\n\n\n1. And there are numbererd lists too.\n1. Use just 1s if you want!\n1. But the list goes on...\n- Even if you use dashes or asterisks.\n* And last but not least, let's not forget embedded images:\n\n![React Logo w/ Text](https://goo.gl/Umyytc)\n"})}},{key:"renderEditor",value:function(){if(!this.state.previewFullScreen){var e=this.state.editorFullScreen?"editorFullScreen card shadow":"editorWrap card shadow";return r.a.createElement("div",{className:e},r.a.createElement(I,{onClick:this.hanleEditorFullScreen,title:"Editor"}),r.a.createElement(M,{handleChange:this.handleEditorUpdate,value:this.state.input}))}}},{key:"renderPreview",value:function(){if(!this.state.editorFullScreen){var e=this.state.previewFullScreen?"preivewFullScreen card shadow":"previewWrap card shadow";return r.a.createElement("div",{className:e},r.a.createElement(I,{onClick:this.hanlePreivewFullScreen,title:"Preivewer"}),r.a.createElement(P,{input:this.state.input}))}}},{key:"render",value:function(){return r.a.createElement("div",{className:"Markdown"},this.renderEditor(),this.renderPreview())}}]),t}(r.a.Component),x=a(32),U=(a(57),[{keyCode:81,keyTrigger:"Q",id:"Heater-1",url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"},{keyCode:87,keyTrigger:"W",id:"Heater-2",url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"},{keyCode:69,keyTrigger:"E",id:"Heater-3",url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"},{keyCode:65,keyTrigger:"A",id:"Heater-4",url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"},{keyCode:83,keyTrigger:"S",id:"Clap",url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"},{keyCode:68,keyTrigger:"D",id:"Open-HH",url:"https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"},{keyCode:90,keyTrigger:"Z",id:"Kick-n'-Hat",url:"https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"},{keyCode:88,keyTrigger:"X",id:"Kick",url:"https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"},{keyCode:67,keyTrigger:"C",id:"Closed-HH",url:"https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"}]),W="pad-active shadow-sm bg-danger",B="shadow-lg bg-primary",H=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).keyPress=function(e){e.preventDefault(),e.keyCode===a.props.keyCode&&a.playSound()},a.activatePad=function(){a.state.padStyle===B?a.setState({padStyle:W}):a.setState({padStyle:B})},a.playSound=function(e){var t=document.getElementById(a.props.keyLabel);t.currentTime=0,t.play(),a.activatePad(),setTimeout(function(){return a.activatePad()},100),a.props.updateScreenText(a.props.clipId)},a.state={padStyle:B},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentWillMount",value:function(){document.addEventListener("keydown",this.keyPress,!1)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keydown",this.keyPress,!1)}},{key:"render",value:function(){return r.a.createElement("div",{id:this.props.clipId,onClick:this.playSound,className:"drum-pad text-white "+this.state.padStyle},r.a.createElement("audio",{className:"clip",id:this.props.keyLabel,src:this.props.url}),this.props.keyLabel)}}]),t}(r.a.Component),q=function(e){var t=e.bank,a=e.power,n=e.updateScreenText;return r.a.createElement("div",{className:"pad-bank"}," ",t.map(function(e){return r.a.createElement(H,{id:e.id,clipId:e.id,url:e.url,keyLabel:e.keyTrigger,keyCode:e.keyCode,updateScreenText:n,power:a})}))},K=function(e){var t=e.screenText;return r.a.createElement("div",{id:"display",className:"display"},r.a.createElement("div",{className:"info-screen card shadow bg-dark p-2"},r.a.createElement("div",{className:"m-auto text-light"},t)))},F=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).updateScreenText=function(e){a.setState({screenText:e})},a.state={bank:U,screenText:"",power:!0},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"drum"},r.a.createElement("div",{id:"drum-machine",className:"container card flex-row shadow p-2"},r.a.createElement(q,{bank:this.state.bank,power:this.state.power,updateScreenText:this.updateScreenText}),r.a.createElement(K,{screenText:this.state.screenText})))}}]),t}(r.a.Component),z=(a(58),a(59)),Q={break:5,session:25,timerType:"Session",isRunning:!1,timer:1500,intervalFunction:"",sound:""},J=function(e){var t=e.id,a=e.onIncrement,n=e.onDecrement,s=e.label,i=e.value;return r.a.createElement("div",{className:"clock"},r.a.createElement("div",null,r.a.createElement("div",{className:"card m-2 align-items-center  "},r.a.createElement("div",{id:t+"-label",className:"m-2 p-2"},s),r.a.createElement("div",{className:"d-flex flex-row"},r.a.createElement("button",{id:t+"-increment",className:"btn btn-success m-2 p-2",onClick:a},"INC"),r.a.createElement("div",{id:t+"-length",className:"m-2 p-2"},i),r.a.createElement("button",{id:t+"-decrement",className:"btn btn-info m-2 p-2",onClick:n},"DEC")))))},G=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).handleIncrementBreak=function(){a.state.isRunning||a.state.break<60&&a.setState({break:a.state.break+1})},a.handleIncrementSession=function(){a.state.isRunning||a.state.session<60&&a.setState({session:a.state.session+1,timer:a.state.timer+60})},a.handleDecrementBreak=function(){a.state.isRunning||a.state.break>1&&a.setState({break:a.state.break-1})},a.handleDecrementSession=function(){a.state.isRunning||a.state.session>1&&a.setState({session:a.state.session-1,timer:a.state.timer-60})},a.handleStartStop=function(){a.state.isRunning?(a.setState({isRunning:!1}),a.endTimer()):(a.startTimer(),a.setState({isRunning:!0}))},a.handleReset=function(){a.state.isRunning&&a.endTimer(),a.stopSound(),a.setState(Q)},a.state=Q,a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"startTimer",value:function(){var e=this;this.setState({intervalFunction:z(function(){e.decrementTimer(),e.pomodoro()},1e3)})}},{key:"endTimer",value:function(){this.state.intervalFunction.clear()}},{key:"playSound",value:function(e){this.audioBeep.play()}},{key:"stopSound",value:function(){this.audioBeep.pause(),this.audioBeep.currentTime=0}},{key:"clockify",value:function(e){var t=Math.floor(e/60),a=e-60*t;return(t=t<10?"0"+t:t)+":"+(a=a<10?"0"+a:a)}},{key:"decrementTimer",value:function(){this.state.isRunning&&this.setState({timer:this.state.timer-1})}},{key:"pomodoro",value:function(){this.state.timer<0&&(this.playSound(),"Session"===this.state.timerType?this.setState({timer:60*this.state.break,timerType:"Break"}):this.setState({timer:60*this.state.session,timerType:"Session"}))}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"clockWrapper"},r.a.createElement("div",{className:"bg-light shadow p-4 card"},r.a.createElement("div",{className:"card p-2 m-2 align-items-center"},"Clock"),r.a.createElement("div",{className:"counters"},r.a.createElement(J,{id:"break",onIncrement:this.handleIncrementBreak,onDecrement:this.handleDecrementBreak,label:"Break Length",value:this.state.break}),r.a.createElement(J,{id:"session",onIncrement:this.handleIncrementSession,onDecrement:this.handleDecrementSession,label:"Session Length",value:this.state.session})),r.a.createElement("div",{className:"card m-2 p-2 align-items-center"},r.a.createElement("audio",{id:"beep",preload:"auto",src:"https://goo.gl/65cBl1",ref:function(t){e.audioBeep=t}}),r.a.createElement("div",{id:"timer-label",className:""},this.state.timerType),r.a.createElement("div",{id:"time-left",className:""},this.clockify(this.state.timer)),r.a.createElement("div",{className:"btn-group w-100"},r.a.createElement("button",{id:"start_stop",className:"btn btn-primary",onClick:this.handleStartStop},"Start"),r.a.createElement("button",{id:"reset",className:"btn btn-danger",onClick:this.handleReset},"Reset")))))}}]),t}(r.a.Component),Z=(a(60),a(17));var V=function(e){return r.a.createElement("div",{className:e.className},r.a.createElement("h4",null,e.winner)," won with ",e.remaining," armies left.")};var $=function(e){return r.a.createElement("button",{className:e.className,onClick:e.onClick},e.value)};var X=function(e){return r.a.createElement("div",{className:e.className},r.a.createElement("div",null," ","Attack rolled : ",e.attack," | ","Defense rolled : ",e.defense,"\n"),r.a.createElement("div",null," ",e.winner," won this round."))};var Y=function(e){return r.a.createElement("div",{className:"form-group row text-left m-2"},r.a.createElement("label",{className:"col-sm-2 col-form-label"},e.label),r.a.createElement("div",{className:"col-sm-10"},r.a.createElement("input",{className:"form-control",type:"number",value:e.value,onChange:e.onChange})))};var ee=function(e){return r.a.createElement("h1",{className:e.className},e.value)};var te=function(e){return r.a.createElement("li",{className:"list-group-item "+e.className},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-10"},r.a.createElement("div",null,"Attack: ",e.data.Attack," | AttackRoll : ",e.data.AttackRoll),r.a.createElement("div",null,"Defense: ",e.data.Defense," | DefenseRoll:"," ",e.data.DefenseRoll)),r.a.createElement("div",{className:"col-auto"},r.a.createElement("span",{className:"badge badge-warning badge-pill"},e.index))))};var ae=function(e){return r.a.createElement("ul",{className:"list-group"},r.a.createElement("h3",null," History "),e.history.map(function(t,a){var n="";return a===e.history.length-1&&(n="active"),r.a.createElement(te,{id:a,className:n,data:t,index:a})}))},ne=a(61);function re(e){for(var t=0,a=0,n=0;n<e;n++)(a=Math.round(6*Math.random()))>t&&(t=a);return t}var se=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).state={Attack:0,AttackRoll:0,Defense:0,DefenseRoll:0,roundWinner:"",canChange:!0,win:!1,history:[]},a.handleChangeAttack=a.handleChangeAttack.bind(Object(Z.a)(a)),a.handleChangeDefense=a.handleChangeDefense.bind(Object(Z.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(Z.a)(a)),a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"handleChangeAttack",value:function(e){this.state.canChange&&e.target.value>=0&&this.setState({Attack:e.target.value})}},{key:"handleChangeDefense",value:function(e){this.state.canChange&&e.target.value>=0&&this.setState({Defense:e.target.value})}},{key:"turn",value:function(e){var t=e.history;t.push(e);var a=function(e,t){var a,n=(s=parseInt(e),re(function(e){var t=ne("added entropy.",{entropy:!0});return ne(t),e>3?3:3===e?2:2===e?1:0}(s))),r=function(e){return re(function(e){return e>=2?2:e>0?1:0}(e))}(parseInt(t));var s;r>=n?(e-=1,a="Defense"):(t-=1,a="Attack");return{Attack:e,Defense:t,AttackRoll:n,DefenseRoll:r,roundWinner:a}}(e.Attack,e.Defense);return a.canChange=!1,a.history=t,a}},{key:"handleSubmit",value:function(e){e&&e.preventDefault(),this.state.win?alert("The battle is done!"):this.state.Attack<=1||0===this.state.Defense?this.setState({win:!0,canChange:!1}):this.setState(this.turn(this.state))}},{key:"handleSubmitToFinish",value:function(){if(this.state.win)alert("The battle is done!");else{for(var e=this.state;e.Attack>1&&e.Defense>0;)e=this.turn(e);e.win=!0,e.canChange=!1,this.setState(e)}}},{key:"handleReset",value:function(){this.setState({Attack:0,Defense:0,canChange:!0,win:!1,history:[]})}},{key:"handleUndo",value:function(){if(this.state.history.length>0){var e=this.state.history,t=e.pop();t.history=e,this.state.win&&(t.win=!1),this.setState(t)}else alert("Nothing in the History")}},{key:"renderWin",value:function(){var e="",t=0;if(this.state.win)return 0===this.state.Defense&&this.state.Attack>0?(e="Attack",t=this.state.Attack):(e="Defense",t=this.state.Defense),r.a.createElement("div",{className:"content card p-2 mt-2 shadow-sm"},r.a.createElement(V,{className:"",winner:e,remaining:t}))}},{key:"renderInfo",value:function(){if(!this.state.canChange)return r.a.createElement("div",{className:"card content p-2 mt-2 shadow-sm"},r.a.createElement(X,{className:"",attack:this.state.AttackRoll,defense:this.state.DefenseRoll,winner:this.state.roundWinner}))}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"risk"},r.a.createElement("div",{className:"wrapper"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"card content p-2 mt-2 shadow-sm"},r.a.createElement(ee,{className:"card-title",value:"Risk Calc"}),r.a.createElement("form",{className:"list-group",onSubmit:this.handleSubmit},r.a.createElement(Y,{className:"list-group-item",label:"Attack",value:this.state.Attack,onChange:this.handleChangeAttack}),r.a.createElement(Y,{className:"list-group-item",label:"Defense",value:this.state.Defense,onChange:this.handleChangeDefense}),r.a.createElement("input",{className:"invisible",style:{height:"0px"},type:"submit"})),r.a.createElement("div",{className:"btn-group"},r.a.createElement($,{value:"Battle!",className:"btn btn-primary",onClick:function(){return e.handleSubmit()}}),r.a.createElement($,{value:"Finish!",className:"btn btn-secondary",onClick:function(){return e.handleSubmitToFinish()}}),r.a.createElement($,{value:"Reset",className:"btn btn-danger",onClick:function(){return e.handleReset()}}),r.a.createElement($,{value:"Undo",className:"btn btn-success",onClick:function(){return e.handleUndo()}}))),this.renderInfo(),this.renderWin()),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"card content p-2 mt-2 shadow-sm"},r.a.createElement(ae,{history:this.state.history})))))}}]),t}(n.Component),ie=[{label:"HTML Projects",desc:"Here is the result of my FCC responsive web-design certification.\n\nOver the course of these 3 projects I learned a great deal about the basics of web design, and got comfortable with CSS and HTML, the building blocks of the web.\n\nEntirely built using raw HTML and CSS, no external libraries or frameworks. ",projects:[{title:"Tribute Page",imageURL:"/pictures/tribute.png",listItems:["My first ever HTML/CSS project. A tribute page dedicated to the city of Almaty, the cultural capital of Kazakhstan.","I did a lot with this project, experimented with flex-box among other things, but mostly I was still working to get even a basic feel for web design and HTML"],projectURL:"/HTML_Projects/tribute.html"},{title:"Voting Form",imageURL:"/pictures/vote.png",listItems:["Here is a basic voting form for the SEDS general election","With this project I wanted to explore CSS Grid, and the HTML form elements","This is just a dummy form, it doesn't feed information anywhere"],projectURL:"/HTML_Projects/voting.html"},{title:"Landing Page",imageURL:"/pictures/product.png",listItems:["A basic product landing page, for Pop!Os, my Linux distro of choice","Features include a Navbar and footer, which were difficult challenges when I was fist learning HTML/CSS","I also used this project to experiment with a card layout, as well as colors!"],projectURL:"/HTML_Projects/landing.html"},{title:"Technical Documentation Page",imageURL:"/pictures/tech.png",listItems:["Here is a guide to linked-lists, a basic ADT, in python.","With this project I wanted to experiment with different layout options, see the Static sidebar, and the use of shadows to add a layered effect to the main body","I also worked to refine my use of color, using complementary light greys rather than some of the more brash colors of previous projects"],projectURL:"/HTML_Projects/tech.html"}]},{isReact:!0,label:"React Projects",desc:"This page details all the things I've built using the React UI library.\n\nMain tools used in these projects:\n- React\n- Bootstrap\n- SASS\n",projects:[{title:"QuoteMachine",component:T,imageURL:"/pictures/quote-machine.png",listItems:["Small project which displays a quote, and it's author","Uses Ajax to fetch a list of quotes","Randomly selects a new quote on every button press, it's possible to get the same one twice","Allows the user to tweet the content of the quote, using the twitter API"]},{title:"Markdown",component:A,imageURL:"/pictures/markdown.png",listItems:["Mildly complex project which allows the users to write in Markdown, and then have it rendered on the page below","Uses the Marked NPM library to convert the input text into HTML","The full screen options demonstrate where I learned to selectively render react components!"]},{title:"DrumMachine",component:F,imageURL:"/pictures/drum-machine.png",listItems:["Basic drum pad which plays different sounds either on a click, or key press","Plays the sound by forming an audio object out of a URL","With this project I learned about react key listens, and HTML audio objects"]},{title:"JSCalc",component:x.a,imageURL:"/pictures/JSCalc.png",listItems:["A fully functional calculator, allows for addition, subtraction, multiplication, and division","With this project I learned a great deal about regular expressions and string processing","Uses EVAL to process the calculation string"]},{title:"Clock",component:G,imageURL:"/pictures/clock.png",listItems:["A Pomodoro Clock, allows the user to set a 'Secession' and 'Break' time. The clock will then count down, switching times whenever it hits zero","When the clock hits zero a buzzer will sound","With this project I got experience with implementing JS logic in react projects"]},{title:"RiskCalc",component:se,imageURL:"/pictures/Risk.png",listItems:["This first react project I build on my own, not under the guidance of FCC","It's a straightforward turn calculator for the board game RISK","With this project I implemented a great deal of internal JS logic, not just UI code","I also learned a great deal about selective rendering and passing props to components / the importance of a centralized state"]}]},{label:"D3 Projects",desc:"D3, data driven documents, is a library for building HTML pages based of off data sets.\n\nThese projects are the result of my FCC data visualization cert.\n\nBuilt using mainly D3, with a couple add on libraries.\n\nDue to how D3 renders SVG's these projects won't all work well on mobile.\n    ",projects:[{title:"Bar Chart",imageURL:"/pictures/bar-chart.png",listItems:["A graph of the United States GDP over time","Used the d3 scale methods to draw the axis and scale the GDP values to usable rect heights"],projectURL:"/FCC_Data_Projects/Bar-Chart/bar-chart.html"},{title:"Scatter Plot",imageURL:"/pictures/scatter.png",listItems:["A plot of Doping VS performance in professional cycling","I used the scale methods to map the years and times to usable x/y coordinates"],projectURL:"/FCC_Data_Projects/Scatter-Plot/scatter-plot.html"},{title:"Heat Map",imageURL:"/pictures/heat.png",listItems:["Here is a heat map of average global temperatures from the 1700s to today.","It's organized both by month and year, with color representing temperature variance","The color's are generated by using d3's scale method to map the variance value to a color range"],projectURL:"/FCC_Data_Projects/Heat-Map/heat-map.html"},{title:"Choropleth Map",imageURL:"/pictures/map.png",listItems:["A map of very county in the United State's educational attainment rates","This project introduced me to the TopoJson and GeoJson formats, which were used to draw the map."],projectURL:"/FCC_Data_Projects/Choropleth-Map/choropleth-map.html"},{title:"Treemap",imageURL:"/pictures/treemap.png",listItems:["A tree map capable of displaying any correctly formatted data set.","Includes 3 different sets, the links at the top"],projectURL:"/FCC_Data_Projects/Treemap/treemap.html"}]}],ce=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).RenderNav=Object(d.e)(function(e){return e.location.pathname.match(/react-/)?r.a.createElement("div",null):r.a.createElement(N,null)}),a.RenderFooter=Object(d.e)(function(e){return e.location.pathname.match(/react-/)?r.a.createElement("div",null):r.a.createElement(j,null)}),a.state={projectsList:ie},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"ReactRoutes",value:function(e){return r.a.createElement("div",null,this.state.projectsList.filter(function(e){return e.isReact}).map(function(e){return e.projects.map(function(e){return r.a.createElement(d.a,{key:e.title,path:"/react-"+e.title,exact:!0,component:e.component})})}))}},{key:"ProjectRoutes",value:function(e){return r.a.createElement("div",null,this.state.projectsList.map(function(e){return r.a.createElement(d.a,{key:e.label,path:"/"+e.label,exact:!0,component:function(){return r.a.createElement(b.a,null,r.a.createElement(v,{projectsJSON:e})," ")}})}))}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"bg-secondary"},r.a.createElement(this.RenderNav,null),this.ReactRoutes(this.state.projectsList),this.ProjectRoutes(this.state.projectsList),r.a.createElement(d.a,{path:"/",exact:!0,component:function(){return r.a.createElement(b.a,null,r.a.createElement(w,{projectsList:e.state.projectsList}))}}),r.a.createElement(this.RenderFooter,null))}}]),t}(n.Component),le=(a(72),a(20)),oe=function(e){function t(){return Object(c.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidUpdate",value:function(e){this.props.location.pathname!==e.location.pathname&&window.scrollTo(0,0)}},{key:"render",value:function(){return this.props.children}}]),t}(r.a.Component),me=Object(d.e)(oe),ue=a(35),de=a.n(ue)()({basename:""});i.a.render(r.a.createElement(le.a,{history:de},r.a.createElement(me,null,r.a.createElement(ce,null))),document.getElementById("root"))}},[[36,1,2]]]);
//# sourceMappingURL=main.73ace8f0.chunk.js.map