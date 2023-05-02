import "./PhotoUpload.css";

const PhotoUpload = ({ name, value, handleChange }) => {
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
            <p>Drag and Drop a file or choose from your file directory</p>

            {/* <p>Number of files chosen: {files.length}</p> */}
        </div>
    );
};

export default PhotoUpload;
