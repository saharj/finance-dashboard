import { NavLink } from "react-router";

function Nav() {

  const navItems = [
    { name: "Dashboard", route: "/" },
    { name: "Transactions", route: "/transactions" },
    { name: "Reports", route: "/reports" },
    { name: "Settings", route: "/settings" },
  ];
  return (
    <div className="nav w-1/4 gap-6 p-6 border-e border-solid border-gray-200 pr-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold">Fin Dash</h1>
      </div>

      <nav className="grid grid-cols-1">
        {navItems.map((item, id) => (
          <NavLink key={id + "nl"} to={item.route} className="hover:text-blue-200 transition-colors" end>
            {item.name}
          </NavLink>
        ))}
      </nav>
    </div>
  );
}

export default Nav;
