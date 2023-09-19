import { useContext } from 'react';
import { AppContext } from '../App';

const SubCounter = (props) => {
    const { count, title } = useContext(AppContext);
    return (
        <>
            <h2>{title}</h2>
            {count}
        </>
    );
};

export default SubCounter;