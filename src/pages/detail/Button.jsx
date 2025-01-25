import { Link } from "react-router-dom";
import { RiArrowLeftWideLine } from "react-icons/ri";
import { MdBookmarkAdd } from "react-icons/md";
import { useDispatch } from "react-redux";
import { toggleFavorite } from "../../redux/actions";


const Button = ({movie}) => {
 const dispatch =useDispatch();

  const handleClick =() =>{
    dispatch(toggleFavorite( movie,true));
  }
  return (
  
    <div className="mb-5 flex justify-between ">
        <Link to={".."} className="bg-gray-600 py-2 px-4 rounded hover:bg-gray-500 transition flex gap-2 items-center">
        <RiArrowLeftWideLine className="text-xl" />
        Geri
        </Link>
        <button  onClick={handleClick} className="bg-blue-600 py-2 px-4 rounded hover:bg-blue-500 transition flex gap-2 items-center">
            <MdBookmarkAdd  className="text-xl"/>
            İzleme Listesi
        </button>
    </div>
  );
};

export default Button;