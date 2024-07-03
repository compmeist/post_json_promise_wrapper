postJSONData

Wrapper Promise for Mozilla's example postData() that returns resolve and reject.

Example Call:

   postJSONData('https://example.com/answer', { answer: 42 })
  .then(data => { console.log(data); // JSON data parsed by `data.json()` call
  })  .catch(err => { console.log(err)}); 


  
