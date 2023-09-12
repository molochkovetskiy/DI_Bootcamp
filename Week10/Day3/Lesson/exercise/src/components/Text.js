import { useEffect, useState } from "react";

const Text = (props) => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        if (props.txt === 'vitaly') getData();
    }, [props.txt]);

    const getData = async () => {
        try {
            const res = await fetch('https://jsonplaceholder.typicode.com/users');
            const data = await res.json();
            console.log(data);
            setUsers(data);
        } catch (err) {
            console.log("error=>", err);
        }
    };

    return (
        <div>
            <h1>Text Component</h1>
            {users.map((item, indx) => {
                return <div key={indx}>{item.name}</div>;
            })}
        </div>
    );
};

export default Text;