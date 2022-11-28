import Header from './componente/Header';
import Footer from './componente/Footer';
import PieteCraciun from './componente/PieteCraciun';
import Sidebar from './componente/Sidebar';
import './App.css';

function App() {
  return (
    <div className="Layout">
      <Header></Header>
      <div className="MainApp">
        <Sidebar />
        <div className="Main">
          <PieteCraciun />{' '}
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;

