import { useEffect, useRef } from "react";
import { sanitizeString } from "@/lib/utils"; // Assuming you have this utility

interface DocumentViewProps {
  document: {
    id?: string;
    index: string;
    subject: string;
    parties: string;
    opponents: string;
    date: string;
    topic: string;
    outcome: string;
    case_summary: string;
    CaseSummary: {
      SummaryOfTheIssue:string;
    };
    bench_name: string;
    case_number: string;
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
      FactsOfTheCase?: string; // Optional
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
  };
  onBack: () => void;
}

export default function DocumentView({ document, onBack }: DocumentViewProps) {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contentRef.current) {
      const highlight = contentRef.current.querySelector(".highlight");
      if (highlight) {
        highlight.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }
  }, []);

  const handleOpenFullDocument = () => {
    // Replace with the actual link to the full document
    window.open("https://nkp.gov.np/full_detail/" + document.index, "_blank");
  };

  return (
    <div className="flex flex-col mx-3 h-screen bg-gray-100">
      {/* Header Section */}
      <div className="p-6 bg-white shadow-md fixed w-full z-10">
        <button
          onClick={onBack}
          className="text-indigo-600 hover:underline font-semibold"
        >
          &larr; Back to search
        </button>
        <h1 className="text-3xl font-bold text-indigo-900 mt-2">
          {document.subject}
        </h1>
        <div className="mt-2 flex flex-wrap gap-4">
          <div>
            <span className="font-semibold text-indigo-900">Topic:</span>{" "}
            {document.judgement_type}
          </div>
          <div>
            <span className="font-semibold text-indigo-900">Verdict:</span>{" "}
            {document.Judgment}
          </div>
          <div>
            <span className="font-semibold text-indigo-900">Date:</span>{" "}
            {document.judgement_date}
          </div>
        </div>
        <button
          onClick={handleOpenFullDocument}
          className="mt-4 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition duration-300"
        >
          Open Full Document
        </button>
      </div>

      {/* Content Section */}
      <div
        className="mt-40 p-6 overflow-y-auto flex-1"
        style={{ paddingTop: "180px" }}
        ref={contentRef}
      >
        <div className="space-y-6">
          {/* General Information */}
          <section className="bg-white rounded-lg shadow p-6">
            <h2 className="text-2xl font-semibold mb-4 text-indigo-800">
              General Information
            </h2>
            <div className="space-y-2">
              <p>
                <span className="font-semibold text-gray-700">Parties:</span>{" "}
                {document.parties}
              </p>
              <p>
                <span className="font-semibold text-gray-700">Opponents:</span>{" "}
                {document.opponents}
              </p>
              <p>
                <span className="font-semibold text-gray-700">
                  Case Number:
                </span>{" "}
                {document.case_number}
              </p>
              <p>
                <span className="font-semibold text-gray-700">Bench Name:</span>{" "}
                {document.bench_name}
              </p>
              <p>
                <span className="font-semibold text-gray-700">Judges:</span>{" "}
                {document.judges?.join(", ") || "N/A"}
              </p>
            </div>
          </section>

          {/* Case Details */}
          <section className="bg-white rounded-lg shadow p-6">
            <h2 className="text-2xl font-semibold mb-4 text-indigo-800">
              Case Details
            </h2>
            <div className="space-y-2">
              <p>
                <span className="font-semibold text-gray-700">
                  Case Summary:
                </span>{" "}
                {document.CaseSummary.SummaryOfTheIssue || document.case_summary}
              </p>
              <p>
                <span className="font-semibold text-gray-700">
                  Facts of the Case:
                </span>{" "}
                {document.Facts?.FactsOfTheCase || "N/A"}
              </p>
              <p>
                <span className="font-semibold text-gray-700">Outcome:</span>{" "}
                {document.outcome}
              </p>
              <p>
                <span className="font-semibold text-gray-700">
                  Ratio Decidendi:
                </span>{" "}
                {document.RatioDecidendi}
              </p>
              <p>
                <span className="font-semibold text-gray-700">
                  Significance:
                </span>{" "}
                {document.Significance}
              </p>
            </div>
          </section>

          {/* Arguments */}
          <section className="bg-white rounded-lg shadow p-6">
            <h2 className="text-2xl font-semibold mb-4 text-indigo-800">
              Arguments
            </h2>
            <div className="space-y-2">
              <p>
                <span className="font-semibold text-gray-700">
                  Petitioner's Argument:
                </span>{" "}
                {document.Argument?.PetitionersArgument}
              </p>
              <p>
                <span className="font-semibold text-gray-700">
                  Respondent's Argument:
                </span>{" "}
                {document.Argument?.RespondentsArgument}
              </p>
            </div>
          </section>

          {/* Legal Information */}
          <section className="bg-white rounded-lg shadow p-6">
            <h2 className="text-2xl font-semibold mb-4 text-indigo-800">
              Legal Information
            </h2>
            <div className="space-y-2">
              <p>
                <span className="font-semibold text-gray-700">
                  Courts Analysis:
                </span>{" "}
                {document.CourtsAnalysis}
              </p>
              <p>
                <span className="font-semibold text-gray-700">
                  Related Laws:
                </span>{" "}
                {document.related_laws?.join(", ") || "N/A"}
              </p>
              {document.LegalProvisions?.RelevantLegalProvisions && (
                <div>
                  <h3 className="font-semibold mt-2 text-lg text-gray-800">
                    Relevant Legal Provisions:
                  </h3>
                  <ul className="list-disc list-inside">
                    {document.LegalProvisions.RelevantLegalProvisions.map(
                      (provision, index) => (
                        <li key={index}>
                          <span className="font-semibold text-gray-700">
                            {provision.Law}
                          </span>{" "}
                          - Section {provision.SectionNumber}:{" "}
                          {provision.Relevance}
                        </li>
                      )
                    )}
                  </ul>
                </div>
              )}
              <p>
                <span className="font-semibold text-gray-700">Keywords:</span>{" "}
                {document.Keywords?.join(", ") || "N/A"}
              </p>
            </div>
          </section>

          {/* Nepal Kanun Patrika */}
          {document.nepal_kanun_patrika && (
            <section className="bg-white rounded-lg shadow p-6">
              <h2 className="text-2xl font-semibold mb-4 text-indigo-800">
                Nepal Kanun Patrika
              </h2>
              <div className="space-y-2">
                <p>
                  <span className="font-semibold text-gray-700">Volume:</span>{" "}
                  {document.nepal_kanun_patrika.volume},{" "}
                  <span className="font-semibold text-gray-700">Issue:</span>{" "}
                  {document.nepal_kanun_patrika.issue},{" "}
                  <span className="font-semibold text-gray-700">Month:</span>{" "}
                  {document.nepal_kanun_patrika.month},{" "}
                  <span className="font-semibold text-gray-700">Year:</span>{" "}
                  {document.nepal_kanun_patrika.year}
                </p>
              </div>
            </section>
          )}
        </div>
      </div>
    </div>
  );
}
