var slideIndex = [1, 1, 1, 1, 1, 1, 1];
var slideId = ["slide", "slide2", "slide3", "slide4", "slide5", "slide6", "slide7"];
showSlides(1, 0);
showSlides(1, 1);
showSlides(1, 2);
showSlides(1, 3);
showSlides(1, 4);
showSlides(1, 5);
showSlides(1, 6);

const videoContainers = document.querySelectorAll(".video-container"); // Select all video containers

function plusSlides(n, no) {
  showSlides((slideIndex[no] += n), no);
}

function showSlides(n, no) {
  var i;
  var x = document.getElementsByClassName(slideId[no]);
  if (n > x.length) {
    slideIndex[no] = 1;
  }
  if (n < 1) {
    slideIndex[no] = x.length;
  }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex[no] - 1].style.display = "block";
}

document.addEventListener("DOMContentLoaded", function () {
  const videos = document.querySelectorAll(".video");

  const observerOptions = {
    root: null, // Observes visibility relative to the viewport
    threshold: 0.5, // Play when 50% of the video is visible
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.play(); // Play when visible
      } else {
        entry.target.pause(); // Pause when not visible
      }
    });
  }, observerOptions);

  videos.forEach((video) => {
    observer.observe(video); // Start observing each video
  });
});

videoContainers.forEach((container) => {
  const video = container.querySelector(".video2"); // Select the video inside each container
  const playButton = container.querySelector(".play-button"); // Select the play button inside each container

  // Play/Pause video on click
  video.addEventListener("click", function () {
    if (video.paused) {
      video.muted = false; // Unmute when playing
      video.play();
      video.classList.add("playing"); // Add 'playing' class to video
      container.classList.add("playing"); // Add 'playing' class to container
      playButton.style.display = "none"; // Hide play button when playing
    } else {
      video.pause();
      video.classList.remove("playing"); // Remove 'playing' class from video
      container.classList.remove("playing"); // Remove 'playing' class from container
      playButton.style.display = "block"; // Show play button when paused
    }
  });

  // Play video when play button is clicked
  playButton.addEventListener("click", function () {
    video.click(); // Trigger video click to play
  });
});

function openTab(event, tabId) {
  console.log("Switching to tab:", tabId); // Debugging output
  var i, tabcontent, tabbutton;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tabbutton = document.getElementsByClassName("tabbutton");
  for (i = 0; i < tabbutton.length; i++) {
    tabbutton[i].className = tabbutton[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(tabId).style.display = "block";
  event.currentTarget.className += " active";
}

document.getElementById("defaultOpen").click();
