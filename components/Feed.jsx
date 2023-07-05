'use client';

import { useEffect, useState } from "react";
import PromptCard from "./PromptCard";


const Feed = () => {

  const [searchText, setSearchText] = useState('');
  const [posts, setPosts] = useState([]);

  const handleSearchText = (e) => {

  }

  const PromptListCard = ({data,handleTagClick }) => {
    return (
    <div className="mt-16 prompt_layout">
        {
          data.map((post)=> (
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
        data={posts}
        handleTagClick={()=>{}}
      />
    </section>
  )
}

export default Feed