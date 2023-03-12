import React from 'react';
import { ClickCounter } from './ClickCounter';
import { ClickTracker } from './ClickTracker';
import { Counter } from './Counter';
import { Hello } from './Hello';
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
            </div>
        )
    }
}