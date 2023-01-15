import { Provider } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import store from './store'
import Error404 from './containers/Error404'
import HomePage from './containers/HomePage'
function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="*" element={<Error404 />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
