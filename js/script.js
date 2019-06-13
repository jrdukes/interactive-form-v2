// Set focus on Name field:

$("#name").focus(); // Also works with "$('input[id=name]').focus()"

// Display input field if Other is selected from Job Role

$(".basic-info").append(
  '<input type="text" id="other-field" placeholder="Your Job Title" name="otherjob">'
);
$("#other-field").hide();

// Change function to display Other field

$("#title").change(function() {
  if ($("#title option:selected").val() === "other") {
    $("#other-field").show();
  } else {
    $("#other-field").hide();
  }
});

// ************************* T-Shirt Section *****************************

// Hide option for Color until a Design is selected by targeting the "colors-js-puns" div

$("#colors-js-puns").hide();

// Use the Change function to show T-Shirt colors according to Design & return true or false for form validation

var shirtSelected = false;
$("#design").change(function() {
  if ($("#design option:selected").val() === "js puns") {
    $("#colors-js-puns").show();
    $("#color").html(
      '<option value="cornflowerblue">Cornflower Blue (JS Puns shirt only)</option><option value="darkslategrey">Dark Slate Grey (JS Puns shirt only)</option><option value="gold">Gold (JS Puns shirt only)</option>'
    );
    shirtSelected = true;
    return shirtSelected;
  } else if ($("#design option:selected").val() === "heart js") {
    $("#colors-js-puns").show();
    $("#color").html(
      '<option value="tomato">Tomato (I &#9829; JS shirt only)</option><option value="steelblue">Steel Blue (I &#9829; JS shirt only)</option><option value="dimgrey">Dim Grey (I &#9829; JS shirt only)</option>'
    );

    shirtSelected = true;
    return shirtSelected;
  } else {
    $("#colors-js-puns").hide();
    shirtSelected = false;
    return shirtSelected;
  }
});

//************************* Activities Section *************************

// Set variables for activities

var jsFrameworks = $("input[name='js-frameworks'");
var jsLibraries = $("input[name='js-libs']");
var express = $("input[name='express']");
var nodeJS = $("input[name='node']");

// Add total cost of activities

var totalCost = 0;
$(".activities").append('<div id="total"></div>');

var updateCost = function(cost) {
  totalCost += cost;
  document.getElementById("total").innerHTML = "Total: $" + totalCost;
};

// Reference for use of `this` in jquery: https://stackoverflow.com/questions/12481439/jquery-this-keyword

// Reference for use of `change` in jquery to attached a function to a change event:
// https://www.w3schools.com/jquery/event_change.asp

// Reference for use of `prop` method to retrieve whether or not the conflicting activities are
// "checked" or "disabled": https://www.w3schools.com/jquery/html_prop.asp

// Reference for use of `parent` to get each element in the set of matched elements and filter
// by either adding or removing the class of disabled: https://api.jquery.com/parent/

$("input[name='all']").change(function() {
  if ($(this).prop("checked")) {
    updateCost(200);
  } else {
    updateCost(-200);
  }
});

jsFrameworks.change(function() {
  if ($(this).prop("checked")) {
    express.prop("disabled", true);
    express.parent().addClass("disabled");
    express
      .parent()
      .append('<span class="unavailable">&nbsp;&nbsp;Unavailable</span>');
    updateCost(100);
  } else {
    express.prop("disabled", false);
    express.parent().removeClass("disabled");
    express
      .parent()
      .find(".unavailable")
      .remove();
    updateCost(-100);
  }
});

jsLibraries.change(function() {
  if ($(this).prop("checked")) {
    nodeJS.prop("disabled", true);
    nodeJS.parent().addClass("disabled");
    nodeJS
      .parent()
      .append('<span class="unavailable">&nbsp;&nbsp;Unavailable</span>');
    updateCost(100);
  } else {
    nodeJS.prop("disabled", false);
    nodeJS.parent().removeClass("disabled");
    nodeJS
      .parent()
      .find(".unavailable")
      .remove();
    updateCost(-100);
  }
});

express.change(function() {
  if ($(this).prop("checked")) {
    jsFrameworks.prop("disabled", true);
    jsFrameworks.parent().addClass("disabled");
    jsFrameworks
      .parent()
      .append('<span class="unavailable">&nbsp;&nbsp;Unavailable</span>');
    updateCost(100);
  } else {
    jsFrameworks.prop("disabled", false);
    jsFrameworks.parent().removeClass("disabled");
    jsFrameworks
      .parent()
      .find(".unavailable")
      .remove();
    updateCost(-100);
  }
});

