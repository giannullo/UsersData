import { NavLink, Outlet, useSearchParams, useLocation } from "react-router-dom";
import { getAllUsers } from "../users";

export function Users() {
    const [searchParams, setSearchParams] = useSearchParams();
    const location = useLocation();
    const users = getAllUsers();
    const filter = searchParams.get("filter") ?? "";
    const handlefilter = (e) =>{
        setSearchParams({filter: e.target.value});
    };
    return (
       <div>
           <h1>Users</h1> 
           <input value={filter} onChange={handlefilter} type="text" placeholder="filter" />
   <div style={{display: "flex" ,gridTemplateColums: "1fr 1fr", padding: "20px"}}>
   <ul>
       {users.filter(user => {
           if (!filter) return true;

           const name = user.name.toLowerCase();
           return name.includes(filter.toLowerCase())
       }).map((user) =>(
            <li key={user.id}>
           <h2>
               <NavLink style={({isActive}) =>( isActive ?  {color: "red"} :  {} )}
                to={user.id.toString() + location.search}
                >{user.name} 
               </NavLink>
           </h2>
       </li>))}
   </ul>
   <article>   
       <Outlet />
   </article>
    </div>
       </div>
    );
}
