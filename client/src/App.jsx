import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import AppLayout from "./pages/AppLayout"
import AuthForm from "./pages/AuthForm"

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<AppLayout />} />
          <Route path="/cart" element={<AppLayout />} />
          <Route path="/order" element={<AppLayout />} />
          <Route path="/prodcut" element={<AppLayout />} />
          <Route path="/user" element={<AuthForm />} />
        </Routes>

      </Router>
    </div>
  );
}

export default App;