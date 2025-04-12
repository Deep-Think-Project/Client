# Deep Think Frontend

This project provides the frontend interface for the Deep Think service — a critical reading tool that uses AI to analyze and classify sentences from articles as either **clear** or **ambiguous**. It enables users to easily interact with the underlying analysis engine through an intuitive web-based experience.

---

## 🚀 Features

- Accepts a **URL** or **copied text** via the input search bar  
- Visualizes AI-powered classification results in two types:
  - **Clear sentence**: Objectively interpretable or fact-based
  - **Ambiguous sentence**: Subjective, emotional, or open to multiple interpretations  
- Offers **sentence-level tooltips** to explain each classification  
- Provides **summary and author intent analysis** after sentence classification  
- Links ambiguous sentences to **external references** for deeper insight  
- Fully responsive user interface with smooth transitions and tooltip overlays  

---

## 🧭 How to Use

### 🏠 Main Page

Copy a news article URL or drag-select and copy text.  
Paste it into the **search bar**, then click the **Analyze** button.

![Main Page](path/to/main-page.png)

---

### ⏳ Loading Page

While processing, Deep Think analyzes each sentence and classifies it into one of two categories.

![Loading Page](path/to/loading-page.png)

---

### 📊 Result Page

- **Summary & Author Intent**:  
  A brief summary and author perspective are displayed at the top.  

  ![Summary Section](path/to/summary.png)

- **Highlighted Sentences**:  
  The full text is annotated using colored highlights.  
  Green = clear, Purple = ambiguous.

  ![Highlighted Sentences](path/to/highlight.png)

- **Interactive Tooltips**:  
  Clicking on a sentence reveals additional insights:

  - **For clear (green) sentences**:
    - The classification rationale

  - **For ambiguous (purple) sentences**:
    - The classification rationale  
    - Additional interpretations  
    - Related reference links (when available)

  ![Tooltip Interaction](path/to/tooltip.png)

- **Reference Material**:  
  External links open in a new tab and provide supporting sources for ambiguous sentences.

  ![Reference Click](path/to/reference.png)

---

## ⚙️ Setup Instructions

To run this frontend locally:

1. **Set your backend proxy URL**
   In the project root, open your `package.json` file and set the `proxy` field to your backend server URL

   ```json
   // package.json
   {
     ...
     "proxy": "http://your_proxy_address"
   }
   ```

2. **Install dependencies**  
   ```
   npm install
   ```

3. **Start the development server**  
   ```
   npm start
   ```

This will launch the app at `http://localhost:3000` by default.

---

## 🧑‍💻 Author

This frontend was built as part of the **Deep Think** project, an initiative to promote media literacy and critical thinking by leveraging generative AI. The UI is designed for simplicity, speed, and interpretability — helping users better understand and question the information they consume.

---

## 📜 License

MIT License
