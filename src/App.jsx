import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import { Toaster } from "@/components/ui/toaster";

function App() {
  return (
    <>
    <Toaster />
    <BrowserRouter>
      <Routes>
        {/* Home should only show at "/" */}
        <Route path="/" element={<Home />} />
        {/* NotFound should show for everything else */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
