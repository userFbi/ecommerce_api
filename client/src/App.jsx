import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import AppLayout from "./pages/AppLayout"

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<AppLayout />} />
          <Route path="/cart" element={<AppLayout />} />
          <Route path="/order" element={<AppLayout />} />
          <Route path="/prodcut" element={<AppLayout />} />
          <Route path="/user" element={<AppLayout />} />
        </Routes>

      </Router>
    </div>
  );
}

export default App;