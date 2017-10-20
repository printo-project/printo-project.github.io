Element.prototype.remove = function() {
  this.parentElement.removeChild(this);
}
NodeList.prototype.remove = HTMLCollection.prototype.remove = function() {
  for (var i = this.length - 1; i >= 0; i--) {
    if (this[i] && this[i].parentElement) {
      this[i].parentElement.removeChild(this[i]);
    }
  }
}

function pp(s) {
  console.log(s);
}

function addEventListener(elementClass, event, callback) {
  const elements = document.getElementsByClassName(elementClass);
  for (var i = 0; i < elements.length; i++) {
    elements[i].addEventListener(event, callback);
  }
}

function generateUniqueId() {
  var randLetter = String.fromCharCode(65 + Math.floor(Math.random() * 26));
  return randLetter + Date.now();
}
function createCloseButton(clickHandler) {
  var closeButton = document.createElement('a');
  closeButton.className = 'close';
  closeButton.innerHTML = '&times;';
  closeButton.addEventListener('click', clickHandler)
  return closeButton;
}

function handleFileUpload() {
  var file = document.getElementById("fileupload").files[0];
  if (FileReader && file) {
    var reader = new FileReader();
    reader.onloadend = function() {
      document.getElementById('invoice').style.backgroundImage = "url(" + reader.result + ")";
    }

    if (file) {
      reader.readAsDataURL(file);
    }
  }
}

function createDraggableLine() {

  // Create the draggable element.
  var div = document.createElement('div');
  div.className = 'line-drag row';
  div.id = 'header-drag';
  div.setAttribute('data-x', 0);
  div.setAttribute('data-y', this.getAttribute('data-y'));
  div.setAttribute('data-creator-id', this.id);
  div.style.transform = 'translate(0px, ' + this.getAttribute('data-y') + 'px)';

  // Create the text span.
  var span = document.createElement('span');
  span.classList = 'col-md-4 col-md-offset-4';
  span.textContent = this.getAttribute('data-title');
  div.appendChild(span);

  // Create the close button and attach listener.
  var closeButton = createCloseButton(lineRemoveHandler);
  closeButton.classList.add('col-md-1');
  closeButton.classList.add('col-md-offset-2');
  div.appendChild(closeButton);

  // Append the element to DOM.
  document.getElementById('resize-container').appendChild(div);

  // Disable the button.
  this.classList.add('disabled');
}

function lineRemoveHandler(){
  var parent = this.parentElement;
  document.getElementById(parent.getAttribute('data-creator-id')).classList.remove('disabled');
  parent.remove();
}