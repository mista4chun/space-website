import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Destination from "./pages/Destination";
import Crew from "./pages/Crew";
import Technology from "./pages/Technology";
import Moon from "./components/Moon";
import Mars from "./components/Mars";
import Europa from "./components/Europa";
import Titan from "./components/Titan";
import Crew1 from "./components/Crew1";
import Crew2 from "./components/Crew2";
import Crew3 from "./components/Crew3";
import Crew4 from "./components/Crew4";
import Tech1 from "./components/Tech1";
import Tech2 from "./components/Tech2";
import Tech3 from "./components/Tech3";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />

        <Route path="destination" element={<Destination />}>
          <Route index element={<Navigate replace to="moon" />} />
          <Route path="moon" element={<Moon />} />
          <Route path="mars" element={<Mars />} />
          <Route path="europa" element={<Europa />} />
          <Route path="titan" element={<Titan />} />
        </Route>

        <Route path="crew" element={<Crew />}>
          <Route index element={<Navigate replace to="crew1" />} />
          <Route path="crew1" element={<Crew1 />} />
          <Route path="crew2" element={<Crew2 />} />
          <Route path="crew3" element={<Crew3 />} />
          <Route path="crew4" element={<Crew4 />} />
        </Route>

        <Route path="technology" element={<Technology />}>
          <Route index element={<Navigate replace to="tech1" />} />
          <Route path="tech1" element={<Tech1 />} />
          <Route path="tech2" element={<Tech2 />} />
          <Route path="tech3" element={<Tech3 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
