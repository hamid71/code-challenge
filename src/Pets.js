import React from 'react'
import { petsData } from './petsData';
export const Pets = () => {
   
  return (
    <>
        <h2 className='pets-container'>Welcome to Pets owner Gender page</h2>
        {petsData.map((data,key)=>(
                <div key={key}>
                    { data.pets && <h3> Owner Gender: { data.gender}</h3>}
                    <ul>
                        {data.pets?.sort((a,b)=>a.name.localeCompare(b.name)).map((pet,key)=>{
                           return(
                            <li key={key}>
                               {pet.type==="Cat" && <span>Cat Name: {"   "}<b>{pet.name}</b></span>}
                            </li>
                           ) 
                        }
                            
                        )}
                    </ul>
                  
                </div>
              
        ))}
    </>
    
  )
}

