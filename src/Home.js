
import {useEffect, useState} from "react";
import UserData from "./components/UserData.jsx";

const API = "https://64307b10d4518cfb0e50e555.mockapi.io/workflow";

const Home = () => {
    const [users, setUsers] = useState([]);

    const fetchUsers = async (url) => {
        try {
            const res = await fetch(url);
            const data = await res.json();
            if (data.length > 0) {
                setUsers(data);
            }
        } catch (e) {
            console.error(e)
        }
    }


    useEffect(() => {
        fetchUsers(API);
    }, [])
    return <>
    <div className="workflow-name ">Workflows</div>
    <hr className="workflow-hr"/>
    <div className="col-6 d-flex align-items-center">
    <table className="table table-striped">
    <thead className="thead-dark">
      <tr className="text-center">
        <th scope="col">Name</th>
        <th scope="col">Input Type</th>
        <th scope="col">Created At</th>
      </tr>
    </thead>
    <tbody>
            <UserData users={users}/>
            </tbody>
  </table>
</div>
    </>
}

export default Home;

