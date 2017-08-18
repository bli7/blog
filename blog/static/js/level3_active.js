// dictionary
// first part --> id corresponding to each of the button
// second part --> match the id with correct word
var data = {
  one_one: "walk",
  one_two: "mall",
  one_three: "wii",
  two_one: "basketball",
  two_two: "soccer",
  two_three: "football",
  three_one: "swimming",
  three_two: "tennis",
  three_three: "baseball"


};

// check function look for parameter (in this case, the parameters are the ids of the button) inside the dictionary,
//if the value associated with the parameter is not an empty string
// append that value to the existing url to form a query string (ex. word = "basketball")

// it will be call whenever the button is clicked --> onClick


$( document ).ready(function() {

// function check6(param) {
//     var word = data[param]; // change here
//     if (word != "") {
//       alert(word);
//         window.location.href = "output.html?word=" + word;
//     } else {
//           alert('Oops.!!');
//         }
// };
//
// $("#three_one").click(function() {
//   console.log("clicked!");
//   check6("three_one");
// });
//
//
// function check7(param) {
//   var word = data[param];
//   if (word != ""){
//     alert(word);
//       window.location.href = "output.html?word=" + word;
//     } else {
//        alert("Oops!!");
//     }
//   };
//
//   $("#three_two").click(function() {
//     console.log("clicked!");
//     check7("three_two");
//   });
//
//
//   function check8(param) {
//     var word = data[param];
//     if (word != ""){
//       alert(word);
//         window.location.href = "output.html?word=" + word;
//       } else {
//          alert("Oops!!");
//       }
//     };
//
//     $("#three_three").click(function() {
//       console.log("clicked!");
//       check8("three_three");
//     });
//

});