nodeJS.change(function() {
  if ($(this).prop("checked")) {
    jsLibraries.prop("disabled", true);
    jsLibraries.parent().addClass("disabled");
    jsLibraries
      .parent()
      .append('<span class="unavailable">&nbsp;&nbsp;Unavailable</span>');
    updateCost(100);
  } else {
    jsLibraries.prop("disabled", false);
    jsLibraries.parent().removeClass("disabled");
    jsLibraries
      .parent()
      .find(".unavailable")
      .remove();
    updateCost(-100);
  }
});

$("input[name='build-tools']").change(function() {
  if ($(this).prop("checked")) {
    updateCost(100);
  } else {
    updateCost(-100);
  }
});

$("input[name='npm']").change(function() {
  if ($(this).prop("checked")) {
    updateCost(100);
  } else {
    updateCost(-100);
  }
});

// ******************* Payment Section ************************

//Set credit card as default payment method

$("#paypal, #bitcoin").hide();

// Set credit card as default payment

$("#payment").val("credit card");

$("#payment").change(function() {
  if ($("#payment option:selected").val() === "paypal") {
    $("#credit-card, #bitcoin").hide();
    $("#paypal").show();
  } else if ($("#payment option:selected").val() === "bitcoin") {
    $("#credit-card, #paypal").hide();
    $("#bitcoin").show();
  } else {
    $("#credit-card").show();
    $("#paypal, #bitcoin").hide();
  }
});

// ******************** Form Validation and Validation Messages ********************

// Added Error/Success Indicators on Keyup -> reference:
// https://api.jquery.com/keyup/

$("#name, #mail, #cc-num, #zip, #cvv, #other-field").keyup(function() {
  if ($(this).val() === "") {
    $(this).removeClass("success");
    $(this).addClass("error");
  } else {
    $(this).removeClass("error");
    $(this).addClass("success");
  }
});

var emailAddress = /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i;
var creditCard = /\b\d{4}(| |-)\d{4}\1\d{4}\1\d{4}\b/g;
var zipCode = /^\d{5}(?:[-\s]\d{4})?$/;
var errorMessage = "";

$("form").prepend('<p id="error-message"></p>');
$("#error-message").hide();
$("form").submit(function(e) {
  e.preventDefault();

  if ($("#name").val() === "") {
    console.log("Error!");
    $("html, body").animate({ scrollTop: 0 }, "slow");
    errorMessage =
      "<h2>Error!</h2> Please ensure you have entered all required fields.";
    $("#name").addClass("error");
    $("#name").focus();
  } else if (!emailAddress.test($("#mail").val())) {
    $("html, body").animate({ scrollTop: 0 }, "slow");
    errorMessage = "<h2>Error!</h2> Please enter a valid email.";
    $("#mail").focus();
  } else if ($(".activities > label > input:checked").length === 0) {
    $("html, body").animate({ scrollTop: 0 }, "slow");
    errorMessage = "<h2>Error!</h2> Please select at least one activity.";
    $(".activities").focus();
  } else if ($("#payment").val() === "select_method") {
    $("html, body").animate({ scrollTop: 0 }, "slow");
    errorMessage = "<h2>Error!</h2>Please select a payment method.";
    $("#payment").focus();
  } else if (
    $("#payment").val() === "credit card" &&
    !creditCard.test($("#cc-num").val())
  ) {
    $("html, body").animate({ scrollTop: 0 }, "slow");
    errorMessage = "<h2>Error!</h2>Please enter a valid credit card number.";
    $("#cc-num").focus();
  } else if (
    $("#payment").val() === "credit card" &&
    !zipCode.test($("#zip").val())
  ) {
    $("html, body").animate({ scrollTop: 0 }, "slow");
    errorMessage = "<h2>Error!</h2>Please enter your zip code.";
    $("#zip").focus();
  } else if (
    $("#payment").val() === "credit card" &&
    $("#cvv").val().length < 3
  ) {
    $("html, body").animate({ scrollTop: 0 }, "slow");
    errorMessage = "<h2>Error!</h2>Please enter a 3 digit CVV";
    $("#cvv").focus();
  } else {
    $("html, body").animate({ scrollTop: 0 }, "slow");
    errorMessage = "";
    alert(
      "Thank you for registering & we'll see you at the Full Stack Conference!"
    );
  }
  document.getElementById("error-message").innerHTML = errorMessage;
  $("#error-message").show();
});
