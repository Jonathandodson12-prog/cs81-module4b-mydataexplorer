// GitHub Repo: https://github.com/jonathandodson12-prog/cs81-module4b-mydataexplorer

// Weekly data log
const weekData = [
  { day: "Monday", sleepHours: 7, screenTime: 4, mood: "tired", caffeineIntake: 2, focusLevel: 6 },
  { day: "Tuesday", sleepHours: 6.5, screenTime: 5, mood: "focused", caffeineIntake: 3, focusLevel: 7 },
  { day: "Wednesday", sleepHours: 6, screenTime: 8, mood: "lazy", caffeineIntake: 4, focusLevel: 5 },
  { day: "Thursday", sleepHours: 7.5, screenTime: 3, mood: "productive", caffeineIntake: 1, focusLevel: 9 },
  { day: "Friday", sleepHours: 6.8, screenTime: 6, mood: "happy", caffeineIntake: 3, focusLevel: 8 },
  { day: "Saturday", sleepHours: 8, screenTime: 4.5, mood: "relaxed", caffeineIntake: 0, focusLevel: 6 },
  { day: "Sunday", sleepHours: 7.2, screenTime: 3.5, mood: "productive", caffeineIntake: 1, focusLevel: 9 }
];

// Predictions:
// - Most screen time: Wednesday
// - Best focus day: Thursday or Sunday
// - Does more caffeine help? → Not sure, let's find out!

// Function: Find the day with the highest screen time
function findHighestScreenTime(data) {
  let highest = data[0];

  for (let entry of data) {
    if (entry.screenTime > highest.screenTime) {
      highest = entry;
    }
  }

  console.log(`Most screen time: ${highest.day} (${highest.screenTime} hrs)`);
}

// Call the function to test
findHighestScreenTime(weekData);

// Function: Calculate the average sleep hours for the week
function averageSleep(data) {
  let totalSleep = 0;

  for (let entry of data) {
    totalSleep += entry.sleepHours;
  }

  const average = totalSleep / data.length;
  console.log(`Average sleep: ${average.toFixed(1)} hrs`);
}
averageSleep(weekData);
// Function: Find the most frequent mood of the week
function mostFrequentMood(data) {
  const moodCount = {};

  // Count each mood occurrence
  for (let entry of data) {
    const mood = entry.mood;
    if (!moodCount[mood]) {
      moodCount[mood] = 1;
    } else {
      moodCount[mood]++;
    }
  }

  // Find mood with highest count
  let maxMood = null;
  let maxCount = 0;

  for (let mood in moodCount) {
    if (moodCount[mood] > maxCount) {
      maxMood = mood;
      maxCount = moodCount[mood];
    }
  }

  console.log(`Most frequent mood: "${maxMood}"`);
}
mostFrequentMood(weekData);
// Function: Check if more caffeine means better focus
function correlateCaffeineToFocus(data) {
  let highCaffeineFocus = [];
  let lowCaffeineFocus = [];

  for (let entry of data) {
    if (entry.caffeineIntake >= 3) {
      highCaffeineFocus.push(entry.focusLevel);
    } else {
      lowCaffeineFocus.push(entry.focusLevel);
    }
  }

  const avgHigh = highCaffeineFocus.reduce((a, b) => a + b, 0) / highCaffeineFocus.length;
  const avgLow = lowCaffeineFocus.reduce((a, b) => a + b, 0) / lowCaffeineFocus.length;

  const result = avgHigh > avgLow ? "Yes!" : "Nope!";
  console.log(`Does more caffeine mean better focus? → ${result}`);
}
correlateCaffeineToFocus(weekData);
