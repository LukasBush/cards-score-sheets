import { Outlet } from "react-router-dom";
import { Header } from "../../ComponentLayouts/Header/Header";
import { Footer } from "../../ComponentLayouts/Footer/Footer";

import "./StylesHeaderFooter.css";

export function HeaderFooterLayout() {
  return (
    <>
      <div className="app-shell">
        <Header />
        <main className="app-main">
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  );
}
