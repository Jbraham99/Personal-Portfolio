import Hobbies from "../Data/Hobbies";

function HobbiesCard() {
    return (
        <>
        {Hobbies.map((hobby) => {
            return (
                <div key={hobby.title} className="bg-light m-4 p-3 shadow col-sm-12 col-md-6 col-lg-4">
                    <h6 className="text-center">{hobby.title}</h6>
                    <div className="row">
                        <img className="col-md-6" src={hobby.img} />
                        <p className="col-md-6">HobbiesCard</p>                        
                    </div>
                </div>
            )
        })}
        </>
    )
}

export default HobbiesCard