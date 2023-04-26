import {useEffect, useState} from 'react'
import {useParams, Link} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import BusinessCard from '../BusinessCard';

import Navigation from "../../Navigation";
import { getBusiness, fetchBusiness, fetchBusinesses, getBusinesses  } from '../../../store/businesses';
import './BusinessShow.css'


const BusinessShow = (props) => {
    const dispatch = useDispatch();
    const {busId} = useParams();
    console.log('busId in BusinessShow', busId)
    let business = useSelector(getBusiness(busId));
    const [id, setId] = useState(busId)
  
    // useEffect(()=>{
    //     if (busId) {

    //    dispatch(fetchBusiness(busId))
    //     }
    // },[dispatch])

    return (
       
        <>
        <Navigation showFlag={'index'}/>
        <div id="businessShowContainer">
            <div id="heroContainer">
                <div id="businessGroup">
                  <BusinessCard business={business}/> 
                 </div>

            </div>
            <div id="lowerContainer">
                <div id="l-1"></div>
                <div id="l-2">
                    <Link to={`/newReview/${business.id}`}>
                     <button className="blue-button" ><i className="fa-regular fa-star"></i>Write a review</button>
                     </Link>
                     <button>Add Photo</button>

                </div>
                <div id="l-3"></div>
                <div id="l-4"></div>
                
            </div>


        </div>
           
        </>
    )
}

export default BusinessShow;