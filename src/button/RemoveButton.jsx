function RemoveButton({ removeFunc, item }) {
  console.log(removeFunc);
  return (
    <button value={item.id} onClick={removeFunc}>
      삭제
    </button>
  );
}

export default RemoveButton;
