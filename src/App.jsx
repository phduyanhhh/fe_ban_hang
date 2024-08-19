import Header from "./components/layout/Header/index.jsx"
import { Outlet } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import GlobalStyles from "./components/GlobalStyles/index.jsx";

function App() {
  return (
    <>
      <GlobalStyles>
        <Header />
        <Outlet />
      </GlobalStyles>
    </>
  )
}

export default App
