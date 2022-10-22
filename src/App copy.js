import styled from "styled-components";
// import CommentBoard from "./components/CommentForm";
import Home from "./components/Home";

function App() {
  return (
    <>
      <Wrap>
        <Home />
        {/* <CommentBoard /> */}
      </Wrap>
    </>
  );
}

export default App;

const Wrap = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100vw;
  max-width: 500px;
  left: 50%;
  transform: translate(-50%, 0);
  /* background-color: #225854; */
  background-color: white;
  text-align: center;
`;
