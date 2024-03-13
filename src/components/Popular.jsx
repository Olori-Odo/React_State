import Image1 from "../assets/photo-1.png";
import Style from "../components/Popular.css";

const Popular = () => {
  // const Cards = [
  //   {
  //     id: 1,
  //     tittle: WE HAVE ALWAYS LIVED IN THE CASTLE,
  //     desc: Drama, Thriller . Movie (2024)

  //   },

  //   {
  //     id: 2,
  //     tittle: WE HAVE ALWAYS LIVED IN THE CASTLE,
  //     desc: Drama, Thriller . Movie (2024)

  //   },

  //   {
  //     id: 3,
  //     tittle: NORTH HOLYWOOD,
  //     desc: Drama, Thriller . Movie (2024)

  //   },

  //   {
  //     id: 4,
  //     tittle: WE HAVE ALWAYS LIVED IN THE CASTLE,
  //     desc: Drama, Thriller . Movie (2024)

  //   }
  // ]

  // {
  //   Cards.map((val){
  //     return(
  //       val.id
  //     )
  //   })
  // }
  return (
    <>
      <h2>POPULAR</h2>

      <div className="card-temp">
        <img className="p-image" src={Image1} alt="image1" />
        <h3>Dune</h3>
        <p> PG-13 • Adventure, Science Fiction</p>
      </div>
    </>
  );
};

export default Popular;
