import React from 'react';
import { Age } from "./Age";

export class Welcome extends React.Component {
    render(){
        return(
            <div>
                {this.props.age > 18 && this.props.age < 65 && <Age age={this.props.age}/>}
            </div>
        ) 
    }
}


Welcome.defaultProps = {
    name: "Guest"
  };