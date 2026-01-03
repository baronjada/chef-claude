export default function Form() {
  return (
    <div className="form-container">
      <form action="submit">
        <div className="input-and-button">
          <input type="text" placeholder="e.g. oregano" id="ingredient-field" />
          <button type="submit">+ Add ingredient</button>
        </div>
      </form>
    </div>
  );
}
