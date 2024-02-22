const model = require("../models/moodModels");

// Used for testing the algorithm
const test_data = [
  { moodName: "Depressed", moodScore: 1, moodType: "Sad" },
  { moodName: "Happy", moodScore: 5, moodType: "Happy" },
  { moodName: "Mad", moodScore: 3, moodType: "Mad" },
  { moodName: "Sad", moodScore: 2, moodType: "Sad" },
  { moodName: "Joyful", moodScore: 4, moodType: "Joyful" },
  { moodName: "Weird", moodScore: 3, moodType: "Weird" },
  { moodName: "Calm", moodScore: 4, moodType: "Calm" },
  { moodName: "Depressed", moodScore: 5, moodType: "Depressed" },
  { moodName: "Loved", moodScore: 5, moodType: "Loved" },
  { moodName: "Depressed", moodScore: 1, moodType: "Sad" },
  { moodName: "Happy", moodScore: 4, moodType: "Happy" },
  { moodName: "Mad", oodScore: 2, moodType: "Mad" },
  { moodName: "Sad", moodScore: 1, moodType: "Sad" },
  { moodName: "Joyful", moodScore: 5, moodType: "Joyful" },
  { moodName: "Weird", moodScore: 3, moodType: "Weird" },
  { moodName: "Calm", moodScore: 4, moodType: "Calm" },
  { moodName: "Loved", moodScore: 5, moodType: "Loved" },
];

/**
  * Algorithm to determine the highest rated mood
  * @param {[{moodName: string, moodScore: number, moodType: string}]} data
  * @returns {{moodName: string, moodScore: number, moodType: string}} mood 
**/
function getHighestRatedMood(data) {
  // Priority queue
  // Lower index is higher priority
  const pque = ["Depressed", "Happy", "Mad", "Sad", "Joyful", "Weird", "Calm", "Loved"];

  // Currently highest rated mood
  let cur = data[0];
  for (let i = 1; i < data.length; i++) {
    const mood = data[i];
    // Priority Queue Value (index: lowest)
    const index = pque.indexOf(mood.moodType);
    // Value is in the priority queue
    if (index !== -1) {
      if (mood.moodScore > cur.moodScore) {
        cur = mood;
      } else if ((mood.moodScore === cur.moodScore) && index < pque.indexOf(cur.moodType)) {
        cur = mood;
      }
    }
  }
  return cur;
}

async function getMoodInfo(req, res) {
  // const { data } = req.body;
  const data = test_data

  // Code to determine the highest rated score
  const mood = getHighestRatedMood(data);

  try {
    const moodInfo = await model.getMoodInfo(mood);
    res.status(201).json({ moodInfo });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
