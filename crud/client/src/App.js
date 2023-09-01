// Import external modules
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Import Internal Components
import Books from "./pages/Books/Books.jsx";
import Add from "./pages/Add/Add.jsx";
import Update from "./pages/Update/Update.jsx";
import Read from "./pages/Read/Read.jsx";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Books />} />
          <Route path="/add" element={<Add />} />
          <Route path="/update/:id" element={<Update />} />
          <Route path="/read/:id" element={<Read />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
