import React from 'react';
import { ClickCounter } from './ClickCounter';
import { ClickTracker } from './ClickTracker';
import { Counter } from './Counter';
import { Hello } from './Hello';
import { InteractiveWelcome } from './InteractiveWelcome';
import { Login } from './Login';
import { Welcome } from './Welcome';

export class App extends React.Component {
    render() {
        return(
            <div>
                <Hello />
                <hr/>
                <br/>
                <Welcome name={"John"} age={33} />
                <hr/>
                <br/>
                <Counter initialValue={0} incrementValue={1} initialInterval={1000} />
                <hr/>
                <br/>
                <ClickCounter />
                <hr/>
                <br/>
                <ClickTracker />
                <hr/>
                <br/>
                <InteractiveWelcome />
                <hr/>
                <br/>
                <Login onLogin={(state) => { console.log(state); }}/>
            </div>
        )
    }
}