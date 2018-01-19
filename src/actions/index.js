export function selectBook(book){
// selectBook is an action creater and needs to return an action, an actions
// with a type property
  return {
    type: 'BOOK_SELECTED',
    payload: book
  };
}
