import { Outlet } from "react-router-dom";
import { Header } from "../ComponentLayouts/Header/Header";

export function HeaderOnlyLayout() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
}
