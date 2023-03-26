
import './App.css';
import CatFact from './CatFact';
// import CatFact from './resources/FetchDataFromAPI/CatFact';
import PredictbyValue from './resources/FetchDataFromAPI/PredictbyValue';


function App() {


  return (
    <div className="App">
          <>
              <CatFact/>
       {/* <CatFact/> */}
        <PredictbyValue />
      </>
    </div>
  );
}

export default App;
