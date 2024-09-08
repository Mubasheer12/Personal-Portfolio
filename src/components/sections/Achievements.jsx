import React, { useState } from "react";
import styled from "styled-components";
import { achievements } from "../../data/constants";
import AchievementsCard from "../cards/AchievementsCard";

const Container = styled.div`
margin-top: 100px;
display: flex;
flex-direction: column;
justify-content-center;
position: relative;
z-index: 1;
padding: 0 16px;
align-items: center;
`;
const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1100px;
  gap: 12px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

const Title = styled.div`
  font-size: 52px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;

const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  font-weight: 600;
  color: ${({ theme }) => theme.text_secondary};
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 28px;
  flex-wrap: wrap;
`;

const Achievements = ({ openModal, setOpenModal }) => {
  const [toggle] = useState("all");
  return (
    <Container id="Achievements">
      <Wrapper>
        <Title>Achievements</Title>
        <Desc
          style={{
            marginBottom: "40px",
          }}
        >
          I have participated in many Technical Activities including Hackathons and Workshops, here are some of my feats.
        </Desc>
        <CardContainer>
          {toggle === "all" &&
            achievements.map((achievement) => (
              <AchievementsCard
                achievement={achievement}
                openModal={openModal}
                setOpenModal={setOpenModal}
              />
            ))}
          {achievements
            .filter((item) => item.category === toggle)
            .map((achievement) => (
              <AchievementsCard
                achievement={achievement}
                openModal={openModal}
                setOpenModal={setOpenModal}
              />
            ))}
        </CardContainer>
      </Wrapper>
    </Container>
  );
};

export default Achievements;
