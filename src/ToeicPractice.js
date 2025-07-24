import React, { useState, useEffect } from "react";

const questions = [
  {
    id: 101,
    question:
      "........the restaurant serves delicious foods, many customers think that it is not worth going there often in terms of the waiting time and prices.",
    choices: {
      A: "Although",
      B: "Until",
      C: "Despite",
      D: "Otherwise",
    },
    answer: "A",
  },
  {
    id: 102,
    question:
      "Ms. Lopez will act as a ...........replacement for the marketing director, who will be overseas for the Solar Energy Conference for three weeks.",
    choices: {
      A: "duplicate",
      B: "prolonged",
      C: "major",
      D: "temporary",
    },
    answer: "D",
  },
  {
    id: 103,
    question:
      "If there is no price tag on the product, you can obtain the price directly...........us by calling one of our staff.",
    choices: {
      A: "among",
      B: "amid",
      C: "out of",
      D: "from",
    },
    answer: "D",
  },
  // Thêm các câu 104-140 ở đây từ dữ liệu PDF (sẽ cần thêm script hỗ trợ hoặc manual nhập)
];

export default function ToeicPractice() {
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [timeLeft, setTimeLeft] = useState(75 * 60); // 75 phút

  useEffect(() => {
    if (timeLeft > 0 && !submitted) {
      const timer = setInterval(() => setTimeLeft((prev) => prev - 1), 1000);
      return () => clearInterval(timer);
    }
  }, [timeLeft, submitted]);

  const formatTime = (seconds) => {
    const m = String(Math.floor(seconds / 60)).padStart(2, '0');
    const s = String(seconds % 60).padStart(2, '0');
    return `${m}:${s}`;
  };

  const handleSelect = (id, choice) => {
    setAnswers((prev) => ({ ...prev, [id]: choice }));
  };

  const handleSubmit = () => {
    let correct = 0;
    questions.forEach((q) => {
      if (answers[q.id] === q.answer) correct++;
    });
    setScore(correct);
    setSubmitted(true);
  };

  return (
    <div className="p-4 md:p-8 max-w-6xl mx-auto">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">PRACTICE TOEIC TEST - Part V</h1>
        <div className="flex gap-4 items-center">
          <div className="text-xl font-mono text-green-700">
            Time Left: {formatTime(timeLeft)}
          </div>
          <button
            onClick={handleSubmit}
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
          >
            Submit
          </button>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-6">
        <div className="w-full md:w-3/4">
          {questions.map((q, index) => (
            <div key={q.id} className="mb-6 border-b pb-4">
              <p className="mb-2 font-semibold">
                Question {index + 1} ({q.id}). {q.question}
              </p>
              <div className="space-y-2">
                {Object.entries(q.choices).map(([key, value]) => (
                  <label
                    key={key}
                    className={`block p-2 border rounded cursor-pointer ${
                      submitted
                        ? key === q.answer
                          ? "bg-green-100 border-green-400"
                          : answers[q.id] === key && key !== q.answer
                          ? "bg-red-100 border-red-400"
                          : ""
                        : "hover:bg-blue-50"
                    }`}
                  >
                    <input
                      type="radio"
                      name={`q${q.id}`}
                      value={key}
                      disabled={submitted}
                      checked={answers[q.id] === key}
                      onChange={() => handleSelect(q.id, key)}
                      className="mr-2"
                    />
                    ({key}) {value}
                  </label>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="w-full md:w-1/4">
          <div className="bg-gray-100 p-4 rounded shadow">
            <p className="text-lg font-semibold mb-2">Quick Navigation</p>
            <div className="grid grid-cols-5 gap-2">
              {questions.map((q, index) => (
                <button
                  key={q.id}
                  onClick={() => {
                    const el = document.getElementById(`q-${q.id}`);
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  }}
                  className={`w-10 h-10 text-sm font-bold rounded-full border ${
                    answers[q.id]
                      ? submitted && answers[q.id] === q.answer
                        ? "bg-green-300"
                        : submitted
                        ? "bg-red-300"
                        : "bg-blue-200"
                      : "bg-white"
                  }`}
                >
                  {index + 1}
                </button>
              ))}
            </div>
          </div>

          {submitted && (
            <div className="mt-4 p-4 bg-white border rounded shadow">
              <p className="text-lg font-bold text-blue-700">
                Score: {score} / {questions.length}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
