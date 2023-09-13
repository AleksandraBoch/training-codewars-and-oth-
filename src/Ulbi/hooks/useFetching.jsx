import React, {useState} from 'react';

const UseFetching = (callback) => {
    const [isFetching,setIsFetching]=useState(false)
 const [error,setError]=useState('')

   const fetching=async (...args)=>{
       try{
           setIsFetching(true)
           await callback(...args)
       } catch (e){setError(e.message)}
       finally {
           setIsFetching(false)
       }
   }
return [fetching, isFetching,error]
};

export default UseFetching;