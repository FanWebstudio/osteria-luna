// Save the last focused element before opening a modal/menu
let lastFocusedElement = null;

export const focusManagement = {
  save: () => {
    lastFocusedElement = document.activeElement;
  },
  
  restore: () => {
    // Return focus to the last focused element when closing a modal/menu
    if (lastFocusedElement) {
      lastFocusedElement.focus();
      lastFocusedElement = null;
    }
  }
};

// Announce messages to screen readers
export function announce(message, priority = 'polite') {
  const announcer = document.createElement('div');
  announcer.setAttribute('aria-live', priority);
  announcer.setAttribute('aria-atomic', 'true');
  announcer.classList.add('sr-only');
  document.body.appendChild(announcer);
  
  // Set the message in a setTimeout to ensure it's announced
  setTimeout(() => {
    announcer.textContent = message;
  }, 100);
  
  // Remove the announcer after the message has been read
  setTimeout(() => {
    document.body.removeChild(announcer);
  }, 1000);
}
