function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import * as React from 'react';
var SvgCertificateIcon = React.forwardRef(function (_ref, svgRef) {
  var _ref$title = _ref.title,
      title = _ref$title === void 0 ? 'Certificate Icon' : _ref$title,
      _ref$titleId = _ref.titleId,
      titleId = _ref$titleId === void 0 ? '' : _ref$titleId,
      size = _ref.size,
      color = _ref.color,
      width = _ref.width,
      height = _ref.height,
      props = _objectWithoutProperties(_ref, ["title", "titleId", "size", "color", "width", "height"]);

  titleId = 'gamut-icon-U3ZnQ2VydGlmaWNhdGVJY29u' + titleId;
  return React.createElement("svg", _extends({
    fill: color || 'currentColor',
    viewBox: "0 0 24 24",
    width: size || width || '16px',
    height: size || height || '16px',
    role: "img",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? React.createElement("title", {
    id: titleId
  }, title) : null, React.createElement("path", {
    d: "M4 3c-1.11 0-2 .89-2 2v10a2 2 0 002 2h8v5l3-3 3 3v-5h2a2 2 0 002-2V5a2 2 0 00-2-2H4zm8 2l3 2 3-2v3.5l3 1.5-3 1.5V15l-3-2-3 2v-3.5L9 10l3-1.5V5zM4 5h5v2H4V5zm0 4h3v2H4V9zm0 4h5v2H4v-2z"
  }));
});
export default SvgCertificateIcon;