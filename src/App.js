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
import { DisplayLanguage } from './DisplayLanguage';
import { Sum } from './Sum';
import { GithubUser } from './GithubUser';
import { GithubUserList } from './GithubUserList';
import { MyCustomHookLogin } from './MyCustomHookLogin';
import { CustomHookGithubUser } from './CustomHookGithubUser';


export function App() {

    return(
        <Container title="Esercizi React">

        <div>
            <DisplayLanguage/>

            <Hello />
            <hr/>
            <br/>
            <Welcome name="John" age={33} />
            <hr/>
            <br/>
            <Counter  />
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
            <Login />
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

            <hr/>
            <br/>
            <Sum />

            <hr/>
            <br/>
            <GithubUser username="silviosmc"/>

            <hr/>
            <br/>
            <GithubUserList />

            <br/>
            <hr/>
            <MyCustomHookLogin />

            <br/>
            <hr/>
            <CustomHookGithubUser />
            
        </div>
        
        </Container>
    )

}