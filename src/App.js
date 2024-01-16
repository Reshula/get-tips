
import { useEffect, useState } from 'react';
import './App.css';
import video from './video.mp4';
import image from './icons8-submit-64.png'

function App() {
  const [tips, setTips] = useState("");

useEffect(() =>{
  getActivity();
}, [] )
const getActivity = async() =>{
  const response = await fetch(`https://www.boredapi.com/api/activity`);
  const data = await response.json();
  console.log(data.activity);
  setTips(data.activity)
}

  return (
    <div>
      <div className='container'>
        <h2>Are you borring ?</h2>
        <h3>Take this tips to change your day</h3>
        <video autoPlay muted loop>
    <source src={video} type="video/mp4" /></video>
    <h4>{tips}</h4>
    <button onClick={() => getActivity()}> <img src={image} alt="icon"/> </button>

      </div>
    </div>
  );
}

export default App;
