/* eslint-disable import/prefer-default-export */
const BASE_URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/revy0Qm0vprS3SsZDYIR/books';

export const StoreApiSend = async (title, author, id) => {
  const res = await fetch(BASE_URL, {
    method: 'POST',
    body: JSON.stringify(
      {
        item_id: id,
        title,
        category: author,
      },
    ),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  console.log('sended to api');

  return res;
};

export const StoreApiReceive = async () => {
  const response = await fetch(BASE_URL);
  const response2 = response.text();
  return response2;
};

// export const store_api_remove = (book_id) => {

// };
