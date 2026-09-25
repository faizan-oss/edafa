import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ScrollManager } from "./components/SectionLink";
import { HomePage } from "./pages/HomePage";
import { PrivacyPage } from "./pages/PrivacyPage";
import { ServicePage } from "./pages/ServicePage";
import "./styles/global.css";
import "./styles/sections.css";

export default function App() {
  return (
    <BrowserRouter>
      <ScrollManager />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services/:slug" element={<ServicePage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
      </Routes>
    </BrowserRouter>
  );
}
