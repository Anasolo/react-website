import React from 'react'

const Recipe = (props) =>{
    
    
    

    return(
        <div onClick={() => props.setActive(true)} style={{width:'350px', height: '309px'}}>
            <h2 >Ingredients</h2>
            <hr></hr>
            <h3>{props.name}</h3>
            <ul>
                <li>2 tablespoons finely ground dark roast coffee</li>
                <li>4 ounces water</li>
            </ul>
            <h3>For the Foamed Milk</h3>
            <ul>
                <li>4 ounces milk</li>
            </ul>
        </div>
    )
}
export default Recipe