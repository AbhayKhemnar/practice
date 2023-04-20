import { Fragment } from "react";


export function Invitation(props){
    const {name,invitation, email, wish, peoples ,place}= props
    return(
    <Fragment>
        <p> subject : {invitation} </p>
        <p> to : {email} </p>
        <p> hi, {name} </p>
        <p>   I am having a{wish} next Friday at my Home . Would you like to come ? It will be fun . Lots of people from my school are<br/> coming . you know some of them -{peoples}.  </p>
        <p>My house is behind our school , near {place} . </p>
        <p>I hope you will come and see you soon .</p>
        <p>from <br/> {name}</p>

    </Fragment>
    )
}