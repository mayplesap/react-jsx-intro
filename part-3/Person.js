function Person({ name, age, hobbies }) {
  return (
    <div>
      <p>
        Name: {name.length > 8 ? name.slice(0,5) : name}
      </p>
      <p>Age: {age}</p>
      <ul>
        {hobbies.map(h => <li>{h}</li>)}
      </ul>
      <h3>{ age >= 18 ? "Please go vote!" : "You must be 18" }</h3>
    </div>
  );
}