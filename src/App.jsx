// React
import { Routes, Route } from "react-router-dom";

//Layouts
import { HeaderOnlyLayout } from "./layouts/HeaderOnly";
import { HeaderFooterLayout } from "./layouts/HeaderFooter/HeaderFooter";

//Components
import { MainMenu } from "./pages/MainMenu/MainMenu";
import { OhShit } from "./pages/OhShit/OhShit";

function App() {
  return (
    <Routes>
      <Route element={<HeaderOnlyLayout />}>
        <Route path="/" element={<MainMenu />} />
      </Route>
      <Route path="/game" element={<HeaderFooterLayout />}>
        <Route path="oh-shit" element={<OhShit />} />
      </Route>
    </Routes>
  );
}

export default App;
