import React from 'react';
import { Age } from "./Age";

export class Welcome extends React.Component {
    render(){
        return(
            <div className='welcome'>
                <h1>Hello {this.props.name}</h1>
                <Age age={this.props.age}/>
            </div>
        ) 
    }
}


Welcome.defaultProps = {
    name: "Guest"
  };