// components/QuotesWidget.tsx
"use client";

import { useEffect, useState } from "react";

interface Quote {
  en: string; // The quote text
  author: string; // The author of the quote
}

export default function QuotesWidgets() {
  const [quote, setQuote] = useState<Quote | null>(null);

  useEffect(() => {
    const fetchQuote = async () => {
      try {
        // Check if a quote was already fetched today
        const savedQuote = localStorage.getItem("dailyTechQuote");
        const savedDate = localStorage.getItem("quoteDate");
        const today = new Date().toISOString().split("T")[0];

        if (savedQuote && savedDate === today) {
          setQuote(JSON.parse(savedQuote));
        } else {
          // Fetch a new quote
          const response = await fetch("https://programming-quotes-api.herokuapp.com/quotes/random");
          const data = await response.json();
          setQuote(data);

          // Save the quote and today's date
          localStorage.setItem("dailyTechQuote", JSON.stringify(data));
          localStorage.setItem("quoteDate", today);
        }
      } catch (error) {
        console.error("Error fetching the quote:", error);
      }
    };

    fetchQuote();
  }, []);

  if (!quote) {
    return (
      <div className="p-4 bg-gray-100 rounded-lg shadow-md max-w-sm text-center">
        <p>Loading today's tech quote...</p>
      </div>
    );
  }

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg max-w-sm">
      <h2 className="text-xl font-semibold text-center mb-4">Tech Quote of the Day</h2>
      <blockquote className="italic text-gray-700 text-center">
        "{quote.en}"
      </blockquote>
      <p className="mt-4 text-right font-medium text-gray-600">- {quote.author}</p>
    </div>
  );
}
