import React from "react";
import ReactDOM from "react-dom/client";
//here data is in object of object format
const resdata = {
  data: {
    id: "0",
    image:
      "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/w1rrow27w3vb3ur5xbi9",
    name: "McDonald's",
    cuisines: ["fast food", "Biryani", "American"],
    rating: 4.3,
    time: "30-40",
    offer: "50%",
  },
  data: {
    id: "1",
    image:
      "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/ch07avzpos83wrfdfhyh",
    name: "Special Biriyani",
    cuisines: ["asian", "biryani", "American"],
    rating: 3.8,
    time: "30-40",
    offer: "60%",
  },
  data: {
    id: "2",
    image:
      "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/hiezygiuixjqjogg6w2b",
    name: "Hyderabadi Bawarchi",
    cuisines: ["frenchfries", "korean", "American"],
    rating: 4.1,
    time: "25-35",
    offer: "55%",
  },
  data: {
    id: "3",
    image:
      "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/q391dhemwszg9orhgldh",
    name: "Calofornia Burrito",
    cuisines: ["chinese", "korean", "American"],
    rating: 4.5,
    time: "20-30",
    offer: "30%",
  },
  data: {
    id: "4",
    image:
      "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_112,h_112,c_fill/ei26sjhizcjrk9gmjy5r",
    name: "udupi Utsav",
    cuisines: ["burger", "Biryani", "American"],
    rating: 4.3,
    time: "30-40",
    offer: "60%",
  },
};

//here data is in  arrayList of object form
const resdata2 = [
  {
    id: "0",
    image:
      "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/w1rrow27w3vb3ur5xbi9",
    name: "McDonald's",
    rating: 4.3,
    cuisines: ["fast food", "Biryani", "American"],
    time: "30-40",
    offer: "50%",
  },
  {
    id: "1",
    image:
      "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/ch07avzpos83wrfdfhyh",
    name: "Special Biriyani",
    rating: 3.8,
    cuisines: ["asian", "biryani", "American"],
    time: "30-40",
    offer: "60%",
  },
  {
    id: "2",
    image:
      "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/hiezygiuixjqjogg6w2b",
    name: "Hyderabadi Bawarchi",
    rating: 4.1,
    cuisines: ["frenchfries", "korean", "American"],
    time: "25-35",
    offer: "55%",
  },
  {
    id: "3",
    image:
      "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/q391dhemwszg9orhgldh",
    name: "Calofornia Burrito",
    rating: 4.5,
    cuisines: ["chinese", "korean", "American"],
    time: "20-30",
    offer: "30%",
  },
  {
    id: "4",
    image:
      "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_112,h_112,c_fill/ei26sjhizcjrk9gmjy5r",
    name: "udupi Utsav",
    rating: 4.3,
    cuisines: ["chinese", "korean", "American"],
    time: "30-40",
    offer: "60%",
  },
];

const Header = () => {
  return (
    <div className="navbar-container">
      <div>
        <img
          className="logo"
          width="100px "
          src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/restaurants-logo-design-template-eb1f6d0e8eb2cf27acf51800b738626d_screen.jpg?ts=1695699117"
          alt="logo"
        />
      </div>
      <div className="navbar-items">
        <li>Home</li>
        <li>About</li>
        <li>Cart</li>
      </div>
    </div>
  );
};
const CardComponent = (props) => {
  const { getdata } = props;
  const { name, offer, rating, image, cuisines } = getdata;

  return (
    <div className="card-items">
      <img className="card-img" src={image}></img>
      <div className="food-details">
        <p>{name}</p>
        <p>{offer}</p>
        <p>{rating}</p>
        <p> {cuisines.join(",")}</p>
      </div>
    </div>
  );
};
const Body = () => {
  return (
    <div className="body-Container">
      {resdata2.map((x) => {
        {
          /*as map is javscript code,so we are using {} */
        }
        return <CardComponent key={x.id} getdata={x} />;
      })}
    </div>
  );
};

const AppLayout = () => {
  return (
    <div>
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
