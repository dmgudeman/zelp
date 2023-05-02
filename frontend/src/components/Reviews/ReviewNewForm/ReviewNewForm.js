import { useState, useEffect } from "react";

import "./ReviewNewForm.css";

const ReviewNewForm = ({ name, value, handleChange}) => {
    
    
    return (
        <>
            <textarea
                className="textareaLarge"
                name={name}
                value={value}
                onChange={handleChange}
                placeholder="Leave a comment or explain your rating if you would like. This will be posted on the site"
            >
                {value}
            </textarea>
        </>
    );
};

export default ReviewNewForm;
