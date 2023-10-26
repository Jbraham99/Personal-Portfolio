import ExperienceCard from "./ExperienceCard"
import HobbiesCard from "./HobbiesCard"
import ThinkfulCert from "../Images/ThinkfulCert.png"

function About() {
    return (
        <div>
            <h2 className="text-center mt-2">About <span className="text-warning">Joseph</span></h2>
            <div className="m-4 bg-primary shadow  p-1">
                <div className="bg-light p-3">
                <p>I am a full-stack software engineer from Sacramento, California with a background in Audio Engineering and retail management. My experience in audio engineering and retail management has refined my collaborative skills and solution-oriented approach. My role as a manager at T-Mobile was pivotal in nurturing teamwork and instilling a culture of ongoing improvement.</p>
                </div>
            </div>
            <div>
                <h3 className="text-center">Experience</h3>
                <div className="row">
                    <div className=" bg-light col-sm-12 col-md-6 border">
                        <h6 className="text-center">T-Mobile</h6>
                        <img src="#"/>
                        <p>The individual successfully addressed diverse customer needs and led a 10-member sales team to consistently exceed daily targets by 125%. They also promoted a collaborative work culture focused on teamwork and accountability, while optimizing sales opportunities through customer account analysis.</p>
                    </div>
                    <div className="pb-2 bg-light col-sm-12 col-md-6 border">
                        <h6 className="text-center">Thinkful</h6>
                        <div className="row p-3">
                        <img className="img-fluid col-md-6" src={ThinkfulCert}/>
                        <p>It was super epic!</p>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <h3 className="text-center">Hobbies</h3>
                <div className="row">
                    <HobbiesCard />                    
                </div>
            </div>
        </div>
    )
}

export default About