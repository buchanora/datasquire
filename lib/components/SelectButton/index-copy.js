'use strict';

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SelectButton = function (_Component) {
  _inherits(SelectButton, _Component);

  function SelectButton(props) {
    _classCallCheck(this, SelectButton);

    var _this = _possibleConstructorReturn(this, _Component.call(this, props));

    _this.state = {
      dropdownVisible: false,
      selectValue: 0
    };

    _this._handleSelectButtonFocus = _this._handleSelectButtonFocus.bind(_this);
    _this._handleSelectButtonBlur = _this._handleSelectButtonBlur.bind(_this);
    _this._handleDropdownOptionClick = _this._handleDropdownOptionClick.bind(_this);
    _this._changeDropdownVisibility = _this._changeDropdownVisibility.bind(_this);
    _this._selectOption = _this._selectOption.bind(_this);
    return _this;
  }

  SelectButton.prototype.render = function render() {
    var _this2 = this;

    var _props = this.props,
        _props$label = _props.label,
        label = _props$label === undefined ? 'label' : _props$label,
        _props$options = _props.options,
        options = _props$options === undefined ? [{ name: 'Option One', value: 'option1' }] : _props$options,
        _props$onOptionClick = _props.onOptionClick,
        onOptionClick = _props$onOptionClick === undefined ? function (option) {
      console.log('Option: ' + option.name + ' clicked');
    } : _props$onOptionClick;


    var optionsMap = options.map(function (item, index) {
      return _react2.default.createElement(
        'span',
        { className: 'selectButton-option',
          key: 'selectOption_' + index,
          onClick: _this2._handleDropdownOptionClick.bind(null, index) },
        item.name
      );
    });

    var getSelectButtonText = function getSelectButtonText(selectValue, optionsArray) {
      return optionsArray[selectValue].name;
    };
    var showOption = this.state.dropdownVisible === true ? 'selectButton-show-dropdown' : 'selectButton-hide-dropdown';

    return _react2.default.createElement(
      'div',
      { className: 'selectButton',
        ref: function ref(elm) {
          return _this2.selectRef = elm;
        },
        tabIndex: 1 },
      this.state.dropdownVisible === true && _react2.default.createElement(
        'button',
        { className: 'selectButton-buttonMask', onClick: this._handleSelectButtonBlur },
        getSelectButtonText(this.state.selectValue, options),
        _react2.default.createElement('i', { className: 'icofont icofont-simple-up' })
      ),
      _react2.default.createElement(
        'button',
        { className: 'selectButton-button',
          onClick: this._handleSelectButtonFocus },
        getSelectButtonText(this.state.selectValue, options),
        _react2.default.createElement('i', { className: 'icofont icofont-simple-down' })
      ),
      _react2.default.createElement(
        'div',
        { className: 'selectButton-dropdown ' + showOption,
          ref: function ref(elm) {
            return _this2.dropdownRef = elm;
          },
          onBlur: this._handleSelectButtonBlur,
          tabIndex: 2 },
        optionsMap
      )
    );
  };

  SelectButton.prototype._handleSelectButtonFocus = function _handleSelectButtonFocus(event) {
    event.preventDefault();
    this._changeDropdownVisibility(true);
    this.dropdownRef.focus();
  };

  SelectButton.prototype._handleSelectButtonBlur = function _handleSelectButtonBlur() {
    this._changeDropdownVisibility(false);
  };

  SelectButton.prototype._handleDropdownOptionClick = function _handleDropdownOptionClick(val) {
    this._selectOption(val);
    this._changeDropdownVisibility(false);
  };

  SelectButton.prototype._changeDropdownVisibility = function _changeDropdownVisibility(visibility, event) {

    this.setState(function (curState) {
      return {
        dropdownVisible: visibility
      };
    });
  };

  SelectButton.prototype._selectOption = function _selectOption(val, event) {

    this.setState({
      selectValue: val
    });
    this.props.onOptionClick && this.props.onOptionClick(this.props.options && this.props.options[val] || 0);
  };

  return SelectButton;
}(_react.Component);

exports.default = SelectButton;