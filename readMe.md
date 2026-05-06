### 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
-getElementById() selects an element using its unique ID attribute in a document. Returns a single element or null.
-getElementsByClassName() selects elements using a class name wgere multiple elements can share the same class.
-querySelector() uses CSS selectors (such as - like .class, #id, div p) and returns the first matching element.
-querySelectorAll() uses CSS selectors and returns all matching elements and also a static NodeList.

### 2. How do you create and insert a new element into the DOM?
Create a new element using document.createElement().
Add content or attributes using innerText, innerHTML, or classList.
Select the parent element using getElementById() or querySelector().
Insert the new element into the parent using appendChild(), append(), or prepend().

### 3. What is Event Bubbling? And how does it work?
Event bubbling is a process in the DOM where an event starts from the target element and then propagates upward through its parent elements. When an event (like a click) occurs on a child element, it first runs on that element and then moves to its parent, grandparent, and so on until the root.

### 4. What is Event Delegation in JavaScript? Why is it useful?
Event delegation is a technique in JavaScript where a single event listener is attached to a parent element instead of adding event listeners to multiple child elements. The parent handles events for its children using event bubbling.
It is useful because it improves performance by reducing the number of event listeners, simplifies code management, and works well for dynamically added elements.

### 5. What is the difference between preventDefault() and stopPropagation() methods?   
preventDefault() is used to stop the browser’s default behavior for an event.
stopPropagation() is used to stop the event from propagating (bubbling) to parent elements in the DOM.