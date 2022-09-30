import { $getRoot, $getSelection } from 'lexical';
import { useEffect, useRef } from 'react';

import { LexicalComposer } from '@lexical/react/LexicalComposer';
import { PlainTextPlugin } from '@lexical/react/LexicalPlainTextPlugin';
import { RichTextPlugin } from '@lexical/react/LexicalRichTextPlugin';
import { ContentEditable } from '@lexical/react/LexicalContentEditable';
import { HistoryPlugin } from '@lexical/react/LexicalHistoryPlugin';
import { OnChangePlugin } from '@lexical/react/LexicalOnChangePlugin';
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import TreeViewPlugin from './plugins/TreeViewPlugin';
import ToolbarPlugin from './plugins/ToolbarPlugin';
import { $generateHtmlFromNodes } from '@lexical/html';

const theme = {
  ltr: 'ltr',
  rtl: 'rtl',
  placeholder: 'editor-placeholder',
  paragraph: 'editor-paragraph',
  text: {
    underline: 'underline',
  },
};

// When the editor changes, you can get notified via the
// LexicalOnChangePlugin!
function onChange(editorState: any) {
  editorState.read(() => {
    // Read the contents of the EditorState here.
    const root = $getRoot();
    const selection = $getSelection();

    console.log(root, selection);
  });
}

function SavePlugin() {
  const [editor] = useLexicalComposerContext();

  const onSubmit = () => {
    console.log(JSON.stringify(editor.getEditorState()));
  };

  return (
    <button className='bg-blue-500 p-2 text-white' onClick={onSubmit}>
      Submit
    </button>
  );
}

// Lexical React plugins are React components, which makes them
// highly composable. Furthermore, you can lazy load plugins if
// desired, so you don't pay the cost for plugins until you
// actually use them.
function MyCustomAutoFocusPlugin() {
  const [editor] = useLexicalComposerContext();

  useEffect(() => {
    // Focus the editor when the effect fires!
    editor.focus();
  }, [editor]);

  return null;
}

// Catch any errors that occur during Lexical updates and log them
// or throw them as needed. If you don't throw them, Lexical will
// try to recover gracefully without losing user data.
function onError(error: any) {
  console.error(error);
}

function Editor() {
  const editorStateRef = useRef();

  const loadContent = () => {
    return '{"root":{"children":[{"children":[{"detail":0,"format":1,"mode":"normal","style":"","text":"bold","type":"text","version":1}],"direction":"ltr","format":"","indent":0,"type":"paragraph","version":1},{"children":[{"detail":0,"format":2,"mode":"normal","style":"","text":"italic","type":"text","version":1}],"direction":"ltr","format":"","indent":0,"type":"paragraph","version":1},{"children":[{"detail":0,"format":8,"mode":"normal","style":"","text":"underline","type":"text","version":1}],"direction":"ltr","format":"","indent":0,"type":"paragraph","version":1}],"direction":"ltr","format":"","indent":0,"type":"root","version":1}}';
  };

  const initialConfig = {
    namespace: 'MyEditor',
    theme,
    onError,
    editorState: loadContent(),
  };

  return (
    <LexicalComposer initialConfig={initialConfig}>
      <div className=''>
        <ToolbarPlugin />
        <div className='font-base relative mb-4 border font-normal'>
          <RichTextPlugin
            contentEditable={
              <ContentEditable className='editor-input h-64 p-2 outline-none ' />
            }
            placeholder={<Placeholder />}
          />
        </div>
        <OnChangePlugin onChange={onChange} />
        <SavePlugin />
        <HistoryPlugin />
        <MyCustomAutoFocusPlugin />
        <TreeViewPlugin />
      </div>
    </LexicalComposer>
  );
}

function Placeholder() {
  return (
    <div className='text pointer-events-none absolute top-0 p-2 text-gray-500'>
      Start typing..
    </div>
  );
}

export default Editor;
