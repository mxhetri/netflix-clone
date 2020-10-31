import React from 'react';
import './App.css';
import Row from "./components/Row";
import Banner from "./components/Banner";
import Nav from './components/Nav';
import requests from "./request";

function App() {
  return (
    <div className="app">
        <Nav/>
        <Banner/>

      {/*   navbar section */}
      {/*  banner section */}


      <Row title='Netflix original' fetchUrl={requests.fetchNetflixOriginals}
           isLargeRow
      />
      <Row title='Trending' fetchUrl={requests.fetchTrending}/>
      <Row title='Top Rated' fetchUrl={requests.fetchTopRated}/>
      <Row title='Action Movies' fetchUrl={requests.fetchActionMovies}/>
      <Row title='Horror Movies' fetchUrl={requests.fetchHorrorMovies}/>
      <Row title='Romance Movies' fetchUrl={requests.fetchRomanceMovies}/>
      <Row title='Documentaries' fetchUrl={requests.fetchDocumentaries}/>
      <Row title='Comedy Movies' fetchUrl={requests.fetchComedyMovies}/>
    </div>
  );
}

export default App;
