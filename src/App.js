import { Provider } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import store from './store'
import Error404 from './containers/Error404'
import HomePage from './containers/HomePage'
import AboutPage from "./containers/AboutPage";
import ServicePage from "./containers/ServicePage";
import BlogPage from "./containers/BlogPage";
import CoursesPage from "./containers/CoursesPage";
import ContactPage from "./containers/ContactPage";
function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="*" element={<Error404 />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/about-us" element={<AboutPage />} />
          <Route path="/services" element={<ServicePage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/courses" element={<CoursesPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
