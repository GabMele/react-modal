'use strict';

var React = require('react');

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = ".Modal-module_modal__aD7aP{background-color:#fff;border-radius:8px;box-shadow:0 0 30px rgba(0,0,0,.3);padding:0 10px;position:relative}.Modal-module_modalClose__m7n6G{align-items:center;background-color:#000;border:none;border-radius:50%;color:#fff;cursor:pointer;display:flex;font-size:24px;justify-content:center;line-height:.5;padding:7px 7px 10px;position:absolute;right:-10px;top:-10px}.Modal-module_modalContent__QNpBm{padding:5px 25px}.Modal-module_modalOverlay__ijDX-{align-items:center;background:rgba(0,0,0,.6);display:flex;height:100%;justify-content:center;left:0;position:fixed;top:0;width:100%;z-index:1000}";
var styles = {"modal":"Modal-module_modal__aD7aP","modalClose":"Modal-module_modalClose__m7n6G","modalContent":"Modal-module_modalContent__QNpBm","modalOverlay":"Modal-module_modalOverlay__ijDX-"};
styleInject(css_248z);

var Modal = function Modal(_ref) {
  var isOpen = _ref.isOpen,
    onClose = _ref.onClose,
    children = _ref.children;
  React.useEffect(function () {
    var handleKeyDown = function handleKeyDown(event) {
      if (event.key === "Escape" && isOpen) {
        onClose();
      }
    };
    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
    }
    return function () {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);
  if (!isOpen) return null;
  return /*#__PURE__*/React.createElement("div", {
    className: styles.modalOverlay,
    onClick: onClose,
    role: "dialog",
    "aria-modal": "true"
  }, /*#__PURE__*/React.createElement("div", {
    className: styles.modal,
    onClick: function onClick(e) {
      return e.stopPropagation();
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: styles.modalClose,
    onClick: onClose,
    "aria-label": "Close modal"
  }, "\xD7"), /*#__PURE__*/React.createElement("div", {
    className: styles.modalContent
  }, children)));
};

exports.Modal = Modal;
//# sourceMappingURL=react-modal-library.cjs.js.map
