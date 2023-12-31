import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { FaCog, FaArrowRight, FaSyncAlt } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import colorWheel from '../asset/small_color_wheel.png';
import { RESERVE_CARS, USERS_DASHBOARD } from '../../routes/routeConstants';
import Notification from '../../pages/Notification';

const DisplayItemCard = ({
  id, name, description, pricePerHr, seatingCapacity, imgSrc, removed,
}) => {
  const username = useSelector((state) => state.authentication.authenticatedUser.username);
  const navigate = useNavigate();
  const [rotation, setRotation] = useState(0);
  const [showNotification, setShowNotification] = useState(false);

  const handleReserveClick = () => {
    if (!removed) {
      navigate(`${USERS_DASHBOARD}/${RESERVE_CARS}`, {
        state: { id, username, name },
      });
    } else {
      setShowNotification(true);
      setTimeout(() => {
        setShowNotification(false);
      }, 3000);
    }
  };

  const handleRotate = () => {
    setRotation((prevRotation) => (prevRotation + 90) % 360);
  };
  return (
    <Container>
      <Image>
        <Image1 src={imgSrc} alt={name} rotation={rotation} />
        <RotateButton onClick={handleRotate}>
          <Rotate>
            <FaSyncAlt />
            Rotate vehicle
          </Rotate>
        </RotateButton>
      </Image>
      <Content>
        <Name>{name}</Name>
        <Description>
          {description}
        </Description>
        <Table>
          <TableRow color="#ccc">
            <TableData>Rent Price per Hour</TableData>
            <TableData>{pricePerHr}</TableData>
          </TableRow>
          <TableRow color="#fff">
            <TableData>Seating Capacity</TableData>
            <TableData>{seatingCapacity}</TableData>
          </TableRow>
          <TableRow color="#ccc">
            <TableData>Currently available for booking?</TableData>
            <TableData>{removed ? 'NOT AVAILABLE' : 'AVAILABLE FOR BOOKING'}</TableData>
          </TableRow>
          <TableRow color="#fff">
            <TableData>Minimum Rental Duration</TableData>
            <TableData>4 hrs</TableData>
          </TableRow>
        </Table>
        <BoldText>
          5.9% APR Representative
        </BoldText>
        <ColorWheel>
          DISCOVER MORE MODEL
          <img src={colorWheel} alt="Color Wheel" />
        </ColorWheel>
        <ConfigureButton onClick={handleReserveClick}>
          <SettingIcon>
            <FaCog />
          </SettingIcon>
          Reserve
          <ArrowIcon>
            <FaArrowRight />
          </ArrowIcon>
        </ConfigureButton>
        {showNotification && <Notification message="CAR NOT AVAILABLE FOR BOOKING ANYMORE." />}
      </Content>
    </Container>
  );
};

DisplayItemCard.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  pricePerHr: PropTypes.number.isRequired,
  seatingCapacity: PropTypes.number.isRequired,
  imgSrc: PropTypes.string.isRequired,
  removed: PropTypes.bool.isRequired,
};

const Container = styled.div`
//   border: 1px solid #ccc;
  display: flex;
  border-radius: 8px;
  text-align: right;
//   width: 40%;
//   overflow: hidden;
//   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  @media (max-width: 768px) {
     flex-direction: column;
     align-items: center;
  }
`;

const Image = styled.div`
//   border: 1px solid blue;
  width: 40rem;
  margin-right: 5rem;
  margin-top: 3rem;
  postion: relative;
  @media (max-width: 768px) {
    width: 20rem;
    margin: 3rem 0;
    height: auto;
  }
  @media (max-width: 380px) {
    width: 100%;
    height: auto;
    margin-right: 0;
  }
`;

const Image1 = styled.img`
  border: 1px solid blue;
  width: 40rem;
  margin-right: 2rem;
  transform: rotate(${(props) => props.rotation}deg);
  transition: transform 0.5s ease;
  @media (max-width: 768px) {
    width: 20rem;
    border: 1px solid blue;
  }
  @media (max-width: 380px) {
    width: 100%;
    margin-right: 0;
  }
`;

const RotateButton = styled.button`
  position: absolute;
  top: 40rem;
  right: 50rem;
  background-color: white;
  border: none;
  border-radius: 50%;
//   padding: 0.5rem;
  cursor: pointer;
  @media (max-width: 380px) {
    position: relative;
    top: 0;
    right: 15rem;
  }
`;

const Rotate = styled.div`
//   border: 1px solid blue;
  color: green;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 50%;
  padding: 10px;
`;

const Content = styled.div`
  padding: 4rem 2rem;
  @media (max-width: 768px) {
    background: orange;
  }
  @media (max-width: 380px) {
    padding: 1rem;
  }
`;

const Name = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  margin-top: -4rem;
`;

const Description = styled.p`
  font-size: 1rem;
  margin-bottom: 0.5rem;
`;

const Table = styled.table`
  width: 100%;
  margin-bottom: 2rem;
  margin-top: 2rem;
`;

const TableRow = styled.tr`
  background-color: ${(props) => props.color};
`;

const TableData = styled.td`
  padding: 0.5rem;
  text-align: center;
`;

const BoldText = styled.div`
  font-weight: bolder;
  margin-bottom: 2rem;
  margin-right: 10rem;
`;

const ColorWheel = styled.div`
  /* Add styles for the color wheel */
//   border: 1px solid blue;
  display: flex;
  flex-direction: column;
//   margin-bottom: 2rem;
  margin-left: 9rem;
  width: 15rem;
//   height: 1rem;
  @media (max-width: 380px) {
    margin-left: 2rem;
  }
`;

const ConfigureButton = styled.button`
  background-color: green;
  color: #fff;
  padding: 8px 16px;
  display: flex;
  align-items: center;
  margin-left: 10rem;
  margin-top: 0.8rem;
  border: none;
  border-radius: 5rem;
  cursor: pointer;
  @media (max-width: 380px) {
    margin-left: 6rem;
    margin-bottom: 2rem;
  }
`;

const SettingIcon = styled.span`
  margin-right: 8px;
`;

const ArrowIcon = styled.span`
  margin-left: 8px;
  margin-top: 2px;
`;

export default DisplayItemCard;
