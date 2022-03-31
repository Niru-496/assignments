export const Tables = ({
  id,
  name,
  age,
  address,
  department,
  salary,
  married,
}) => {
  return (
    <tr>
      <td>{name}</td>
      <td>{age}</td>
      <td>{address}</td>
      <td>{department}</td>
      <td>{salary}</td>
      <td>{married ? "Married" : "Single"}</td>
    </tr>
  );
};
