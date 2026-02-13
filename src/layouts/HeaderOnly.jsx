import { Outlet } from "react-router-dom";
import { Header } from "../components/layout/Header/Header";

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
