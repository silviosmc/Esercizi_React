import React from 'react';
import './index.css'
import { ClickCounter } from './ClickCounter';
import { ClickTracker } from './ClickTracker';
import { Counter } from './Counter';
import { Hello } from './Hello';
import { InteractiveWelcome } from './InteractiveWelcome';
import { Login } from './Login';
import { TodoList } from './TodoList';
import { UncontrolledLogin } from './UncontrolledLogin';
import { Welcome } from './Welcome';
import { Container } from './Container';

export class App extends React.Component {
    render() {
        return(
            <Container title="Esercizi React">

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
                <hr/>
                <br/>
                <UncontrolledLogin />
                <hr/>
                <br/>
                <TodoList render={(items, handleRemoveItem) => (
                    <ul>
                        {items.map((item, index) => (
                            <li key={index}>
                                {item + " "}
                                <button onClick={() => handleRemoveItem(index)}>Remove</button>
                            </li>
                        ))}
                    </ul>
                    )} 
                />
            </div>
            
            </Container>
        )
    }
}