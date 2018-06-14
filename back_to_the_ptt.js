setInterval(function findLinkAndClick() {
  css_selector = "";
  if (document.URL.indexOf("moptt.tw") !== -1) {
    css_selector = "h1 + div > span > a";
  } else if (document.URL.indexOf("disp.cc") !== -1) {
    css_selector = "#text > div:nth-child(1) > span:nth-last-child(3) > a";
  }
  var element = document.querySelector(css_selector);
  element.setAttribute("target", "_self");
  element.click();
}, 500);
