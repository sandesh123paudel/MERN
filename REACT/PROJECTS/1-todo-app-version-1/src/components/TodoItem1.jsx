function TodoItem1() {
  let todoName='Buy Milk';
  let todoDate='2/2/2025';


  return (
    
      <div className="container">
      <div class="row kg-row">
        <div class="col-6">{todoName}</div>
        <div class="col-4">{todoDate}</div>
        <div class="col-2">
          <button type="button" class="btn btn-danger kg-button">
            Delete
          </button>
        </div>
      </div>
      </div>
     
    
  );
}

export default TodoItem1;
