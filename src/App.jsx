import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import VistaInicio from './vistas/vistainicio';
import VistaRanking from './vistas/vistaranking';
import Menu from './vistas/menu';
import VistaPartidas from './vistas/vistapartidas';
import Juego from './vistas/vistajuego';  // Asegúrate de que la ruta sea correcta

function App() {
  return (
    <div className="container">
      <Router>
        <Menu />
        <Routes>
          <Route path="/" element={<VistaInicio/>} />
          <Route path="/juego" element={<Juego />} />  {/* Verifica esta ruta */}
          <Route path="/partidas" element={<VistaPartidas />} />
          <Route path="/ranking" element={<VistaRanking />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;