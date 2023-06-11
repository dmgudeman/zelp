import "./PhotoUpload.css";

const PhotoUpload = ({ name, value, handleChange, title, fileRef }) => {
    return (
        <div id="uploadContainer">
            <h3 className="photoTitle blueTitle">{title}</h3>

            <label htmlFor="profile_pic" className="blueButton customFileUpload ">
                Upload Photo
            </label>

            <input
                className="photoInput"
                type="file"
                id="profile_pic"
                ref={fileRef}
                name={name}
                onChange={handleChange}
            />
        </div>
    );
};

export default PhotoUpload;
