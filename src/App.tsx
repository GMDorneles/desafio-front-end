import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { FormFuncionario } from "./components/FormFuncionario";
import { ListagemFuncionario } from "./components/ListagemFuncionario";
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