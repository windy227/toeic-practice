import React, { useState } from "react";

const questions = [
  {
    id: 101,
    question: "If you want to receive additional information regarding the services we offer, please log onto our website at www.healthclub.com today.",
    choices: { A: "If", B: "For", C: "Despite", D: "Whether" },
    answer: "A",
  },
  {
    id: 102,
    question: "Sandy Duncan was handpicked by the general manager to head the next project because of ______ experience in this field.",
    choices: { A: "her", B: "hers", C: "herself", D: "she" },
    answer: "A",
  },
  {
    id: 103,
    question: "The changes made in the working conditions at our company resulted in remarkable improvements in all aspects of our business and more so in the morale of our employees.",
    choices: { A: "all", B: "any", C: "even", D: "although" },
    answer: "A",
  },
  {
    id: 104,
    question: "All commuters ______ the main highway to get to the center of the city will face delays of up to an hour today because of on-going construction.",
    choices: { A: "use", B: "used", C: "using", D: "will use" },
    answer: "C",
  },
  {
    id: 105,
    question: "In order to become a member of the country club, applicants have to meet the strict ______ set by the club president.",
    choices: { A: "require", B: "requires", C: "requiring", D: "requirements" },
    answer: "D",
  },
  {
    id: 106,
    question: "The outcome of our meeting today with the board of directors will ______ the course of action we will take this year.",
    choices: { A: "determine", B: "determines", C: "determining", D: "determination" },
    answer: "A",
  },
  {
    id: 107,
    question: "The announcement of John Stanton's retirement was not well received by most of the staff members, but Leslie, his long time friend and colleague, was extremely ______ to hear that Mr. Stanton will now be able to enjoy some leisure time.",
    choices: { A: "happiest", B: "happily", C: "happier", D: "happy" },
    answer: "D",
  },
  {
    id: 108,
    question: "Because many of the warehouse workers were out sick today, Mr. Miller had to stock the goods on the shelves ______.",
    choices: { A: "itself", B: "himself", C: "herself", D: "themselves" },
    answer: "B",
  },
  {
    id: 109,
    question: "Please accept our ______ apology for the inconvenience this delay is causing all the passengers here at Pearson International Airport.",
    choices: { A: "sincere", B: "original", C: "estimated", D: "completed" },
    answer: "A",
  },
  {
    id: 110,
    question: "The majority of the contract ______ that took place during the year were handled by lawyers from a local law firm.",
    choices: { A: "negotiate", B: "negotiations", C: "negotiable", D: "negotiator" },
    answer: "B",
  },
  {
    id: 111,
    question: "It will be next to impossible to ______ a room at the Ashton Hotel this week because of the film festival.",
    choices: { A: "reserve", B: "respond", C: "connect", D: "appoint" },
    answer: "A",
  },
  {
    id: 112,
    question: "The presentation of this evening's winners will commence ______ at seven following dinner at six.",
    choices: { A: "precise", B: "precision", C: "precisely", D: "preciseness" },
    answer: "C",
  },
  {
    id: 113,
    question: "The new sports complex will accommodate an Olympic-sized swimming pool and other ______, including a fitness center and a spa, to name just a few.",
    choices: { A: "facilities", B: "categories", C: "qualities", D: "supplies" },
    answer: "A",
  },
  {
    id: 114,
    question: "Our new product will be put through a number of ______ tests before being released to the public.",
    choices: { A: "dependent", B: "founded", C: "withhold", D: "stringent" },
    answer: "D",
  },
  {
    id: 115,
    question: "Mr. Chan's main role in the company for the next two weeks is to look ______ the right person to take over Mr. Shaw's position when he leaves at the end of the month.",
    choices: { A: "in", B: "for", C: "over", D: "from" },
    answer: "B",
  },
  {
    id: 116,
    question: "People unanimously agreed that John would have performed a great deal better under more ______ circumstances.",
    choices: { A: "favorable", B: "favorably", C: "favorite", D: "favor" },
    answer: "A",
  },
  {
    id: 117,
    question: "After a long and difficult strike, the plant’s workers will show up to work ______ Monday.",
    choices: { A: "starting on", B: "afterwards", C: "instead", D: "outside" },
    answer: "A",
  },
  {
    id: 118,
    question: "Scarborough General Hospital has two ______ for certified x-ray technicians to start immediately.",
    choices: { A: "open", B: "opener", C: "openings", D: "openness" },
    answer: "C",
  },
  {
    id: 119,
    question: "Mark's Warehouse Clearance Store is having a sale in celebration of its 25th anniversary with savings of up to 40 percent off on all clothing this weekend.",
    choices: { A: "in", B: "at", C: "on", D: "of" },
    answer: "A",
  },
  {
    id: 120,
    question: "Probe Magazine conducted a survey asking one thousand employees who work in low-paying industries to express ______ their biggest concerns are.",
    choices: { A: "how", B: "when", C: "what", D: "which" },
    answer: "C",
  },
  {
    id: 121,
    question: "Should there be any requests for schedule changes, please notify us ______.",
    choices: { A: "prompt", B: "prompted", C: "promptly", D: "promptness" },
    answer: "C",
  },
  {
    id: 122,
    question: "For this weekend only, Bad Boys Electronics Store is celebrating its first year in business with up to thirty percent ______ on all items in the store.",
    choices: { A: "retail", B: "market", C: "economy", D: "discounts" },
    answer: "D",
  },
  {
    id: 123,
    question: "The automobile parts we requested for our customer got here on ______.",
    choices: { A: "authority", B: "condition", C: "schedule", D: "appointment" },
    answer: "C",
  },
  {
    id: 124,
    question: "The advertisements printed in this magazine do not ______ imply endorsement by the management.",
    choices: { A: "highly", B: "barely", C: "gradually", D: "necessarily" },
    answer: "D",
  },
  {
    id: 125,
    question: "The newly installed alarm system, which is directly connected to the police, will go off if the correct security code is not entered ______ 60 seconds of touching the keypad.",
    choices: { A: "only", B: "under", C: "within", D: "directly" },
    answer: "C",
  },
];

