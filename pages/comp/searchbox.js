import React, {useState} from 'react'
import { useRouter } from 'next/router';

export default function SearchBox({value}) {
  const [val, setVal] = useState("");
  const router = useRouter();
  React.useEffect(()=>{
    if (value !== undefined){
      setVal(value);
    }
  }, []);
  function keyDownHandler(e){
    if (e.key === 'Enter'){
      router.push(`/search/${val}`);
    }
  }
  return (
    <>
        <input type='search' value={val} onChange={(e)=>setVal(e.target.value)} placeholder='Search the Help Centre' className='main-search-activity' onKeyDown={keyDownHandler}/>
    </>
  )
}
