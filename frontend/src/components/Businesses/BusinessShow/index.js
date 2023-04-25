import {useParams} from 'react-router-dom';
import {useSelector} from 'react-redux';

import Navigation from "../../Navigation";
import { getBusiness, fetchBusiness  } from '../../../store/businesses';


const BusinessShow = (props) => {
    const businessId = useParams();
    let business = useSelector(getBusiness(businessId));
    console.log('Business Show')

    return (
       
        <>
        <Navigation showFull={true}/>
        <div id="businessShowContainer">
            <div id="heroContainer">
                <div id="businessGroup">



                </div>

            </div>


        </div>
           
        </>
    )
}

export default BusinessShow;