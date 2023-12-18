import react from "react";
import reactDom from "react-dom";


const Header=()=>{
  return(
    <div className="header">
      <div className="logo-container">
        <img className="logo" src="https://png.pngtree.com/png-vector/20220708/ourmid/pngtree-fast-food-logo-png-image_5763171.png" />
      </div>
      <div className="navbar-items">
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>Contact us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  )
}

const RestaurantCard=()=>{
  return(
    <div className="res-card">
      <img className="res-logo" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/gtishbzcu8cnz4l6ggef" />
      <h3>Arsalan</h3>
      <h4>Biriyani,Chinese</h4>
      <h4>4.5 stars</h4>
      <h4>30 minutes</h4>
    </div>
  )
}

const Body = () => {
  return (
    <div className="body">
      <div className="search">
        Search
      <div className="res-container">
        <RestaurantCard />
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
      </div>
      </div>
    </div>
  )
}



const AppLayout =() =>{
  return (
    <div className="AppLayout">
      <Header/>
      <Body />
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);
