import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const questions = [/* giữ nguyên danh sách câu hỏi như trên */];

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
        <Card key={q.id} className="bg-white shadow-md rounded-xl">
          <CardContent className="p-4 space-y-2">
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
                  <Button
                    key={key}
                    variant="outline"
                    className={`justify-start ${
                      selected ? "ring-2 ring-blue-500" : ""
                    } ${correct ? "bg-green-100 border-green-500" : ""} ${
                      isWrong ? "bg-red-100 border-red-500" : ""
                    }`}
                    onClick={() => handleSelect(q.id, key)}
                  >
                    {key}. {value}
                  </Button>
                );
              })}
            </div>
          </CardContent>
        </Card>
      ))}

      {!submitted ? (
        <div className="text-center">
          <Button
            onClick={() => setSubmitted(true)}
            className="bg-blue-600 text-white px-6 py-2 rounded-full text-lg hover:bg-blue-700"
          >
            Submit
          </Button>
        </div>
      ) : (
        <div className="text-center text-xl font-semibold text-green-700">
          ✅ You scored {score} out of {questions.length}
        </div>
      )}
    </div>
  );
}
