import React from "react";
import Trous from "./components/Trous"
import data from './data';
import { useState } from "react";

function App() {
  const[tours,setTrous]=useState(data);
  function removeTour(id){
    const newTours=tours.filter(tour=>tour.id!==id);
    setTrous(newTours);
  }
  if(tours.length==0){
    return(
      <div className="refresh">
        <h2>No tours Left</h2>
        <button  className="btn-white" onClick={()=>setTrous(data)}>Refresh</button>

      </div>
    );
  }
  return (
    <div className="App">
      {/* // yh data pass akr diya as props */}
      <Trous tours={tours} removeTour={removeTour}></Trous>
    </div>
  );
}

export default App;
