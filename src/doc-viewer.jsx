import React, { PureComponent } from 'react';
import { findDOMNode } from 'react-dom';
import PropTypes from 'prop-types';
import { Editor } from 'react-draft-wysiwyg';
import hljs from 'highlightjs';
import { getCustomStyleMap } from 'draftjs-utils';

import styleMap from './custom-styles';
import '../node_modules/highlightjs/styles/darcula.css';

function init() {
    hljs.configure({
        tabReplace: '    ',
        languages: ['javascript']
    });
}

// TODO: large blocks of code might block browser,
// moving this to web worker will speed it up.
function highlightCode(element) {
    const domNode = findDOMNode(element);
    const nodes = domNode.querySelectorAll('pre span[data-text]');
    if (nodes.length > 0) {
        for (let i = 0; i < nodes.length; i = i + 1) {
            hljs.highlightBlock(nodes[i]);
        }
    }
}

class DocumentViewer extends PureComponent {
    setEditorReference = ref => {
        this.editorReference = ref;
    };

    componentDidUpdate() {
        init();
        highlightCode(this.editorReference);
    }

    render() {
        const styleMap = getCustomStyleMap();

        return (
            <div className="document-viewer">
                <Editor
                    editorState={this.props.editorState}
                    readOnly
                    toolbarHidden
                    editorRef={this.setEditorReference}
                    customStyleMap={styleMap}
                />
            </div>
        );
    }
}

export default DocumentViewer;
