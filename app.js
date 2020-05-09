var charac = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "Y",
  "Z",
];

// Excel.run(function (context) {
//   var sheets = context.workbook.worksheets;
//   sheets.load("items/Country");

//   return context.sync().then(function () {
//     if (sheets.items.length > 1) {
//       console.log(
//         `There are ${sheets.items.length} worksheets in the workbook:`
//       );
//     } else {
//       console.log(`There is one worksheet in the workbook:`);
//     }
//     sheets.items.forEach(function (sheet) {
//       console.log(sheet.name);
//     });
//   });
// }).catch(errorHandlerFunction);
// // const click1 = document.getElementById("click");

// click1.addEventListener("click", checkOutput);
var countryName = [
  "Afghanistan",
  "Albania",
  "Algeria",
  "American Samoa",
  "Andorra",
  "Angola",
  "Anguilla",
  "Antigua and Barbuda",
  "Argentina",
  "Armenia",
  "Aruba",
  "Australia",
  "Austria",
  "Azerbaijan",
  "Bahamas",
  "Bahrain",
  "Bangladesh",
  "Barbados",
  "Belarus",
  "Belgium",
  "Belize",
  "Benin",
  "Bermuda",
  "Bhutan",
  "Bolivia",
  "Bosnia and Herzegovina",
  "Botswana",
  "Brazil",
  "British Virgin Islands",
  "Brunei Darussalam",
  "Bulgaria",
  "Burkina Faso",
  "Burundi",
  " Cabo Verde",
  "Cambodia",
  "Cameroon",
  "Canada",
  "Canary Islands(Spain)",
  "Cayman Islands",
  "Central African Republic",
  "Chad",
  "Chile",
  "China",
  "Colombia",
  "Comoros",
  "Congo",
  "Cook Islands",
  "Costa Rica",
  "Côte d 'Ivoire",
  "Croatia",
  "Cuba",
  "Cyprus",
  "Czech Republic",
  "Denmark",
  "Djibouti",
  "Dominica",
  "Dominican Republic",
  "Ecuador",
  "Egypt",
  "El Salvador",
  "Equatorial Guinea",
  "Eritrea",
  "Estonia",
  "Eswatini",
  "Ethiopia",
  "Fiji",
  "Finland",
  "France",
  "French Guiana",
  "French Polynesia",
  "Gabon",
  "Gambia",
  "Georgia",
  "Germany",
  "Ghana",
  "Gibraltar(UK)",
  "Greece",
  "Greenland",
  "Grenada",
  "Guadeloupe",
  "Guam",
  "Guatemala",
  "Guinea",
  "Guyana",
  "Haiti",
  "Holy See",
  "Honduras",
  "Hong Kong(China)",
  "Hungary",
  "Iceland",
  "India",
  "Indonesia",
  "Iran",
  "Iraq",
  "Ireland",
  "Israel",
  "Italy",
  "Jamaica",
  "Japan",
  "Jordan",
  "Kazakhstan",
  "Kenya",
  " Kiribati",
  "Korea",
  "Kuwait",
  "Kyrgyzstan",
  "Lao People 's Democratic Republic",
  "Latvia",
  "Lebanon",
  "Lesotho",
  "Liberia",
  "Libya",
  "Liechtenstein",
  "Lithuania",
  "Luxembourg",
  "Macao(China)",
  "Madagascar",
  "Malawi",
  "Malaysia",
  "Maldives",
  "Mali",
  "Malta",
  "Marshall Islands",
  "Martinique",
  "Mauritania",
  "Mauritius",
  "Mayotte",
  "Mexico",
  "Micronesia",
  "Moldova",
  "Monaco",
  "Mongolia",
  "Montenegro",
  "Montserrat",
  "Morocco",
  "Mozambique",
  "Myanmar",
  "Namibia",
  "Nauru",
  "Nepal",
  "Netherlands Antilles",
  "Netherlands",
  "New Caledonia",
  "New Zealand",
  "Nicaragua",
  "Niger",
  "Nigeria",
  "Niue",
  "Norfolk Island",
  "North Macedonia",
  "Northern Mariana Islands",
  "Norway",
  "Oman",
  "Pakistan",
  "Palau",
  "Palestine",
  "Panama",
  "Papua New Guinea",
  "Paraguay",
  "Peru",
  "Philippines",
  "Poland",
  "Portugal",
  "Puerto Rico",
  "Qatar",
  "Reunion",
  "Romania",
  "Russia",
  "Rwanda",
  "Saint Barthélemy",
  "Saint Kitts and Nevis",
  "Saint Lucia",
  "Saint Pierre and Miquelon",
  "Saint Vincent and the Grenadines",
  "Samoa",
  "San Marino",
  "Sao Tome and Principe",
  "Saudi Arabia",
  "Senegal",
  "Serbia",
  "Seychelles",
  "Sierra Leone",
  "Singapore",
  "Slovakia",
  "Slovenia",
  "Solomon Islands",
  "Somalia",
  "South Africa",
  "South Sudan",
  "Spain",
  "SriLanka",
  "Sudan",
  "Suriname",
  "Sweden",
  "Switzerland",
  "Syrian Arab Republic",
  "Taiwan(China)",
  "Tajikistan",
  "Tanzania",
  "Thailand",
  "Timor - Leste",
  "Togo",
  "Tokelau",
  "Tonga",
  "Trinidad and Tobago",
  "Tunisia",
  "Turkey",
  "Turkmenistan",
  "Turks and Caicos Islands",
  "Tuvalu",
  "Uganda",
  "Ukraine",
  "United Arab Emirates",
  "United Kingdom",
  "United States of America",
  "United States Virgin Islands",
  "Uruguay",
  "Uzbekistan",
  "Vanuatu",
  "Venezuela",
  "Vietnam",
  "Wallis and Futuna Islands",
  "Yemen",
  "Zambia",
  "Zimbabwe",
];
// var box1 = document.querySelector("#box1");
// var box2 = document.querySelector("#box2");
// var box3 = document.querySelector("#box3");
// var box4 = document.querySelector("#box4");
// var box5 = document.querySelector("#box5");

