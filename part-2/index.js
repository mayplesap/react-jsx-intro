"use strict";

ReactDOM.render(
  <div>
    <Tweet username="Someone" date="someDate" message="someMessage" />
    <Tweet username="someoneElse" date="someDate" message="somethingElse" />
    <Tweet username="Somebody" date="someDate" message="something" />
  </div>,
  document.getElementById("root")
);
