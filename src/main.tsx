import React from "react"
import ReactDOM from "react-dom/client"
import "@fontsource/pretendard/400.css"
import "@fontsource/pretendard/600.css"
import "@fontsource/pretendard/800.css"
import App from "./App.tsx"
import "@/styles/tokens.css"
import "@/styles/global.css"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
