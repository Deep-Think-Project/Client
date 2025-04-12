# Deep Think Project

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

![Image](https://github.com/user-attachments/assets/ae69b3d7-d8a9-47f6-adc1-18854bacea2b)

---

### ⏳ Loading Page

While processing, Deep Think analyzes each sentence and classifies it into one of two categories.

![Image](https://github.com/user-attachments/assets/293c3f2f-7d37-4b7f-93ee-e380ae338cb6)

---

### 📊 Result Page

- **Summary & Author Intent**:  
  A brief summary and author perspective are displayed at the top.  

  ![Image](https://github.com/user-attachments/assets/02e556ee-2bf6-4b29-9087-97bf510c714a)

- **Highlighted Sentences**:  
  The full text is annotated using colored highlights.  
  Green = clear, Purple = ambiguous.

  ![Image](https://github.com/user-attachments/assets/42adc691-88d8-4330-b273-9c6cf3b79323)

- **Interactive Tooltips**:  
  Clicking on a sentence reveals additional insights:

  - **For clear (green) sentences**:
    - The classification rationale

  ![Image](https://github.com/user-attachments/assets/63b09e98-ad02-410a-85f5-8fdd34edcb3f)

  - **For ambiguous (purple) sentences**:
    - The classification rationale  
    - Additional interpretations  
    - Related reference links (when available)

  ![Image](https://github.com/user-attachments/assets/5d1466e7-e6fe-406a-bbb4-91804dd82fa1)

- **Reference Material**:  
  External links open in a new tab and provide supporting sources for ambiguous sentences.

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
