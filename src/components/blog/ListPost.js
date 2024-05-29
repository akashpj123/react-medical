import axios from "axios";
import { useEffect, useState } from "react";
import { Link, } from "react-router-dom";
import { useSelector } from "react-redux";
import Navbar from "../Navbar";
import PostListItem from "./PostListitem";


function ListPosts() {
  const [allPosts, setAllPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  
  const user = useSelector(state => state.auth.user);

  async function fetchPosts() {
    setLoading(true);
    try {
      if (!user) {
        console.error("User is not logged in");
        return;
      }
      const response = await axios.get('https://medicalstore.mashupstack.com/api/medicine', {
        headers: { 'Authorization': "Bearer " + user.token }
      });
      setAllPosts(response.data);
      setFilteredPosts(response.data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }
  
  

  useEffect(() => {
    if (user) {
      fetchPosts();
    }
  }, );

  const handleSearchInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = (event) => {
    event.preventDefault();
    if (searchTerm.trim() === "") {
      setFilteredPosts(allPosts);
    } else {
      const filteredItems = allPosts.filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    
      );
      setFilteredPosts(filteredItems);
    }
  };

  return (
    <div>
      <Navbar />
      <br />
      <br />
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <form className="pt-2">
              <label>Search Medicine: </label>
              <input
                type="text"
                value={searchTerm}
                onChange={handleSearchInputChange}
              />{" "}
              &nbsp;
              <button
                className="btn btn-small btn-success"
                type="button"
                onClick={handleSearch}
              >
                Search
              </button>
              &nbsp;
            </form>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1 className="text-center my-4">Medicine</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-8 offset-2">
            <Link to="/blog/posts/create" className="btn btn-danger mb-2">
              Create Medicine
            </Link>
            {filteredPosts.length === 0 ? (
              <p>No matching medicines found.</p>
            ) : (
              filteredPosts.map((post) => (
                <PostListItem key={post.id} post={post} refresh={fetchPosts} />
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ListPosts;
