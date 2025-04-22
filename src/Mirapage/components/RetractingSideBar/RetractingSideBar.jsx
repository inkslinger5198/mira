import React, { useState } from "react";
import {
  FiBarChart,
  FiChevronDown,
  FiChevronsRight,
  FiDollarSign,
  FiHome,
  FiMonitor,
  FiShoppingCart,
  FiTag,
  FiUsers,
} from "react-icons/fi";
import { motion } from "framer-motion";
import "./RetractingSideBar.css";
import Logo from "../../../assets/MIRAICON.svg";
import TextLOGO from "../../../assets/MIRALOGO-OLD.svg";

const RetractingSideBar = () => {
  return (
    <div className="container">
      <Sidebar />
      <ExampleContent />
    </div>
  );
};

export default RetractingSideBar;

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("Dashboard");

  return (
    <motion.nav
      layout
      className={`sidebar ${open ? "sidebar-open" : "sidebar-closed"}`}
    >
      <TitleSection open={open} />

      <div className="options">
        <Option
          Icon={FiHome}
          title="Dashboard"
          selected={selected}
          setSelected={setSelected}
          open={open}
        />
        <Option
          Icon={FiDollarSign}
          title="Prescription"
          selected={selected}
          setSelected={setSelected}
          open={open}
          notifs={3}
        />
        <Option
          Icon={FiMonitor}
          title="Lorem"
          selected={selected}
          setSelected={setSelected}
          open={open}
        />
        <Option
          Icon={FiShoppingCart}
          title="Ipsum"
          selected={selected}
          setSelected={setSelected}
          open={open}
        />
        <Option
          Icon={FiTag}
          title="Dolor"
          selected={selected}
          setSelected={setSelected}
          open={open}
        />
        <Option
          Icon={FiBarChart}
          title="Set"
          selected={selected}
          setSelected={setSelected}
          open={open}
        />
        <Option
          Icon={FiUsers}
          title="Lorem"
          selected={selected}
          setSelected={setSelected}
          open={open}
        />
      </div>

      <ToggleClose open={open} setOpen={setOpen} />
    </motion.nav>
  );
};

const Option = ({ Icon, title, selected, setSelected, open, notifs }) => {
  return (
    <motion.button
      layout
      onClick={() => setSelected(title)}
      className={`option ${selected === title ? "selected" : ""}`}
    >
      <motion.div layout className="icon-container">
        <Icon className="icons"/>
      </motion.div>
      {open && (
        <motion.span layout className="option-text">
          {title}
        </motion.span>
      )}

      
    </motion.button>
  );
};

const TitleSection = ({ open }) => {
  return (
    <div className="title-section">
      <div className="title-container">
        <div className="logo-container">
          <img src={Logo} alt="MIRA" height={100} width={100} />
          {open && (
            <motion.div layout className="title-text">
              <img src={TextLOGO} alt="MIRA" height={100} width={100} />
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};


const ToggleClose = ({ open, setOpen }) => {
  return (
    <motion.button
      layout
      onClick={() => setOpen((pv) => !pv)}
      className="toggle-close"
    >
      <div className="toggle-content">
        <motion.div layout className="icon-container">
          <FiChevronsRight
            className={`chevron-right ${open ? "rotate" : ""}`}
          />
        </motion.div>
        {open && (
          <motion.span layout className="toggle-text">
            Hide
          </motion.span>
        )}
      </div>
    </motion.button>
  );
};

const ExampleContent = () => <div className="content"></div>;
