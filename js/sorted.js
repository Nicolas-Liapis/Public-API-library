function sorted() {
  var list, i, switching, items, shouldSwitch;
  list = document.getElementById("cards");
  switching = true;

  while (switching) {

    switching = false;
    items = list.getElementsByTagName("LI");

    for (i = 0; i < (items.length - 1); i++) {
      shouldSwitch = false;

      if (items[i].innerHTML.toLowerCase() > items[i + 1].innerHTML.toLowerCase()) {
        shouldSwitch= true;
        break;
      }
    }
    if (shouldSwitch) {
      items[i].parentNode.insertBefore(items[i + 1], items[i]);
      switching = true;
    }
  }
}
