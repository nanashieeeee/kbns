import React from "react";
import "../css/CarouselCSS.css";
import Product from "./Product";
import PhotoCard from "./PhotoCard";
import ProductDesc from "./ProductDesc";
import ProductItem from "./ProductItem";
import images from "./Images";

function Carousel() {
  return (
    <div
      className="carouselContainer container-fluid py-5"
      style={{ minHeight: "100vh"}}
    >
      <div
        className="carousel slide"
        data-bs-ride="carousel"
        id="productCarousel"
        style={{ minHeight: "100vh" }}
      >
        <div
          className="carousel-inner d-flex align-items-center"
          style={{ minHeight: "100vh" }}
        >
          <Product identifier="lightstickProduct" active={true}>
            <ProductItem
              containerId="lightstick-container"
              itemId="lightstick"
            />
            <ProductDesc
              h1="LIGHTSTICKS"
              h2="Elevate Your Concert Experience"
              p="Explore a wide range of K-pop lightsticks, from creative fan-made designs to official releases. Whether for concerts or your personal collection, these lightsticks are perfect for showing your love and support for your bias. Shine brightly and express your fandom with these iconic must-have collectibles!"
            />
          </Product>

          <Product identifier="photoCardProduct">
            <ProductItem containerId="photoCard-container" itemId="photoCard">
              <PhotoCard
                frontImgUrl={images.seulgiBackImg}
                backImgUrl={images.seulgi}
              />
            </ProductItem>

            <ProductDesc
              h1="PHOTO CARDS"
              h2="Exclusive Collectibles for Every Fan"
              p="Discover a stunning collection of K-pop photocards featuring unique designs of your favorite idols. Perfect for trading with fellow fans, adding to your growing collection, or sharing the love for K-pop. These must-have collectibles let you celebrate your idols and showcase your fandom in style!"
            />
          </Product>

          <Product identifier="albumProduct">
            <ProductItem containerId="disc-container" itemId="disc" />

            <ProductDesc
              h1="ALBUMS"
              h2="Own the Music, Celebrate the Art"
              p="From chart-topping hits to exclusive photobooks, K-pop albums offer a one-of-a-kind way to experience your favorite artists masterpieces in physical form. Dive into the world of stunning visuals, captivating concepts, and collectible items, making each album a treasure for fans and a celebration of their idols artistry and creativity!"
            />
          </Product>
        </div>

        <button
          type="button"
          data-bs-target="#productCarousel"
          className="carousel-control-prev"
          data-bs-slide="prev"
         style={{zIndex:"3"}}>
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#productCarousel"
          data-bs-slide="next"
         style={{zIndex:"3"}}>
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default Carousel;

// <div className="carouselContainer container-fluid p-0 mt-5 d-none d-sm-none d-md-block">
//   <div id="productCarousel" className="carousel slide">

//     {/* carousel content */}
//     <div className="carousel-inner">
//       {/* lightstick carousel */}
//       <CarouselItem identifier="lighstStickCarousel" active={true}>
//         <div className="row">
//           <div className="col-6">
//             <div className="banner">
//               <div className="lightstick-container">
//                 <div className="lightstick"></div>
//               </div>
//               <div className="hexagon-platform">
//                 <img src={images.platformHexa} alt="" />
//               </div>
//             </div>
//           </div>
//           <CarouselDesc
//             h1="LIGHTSTICKS"
//             h2="Elevate Your Concert Experience"
//             p="Wide variety of choices. From fan-made to official releases."
//           />
//         </div>
//       </CarouselItem>
//       {/* Photocards Carousel */}
//       <CarouselItem identifier="photoCardCarousel">
//         <div className="row">
//           <div className="col-6">
//             <div className="banner">
//               <div className="photoCard-container">
//                 <div className="photoCard">
//                   <PhotoCard
//                     frontImgUrl={images.soyeonBackImg}
//                     backImgUrl={images.soyeon}
//                   ></PhotoCard>
//                 </div>
//               </div>
//               <div className="circle-platform">
//                 <img src={images.platformCircle} alt="" />
//               </div>
//             </div>
//           </div>
//           <CarouselDesc
//             h1="PHOTO CARDS"
//             h2="Exclusive Collectibles for Every Fan"
//             p="Discover unique designs featuring your favorite idols. Perfect for trading, collecting, and sharing the love of K-pop."
//           />
//         </div>
//       </CarouselItem>
//       {/* Album Carousel */}
//       <CarouselItem identifier="albumCarousel" >
//         <div className="row">
//           <div className="col-6">
//             <div className="banner">
//               <div className="disc-container">
//                 <div className="disc"></div>
//               </div>
//               <div className="vinyl-player">
//                 <img src={images.vinylPlayer} alt="" />
//               </div>
//             </div>
//           </div>
//           <CarouselDesc
//             h1="ALBUMS"
//             h2="Own the Music, Celebrate the Art"
//             p="From chart-topping hits to exclusive photobooks, experience
//               your favorite artists masterpieces in physical form."
//           />
//         </div>
//       </CarouselItem>

//       {/* Last Carousel */}
//       <CarouselItem identifier="lastCarousel" >
//         <div
//           className="d-flex flex-column justify-content-center align-items-center"
//           style={{ height: "400px" }}
//         >
//           <h1 className="display-1 fw-bold w-50 text-center">
//             AND SO MUCH MORE!
//           </h1>
//           <h2 className="fw-bold mt-5">
//             Get into the hobby, <a href="" style={{color: '#B181FF'}}>Sign up</a> now to start
//             browsing.
//           </h2>
//         </div>
//       </CarouselItem>
//     </div>
//     <button
//       className="carousel-control-prev"
//       type="button"
//       data-bs-target="#productCarousel"
//       data-bs-slide="prev"
//     >
//       <span
//         className="carousel-control-prev-icon"
//         aria-hidden="true"
//       ></span>
//       <span className="visually-hidden">Previous</span>
//     </button>
//     <button
//       className="carousel-control-next"
//       type="button"
//       data-bs-target="#productCarousel"
//       data-bs-slide="next"
//     >
//       <span
//         className="carousel-control-next-icon"
//         aria-hidden="true"
//       ></span>
//       <span className="visually-hidden">Next</span>
//     </button>
//   </div>
// </div>
