/**
 * PROBLEM 1
 */
const correct = [];
const p1 = document.querySelector("#p1");
if(typeof console.logs[0] !== 'undefined' 
  && typeof console.logs[0][0] !== 'undefined' 
  && console.logs[0][0] instanceof Promise
) {
    p1.setAttribute("class", "correct");
    p1.textContent += 'you fetched a URL that returned a promise';
    correct.push(1);
} 

/**
 * PROBLEM 2
 */
 const p2 = document.querySelector("#p2");
 if(typeof console.logs[1] !== 'undefined' &&  typeof console.logs[1][0] !== 'undefined' && console.logs[1][0] === 'https://api.datamuse.com/words?sl=mousetrap') {
    p2.setAttribute("class", "correct");
    p2.textContent += "`apiUrl` is https://api.datamuse.com/words?sl=mousetrap";
    correct.push(2);
} 

/**
 * PROBLEM 3 is handled in do_not_edit_1
 */


// /**
//  * PROBLEM 4
//  */
const p4 = document.querySelector("#p4");

setTimeout(() => {
    [2,3,4].forEach(index =>  {
        if(typeof console.logs[index] !== 'undefined' &&  typeof console.logs[index][0] !== 'undefined' && console.logs[index][0] instanceof Response) {
            p4.setAttribute("class", "correct");
            p4.textContent += "A valid API response was sent to console log";
            correct.push(4);
        } 
    });
},500)

const p5 = document.querySelector("#p5");

setTimeout(() => {
    [2,3,4].forEach(index =>  {
        if(typeof console.logs[index] !== 'undefined' &&  typeof console.logs[index][0] !== 'undefined' && console.logs[index][0] instanceof Promise) {
            p5.setAttribute("class", "correct");
            p5.textContent += "You sent response.json() to the log! Notice that it a Promise";
            correct.push(5);
        } 
    });
   
},500)

const p6 = document.querySelector("#p6");

setTimeout(() => {
    [2,3,4].forEach(index =>  {
        if(typeof console.logs[index] !== 'undefined' &&  typeof console.logs[index][0] !== 'undefined') {
            const item =  console.logs[index][0];
            if (item instanceof Array && item.length > 90) {
                 p6.setAttribute("class", "correct");
                 p6.textContent += "Actual, useful JSON has been logged to the console!";
            }
        }
    });
   console.logs = [];
},600)




/**
  * PROBLEM 7
  */
const p7 = document.querySelector("#p7");

document.querySelector('#datamuse-query').addEventListener('click', () => {
 setTimeout(() => {
     const dmr = document.querySelector('#datamuse-results');
    if (dmr && dmr.style['border-color'] === 'blue') {
        p7.setAttribute("class", "correct");
        p7.textContent = 'The query button has the right event listener';
    }
 }, 100);
});



