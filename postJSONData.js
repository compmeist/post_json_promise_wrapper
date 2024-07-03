async function postJSONData(url = '', data = {}) {
  // Default options are marked with *
  var thePayloadData = {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data) // body data type must match "Content-Type" header
  };
  return new Promise((resolve,reject) => {
    fetch (url, thePayloadData)
      .then(response => {
        if (!response.ok) {
          throw new Error(`Network error: ${response.statusText}`);
        }
        return response.json();
      })
      .then(data => resolve(data))
      .catch(error => reject(error));

  });
}
