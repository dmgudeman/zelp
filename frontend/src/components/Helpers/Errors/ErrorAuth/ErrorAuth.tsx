import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../../store/store";
import './ErrorAuth.css'

const ErrorAuth: React.FC = () => {
    const error = useSelector((state: RootState) => state.session.error);
    return (
        <div id="errorMessageContainer">
            {error && error.errors.map((errorMessage, index) => (
                <p  key={index}>{errorMessage}</p>
            ))}
        </div>
    );
};

export default ErrorAuth;
 