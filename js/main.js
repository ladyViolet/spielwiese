var checkbox1 = document.querySelector("#checkbox-1");
var checkbox2 = document.querySelector("#checkbox-2");
var checkbox3 = document.querySelector("#checkbox-3");
var checkbox4 = document.querySelector("#checkbox-4");

var cursor1 = document.querySelector("#cursor-1");
var cursor2 = document.querySelector("#cursor-2");

var airplaneBodies1 = document.querySelectorAll("#airplane-body-1");
var airplaneBodies2 = document.querySelectorAll("#airplane-body-2");
var airplaneWings1 = document.querySelectorAll("#airplane-wing-1");
var airplaneWings2 = document.querySelectorAll("#airplane-wing-2");

checkbox1.addEventListener('change', function() {
  if (this.checked) {
    //console.log("Cursor checked");
    cursor1.setAttribute('visibility', 'inherit');
  } else {
    //console.log("Cursor unchecked");
    cursor1.setAttribute('visibility', 'hidden');
  }
});

checkbox2.addEventListener('change', function() {
    if (this.checked) {
      //console.log("Plane checked");
      //console.log(airplaneBodies1);
      airplaneBodies1.forEach((e) => {
        e.setAttribute('style', 'fill:#003250;fill-opacity:1;fill-rule:evenodd;stroke:#003250;stroke-width:.755905;stroke-linecap:square;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1;paint-order:markers stroke fill;stop-color:#000"');
      });
      airplaneWings1.forEach((e) => {
        e.setAttribute('style', 'fill:#3a6c8a;fill-opacity:1;fill-rule:evenodd;stroke:#003250;stroke-width:.755905;stroke-linecap:square;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1;paint-order:markers stroke fill;stop-color:#000"');
      });
    } else {
      //console.log("Plane unchecked");
      airplaneBodies1.forEach((e) => {
        e.setAttribute('style', 'fill:#f9b004;fill-opacity:1;fill-rule:evenodd;stroke:#003250;stroke-width:.755905;stroke-linecap:square;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1;paint-order:markers stroke fill;stop-color:#000"');
      });
      airplaneWings1.forEach((e) => {
        e.setAttribute('style', 'fill:#efd18c;fill-opacity:1;fill-rule:evenodd;stroke:#003250;stroke-width:.755905;stroke-linecap:square;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1;paint-order:markers stroke fill;stop-color:#000"');
      });
    }
  });

checkbox3.addEventListener('change', function() {
  if (this.checked) {
    //console.log("Cursor checked");
    cursor2.setAttribute('visibility', 'inherit');
  } else {
    //console.log("Cursor unchecked");
    cursor2.setAttribute('visibility', 'hidden');
  }
});

checkbox4.addEventListener('change', function() {
    if (this.checked) {
      //console.log("Plane checked");
      //console.log(airplaneBodies2);
      airplaneBodies2.forEach((e) => {
        e.setAttribute('style', 'fill:#003250;fill-opacity:1;fill-rule:evenodd;stroke:#003250;stroke-width:.755905;stroke-linecap:square;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1;paint-order:markers stroke fill;stop-color:#000"');
      });
      airplaneWings2.forEach((e) => {
        e.setAttribute('style', 'fill:#3a6c8a;fill-opacity:1;fill-rule:evenodd;stroke:#003250;stroke-width:.755905;stroke-linecap:square;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1;paint-order:markers stroke fill;stop-color:#000"');
      });
    } else {
      //console.log("Plane unchecked");
      airplaneBodies2.forEach((e) => {
        e.setAttribute('style', 'fill:#f9b004;fill-opacity:1;fill-rule:evenodd;stroke:#003250;stroke-width:.755905;stroke-linecap:square;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1;paint-order:markers stroke fill;stop-color:#000"');
      });
      airplaneWings2.forEach((e) => {
        e.setAttribute('style', 'fill:#efd18c;fill-opacity:1;fill-rule:evenodd;stroke:#003250;stroke-width:.755905;stroke-linecap:square;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1;paint-order:markers stroke fill;stop-color:#000"');
      });
    }
  });

  function setInitalCheckboxState () {
    checkbox1.setAttribute('checked', 'checked');
    checkbox2.setAttribute('checked', 'checked');
    checkbox3.setAttribute('checked', 'checked');
    checkbox4.setAttribute('checked', 'checked');
  }

  window.onload = setInitalCheckboxState();