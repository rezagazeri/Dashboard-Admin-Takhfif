import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import classnames from "classnames";

const DefaultAside = (props) => {
  const [Select, setSelect] = useState([]);
  const { NavItems } = props.NavItems;

  const handleClick = (item) => {
    setSelect((prevState) => ({ ...Select, [item]: !prevState[item] }));
  };
  const SetMenuToUI = (items) => {
    return items.map((item) => {
      if (!item.children) {
        return (
          <li className="Items__list" key={item.mame}>
            <NavLink to={item.url} className="nav-Items__link">
              {item.name}
            </NavLink>
          </li>
        );
      }
      return (
        <li className="nav-Items__list" key={item.mame}>
          <NavLink
            to="#"
            onClick={() => handleClick(item.name)}
            name={item.name}
            className="nav-Items__link"
          >
            {item.name}
            <i class="fas fa-caret-down"></i>
          </NavLink>
          {Select[item.name] && <ul>{SetMenuToUI(item.children)}</ul>}
        </li>
      );
    });
  };
  return (
    <nav className="sidebar">
      <div className="sidebar__header">
        <h3>dashboard</h3>
        <p>رضا گازری</p>
      </div>

      <ul className="nav-Items">{SetMenuToUI(NavItems)}</ul>
    </nav>
  );
};
export default DefaultAside;
