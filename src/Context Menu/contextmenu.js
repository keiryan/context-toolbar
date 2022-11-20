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

      console.log(ref.current.clientHeight, ref.current.clientWidth);

      setToggled({ toggled: false });
    }, 300);

    setTimeout(() => {
      setCheckingDimensions({ checkingDimensions: false });
    }, 600);
  };

  const handleClick = () => {
    setToggled({ toggled: !toggled.toggled });
  };

  useEffect(() => {
    if (props.coords.x !== 0 && props.coords.y !== 0) {
      setToggled({ toggled: true });
    }
  }, [props.coords]);

  useEffect(() => {
    initiateCheckOfDimensions();
  }, []);

  return (
    <MenuContainer
      checkingDimensions={checkingDimensions}
      ref={ref}
      onClick={handleClick}
      toggled={toggled.toggled}
      coords={props.coords}
    >
      {listOfOptions.map((option) => {
        return (
          <MenuRow toggled={toggled.toggled} key={option.id}>
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
