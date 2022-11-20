import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  background: #000;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: auto;
  padding: 20px;
`;

export const TextContainer = styled.div`
  font-size: 80px;
  cursor: default;
  color: rgba(255, 255, 255, 0.2);
  font-weight: bold;
  text-transform: uppercase;
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Old versions of Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none;
`;
