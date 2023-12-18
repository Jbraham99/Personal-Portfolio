

function Projects() {
    return (
        <div className="container">
            <h2 className="text-center pt-3 pb-3">Projects</h2>
            <div className="row">
                <div className="col-lg-6">
                    <h4 className="text-center pb-1">Reservation App</h4>
                    <img className="rounded mx-auto d-block" src="https://media0.giphy.com/media/39orZxS2uTsLxz7nb8/giphy.gif?cid=ecf05e47crfpvh85yqsvhkg78agaew3qcztzc14mm4zmatk1&ep=v1_gifs_search&rid=giphy.gif&ct=g" height={300} width={300} />
                    <div className="d-flex justify-content-around pt-4">
                        <a className="" href="https://customer-welcome.onrender.com/dashboard">Try App Here!</a>
                        <a className="" href="https://github.com/Jbraham99/starter-restaurant-reservation.git">GitHub Repo</a>
                    </div>
                </div>
                <p className="col-lg-6 pt-4">The reservation management application provides users with a comprehensive tool for handling customer reservations efficiently. Crafted with an emphasis on scalability and sustainability, the application is built using reusable components and leverages front-end libraries to facilitate seamless integration and future adaptability. The backend architecture is constructed using NodeJS, Express, and ElephantSQL, ensuring robust functionality and a reliable foundation. The development process also prioritized the establishment of an organized data architecture to enhance data management. The application implements all CRUD (Create, Read, Update, Delete) operations through a RESTful API structure, offering a versatile and user-friendly interface for effectively managing reservations.</p>
            </div>
            <hr className=""></hr>
            <div className="row">
                <div className="col-lg-6">
                    <h4 className="text-center pb-1">Recipe Tracker</h4>
                    <img className="rounded mx-auto d-block" src="https://media0.giphy.com/media/N23cG6apipMmQ/giphy.gif?cid=ecf05e47ov0bk62sv2ahopfyynk6jx0o24hquerom25lmk2o&ep=v1_gifs_search&rid=giphy.gif&ct=g" height={300} width={300} />
                    <div className="d-flex justify-content-around pt-4">
                        <a className="" href="https://recipe-tracker-app-oc4u.onrender.com">Try App Here!</a>
                        <a className="" href="https://github.com/Jbraham99/RecipeTracker">GitHub Repo</a>
                    </div>
                </div>
                <p className="col-lg-6 pt-4">The digital recipe book application is designed to empower users in managing their favorite recipes effortlessly. It offers a user-friendly platform for creating, reading, and deleting recipes, providing a seamless experience for culinary enthusiasts. The application is aesthetically styled using Bootstrap and custom CSS, ensuring a visually appealing and intuitive interface. Notably, a key feature has been implemented to expedite the process of recording favorite recipes, boasting a remarkable 185% increase in speed compared to manual writing. This enhancement not only streamlines the user experience but also encourages the swift and convenient documentation of cherished culinary creations.</p>
            </div>
        </div>
    )
}

export default Projects;