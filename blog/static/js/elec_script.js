// dictionary
var data = {
  elec_one: "wii",
  elec_two: "computer_game",
  elec_three: "phone_game"

};

$( document ).ready(function() {

function check(param) {
    var word = data[param]; // change here
    if (word != "") {
      alert(word);
        window.location.href = "output.html?word=" + word;
    } else {
          alert('Oops.!!');
        }
};

$("#elec_one").click(function() {
  console.log("clicked!");
  check("elec_one");
});


function check1(param) {
  var word = data[param];
  if (word != ""){
    alert(word);
      window.location.href = "output.html?word=" + word;
    } else {
       alert("Oops!!");
    }
  };

  $("#elec_two").click(function() {
    console.log("clicked!");
    check1("elec_two");
  });


  function check2(param) {
    var word = data[param];
    if (word != ""){
      alert(word);
        window.location.href = "output.html?word=" + word;
      } else {
         alert("Oops!!");
      }
    };

    $("#elec_three").click(function() {
      console.log("clicked!");
      check2("elec_three");
    });


});
