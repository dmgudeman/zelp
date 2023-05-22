import { useState, CSSProperties } from "react";
import GridLoader from "react-spinners/GridLoader";
import './LoadingSpinner.css'


const override: CSSProperties = {
    display: "block",
    margin: "0 auto",
    borderColor: "blue"
    // backgroundColor: "aquamarine"
  };

const LoadingSpinner = ({loading}) => {
    let [color, setColor] = useState('#50AF93');
   
    

   return (
    <>
    <div className="loaderContainer">
     <GridLoader
        color={color}
        loading={loading}
        cssOverride={override}
        size={75}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
    </>
   )
}

export default LoadingSpinner;