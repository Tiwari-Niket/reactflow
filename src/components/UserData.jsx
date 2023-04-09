import { Link } from "react-router-dom";

const UserData = ({ users }) => {
  return (
    <>
      {users.map((curUser) => {
        const { name, input_type, createdAt } = curUser;
        return (
          <tr>
            <td className="text-center ">
              <Link className="text" to={`/module/${name}`}>{name}</Link>
            </td>
            <td className="text-center">{input_type}</td>
            <td className="text-center">
              {new Date(createdAt).toLocaleDateString()}
            </td>
          </tr>
        );
      })}
    </>
  );
};
export default UserData;
