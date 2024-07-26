import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';

export const AbstructVar = () => {
    let dispatch = useDispatch();
    let navigate = useNavigate();
    return {
        dispatch,
        navigate,
    }
}
