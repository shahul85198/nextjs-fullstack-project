'use client';

import Reaxt, { useState } from 'react'

export default function SearchBar({searchCallback}: any) {

    const [searchText, setSearchText] = useState('')
    console.log('searchtext', searchText)

    const onSearch = () => {
        searchCallback(searchText)
        setSearchText('')
    }
    return (
        <>
        <div className='input-group'>
        <h1>This Search is made using nextjs& prisma...</h1>
        <h1>working on it</h1>
            <input 
              value={searchText}
              type='text'
              className='input'
              id='email'
              name='email'
              placeholder='Enter course name'
              onChange={e => setSearchText(e.target.value)}
            />
            <input 
             className='button--submit'
             value='Search'
             type='submit'
             onClick={onSearch}
            />
        </div>
            </>
    )
}