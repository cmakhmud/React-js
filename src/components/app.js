import React from 'react';
import SearchBar from './searchbar';
import MovieList from './movielist';
import axios from 'axios'
class App extends React.Component{
    state={
        movies: [ ],
      searchQuery:""
    
    }
      delComp = async (movie)=> {
        /* const baseUrl = await `http://localhost:3002/movies/${movie.id}` 
        await fetch(baseUrl,{
          method:"DELETE"
        }) */
        axios.delete(`http://localhost:3002/movies/${movie.id}`)
        const movieList = this.state.movies.filter(
          m=>m.id !== movie.id
        );
        this.setState({
          movies:movieList
        })
      }
     /*  async componentDidMount(){
        const baseUrl = "http://localhost:3002/movies"
        const response = await fetch(baseUrl)
        console.log(response)
        const data = await response.json()
        console.log(data)
        this.setState({movies:data})
      } */
      async componentDidMount(){
        const response = await axios.get("http://localhost:3002/movies")
        //console.log(response)
        this.setState({movies: response.data})
        
      }
      searchMovie=(event)=>{
        this.setState({searchQuery:event.target.value})
      }
    render(){
      let searchTargetMovie = this.state.movies.filter(
        (movie)=>{
          return movie.name.toLowerCase().indexOf(this.state.searchQuery.toLowerCase()) !==-1
        }
      )
        return(
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <SearchBar searchMovieProp={this.searchMovie}/>
                    </div>
                </div>
              <div className='container'>
                <MovieList
                    movies = {searchTargetMovie}
                    delCompProp={this.delComp}
                />
              </div>
            </div>
        )
    }
}

export default App;