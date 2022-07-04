import React, { Component } from 'react';
import { EditorState, convertFromRaw, convertToRaw } from 'draft-js';
import Editor from './doc-editor';
import DocumentViewer from './doc-viewer';
import raw from './raw.json';
import './doc.css';

class DocumentContainer extends Component {
    state = {
        editorState: EditorState.createWithContent(convertFromRaw(raw)),
        //         editorState: EditorState.createEmpty(),
        viewerState: EditorState.createEmpty()
    };

    onChange = editorState => {
        this.setState({ editorState });
    };

    onClick = () => {
        this.setState(state => ({
            ...state,
            viewerState: state.editorState
        }));
    };

    logState = () => {
        console.log(
            JSON.stringify(
                convertToRaw(this.state.viewerState.getCurrentContent())
            )
        );
    };

    render() {
        return (
            <div>
                <h2>Document Editor</h2>
                <Editor
                    editorState={this.state.editorState}
                    onChange={this.onChange}
                />
                <p>
                    <button onClick={this.onClick}>Show In Viewer</button>
                    <button onClick={this.logState}>Log State</button>
                </p>
                <DocumentViewer editorState={this.state.viewerState} />
            </div>
        );
    }
}

export default DocumentContainer;
