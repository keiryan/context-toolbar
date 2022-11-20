import "./App.css";
import { Container, TextContainer } from "./styles.app";
import ContextMenu from "./Context Menu/contextmenu";
import { useState } from "react";

function App() {
  const [contextMenuCoords, setContextMenuCoords] = useState({ x: 0, y: 0 });
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  const handleContextMenu = (e) => {
    e.preventDefault();

    let finalX = e.nativeEvent.x;
    let finalY = e.nativeEvent.y;

    if (e.nativeEvent.y + dimensions.height > window.innerHeight) {
      const heightFormula =
        e.nativeEvent.y + dimensions.height - window.innerHeight;
      console.log(heightFormula);
      finalY -= heightFormula;
    }

    if (e.nativeEvent.x + dimensions.width > window.innerWidth) {
      finalX -= dimensions.width;
    }

    setContextMenuCoords({ x: finalX, y: finalY });
  };
  return (
    <Container onContextMenu={handleContextMenu}>
      <TextContainer>Right Click</TextContainer>
      <ContextMenu setDimensions={setDimensions} coords={contextMenuCoords} />
    </Container>
  );
}

export default App;
