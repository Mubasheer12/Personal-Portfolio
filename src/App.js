import styled, { ThemeProvider } from "styled-components";
import { darkTheme } from "./utils/Themes";
import Navbar from "./components/Navbar";
import { BrowserRouter } from "react-router-dom";
import Hero from "./components/sections/Hero";
import Skills from "./components/sections/Skills";
import StarCanvas from "./components/canvas/Stars";
import { AnimatePresence } from "framer-motion";
import Education from "./components/sections/Education";
import Experience from "./components/sections/Experience";
import Achievements from "./components/sections/Achievements";
import EarthSphere from "./components/sections/EarthSphere";
import Footer from "./components/sections/Footer";
import AchievementDetails from "./components/Dialog/AchievementDetails";
import { useState } from "react";

const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  overflow-x: hidden;
  position: relative;
`;

const Wrapper = styled.div`
  padding-bottom: 100px;
  background: linear-gradient(
      38.73deg,
      rgba(204, 0, 187, 0.15) 0%,
      rgba(201, 32, 184, 0) 50%
    ),
    linear-gradient(
      141.27deg,
      rgba(0, 70, 209, 0) 50%,
      rgba(0, 70, 209, 0.15) 100%
    );
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 30% 98%, 0 100%);
`;

function App() {
  const [openModal, setOpenModal] = useState({ state: false, project: null });
  return (
    <ThemeProvider theme={ darkTheme }>
      <BrowserRouter>
        <Navbar />
        <Body>
          <StarCanvas />
          <AnimatePresence>
            <div>
              <Hero />
              <Wrapper>
                <Skills />
                <Education />
                <Experience />
              </Wrapper>
              <Achievements openModal={openModal} setOpenModal={setOpenModal} />
              {openModal.state && (
                <AchievementDetails
                  openModal={openModal}
                  setOpenModal={setOpenModal}
                />
              )}
              <EarthSphere />
              <Footer />
            </div>
          </AnimatePresence>
        </Body>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
