import React, { useEffect, useState } from 'react'

function useFetch(url){


    const [data,setData] = useState(null);
    const[loading,setLoadinng] = useState(true);
    const[error,setError] = useState(null);

    useEffect(()=>{
   const fetchData = async()=>{

    try{
         const response = await fetch(url);
         const result = await response.json();
         setData(result);
    }catch(error){
        setError(error);
    }
    finally{
        setLoadinng(false);
    }
   }
fetchData();
    },[url])
return {data,loading,error}
}

const User = () => {

    const {data,loading,error} = useFetch(
       "https://jsonplaceholder.typicode.com/posts"
    );
    
    if  (loading) {
        return <p>loading...</p>;
    }

    if(error){
        return <p>Error...{error}</p>
    }

    return(
        <div>
          hello;
      
      
          {data ? <p>{data.title}</p> : <p>loading...</p> }
      
          <table className="table table-dark">
        <thead>
          <tr>
            <th scope="col">User Id </th>
            <th scope="col">Id</th>
            <th scope="col">Title</th>
            <th scope="col">Body</th>
          </tr>
        </thead>
        <tbody> 
                {data ? (
                  data.map((data) => (
                    <tr key={data.id}>
                      <td>{data.userId}</td>
                      <td>{data.id}</td>
                      <td>{data.title}</td>
                      <td>{data.body}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="4">Loading...</td>
                  </tr>
                )}
              </tbody>
      </table>
        </div>
      )
      
}


export default User
