(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{105:function(e,t){},108:function(e,t,a){},109:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(20),l=a.n(s),i=a(6),c=a(7),o=a(9),m=a(8),u=a(10),d=a(18);a(58),a(59);var h=function(e){return r.a.createElement("div",{className:"card mt-4 project-card shadow-sm"},r.a.createElement("div",{className:"card-body text-dark bg-light border-bottom"},r.a.createElement("h3",{className:"card-title"},e.project.title)),r.a.createElement("div",{className:"row no-gutters"},r.a.createElement("div",{className:"col-md-4 m-auto"},r.a.createElement("div",{className:"project-img-wrapper"},r.a.createElement("img",{className:"card-img-top",src:e.project.imageURL,alt:e.project.imageURL}))),r.a.createElement("div",{className:"col-md-8 border-left"},r.a.createElement("ul",{className:"list-group list-group-flush"},e.project.listItems.map(function(e){return r.a.createElement("li",{key:e,className:"list-group-item"},e)})),r.a.createElement("div",{className:"card-body"},r.a.createElement("a",{className:"btn btn-primary",target:"_blank",rel:"noopener noreferrer",href:e.project.projectURL?e.project.projectURL:"react-"+e.project.title},"Found here")))))};var _=function(e){return r.a.createElement("div",{className:""},e.projects.map(function(e){return r.a.createElement(h,{key:e.title,project:e})}))},p=(a(60),function(e){return r.a.createElement("div",{className:""},r.a.createElement("div",{className:"mt-2 mb-4"},r.a.createElement("div",null,r.a.createElement(_,{projects:e.projectsJSON.projects}))))}),f=(a(61),function(e){return r.a.createElement("div",null,r.a.createElement("div",{className:"welcome-section"},r.a.createElement("section",{className:"intro-section card shadow-sm content"},r.a.createElement("h1",null,"Hi, I'm Amin Sennour."),r.a.createElement("p",null,"{developer}"),r.a.createElement("p",null,"{CS major at the UofA}")),r.a.createElement("div",{className:"content card shadow education-content"},r.a.createElement("h1",null,"Education"),r.a.createElement("h4",null,"University of Arizona"),r.a.createElement("p",null,r.a.createElement("b",null,"Projected Graduation: ")," 2022"),r.a.createElement("p",null,r.a.createElement("b",null," College of Science ")),r.a.createElement("li",null,"Major: Computer Science"),r.a.createElement("p",null,r.a.createElement("b",null,"College of Science")),r.a.createElement("li",null,"Major: Mathematics"),r.a.createElement("p",null),r.a.createElement("p",null,r.a.createElement("b",null,"GPA: ")," 3.71"))),r.a.createElement("div",{className:"card "},r.a.createElement("ul",{className:"list-group list-group-flush"},e.projectsList.map(function(e){return r.a.createElement("li",{key:e.label},r.a.createElement("a",{className:"list-group-item",href:"/"+e.label},e.label))}))))}),v=a(21),E=a.n(v),b=function(e){return r.a.createElement("div",null,r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark fixed-top"},r.a.createElement("a",{className:"navbar-brand",href:"/"},"Amin Sennour"),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},r.a.createElement("ul",{className:"navbar-nav mr-auto"},e.projects.map(function(e){return r.a.createElement("div",{key:e.label},r.a.createElement(E.a,{className:"mr-2"},r.a.createElement(E.a.Toggle,{variant:"secondary",id:"dropdown-basic"},e.label),r.a.createElement(E.a.Menu,null,e.projects.map(function(e){return r.a.createElement(E.a.Item,{key:e.title,className:"dropdown-item",href:e.projectURL?e.projectURL:"react-"+e.title},e.title)}),r.a.createElement(E.a.Divider,null),r.a.createElement(E.a.Item,{className:"dropdown-item",href:"/"+e.label},e.label))))})))))},g=a(49),k=(a(89),a(19),function(e){var t=e.quote;return r.a.createElement("div",{className:"card-body",id:"text"},t)}),y=function(e){var t=e.author;return r.a.createElement("div",{id:"author",className:""},"- ",t)},D=function(e){var t=e.onClick;return r.a.createElement("div",{id:"new-quote",className:"btn btn-secondary",onClick:t},"New Quote")},w=function(e){var t=e.quote,a=e.author;return r.a.createElement("a",{id:"tweet-quote",className:"btn btn-secondary",href:"https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text="+encodeURIComponent('"'+t+'" '+a)},"Tweet")},C=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).handleNewQuote=function(){var e=a.state.quotes,t=e[Math.floor(Math.random()*e.length)];a.setState({currentQuote:t})},a.state={quotes:[],currentQuote:{quote:"",author:""}},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json").then(function(e){return e.json()}).then(function(t){console.log(t);var a=t.quotes;e.setState({quotes:a,currentQuote:a[0]})})}},{key:"render",value:function(){return r.a.createElement("div",{className:"quote"},r.a.createElement("div",{className:"card shadow content",id:"quote-box"},r.a.createElement(k,{id:"text",quote:this.state.currentQuote.quote}),r.a.createElement("div",{className:"buttons-group m-2"},r.a.createElement(w,{quote:this.state.currentQuote.quote,author:this.state.currentQuote.author}),r.a.createElement(y,{id:"author",author:this.state.currentQuote.author}),r.a.createElement(D,{onClick:this.handleNewQuote}))))}}]),t}(n.Component),N=(a(90),a(91));N.setOptions({breaks:!0});var O=function(e){var t=e.handleChange,a=e.value;return r.a.createElement("textarea",{id:"editor",value:a,onChange:t})},S=function(e){var t=e.input;return r.a.createElement("div",{id:"preview",dangerouslySetInnerHTML:{__html:N(t)}})},j=function(e){var t=e.onClick,a=e.title;return r.a.createElement("nav",{className:"navbar navbar-dark bg-dark"},r.a.createElement("span",{className:"badge text-light"}," ",a," "),r.a.createElement("button",{className:"navbar-toggler bg-primary",onClick:t},r.a.createElement("span",{className:"badge text-light"}," Fullscreen ")))},P=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).handleEditorUpdate=function(e){a.setState({input:e.target.value}),console.log(a.state.input)},a.hanleEditorFullScreen=function(){a.setState({editorFullScreen:!a.state.editorFullScreen,previewFullScreen:!1})},a.hanlePreivewFullScreen=function(){a.setState({editorFullScreen:!1,previewFullScreen:!a.state.previewFullScreen})},a.state={input:"",editorFullScreen:!1,previewFullScreen:!1},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.setState({input:"# Welcome to my React Markdown Previewer!\n\n## This is a sub-heading...\n### And here's some other cool stuff:\n\nHeres some code, `<div></div>`, between 2 backticks.\n\n```\n// this is multi-line code:\n\nfunction anotherExample(firstLine, lastLine) {\n  if (firstLine == '```' && lastLine == '```') {\n    return multiLineCode;\n  }\n}\n```\n\nYou can also make text **bold**... whoa!\nOr _italic_.\nOr... wait for it... **_both!_**\nAnd feel free to go crazy ~~crossing stuff out~~.\n\nThere's also [links](https://www.freecodecamp.com), and\n> Block Quotes!\n\nAnd if you want to get really crazy, even tables:\n\nWild Header | Crazy Header | Another Header?\n------------ | ------------- | -------------\nYour content can | be here, and it | can be here....\nAnd here. | Okay. | I think we get it.\n\n- And of course there are lists.\n  - Some are bulleted.\n     - With different indentation levels.\n        - That look like this.\n\n\n1. And there are numbererd lists too.\n1. Use just 1s if you want!\n1. But the list goes on...\n- Even if you use dashes or asterisks.\n* And last but not least, let's not forget embedded images:\n\n![React Logo w/ Text](https://goo.gl/Umyytc)\n"})}},{key:"renderEditor",value:function(){if(!this.state.previewFullScreen){var e=this.state.editorFullScreen?"editorFullScreen card shadow":"editorWrap card shadow";return r.a.createElement("div",{className:e},r.a.createElement(j,{onClick:this.hanleEditorFullScreen,title:"Editor"}),r.a.createElement(O,{handleChange:this.handleEditorUpdate,value:this.state.input}))}}},{key:"renderPreview",value:function(){if(!this.state.editorFullScreen){var e=this.state.previewFullScreen?"preivewFullScreen card shadow":"previewWrap card shadow";return r.a.createElement("div",{className:e},r.a.createElement(j,{onClick:this.hanlePreivewFullScreen,title:"Preivewer"}),r.a.createElement(S,{input:this.state.input}))}}},{key:"render",value:function(){return r.a.createElement("div",{className:"Markdown"},this.renderEditor(),this.renderPreview())}}]),t}(r.a.Component),R=a(50),T=(a(93),[{keyCode:81,keyTrigger:"Q",id:"Heater-1",url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"},{keyCode:87,keyTrigger:"W",id:"Heater-2",url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"},{keyCode:69,keyTrigger:"E",id:"Heater-3",url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"},{keyCode:65,keyTrigger:"A",id:"Heater-4",url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"},{keyCode:83,keyTrigger:"S",id:"Clap",url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"},{keyCode:68,keyTrigger:"D",id:"Open-HH",url:"https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"},{keyCode:90,keyTrigger:"Z",id:"Kick-n'-Hat",url:"https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"},{keyCode:88,keyTrigger:"X",id:"Kick",url:"https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"},{keyCode:67,keyTrigger:"C",id:"Closed-HH",url:"https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"}]),M="pad-active shadow-sm bg-danger",U="shadow-lg bg-primary",L=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).keyPress=function(e){e.preventDefault(),e.keyCode===a.props.keyCode&&a.playSound()},a.activatePad=function(){a.state.padStyle===U?a.setState({padStyle:M}):a.setState({padStyle:U})},a.playSound=function(e){var t=document.getElementById(a.props.keyLabel);t.currentTime=0,t.play(),a.activatePad(),setTimeout(function(){return a.activatePad()},100),a.props.updateScreenText(a.props.clipId)},a.state={padStyle:U},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentWillMount",value:function(){document.addEventListener("keydown",this.keyPress,!1)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keydown",this.keyPress,!1)}},{key:"render",value:function(){return r.a.createElement("div",{id:this.props.clipId,onClick:this.playSound,className:"drum-pad text-white "+this.state.padStyle},r.a.createElement("audio",{className:"clip",id:this.props.keyLabel,src:this.props.url}),this.props.keyLabel)}}]),t}(r.a.Component),A=function(e){var t=e.bank,a=e.power,n=e.updateScreenText;return r.a.createElement("div",{className:"pad-bank"}," ",t.map(function(e){return r.a.createElement(L,{id:e.id,clipId:e.id,url:e.url,keyLabel:e.keyTrigger,keyCode:e.keyCode,updateScreenText:n,power:a})}))},I=function(e){var t=e.screenText;return r.a.createElement("div",{id:"display",className:"display"},r.a.createElement("div",{className:"info-screen card shadow bg-dark p-2"},r.a.createElement("div",{className:"m-auto text-light"},t)))},B=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).updateScreenText=function(e){a.setState({screenText:e})},a.state={bank:T,screenText:"",power:!0},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"drum"},r.a.createElement("div",{id:"drum-machine",className:"container card flex-row shadow p-2"},r.a.createElement(A,{bank:this.state.bank,power:this.state.power,updateScreenText:this.updateScreenText}),r.a.createElement(I,{screenText:this.state.screenText})))}}]),t}(r.a.Component),x=(a(94),a(95)),W={break:5,session:25,timerType:"Session",isRunning:!1,timer:1500,intervalFunction:"",sound:""},H=function(e){var t=e.id,a=e.onIncrement,n=e.onDecrement,s=e.label,l=e.value;return r.a.createElement("div",{className:"clock"},r.a.createElement("div",null,r.a.createElement("div",{className:"card m-2 align-items-center  "},r.a.createElement("div",{id:t+"-label",className:"m-2 p-2"},s),r.a.createElement("div",{className:"d-flex flex-row"},r.a.createElement("button",{id:t+"-increment",className:"btn btn-success m-2 p-2",onClick:a},"INC"),r.a.createElement("div",{id:t+"-length",className:"m-2 p-2"},l),r.a.createElement("button",{id:t+"-decrement",className:"btn btn-info m-2 p-2",onClick:n},"DEC")))))},K=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).handleIncrementBreak=function(){a.state.isRunning||a.state.break<60&&a.setState({break:a.state.break+1})},a.handleIncrementSession=function(){a.state.isRunning||a.state.session<60&&a.setState({session:a.state.session+1,timer:a.state.timer+60})},a.handleDecrementBreak=function(){a.state.isRunning||a.state.break>1&&a.setState({break:a.state.break-1})},a.handleDecrementSession=function(){a.state.isRunning||a.state.session>1&&a.setState({session:a.state.session-1,timer:a.state.timer-60})},a.handleStartStop=function(){a.state.isRunning?(a.setState({isRunning:!1}),a.endTimer()):(a.startTimer(),a.setState({isRunning:!0}))},a.handleReset=function(){a.state.isRunning&&a.endTimer(),a.stopSound(),a.setState(W)},a.state=W,a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"startTimer",value:function(){var e=this;this.setState({intervalFunction:x(function(){e.decrementTimer(),e.pomodoro()},1e3)})}},{key:"endTimer",value:function(){this.state.intervalFunction.clear()}},{key:"playSound",value:function(e){this.audioBeep.play()}},{key:"stopSound",value:function(){this.audioBeep.pause(),this.audioBeep.currentTime=0}},{key:"clockify",value:function(e){var t=Math.floor(e/60),a=e-60*t;return(t=t<10?"0"+t:t)+":"+(a=a<10?"0"+a:a)}},{key:"decrementTimer",value:function(){this.state.isRunning&&this.setState({timer:this.state.timer-1})}},{key:"pomodoro",value:function(){this.state.timer<0&&(this.playSound(),"Session"===this.state.timerType?this.setState({timer:60*this.state.break,timerType:"Break"}):this.setState({timer:60*this.state.session,timerType:"Session"}))}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"clockWrapper"},r.a.createElement("div",{className:"bg-light shadow p-4 card"},r.a.createElement("div",{className:"card p-2 m-2 align-items-center"},"Clock"),r.a.createElement("div",{className:"counters"},r.a.createElement(H,{id:"break",onIncrement:this.handleIncrementBreak,onDecrement:this.handleDecrementBreak,label:"Break Length",value:this.state.break}),r.a.createElement(H,{id:"session",onIncrement:this.handleIncrementSession,onDecrement:this.handleDecrementSession,label:"Session Length",value:this.state.session})),r.a.createElement("div",{className:"card m-2 p-2 align-items-center"},r.a.createElement("audio",{id:"beep",preload:"auto",src:"https://goo.gl/65cBl1",ref:function(t){e.audioBeep=t}}),r.a.createElement("div",{id:"timer-label",className:""},this.state.timerType),r.a.createElement("div",{id:"time-left",className:""},this.clockify(this.state.timer)),r.a.createElement("div",{className:"btn-group w-100"},r.a.createElement("button",{id:"start_stop",className:"btn btn-primary",onClick:this.handleStartStop},"Start"),r.a.createElement("button",{id:"reset",className:"btn btn-danger",onClick:this.handleReset},"Reset")))))}}]),t}(r.a.Component),F=(a(96),a(27));var q=function(e){return r.a.createElement("div",{className:e.className},r.a.createElement("h4",null,e.winner)," won with ",e.remaining," armies left.")};var z=function(e){return r.a.createElement("button",{className:e.className,onClick:e.onClick},e.value)};var G=function(e){return r.a.createElement("div",{className:e.className},r.a.createElement("div",null," ","Attack rolled : ",e.attack," | ","Defense rolled : ",e.defense,"\n"),r.a.createElement("div",null," ",e.winner," won this round."))};var Q=function(e){return r.a.createElement("div",{className:"form-group row text-left m-2"},r.a.createElement("label",{className:"col-sm-2 col-form-label"},e.label),r.a.createElement("div",{className:"col-sm-10"},r.a.createElement("input",{className:"form-control",type:"number",value:e.value,onChange:e.onChange})))};var J=function(e){return r.a.createElement("h1",{className:e.className},e.value)};var V=function(e){return r.a.createElement("li",{className:"list-group-item "+e.className},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-10"},r.a.createElement("div",null,"Attack: ",e.data.Attack," | AttackRoll : ",e.data.AttackRoll),r.a.createElement("div",null,"Defense: ",e.data.Defense," | DefenseRoll:"," ",e.data.DefenseRoll)),r.a.createElement("div",{className:"col-auto"},r.a.createElement("span",{className:"badge badge-warning badge-pill"},e.index))))};var Z=function(e){return r.a.createElement("ul",{className:"list-group"},r.a.createElement("h3",null," History "),e.history.map(function(t,a){var n="";return a===e.history.length-1&&(n="active"),r.a.createElement(V,{id:a,className:n,data:t,index:a})}))},$=a(97);function Y(e){for(var t=0,a=0,n=0;n<e;n++)(a=Math.round(6*Math.random()))>t&&(t=a);return t}var X=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).state={Attack:0,AttackRoll:0,Defense:0,DefenseRoll:0,roundWinner:"",canChange:!0,win:!1,history:[]},a.handleChangeAttack=a.handleChangeAttack.bind(Object(F.a)(a)),a.handleChangeDefense=a.handleChangeDefense.bind(Object(F.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(F.a)(a)),a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"handleChangeAttack",value:function(e){this.state.canChange&&e.target.value>=0&&this.setState({Attack:e.target.value})}},{key:"handleChangeDefense",value:function(e){this.state.canChange&&e.target.value>=0&&this.setState({Defense:e.target.value})}},{key:"turn",value:function(e){var t=e.history;t.push(e);var a=function(e,t){var a,n=(s=parseInt(e),Y(function(e){var t=$("added entropy.",{entropy:!0});return $(t),e>3?3:3===e?2:2===e?1:0}(s))),r=function(e){return Y(function(e){return e>=2?2:e>0?1:0}(e))}(parseInt(t));var s;r>=n?(e-=1,a="Defense"):(t-=1,a="Attack");return{Attack:e,Defense:t,AttackRoll:n,DefenseRoll:r,roundWinner:a}}(e.Attack,e.Defense);return a.canChange=!1,a.history=t,a}},{key:"handleSubmit",value:function(e){e&&e.preventDefault(),this.state.win?alert("The battle is done!"):this.state.Attack<=1||0===this.state.Defense?this.setState({win:!0,canChange:!1}):this.setState(this.turn(this.state))}},{key:"handleSubmitToFinish",value:function(){if(this.state.win)alert("The battle is done!");else{for(var e=this.state;e.Attack>1&&e.Defense>0;)e=this.turn(e);e.win=!0,e.canChange=!1,this.setState(e)}}},{key:"handleReset",value:function(){this.setState({Attack:0,Defense:0,canChange:!0,win:!1,history:[]})}},{key:"handleUndo",value:function(){if(this.state.history.length>0){var e=this.state.history,t=e.pop();t.history=e,this.state.win&&(t.win=!1),this.setState(t)}else alert("Nothing in the History")}},{key:"renderWin",value:function(){var e="",t=0;if(this.state.win)return 0===this.state.Defense&&this.state.Attack>0?(e="Attack",t=this.state.Attack):(e="Defense",t=this.state.Defense),r.a.createElement("div",{className:"content card p-2 mt-2"},r.a.createElement(q,{className:"",winner:e,remaining:t}))}},{key:"renderInfo",value:function(){if(!this.state.canChange)return r.a.createElement("div",{className:"card content p-2 mt-2"},r.a.createElement(G,{className:"",attack:this.state.AttackRoll,defense:this.state.DefenseRoll,winner:this.state.roundWinner}))}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"risk"},r.a.createElement("div",{className:"wrapper"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"card content p-2 mt-2"},r.a.createElement(J,{className:"card-title",value:"Risk Calc"}),r.a.createElement("form",{className:"list-group",onSubmit:this.handleSubmit},r.a.createElement(Q,{className:"list-group-item",label:"Attack",value:this.state.Attack,onChange:this.handleChangeAttack}),r.a.createElement(Q,{className:"list-group-item",label:"Defense",value:this.state.Defense,onChange:this.handleChangeDefense}),r.a.createElement("input",{className:"invisible",style:{height:"0px"},type:"submit"})),r.a.createElement("div",{className:"btn-group"},r.a.createElement(z,{value:"Battle!",className:"btn btn-primary",onClick:function(){return e.handleSubmit()}}),r.a.createElement(z,{value:"Finish!",className:"btn btn-secondary",onClick:function(){return e.handleSubmitToFinish()}}),r.a.createElement(z,{value:"Reset",className:"btn btn-danger",onClick:function(){return e.handleReset()}}),r.a.createElement(z,{value:"Undo",className:"btn btn-success",onClick:function(){return e.handleUndo()}}))),this.renderInfo(),this.renderWin()),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"card content p-2 mt-2"},r.a.createElement(Z,{history:this.state.history})))))}}]),t}(n.Component),ee=[g,{isReact:!0,label:"React Projects",projects:[{title:"Markdown",component:P,imageURL:"https://plot.ly/~RPlotBot/3512/count-vs-animals.png",listItems:["This projct is a simple graph of the United States GDP over time","Built using d3 to iterate over the data","Used the d3 scale methods to draw the axis and scale the GDP values to usable rect heights"]},{title:"JSCalc",component:R.a,imageURL:"http://www.sthda.com/sthda/RDoc/figure/graphs/scatter-plots-base-scatter-plot-1.png",listItems:["This projct is a plot of Doping VS performance in profesional cycling"]},{title:"DrumMachine",component:B,imageURL:"https://plot.ly/~RPlotBot/3512/count-vs-animals.png",listItems:["This projct is a simple graph of the United States GDP over time","Built using d3 to iterate over the data","Used the d3 scale methods to draw the axis and scale the GDP values to usable rect heights"]},{title:"Clock",component:K,imageURL:"http://www.sthda.com/sthda/RDoc/figure/graphs/scatter-plots-base-scatter-plot-1.png",listItems:["This projct is a plot of Doping VS performance in profesional cycling"]},{title:"QuoteMachine",component:C,imageURL:"https://plot.ly/~RPlotBot/3512/count-vs-animals.png",listItems:["This projct is a simple graph of the United States GDP over time","Built using d3 to iterate over the data","Used the d3 scale methods to draw the axis and scale the GDP values to usable rect heights"]},{title:"RiskCalc",component:X,imageURL:"https://plot.ly/~RPlotBot/3512/count-vs-animals.png",listItems:["This projct is a simple graph of the United States GDP over time","Built using d3 to iterate over the data","Used the d3 scale methods to draw the axis and scale the GDP values to usable rect heights"]}]},a(51)],te=function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"ReactRoutes",value:function(e){return r.a.createElement("div",null,e.filter(function(e){return e.isReact}).map(function(e){return e.projects.map(function(e){return r.a.createElement(d.a,{key:e.title,path:"/react-"+e.title,exact:!0,component:e.component})})}))}},{key:"ProjectRoutes",value:function(e){return r.a.createElement("div",null,e.map(function(e){return r.a.createElement(d.a,{key:e.label,path:"/"+e.label,exact:!0,component:function(){return r.a.createElement(p,{projectsJSON:e})}})}))}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(b,{projects:ee}),this.ReactRoutes(ee),this.ProjectRoutes(ee),r.a.createElement(d.a,{path:"/",exact:!0,component:function(){return r.a.createElement(f,{projectsList:ee})}}))}}]),t}(n.Component),ae=(a(108),a(35));l.a.render(r.a.createElement(ae.a,null,r.a.createElement(te,null)),document.getElementById("root"))},49:function(e){e.exports={label:"D3 Projects",projects:[{title:"Bar Chart",imageURL:"https://plot.ly/~RPlotBot/3512/count-vs-animals.png",listItems:["This projct is a simple graph of the United States GDP over time","Built using d3 to iterate over the data","Used the d3 scale methods to draw the axis and scale the GDP values to usable rect heights"],projectURL:"/FCC_Data_Projects/Bar-Chart/bar-chart.html"},{title:"Scatter Plot",imageURL:"http://www.sthda.com/sthda/RDoc/figure/graphs/scatter-plots-base-scatter-plot-1.png",listItems:["This projct is a plot of Doping VS performance in profesional cycling"],projectURL:"/FCC_Data_Projects/Scatter-Plot/scatter-plot.html"},{title:"Heat Map",imageURL:"https://www.iia.nl/SiteFiles/Nieuws/Sample-Heat-Map.jpg",listItems:["Here is a heatmap of average global tempratures from the 1700s to today.","It's organized both by month and year, with color representing temprature variance"],projectURL:"/FCC_Data_Projects/Heat-Map/heat-map.html"},{title:"Choropleth Map",imageURL:"http://my.ilstu.edu/~jrcarter/Geo204/Choro/map-AmFact-5nat-breaks-green-80pct.jpg",listItems:["Here is a heatmap of average global tempratures from the 1700s to today.","It's organized both by month and year, with color representing temprature variance"],projectURL:"/FCC_Data_Projects/Choropleth-Map/choropleth-map.html"},{title:"Treemap",imageURL:"http://arcadenw.org/images/uploads/content-media/UNAIDS_Treemap_full.jpg",listItems:["Here is a heatmap of average global tempratures from the 1700s to today.","It's organized both by month and year, with color representing temprature variance"],projectURL:"/FCC_Data_Projects/Treemap/treemap.html"}]}},50:function(module,__webpack_exports__,__webpack_require__){"use strict";var _home_nafal_Documents_Dev_aminsennour_com_2_0_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(6),_home_nafal_Documents_Dev_aminsennour_com_2_0_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(7),_home_nafal_Documents_Dev_aminsennour_com_2_0_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(9),_home_nafal_Documents_Dev_aminsennour_com_2_0_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(8),_home_nafal_Documents_Dev_aminsennour_com_2_0_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(10),react__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__),_index_css__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(92),_index_css__WEBPACK_IMPORTED_MODULE_6___default=__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_6__),bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(19),bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_7___default=__webpack_require__.n(bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_7__),operators=[{value:"*",id:"multiply",className:""},{value:"+",id:"add",className:""},{value:"-",id:"subtract",className:""},{value:"/",id:"divide",className:""}],buttons=[{value:"7",id:"seven",className:""},{value:"8",id:"eight",className:""},{value:"9",id:"nine",className:""},{value:"4",id:"four",className:""},{value:"5",id:"five",className:""},{value:"6",id:"six",className:""},{value:"1",id:"one",className:""},{value:"2",id:"two",className:""},{value:"3",id:"three",className:""},{value:"0",id:"zero",className:""},{value:".",id:"decimal",className:""}],isOperator=/[*\/+-]/,endsWithOperator=/[*+-\/]$/,startsWithOperator=/^[*+-\/]/,leadingZero=/\b0+/g,constainsDecimal=/\./g,reset={input:"0",formula:"0",curNum:"0"},Buttons=function(e){return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",{className:"buttons"},operators.map(function(t){return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button",{className:"btn btn-default bttn bg-light shadow-sm",id:t.id,key:t.id,onClick:function(){return e.handleButton(t.value)}},t.value)}),buttons.map(function(t){return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button",{className:"btn btn-default bttn bg-light shadow-sm",id:t.id,key:t.id,onClick:function(){return e.handleButton(t.value)}},t.value)}),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button",{id:"clear",className:"btn bttn btn-warning",onClick:e.handleClear},"AC"),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button",{className:"btn bttn btn-warning equals",id:"equals",onClick:e.handleEqual},"="))},Display=function(e){return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",{className:"navbar navbar-dark bg-dark text-light flex-column align-items-end"},react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",{id:"display",className:"formula"},e.formula),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",{className:"input"},e.input))},App=function(_React$Component){function App(props){var _this;return Object(_home_nafal_Documents_Dev_aminsennour_com_2_0_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.a)(this,App),_this=Object(_home_nafal_Documents_Dev_aminsennour_com_2_0_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__.a)(this,Object(_home_nafal_Documents_Dev_aminsennour_com_2_0_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__.a)(App).call(this,props)),_this.handleEqual=function(){var formula=_this.state.formula;formula=formula.match(endsWithOperator)||formula.match(startsWithOperator)?"Error: Cannont Start or End in Operator":eval(_this.state.formula).toString(),_this.setState({input:"0",formula:formula})},_this.handleClear=function(){_this.setState(reset)},_this.handleButton=function(e){var t=_this.state.formula.replace(leadingZero,""),a=_this.state.curNum.replace(leadingZero,"");e.match(isOperator)?a="":e.match(constainsDecimal)&&a.match(constainsDecimal)?e="":a+=e,e.match(isOperator)&&t.match(endsWithOperator)&&(t=t.substring(0,t.length-1)),_this.setState({input:e,formula:t+e,curNum:a})},_this.state=reset,_this}return Object(_home_nafal_Documents_Dev_aminsennour_com_2_0_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__.a)(App,_React$Component),Object(_home_nafal_Documents_Dev_aminsennour_com_2_0_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__.a)(App,[{key:"render",value:function(){return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",{className:"container calcWrap"},react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",{className:"calculator bg-primary shadow-lg"},react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(Display,{input:this.state.input,formula:this.state.formula}),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(Buttons,{handleButton:this.handleButton,handleEqual:this.handleEqual,handleClear:this.handleClear})))}}]),App}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);__webpack_exports__.a=App},51:function(e){e.exports={label:"HTML Projects",projects:[{title:"Landing Page",imageURL:"https://plot.ly/~RPlotBot/3512/count-vs-animals.png",listItems:["This projct is a simple graph of the United States GDP over time","Built using d3 to iterate over the data","Used the d3 scale methods to draw the axis and scale the GDP values to usable rect heights"],projectURL:"/HTML_Projects/landing.html"},{title:"Technical Documentation Page",imageURL:"http://www.sthda.com/sthda/RDoc/figure/graphs/scatter-plots-base-scatter-plot-1.png",listItems:["This projct is a plot of Doping VS performance in profesional cycling"],projectURL:"/HTML_Projects/tech.html"},{title:"Tribute Page",imageURL:"https://www.iia.nl/SiteFiles/Nieuws/Sample-Heat-Map.jpg",listItems:["Here is a heatmap of average global tempratures from the 1700s to today.","It's organized both by month and year, with color representing temprature variance"],projectURL:"/HTML_Projects/tribute.html"},{title:"Voting Form",imageURL:"http://my.ilstu.edu/~jrcarter/Geo204/Choro/map-AmFact-5nat-breaks-green-80pct.jpg",listItems:["Here is a heatmap of average global tempratures from the 1700s to today.","It's organized both by month and year, with color representing temprature variance"],projectURL:"/HTML_Projects/voting.html"}]}},53:function(e,t,a){e.exports=a(109)},58:function(e,t,a){},59:function(e,t,a){},60:function(e,t,a){},61:function(e,t,a){},89:function(e,t,a){},90:function(e,t,a){},92:function(e,t,a){},93:function(e,t,a){},94:function(e,t,a){},96:function(e,t,a){}},[[53,1,2]]]);
//# sourceMappingURL=main.172e069f.chunk.js.map