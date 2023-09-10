import { toast } from "react-hot-toast";
import { useSelector, useDispatch } from "react-redux";
import { add, remove } from "../redux/Slices/cartSlice";

const Product = ({ item }) => {
  const { id, category, description, image, price, rating, title } = item;
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(add(item));
    toast.success("Item added to cart");
  };

  const removeFromCart = () => {
    dispatch(remove(id));
    toast.success("Item romoved from cart");
  };
  return (
    <div className="flex flex-col items-center justify-between hover:scale-110 group transition duration-300 ease-in gap-3 p-4 mt-10 ml-5 rounded-xl shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] hover:shadow-[0px_0px_95px_53px_#00000024]">
      <div>
        <p className="text-gray-700 font-semibold text-lg text-left truncate w-40 mt-1">
          {title}
        </p>
      </div>
      <div>
        <p className="w-40 text-gray-400 font-normal text-[10px] text-left">
          {description.split(" ").slice(0, 10).join(" ") + "..."}
        </p>
      </div>
      <div className="h-[180px]">
        <img className="h-full w-full" src={image} />
      </div>
      <div className="flex justify-between  items-center w-full mt-5 mx-auto">
        <div>
          <p className="text-green-600 font-semibold">${price}</p>
        </div>
        <div>
          {cart.some((item) => item.id === id) ? (
            <button
              className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold text-[12px] p-1 px-3 uppercase group-hover:bg-gray-700 group-hover:text-white"
              onClick={removeFromCart}
            >
              REMOVE ITEM
            </button>
          ) : (
            <button
              className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold text-[12px] p-1 px-3 uppercase group-hover:bg-gray-700 group-hover:text-white"
              onClick={addToCart}
            >
              ADD TO CART
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Product;
