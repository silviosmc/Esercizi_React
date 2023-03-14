import React, { useContext } from "react"
import { LanguageContext } from "./LanguageContext"

export function DisplayLanguage() {
    

  
    const language = useContext(LanguageContext)

    return(
        <h1>Lingua selezionata: {language}</h1>
    )

}


