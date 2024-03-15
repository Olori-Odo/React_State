import PopularCart from "./Popular";

import Photo1 from "../assets/photo-1.png";
import Photo2 from "../assets/photo-2.png";
import Photo3 from "../assets/photo-3.png";
import Photo4 from "../assets/photo-4.png";
import Photo5 from "../assets/photo-5.png";

const HuluPorpular = () => {
  return (
    <>
      <div className="pop-cart">
        <h2>POPULAR</h2>
        <div className="p-cart">
          <PopularCart
            photo={Photo1}
            desc="PG-13 • Adventure, Science Fiction"
            title="Dune"
          />
          <PopularCart
            photo={Photo2}
            desc="R • Comedy, Drama, Biography • Movie "
            title=" Straight Outta Compton"
          />
          <PopularCart
            photo={Photo3}
            desc="R • Drama • Movie (2023) "
            title="Poor Things"
          />
          <PopularCart
            photo={Photo4}
            desc="R • Comedy • Movie (2023) "
            title="The Kill Room"
          />
          <PopularCart
            photo={Photo5}
            desc="R • Thriller • Movie (2023) "
            title=" The Marsh King's Daughter"
          />
        </div>
      </div>
    </>
  );
};

export default HuluPorpular;
