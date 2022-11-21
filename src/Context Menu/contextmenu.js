import {
  MenuContainer,
  MenuRow,
  MenuRowOption,
  MenuRowIcon,
} from "./styles.contextmenu";
import { useState, useEffect, useRef } from "react";

import SVG from "../SVG/svg";

export default function ContextMenu(props) {
  const listOfOptions = [
    { name: "cut", id: 1, icon: "cut" },
    { name: "copy", id: 2, icon: "copy" },
    { name: "paste", id: 3, icon: "paste" },
    { name: "format as HTML", id: 4, icon: "format as html" },
    { name: "settings", id: 5, icon: "settings", break: true },
  ];

  const [toggled, setToggled] = useState({ toggled: false });

  const [checkingDimensions, setCheckingDimensions] = useState({
    checkingDimensions: true,
  });

  const ref = useRef(null);
  const initiateCheckOfDimensions = () => {
    setToggled({ toggled: true });

    setTimeout(() => {
      props.setDimensions({
        height: ref.current.clientHeight,
        width: ref.current.clientWidth,
      });

      setToggled({ toggled: false });
    }, 300);

    setTimeout(() => {
      setCheckingDimensions({ checkingDimensions: false });
    }, 600);
  };

  const handleClick = () => {
    setToggled({ toggled: !toggled.toggled });
    setTimeout(() => {
      setCheckingDimensions({ checkingDimensions: true });
    }, 300);
  };

  useEffect(() => {
    if (props.clickOrigin.x !== 0 && props.clickOrigin.y !== 0) {
      setCheckingDimensions({ checkingDimensions: false });
      setToggled({ toggled: true });
    }
  }, [props.clickOrigin]);

  useEffect(() => {
    initiateCheckOfDimensions();
  }, []);

  return (
    <MenuContainer
      checkingDimensions={checkingDimensions}
      ref={ref}
      toggled={toggled.toggled}
      clickOrigin={props.clickOrigin}
    >
      {listOfOptions.map((option) => {
        return (
          <MenuRow
            onClick={handleClick}
            toggled={toggled.toggled}
            key={option.id}
          >
            <MenuRowIcon>
              <SVG generalFill={"#969696"} icon={option} />
            </MenuRowIcon>
            <MenuRowOption>{option.name}</MenuRowOption>
          </MenuRow>
        );
      })}
    </MenuContainer>
  );
}
