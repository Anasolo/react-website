import React, { useEffect, useState } from 'react';
import Article from "../Article"
import Recipe from '../Recipe'



const Card = () => {
    const [active, setActive] = useState(true)





    
    const goTo = () => {
        console.log(333333333)
        setActive(false)
      }

    const style = {marginRight:'25px'}

    return (
        <div style={style}>
            <div >

                {active ?
                    (
                        <Article
                            img="https://image.freepik.com/free-photo/cappuccino-coffee-glass-with-spoon-wooden-table_23-2147908372.jpg"
                            name="Capuccino"
                            text="click for recipe"
                            onClick={() => goTo()}
                        />
                        // <button onClick={() =>goTo()}>tttt</button>
                        // <img src="https://image.freepik.com/free-photo/cappuccino-coffee-glass-with-spoon-wooden-table_23-2147908372.jpg" 
                        // onClick={() =>goTo()}></img>
                    ) :
                    (
                        <Recipe setActive={setActive} name="avto00099oo" />
                    )}

                {/* <Article
                    img="https://www.nespresso.com/ncp/res/uploads/recipes/nespresso-recipes-Latte-Macchiato.jpg"
                    name="Latte Macchiato"
                    text="click for recipe"
                    onClick={() => goTo()} /> */}
            </div>
        </div>
    )
}
export default Card