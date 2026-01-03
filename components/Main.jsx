export default function Main() {
  return (
    <main>
      <form action="submit" className="add-ingredient-form">
        <input
          type="text"
          placeholder="e.g. oregano"
          aria-label="add-ingredient"
        />
        <button type="submit">Add ingredient</button>
      </form>
    </main>
  );
}
