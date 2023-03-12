import React from "react"
import { LanguageContext } from "./LanguageContext"

export class DisplayLanguage extends React.Component {
    state = {
        language: "en"
    }

    handleLanguageChange = (event) => {
        this.setState({
            language: event.target.value
        })
    }
  
    render() {
        return(
            
            <LanguageContext.Provider value={this.state.language}>
                <div>
                    <select value={this.state.language} onChange={this.handleLanguageChange}>
                        <option value="en">Inglese</option>
                        <option value="it">Italiano</option>
                    </select>
                    <LanguageContext.Consumer>
                    {( language ) => (
                        <div>
                        <h1>Lingua selezionata: {language}</h1>
                        </div>
                    )}
                    </LanguageContext.Consumer>
                </div>
            </LanguageContext.Provider>
        )
    }
}



