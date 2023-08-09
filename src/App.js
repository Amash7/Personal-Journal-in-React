import Navbar from './components/Navbar';
import Main from './components/Main';
import Data from './Data';
import './App.css';

function App() {
  const main = Data.map((item, index) => (
    <div key={index} className="main-item">
      <Main
        img={item.image}
        loc={item.location}
        map={item.maps}
        titles={item.title}
        startDate1={item.startDate}
        endDate1={item.endDate}
        description1={item.description}
      />
    </div>
  ));

  return (
    <>
      <Navbar />
      <div className='main'>
        {main}
      </div>
    </>
  );
}

export default App;
