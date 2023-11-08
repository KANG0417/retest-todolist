import CheckedButton from "../button/CheckedButton";
import RemoveButton from "../button/RemoveButton";

function Todolist({ working, done, removeFunc }) {
  return (
    <>
      <div>
        {working.map((item) => {
          return (
            <div key={item.id}>
              <p>제목: {item.title}</p>
              <p>내용: {item.content}</p>
              <RemoveButton item={item} removeFunc={removeFunc} />
              <CheckedButton />
            </div>
          );
        })}
      </div>
      {done.map((item) => {
        return (
          <div key={item.id}>
            <p>제목: {item.title}</p>
            <p>내용: {item.content}</p>
            <RemoveButton item={item} removeFunc={clickRemoveHandler} />
            <CheckedButton />
          </div>
        );
      })}
    </>
  );
}

export default Todolist;
