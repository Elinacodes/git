
function calculate (age, max) {
var age= 25;
var max= 40;
var estimatedamountperday = 1;
var answer = (max-age)*365*estimatedamountperday;
alert ("you will need " + answer +" to last until you're" + max);

}

$('#calculate').submit(function (event) { 
var givenAge = $ ('#age').val ();
var givenSnack = $('#snack').val ();
var givenperday= S ('#times-per-day').val ();
$ ('#lifetime-supply').html (calculate (givenage, givensnack, givenperday));
return false;
});


function favoritethings() {
var favoritethings = ['fun', 'knowledge', 'Octopi'];
var result = 'My favorite things are';
for (var x=0; x<favoritethings.length; x++) 
          {
        console.log(x);
  result = result + favoritethings [x] //statement to repeat

      }
alert (result); 
}

function myFriends () 
 {
var friends = [ {name : "blair", hair color: "black"},
{name : "casey", hair color : "blonde"}];

var results = "My friends"
for (var i = 0; i < Friends.length; i++) { results += describeFriend (friends [i]);
}
alert (results);
}

function describeFriends (friend) {
return "My friend " + friend.name+ "has " + friend.hair + "hair. ";}


var creditCheck = function(income) {
    if (income >= 100) {
        console.log("You earn a lot of money! You qualify for a credit card.");
    }
    else {
        console.log("Alas you do not qualify for a credit card. Capitalism is cruel like that.");
    }
};
creditCheck(75);
creditCheck(125);
creditCheck(100);



var apikey= '562947623187d75a57950262dc22';

    $.ajax({
  		url: 'https://api.meetup.com/2/open_events',
  		data: {
  		  key: apiKey,
  		  zip: '11214'
  		  
  		 
  		  // parameter: 'value' 
  		  },
  		
  		crossDomain: true, 
  		dataType: 'jsonp',
  		type: 'GET',
  		success: function (data) {
  		   $('#ajaxresults').html('Hey you its right');
  		   for (var i=0; i< data.results.length; i++) { $ ('#ajaxresults').append ('<br/> The name of the next meetup is' + 
  		   data.results [i].name + ' and there are maybe' + data.results [i].maybe_rsvp_count + 'comming!'); )
  		 console.log (data);  // code with data returned WHAT IS AN ANONYMOUS FUNCTION
  		},
  		failure: function(data) {
  		 $('#ajaxresults').html('Hey you its wrong');
  		 console.log (data);
  			 // code with error returned
  		}				
  	});
          	