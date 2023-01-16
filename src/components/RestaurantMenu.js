import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
    const [restaurantDetail, setrestaurantDetail] = useState(null);
    const { id } = useParams();

    useEffect(()=>{
         getRestaurantInfo();
    }, [])

    async function getRestaurantInfo(){
        const data = await fetch("https://www.swiggy.com/dapi/menu/v4/full?lat=28.9472173&lng=77.6946489&menuId="+id);
        const json = await data.json();
        setrestaurantDetail(json.data);
    }

    return !restaurantDetail ? '' :(
        <div className="restaurant-menu">
            <div>{restaurantDetail?.id}</div>
            <div>{restaurantDetail?.name}</div>
            <div>{restaurantDetail?.avgRating}</div>
            <div>Menu
                <ul>
                    {
                        Object.values(restaurantDetail?.menu?.items).map((item)=>(
                            <li key={item?.id}>{item?.name}</li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}
export default RestaurantMenu;