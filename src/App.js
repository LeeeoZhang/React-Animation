import React, {Component} from 'react'
import code from './code'
import CodeEditor from './CodeEditor'
import ShowEdit from './ShowEdit'

export default class App extends Component {
    constructor () {
        super()
        this.state = {
            currentCode: '',
            fullCode: code
        }
    }


    componentWillMount () {
            let n = 0
            let timer = setInterval(() => {
                let newCode = this.state.fullCode.substring(0, n)
                this.setState({
                    currentCode: newCode,
                })
                n++
                if (this.state.currentCode.length === this.state.fullCode.length) {
                    clearInterval(timer)
                }
            }, 50)
    }

    render () {
        let pikachuHTMLString =
            `<div id="container">
    <div class="nose"></div>
    <div class="eye eye-left"></div>
    <div class="eye eye-right"></div>
    <div class="upperlips">
        <div class="upperlips-left"></div>
        <div class="upperlips-right"></div>
    </div>
    <div class="lowerlips-wrap">
        <div class="lowerlips"></div>
    </div>
    <div class="face face-left"></div>
    <div class="face face-right"></div>
</div>`
        return (
            <div className="App">
                <CodeEditor currentCode={this.state.currentCode}
                            fullCode={code[this.state.part]} allCode={this.state.fullCode}/>
                <ShowEdit pikachuHTMLString={pikachuHTMLString}/>
            </div>
        )
    }
}

