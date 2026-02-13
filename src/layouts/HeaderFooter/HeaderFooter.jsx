import { Outlet } from "react-router-dom";
import { Header } from "../../components/layout/Header/Header";
import { Footer } from "../../components/layout/Footer/Footer";

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
