/** This could be loaded from a localization file or db */

import type { Claim } from "./claims";
import type { Language } from "./language";

const counterClaims: ({
  id: number;
  author: string;
  date: string;
  /** references the indicated claims by id */
  referencesClaims: number[];
  link?: string;
} & Record<Language, Claim>)[] = [
  {
    id: 1,
    author: "Author 1",
    date: "2023-10-01",
    referencesClaims: [1, 2],
    link: "https://example.com/counterclaim1",
    de: {
      title: "Gegenanspruch 1",
      summary: "Zusammenfassung des Gegenanspruchs 1",
      originalText: "Details zu Gegenanspruch 1.",
    },
    en: {
      title: "Counter Claim 1",
      summary: "Summary of Counter Claim 1",
      originalText: "Details about Counter Claim 1.",
    },
  },
  {
    id: 2,
    author: "Author 2",
    date: "2023-10-02",
    referencesClaims: [3, 4],
    link: "https://example.com/counterclaim2",
    de: {
      title: "Gegenanspruch 2",
      summary: "Zusammenfassung des Gegenanspruchs 2",
      originalText: "Details zu Gegenanspruch 2.",
    },
    en: {
      title: "Counter Claim 2",
      summary: "Summary of Counter Claim 2",
      originalText: "Details about Counter Claim 2.",
    },
  },
];

export default counterClaims;
