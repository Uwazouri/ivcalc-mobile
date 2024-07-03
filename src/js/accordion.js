export function toggle_accordion(element) {
  if (element != null) {
    element.classList.toggle("active");
    var panel = element.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
      panel.classList.add("closed");
      panel.setAttribute("inert", '');
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
      panel.classList.remove("closed");
      panel.removeAttribute("inert");
    }
  }
}

function setup_accordions() {
  var elements = document.getElementsByClassName("accordion");
  for (let element of elements) {
    element.addEventListener("click", () => {
      var e = element;
      toggle_accordion(e); 
    });
    var panel = element.nextElementSibling;
    if (!panel.classList.contains("closed")) {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  }
  var urlParams = new URLSearchParams(window.location.search);
  if (urlParams.get('infoOpen') != null) {
    toggle_accordion(document.getElementById('information-accordion'));
  }
  if (urlParams.get('pokemonOpen') != null) {
    toggle_accordion(document.getElementById('pokemon-accordion'));
  }
  if (urlParams.get('levelOpen') != null) {
    toggle_accordion(document.getElementById('level-accordion'));
  }
}

setup_accordions();