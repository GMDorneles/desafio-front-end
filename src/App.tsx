import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ListagemFuncionario } from "./components/ListagemFuncionario";
import { FormFuncionario } from "./components/FormFuncionario";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<ListagemFuncionario />} />
          <Route path="/from" element={<FormFuncionario />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
