import styled from "styled-components";
// import CommentForm from "./components/CommentForm";
import CommentBoard from "./components/CommentForm";
import Home from "./components/Home";
// import CommentList from "./components/CommentList";
// import CommentForm from "./components/CommentForm";

function App() {
  return (
    <>
      <Wrap>
        <Home />
        {/* <CommentBoard /> */}
      </Wrap>

      {/* <Proto />
      <Home />

      <Login /> */}
    </>
  );
}

export default App;

const Wrap = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100vw;
  /* height: 100vh; */
  max-width: 500px;
  left: 50%;
  transform: translate(-50%, 0);
  /* background-color: #225854; */
  background-color: white;
  text-align: center;
`;
