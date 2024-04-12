import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import Events from "./pages/Events";
import SingleEvent from "./pages/SingleEvent";

const App = () => {
  return (
    <>
      <Header />
      <main className="mt-16">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<Events />} />
          <Route path="/event/:eventId" element={<SingleEvent />} />
        </Routes>
      </main>
    </>
  );
};

export default App;
