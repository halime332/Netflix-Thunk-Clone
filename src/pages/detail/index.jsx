import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../utils/api";
import Banner from "./Banner";
import Content from "./Content";
import ActorList from "./ActorList";
import VideoList from "./VideoList";
import Button from "./Button";
import Loader from "../../Components/Loader";
import Error from "../../Components/error";







const Detail = () => {
    const [movie, setMovie]=useState(null);
    const [error, setError]=useState(null); 
    const {id} =useParams();


    useEffect(() => {
        const params={
            append_to_response:"credits,videos",
            language:"tr",
        };

        api
         .get(`/movie/${id}`,{params})
         .then((res)=>setMovie(res.data))
         .catch((err)=>setError(err.message));
    } ,[]);

  

    if(error) return <Error info={message}/>;

    if(!movie) return <Loader/>;
  
  return (
    <div>

       {/*izleme listesi butonu */}
        <Button movie={movie} />
        {/* üst resim  alan */}
       <Banner movie={movie}/>

       {/* orta içerik alanı */}
       <Content movie={movie}/>

       {/*oyuncu listesi */}
       {movie.credits.cast ? <ActorList actors={movie.credits.cast}/> : <div>Filme ait oyuncu bilgisi bulunamadı.</div>}

       {/*fragman listesi */}
      {movie.credits.results? <VideoList videos={movie.videos.results}/>: <div>video yok</div>}
    </div>
  );
  
};

export default Detail;
