import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Dashboard from "./pages/Dashboard";
import Items from "./pages/Items";
import Warehouses from "./pages/Warehouses";
import Categories from "./pages/Categories";
import Invoices from "./pages/Invoices";
import Reports from "./pages/Reports";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/items" element={<Items />} />
            <Route path="/warehouses" element={<Warehouses />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/invoices" element={<Invoices />} />
            <Route path="/reports" element={<Reports />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;