import React, { useState } from 'react';

import styled from '@emotion/styled';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import DisplayCartCard from '../../components/Card/DisplayCartCard';
import colorWheel from '../../components/asset/small_color_wheel.png';

const DummyCards = [
  {
    imageName: { colorWheel },
    name: 'Bicycle',
    shortNote:
      'The VESPA C20 is a stunning moped with a modern electronic system and more',
  },
  {
    imageName: { colorWheel },
    name: 'Bicycle',
    shortNote:
      'The VESPA C20 is a stunning moped with a modern electronic system and more',
  },
  {
    imageName: { colorWheel },
    name: 'Bicycle',
    shortNote:
      'The VESPA C20 is a stunning moped with a modern electronic system and more',
  },
  {
    imageName: { colorWheel },
    name: 'Bicycle',
    shortNote:
      'The VESPA C20 is a stunning moped with a modern electronic system and more',
  },
];

const DashboardHome = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cars = useSelector((state) => state.cars.cars);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 3) % DummyCards.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 3 + DummyCards.length) % DummyCards.length);
  };

  return (
    <Container>
      <Title>
        <h2>LATEST MODELS</h2>
        <p>Please select a Vehicle</p>
      </Title>
      <Inner>
        <ArrowLeft onClick={handlePrev}>
          <FaArrowLeft />
        </ArrowLeft>
        <CardContainer>
          {cars.slice(currentIndex, currentIndex + 3).map((data, index) => (
            <DisplayCartCard
              key={index}
              id={data.id}
              name={data.name}
              shortNote={data.description}
              img={colorWheel}
            />
          ))}
        </CardContainer>
        <ArrowRight onClick={handleNext}>
          <FaArrowRight />
        </ArrowRight>
      </Inner>
    </Container>
  );
};

export default DashboardHome;

const Inner = styled.section`
  display: flex;
  margin-top: 2rem;
  // margin-left: 2rem;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  margin: 3.5rem;
  // border: 1px solid blue;
`;

const CardContainer = styled.div`
  display: flex;
  gap: 2rem;
`;

const Arrow = styled.div`
  font-size: 2rem;
  cursor: pointer;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  padding: 1rem;
  border-radius: 50%;
  background-color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
`;

const ArrowLeft = styled(Arrow)`
  left: 15rem;
`;

const ArrowRight = styled(Arrow)`
  right: 2rem;
  top: 22rem;
`;

const Title = styled.div`
  font-size: 1rem;
  font-weight: 400;
  text-align: center;
`;
