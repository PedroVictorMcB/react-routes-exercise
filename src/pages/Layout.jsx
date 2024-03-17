import Topo from "../components/Topo";
import Rodape from "../components/Rodape";
import { Outlet } from "react-router-dom";

export default function Layout() {
    return(
        <main>
            <Topo />
            <Outlet />
            <Rodape />
        </main>
    )
}