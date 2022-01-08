import { Link, Outlet } from "react-router-dom";

export function Layout() {
    return (
        <main>
          
            
            <nav style={{color: "red", fontSize: "60px"}}>
                <Link to="/">Home</Link> | {"  "}
                <Link to="/About">About</Link>  | {"  "}
                <Link to="/Users">Users</Link> 

            </nav>
            <section>
                <Outlet /> 
            </section>
            
        </main>
    );
}
