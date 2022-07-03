const React = require("react");
const Default = require("./layouts/default");

function notFound({ title }) {
  return (
    <Default title={title}>
      <h2>404 Page</h2>
    </Default>
  );
}

module.exports = notFound;
