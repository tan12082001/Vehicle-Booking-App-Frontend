import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteCar } from '../../redux/thunk';
import { removeMarkStatus } from '../../redux/cars/carsSlice';

const EachCarDelete = ({ car }) => {
  const {
    name,
    id,
    removed,
  } = car;
  const dispatch = useDispatch();
  const handleDelete = () => {
    if (removed) {
      return;
    }

    dispatch(deleteCar(id));
    dispatch(removeMarkStatus(id));
  };
  return (
    <tr className="delete-list-each-car">
      <td>{name}</td>
      <td><button type="button" className={removed ? 'removed-mark' : 'remove-mark'} onClick={handleDelete} disabled={removed}>{removed ? 'removed' : 'DELETE'}</button></td>
    </tr>
  );
};

EachCarDelete.propTypes = {
  car: PropTypes.shape({
    name: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    removed: PropTypes.bool.isRequired,
  }).isRequired,
};

export default EachCarDelete;
