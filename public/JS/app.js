var app = angular.module('appointmentApp', ['ui.bootstrap']);

// define factory for data source
app.factory("Types", function(){
  var types = ["Breakfast", "Brunch", "Lunch", "Dinner", "Coffee", "Drinks", "Tea",
  "Baseball Game", "Basketball Game", "Hockey Game", "Football Game", "Football Match",
  "Soccer Game", "Tennis Match", "Golf Outing", "Billards", "Squash", "Raquet Ball" "Bowling",
  "Doctor", "Dentist", "Lecture", "Class","Concert", "Show","Play", "Picnic", "Hackathon", "Pick up",
  "Departure", "Interview", "Phone Interview", "Video Conference","Arrival","Drop off",
  "Board Meeting","Brainstorming Meeting", "Breakout Meeting", "Combination Meeting", "Conference Call",
  "Event Planning Meeting", "Feedback Meeting", "Evaluation Meeting", "Emergency Meeting",
  "Financial Review Meeting", "Financial Update Meeting",
  "First Meeting", "Holiday Meeting", "Information Sharing Meeting", "Introduction Meeting",
  "Investor Meeting", "Keynote Speeche", "Large Conference Meeting", "Leadership Meeting",
  "Management Meeting", "Manager Meeting", "Meetings to Plan Bigger Meeting",
  "New Business Pitch Meeting", "New Product Launch Meeting", "Online Meeting", "Organizational Meeting",
  "Party Meeting", "Pitch Meeting", "Planning Meeting", "Political Meeting",
  "Problem-Solving Meetings", "Production Meetings", "Project Planning Meetings", "Religious Meetings",
  "Research Review Meetings", "Sales Meetings", "Shareholder Meetings", "Small Conference Meetings",
  "Staff Meetings", "Stakeholder Meetings","Strategy Meetings", "Termination Meetings", "Training Session Meetings",
  "Trip Planning Meetings", "Update Meetings", "Year End Meetings", "Year Beginning Meetings", "Family Meetings",
  "School Meetings", "Class Meetings", "Public Relations Meetings", "Sports Meetings (and Events)", "Team Meetings"
  ];

  return types;

});

// setup controller and pass data source
app.controller("TypeaheadCtrl", function($scope, Types) {

	$scope.selected = undefined;

	$scope.types = Types;

});
