// Override console.log so we can store log output in an array that we can
// use to check our work.

// Copy the default console.log() to a new `stdlog` property 
// in `console`. This means calling console.stdlog() will call the
// *original* console.log. We need this copy because we're about to override
console.stdlog = console.log.bind(console); // Bind() is called so console.stdlog works in the same scope as console.log

// Create a `logs` property that stores the console.log() output.
console.logs = [];

// Overwrite the built-in default console.log().
console.log = function(){
    // Store the contents of the call to console log in the newly created
    // `logs` property.
    console.logs.push(Array.from(arguments));
    // Call the original console.log by invoking the copy we made on line 7.
    console.stdlog.apply(console, arguments);
}

function processProblem3(response) {
  if(response.ok) {
    const p3 = document.querySelector("#p3");
    p3.setAttribute("class", "correct");
    p3.textContent += `you called processProblem3 after a successful fetch to ${response.url}`;
  } else {
    console.warn('you called processProblem3, but it was a bad request')
  }
}

/**
 * Calls the dataMuse API
 * 
 * @param {string} word 
 *   The word to check
 * @param {*} callback 
 *   The callback that executes after a successful request
 * @param {*} queryParam 
 *   The type of query made. Defaults to 'sl' (sounds like);
 * 
 * @see https://www.datamuse.com/api/
 */
 function callDataMuse(word, callback, queryParam = 'sl') {
  const url = `https://api.datamuse.com/words?${queryParam}=${word}`;
  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      callback(data);
    }).catch((error) => {
      console.error('Error:', error);
    });;
}

/**
* 
* @param {Array} resultArray 
*   A JSON array of results from data muse
* @param {Number} numberOfResults 
*   The number of results you'd like to display
* @returns 
*/
function getTopMatchesAsString(resultArray, numberOfResults = 5) {
return resultArray
 // Only get a specified number of results
 .splice(0, numberOfResults)
 // Go through each result object to get the word property.
 .map((item) => item.word)
 // Join all the words together separated by a comma and space.
 .join(', ');
}

function debounce(func, timeout = 300){
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => { func.apply(this, args); }, timeout);
  };
}

