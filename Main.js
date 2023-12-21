import React from "react";

const Main = () => {
    let date = new Date();

    return(
        <div className="main">
            <div className="col col1">
                <h2>Your Home</h2>
                <p>Where we love is home - home that our feet may leave, but not our hearts.
                 Oliver Wendell Holmes, Sr</p>
                <button type="button">More</button>
            </div>
            <div className="col">
                <div className="card card1"></div>
                <div className="card card2"></div>
                <div className="card card3"></div>
                <div className="card card4"></div>
                <div className="card card5"></div>
                <div className="card card6"></div>
         <footer className='footer bg-black flex flex-center' id = "footer">
           <div className='container flex flex-center w-100'>
               <div className='grid footer-content text-center'>
                   <p className='text'></p>
                   <span className='text'>&copy; {date.getFullYear().toString()} RealEstateInfo</span>
                   <p>landdestination@gmail.com</p>
               </div>
           </div>
       </footer>             
            </div>

       
       </div>
    );
}
export default Main;