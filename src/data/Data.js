import Phone from "../assets/category/CellPhone.png";
import Computer from "../assets/category/Computer.png";
import SmartWatch from "../assets/category/SmartWatch.png";
import Camera from "../assets/category/Camera.png";
import Headphone from "../assets/category/Headphone.png";
import Gamepad from "../assets/category/Gamepad.png";

// Product List
const products = [
  {
    id: 1,
    image: "https://i.postimg.cc/GhtgXSHR/i-Phone-16-Pro-Max.jpg",
    title: "Iphone 16 Pro Max",
    category: "Phone",
    brand: "Apple",
    price: 1099.99,
  },

  {
    id: 2,
    image: "https://i.postimg.cc/YCyg2b3p/gamepad.png",
    title: "Wireless Gaming Gamepad",
    category: "Gamepad",
    brand: "Logitech",
    price: 59.99,
  },
  {
    id: 3,
    image: "https://i.postimg.cc/VsBC0YRZ/headphone.png",
    title: "Over-Ear Headphones",
    category: "Headphone",
    brand: "Sony",
    price: 129.99,
  },
  {
    id: 4,
    image: "https://i.postimg.cc/TwnW9GXw/dslrcamrea.png",
    title: "DSLR Camera",
    category: "Camera",
    brand: "Nikon",
    price: 999.99,
  },
  {
    id: 5,
    image: "https://i.postimg.cc/DwDJ3mv0/watch.png",
    title: "Fitness Smartwatch",
    category: "SmartWatch",
    brand: "Fitbit",
    price: 199.99,
  },
  {
    id: 6,
    image: "https://i.postimg.cc/0NMSzDW7/laptop.png",
    title: "Gaming Laptop",
    category: "Computer",
    brand: "Alienware",
    price: 1499.99,
  },

  {
    id: 7,
    image: "https://i.postimg.cc/YCyg2b3p/gamepad.png",
    title: "Pro Gaming Gamepad",
    category: "Gamepad",
    brand: "Razer",
    price: 79.99,
  },
  {
    id: 8,
    image: "https://i.postimg.cc/VsBC0YRZ/headphone.png",
    title: "Noise-Cancelling Headphones",
    category: "Headphone",
    brand: "Bose",
    price: 249.99,
  },
  {
    id: 9,
    image: "https://i.postimg.cc/TwnW9GXw/dslrcamrea.png",
    title: "4K Action Camera",
    category: "Camera",
    brand: "GoPro",
    price: 499.99,
  },
  {
    id: 10,
    image: "https://i.postimg.cc/DwDJ3mv0/watch.png",
    title: "Luxury Smartwatch",
    category: "SmartWatch",
    brand: "Garmin",
    price: 349.99,
  },
  {
    id: 11,
    image: "https://i.postimg.cc/0NMSzDW7/laptop.png",
    title: "Ultrabook Laptop",
    category: "Computer",
    brand: "Dell",
    price: 1299.99,
  },
  {
    id: 12,
    image: "https://i.postimg.cc/L8MQBkgB/Galaxy-S23-Ultra-Green-3380.jpg",
    title: "Samsung Galaxy S-23 Ultra",
    category: "Phone",
    brand: "Samsung",
    price: 849.99,
  },
];

// Testimonial
const testimonials = [
  {
    id: 1,
    userName: "Jonathan Smith",
    profile: "https://i.postimg.cc/rFKXD9Xh/user3.jpg",
    review:
      "Absolutely love this store! The products are top-notch, and the customer service is incredible. Highly recommend!",
  },
  {
    id: 2,
    userName: "Emily Davis",
    profile: "https://i.postimg.cc/7htFB57M/user2.jpg",
    review:
      "Great quality and fast delivery! I’ve bought several items, and each exceeded my expectations. Will shop again soon.",
  },
  {
    id: 3,
    userName: "Liam Johnson",
    profile: "https://i.postimg.cc/XN26NzhG/user1.jpg",
    review:
      "Amazing experience! The website is easy to use, and the support team is very responsive. Five stars all the way!",
  },
];

// Categories List
const CategoryData = [
  {
    id: 1,
    name: "Phones",
    image: Phone,
  },
  {
    id: 2,
    name: "Computer",
    image: Computer,
  },
  {
    id: 3,
    name: "SmartWatch",
    image: SmartWatch,
  },
  {
    id: 4,
    name: "Camera",
    image: Camera,
  },
  {
    id: 5,
    name: "Headphone",
    image: Headphone,
  },
  {
    id: 6,
    name: "Gamepad",
    image: Gamepad,
  },
];

export { CategoryData, products, testimonials };
