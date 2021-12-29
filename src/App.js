import styled from "styled-components";
import LeftSidebar from "./components/LeftSidebar";
import MainContent from "./components/MainContent";
import RightSidebar from "./components/RightSidebar";

function App() {
  return (
    <AppStyled>
      <LeftSidebar />
      <MainContent />
      <RightSidebar />
    </AppStyled>
  );
}

export default App;

const AppStyled = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
`;
