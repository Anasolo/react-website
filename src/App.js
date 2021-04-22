import React, { useEffect, useState } from 'react';
import NavBar from "./components/Navbar"
import SideBar from './components/Sidebar'
import Article from "./components/HomePage/Article"
import Recipe from './components/HomePage/Recipe'
import Card from './components/HomePage/card'


function App() {

  const [active, setActive] = useState(true)


  useEffect(() => {
    // This effect uses the `value` variable,
    // so it "depends on" `value`.
    console.log('00000000')
  }, [])


  const goTo = () => {
    console.log(333333333)
    setActive(false)
  }
  return (

    <>
      <NavBar />
      <SideBar />
      <div style={{display:"flex",flexWrap:'wrap', marginLeft:'200px'}}>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>


    </>
  );
}

export default App;
