

import './ReviewNewSubmit.css';

const ReviewNewSubmit = ({submitHandler}) => {
    return (
        <>
        <div id="reviewNewSubmitContainer">
        <button className="button" onClick={submitHandler}>Submit Review</button>
        </div>
        </>
    )
}

export default ReviewNewSubmit;