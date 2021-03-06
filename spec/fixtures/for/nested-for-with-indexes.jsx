var React = require("react");

module.exports = React.createClass({
  render: function() {
    return (
      <div>
        <For each="otherItem" index="$index1" of={this.props.otherItems}>
          <For each="item" index="$index2" of={this.props.items}>
            <span key={otherItem + item}>{otherItem + item + $index2 + $index1}</span>
          </For>
        </For>
      </div>
    );
  }
});
