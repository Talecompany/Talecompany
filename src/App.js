
import './App.css';
import HomeFull from "./pages/Dashboard/HomeFull";
import Surveys from "./pages/Dashboard/Surveys";
import Assistance from "./pages/Dashboard/Assistance";
import SurveyDetail from "./pages/Dashboard/SurveyDetail";
import Datasecurity from "./pages/Dashboard/Datasecurity";
import Focusgroup from "./pages/Dashboard/Focusgroup";
import Awards from "./pages/Dashboard/Awards";


function App() {
  return (
      <Router>
          <Routes>
              <Route path="/home/:iduser" element={<HomeFull />} />
              <Route path="/surveys/:iduser" element={<Surveys/>} />
              <Route path="/assistance/:iduser" element={<Assistance />} />
              <Route path="/surveydetails/:iduser" element={<SurveyDetail />} />
              <Route path="/dataverification/:iduser" element={<Datasecurity />} />
              <Route path="/focusgroup/:iduser" element={<Focusgroup />} />
              <Route path="/awards/:iduser" element={<Awards />} />
          </Routes>
      </Router>
  );
}

export default App;
