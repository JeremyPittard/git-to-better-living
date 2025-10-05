import { useParams } from "react-router";
import dataExports from "../../utils/dataBuilder";

const UserPage = () => {
  const { id } = useParams(); // Get the dynamic `id` from the URL
  const item = dataExports.find((data) => data.id === id); // Find the object by `id`

  if (!item) {
    return <h1>Item not found</h1>;
  }

  return (
    <div>
      <h1>{item.id}</h1>
      <pre>{JSON.stringify(item, null, 2)}</pre>
    </div>
  );
};

export default UserPage;
