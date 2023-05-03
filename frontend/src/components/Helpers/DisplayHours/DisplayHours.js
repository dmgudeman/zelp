import "./DisplayHours.css";

const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

const DisplayHours = ({ hoursArray }) => {
    return (
        <div>
            {daysOfWeek.map((day, idx) => {
                let days = daysOfWeek[idx];
                let hours = hoursArray[idx][1]["time"];

                return (
                    <div key={day}>
                        {hoursArray ? (
                            <>
                                <div id="containerDH">
                                    <div id="lineDH">
                                        <div id="daysDH">{days}</div>
                                        <div id="hoursDH">{hours}</div>
                                    </div>
                                </div>
                            </>
                        ) : null}
                    </div>
                );
            })}
        </div>
    );
};

export default DisplayHours;
