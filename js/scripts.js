var total = 0.0;

$(document).ready(function() {
  $("form#customer").submit(function(event) {
    event.preventDefault();
    var nameInput = $("#name").val();
    var phoneInput = $("#phone").val();
    var emailInput = $("#email").val();
    var cardInput = $("#card").val();
    var customerConfirm = confirm("Is this your information?" + "\n" + nameInput + "\n" + phoneInput + "\n" + emailInput + "\n" + cardInput);
    console.log(customerConfirm);
    if (customerConfirm) {
      alert("Your information has been accepted.")
    } else {
      alert("Please reenter your information.")
    };
  });
  $("form#food").submit(function(event){
    event.preventDefault();
    total += parseFloat($("#groceries").val());
    alert("Your current total is $" + total)
  })
});
