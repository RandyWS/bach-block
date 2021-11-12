const item = "bachelor";

$(function () {
  searchForSpoilers();
});

function searchForSpoilers() {
  let search = "";

  search = search + "div:contains('" + item + "'), ";
  search = search.substring(0, search.length - 2);
  $(search).css("filter", "blur(3px)");
}
