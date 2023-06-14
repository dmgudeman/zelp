import "./PhotoUpload.css";

const PhotoUpload = ({handleChange, title}) => {
    return (
        <div id="uploadContainer">
            {/* <h3 className="photoTitle blueTitle">{title}</h3> */}

            <label htmlFor="profile_pic" className="blueButton customFileUpload ">
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
