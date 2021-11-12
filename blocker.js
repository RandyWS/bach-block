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
  if (keywords.length) {
    var search = "";
    keywords.forEach(function (item) {
      search = search + "p:contains('" + item + "'), ";
    });
    search = search.substring(0, search.length - 2);

    $(search).parent(".userContentWrapper").css("filter", "blur(5px)");
    $(search).parent().css("filter", "blur(5px)");
  }
}
