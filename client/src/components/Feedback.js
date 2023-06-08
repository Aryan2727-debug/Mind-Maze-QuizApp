import React from "react";
import "../styles/Main.css";

function Feedback(){
    return(
        <div className="container">
            <h1 className='title text-light'>MIND MAZE</h1>

            <h2 style={{color : "#fff", display : "flex", justifyContent : "center", alignItems : "center"}}>We really appreciate your Feedback!</h2>

            <form action="/feedback" method="POST">
               <label style={{color : "#fff", position : "absolute", top : "109%", left : "28%"}}>Name : </label>
               <input type="text" placeholder="Enter your name" name="name" style={{position : "absolute", top : "105%", left : "37%", width : "300px", height : "45px"}}/>

               <label style={{color : "#fff", position : "absolute", top : "140%", left : "28%"}}>Email : </label>
               <input type="email" placeholder="Enter your email" name="email" style={{position : "absolute", top : "136%", left : "37%", width : "300px", height : "45px"}}/>

               <label style={{color : "#fff", position : "absolute", top : "171%", left : "28%"}}>Feedback : </label>
               <input type="text" placeholder="Give your Feedback" name="feedback" style={{position : "absolute", top : "162%", left : "40%", width : "300px", height : "85px"}}/>

               <button type="submit" className='btn next' style={{position : "absolute", top : "210%", left : "28%"}}>Submit</button>
            </form>
        </div>
    );
};

export default Feedback;