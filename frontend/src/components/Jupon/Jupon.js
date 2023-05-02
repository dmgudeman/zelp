import { useState } from "react";
import "./Jupon.css";

const Jupon = (props) => {
    const [rawString, setRawString] = useState("");
    const [newString, setNewString] = useState("");
    // const hoursString = `Mon
    // 7:00 AM - 10:00 PM
    // Tue
    // 7:00 AM - 10:00 PM
    // Wed
    // 7:00 AM - 10:00 PM
    // Thu
    // 7:00 AM - 10:00 PM
    // Fri
    // 7:00 AM - 10:00 PM
    // Sat
    // 7:00 AM - 10:00 PM
    // Sun
    // 7:00 AM - 10:00 PM`;
    

    

    const converter = () => {
      
        const hoursArray = rawString.split('\n\n');

        const hoursJSON = {};
        
        for (let i = 0; i < hoursArray.length; i += 2) {
          const day = hoursArray[i];
          const time = hoursArray[i + 1];
        //   const status = 'Open now'; // we can ignore this field since it's the same for all days
        
          hoursJSON[day] = { time };
        }
        
        
        let x = JSON.stringify(hoursJSON,  2);
        setNewString(x);
    };



    return (
        <div id="jContainer">
            <textarea
                id="texty"
                value={rawString}
                onChange={(e) => setRawString(e.target.value)}
            ></textarea>
            <div id="outy">{newString}</div>

            <button onClick={() => converter()}>convert</button>
        </div>
    );
};

export default Jupon;
