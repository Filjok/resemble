
import './App.css';
import Navbar from './Navbar';
import Mail from './Mail';
import Sent from './Sent';
import Compose from './Compose';
import { Route,Routes } from 'react-router-dom';

var database = {

  0:{
    username:'test@mail.com',
    password:1234,
    sentmail:{
      0:['test123@mail.com','cc','loremmmsfsfdfasfaf']
    },
  }


}
localStorage.setItem('database',JSON.stringify(database))
console.log(localStorage.getItem('database'))


function App() {
  return (
    <>
      
        <Navbar />
        <Routes>
          <Route path='/' element = {<Mail />} />
          <Route path='/sent' element = {<Sent />} />
          <Route path='/draft' element = {<Mail />} />
          <Route path='/Compose' element = {<Compose />} />
        </Routes>

        
         

      

    </>
  );
}

export default App;
