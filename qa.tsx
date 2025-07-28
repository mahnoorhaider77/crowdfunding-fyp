'use client';

import React, { useState } from 'react';

type Question = {
  id: number;
  text: string;
  upvotes: number;
  replies: string[];
};

export default function QASection() {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [newQuestion, setNewQuestion] = useState('');
  const [replyMap, setReplyMap] = useState<{ [key: number]: string }>({});

  const handlePostQuestion = () => {
    if (!newQuestion.trim()) return;

    const newEntry: Question = {
      id: Date.now(),
      text: newQuestion.trim(),
      upvotes: 0,
      replies: [],
    };

    setQuestions([newEntry, ...questions]);
    setNewQuestion('');
  };

  const handleReply = (id: number) => {
    const replyText = replyMap[id];
    if (!replyText?.trim()) return;

    setQuestions((prev) =>
      prev.map((q) =>
        q.id === id ? { ...q, replies: [...q.replies, replyText.trim()] } : q
      )
    );

    setReplyMap((prev) => ({ ...prev, [id]: '' }));
  };

  const handleUpvote = (id: number) => {
    setQuestions((prev) =>
      prev.map((q) => (q.id === id ? { ...q, upvotes: q.upvotes + 1 } : q))
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-blue-100 p-6 flex justify-center items-start">
      <div className="bg-white bg-opacity-70 backdrop-blur-md shadow-md rounded-xl p-6 w-full max-w-2xl">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">💬 Public Q&A</h2>

        <div className="mb-6">
          <textarea
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
            rows={3}
            placeholder="Ask a public question about this project..."
            value={newQuestion}
            onChange={(e) => setNewQuestion(e.target.value)}
          />
          <button
            onClick={handlePostQuestion}
            className="mt-2 px-4 py-2 bg-purple-600 text-white rounded-lg font-medium hover:bg-purple-700 transition"
          >
            Post Question
          </button>
        </div>

        <div className="space-y-6">
          {questions.map((q) => (
            <div key={q.id} className="bg-white p-4 rounded-lg shadow-sm">
              <div className="flex justify-between items-center mb-2">
                <p className="text-gray-800">{q.text}</p>
                <button
                  onClick={() => handleUpvote(q.id)}
                  className="text-sm text-purple-600 hover:underline"
                >
                  👍 {q.upvotes}
                </button>
              </div>

              {q.replies.length > 0 && (
                <div className="ml-4 mt-2 space-y-1">
                  {q.replies.map((reply, idx) => (
                    <div
                      key={idx}
                      className="text-sm bg-purple-50 p-2 rounded-md text-gray-700"
                    >
                      👤 Creator: {reply}
                    </div>
                  ))}
                </div>
              )}

              <div className="mt-3">
                <input
                  type="text"
                  placeholder="Reply as creator..."
                  value={replyMap[q.id] || ''}
                  onChange={(e) =>
                    setReplyMap((prev) => ({ ...prev, [q.id]: e.target.value }))
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
                />
                <button
                  onClick={() => handleReply(q.id)}
                  className="mt-1 px-3 py-1 bg-blue-500 text-white rounded-lg text-sm hover:bg-blue-600 transition"
                >
                  Reply
                </button>
              </div>
            </div>
          ))}

          {questions.length === 0 && (
            <p className="text-gray-500 text-center">No questions yet. Be the first!</p>
          )}
        </div>
      </div>
    </div>
  );
}
