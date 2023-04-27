import { useState } from "react";

import "./ReviewNewForm.css";

const ReviewNewForm = ({bodyOnChange, body}) => {
    // const [body, setBody] = useState("");
    return (
        <>
            <form onSubmit={()=>{}}>
                <textarea
                    className="textareaLarge"
                    value={body}
                    onChange={e=>bodyOnChange(e)}
                    placeholder="Leave a comment or explain your rating if you would like. This will be posted on the site"
                >
                    {body}
                </textarea>
            </form>
        </>
    );
};

export default ReviewNewForm;
