import { useState} from "react";
import { useDispatch } from "react-redux";
import { createReview} from '../../../store/reviews';

import "./PhotoUpload.css";


const PhotoUpload = ({review}) => {
    // console.log('ttttttt', author_id, business_id, rating, body)
    // console.log('ppppp', props)
    // const {author_id, business_id, rating, body } = {...props};
    // console.log(props)
    const dispatch = useDispatch();
    // const [file, setFile] = useState([]);
    const [files, setFiles] = useState([]);
    const [photo, setPhoto] = useState(null);

    const handleFileChange = (e) => {
        // let newFiles = e.target.files;
        //  setFiles([...files, ...newFiles]);
      
        setPhoto(e.target.files[0]);
       
       
      
    };
    const submitHandler = (e) => {
        e.preventDefault();
        e.stopPropagation();
        const formData = new FormData();
        // console.log(author_id, business_id, rating, body)
   
        formData.append('review[author_id]', review.author_id);
        formData.append('review[business_id]', review.business_id);
        formData.append('review[body]', review.body);
        formData.append('review[rating]', review.rating);
        formData.append('review[photo]', photo)
        // formData.append('author_id', author_id);
        // formData.append('business_id', business_id);
        // formData.append('body', body);
        // formData.append('rating', rating);
        // formData.append('photo', photo)
        dispatch(createReview(formData));
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
                // enctype="multipart/form-data"
                onSubmit={submitHandler}
                onDragOver={handleDragOver}
            >
                <label for="profile_pic">Choose file to upload</label>
                <input
                    type="file"
                    id="profile_pic"
                    name="profile_pic"
                    // multiple
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
