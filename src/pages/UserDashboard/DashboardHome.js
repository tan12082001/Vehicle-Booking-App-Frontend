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
    setCurrentIndex((prevIndex) => (prevIndex + 3) % cars.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 3 + cars.length) % cars.length);
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
          {cars.slice(currentIndex, currentIndex + 3).map((data) => (
            <DisplayCartCard
              key={data.id}
              id={data.id}
              name={data.name}
              shortNote={data.description}
              imgSrc={colorWheel}
              deletedAt={data.deleted_at}
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
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 2rem;
  // border: 1px solid blue;
  // margin-left: 2rem;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  margin: 3.5rem;
  // border: 1px solid green;
  @media (max-width: 768px) {
    width: 80%;
  }
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
