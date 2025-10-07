🧠 CodeLens – Algorithm Visualizer

CodeLens is an interactive web-based visualization tool that helps users understand how sorting algorithms work step by step.
Built using React and Tailwind CSS, it allows users to generate arrays, visualize sorting processes, and explore algorithms in both auto and manual step modes.

🚀 Features

✅ Visualize Bubble Sort and Quick Sort algorithms
✅ Choose algorithm from a dropdown
✅ Adjustable sorting speed slider
✅ “Generate New” to randomize data
✅ “Sort” for automatic animation
✅ “Step Mode” for manual control (see each comparison step)
✅ Responsive layout (works on all screens)
✅ Dynamic bar resizing based on array length
✅ Color-coded visualization:

🔵 Unsorted elements

🔴 Comparing elements

🟢 Sorted elements

🧩 Tech Stack

Frontend: React (Vite)

Styling: Tailwind CSS (via CDN)

Language: JavaScript (ES6)

⚙️ Setup Instructions
1️⃣ Clone the Repository
git clone https://github.com/yourusername/codelens.git
cd codelens

2️⃣ Install Dependencies
npm install

3️⃣ Run Development Server
npm run dev


Then open the local server URL (e.g. http://localhost:5173) to view the app.

🎨 Tailwind CDN Setup

This project uses Tailwind CSS via CDN.
Make sure your index.html file includes the CDN link in the <head>:

<script src="https://cdn.tailwindcss.com"></script>

🧭 How It Works

Generate New: creates a random array.

Choose Algorithm: Bubble or Quick Sort.

Adjust Speed: faster or slower animation.

Sort: starts automatic animation.

Step Mode: switch to manual walkthrough.

Next Step: moves through each comparison in the selected algorithm.

💡 Future Improvements

Add Merge Sort, Insertion Sort, and Selection Sort

Add Step Auto-Play feature

Display time complexity & space complexity info for each algorithm

Add code snippets (Python, C, JavaScript) for learning mode

Implement dark/light theme toggle

👨‍💻 Author

Jeremiah Alamu
Frontend Developer | React Enthusiast
📧 toluwanimi605.com
🌐 https://github.com/Jerrysoftwork/codelens