(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{166:function(e,t,n){},169:function(e,t,n){"use strict";n.r(t);var a=n(3),i=n.n(a),o=n(16),l=n.n(o),r=n(27),s=n(28),d=n(30),y=n(29),c=n(31),h=n(19),g=n(12),u=n(71),p=n.n(u),m={UNDERLINE:{textDecoration:"underline dashed var(--primary)"},ITALIC:{color:"var(--primary)"}},f=function(e){function t(e){var n;Object(r.a)(this,t),(n=Object(d.a)(this,Object(y.a)(t).call(this,e))).saveContent=function(e){window.localStorage.setItem("content",JSON.stringify(Object(g.convertToRaw)(e)))},n.handleKeyCommand=n.handleKeyCommand.bind(Object(h.a)(n)),n.toggleBlockType=n.toggleBlockType.bind(Object(h.a)(n)),n.toggleInlineStyle=n.toggleInlineStyle.bind(Object(h.a)(n)),n.state={editorState:g.EditorState.createEmpty(),mute:!0};var a=JSON.stringify({blocks:[{key:"b6gr3",text:"Welcome to TypeWriter!",type:"unstyled",depth:0,inlineStyleRanges:[{offset:0,length:22,style:"ITALIC"},{offset:0,length:22,style:"BOLD"}],entityRanges:[],data:{}},{key:"smp4",text:" ",type:"unstyled",depth:0,inlineStyleRanges:[],entityRanges:[],data:{}},{key:"dad9e",text:"This is a simple text editor, made to look like the input text was written with a typewriter.",type:"unstyled",depth:0,inlineStyleRanges:[{offset:0,length:93,style:"BOLD"}],entityRanges:[],data:{}},{key:"18f8u",text:"",type:"unstyled",depth:0,inlineStyleRanges:[],entityRanges:[],data:{}},{key:"7i5ot",text:"The editor supports three inline styles, through the keyboard shorcuts:   ",type:"unstyled",depth:0,inlineStyleRanges:[],entityRanges:[],data:{}},{key:"bo6uk",text:"Bold - ctrl+B",type:"ordered-list-item",depth:0,inlineStyleRanges:[{offset:0,length:5,style:"BOLD"}],entityRanges:[],data:{}},{key:"3ghp",text:"Underline - ctrl+U",type:"ordered-list-item",depth:0,inlineStyleRanges:[{offset:0,length:9,style:"UNDERLINE"}],entityRanges:[],data:{}},{key:"3138k",text:"Colored - ctrl+I",type:"ordered-list-item",depth:0,inlineStyleRanges:[{offset:0,length:7,style:"ITALIC"}],entityRanges:[],data:{}},{key:"850bj",text:"",type:"unstyled",depth:0,inlineStyleRanges:[],entityRanges:[],data:{}},{key:"5cu28",text:"",type:"unstyled",depth:0,inlineStyleRanges:[],entityRanges:[],data:{}}],entityMap:{}});window.localStorage.getItem("content")||localStorage.setItem("content",a);var i=window.localStorage.getItem("content");return n.state.editorState=g.EditorState.createWithContent(Object(g.convertFromRaw)(JSON.parse(i))),n.onChange=function(e){var t=e.getCurrentContent();(n.saveContent(t),n.setState({editorState:e}),n.state.mute)||new Audio(p.a).play()},n.setDomEditorRef=function(e){return n.domEditor=e},n}return Object(c.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.domEditor.focus()}},{key:"handleKeyCommand",value:function(e){var t=g.RichUtils.handleKeyCommand(this.state.editorState,e);return t?(this.onChange(t),"handled"):"not-handled"}},{key:"toggleBlockType",value:function(e){this.onChange(g.RichUtils.toggleBlockType(this.state.editorState,e))}},{key:"toggleInlineStyle",value:function(e){this.onChange(g.RichUtils.toggleInlineStyle(this.state.editorState,e))}},{key:"render",value:function(){return i.a.createElement("div",{id:"editor-container"},i.a.createElement("main",{className:"editor"},i.a.createElement(g.Editor,{editorState:this.state.editorState,customStyleMap:m,handleKeyCommand:this.handleKeyCommand,onChange:this.onChange,ref:this.setDomEditorRef})))}}]),t}(i.a.Component),S=function(e){function t(){return Object(r.a)(this,t),Object(d.a)(this,Object(y.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{id:"app"},i.a.createElement(f,null))}}]),t}(i.a.Component);n(166),n(167),n(168);l.a.render(i.a.createElement(S,null),document.getElementById("root"))},71:function(e,t,n){e.exports=n.p+"static/media/multimedia_button_click_023.f1f653e9.mp3"},72:function(e,t,n){e.exports=n(169)}},[[72,1,2]]]);
//# sourceMappingURL=main.d11345b6.chunk.js.map