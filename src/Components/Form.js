import React from "react";

 const Form = (props) => {
        return (
            // 3 --- make form / get props / onSubmit
            <form onSubmit={props.getWeather}>
                <input type="text" name="city" placeholder="City..."/>
                <input type="text" name="country" placeholder="Countery..."/>
                <button>Get Weather</button>
            </form>
        )
}
export default Form;