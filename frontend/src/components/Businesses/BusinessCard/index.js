import './BusinessCard.css'

const BusinessCard = ({business}) => {
    return (
        <>
           <div id="businessCardContainer">
               <div id="imageContainer">
                   <p>{business.cost}</p>
               </div>
               <div id="reviewContainer">
                   <p>{business.name}</p>

               </div>
           </div>
        
        </>
    )
}

export default BusinessCard;