"use client"

import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

const SearchBox = () => {

	const router = useRouter()

	const [search, setSearch] = useState("")

	function handleSubmit (e) {
		e.preventDefault();

		if(!search) return;

		router.push(`/search/${search}`)
	} 

	return (
		<form onSubmit={handleSubmit} className='flex max-w-6xl mx-auto justify-between items-center px-5'>
			<input type="text" 
				   placeholder="Search keywords..." 
				   className='w-full h-14 rounded-sm placeholder-gray-500 outline-none bg-transparent flex-1'
				   onChange={(e) => setSearch(e.target.value)}
				   value={search}
			/>
			<button type="submit" className='text-amber-600 disabled:text-gray-400'>Search</button>
		</form>
	)
}

export default SearchBox