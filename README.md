## postJSONData

### Wrapper Promise for Mozilla's example postData() that returns resolve and reject.  
#### (for modern browsers only).

#### Example Call:

   postJSONData('https://example.com/answer', { answer: 42 })
   .then(data => { console.log(data); })
   .catch(err => { console.log(err)}); 


  
