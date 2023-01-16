
import { imageID } from "../constants";
const RestaurantCard = ({cloudinaryImageId, name, cuisines, costForTwoString}) => {
    return(
        <>
            <div className="restaurant-card">
                <img src={imageID + cloudinaryImageId} alt="restaurant image" />
                <h2>{name}</h2>
                <h3>{cuisines.join(', ')}</h3>
                <h4>{costForTwoString}</h4>
            </div>
        </>
    );
};

export default RestaurantCard;