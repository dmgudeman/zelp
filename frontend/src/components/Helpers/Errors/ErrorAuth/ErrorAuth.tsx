import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../../store/store"; // import your RootState

// const ErrorMessage: React.FC = () => {
//     const error = useSelector((state: RootState) => state.session.error);

//     return (
//             <div>
//                 {error &&
//                     error.errors.map((errorMessage, index) => (
//                         <p key={index}>{errorMessage}</p>
//                     ))}
//             </div>
//     );
// };

const ErrorMessage: React.FC = () => {
    const error = useSelector((state: RootState) => state.session.error);

    return (
        <div>
            {error && error.errors.map((errorMessage, index) => (
                <p key={index}>{errorMessage}</p>
            ))}
        </div>
    );
};

export default ErrorMessage;
