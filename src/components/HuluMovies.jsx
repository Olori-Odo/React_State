import Movies from "./Movies";
import './HuluMovies.css'


import image1 from "../assets/img-1.png";
import image2 from "../assets/img-2.png";
import image3 from "../assets/img-3.png";
import image4 from "../assets/img-4.png";
import image5 from "../assets/img-5.jpg";








const HuluMovies = ()=> {
    return(
        <>
            <div className="movie-cart">
            <h2>NEWLY ADDED MOVIES</h2>

              <div className="m-cart">
                <Movies title="POOR THINGS" image={image1} desc="R.Comedy, Drama.Movie (2023)" />
                <Movies title="POOR THINGS" image={image2} desc="R.Comedy, Drama.Movie (2023)" />
                <Movies title="POOR THINGS" image={image3} desc="R.Comedy, Drama.Movie (2023)" />
                <Movies title="POOR THINGS" image={image4} desc="R.Comedy, Drama.Movie (2023)" />
                <Movies title="POOR THINGS" image={image5} desc="R.Comedy, Drama.Movie (2023)" />
              </div>
            </div>

           
        </>

    )

}

export default HuluMovies;