import React from "react";

const Weather  = (props) => {

        return (
            // And Operator = if condition
            <div className="info">

                {props.temp && 
                    <p className="info-key">temp : 
                        <span className="info-value">{props.temp}</span>
                    </p>}

                {props.city && 
                    <p className="info-key">city : 
                        <span className="info-value">{props.city}</span>
                    </p>}

                {props.country && 
                    <p className="info-key">country : 
                        <span className="info-value">{props.country}</span>
                    </p>}

                {props.humidity && 
                    <p className="info-key">humidity : 
                        <span className="info-value">{props.humidity}</span>
                    </p>}

                {props.description && 
                    <p className="info-key">description : 
                        <span className="info-value">{props.description}</span>
                    </p>}

                {props.error &&
                    <p className="info-key">error : 
                        <span className="info-value">{props.error}</span>
                    </p>}

            </div>
        )
    }
export default Weather;