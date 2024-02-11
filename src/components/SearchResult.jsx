import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { Context } from '../context/contextApi';
import { fetchData } from '../utils/api';
import LeftNav from './LeftNav';
import SearchResultVideo from "./SearchResultVideo";

const SearchResult = () => {
  const [result,setResult] = useState([]);
  const {searchQuery} = useParams();
  const {setLoading} = useContext(Context);

  const fetchsearchResults = ()=>{
    setLoading(true);
    fetchData(`search/?q=${searchQuery}`).then((res)=>{
      console.log(res.contents);
      setResult(res?.contents)
      setLoading(false);
      
    });
   };

  useEffect(()=>{
document.getElementById('root').classList.remove("custom-h");
fetchsearchResults()
  },[searchQuery])
 
 

  return (
    <div className='flex flex-row h-[calc(100%-56px)] '>
      <LeftNav />
      <div className='grow w-[calc(100%-240px)] h-full overflow-y-auto bg-black'>
        <div className='grid grid-cols-1 gap-2 p-5'>
          {result.map((item)=>{
            if(item?.type !== "video") return null;
            let video = item?.video;
            return(
              <>
              <SearchResultVideo key={video?.video?.Id}
              video = {video}
              />
              </>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default SearchResult;