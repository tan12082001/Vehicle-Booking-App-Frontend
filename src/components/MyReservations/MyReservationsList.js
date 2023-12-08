import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCarReservations } from '../../redux/thunk';

const MyReservationsList = () => {
    const dispatch = useDispatch();
    const myReservations = useSelector((state) => state.reservation.reservations);
    const status = useSelector((state) => state.reservation.status);
    const error = useSelector((state) => state.reservation.error);

    useEffect(() => {
        dispatch(fetchCarReservations());
    }, [dispatch]);

    if (status === 'loading') {
    return <p>Loading...</p>;
    }

    if (status === 'failed') {
    return <p>Error: {error}</p>;
    }

    return (
    <div>
        <h1>My Reservations</h1>
        {myReservations.map((reservation) => (
        <div key={reservation.id}>
            <p>{`Car: ${reservation.car.name}, Date: ${reservation.date}, City: ${reservation.city}`}</p>
        </div>
        ))}
    </div>
    );
};

export default MyReservationsList;
