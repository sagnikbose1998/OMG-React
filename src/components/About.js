import User from "./User";
import UserClass from "./UserClass";

const About = () => {
    return(
        <div>
            <h1>This is the about page</h1>
            <User name={"Sagnik Bose function"}/>
            <UserClass name ={"Sagnik Bose class"}/>
        </div>
    )
};

export default About