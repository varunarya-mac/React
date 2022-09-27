import style from "./MainNavigation.module.css";
import { NavLink } from "react-router-dom";

const MainNavigation = () => {
  return (
    <header className={style.header}>
      <div className={style.logo}>Greate Quotes</div>
      <nav className={style.nav}>
        <ul>
          <li>
            <NavLink to="/quotes"  className={(navData)=> navData.isActive ? style.active : '' }>
              {" All Quotes"}
            </NavLink>
          </li>
          <li>
            <NavLink to="/new-quote" className={(navData)=> navData.isActive ? style.active : '' }>
              {"Add New quote "}
            </NavLink>
          </li>
        </ul>
      </nav>
    </header> 
  );
};

export default MainNavigation;
