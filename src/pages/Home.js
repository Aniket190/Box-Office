import React,{useState} from 'react';
import MainPageLayout from '../components/MainPageLayout';
import {apiGET} from '../misc/config'

const Home = () =>{
    const [input,setInput]=useState('');
    const [results, setResults] = useState(null);


    const onInputChange = (ev) =>{
         setInput(ev.target.value);
    }

    const onSearch =() =>{
        // https://api.tvmaze.com/search/shows?q=girls
        
         apiGET(`/search/shows?q=${input}`).then(result =>{
               setResults(result)
           })

    }

    const onKeyDown = (ev) =>{
               if(ev.keyCode === 13)
                 {
                     onSearch()
                 }
                
    }

const renderResults = () => {
        if (results && results.length === 0) {
          return <div>No results</div>;
        }
    
        if (results && results.length > 0) {
          return (
            <div>
              {results.map(item => (
                <div key={item.show.id}>{item.show.name}</div>
              ))}
            </div>
          );
        }
    
        return null;
      };

    return (
        <div>
           <MainPageLayout> 
              
             <input type="text" onChange={onInputChange} val={input}  onKeyDown={onKeyDown}/>
             <button type="button" onClick={onSearch}>Search</button>
             {renderResults()}
           </MainPageLayout>
        </div>
    )
}

export default Home
