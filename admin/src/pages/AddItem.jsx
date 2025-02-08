import { useState } from "react";
import { assets } from "../assets/admin_assets/assets";
import axios  from "axios";
import { toast } from "react-toastify";

export default function AddItem() {
  const url = "http://localhost:4000";
  const [image, setImage] = useState(false);
  const [formdata, setFormdata] = useState({
    name: "",
    description: "",
    price: "",
    category: "Salad",
  });

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setFormdata((formdata) => ({ ...formdata, [name]: value }));
  };

  const onSubmitHandeler = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("name", formdata.name);
    data.append("description", formdata.description);
    data.append("price", formdata.price);
    data.append("category", formdata.category);
    data.append("image", image);
    try {
      const res = await axios.post(`${url}/api/food/add`, data);
      if (res.data && res.data.success) {
      setFormdata({
        name: "",
        description: "",
        price: "",
        category: "Salad",
      });
      setImage(false);
      toast.success("Item Added Successfully")
    } else {
      // console.log("Error: Unexpected API response", res.data);
      toast.error(res.data.message)
    }
    } catch (error) {
      // console.log(error);
      toast.error(error)
    }
  };

  return (
    <div className="w-[70%] ml-[max(5vw,25px)] mt-12 text-[#6d6d6d] text-base bg">
      <form
        className="gapx-5 
                      flex flex-col gap-2.5"
        onSubmit={onSubmitHandeler}
      >
        <div
          className="add-img-upload 
                          flex flex-col gap-2.5"
        >
          <p>Upload Image</p>
          <label htmlFor="image">
            <img
              className="w-36 cursor-pointer border border-dotted border-black rounded-lg"
              src={image ? URL.createObjectURL(image) : assets.upload_area}
              alt=""
            />
          </label>
          <input
            onChange={(e) => setImage(e.target.files[0])}
            type="file"
            id="image"
            hidden
            required
          />
        </div>
        <div
          className="w-[max(40%,280px)] 
                        flex flex-col gap-2.5"
        >
          <p>Product Name</p>
          <input
            onChange={onChangeHandler}
            value={formdata.name}
            className="p-2.5 border border-solid border-black"
            type="text"
            name="name"
            id="name"
            placeholder="Type Here"
            required
          />
        </div>
        <div
          className="w-[max(40%,280px)]  
                          flex flex-col gap-2.5"
        >
          <p>Product Description</p>
          <textarea
            onChange={onChangeHandler}
            value={formdata.description}
            className="p-2.5 border border-solid border-black"
            name="description"
            rows="6"
            placeholder="Write content here"
            required
          ></textarea>
        </div>
        <div className="flex gap-7">
          <div
            className="add-category 
                          flex flex-col gap-2.5"
          >
            <p>Product Category</p>
            <select
              onChange={onChangeHandler}
              name="category"
              className="max-w-[120px] p-2.5 border border-solid border-black"
              required
            >
              <option value="Salad">Salad</option>
              <option value="Rolls">Rolls</option>
              <option value="Deserts">Deserts</option>
              <option value="Sandwich">Sandwich</option>
              <option value="Cake">Cake</option>
              <option value="Pure Veg">Pure Veg</option>
              <option value="Pasta">Pasta</option>
              <option value="Noodles">Noodles</option>
            </select>
          </div>
          <div
            className="add-price 
                          flex flex-col gap-2.5 "
          >
            <p>Product Price</p>
            <input
              onChange={onChangeHandler}
              value={formdata.price}
              type="number"
              className="max-w-[120px] p-2.5 border border-solid border-black"
              name="price"
              id="price"
              placeholder="₹20"
              min="0"
              required
            />
          </div>
        </div>
        <button
          type="submit"
          className="max-w-[120px] border-none p-2.5 bg-black text-white cursor-pointer"
        >
          ADD
        </button>
      </form>
    </div>
  );
}
