import { useContext } from "react";
import { StoreContext } from "../context/StoreContext.jsx";
import FoodItem from "./FoodItem";

export default function FoodDisplay({ category }) {
  const { food_list } = useContext(StoreContext);

  return (
    <div className="mt-[30px]" id="food-dislpay">
      <h2 className="text-[max(2vw,24px)] font-medium">
        {" "}
        Top dishese near you
      </h2>
      <div className="grid grid-cols-auto-fill-240 mt-[30px] gap-[30px] gap-y-[50px]">
        {food_list.map((item, index) => {
          if (category === "All" || category === item.category) {
            return (
              <FoodItem
                key={index}
                id={item._id}
                name={item.name}
                description={item.description}
                price={item.price}
                image={item.image}
              />
            );
          }
        })}
      </div>
    </div>
  );
}
