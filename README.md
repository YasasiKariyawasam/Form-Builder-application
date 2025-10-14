# Form-Builder-application
https://form-editor-deployed-uvef.vercel.app/
# 📝 Dynamic Form Editor

A powerful, intuitive drag-and-drop form builder built with React and Tailwind CSS. Create custom forms with multiple field types, manage options, and preview your forms in real-time.


## ✨ Features

- **Multiple Field Types**
  - Text Input
  - Number Input
  - Email Input
  - Date Picker
  - Dropdown/Select
  - Single Checkbox
  - Checklist (Multiple Checkboxes)
  - Radio Buttons

- **Dynamic Options Management**
  - Add, edit, and remove options for dropdown, checklist, and radio fields
  - Real-time preview updates

- **Field Configuration**
  - Custom field labels
  - Required field toggle
  - Easy field deletion

- **Live Preview**
  - See your form as you build it
  - Instant updates with every change

- **Clean UI**
  - Modern, responsive design
  - Intuitive user interface
  - Built with shadcn/ui components

## 🚀 Demo

[Live Demo](https://form-editor-deployed-uvef.vercel.app/) 

## 📦 Installation

### Prerequisites

- Node.js 16.x or higher
- npm or yarn

### Setup

1. **Clone the repository**
```bash
git clone https://github.com/YOUR_USERNAME/form-editor.git
cd form-editor
```

2. **Install dependencies**
```bash
npm install
```

3. **Install required packages**
```bash
# Core dependencies
npm install lucide-react

# Tailwind CSS
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

# shadcn/ui components
npx shadcn@latest init
npx shadcn@latest add button card input select
```

4. **Configure Tailwind CSS**

Update `tailwind.config.js`:
```javascript
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

Update `src/index.css`:
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

5. **Run the development server**
```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## 🛠️ Usage

### Adding a Field

1. Click the **"Add Field"** button in the Form Editor card
2. Enter a custom label for your field
3. Select the field type from the dropdown
4. Toggle **"Required"** if the field should be mandatory

### Managing Options (Dropdown, Checklist, Radio)

1. Select a field type that supports options (Dropdown, Checklist, or Radio Buttons)
2. An options panel will appear below the field
3. Click **"Add Option"** to create new choices
4. Edit option text directly in the input fields
5. Click the **X** button to remove an option

### Preview & Submit

- The **Form Preview** card updates in real-time as you build
- Test your form by filling it out and clicking **Submit**

## 📂 Project Structure

```
form-editor/
├── src/
│   ├── components/
│   │   └── ui/              # shadcn/ui components
│   ├── App.jsx              # Main Form Editor component
│   ├── main.jsx
│   └── index.css
├── public/
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md
```

## 🌐 Deployment

### Deploy to Vercel

1. **Push to GitHub**
```bash
git add .
git commit -m "Initial commit"
git push origin main
```

2. **Deploy via Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New" → "Project"
   - Import your GitHub repository
   - Click "Deploy"

3. **Or use Vercel CLI**
```bash
npm install -g vercel
vercel
```

### Build Settings

- **Framework Preset:** Vite
- **Build Command:** `npm run build`
- **Output Directory:** `dist`
- **Install Command:** `npm install`

## 🔧 Technologies Used

- **React 18** - UI framework
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Styling
- **shadcn/ui** - UI component library
- **Lucide React** - Icon library

- [ ] Theme customization
