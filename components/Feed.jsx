"use client";

import React, { useEffect, useState } from 'react'
import PromptCard from './PromtCard';

const PromptCardList = ({data, handleTagClick}) => {
  return (
    <div className="mt-16 prompt_layout">
      {data.map((post, key) => (
        <PromptCard
          key={key}
          post={post}
          handleTagClick={handleTagClick}
        />
      ))}
    </div>
  )
}

const Feed = () => {
  const [searchText, setSearchText] = useState('');
  const [posts, setPosts] = useState([]);
  const handleSearchChange = (e) => {

  }

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch('/api/prompt');
      const data = await res.json();

      setPosts(data)
    }
    fetchPosts()
  }, []);
  return (
    <section className='feed'>
      <form action="" className="relative w-full flex-center">
        <input type="text" placeholder='Search for a tag or a username' value={searchText} onChange={handleSearchChange} required className='form_input peer' />
      </form>
      <PromptCardList
        data={posts}
        handleTagClick={() => {}}
      />
    </section>
  )
}

export default Feed