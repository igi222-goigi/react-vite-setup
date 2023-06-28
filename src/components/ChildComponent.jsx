import { memo } from "react";

const ChildComponent = ({ user }) => {
  console.log("===Child Component====");
  return (
    <>
      <div>{JSON.stringify(user)}</div>
    </>
  );
};

export default memo(ChildComponent);

// export default ChildComponent;
