function Movie(props) {    
    return (
        <div className="card" key={props.movieDetails.id}>
            {props.movieDetails.imgURL
                ? <img src={props.movieDetails.imgURL} />
                : <img src="https://dummyimage.com/182x268/ffffff/000000" />
            }

            <p>Title: {props.movieDetails.title}</p>

            {props.movieDetails.rating > 8 && <p>RECOMMENDED</p>}

            <button onClick={() => { props.callbackToDelete(props.movieDetails.id) }}>Delete</button>
        </div>
    );
}

export default Movie;