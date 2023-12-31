import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCars } from '../../redux/thunk';
import DisplayCartCard from '../../components/Card/DisplayCartCard';
import colorWheel from '../../components/asset/small_color_wheel.png';

const DashboardHome = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const authenticationStatus = useSelector((state) => state.authentication.status);
  const carsstatus = useSelector((state) => state.cars.status);
  const finalIsAuthenticated = authenticationStatus === 'succeeded';
  const dispatch = useDispatch();

  useEffect(() => {
    if (finalIsAuthenticated) {
      dispatch(fetchCars());
    }
  }, [dispatch, finalIsAuthenticated]);

  const cars = useSelector((state) => state.cars.cars);

  if (carsstatus === 'loading') {
    return <p>Loading Cars....</p>;
  }

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cars.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + cars.length) % cars.length);
  };

  return (
    <Container>
      <Title>
        <h2>LATEST MODELS</h2>
        <p>Please select a Vehicle</p>
      </Title>
      <Inner>
        <ArrowLeft onClick={handlePrev} disabled={cars.length <= 1}>
          <FaArrowLeft />
        </ArrowLeft>
        <CardContainer>
          {cars.slice(currentIndex, currentIndex + 3).map((data) => (
            <DisplayCartCard
              key={data.id}
              id={data.id}
              name={data.name}
              shortNote={data.description}
              imgSrc={colorWheel}
            />
          ))}
        </CardContainer>
        <ArrowRight onClick={handleNext} disabled={cars.length <= 1}>
          <FaArrowRight />
        </ArrowRight>
      </Inner>
    </Container>
  );
};

export default DashboardHome;

const Inner = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 2rem;
  // border: 1px solid blue;
  // margin-left: 2rem;
  @media (max-width: 768px) {
    margin: auto;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  margin: 3.5rem;
  @media (max-width: 768px) {
    margin: 0;
    padding: 10%;
    width: 100%;
  }
`;

const CardContainer = styled.div`
  display: flex;
  gap: 2rem;
  @media (max-width: 768px) {
    width: 320px;
    overflow-x: hidden;
  }
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
  @media (max-width: 768px) {
    top: 70%;
  }
  @media (max-width: 380px) {
    top: 82%;
  }
`;

const ArrowLeft = styled(Arrow)`
  left: 15rem;
  @media (max-width: 768px) {
    left: 20%;
  }
  @media (min-width: 1024px) and (max-width: 1440px) {
    top: 23rem;
  }
  @media (max-width: 380px) {
    left: 7rem;
  }
`;

const ArrowRight = styled(Arrow)`
  right: 2rem;
  top: 22rem;
  @media (max-width: 380px) {
    right: 6rem;
    top: 34.2rem;
  }
  @media (max-width: 768px) {
    top: 70%;
    right: 24%;
  }
`;

const Title = styled.div`
  font-size: 1rem;
  font-weight: 400;
  text-align: center;
  @media (max-width: 375px) {
    margin-left: 5rem;
    font-size: 2rem;
    text-align: center;
  }
  @media (min-width: 375px) and (max-width: 768px) {
    // border: 1px solid blue;
    padding-left: 0;
  }
`;
