import PropTypes from 'prop-types';
import { useDispatch, useSelector } from "react-redux";
import { deleteCar } from "../../redux/thunk";
import { markCarDelete } from "../../redux/cars/carsSlice";

const EachCarDelete = ({car}) => {
    const {
        name,
        id,
        removed
    } = car;
    const dispatch = useDispatch();
    const handleDelete = () => {
        dispatch(deleteCar(id));
        if(!removed) {
            dispatch(markCarDelete(id))
        }
    }

    

    return (
        <tr>
            <td>{name}</td>
            <td><button type='button' className={removed ? 'removed-mark' : 'remove-mark'} onClick={handleDelete}>{removed ? 'removed' : 'DELETE'}</button></td>
        </tr>
    )
}

EachCarDelete.propTypes = {
    car: PropTypes.shape({
        name: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired,
        removed: PropTypes.bool.isRequired,
    }).isRequired,
};

export default EachCarDelete;
