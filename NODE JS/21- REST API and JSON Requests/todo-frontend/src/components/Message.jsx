const Message = ({ data }) => {
  return (
    <>
      <p style={{ color: "purple", fontSize: "18px", textAlign: "center" }}>
        {data.length > 0
          ? `${data.length} To-Do Items`
          : "No Items in The Todo"}
      </p>
    </>
  );
};

export default Message;
