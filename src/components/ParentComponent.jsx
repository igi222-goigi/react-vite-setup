import { useCallback, useEffect, useState } from "react";
import ChildComponent from "./ChildComponent";

const ParentComponent = () => {
  console.log("===Parent Component====");
  const [user, setUser] = useState([]);
  const [refresh, setRefresh] = useState(false);

  const fetchUser = useCallback(async () => {
    let respone = await fetch("https://jsonplaceholder.typicode.com/users");
    let data = await respone.json();
    // console.log(data);
    setUser(data);
  }, []);

  useEffect(() => {
    fetchUser();
  }, [fetchUser]);

  return (
    <>
      <button onClick={() => setRefresh(!refresh)}>Refresh</button>
      <ChildComponent user={user} />
    </>
  );
};

export default ParentComponent;
