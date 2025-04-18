import React, { useEffect } from 'react';

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

var css_248z = ".Modal-module_modal__aD7aP{background-color:#fff!important;border-radius:8px;box-shadow:0 0 30px rgba(0,0,0,.3);color:#333!important;padding:0 10px;position:relative;@media (prefers-color-scheme:dark){background:#fff!important;border-bottom-color:#ccc;border-bottom-style:solid;border-bottom-width:1px;border-left-color:#ccc;border-left-style:solid;border-left-width:1px;border-right-color:#ccc;border-right-style:solid;border-right-width:1px;border-top-color:#ccc;border-top-style:solid;border-top-width:1px;color:#333!important}}.Modal-module_modalClose__m7n6G{align-items:center;background-color:#000;border:none;border-radius:50%;color:#fff;cursor:pointer;display:flex;font-size:24px;justify-content:center;line-height:.5;padding:7px 7px 10px;position:absolute;right:-10px;top:-10px}.Modal-module_modalContent__QNpBm{padding:5px 25px}.Modal-module_modalOverlay__ijDX-{align-items:center;background:rgba(0,0,0,.6);display:flex;height:100%;justify-content:center;left:0;position:fixed;top:0;width:100%;z-index:1000}";
var styles = {"modal":"Modal-module_modal__aD7aP","modalClose":"Modal-module_modalClose__m7n6G","modalContent":"Modal-module_modalContent__QNpBm","modalOverlay":"Modal-module_modalOverlay__ijDX-"};
styleInject(css_248z);

var Modal = function Modal(_ref) {
  var isOpen = _ref.isOpen,
    onClose = _ref.onClose,
    children = _ref.children;
  useEffect(function () {
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

export { Modal };
//# sourceMappingURL=react-modal.esm.js.map
