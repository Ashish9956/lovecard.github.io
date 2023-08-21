import Card from './Card'
function Trous({tours,removeTour}){
    
 return(
   <div className='container'>
    <div>
    <h2 className='title'> Plan With Love</h2>
    </div>
    
    <div className='cards'>
    {
     tours.map((tour)=>{
        return(
            // yh pr object ki copy pass kar di {...tours}
            <Card {...tour} removeTour={removeTour}></Card>
        )
     })
    }
    </div>
</div>
 );
}
export default Trous;