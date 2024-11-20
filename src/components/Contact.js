import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

function DataFetcher() {

  const [data, setData] = useState(null);

  useEffect(() => {

    const fetchData = async () => {
const response = await fetch("https://jsonplaceholder.typicode.com/posts");
const result = await response.json();
setData(result);
console.log(result);

    };
    fetchData();
  },[]);
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
 export default DataFetcher;


