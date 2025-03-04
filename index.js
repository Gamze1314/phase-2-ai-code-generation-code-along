// Your code here
//“Create a function that takes in a list of books and a genre. It should return a new list of books with the specified genre.”


 /** A book object representation.
 * @typedef {Object} Book
 * @property {string} title - The title of the book.
 * @property {string} author - The author of the book.
 * @property {string} genre - The genre of the book.
 */


 /** returns a list of books with the given genre.
 * @param {string} genre - The genre of books required.
 * @param {Book[]} books - An array of Book objects.
 * @returns {Book[]} An array of Book objects matching the specified genre.
 */
function filterByGenre(genre, books) {
    return books.filter((book) => book.genre === genre);
}