import React from 'react';
import './home.css';



function Home() {
  return (
    <>
    <header> 
      <nav>
        <div className = "left"> 
           <div className = "navlogo"> 
                <img src="./logo.jpeg" alt="logo"/>   
            </div>
            <div className="nav_menu"> 
                <a href = {"/Login.js"} > Login </a>
            </div>
        </div>
        
        


      </nav>
    </header>
    
    </>
  );
}
export default Home;