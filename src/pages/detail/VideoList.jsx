import { Splide, SplideSlide  } from "@splidejs/react-splide";





const VideoList = ({videos}) => {
  if(!videos) return;
  return (
   <div className="my-5">
     <h2 className="font-semibold text-lg md:text-xl my-5">Fragmanlar</h2>
 
       <Splide options={{pagination:false}}>
         {videos.map((video,key)=>(
          <SplideSlide key={key}>
            <div className="w-full">
            <iframe width="100%" height="315" src={`https://www.youtube.com/embed/${video?.key}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
          </SplideSlide>
         ))}
       </Splide>
   </div>
  );
  
};

export default VideoList;
