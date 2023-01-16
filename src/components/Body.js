import RestaurantCard from "./Restaurant";
import { restaurantList } from "../constants";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const BodyComponent = () =>{
    const [searchText, setSearchText] = useState("");
    const [allRestaurants, setAllRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);

    function filterData(restaurants, searchText){
        const filteredData =  restaurants.filter((restaurant) =>
            restaurant?.data?.name.toLowerCase().includes(searchText.toLowerCase()));
        return filteredData;
    }
    useEffect(()=>{
        getRestaurants();
    }, []);

    async function getRestaurants(){
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.9472173&lng=77.6946489&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
        setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    }
    return allRestaurants?.length === 0 ? <Shimmer /> : 
        (
        <>  
            <div className="search-wrapper">
                <input 
                    type="text" 
                    placeholder="Search Restaurant"
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                />
                <button type="button" onClick={()=> {
                    const data = filterData(allRestaurants, searchText);
                    setFilteredRestaurants(data);
                }}>Search</button>
            </div>
             <div className="restaurant-card-wrapper">
                {
                    filteredRestaurants.map((restaurant) => {
                    return(
                        <Link to={"/restaurant/" + restaurant.data.id} key={restaurant.data.id}>
                            <RestaurantCard {...restaurant.data} />
                        </Link>
                    ); 
                    })
                }
            </div>
        </>
    )
}; 

export default BodyComponent;