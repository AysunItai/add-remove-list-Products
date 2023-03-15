import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Product from "./Product";
import React, { Component } from "react";
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "black" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "black" }}
      onClick={onClick}
    />
  );
}

export default class ProductSlider extends Component {
  render() {
    const settings = {
     
      infinite: true,
      slidesToShow: 1,
      
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />
    };
    return (
       <div>
        
        <Slider {...settings}>
          {this.props.apiData.map((obj)=>
        
      {return <Product key={obj.id} {...obj}   ></Product>})}
        </Slider>
      </div>
    );
  }
}

// function ProductSlider({apiData}){
//     const settings={
        
//         infinite:true,
//         speed:500,
//         slidesToShow:1,
//         slidesToScroll:1
//     };
//     return (
//         <div>
        
//         <Slider {...settings}>
//           {apiData.map((obj)=>
        
//       {return <Product key={obj.id} {...obj}   ></Product>})}
//         </Slider>
//       </div>
//     )

//}

