import experiences from "../Data/Experiences"

function ExperienceCard() {
    return (
        <>
        {experiences.map((xp)=> {
            return (
                <div key={xp.title} className="m-1 bg-light col-sm-12 col-md-6 border">
                    <h6 className="text-center">{xp.title}</h6>
                    <img src={xp.img}/>
                    <p>{xp.description}</p>
                </div>
            )
        })}
        </>
    )
}

export default ExperienceCard;