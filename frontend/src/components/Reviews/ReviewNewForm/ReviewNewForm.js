import "./ReviewNewForm.css";

const ReviewNewForm = ({ name, value, handleChange }) => {
    return (
        <>
            <textarea
                className="textareaLarge"
                name={name}
                value={value}
                onChange={handleChange}
                placeholder="Leave a comment or explain your rating."
            >
                {value}
            </textarea>
        </>
    );
};

export default ReviewNewForm;
