import React from "react";
import "./PhotoUpload.css";
import { IPhotoUploadProps } from "../../../Types/IComponents/IReviews";

const PhotoUpload: React.FC<IPhotoUploadProps> = ({ handleChange, title }) => {
    return (
        <div id="uploadContainer">
            <label
                htmlFor="profile_pic"
                className="blueButton customFileUpload "
            >
                {title}
            </label>
            <input
                className="photoInput"
                type="file"
                id="profile_pic"
                onChange={handleChange}
            />
        </div>
    );
};

export default PhotoUpload;
