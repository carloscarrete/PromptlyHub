'use client';

import { useEffect, useState } from "react";
import PromptCard from "./PromptCard";


const Feed = () => {

  const [searchText, setSearchText] = useState('');
  const [searchTimeout, setSearchTimeout] = useState(null);
  const [searchedResults, setSearchedResults] = useState([]);

  const [posts, setPosts] = useState([]);


  const filteredPrompts = (text) => {
    const regex = new RegExp(text, "i");
    return posts.filter((item) =>
      regex.test(item.creator.username) ||
      regex.test(item.tag) ||
      regex.test(item.pro)
    );
  }
  const handleSearchText = (e) => {
    clearTimeout(searchTimeout);
    setSearchText(e.target.value);

    // debounce method
    setSearchTimeout(
      setTimeout(() => {
        const searchResult = filteredPrompts(e.target.value);
        setSearchedResults(searchResult);
      }, 500)
    );
  }



  const PromptListCard = ({ data, handleTagClick }) => {
    return (
      <div className="mt-16 prompt_layout">
        {
          data.map((post) => (
            <PromptCard
              key={post._id}
              post={post}
              handleTagClick={handleTagClick}
            />
          ))
        }
      </div>
    );
  };

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch('/api/prompt');
      const data = await res.json();
      setPosts(data);
    }
    fetchPosts();
  }, [])

  return (
    <section className="feed">
      <form className="relative w-full flex-center">
        <input
          type="text"
          placeholder="Search a tag or a username"
          value={searchText}
          onChange={handleSearchText}
          className="search_input peer"
        />
      </form>

      <PromptListCard
        data={searchedResults}
        handleTagClick={() => { }}
      />
    </section>
  )
}

export default Feed