import { menu_list } from "../assets/frontend_assets/assets";
import PropTypes from 'prop-types';

export default function ExploredMenu({ category, setCategory }) {
  return (
    <div className="flex flex-col gap-5" id="explore-menu">
      <h1 className="text-Eerie-Black font-medium text-4xl animate-fade-in">
        Explore our menu
      </h1>
      <p className="max-w-[60%] text-gray-600 animate-fade-in max-lg:max-w-[100%] max-lg:text-sm">
        Choose from a diverse menu featuring a delectable array of dishes.Our
        mission is satisfy your cravings and elevate your dinning experience,one
        delicious meal at a time.
      </p>
      <div className="flex gap-[35px] overflow-x-auto py-5 hide-scrollbar cursor-grab">
        {menu_list.map((item, index) => {
          return (
            <div
              onClick={() =>
                setCategory((prev) =>
                  prev === item.menu_name ? "All" : item.menu_name
                )
              }
              key={index}
              className="flex-shrink-0 text-center w-[7.5vw] min-w-[80px] cursor-pointer rounded-full duration-200 animate-fade-in"
            >
              <img
                src={item.menu_image}
                alt="menu_image"
                className={category === item.menu_name ? "border-4 border-solid border-tomato p-0.5 rounded-full" :""}
              />
              <p className="mt-2.5 text-custom-gray text-[max(1,4vw,16px)] cursor-pointer ">
                {item.menu_name}
              </p>
            </div>
          );
        })}
      </div>
      <hr className="my-2.5 h-0.5 bg-zinc-300" />
    </div>
  );
}

ExploredMenu.propTypes = {
  category: PropTypes.string.isRequired,
  setCategory: PropTypes.func.isRequired,
};