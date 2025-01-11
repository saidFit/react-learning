import React, { useState } from 'react'
import { Etudiant } from "../data/Etudiant"
import "../style/Main.css"

function Main() {

    const [data,setUseData] = useState(Etudiant)

    console.log(data);
    
    if(data){
     return (
    <div>
        <h1 className='name'>
            <span className='bonjour'>Bonjour</span>
            <span className='prenom'>{data[0].prenom}</span>
        </h1>
    </div>
  )   
    }else{
       return <p>loading...</p>
    }
  
}

export default Main