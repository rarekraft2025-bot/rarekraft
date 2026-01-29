import blueFront from "../assets/blue-shirts/bluefront.jpeg";
import blueBack from "../assets/blue-shirts/bluefrontsecond.jpeg";
import blueLeft from "../assets/blue-shirts/blueback.jpeg";
import maroonFront from "../assets/coffee-shirts/maroonfront.jpeg";
import maroonBack from "../assets/coffee-shirts/maroonfrontsecond.jpeg";
import maroonLeft from "../assets/coffee-shirts/maroonback.jpeg";
import pinkFront from "../assets/pink-shirts/pinkfront.jpeg";
import pinkLeft from "../assets/pink-shirts/pinkback.jpeg";
import frontpink from "../assets/pink-shirts/pinkfrontsecond.jpeg";
import backpink from "../assets/pink-shirts/pinkside.jpeg";
import skyblueFront from "../assets/skyblue-shirts/skybluefront.jpeg";
import skyblueBack from "../assets/skyblue-shirts/skybluefrontsecond.jpeg";
import leftskyblue from "../assets/skyblue-shirts/skyblueleft.jpeg";
import creamfront from "../assets/cream-shirts/offwhitefront.jpeg";
import creamfullfront from "../assets/cream-shirts/offwhitefrontsecond.jpeg";
import offwhitefront from "../assets/cream-shirts/offwhiteback.jpeg";
import offwhiteback from "../assets/cream-shirts/offwhitethird.jpeg";
import blackfront from "../assets/black-shirts/blackfront.jpeg";
import blacksecondfront from "../assets/black-shirts/blackfrontsecond.jpeg";
import blackthirdfront from "../assets/black-shirts/blackback.jpeg";
import blackfourthfront from "../assets/black-shirts/blackbacksecond.jpeg";
import olivefront from "../assets/olive-green/olivefront.jpeg";
import oliveback from "../assets/olive-green/oliveback.jpeg";
import oliveside from "../assets/olive-green/oliveside.jpeg";



