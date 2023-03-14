import React, { useState } from 'react';
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
import { CarDetails } from './CarDetails';
import { LanguageContext } from "./LanguageContext"



export function App() {

    const [language, setLanguage] = useState("en")
    

    const handleLanguageChange = (event) => {
        setLanguage(event.target.value)
    }

    return(
        <Container title="Esercizi React">

        <div>

        <LanguageContext.Provider value={language}>
            <div>
                <select value={language} onChange={handleLanguageChange}>
                    <option value="en">Inglese</option>
                    <option value="it">Italiano</option>
                </select>
            </div>

            <DisplayLanguage/>
        </LanguageContext.Provider>

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

            <br/>
            <hr/>
            <CarDetails initialData={{model: "Fiat", year: 2000, color: "black"}}/>
            
        </div>
        
        </Container>
    )

}