import React from 'react'

const SearchItem = ({search, setSearch}) => {
  return (
    <form className='searchForm'>
        <label htmlFor="searchItem">search</label>
        <input 
            type="text" 
            id='search'
            placeholder='Search'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
        />
    </form>
  )
}

export default SearchItem