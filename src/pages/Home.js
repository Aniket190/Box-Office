import React, { useState } from 'react';
import MainPageLayout from '../components/MainPageLayout';
import { apiGET } from '../misc/config';
import ShowGrid from '../components/show/ShowGrid'
import ActorGrid from '../components/actor/ActorGrid'





const Home = () => {
  const [input, setInput] = useState('');
  const [results, setResults] = useState(null);
  const [searchOption, setSearchOption] = useState('shows');

  const isShowSearch = searchOption === 'shows';

  const onInputChange = ev => {
    setInput(ev.target.value);
  };

  const onSearch = () => {
    // https://api.tvmaze.com/search/shows?q=girls

    apiGET(`/search/${searchOption}?q=${input}`).then(result => {
      setResults(result);
    });
  };

  const onKeyDown = ev => {
    if (ev.keyCode === 13) {
      onSearch();
    }
  };

  const renderResults = () => {
    if (results && results.length === 0) {
      return <div>No results</div>;
    }

    if (results && results.length > 0) {
      return results[0].show ? <ShowGrid data={results}/> : <ActorGrid data={results}/>;
    }

    return null;
  };

  const onRadioChange = ev => {
    setSearchOption(ev.target.value);
  };

  console.log(searchOption);

  return (
    <div>
      <MainPageLayout>
        <input
          type="text"
          placeholder="Search for something!"
          onChange={onInputChange}
          val={input}
          onKeyDown={onKeyDown}
        />

        <div>
          <label htmlFor="show-search">
            shows
            <input
              id="show-search"
              type="radio"
              value="shows"
              checked={isShowSearch}
              onChange={onRadioChange}
            />
          </label>
          <label htmlFor="Actor-search">
            Actors
            <input
              id="Actor-search"
              type="radio"
              value="people"
              checked={!isShowSearch}
              onChange={onRadioChange}
            />
          </label>
        </div>
        <button type="button" onClick={onSearch}>
          Search
        </button>
        {renderResults()}
      </MainPageLayout>
    </div>
  );
};

export default Home;
