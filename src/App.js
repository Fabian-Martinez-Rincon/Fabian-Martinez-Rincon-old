
import { useState } from "react";
import { useEffect } from "react";
import Sidebar from "./Components/Sidebar";
import styled from 'styled-components';
import HomePage from "./Pages/HomePage";
import AboutPage from './Pages/AboutPage';
import ResumePage from './Pages/ResumePage';
import PortfoliosPage from './Pages/PortfoliosPage';
import ContactPage from './Pages/ContactPage';
import MenuIcon from '@material-ui/icons/Menu';
import { IconButton } from "@material-ui/core";
import * as React from "react";
import { Routes, Route } from "react-router-dom";

function App() {
  const [theme] = useState('dark-theme');
  const [navToggle, setNavToggle] = useState(false);

  useEffect(()=>{
    document.documentElement.className = theme;
  }, [theme]);


  return (
    <div className="App">
        <Sidebar navToggle={navToggle} />
        <div className="ham-burger-menu">
          <IconButton onClick={() => setNavToggle(!navToggle)}>
              <MenuIcon />
          </IconButton>
        </div>

        <MainContentStyled>
          

          <Routes>
            <Route  exact>
              <Route path="/PortfolioReact/" element={<HomePage />} />
            </Route>
            <Route  exact>
              <Route path="/PortfolioReact/about" element={<AboutPage />} />
            </Route>
            <Route  exact>
              <Route path="/PortfolioReact/resume" element={<ResumePage />} />
            </Route>
            <Route  exact>
              <Route path="/PortfolioReact/projects" element={<PortfoliosPage />} />
            </Route>
            
            <Route  exact>
              <Route path="/PortfolioReact/contact" element={<ContactPage />} />
            </Route>
          </Routes>

        </MainContentStyled>
    </div>
  );
}

const MainContentStyled = styled.main`
  position: relative;
  margin-left: 16.3rem;
  min-height: 100vh;
  @media screen and (max-width:1200px){
    margin-left: 0;
  }
  .lines{
    position: absolute;
    min-height: 100%;
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    opacity: 0.4;
    z-index: -1;
    .line-1, .line-2, .line-3, .line-4{
      width: 1px;
      min-height: 100vh;
      background-color: var(--border-color);
    }
  }
`;

export default App;


/*
<div className="lines">
  <div className="line-1"></div>
  <div className="line-2"></div>
  <div className="line-3"></div>
  <div className="line-4"></div>
</div>
*/