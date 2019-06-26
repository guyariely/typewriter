import React from 'react';
import { Editor, EditorState, RichUtils, convertToRaw, convertFromRaw } from 'draft-js';
import buttonSound from '../../sounds/multimedia_button_click_023.mp3';

const styleMap = {
  'UNDERLINE': {
    textDecoration: 'underline dashed var(--primary)',
  },
  'ITALIC': {
    color: 'var(--primary)'
  }
};

class TextEditor extends React.Component {

  constructor(props) {
    super(props);
    this.handleKeyCommand = this.handleKeyCommand.bind(this);
    this.toggleBlockType = this.toggleBlockType.bind(this);
    this.toggleInlineStyle = this.toggleInlineStyle.bind(this);

    this.state = {
      editorState: EditorState.createEmpty(),
      mute: true
    };

    const welcomeNote_JSONstring = JSON.stringify({"blocks":[{"key":"b6gr3","text":"Welcome to TypeWriter!","type":"unstyled","depth":0,"inlineStyleRanges":[{"offset":0,"length":22,"style":"ITALIC"},{"offset":0,"length":22,"style":"BOLD"}],"entityRanges":[],"data":{}},{"key":"smp4","text":" ","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"dad9e","text":"This is a simple text editor, made to look like the input text was written with a typewriter.","type":"unstyled","depth":0,"inlineStyleRanges":[{"offset":0,"length":93,"style":"BOLD"}],"entityRanges":[],"data":{}},{"key":"18f8u","text":"","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"7i5ot","text":"The editor supports three inline styles, through the keyboard shorcuts:   ","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"bo6uk","text":"Bold - ctrl+B","type":"ordered-list-item","depth":0,"inlineStyleRanges":[{"offset":0,"length":5,"style":"BOLD"}],"entityRanges":[],"data":{}},{"key":"3ghp","text":"Underline - ctrl+U","type":"ordered-list-item","depth":0,"inlineStyleRanges":[{"offset":0,"length":9,"style":"UNDERLINE"}],"entityRanges":[],"data":{}},{"key":"3138k","text":"Colored - ctrl+I","type":"ordered-list-item","depth":0,"inlineStyleRanges":[{"offset":0,"length":7,"style":"ITALIC"}],"entityRanges":[],"data":{}},{"key":"850bj","text":"","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"5cu28","text":"","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}});
    
    if (!window.localStorage.getItem('content')) {
      localStorage.setItem('content', welcomeNote_JSONstring);
    } 

    const content = window.localStorage.getItem('content');

    this.state.editorState = EditorState.createWithContent(
      convertFromRaw(JSON.parse(content))
    );  
 
    this.onChange = editorState => { 

      const contentState = editorState.getCurrentContent();
      this.saveContent(contentState);
      this.setState({editorState});

      if (!this.state.mute) {
        const sound = new Audio(buttonSound);
        sound.play();
      }
    };

    this.setDomEditorRef = ref => this.domEditor = ref;
  }

  componentDidMount() {
    this.domEditor.focus();
  }

  handleKeyCommand(command) {
    const newState = RichUtils.handleKeyCommand(
      this.state.editorState,
      command
    );
    if (newState) {
      this.onChange(newState);
      return 'handled';
    }
    return 'not-handled';
  }

  toggleBlockType(blockType) {
    this.onChange(
      RichUtils.toggleBlockType(
        this.state.editorState, blockType
      )
    );
  }

  toggleInlineStyle(style) {
    this.onChange(
      RichUtils.toggleInlineStyle(
        this.state.editorState, style
      )
    );
  }

  saveContent = (content) => {
    window.localStorage.setItem('content', JSON.stringify(convertToRaw(content)));
  }

  render() {

    return (
      <div id="editor-container">
        <main className="editor">
          <Editor 
              editorState={this.state.editorState}
              customStyleMap={styleMap}
              handleKeyCommand={this.handleKeyCommand}
              onChange={this.onChange}
              ref={this.setDomEditorRef}
            />
        </main>
      </div>
    );
  }
}

export default TextEditor;