const products = [
  {
    id: 1,
    name: "Elite Navy Blue Cotton Formal Shirt",
    originalPrice: 2999,
    discount: 51,
    description: "Made with premium Geeza cotton, this navy blue formal shirt offers a smooth feel, excellent breathability, and a sharp tailored fit—perfect for office wear and formal occasions.",
    images: [
      blueFront,
      blueBack,
      blueLeft,
    ],
    highlights: [
      "Premium Egyptian Geeza Cotton",
      "Smooth & breathable fabric",
      "Wrinkle-resistant finish",
      "Tailored formal silhouette",
      "Ideal for office & formal wear",
    ],

    deliveryInfo: {
      delivery: "Free delivery within 5–7 working days",
      returns: "Easy 4-day returns",
      cod: true,
    },
  },
  {
    id: 2,
    name: "Heritage Maroon Formal Shirt",
    originalPrice: 2999,
    discount: 51,
    description: "Made from high-quality Geeza cotton, this maroon formal shirt offers exceptional softness, durability, and breathability. Designed with a tailored fit and rich maroon tone, it’s ideal for office wear and formal occasions.",
    images: [
      maroonFront,
      maroonBack,
      maroonLeft,
    ],
    highlights: [
      "Premium Egyptian Geeza Cotton",
      "Smooth & breathable fabric",
      "Wrinkle-resistant finish",
      "Tailored formal silhouette",
      "Ideal for office & formal wear",
    ],

    deliveryInfo: {
      delivery: "Free delivery within 5–7 working days",
      returns: "Easy 4-day returns",
      cod: true,
    },
  },
  {
    id: 3,
    name: "Olive Shirt",
    originalPrice: 2999,
    discount: 51,
    description: "Experience the unmatched luxury of our Geeza cotton shirts. Crafted from premium Egyptian Geeza cotton, these shirts offer exceptional softness, superior breathability, and a naturally smooth finish. Known for its fine fibers and strength, Geeza cotton delivers all-day comfort with a refined, structured look—perfectly balancing elegance and ease. From long workdays to sophisticated evenings, enjoy effortless style with a fabric that feels as good as it looks.",
    images: [
      olivefront,
      oliveback,
      oliveside,
    ],
    highlights: [
      "Premium cotton fabric",
      "Lightweight & highly breathable",
      "Natural textured finish",
      "Relaxed yet refined formal silhouette",
      "Ideal for summer & warm-weather wear",
    ],
    deliveryInfo: {
      delivery: "Free delivery within 5–7 working days",
      returns: "Easy 4-day returns",
      cod: true,
    },
  },
  {
    id: 4,
    name: "Black Linen Shirt",
    originalPrice: 2399,
    discount: 52,
    description: "Experience the perfect balance of comfort and sophistication with our linen blend shirts. Designed for warm-weather ease, these shirts combine the breathability of linen with the softness and structure of other premium fabrics. A luxuriously lightweight feel, a refined look, and effortless style that takes you from casual days to polished evenings",
    images: [
      blackfront,
      blacksecondfront,
      blackthirdfront,
      blackfourthfront,
    ],
    highlights: [
      "Premium linen fabric",
      "Lightweight & highly breathable",
      "Natural textured finish",
      "Relaxed yet refined formal silhouette",
      "Ideal for summer & warm-weather wear",
    ],
    deliveryInfo: {
      delivery: "Free delivery within 5–7 working days",
      returns: "Easy 4-day returns",
      cod: true,
    },
  },
  {
    id: 5,
    name: "Off White Blended Linen shirt",
    originalPrice: 2399,
    discount: 52,
    description: "100% Blended linen shirts are your stylish companion that offer perfect fusion of comfort and elegance. They are ideal for warmer weather. With the blend of linen and other materials, our shirts provide a luxurious feel and a polished look.",
    images: [
      creamfullfront,
      creamfront,
      offwhiteback,
      offwhitefront,
    ],
    highlights: [
      "Premium linen fabric",
      "Lightweight & highly breathable",
      "Natural textured finish",
      "Relaxed yet refined formal silhouette",
      "Ideal for summer & warm-weather wear",
    ],
    deliveryInfo: {
      delivery: "Free delivery within 5–7 working days",
      returns: "Easy 4-day returns",
      cod: true,
    },
  },
  {
    id: 6,
    name: "Men Light Blue Textured Full Sleeves Formal Shirt",
    originalPrice: 2399,
    discount: 52,
    description: "Elevate your formal ensembles with this light blue slim-fit shirt from Bespoke. Meticulously constructed from premium cotton, it offers a refined texture that adds depth to your look. The full sleeves create a polished silhouette, perfect for business meetings or elegant gatherings. Pair it effortlessly with tailored trousers for a sophisticated style that speaks volumes. Unleash a refreshing touch to your attire with this essential piece, a must-have for the modern gentleman.",
    images: [
      skyblueFront,
      skyblueBack,
      leftskyblue,
    ],
    highlights: [
      "Premium linen fabric",
      "Lightweight & highly breathable",
      "Natural textured finish",
      "Relaxed yet refined formal silhouette",
      "Ideal for summer & warm-weather wear",
    ],
    deliveryInfo: {
      delivery: "Free delivery within 5–7 working days",
      returns: "Easy 4-day returns",
      cod: true,
    },
  },
  {
    id: 7,
    name: "Imperial Pink Shirt",
    originalPrice: 1999,
    discount: 51,
    description: "Crafted from luxurious Barfi silk, this pink formal shirt features a smooth sheen, lightweight feel, and refined elegance—perfect for formal and special occasions.",
    images: [
      frontpink,
      pinkFront,
      pinkLeft,
      backpink,
    ],
    highlights: [
      "Premium Barfi Silk fabric",
      "Smooth texture with subtle natural sheen",
      "Lightweight & breathable feel",
      "Refined tailored formal silhouette",
      "Ideal for formal & special occasions",
    ],

    deliveryInfo: {
      delivery: "Free delivery within 5–7 working days",
      returns: "Easy 4-day returns",
      cod: true,
    },
  },
];

export default products;
