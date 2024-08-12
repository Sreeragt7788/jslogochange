
// replace with  new image
function changelogo() {
    const logo = document.getElementById('logo');
    logo.onmouseover.src ="./logos/bmw.jpg";  
  }
  

  // replace with original image
  function reset() {
    const logo = document.getElementById('logo');
    logo.src ="./logos/bmw.jpg"; 
  }