// import dune from "./asset/photo-1.png";
import Pics from "./asset/img-2.png";

const Popular = () => {
  return (
    <>
      <h2>POPULAR</h2>
      <div className="p-box">
        <img className="p-image" src={Pics} alt="Dune image" />
        <h3>Dune</h3>
        <p>PG-13 . Adventure, Science Fiction</p>
      </div>
    </>
  );
};

export default Popular;
