
export function selectBook(book) {
    console.log('A book has been selected:', book.title);
    // selectBook is an action creater that returns an action
    return {
        type: 'BOOK_SELECTED',
        payload: book
    };
}
