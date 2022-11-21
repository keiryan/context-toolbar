import "./App.css";
import { Container, TextContainer } from "./styles.app";
import ContextMenu from "./Context Menu/contextmenu";
import { useState } from "react";

function App() {
  const [clickOrigin, setClickOrigin] = useState({ x: 0, y: 0 });
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  const handleContextMenu = (e) => {
    e.preventDefault();

    let finalX = e.clientX - e.target.offsetLeft;
    let finalY = e.clientY - e.target.offsetTop;

    if (finalY + dimensions.height > window.innerHeight) {
      const heightFormula = finalY + dimensions.height - window.innerHeight;
      finalY -= heightFormula;
      finalX = e.clientX - e.target.offsetLeft;
    }

    if (finalX + dimensions.width > window.innerWidth) {
      finalX -= dimensions.width;
    }

    setClickOrigin({ x: finalX, y: finalY });
  };

  return (
    <Container onContextMenu={handleContextMenu}>
      <TextContainer>Right Click</TextContainer>
      <ContextMenu setDimensions={setDimensions} clickOrigin={clickOrigin} />
    </Container>
  );
}

export default App;
