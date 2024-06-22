import Color from "./message.module.css";

const Message = ({ message, children, className }) => {
  return (
    <button className={className} onClick={() => alert(message)}>
      {children}
    </button>
  );
};

const ToDoList = () => {
  return (
    <>
      <Message className={Color.red} message={"play game with me"}>
        Game
      </Message>
      <Message className={Color.blue} message={"End of the game"}>
        End
      </Message>
    </>
  );
};

export default ToDoList;
