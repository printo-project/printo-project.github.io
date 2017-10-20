function dragMoveListener(event) {
  var target = event.target,
    // keep the dragged position in the data-x/data-y attributes
    x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx,
    y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;

  // translate the element
  target.style.webkitTransform =
    target.style.transform =
    'translate(' + x + 'px, ' + y + 'px)';

  // update the posiion attributes
  target.setAttribute('data-x', x);
  target.setAttribute('data-y', y);
}

interact('.resize-drag')
  .draggable({
    // enable inertial throwing
    inertia: true,
    // keep the element within the area of it's parent
    restrict: {
      restriction: "parent",
      endOnly: true,
      elementRect: {
        top: 0,
        left: 0,
        bottom: 1,
        right: 1
      }
    },
    // enable autoScroll
    autoScroll: true,

    // call this function on every dragmove event
    onmove: dragMoveListener,
  })
  .resizable({
    preserveAspectRatio: false,
    edges: {
      left: true,
      right: true,
      bottom: true,
      top: true
    }
  })
  .on('resizemove', function(event) {
    var target = event.target,
      x = (parseFloat(target.getAttribute('data-x')) || 0),
      y = (parseFloat(target.getAttribute('data-y')) || 0);

    // update the element's style
    target.style.width = event.rect.width + 'px';
    target.style.height = event.rect.height + 'px';

    // translate when resizing from top or left edges
    x += event.deltaRect.left;
    y += event.deltaRect.top;

    target.style.webkitTransform = target.style.transform =
      'translate(' + x + 'px,' + y + 'px)';

    target.setAttribute('data-x', x);
    target.setAttribute('data-y', y);

  });


interact('.line-drag')
  .draggable({
    // enable inertial throwing
    inertia: true,
    // keep the element within the area of it's parent
    restrict: {
      restriction: "parent",
      elementRect: {
        top: 0,
        left: 0,
        bottom: 1,
        right: 1
      }
    },
    // enable autoScroll
    autoScroll: true,

    // call this function on every dragmove event
    onmove: dragMoveListener,
  })
  .on('resizemove', function(event) {
    var target = event.target,
      x = (parseFloat(target.getAttribute('data-x')) || 0),
      y = (parseFloat(target.getAttribute('data-y')) || 0);

    // translate when resizing from top or left edges
    x += event.deltaRect.left;
    y += event.deltaRect.top;

    target.style.webkitTransform = target.style.transform =
      'translate(' + x + 'px,' + y + 'px)';

    target.setAttribute('data-x', x);
    target.setAttribute('data-y', y);

  });

function createDraggableElement() {

  // Create a draggable node with the element title.
  const title = this.getAttribute("data-title");
  const div = createDraggableNode(title);

  // Add the element to the draggable area.
  const container = document.getElementById('resize-container');
  container.appendChild(div);

  // Using an if statement to check the class
  this.classList.add('disabled');
};

function removeDraggableElement() {
  const title = this.parentElement.getAttribute('data-title');
  this.parentElement.remove();

  var menuElement = document.querySelectorAll('[data-title="' + title + '"]')[0];
  menuElement.classList.remove('disabled');
}

function createDraggableNode(title) {
  const uniqId = generateUniqueId();

  var div = document.createElement('div');
  div.className = 'resize-drag text-container';
  div.style.height = '100px';
  div.id = uniqId;
  div.setAttribute('data-title', title);

  div.appendChild(createCloseButton(removeDraggableElement));

  var span = document.createElement('span');
  span.textContent = title;
  div.appendChild(span);

  return div;
};