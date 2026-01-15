import React, { useState } from 'react'

const SearchBar = ({onSearch, loading}) => {
    const [inputCity, setInputCity] = useState("");

    const handleSubmit=(e) => {
        e.preventDefault();
        if(inputCity.trim()){
            onSearch(inputCity.trim());
            setInputCity("");
        }
    }

  return (
    <div className='w-md'>
        <form onSubmit={handleSubmit} className="relative w-full max-w-md mx-auto mb-8">
            <div className="relative flex items-center">
                <input
                    type="text"
                    value={inputCity}
                    onChange={(e) => setInputCity(e.target.value)}
                    placeholder="Search city (e.g. Lucknow)..."
                    className="w-full p-4 pl-6 pr-24 rounded-full bg-indigo-300 backdrop-blur-md border border-white/20 text-white placeholder-white/50 outline-none focus:ring-2 focus:ring-blue-400 transition-all shadow-inner"
                />
                <button
                    type="submit"
                    className="absolute right-2 top-1.5 bottom-1.5 px-6 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-full transition-all active:scale-95 shadow-lg"
                >
                    {!loading ? "Search" : "Searching the Skies..."}
                </button>
            </div>
        </form>
    </div>
  )
}

export default SearchBar