const keywords = ["bachelor", "bachelorette"];

const searchForSpoilers = () => {
  if (keywords.length) {
    let search = "";
    keywords.forEach((word) => {
      search = search + "p:contains('" + word + "'), ";
    });
    search = search.substring(0, search.length - 2);
    $(search).parents(".userContentWrapper").css("-webkit-filter", "blur(5px)");
  }
};
