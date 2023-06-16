
import React from "react";
import type { IErrorCustomProps } from "../../../../Types/IComponents/IErrors";
import './ErrorLocal.css'

const ErrorLocal: React.FC<IErrorCustomProps> = ({errors}) => {
    return (
        <div id="containerEL">
            {errors && errors.map((errorMessage, index) => (
                <p  key={index}>{errorMessage}</p>
            ))}
        </div>
    );
};

export default ErrorLocal;