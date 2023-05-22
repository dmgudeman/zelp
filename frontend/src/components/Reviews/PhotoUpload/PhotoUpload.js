import { useEffect } from "react";
import "./PhotoUpload.css";

const PhotoUpload = ({ name, value, handleChange, title, fileRef}) => {
    useEffect(()=>{
      
    },[value])
   
    return (
        <div id="uploadContainer">
            <h3 className="photoTitle blueTitle">{title}</h3>

            <label for="profile_pic"></label>
            <input
                className="photoInput"
                type="file"
                id="profile_pic"
                ref={fileRef}
                name={name}
                value={value}
                onChange={handleChange}
            />

        </div>
    );
};

export default PhotoUpload;
