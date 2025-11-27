import { NavLink, Outlet } from "react-router-dom";
import lbmlogo from "./assets/new-lbm-logo.png";
export default function App() {
  return (
    <div>
      <header className="lbm-header">
        <div className="lbm-brand">
          <img src={lbmlogo} alt="LBM Logo" className="lbm-logo" />
          <h1 className="lbm-title">Learn Brihad Mridanga</h1>
        </div>
        <nav className="lbm-nav">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `lbm-nav-link${isActive ? " active" : ""}`
            }
          >
            About
          </NavLink>
          <NavLink
            to="/registration"
            className={({ isActive }) =>
              `lbm-nav-link${isActive ? " active" : ""}`
            }
          >
            Registration
          </NavLink>
          <NavLink
            to="/schedule"
            className={({ isActive }) =>
              `lbm-nav-link${isActive ? " active" : ""}`
            }
          >
            Schedule
          </NavLink>
          <NavLink
            to="/payments"
            className={({ isActive }) =>
              `lbm-nav-link${isActive ? " active" : ""}`
            }
          >
            Payments
          </NavLink>
        </nav>
      </header>
      <Outlet />
      <footer className="lbm-footer">© {new Date().getFullYear()} Learn Brihad Mridanga</footer>
    </div>
  );
}
