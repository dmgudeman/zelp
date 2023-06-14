
import React from 'react';
import type { IReviewFormProps } from '../../../Types/IComponents/IReviews';
import "./ReviewForm.css";

const ReviewForm: React.FC<IReviewFormProps> = ({ name, value, handleReviewFormChange }) => {
    return (
        <>
            <textarea
                className="textareaLarge"
                name={name}
                value={value || ""}
                onChange={handleReviewFormChange}
                placeholder="Leave a comment or explain your rating."
                onClick={(e)=> e.stopPropagation()}
            >
                {value}
            </textarea>
        </>
    );
};

export default ReviewForm;
