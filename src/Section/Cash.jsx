import React from 'react';

function Cash() {
  const containerStyle = {
    backgroundColor: 'black',
    color: 'white',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
  };

  const paragraphStyle = {
    maxWidth: '800px',
    textAlign: 'center',
  };

  return (
    <div style={containerStyle}>
      <img className="Line-img" src="https://i.ibb.co/L5YQ7d5/Vector-3.png" alt="Line" />
      <img className="Cube-img" src="https://i.ibb.co/vjfjpsv/intro-cube-1.png" alt="Cube" />
      <img className="Stairs-img" src="https://i.ibb.co/nPvry3N/intro-stairs-1.png" alt="Stairs" />
      <h1 className="Cash-img">CASH</h1>
      <img className="Mobo-img" src="https://i.ibb.co/phyXBw9/intro-phone-1.png" alt="Mobile Phone" />
      <img className="intro-img" src="https://i.ibb.co/Lpw0P6p/intro-cubes-1-1.png" alt="Intro Cubes" />
      <img className="Pillar-img" src="https://i.ibb.co/ZxkWkBY/intro-pillar-1.png" alt="Pillar" />
      <h1 className="App-img">APP</h1>
      <button className="custom-button">
        <img className="Apple-img" src="https://i.ibb.co/BCRyKzv/Vector.png" alt="Apple" /> APP STORE
      </button>
      <button className="custom-button-2">
        <img className="Play-img" src="https://i.ibb.co/d4JrP9L/Vector-1.png" alt="Play" /> GOOGLE PLAY
      </button>
      <img className="Arr-img" src="https://i.ibb.co/7NjtQFs/Vector-2.png" alt="Arrow" />
      <p className="Para-img" style={paragraphStyle}>
        Brokerage services by Cash App Investing LLC, member FINRA / SIPC.
        See our BrokerCheck. Investing involves risk; you may lose money. Bitcoin trading offered by Cash App.
        Cash App Investing does not trade bitcoin and Cash App is not a member of FINRA or SIPC.
        Cash App facilitates banking services through Sutton Bank and Lincoln Savings Bank, Members FDIC.
      </p>
      <img className="Msg-img" src="https://i.ibb.co/wcSrbVK/Frame.png" alt="Message" />
      <img className="Twt-img" src="https://i.ibb.co/8bR0B4j/Frame-1.png" alt="Twitter" />
      <img className="Insta-img" src="https://i.ibb.co/pWSYmYY/Frame-2.png" alt="Instagram" />
    </div>
  );
}

export default Cash;







// function Cash() {
//     return (
//         <section className='text-center vh-100 container-fluid'>
//             <div>
//             <img className="Line-img" src="https://i.ibb.co/L5YQ7d5/Vector-3.png"></img>
//                 <img className="Cube-img" src="https://i.ibb.co/vjfjpsv/intro-cube-1.png"></img>
//                 <img className="Stairs-img" src="https://i.ibb.co/nPvry3N/intro-stairs-1.png"></img>
//                 <h1 className="Cash-img">CASH</h1>
//                 <img className="Mobo-img" src="https://i.ibb.co/phyXBw9/intro-phone-1.png"></img>
//                 <img className="intro-img" src="https://i.ibb.co/Lpw0P6p/intro-cubes-1-1.png"></img>
//                 <img className="Pillar-img" src="https://i.ibb.co/ZxkWkBY/intro-pillar-1.png"></img>
//                 <h1 className="App-img">APP</h1>
//                 <button class="custom-button">
//                     <img className="Apple-img" src="https://i.ibb.co/BCRyKzv/Vector.png"></img>APP STORE
//                 </button>

//                 <button class="custom-button-2">
//                     <img className="Play-img" src="https://i.ibb.co/d4JrP9L/Vector-1.png"></img>GOOGLE PLAY
//                 </button>

//                 <img className="Arr-img" src="https://i.ibb.co/7NjtQFs/Vector-2.png"></img>
//                 <p className="Para-img" >Brokerage services by Cash App Investing LLC, member FINRA / SIPC.
//                     See our BrokerCheck. Investing involves risk; you may lose money. Bitcoin trading offered by Cash App. Cash App Investing does not trade bitcoin and Cash App is not a member of FINRA or SIPC. Cash App facilitates banking services through Sutton Bank and Lincoln Savings Bank, Members FDIC.</p>
//                 <img className="Msg-img" src="https://i.ibb.co/wcSrbVK/Frame.png"></img>
//                 <img className="Twt-img" src="https://i.ibb.co/8bR0B4j/Frame-1.png"></img>
//                 <img className="Insta-img" src="https://i.ibb.co/pWSYmYY/Frame-2.png"></img>
//                 {/* <img className="Line-img" src="https://i.ibb.co/L5YQ7d5/Vector-3.png"></img> */}
//             </div>

//         </section>
//     );
// }

// export default Cash;