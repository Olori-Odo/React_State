import image1 from "./asset/img-1.png";

const Movies = () => {
  return (
    <>
      <h2>NEWLY ADDED MOVIES</h2>
      <div className="block">
        <img src={image1} alt="" />
        <p>POOR THINGS</p>
        <h6>R.Comedy, Drama.Movie (2023)</h6>
      </div>
    </>
  );
};

export default Movies;
