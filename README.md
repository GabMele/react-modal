# @gabmele/react-modal
# Modal Component

![npm](https://img.shields.io/npm/v/@gabmele/react-modal)
![license](https://img.shields.io/github/license/GabMele/react-modal)
![GitHub repo size](https://img.shields.io/github/repo-size/GabMele/react-modal)

A lightweight and accessible React modal component.

## ✨ Features

- ESC key support to close the modal
- Click outside to close
- Prevents propagation of inner content clicks
- Accessible (`role="dialog"` and `aria-modal`)
- Easy to style with CSS Modules

## 📦 Installation
```bash
npm install @gabmele/react-modal
```
or
```bash
yarn add @gabmele/react-modal
```

## 🧩 Props
| Prop      | Type       | Required | Description                        |
|-----------|------------|----------|------------------------------------|
| `isOpen`  | boolean    | ✅       | Controls the visibility of modal  |
| `onClose` | function   | ✅       | Callback when modal is dismissed  |
| `children`| ReactNode  | ✅       | Modal content                     |

## Example
```javascript
import Modal from '@gabmele/react-modal';
function App() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <button onClick={() => setIsOpen(true)}>Open Modal</button> 
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <h2>Modal Title</h2>
        <p>Your content goes here...</p>
      </Modal>
    </>
  );
}
```

## Licence
MIT

## CHANGELOG.md
### 1.0.2
- Added dark mode support