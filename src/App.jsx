import './App.css'
import './index.css'
import Cash from './Section/Cash';
import Hero from './Section/Hero';
import Payment from './Section/Payment';
import Banking from './Section/Banking';
import Boost from './Section/Boost';
import Investing from './Section/Investing';


function App() {
  return (
    <>
      <Hero />  
      <Cash />
      <Payment />
      <Banking />
      <Boost />
      <br>
      </br>
      <br></br>
      {/* <br></br> */}
      <Investing />
    </>
  
    )

}

export default App;