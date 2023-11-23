import React from "react"

export default class Editor extends React.Component{
    constructor(props) {
        super(props);
        // to bind the method with event handler without (). 
        this.handleChange = this.handleChange.bind(this);

        this.state =
         { 
            value: ''
        };
    }

    handleChange(event){
        this.setState({value: event.target.value});
    }

    render() {
        return(
        <div className="container">
            <div className="divi input">
              <h3>Input</h3>
              {/* <!-- call the handleChanges method in the onChange event and set the default value as empty--> */}
                <textarea className="input-text" onChange={this.handleChange} defaultValue={this.state.value}/>
            </div>
            <div className="divi output">
              <h3>Pro Note</h3>
              <div className="output-text">{this.state.value}</div>
            </div>                
        </div>
        )
    }

}