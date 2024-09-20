// app/components/Search.tsx
'use client'

import { useState } from 'react';

interface SearchProps {
  onSearch: (query: string) => void;
}

const Search: React.FC<SearchProps> = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    if (value.length >= 3) {
      onSearch(value);
    } else {
      onSearch(''); // Clear search results if less than 3 characters
    }
  };

  return (
    <div className="mb-4">
      <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={handleSearch}
        className="border rounded-lg p-2 w-full"
      />
    </div>
  );
};

export default Search;
