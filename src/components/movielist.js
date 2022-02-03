import React from 'react';

const MovieList=(props)=> {
   /*  
    function delComp(){
        console.log("Button Clicked")
    } */
        return (

            <div className="row">

                {props.movies.map((movie) =>
                    <div className="col-lg-4 mb-5 shadow-sm" key={movie.id}>
                        <div className="card px-0">
                            <img src={movie.imageURL} className='card-img-top' alt='Sample Movie'></img>
                        </div>
                        <div className="card-body">
                            <h4>{movie.name}</h4>
                            <p>{movie.overview}</p>
                            <div className="d-flex justify-content-between align-items-center">
                                <button onClick={(event)=>props.delCompProp(movie)}type="button" className="btn btn-md btn-outline-danger">Delete</button>
                                <h2><span className="badge bg-info">{movie.rating}</span></h2>
                            </div>
                        </div>
                    </div>
                )}



            </div>

        )
}
export default MovieList;