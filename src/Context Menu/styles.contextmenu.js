import styled from "styled-components";

const Base = styled.div`
  display: flex;
`;

export const MenuContainer = styled(Base)`
  visibility: ${(props) =>
    props.checkingDimensions.checkingDimensions ? "hidden" : "visible"};
  color: #585858;
  flex-direction: column;
  background-color: #fff;
  border-radius: 4px;
  position: absolute;
  top: ${(props) => props.clickOrigin.y}px;
  left: ${(props) => props.clickOrigin.x}px;
  max-height: ${(props) => (props.toggled ? "1000px" : "0")};
  transition: max-height 0.3s ease-in-out;
`;

export const MenuRow = styled(Base)`
  align-items: center;
  border-radius: 4px;
  margin: 10px;
  padding: 10px;
  text-transform: capitalize;
  transform: translateY(${(props) => (props.toggled ? "0" : "-20px")});
  opacity: ${(props) => (props.toggled ? "1" : "0")};
  transition: all 0.3s ease-in-out;
  :hover {
    background-color: #f2f2f2;
    cursor: pointer;
  }
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Old versions of Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none;
`;

export const MenuRowOption = styled.div``;

export const MenuRowIcon = styled.div`
  margin-right: 10px;
`;

export const DragHeader = styled(Base)`
  justify-content: center;
  width: 100%;
  cursor: move;
`;

export const DragContainer = styled.div`
  transform: rotate(90deg);
`;
