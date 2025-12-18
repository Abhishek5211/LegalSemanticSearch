#  Legal Semantic Search – UI Frontend

This repository contains the **frontend UI** for the **Legal Semantic Search Tool for Nepali Legal Documents**.  
The project aims to make Nepali court judgments more accessible by enabling users to search for cases **semantically**, rather than relying only on keyword-based search.

---

##  Project Overview

The goal of the overall project was to develop a semantic search tool for Nepali legal documents, allowing users to:

-  Find court judgments **similar to their case**.
-  Train a **custom embedding model** specifically on Nepali legal texts.
-  Evaluate improvements in semantic search results for legal use cases.

This repository focuses on the **UI frontend**, which provides an intuitive interface for interacting with the semantic search engine.

---

##  Features

- Clean and minimal **UI for searching Nepali legal judgments**.
- Displays **matched cases** with detailed information.
- Side-by-side comparison of search results from different models.
- Interactive search experience tailored for legal professionals and researchers.

---

##  Demo Screenshots

Below are sample screenshots of the UI in action:

### Matched Case File
![Matched Case File](img/e_full_detail.png)

### Search Result (Model I-Jl)
![Search Result I-Jl](img/search_result_I-Jl.png)

### Search Result UI
![Search Result UI](img/search_result_ui1.png)

---

## 🛠️ Tech Stack

- **Frontend Framework:** Next.js (React-based)
- **Styling:** TailwindCSS
- **State Management:** React hooks
- **Backend Integration:** Pinecone (for semantic search retrieval)

---

##  Repository Structure

```
├── src/                # Core frontend source code
├── components/         # Reusable UI components
├── public/img/         # Demo screenshots and assets
├── README.md           # Project documentation
├── package.json        # Dependencies and scripts
└── tailwind.config.ts  # TailwindCSS configuration
```

---

## ⚡ Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/Abhishek5211/LegalSemanticSearch.git
   cd LegalSemanticSearch
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📜 License

This project is licensed under the MIT License.  
Feel free to use, modify, and distribute with attribution.

---
 
