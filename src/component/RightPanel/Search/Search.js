import React from 'react'
import SearchIcon from '../../../img/search-icon.svg'
import './Search.css'

const Search = () => {
  return (
    <div className='container'>
      <div className='search-box bg-white p-3 mt-4 d-flex'>
        <img src={SearchIcon} alt="search icon" />
        <input className='form-control' type="text" name="Search" id="search-input" placeholder='Search' />
      </div>
    </div>
  )
}

export default Search
