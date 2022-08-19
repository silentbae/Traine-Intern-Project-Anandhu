import React, { useState, useEffect } from 'react';
import Posts from './posts';
import Pagination from './pagination';
import'./Table.css'
const Table = () => {
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(5);

  const [data, getData] = useState([])
    const URL = 'https://dummyjson.com/users?limit=40&skip=0';

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = () => {
      fetch(URL)
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
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = data.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <div className="pagination">
      <Posts data={currentPosts} loading={loading} />
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={data.length}
        paginate={paginate}
      />
    </div>
  );
};

export default Table;
