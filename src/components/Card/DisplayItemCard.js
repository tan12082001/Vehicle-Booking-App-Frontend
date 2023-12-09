import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { FaCog, FaArrowRight, FaSyncAlt } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { RESERVE_CARS, USERS_DASHBOARD } from '../../routes/routeConstants';

const DisplayItemCard = ({ id, name, description, pricePerHr, seating_capacity, imgSrc }) => {
  const username = useSelector((state) => state.authentication.authenticatedUser.username);
  const navigate = useNavigate();
  const [rotation, setRotation] = useState(0);

  const handleReserveClick = () => {
    navigate(`${USERS_DASHBOARD}/${RESERVE_CARS}`, {
      state: { id, username, name }
    });
  }

  const handleRotate = () => {
    setRotation((prevRotation) => (prevRotation + 90) % 360);
  };
  return (
    <Container>
        <Image>
          <Image1 src={imgSrc} alt={name} rotation={rotation} />
          <RotateButton onClick={handleRotate}>
            <FaSyncAlt />
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
            <TableData>{seating_capacity}</TableData>
            </TableRow>
            <TableRow color="#ccc">
            <TableData>Currently available for booking?</TableData>
            <TableData>Yes</TableData>
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
        </ColorWheel>
        <ConfigureButton onClick={handleReserveClick} >
            <SettingIcon>
            <FaCog />
            </SettingIcon>
            Reserve
            <ArrowIcon>
            <FaArrowRight />
            </ArrowIcon>
        </ConfigureButton>
        </Content>
    </Container>
)};

DisplayItemCard.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  pricePerHr: PropTypes.number.isRequired,
  seating_capacity: PropTypes.number.isRequired,
  imgSrc: PropTypes.string.isRequired
};

const Container = styled.div`
//   border: 1px solid #ccc;
  display: flex;
  border-radius: 8px;
  text-align: right;
//   margin-right: -20rem;
//   width: 40%;
  overflow: hidden;
//   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Image = styled.div`
  border: 1px solid blue;
  width: 40rem;
  margin-right: 2rem;
  postion: relative;
`;

const Image1 = styled.img`
  border: 1px solid blue;
  width: 40rem;
  margin-right: 2rem;
  transform: rotate(${(props) => props.rotation}deg);
  transition: transform 0.5s ease;
`;

const RotateButton = styled.button`
  position: absolute;
  bottom: 1rem;
  right: 55rem;
  background-color: #fff;
  border: none;
  border-radius: 50%;
  padding: 0.5rem;
  cursor: pointer;
`;

const Content = styled.div`
  padding: 4rem 2rem;
`;

const Name = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const Description = styled.p`
  font-size: 1rem;
  margin-bottom: 1rem;
`;

const Table = styled.table`
  width: 100%;
  margin-bottom: 2rem;
  margin-top: 3rem;
`;

const TableRow = styled.tr`
  background-color: ${(props) => props.color};
`;

const TableData = styled.td`
  padding: 1rem;
  text-align: center;
`;

const BoldText = styled.div`
  font-weight: bolder;
  margin-bottom: 2rem;
  margin-right: 10rem;
`;

const ColorWheel = styled.div`
  /* Add styles for the color wheel */
  margin-bottom: 5rem;
`;

const ConfigureButton = styled.button`
  background-color: green;
  color: #fff;
  padding: 8px 16px;
  display: flex;
  align-items: center;
  margin-left: 15rem;
  border: none;
  border-radius: 5rem;
  cursor: pointer;
`;

const SettingIcon = styled.span`
  margin-right: 8px;
`;

const ArrowIcon = styled.span`
  margin-left: 8px;
  margin-top: 2px;
`;

export default DisplayItemCard;
