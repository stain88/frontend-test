$(document).ready(start);

function start() {
  $.ajax({
    method: "GET",
    url: 'https://hacker-news.firebaseio.com/v0/topstories.json'
  })
    .done(function(res) {
      var topten = res.splice(0,10);
      getStories(topten);
    })
    .fail(function(res) {
      console.log("An error occurred: " + res);
    });
}

function getStories(array) {
  for (var i = 0; i < array.length; i++) {
    $.ajax({
      method: "GET",
      url: "https://hacker-news.firebaseio.com/v0/item/" + array[i] + ".json"
    })
      .done(function(res) {
        addStory(res);
      })
      .fail(function(res) {
        console.log("An error occurred: " + res);
      })
  }
}

function addStory(story) {
  console.log(story);
  $('#topstories').append('<a href="' + story.url + '" target="_blank"><li>' + story.title + '</li></a>');
}