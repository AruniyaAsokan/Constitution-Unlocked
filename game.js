// Function to start the game and show the story selection page
function startGame() {
  // Hide the "Constitution Unlocked" screen
  document.getElementById('constitution-unlocked').classList.add('hidden');

  // Show the story selection page
  document.getElementById('story-selection').classList.remove('hidden');
}

// Function to select a story
function selectStory(storyNumber) {
  if (storyNumber === 2) {
    // Hide the story selection page and show the video section
    document.getElementById('story-selection').classList.add('hidden');
    document.getElementById('video-section').classList.remove('hidden');

    // Play the video
    const video = document.getElementById('story-video');
    video.play();

    // When the video ends, move to the next section
    video.onended = function() {
      document.getElementById('video-section').classList.add('hidden');

      document.getElementById('chapter-2-intro').classList.remove('hidden');
    };
  } else {
    alert('Story ' + storyNumber + ' is not available yet.');
  }
}



// Function to show the scenario after clicking "Proceed"
function showScenario() {
  document.getElementById('chapter-2-intro').classList.add('hidden');
  document.getElementById('scenario-page').classList.remove('hidden');
}

// Function to show decision options after clicking "What will you do?"
function showOptions() {
  document.getElementById('scenario-page').classList.add('hidden');
  document.getElementById('decision-options').classList.remove('hidden');
}

// Placeholder functions for decision outcomes
let attempts = 0;
let correctArguments = [
  "According to Article 21 of the Constitution, my friend has the right to life and medical care!",
  "Under the Supreme Court’s directives, hospitals are required to provide emergency treatment irrespective of payment, as per public interest litigation outcomes.",
  "The hospital’s policy is inconsistent with the legal obligations outlined under the Indian Constitution, which mandates emergency care for all citizens.",
  "Article 14 of the Constitution guarantees equality before the law and equal protection of the laws. My friend is entitled to equal treatment, regardless of payment issues.",
  "Under Article 47, the State is responsible for improving public health. Hospitals, as part of the healthcare system, must provide emergency services in line with this duty."
];

function chooseConfront() {
  document.getElementById('decision-options').classList.add('hidden');
  document.getElementById('argument-selection').classList.remove('hidden');
}

function submitArguments() {
  let selectedArguments = [];
  let checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');

  checkboxes.forEach(checkbox => {
    selectedArguments.push(checkbox.value);
  });

  // Check if the user selected exactly 5 arguments
  if (selectedArguments.length !== 5) {
    alert("Please select exactly 5 arguments.");
    return;
  }

  let wrongChoices = selectedArguments.filter(arg => !correctArguments.includes(arg));
  
  if (wrongChoices.length > 0) {
    attempts++;
    if (attempts >= 3) {
      document.getElementById('argument-selection').classList.add('hidden');
      document.getElementById('outcome').classList.remove('hidden');
      document.getElementById('outcome-message').innerText = 
        "Seeking timely medical help can be the difference between life and death. Article 21 ensures your right to prompt medical attention.";
    } else {
      alert("Some arguments are incorrect. You have " + (3 - attempts) + " attempts left.");
    }
  } else {
    document.getElementById('argument-selection').classList.add('hidden');
    document.getElementById('outcome').classList.remove('hidden');
    document.getElementById('outcome-message').innerText = 
      "Success! You've presented the correct legal arguments and your friend gets immediate treatment.";
  }
}

function chooseElsewhere() {
  alert("Treatment is delayed, and the friend’s health worsens.");
}
