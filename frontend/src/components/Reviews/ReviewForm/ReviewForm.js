import "./ReviewForm.css";

const ReviewForm = ({ name, value, handleChange }) => {
    return (
        <>
            <textarea
                className="textareaLarge"
                name={name}
                value={value}
                onChange={handleChange}
                placeholder="Leave a comment or explain your rating."
                onClick={(e)=> e.stopPropagation()}
            >
                {value}
            </textarea>
        </>
    );
};

export default ReviewForm;
