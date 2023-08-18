import {FormContainer} from './style'

const Form = ({q, mealType, inputChangeHandler, selectChangeHandler, submitHandler}) => {
  return (
    <div className="form">
        <FormContainer>
      <form>
        <input type="text" placeholder="Search for a recipe" value={q} onChange={(e)=>inputChangeHandler(e)}/>
        <button type="submit" onClick={(e)=>submitHandler(e)}>Search</button>
        <select name="mealType" id="mealType" value={mealType} onChange={(e)=>selectChangeHandler(e)}>
          <option value="breakfast">Breakfast</option>
          <option value="lunch">Lunch</option>
          <option value="dinner">Dinner</option>
          <option value="snack">Snack</option>
          <option value="teatime">TeaTime</option>
        </select>
      </form>
        </FormContainer>
    </div>
  );
};

export default Form;
