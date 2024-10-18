const images = [
    "butterfly1.png",
    "bf2.jpg",
    "panimalar3.png",
    "sun.jpg"
  ];
  
  let currentImageIndex = 0;
  
  function showImage(index) {
    currentImageIndex = index;
    document.getElementById("mainImage").src = images[currentImageIndex];
  }
  
  function prevImage() {
    currentImageIndex = (currentImageIndex === 0) ? images.length - 1 : currentImageIndex - 1;
    document.getElementById("mainImage").src = images[currentImageIndex];
  }
  
  function nextImage() {
    currentImageIndex = (currentImageIndex === images.length - 1) ? 0 : currentImageIndex + 1;
    document.getElementById("mainImage").src = images[currentImageIndex];
  }
  
