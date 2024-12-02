import React, { useEffect, useState } from "react";
import Cards from './Cards';
import axios from "axios";

function Course() {
    const [books, setBooks] = useState([]);
    const [query, setQuery] = useState('');  // Default search query
    const [genre, setGenre] = useState('');  // Default genre

    const genres = ["Fiction", "Non-fiction", "Science", "Technology", "History", "Biography"];  // Add more genres as needed

    useEffect(() => {
        const getBooks = async () => {
            try {
                const res = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}+subject:${genre}&key=AIzaSyDoGC7XzTYY1ubiDsKURWypiMZCu0xgbNc`);
                console.log(res.data.items);
                setBooks(res.data.items.filter(item => item.volumeInfo.imageLinks) || []);
            } catch (error) {
                console.log(error);
            }
        };
        getBooks();
    }, [query, genre]);  // Re-run when the query or genre changes

    return (
        <>
            <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10">
                <div className="mt-28 items-center justify-center text-center">
                    <h1 className="text-2xl md:text-4xl">
                        We are delighted to have you{" "}
                        <span className="text-pink-600">Here!:)</span>
                    </h1>
                    <p className="mt-12">
                        At <span className="font-bold text-pink-600">The Reading Rainbow</span>, we believe in the transformative power of
                        books. Established in 2019, our bookstore has been a haven for
                        readers, a community hub, and a sanctuary for the imagination. We
                        pride ourselves on offering a diverse range of books, from the
                        latest releases to timeless classics, and everything in between. Our
                        passionate team is here to help you find your next great read and
                        share in the joy of discovering new stories.
                    </p>

                    <input
                        type="text"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder="Search for books"
                        className="mt-4 px-4 py-2 border rounded"
                    />

                    <div className="flex justify-center mt-4">
                        {genres.map((genreItem) => (
                            <button
                                key={genreItem}
                                onClick={() => setGenre(genreItem)}
                                className={`mx-2 px-4 py-2 rounded-lg border ${genre === genreItem ? 'bg-pink-500 text-white' : 'hover:bg-pink-500 hover:text-white'}`}
                            >
                                {genreItem}
                            </button>
                        ))}
                    </div>

                    <div className="mt-12 gap-7 grid grid-cols-1 md:grid-cols-4">
                        {books.map((item) => (
                            <Cards key={item.id} item={item.volumeInfo} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Course;
