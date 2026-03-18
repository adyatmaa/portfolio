import { BrowserRouter, Route, Routes } from "react-router-dom";
import Index from "./pages/Index";
import ProjectDetails from "./component/ProjectDetails";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/projects/:id" element={<ProjectDetails />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
