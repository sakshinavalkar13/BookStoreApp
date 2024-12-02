
import Book from "../model/bookmodal.js";

// The controller function to get books
export const getBook = async (req, res) => {
    try {
        const books = await Book.find(); // Fetching all books
        if (!books.length) {
            return res.status(404).json({ message: "No books found" }); // If no books are found
        }
        res.status(200).json(books); // Send books as JSON
    } catch (error) {
        console.error("Error fetching books:", error);
        res.status(500).json({ message: "Internal Server Error", error }); // Send error response
    }
}
