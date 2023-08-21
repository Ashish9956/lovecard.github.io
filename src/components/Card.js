import { useState } from "react";
function Card({id,image,info,price,name,removeTour}){
    const[readmore,setreadmore]=useState(false);
    const description=readmore?info:`${info.substring(0,180)}...`;
    function readmoreHandler(){
        setreadmore(!readmore);
    }
    return(
    <div className="card">
        <img src={image} className="image"></img>
        <div className="info">
        <div className="tour-detail">
           <h4 className="tour-price">₹{price}</h4>
           <h4 className="tour-name">
            {name}
           </h4>
        </div>
        <div className="desc">
            {description}
            <span className="read-more" onClick={readmoreHandler}>
             {readmore?`show less`:`read more`}
            </span>

        </div>
        
        </div>
        <button className="btn-red" onClick={()=>removeTour(id)}>
           Not interested
        </button>
    </div>
    );
}

export default Card;