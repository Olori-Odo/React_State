
import "./Movies.css";



const Movies = (props) => {

  return (
    <>
     
      <div className="movie-block">
        <img className="movie-image" src={props.image} alt="image" />
        <p>{props.title}</p>
        <h6> {props.desc}</h6>
      </div>

    </>

  );
};

export default Movies;