// var path = [1, 2, 3, 4, 5];
// var arr = [box1, box2, box3, box4, box5];
// player1 = ["PROGRAD", 0, 5];
// Convert the person object into JSON string and save it into storage
localStorage.setItem("countryName", JSON.stringify(countryName));

// Retrieve the JSON string
var jsonString = localStorage.getItem("countryName");

// Parse the JSON string back to JS object
var retrievedObject = JSON.parse(jsonString);

function randomCharacter() {

  var output = charac[Math.floor(Math.random() * charac.length)];
  document.getElementById("demo").innerHTML = output;
  return output;
}


var p = randomCharacter();
console.log(p);

function checkOutput() {
  var buttonClicked;
  $("#start1").click(function () {
    if (buttonClicked == true)
      console.log("true");
    else {
      click();
    }
  })
  let theText = country.value;
  console.log(theText);
  for (var i = 0; i < 1; i++) {
    console.log(theText[i]);
    if (theText[i] == p) {
      console.log(p);
      for (var i = 0; i < jsonString.length; i++) {
        if (retrievedObject[i] == theText) {
          console.log("this is right");
          updatePosition();
          goto();
        }

      }
    } else {
      wrong();
      backPosition();
    }
  }
}

function goto() {
  p = randomCharacter();
}

var move = 100;
var position = 0;

function updatePosition() {
  position = position + move;
  if (position > 0 && position < 600) {
    document.getElementById("player").style.left = position + "px";
    console.log(position + "px");
  } else if (position == 600) {
    message();
    img1.style.visibility = "hidden";
    input[type = "text"].style.visibility = "hidden";
  }
}
var position1 = 0;

function backPosition() {
  position1 = position1 - (move - 100);
  document.getElementById("player").style.left = `${position1}px`;

}

var c = 60;

function timer() {
  c = c - 1;
  if (c < 60) {
    output.innerHTML = c;
  }
  if (c < 1) {
    window.clearInterval(update);
    warn();
  }
}

