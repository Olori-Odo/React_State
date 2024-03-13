
import "./Popular.css";
import Photo1 from "../assets/photo-1.png";

const PopularCart = (props) => {

  return (
    <>

      <div className="card-temp">
        <img className="p-image" src={props.photo} alt="image1" />
        <h3>{props.title}</h3>
        <p> {props.desc}</p>
      </div>
    </>
  );


  
 
};

export default PopularCart;
