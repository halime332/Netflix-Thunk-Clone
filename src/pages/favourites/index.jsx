
import Loader from "../../Components/Loader";
import { Link } from "react-router-dom";
import  Error from "../../Components/error";
import  { useDispatch ,useSelector} from "react-redux";
import {baseImgUrl} from "../../utils/constants";



const FavouritesPage = () => {
 
  const {isLoading , error ,favorites} =useSelector((store) =>store.favorites);
  console.log(favorites);
   if(isLoading)  return <Loader/>  ;
   if(error) return <Error info={error}/>;

  return (
    <div>
      <h1 className="text-2xl md:text-3xl font-semibold">İzleme Listesi</h1>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4  xl:grid-cols-5 gap-5 my-10">
        {favorites.map((movie) =>{
          <Link to={`/movie/${movie.id}`}>
            <img src={baseImgUrl+movie.posterPath} className="rounded" />
            <h1 className="text-xl text-center font-semibold mt-3">{movie.title}</h1>
          </Link>
          })}
      </div>
    </div>
  )
};

export default FavouritesPage;
