/* this is not Being used */
class CursorModule {
    constructor(quill) {
      this.quill = quill;
      this.cursors = {};
      this.container = this.quill.addContainer('ql-cursors');
    }
  
    // Create or update the cursor element on the editor
    updateCursorPosition(userId, cursorPosition, userName) {
      // Remove existing cursor for the user if it exists
      this.removeCursor(userId);
  
      // Create a new cursor element
      const cursorElement = document.createElement('span');
      cursorElement.classList.add('cursor');
      cursorElement.style.position = 'absolute';
      cursorElement.style.height = '1em';
      cursorElement.style.width = '2px';
      cursorElement.style.backgroundColor = 'blue'; // You can have a map of colors for different users
      cursorElement.setAttribute('data-user', userId);
  
      // Create user label element
      const labelElement = document.createElement('span');
      labelElement.classList.add('cursor-label');
      labelElement.textContent = userName;
      labelElement.style.position = 'absolute';
      labelElement.style.backgroundColor = '#FFFF00';
      labelElement.style.fontSize = '12px';
      labelElement.style.padding = '2px';
      labelElement.style.borderRadius = '4px';
      labelElement.style.whiteSpace = 'nowrap';
  
      // Append label to cursor
      cursorElement.appendChild(labelElement);
  
      // Calculate cursor position
      const quillBounds = this.quill.getBounds(cursorPosition);
      cursorElement.style.top = `${quillBounds.top}px`;
      cursorElement.style.left = `${quillBounds.left}px`;
      
      // Adjust label position
      labelElement.style.top = `${quillBounds.top - labelElement.offsetHeight}px`;
      labelElement.style.left = `${quillBounds.left}px`;
  
      // Append cursor to container
      this.container.appendChild(cursorElement);
  
      // Store the cursor element for future updates
      this.cursors[userId] = cursorElement;
          // Remove the cursor after a period of inactivity
      setTimeout(() => this.removeCursor(userId), 2000);
    }
  
    // Remove the cursor element from the editor
    removeCursor(userId) {
      const cursorElement = this.cursors[userId];
      if (cursorElement) {
        cursorElement.remove();
        delete this.cursors[userId];
      }
    }
  }

  export default CursorModule;