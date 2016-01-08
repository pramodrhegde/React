'use strict';

// Simple pure-React component so we don't have to remember
// Bootstrap's classes

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var BootstrapButton = React.createClass({
  displayName: "BootstrapButton",

  render: function () {
    return React.createElement("a", _extends({}, this.props, {
      href: "javascript:;",
      role: "button",
      className: (this.props.className || '') + ' btn' }));
  }
});

var BootstrapModal = React.createClass({
  displayName: "BootstrapModal",

  // The following two methods are the only places we need to
  // integrate Bootstrap or jQuery with the components lifecycle methods.
  componentDidMount: function () {
    // When the component is added, turn it into a modal
    $(this.refs.root).modal({ backdrop: 'static', keyboard: false, show: false });
  },
  componentWillUnmount: function () {
    $(this.refs.root).off('hidden', this.handleHidden);
  },
  close: function () {
    $(this.refs.root).modal('hide');
  },
  open: function () {
    $(this.refs.root).modal('show');
  },
  render: function () {
    var confirmButton = null;
    var cancelButton = null;

    if (this.props.confirm) {
      confirmButton = React.createElement(
        BootstrapButton,
        {
          onClick: this.handleConfirm,
          className: "btn-primary" },
        this.props.confirm
      );
    }
    if (this.props.cancel) {
      cancelButton = React.createElement(
        BootstrapButton,
        { onClick: this.handleCancel, className: "btn-default" },
        this.props.cancel
      );
    }

    return React.createElement(
      "div",
      { className: "modal fade", ref: "root" },
      React.createElement(
        "div",
        { className: "modal-dialog" },
        React.createElement(
          "div",
          { className: "modal-content" },
          React.createElement(
            "div",
            { className: "modal-header" },
            React.createElement(
              "button",
              {
                type: "button",
                className: "close",
                onClick: this.handleCancel },
              "×"
            ),
            React.createElement(
              "h3",
              null,
              this.props.title
            )
          ),
          React.createElement(
            "div",
            { className: "modal-body" },
            this.props.children
          ),
          React.createElement(
            "div",
            { className: "modal-footer" },
            cancelButton,
            confirmButton
          )
        )
      )
    );
  },
  handleCancel: function () {
    if (this.props.onCancel) {
      this.props.onCancel();
    }
  },
  handleConfirm: function () {
    if (this.props.onConfirm) {
      this.props.onConfirm();
    }
  }
});

var Example = React.createClass({
  displayName: "Example",

  handleCancel: function () {
    if (confirm('Are you sure you want to cancel?')) {
      this.refs.modal.close();
    }
  },
  render: function () {
    var modal = null;
    modal = React.createElement(
      BootstrapModal,
      {
        ref: "modal",
        confirm: "OK",
        cancel: "Cancel",
        onCancel: this.handleCancel,
        onConfirm: this.closeModal,
        title: "Hello, Bootstrap!" },
      "This is a React component powered by jQuery and Bootstrap!"
    );
    return React.createElement(
      "div",
      { className: "example" },
      modal,
      React.createElement(
        BootstrapButton,
        { onClick: this.openModal, className: "btn-default" },
        "Open modal"
      )
    );
  },
  openModal: function () {
    this.refs.modal.open();
  },
  closeModal: function () {
    this.refs.modal.close();
  }
});

ReactDOM.render(React.createElement(Example, null), document.getElementById('jqueryexample'));