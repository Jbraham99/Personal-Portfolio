import ExperienceCard from "./ExperienceCard"
import HobbiesCard from "./HobbiesCard"
import ThinkfulCert from "../Images/ThinkfulCert.png"
import TmobileIcon from "../Images/tmobile.jpg"

function About() {
    return (
        <div className="container">
            <h2 className="text-center mt-2">About <span className="text-warning">Joseph</span></h2>
            <div className=" bg-primary shadow  p-1">
                <div className="bg-light p-3">
                <p>I am a full-stack software engineer from Sacramento, California with a background in Audio Engineering and retail management. My experience in audio engineering and retail management has refined my collaborative skills and solution-oriented approach. My role as a manager at T-Mobile was pivotal in nurturing teamwork and instilling a culture of ongoing improvement.</p>
                </div>
            </div>
            <div>
                <h3 className="text-center pt-4">Experience</h3>
                <div className="row pb-4">
                    <div className="col-lg-6">
                        <h4 className="text-center pb-1">Thinkful | Student</h4>
                        <img className="rounded mx-auto d-block" src="https://media1.tenor.com/m/5ry-200hErMAAAAd/hacker-hacker-man.gif" height={300} width={300} />
                    </div>
                    <p className="col pt-4">I immersed myself in acquiring industry best practices and adhering to software development standards, concentrating on a comprehensive skill set that encompassed Javascript, HTML5, CSS3, React Native, Node.js, PostgreSQL, RESTful APIs, as well as algorithms and data structures. Throughout this journey, I actively engaged in the development and deployment of mobile-first applications, constantly expanding my language and framework proficiency. To enhance my expertise, I dedicated several hours each week to collaborative efforts with senior web developers, fostering a mentor-student relationship that provided invaluable insights and knowledge. Additionally, I gained a solid understanding of backend concepts, incorporating Express, PostgreSQL, data structures and algorithms (DSA), and object-oriented programming (OOP) into my skill repertoire.</p>
                </div>
                <hr></hr>
                <div className="row pb-4">
                    <div className="col-lg-6">
                        <h4 className="text-center pb-1">T-Mobile | Mobile Expert</h4>
                        <img className="rounded mx-auto d-block" src="https://media2.giphy.com/media/XPghyZNehTVVG3JLlS/giphy.gif" height={300} width={300} />
                    </div>
                    <p className="col pt-4 align-midde">In my role at T-Mobile, I've excelled in over-indexing the incorporation of value-added features, achieving an impressive average increase of 92%. Additionally, I successfully led and grew a dynamic sales team comprised of 10 individuals, consistently surpassing daily goals with a remarkable 125% performance. Through strategic initiatives, I played a pivotal role in driving up customer traffic by 5-10% during downtimes, showcasing my ability to adapt and enhance business outcomes. Furthermore, I fostered a collaborative work environment, instilling a culture of teamwork and accountability that contributed to the overall success of the team.</p>
                </div>
                <hr></hr>
                <div className="row pt-4 pb-4">
                    <div className="col-lg-6">
                        <h4 className="text-center pb-1">J.Crew Factory | Sales Associate</h4>
                        <img className="rounded mx-auto d-block" src="https://media3.giphy.com/media/gCXBEvSJDHVoyRPQeX/giphy.gif?cid=ecf05e47nt0t2rnpr6cdno5giqbm2k7bbatdp44yzcmspjzs&ep=v1_gifs_search&rid=giphy.gif&ct=g" height={300} width={300} />
                    </div>
                    <p className="col pt-4">I played a pivotal role in boosting sales by consistently surpassing both selling and service expectations. To enhance customer engagement, I meticulously developed an itemized inventory of products tailored to individual preferences, providing a personalized and seamless shopping experience. Additionally, I actively collaborated with the store director, contributing to the development of innovative strategies to meet and exceed sales goals. Through a combination of strategic thinking and a customer-centric approach, I was able to contribute to the overall success of the sales team and the achievement of business objectives.</p>
                </div>
            </div>
        </div>
    )
}

export default About