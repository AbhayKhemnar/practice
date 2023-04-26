import './card.css';

export default function Card(CardDetails) {
    const {
        Name,
        img,
        Describtion,
        price,
        rating
    }= CardDetails
function AlertBox(){
    alert( "Product Name is : "+ Name +" , Which is "+ Describtion+" has of rupees "+(price*80) +" is added in the cart , please proceed to pay !!! " )
}

    return(
    <div class="Card">
    <div class="Upper_Section">
       <img class="img" src={img} alt={Name} height='100px' width='120px'/>
    </div>
    <div class="Lower_Section">
        <h2 class="Name" > {Name} </h2>
        <p class="Describtion"> {Describtion}</p>
        <h2 class="Price"> ${price}</h2>
        <p class="Rating">Rating:{rating}</p>
        <button class="button" onClick={AlertBox} >Add To crate</button>
    </div>
       
    
   </div>
    )
}