import {useState} from "react";

function AddMovie(props) {

    const [title, setTitle] = useState("");
    const [rating, setRating] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        const movieDetails = {
            title: title,
            rating: rating
        }

        props.callbackToCreate(movieDetails);

        // Clear form
        setTitle("");
        setRating("");
    }

    return (
        <section>
            <h2>Create your own movie</h2>

            <form onSubmit={handleSubmit} >

                <label>Title:
                    <input
                        name='title'
                        type="text"
                        required
                        placeholder='Harry Potter'
                        value={title}
                        onChange={(e) => { setTitle(e.target.value) }}
                    />
                </label>

                <label>Rating:
                    <input
                        name='rating'
                        type="number"
                        required
                        min={1}
                        max={10}
                        placeholder='10'
                        value={rating}
                        onChange={(e) => { setRating(e.target.value) }}
                    />
                </label>

                <p><button>Create</button></p>
            </form>

        </section>
    );
}

export default AddMovie;