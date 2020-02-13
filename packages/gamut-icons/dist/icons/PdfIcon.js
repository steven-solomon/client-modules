function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import * as React from 'react';
var SvgPdfIcon = React.forwardRef(function (_ref, svgRef) {
  var _ref$title = _ref.title,
      title = _ref$title === void 0 ? 'Pdf Icon' : _ref$title,
      _ref$titleId = _ref.titleId,
      titleId = _ref$titleId === void 0 ? '' : _ref$titleId,
      size = _ref.size,
      color = _ref.color,
      width = _ref.width,
      height = _ref.height,
      props = _objectWithoutProperties(_ref, ["title", "titleId", "size", "color", "width", "height"]);

  titleId = 'gamut-icon-U3ZnUGRmSWNvbg==' + titleId;
  return React.createElement("svg", _extends({
    viewBox: "0 0 16 16",
    width: size || width || '16px',
    height: size || height || '16px',
    fill: color || 'currentColor',
    role: "img",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? React.createElement("title", {
    id: titleId
  }, title) : null, React.createElement("path", {
    fill: color || 'currentColor',
    d: "M7.8 8.5c-.1-.2-.1-.6-.1-.9.1-.3.2-.3.3 0 0 .2-.1.7-.2.9zm-2.3 4c-.2.3-.1.5.2.2.1-.1.3-.4.5-.7-.2.2-.5.4-.7.5zM7.4 11c.3-.1.9-.2 1-.3 0 0-.4-.5-.6-.7 0 .3-.4.9-.4 1zm3.2-11v3.9h3.9L10.6 0zm0 11.1h-.7c.2.1.5.3.8.3.3-.1.3-.3-.1-.3zm3.9-5.8V16h-13V0h7.7v5.3h5.3zm-3.8 5.2c-.4-.1-1.1 0-1.5.1-.3-.3-.7-.7-1-1.2.2-.5.3-1 .4-1.3.3-1.6-1.7-1.7-1.4 0 .1.5.2.9.4 1.3-.3.6-.6 1.2-1 1.8-.6.3-1.1.5-1.4.8-1 1 .2 2.2 1.2.8.2-.3.5-.8.7-1.2.6-.2 1.3-.4 1.9-.5.4.3 1.1.7 1.6.7 1.1.1 1.2-1.2.1-1.3z"
  }));
});
export default SvgPdfIcon;