import React from 'react'
import Prism from 'prismjs'

export default class CodeEditor extends React.Component {
    constructor (props) {
        super(props)
    }

    componentDidUpdate () {
        this.codeEditor.scrollTop = 100000
    }

    createMarkup (htmlString) {
        return {__html: htmlString}
    }

    render () {
        let highlightedCode =Prism.highlight(this.props.currentCode, Prism.languages.css, Prism.languages.html)
        return (
            <div className="codeEditor" ref={(codeEditor) => {
                this.codeEditor = codeEditor
            }}>
                <style>{this.props.currentCode}</style>
                <pre dangerouslySetInnerHTML={this.createMarkup(highlightedCode)}/>
            </div>

        )
    }

}