import "./SideMenu.scss";
import { IoIosClose } from "react-icons/io";
import { links } from "../links";
import { Link } from "react-router-dom";
import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import { RxChevronDown } from "react-icons/rx";
import { accordionStyles, accordionSummeryStyles } from "../../accordionStyles";
import { useEffect, useState } from "react";

const SideMenu = ({ isActive, setIsActive }) => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (_, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  useEffect(() => {
    if (isActive) {
      document.querySelector("body").style.overflow = "hidden";
    } else {
      document.querySelector("body").style.overflow = "auto";
    }
  }, [isActive]);

  return (
    <aside
      className={`app__side-container ${isActive ? "app__side-active" : ""}`}
    >
      <div
        style={{
          textAlign: "end",
        }}
      >
        <span className="app__close-icons" onClick={() => setIsActive(false)}>
          <IoIosClose />
        </span>
      </div>
      <div>
        {links.map((item, i) =>
          item.drop ? (
            <div key={i}>
              <Link
                className="app__link"
                to={item.link}
                onClick={() => setIsActive(false)}
              >
                {item.label}
              </Link>
              <div>
                {item.dropItem?.map((link, i) => (
                  <Accordion
                    expanded={expanded === `panel${i}`}
                    onChange={handleChange(`panel${i}`)}
                    sx={{ ...accordionStyles, mb: "2rem" }}
                    key={i}
                  >
                    <AccordionSummary
                      expandIcon={
                        <RxChevronDown className="app__expand-icon" />
                      }
                      aria-controls={`panel${i + 1}bh-content`}
                      id={`panel${i + 1}bh-header`}
                      sx={{ ...accordionSummeryStyles, p: "0" }}
                    >
                      <p className="app__drop-title">{link.title}</p>
                    </AccordionSummary>
                    <AccordionDetails>
                      {link.dropLink.map((li, i) => (
                        <Link
                          to={li.link}
                          key={i}
                          className="app__drop-links"
                          onClick={() => setIsActive(false)}
                        >
                          {li.label}
                        </Link>
                      ))}
                    </AccordionDetails>
                  </Accordion>
                ))}
              </div>
            </div>
          ) : (
            <Link
              key={i}
              to={`/${item.link}`}
              className="app__link"
              onClick={() => setIsActive(false)}
            >
              {item.label}
            </Link>
          )
        )}
        {/* <Link to={`/contact`} className="app__link">
          календарь
        </Link> */}
      </div>
    </aside>
  );
};

export default SideMenu;
