// dictionary
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

// check function look for parameter inside the dictionary,
//if the value associated with the parameter is not an empty string
// append that value to the existing url to form a query string

// it will be call whenever the button is clicked --> onClick

function check3(param) {
    var word = data[param]; // change here
    if (word != "") {
      alert(word);
        window.location.href = "output.html?word=" + word;
    } else {
          alert('Oops.!!');
        }
};

function check4(param) {
  var word = data[param];
  if (word != ""){
    alert(word);
      window.location.href = "output.html?word=" + word;
    } else {
       alert("Oops!!");
    }
  };


  function check5(param) {
    var word = data[param];
    if (word != ""){
      alert(word);
        window.location.href = "output.html?word=" + word;
      } else {
         alert("Oops!!");
      }
    };


$( document ).ready(function() {


$("#one_one").click(function() {
  console.log("clicked!");
  check3("one_one");
});


  $("#one_two").click(function() {
    console.log("clicked!");
    check4("one_two");
  });



    $("#one_three").click(function() {
      console.log("clicked!");
      check5("one_three");
    });


});
