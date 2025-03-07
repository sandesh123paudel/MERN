const Message = ({ data }) => {
  return (
    <>
      {data.length > 0 ? `${data.length} To-Do Items` : "No Items in The Todo"}
    </>
  );
};

export default Message;