function start() {
  update = setInterval(timer, 500);
}


function message() {
  $(document).ready(function () {
    var id = '#dialog';
    var maskHeight = $(document).height();
    var maskWidth = $(window).width();
    $('#mask').css({
      'width': maskWidth,
      'height': maskHeight
    });
    $('#mask').fadeIn(500);
    $('#mask').fadeTo("slow", 0.9);
    var winH = $(window).height();
    var winW = $(window).width();
    $(id).css('top', winH / 2 - $(id).height() / 2);
    $(id).css('left', winW / 2 - $(id).width() / 2);
    $(id).fadeIn(2000);
    $('.window .close').click(function (e) {
      e.preventDefault();
      $('#mask').hide();
      $('.window').hide();
    });
    $('#mask').click(function () {
      $(this).hide();
      $('.window').hide();
    });

  });
}

function warn() {
  $(document).ready(function () {
    var id = '#dialog1';
    var maskHeight = $(document).height();
    var maskWidth = $(window).width();
    $('#mask').css({
      'width': maskWidth,
      'height': maskHeight
    });
    $('#mask').fadeIn(500);
    $('#mask').fadeTo("slow", 0.9);
    var winH = $(window).height();
    var winW = $(window).width();
    $(id).css('top', winH / 2 - $(id).height() / 2);
    $(id).css('left', winW / 2 - $(id).width() / 2);
    $(id).fadeIn(2000);
    $('.window .close').click(function (e) {
      e.preventDefault();
      $('#mask').hide();
      $('.window').hide();
    });
    $('#mask').click(function () {
      $(this).hide();
      $('.window').hide();
    });

  });
}

function wrong() {
  $(document).ready(function () {
    var id = '#dialog2';
    var maskHeight = $(document).height();
    var maskWidth = $(window).width();
    $('#mask').css({
      'width': maskWidth,
      'height': maskHeight
    });
    $('#mask').fadeIn(500);
    $('#mask').fadeTo("slow", 0.9);
    var winH = $(window).height();
    var winW = $(window).width();
    $(id).css('top', winH / 2 - $(id).height() / 2);
    $(id).css('left', winW / 2 - $(id).width() / 2);
    $(id).fadeIn(2000);
    $('.window .close').click(function (e) {
      e.preventDefault();
      $('#mask').hide();
      $('.window').hide();
    });
    $('#mask').click(function () {
      $(this).hide();
      $('.window').hide();
    });

  });
}

function instructions() {
  $(document).ready(function () {
    var id = '#dialog3';
    var maskHeight = $(document).height();
    var maskWidth = $(window).width();
    $('#mask').css({
      'width': maskWidth,
      'height': maskHeight
    });
    $('#mask').fadeIn(500);
    $('#mask').fadeTo("slow", 0.9);
    var winH = $(window).height();
    var winW = $(window).width();
    $(id).css('top', winH / 2 - $(id).height() / 2);
    $(id).css('left', winW / 2 - $(id).width() / 2);
    $(id).fadeIn(2000);
    $('.window .close').click(function (e) {
      e.preventDefault();
      $('#mask').hide();
      $('.window').hide();
    });
    $('#mask').click(function () {
      $(this).hide();
      $('.window').hide();
    });

  });
}

function click() {
  $(document).ready(function () {
    var id = '#dialog4';
    var maskHeight = $(document).height();
    var maskWidth = $(window).width();
    $('#mask').css({
      'width': maskWidth,
      'height': maskHeight
    });
    $('#mask').fadeIn(500);
    $('#mask').fadeTo("slow", 0.9);
    var winH = $(window).height();
    var winW = $(window).width();
    $(id).css('top', winH / 2 - $(id).height() / 2);
    $(id).css('left', winW / 2 - $(id).width() / 2);
    $(id).fadeIn(2000);
    $('.window .close').click(function (e) {
      e.preventDefault();
      $('#mask').hide();
      $('.window').hide();
    });
    $('#mask').click(function () {
      $(this).hide();
      $('.window').hide();
    });

  });
}