import React, { useState, useEffect } from 'react';
import Posts from './posts';
import Pagination from './pagination';
import'./Table.css'
import { useParams } from 'react-router-dom';
const Table = () => {
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  //const [postsPerPage] = useState(5);

  const [data, getData] = useState([])
  const params = useParams()
    useEffect(() => {
        fetchData()
    }, )

    const fetchData = () => {
      fetch(`https://dummyjson.com/users?limit=5&skip=${(params.pageNo-1)*5}`)
          .then((res) =>
              res.json())

          .then((response) => {
              console.log("data-->",response);
              if(response){
                  getData(response.users&&response.users);
              }
              setLoading(false);
          })
  }
  // Get current posts
  //const indexOfLastPost = currentPage * postsPerPage;
  //const indexOfFirstPost = indexOfLastPost - postsPerPage;
  //const currentPosts = data.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <div className="pagination">
      <Posts data={data&&data} loading={loading} />
      <Pagination
        
        paginate={paginate}
      />
    </div>
  );
};

export default Table;
