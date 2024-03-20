export const RestaurantCard = (prop) => {
    const {resData}= prop;
  return (
    <div className="card">
      <img
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/akbvvc2wh0wgei00vax4"
        width={250}
        height={250}
        alt="Restaurant"
      />
      <div className="card-body">
        <h3>{resData?.name}</h3>
        <div className="ratings">
          <h4>Ratings</h4>
          {/* You can add the ratings here */}
        </div>
        <p>{resData?.cuisine}</p>
        <p>{resData?.location}</p>
      </div>
    </div>
  );
};