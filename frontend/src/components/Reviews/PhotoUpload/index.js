import { useState } from "react";
import { useDispatch } from "react-redux";
import { createReview } from "../../../store/reviews";

import "./PhotoUpload.css";

const PhotoUpload = ({ name, value, handleChange }) => {
    const dispatch = useDispatch();
    const [files, setFiles] = useState([]);
    const [photo, setPhoto] = useState(null);

    // const handleFileChange = (e) => {
    //     // let newFiles = e.target.files;
    //     //  setFiles([...files, ...newFiles]);

    //     setPhoto(e.target.files[0]);

    // };

    const handleDragOver = (e) => {
        e.preventDefault();
        e.stopPropagation();
       ;
    };
    return (
        <div id="uploadContainer">
            <h3 className="title">Attach Photos</h3>

            <label for="profile_pic">Choose file to upload</label>
            <input
                type="file"
                id="profile_pic"
                name={name}
                value={value}
                // multiple
                onChange={handleChange}
            />
            <p>Drag and Drop files or choose from your file directory</p>

            <p>Number of files chosen: {files.length}</p>

            <div></div>
        </div>
    );
};

export default PhotoUpload;
