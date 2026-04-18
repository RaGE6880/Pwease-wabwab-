let noCount = 0;

let questions = [
  "Are you sure?",
  "Really sure?",
  "Think again...",
  "Are you absolutely sure?",
  "You might regret this...",
  "This is your last chance...",
  "Are you really really sure?",
  "Why would you say no? 🤨",
  "Did you click the wrong button?",
  "Maybe give it another thought?",
  "Are you 100% certain?",
  "What if this is actually fun?",
  "You’re not even a little curious?",
  "Come on… just one hangout?",
  "Still no? 😿",
  "You’re breaking my heart here...",
  "Final answer?",
  "No take-backs after this...",
  "Are you REALLY sure this time?",
  "Alright… last chance… are you sure?"
];

let catImages = [
  "cat1.gif",
  "cat2.jpg",
  "cat3.jpg",
  "cat4.jpg",
  "cat5.jpg"
];

let yesCatImages = [
  "happycat.gif"
];

function sayYes() {
  let question = document.getElementById("question");
  let cat = document.getElementById("cat");

  question.innerText = "Yay! See you soon! 🎉";

  cat.style.display = "block";
  cat.src = yesCatImages[0];

  confetti({
    particleCount: 150,
    spread: 70,
    origin: { y: 0.6 }
  });

  // hide buttons
  document.querySelector(".yes").style.display = "none";
  document.querySelector(".no").style.display = "none";

  // show message button
  document.getElementById("messageBtn").style.display = "inline-block";
}

function sayNo() {
  noCount++;

  let cat = document.getElementById("cat");
  let question = document.getElementById("question");

  cat.style.display = "block";
  cat.src = catImages[noCount % catImages.length];

  question.innerText =
    questions[Math.min(noCount, questions.length - 1)];
}

// YOU will edit this link later
function messageMe() {
  window.location.href = "https://www.facebook.com/bagoncia.cedric.d";
}
