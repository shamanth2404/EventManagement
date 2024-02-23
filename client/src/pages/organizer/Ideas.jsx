import React from "react";
import Navbar from "../../components/Navbar";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Ideas = () => {
  const categories = [
    { title: "All Categories", image: "" },
    { title: "Bridal Wear", image: "" },
    { title: "Outfits", image: "" },
    { title: "Blouse Designs", image: "" },
    { title: "Wedding Sarees", image: "" },
    { title: "Mehndi Designs", image: "" },
    { title: "Wedding Decor", image: "" },
    { title: "Groom Outfits", image: "" },
    { title: "Wedding Invitations", image: "" },
    { title: "Cakes", image: "" },
    { title: "Accesories", image: "" },
  ];
  const settings = {
    infinite: true,
    slidesToShow: 8,
    slidesToScroll: 1,
    arrows: true,
  };
  return (
    <div className="mx-5">
      <Navbar role="Organiser" />
      <h2 className="mt-5 px-5">
        Wedding Photos,Lates Trends & Ideas <span>(36000+ Photos)</span>
      </h2>
      <h6 className="px-5">Browse from latest Wedding Photos, Ideas & Inspiration</h6>
      <div className="mx-7 bg-slate-300 mt-5">
        <Slider {...settings}>
          {categories.map((category, index) => (
            <div key={index}>
              <div>Image</div>
              <span>{category.title}</span>
            </div>
          ))}
        </Slider>
      </div>
      <div className="flex items-center justify-between mt-5">
        <div>
          <span>Sort By :</span>
          <span>Recent</span>
          <span>Trending</span>
        </div>
        <input type="text" placeholder="Search" />
      </div>
    </div>
  );
};

export default Ideas;
