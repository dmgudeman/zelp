import "./PhotoUpload.css";

const PhotoUpload = ({ name, value, handleChange }) => {
   
    return (
        <div id="uploadContainer">
            <h3 className="photoTitle blueTitle">Attach Photos</h3>

            <label for="profile_pic"></label>
            <input
                className="photoInput"
                type="file"
                id="profile_pic"
                name={name}
                value={value}
                // multiple
                onChange={handleChange}
            />

        </div>
    );
};

export default PhotoUpload;
