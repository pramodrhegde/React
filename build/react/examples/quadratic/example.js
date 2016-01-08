var QuadraticCalculator = React.createClass({
  displayName: "QuadraticCalculator",

  getInitialState: function () {
    return {
      a: 1,
      b: 3,
      c: -4
    };
  },

  /**
   * This function will be re-bound in render multiple times. Each .bind() will
   * create a new function that calls this with the appropriate key as well as
   * the event. The key is the key in the state object that the value should be
   * mapped from.
   */
  handleInputChange: function (key, event) {
    var partialState = {};
    partialState[key] = parseFloat(event.target.value);
    this.setState(partialState);
  },

  render: function () {
    var a = this.state.a;
    var b = this.state.b;
    var c = this.state.c;
    var root = Math.sqrt(Math.pow(b, 2) - 4 * a * c);
    var denominator = 2 * a;
    var x1 = (-b + root) / denominator;
    var x2 = (-b - root) / denominator;
    return React.createElement(
      "div",
      null,
      React.createElement(
        "strong",
        null,
        React.createElement(
          "em",
          null,
          "ax"
        ),
        React.createElement(
          "sup",
          null,
          "2"
        ),
        " + ",
        React.createElement(
          "em",
          null,
          "bx"
        ),
        " + ",
        React.createElement(
          "em",
          null,
          "c"
        ),
        " = 0"
      ),
      React.createElement(
        "h4",
        null,
        "Solve for ",
        React.createElement(
          "em",
          null,
          "x"
        ),
        ":"
      ),
      React.createElement(
        "p",
        null,
        React.createElement(
          "label",
          null,
          "a: ",
          React.createElement("input", { type: "number", value: a, onChange: this.handleInputChange.bind(null, 'a') })
        ),
        React.createElement("br", null),
        React.createElement(
          "label",
          null,
          "b: ",
          React.createElement("input", { type: "number", value: b, onChange: this.handleInputChange.bind(null, 'b') })
        ),
        React.createElement("br", null),
        React.createElement(
          "label",
          null,
          "c: ",
          React.createElement("input", { type: "number", value: c, onChange: this.handleInputChange.bind(null, 'c') })
        ),
        React.createElement("br", null),
        "x: ",
        React.createElement(
          "strong",
          null,
          x1,
          ", ",
          x2
        )
      )
    );
  }
});

ReactDOM.render(React.createElement(QuadraticCalculator, null), document.getElementById('container'));