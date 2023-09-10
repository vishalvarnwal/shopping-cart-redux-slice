import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/cartSlice";
import { toast } from "react-hot-toast";

const CartItem = (props) => {
  const { image, price, description, title, id } = props.item;
  const dispatch = useDispatch();
  const removeFromCart = () => {
    dispatch(remove(id));
    toast.success("Item romoved from cart");
  };
  return (
    <div className="flex items-center p-2 md:p-5 justify-between border-b-2 border-slate-500  mt-2 mb-2 md:mx-5 ">
      <div className="flex flex-col md:flex-row p-0 md:p-3 gap-5 items-center">
        <div className="w-[30%]">
          <img className="object-cover" src={image} />
        </div>
        <div className="md:ml-10 self-start space-y-5 w-[100%] md:w-[70%]">
          <h1 className="text-xl text-slate-700 font-semibold">{title}</h1>
          <p className="text-base text-slate-700 font-medium">
            {description.split(" ").slice(0, 15).join(" ") + "..."}
          </p>
          <div className="flex items-center justify-between">
            <p className="font-bold text-lg text-green-600">${price}</p>
            <button
              className=" bg-red-200 text-red-800 group hover:bg-red-400 hover:text-white transition-transform duration-300 cursor-pointer rounded-full p-3 mr-3"
              onClick={removeFromCart}
            >
              <MdDelete />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
