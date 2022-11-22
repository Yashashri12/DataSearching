import React from 'react'
import { useGlobleContext } from './context'
const Search = () => {
  const{query,searchPost}=useGlobleContext();
 

  return (
    <>
    <h1>Search Data</h1>
    <form onSubmit={(e)=>e.preventDefault()}>
      <div>
        <input type="text"placeholder="search here"
        value={query}
        onChange={(e)=>searchPost(e.target.value)}></input>
      </div>
    </form>
    </>
  )
}

export default Search