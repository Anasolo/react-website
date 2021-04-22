import React, { useEffect, useState } from 'react';

const Article = (props) => {


  useEffect(() => {
    // This effect uses the `value` variable,
    // so it "depends on" `value`.
    console.log(111111111, props)
  }, [])  


  const myFun = () => {
    console.log(222222222)
    props.onClick() 
  }
    return(
        
        <div className="article" 
            onClick={myFun}>
            <img src = {props.img} alt="coffee"/>
            <h3>{props.name}</h3>
            <p>{props.text}</p>
        </div>
    )
}
export default Article