import React, { useState, useEffect } from 'react';
import Header from "./compenents/Header";

function App() {
  const [isDark,setIsDark]= useState(false);

  useEffect(() => {
    if (isDark) {
      document.body.classList.add('bg-very-dark-blue-bg-dark');
      document.body.classList.remove('bg-white');
    } else {
      document.body.classList.add('bg-white');
      document.body.classList.remove('bg-very-dark-blue-bg-dark');
    }
  }, [isDark]);

  function toggleDark(){
    setIsDark(!isDark)
  }

  return (
    <>
    <Header isDark={isDark} toggleDark={toggleDark}></Header>
     
    </>
  )
}

export default App
