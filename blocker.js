const keywords = ["bachelor", "bachelorette"];

// Listeners to listen when the page loads
var t = setTimeout(function () {
  $(function () {
    searchForSpoilers(keywords);
  });
}, 1000);

$(function () {
  searchForSpoilers(keywords);

  // New up an observer, and tell it what to do when it successfully observes.
  // Necessary for Facebooks "neverending" scrolling
  var observer = new MutationObserver(function (mutations, observer) {
    // fired when a mutation occurs
    searchForSpoilers(keywords);
  });

  // This part establishes what needs to be watched, and starts the watching
  observer.observe($("[id^=topnews_main_stream_]").get(0), {
    subtree: true, // watches target and it's descendants
    attributes: true, // watches targets attributes
  });
});

// Handles searching for spoilers
function searchForSpoilers() {
  console.log("function called");
  if (keywords.length) {
    console.log("function called and keywords");
    var search = "";
    keywords.forEach(function (item) {
      console.log("item", item);
      search = search + "p:contains('" + item + "'), ";
    });
    console.log("search", search);
    search = search.substring(0, search.length - 2);
    console.log("search", search);
    $(search).parents(".userContentWrapper").css("filter", "blur(5px)");
  }
}
