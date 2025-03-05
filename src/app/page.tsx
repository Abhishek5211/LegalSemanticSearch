"use client";

import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import SearchForm from "@/components/SearchForm";
import DocumentView from "@/components/DocumentView";

interface SearchResult {
  id?: string;
  index: string;
  subject: string;
  parties: string;
  opponents: string;
  date: string;
  topic: string;
  outcome: string;
  case_summary: string;
  CaseSummary: string;
  bench_name: string;
  case_number: string;
  similarity: string;
  decision_number: number;
  judgement_date: string;
  judgement_type: string;
  judges: string[];
  nepal_kanun_patrika: {
    issue: string;
    month: string;
    volume: string;
    year: string;
  };
  precedents: string[];
  related_laws: string[];
  Argument: {
    PetitionersArgument: string;
    RespondentsArgument: string;
  };
  CourtsAnalysis: string;
  Facts: {
    FactsOfTheCase: string;
  };
  Judgment: string;
  Keywords: string[];
  LegalProvisions: {
    RelevantLegalProvisions: {
      Law: string;
      Relevance: string;
      SectionNumber: string;
    }[];
  };
  PrecedentsCited: {
    CaseNumber: string;
    DecisionNumber: number;
    Explanation: string;
    NepalKanunPatrika: {
      Issue: number;
      Month: number;
      Page: number;
      Volume: number;
      Year: number;
    }[];
  }[];
  PrecedentsDisregarded: any[];
  RatioDecidendi: string;
  Significance: string;
  [key: string]: any;
  quote: string;
}

const handleSearch = async (
  query: string,
  setResults: (results: SearchResult[]) => void,
  setIsSearching: (isSearching: boolean) => void
) => {
  setIsSearching(true);
  const response = await fetch(
    "https://2221-34-105-49-89.ngrok-free.app/search",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query }),
    }
  );

  if (!response.ok) {
    const body = await response.json();
    console.log(body);
    throw new Error(`API request failed with status ${response.status}`);
  }

  const { results } = await response.json();
  setResults(results);
  setIsSearching(false);
};

const suggestedSearches = [
  "दल दर्ता र धार्मिक चिन्ह।",
  "जग्गा सरकारीकरण र प्राकृतिक न्याय।",
  "पुनरावेदन अदालत फैसला र लेनदेन।",
  "अदालत बयान र प्रमाण विरोधाभास।",
  "भन्सार महसुल र छुट सुविधा।",
  "विदेशी नागरिक विवाह र भिसा शुल्क।",
  "न्याय परिषद निर्णय र सूचनाको हक।",
  "कर्तव्य र भवितव्य बीचको भिन्नता।",
  "म्याद तामेल र सिमाना विवाद।",
  "पेशा रोजगार स्वतन्त्रतामा बन्देज।",
];

export default function Home() {
  const [isBootstrapping, setIsBootstrapping] = useState(false);
  const [isIndexReady, setIsIndexReady] = useState(false);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [selectedDocument, setSelectedDocument] = useState<SearchResult | null>(
    null
  );

  const clearResults = () => {
    setQuery("");
    setResults([]);
  };

  if (selectedDocument) {
    return (
      <DocumentView
        document={selectedDocument}
        quote={selectedDocument.quote}
        onBack={() => setSelectedDocument(null)}
      />
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-50">
      <div className="w-full mx-auto p-4 max-w-7xl">
        <h1 className="text-4xl text-center font-bold mb-4 text-indigo-900">
          What are you looking for?
        </h1>
        <p className="text-center text-gray-600 mb-8 text-lg">
          Use natural language to search through legal documents.
        </p>
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          <SearchForm
            suggestedSearches={suggestedSearches}
            onSearch={(query: string) => {
              handleSearch(query, setResults, setIsSearching);
              setQuery(query);
            }}
          />
        </div>
        {isSearching && (
          <div className="flex items-center justify-center mb-8">
            <p className="text-center text-gray-500 mr-2">Searching...</p>
            <div className="spinner border-4 border-t-transparent border-gray-200 rounded-full w-6 h-6 animate-spin"></div>
          </div>
        )}
        {results.length > 0 && query && (
          <div className="flex items-center justify-between mb-8 p-4 bg-white shadow-sm rounded-lg">
            <p className="text-gray-700">
              {results.length} result{results.length > 1 ? "s" : ""} for{" "}
              <span className="text-indigo-900 font-bold">{query}</span>.
            </p>
            <button
              type="button"
              onClick={clearResults}
              className="text-gray-500 hover:text-gray-700 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10" />
                <line x1="15" y1="9" x2="9" y2="15" />
                <line x1="9" y1="9" x2="15" y2="15" />
              </svg>
            </button>
          </div>
        )}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {results.map((result, index) => (
            <Card
              key={index}
              className="w-full bg-white shadow-lg rounded-lg overflow-hidden transition-shadow duration-200 hover:shadow-2xl cursor-pointer"
              onClick={() => setSelectedDocument(result)}
            >
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold mb-4 text-indigo-900">
                  {result.subject}
                </h2>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <span className="font-bold text-indigo-900">Parties:</span>{" "}
                    <span className="text-gray-700">{result.parties}</span>
                  </div>
                  <div>
                    <span className="font-bold text-indigo-900">
                      Opponents:
                    </span>{" "}
                    <span className="text-gray-700">{result.opponents}</span>
                  </div>
                </div>
                <div className="mb-4">
                  <span className="font-bold text-indigo-900">Similarity:</span>{" "}
                  <span className="text-gray-700">{result.similarity}%</span>
                </div>
                <blockquote className="relative font-medium italic leading-relaxed text-gray-700 bg-gray-100 p-4 rounded-lg">
                  <div className="absolute top-0 left-0 text-6xl font-bold text-gray-300">
                    &ldquo;
                  </div>
                  <p className="line-clamp-6">{result.quote}</p>
                  <div className="absolute bottom-0 right-0 text-6xl font-bold text-gray-300">
                    &rdquo;
                  </div>
                </blockquote>
                <div className="mt-4 text-sm">
                  <span className="font-bold text-indigo-900">Topic:</span>{" "}
                  <span className="truncate">{result.judgement_type}</span>
                </div>
                <div className="mt-3 text-sm">
                  <span className="font-bold text-indigo-900">Verdict:</span>{" "}
                  <div className="absolute top-0 left-0 text-6xl font-bold text-gray-300">
                    &ldquo;
                  </div>
                  <p className="line-clamp-6">{result.Judgment}</p>
                  <div className="absolute bottom-0 right-0 text-6xl font-bold text-gray-300">
                    &rdquo;
                  </div>
                </div>
                <div className="mt-3 text-sm">
                  <span className="font-bold text-indigo-900">Year:</span>{" "}
                  {result.judgement_date}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
