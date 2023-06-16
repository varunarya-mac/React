import { useState } from 'react'
import { SearchBar } from './component/SearchBar'
import { SearchList } from './component/SearchList'
import './App.css'
import { debounce } from "lodash";
import { useCallback } from "react";


function App() {

  const [list, setList] = useState([]);
  const [query, setQuery] = useState('');
  
  function QueryUpdate(value: string) {
    setQuery(value);
    debounceFn(value);
  }

  const debounceFn = useCallback(debounce(getData, 1000), []);

  async function getData(query: string) {
  if(query){
    const res = await fetch(
            `https://swapi.dev/api/people/?search=${query}`
          );
      const data = await res.json();
      const nameList = data.results.map((item: any)=> item.name)
      setList(nameList);
    }
  }
 
  return (
      <div className='container'>
        <SearchBar getData={QueryUpdate} query={query}/>
        {list && <SearchList list={list} updateQuery= {QueryUpdate}/>}
      </div>
  )
}

export default App
