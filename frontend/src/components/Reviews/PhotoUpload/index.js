import React, { useState, useRef } from "react";

import "./PhotoUpload.css";

const PhotoUpload = () => {
    // const [file, setFile] = useState([]);
    const [files, setFiles] = useState([]);

    const handleFileChange = (e) => {
        let newFiles = e.target.files;

        setFiles([...files, ...newFiles]);
        console.log(files);
    };
    const submitHandler = (e) => {
        e.preventDefault();
        console.log(files);
    };

    const handleDragOver = e => {
        e.preventDefault();
        e.stopPropagation();
        // let newFiles = e.target.files;

        // setFiles([...files, ...newFiles]);
        console.log(e.target);

    }
    return (
        <div id="uploadContainer">
            <h3 className="title">Attach Photos</h3>
            <form
                className="form-photo-upload"
                method="post"
                enctype="multipart/form-data"
                onSubmit={submitHandler}
                onDragOver={handleDragOver}
            >
                <label for="profile_pic">Choose file to upload</label>
                <input
                    type="file"
                    id="profile_pic"
                    name="profile_pic"
                    multiple
                    onChange={handleFileChange}
                />
                <p>Drag and Drop files or choose from your file directory</p>

                <p>Number of files chosen: {files.length}</p>

                <div>
                    <button>Submit</button>
                </div>
            </form>
        </div>
    );
};

export default PhotoUpload;
