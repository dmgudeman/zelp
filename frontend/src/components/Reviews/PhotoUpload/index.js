import { useState} from "react";
import { useDispatch } from "react-redux";
import { createReview} from '../../../store/reviews';

import "./PhotoUpload.css";


const PhotoUpload = ({name, value, handleChange}) => {
    // console.log('ttttttt', author_id, business_id, rating, body)
    // console.log('ppppp', props)
    // const {author_id, business_id, rating, body } = {...props};
    // console.log(props)
    const dispatch = useDispatch();
    // const [file, setFile] = useState([]);
    const [files, setFiles] = useState([]);
    const [photo, setPhoto] = useState(null);

    // const handleFileChange = (e) => {
    //     // let newFiles = e.target.files;
    //     //  setFiles([...files, ...newFiles]);
      
    //     setPhoto(e.target.files[0]);
       
       
      
    // };
  

    const handleDragOver = e => {
        e.preventDefault();
        e.stopPropagation();
        // let newFiles = e.target.files;

        // setFiles([...files, ...newFiles]);
        console.log(e);

    }
    return (
        <div id="uploadContainer">
            <h3 className="title">Attach Photos</h3>
            {/* <form
                className="form-photo-upload"
                // method="post"
                // enctype="multipart/form-data"
                // onSubmit={submitHandler}
                onDragOver={handleDragOver}
            > */}
                <label for="profile_pic">Choose file to upload</label>
                <input
                    type="file"
                    id="profile_pic"
                    name="profile_pic"
                    // multiple
                    onChange={handleChange}
                />
                <p>Drag and Drop files or choose from your file directory</p>

                <p>Number of files chosen: {files.length}</p>

                <div>
                  
                </div>
            {/* </form> */}
        </div>
    );
};

export default PhotoUpload;
