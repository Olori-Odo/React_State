import image1 from "../assets/img-1.png";
// import HuluStyle from "./HuluMovies.css";

const Movies = () => {
  return (
    <>
      <h2>NEWLY ADDED MOVIES</h2>
      <div className="hulu-block">
        <img className="hulu-image" src={image1} alt="" />
        <p>POOR THINGS</p>
        <h6>R.Comedy, Drama.Movie (2023)</h6>
      </div>
    </>
  );
};

export default Movies;
