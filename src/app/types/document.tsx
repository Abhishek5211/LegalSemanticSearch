export interface Document {
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
}