import React, { Component } from 'react';
import { EditorState, ContentState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import { getCustomStyleMap } from 'draftjs-utils';
import customStyleMap from './custom-styles';

import '../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

class DocumentEditor extends Component {
    onChange = editorState => {
        this.setState({ editorState });
        this.props.onChange(editorState);
    };

    render() {
        const styleMap = getCustomStyleMap();

        return (
            <Editor
                editorState={this.props.editorState}
                wrapperClassName="document-wrapper"
                editorClassName="document-editor"
                toolbarClassName="document-toolbar"
                onEditorStateChange={this.onChange}
                customStyleMap={styleMap}
            />
        );
    }
}

export default DocumentEditor;
