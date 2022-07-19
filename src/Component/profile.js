import { useState } from "react";
import Techskill from './Techskill'
import Education from './Education'
import Workexp from './Workexp'
import Project from './Project'
import Techno from './Techno'
import Roles from './Roles'

function Profile(){
    const [data, setdata] = useState("techskill");

    return(
        <div className="main">
        <div className="profile">
            <div className="logo1">
            <div className="logo">
                <img src="person_1.jpg"></img>
                <h3>choppari madhu</h3>
                software engineer
            </div>
            </div>
            <div className="biodata">
                <span>
                    <h4>email:</h4>
                   madhuch155@gmail.com
                </span>
                <span>
                <h4>phone number:</h4>
            8501056461
                </span>
                <span>
                    <h4>address:</h4>
                    36-468/303,ganesh nagar,hyderabad,500505.
                </span>
                <span></span>
                <span></span>
            </div>

        </div>
        <div className="infodata">
            <div className="menu">
                <div className="techskill" onClick={() => setdata("techskill")}>Experience Summary</div>
                <div className="education" onClick={() => setdata("education")}> Education</div>
                <div className="workexp" onClick={() => setdata("workexp")}>work experience</div>
                <div className="project" onClick={() => setdata("project")}>projects</div>
                <div className="techno" onClick={() => setdata("techno")}>technologies</div>
                <div className="roles" onClick={() => setdata("roles")}>roles&responsibilities</div>
            </div>
            <div className="holder">
                {data == "techskill" ? <Techskill></Techskill>: ""}
                {data == "education" ? <Education></Education>: ""}
                {data == "workexp" ? <Workexp></Workexp>: ""}
                {data == "project" ? <Project></Project> : ""}
                {data == "techno" ?<Techno></Techno>  : ""}
                {data == "roles" ? <Roles></Roles>: ""}
            

            </div>
        </div>
        </div>
    )
}

export default Profile;
