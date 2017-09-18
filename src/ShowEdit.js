import React from 'react'

export default class ShowEdit extends React.Component {
    constructor (props){
        super(props)
    }
    createMarkup (htmlString) {
        return {__html: htmlString}
    }
    render(){
        let pikachuHTMLString = this.props.pikachuHTMLString
        let pikachuHTML = this.createMarkup(pikachuHTMLString)
        return (
            <div className="showEdit" dangerouslySetInnerHTML={pikachuHTML}/>
        )
    }
}