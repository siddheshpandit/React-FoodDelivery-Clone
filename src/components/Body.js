import { RestaurantCard } from "./Card";

const Body = () => {
    return (
      <div>
        {/* Search */}
        <div className="search"></div>
        <div className="restaurantContainer">
          <RestaurantCard resData={{name:'KFC',cuisine:'Chicken',location:'Hinjewadi'}}/>
          <RestaurantCard />
          <RestaurantCard />
        </div>
      </div>
    );
  };
console.log(Body);
export default Body; 