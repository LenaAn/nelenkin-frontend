import Landing from "./Landing.jsx";
import {Navigate, Route, Routes} from "react-router-dom";

function App() {
  return (
      <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
  )
}

export default App
