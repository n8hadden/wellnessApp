const model = require("../models/moodModels");

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

async function getMoodId(req, res) {
  const {mood} = req.data;

  try{
    const  id = await model.getMoodID(mood);
    res.status(200).json({id});
  } catch {
    console.log(err);
    res.status(404).json({message:"No Mood Found with that Name!"})
  }
}

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
    
    if (index === -1) 
     continue;
     
    if (mood.moodScore > cur.moodScore) {
      cur = mood;
    } else if ((mood.moodScore === cur.moodScore) && index < pque.indexOf(cur.moodType)) {
      cur = mood;
    }
  }

  return cur;
}

module.exports = {
  getMoodInfo,
  getMoodId
}

