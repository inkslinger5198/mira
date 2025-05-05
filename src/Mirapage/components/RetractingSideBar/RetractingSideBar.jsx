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
  FiX,
} from "react-icons/fi";

import { RiMenu2Line, RiChatVoiceAiFill } from "react-icons/ri";
import { motion, AnimatePresence } from "framer-motion";
import "./RetractingSideBar.css";
import Logo from "../../../assets/MIRAICON.svg";
import TextLOGO from "../../../assets/MIRALOGO-OLD.svg";

const RetractingSideBar = () => {
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(true);

  const toggleMenu = () => {
    const newHidden = !hidden;
    if (!newHidden) setOpen(true); // Show sidebar = make sure it's expanded
    setHidden(newHidden);
  };

  return (
    <div className="container">
      <div className="menu-toggle">
        {hidden ? (
          <RiMenu2Line onClick={toggleMenu} className="menu-icon" />
        ) : (
          <FiX onClick={toggleMenu} className="menu-icon" />
        )}
      </div>

      <AnimatePresence>
        {!hidden && (
          <Sidebar key="sidebar" open={open} setOpen={setOpen} />
        )}
      </AnimatePresence>

    </div>
  );
};

export default RetractingSideBar;

const Sidebar = ({ open, setOpen }) => {
  const [selected, setSelected] = useState("Dashboard");

  return (
    <motion.nav
      layout
      initial={{ x: -250, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -250, opacity: 0 }}
      transition={{ duration: 0.3 }}
      className={`sidebar ${open ? "sidebar-open" : "sidebar-closed"}`}
    >
      <TitleSection open={open} />
      <div className="options">
        {[
          { title: "Headache Solutions", Icon: RiChatVoiceAiFill },
          { title: "Muscle Strain Treatment", Icon: RiChatVoiceAiFill },
          { title: "Ayurvedic Stress Relief Tips", Icon: RiChatVoiceAiFill },
          // { title: "Prescription", Icon: FiDollarSign, notifs: 3 },
          // { title: "Lorem", Icon: FiMonitor },
          // { title: "Ipsum", Icon: FiShoppingCart },
          // { title: "Dolor", Icon: FiTag },
          // { title: "Set", Icon: FiBarChart },
          // { title: "Lorem", Icon: FiUsers },
        ].map(({ title, Icon, notifs }) => (
          <Option
            key={title}
            Icon={Icon}
            title={title}
            selected={selected}
            setSelected={setSelected}
            open={open}
            notifs={notifs}
          />
        ))}
      </div>

      <ToggleClose open={open} setOpen={setOpen} />
    </motion.nav>
  );
};

const Option = ({ Icon, title, selected, setSelected, open }) => (
  <motion.button
    layout
    onClick={() => setSelected(title)}
    className={`option ${selected === title ? "selected" : ""}`}
  >
    <motion.div layout className="icon-container">
      <Icon className="icons" />
    </motion.div>
    {open && (
      <motion.span layout className="option-text">
        {title}
      </motion.span>
    )}
  </motion.button>
);

const TitleSection = ({ open }) => (
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

const ToggleClose = ({ open, setOpen }) => (
  <motion.button
    layout
    onClick={() => setOpen((pv) => !pv)}
    className="toggle-close"
  >
    <div className="toggle-content">
      <motion.div layout className="icon-container">
        <FiChevronsRight className={`chevron-right ${open ? "rotate" : ""}`} />
      </motion.div>
      {open && (
        <motion.span layout className="toggle-text">
          Hide
        </motion.span>
      )}
    </div>
  </motion.button>
);

