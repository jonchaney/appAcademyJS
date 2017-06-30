var rl = require('readline');

// var reader = rl.createInterface(process.stdin, process.stdout, null);
// reader.question("What do you think of node.js?", function(answer) {
//   console.log("Thank you for your valuable feedback.");
//   reader.close();
//   process.stdin.destroy();
// });

var reader = rl.createInterface(process.stdin, process.stdout, null);

function addNumbers(sum, numsLeft, completionCallback) {
  reader.question("Please give us a number: ", function(answer) {
    let n = parseInt(answer);
    sum += n;

    console.log(sum);
    numsLeft -= 1;


    if (numsLeft === 0) {
      completionCallback(sum);
      reader.close();
      process.stdin.destroy();
    } else {
      addNumbers(sum, numsLeft, completionCallback);
    }
  });
}

addNumbers(0, 3, sum => console.log(`Total Sum: ${sum}`));
