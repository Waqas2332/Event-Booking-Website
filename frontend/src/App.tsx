import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import Events from "./pages/Events";
import SingleEvent from "./pages/SingleEvent";
import { AuthProvider } from "./context/AuthContext";
import Booking from "./pages/Booking";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <AuthProvider>
      <ToastContainer />
      <Header />
      <main className="mt-16">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<Events />} />
          <Route path="/event/:eventId" element={<SingleEvent />} />
          <Route path="/event/:eventId/booking" element={<Booking />} />
        </Routes>
      </main>
    </AuthProvider>
  );
};

export default App;
