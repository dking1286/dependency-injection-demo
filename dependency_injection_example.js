import { get } from './dependency_injection'

get('http://jsonplaceholder.typicode.com/posts')
  .then((responseText) => {
    console.log(responseText)
  })
  .catch((error) => {
    console.log('There was an error');
    throw error;
  })