export default function ToeicPractice() {
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleSelect = (id, choice) => {
    if (!submitted) {
      setAnswers({ ...answers, [id]: choice });
    }
  };

  const score = questions.reduce((acc, q) => {
    return acc + (answers[q.id] === q.answer ? 1 : 0);
  }, 0);

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-6">
      <h1 className="text-3xl font-bold text-center mb-4">📝 TOEIC Practice - Test 1 (Part 5)</h1>

      {questions.map((q) => (
        <div key={q.id} className="bg-white shadow-md rounded-xl p-4 space-y-2">
          <p className="font-semibold">
            {q.id}. {q.question}
          </p>
          <div className="grid grid-cols-2 gap-3">
            {Object.entries(q.choices).map(([key, value]) => {
              const selected = answers[q.id] === key;
              const isCorrect = q.answer === key;
              const isWrong = submitted && selected && !isCorrect;
              const correct = submitted && isCorrect;

              return (
                <button
                  key={key}
                  className={`text-left border px-3 py-2 rounded-lg transition ${
                    selected ? "ring-2 ring-blue-500" : ""
                  } ${correct ? "bg-green-100 border-green-500" : ""} ${
                    isWrong ? "bg-red-100 border-red-500" : ""
                  }`}
                  onClick={() => handleSelect(q.id, key)}
                >
                  {key}. {value}
                </button>
              );
            })}
          </div>
        </div>
      ))}

      {!submitted ? (
        <div className="text-center">
          <button
            onClick={() => setSubmitted(true)}
            className="bg-blue-600 text-white px-6 py-2 rounded-full text-lg hover:bg-blue-700"
          >
            Submit
          </button>
        </div>
      ) : (
        <div className="text-center text-xl font-semibold text-green-700">
          ✅ You scored {score} out of {questions.length}
        </div>
      )}
    </div>
  );
}
