/* eslint-disable */
export default {
  methods: {
    pp(s) {
      console.log(s);
    },

    generateUniqueId() {
      const randLetter = String.fromCharCode(65 + Math.floor(Math.random() * 26));
      return randLetter + Date.now();
    },

    handleFileUpload() {
      const file = document.getElementById('fileupload').files[0];
      if (FileReader && file) {
        const reader = new FileReader();
        reader.onloadend = () => {
          document.getElementById('invoice').style.backgroundImage = `url( ${reader.result} )`;
        };

        if (file) {
          reader.readAsDataURL(file);
        }
      }
    },

    createDraggableLine() {
      // Create the draggable element.
      const div = document.createElement('div');
      div.className = 'line-drag row';
      div.id = 'header-drag';
      div.setAttribute('data-x', 0);
      div.setAttribute('data-y', this.getAttribute('data-y'));
      div.setAttribute('data-creator-id', this.id);
      div.style.transform = `translate(0px, ${this.getAttribute('data-y')}px)`;

      // Create the text span.
      const span = document.createElement('span');
      span.classList = 'col-md-4 col-md-offset-4';
      span.textContent = this.getAttribute('data-title');
      div.appendChild(span);

      // Create the close button and attach listener.
      const closeButton = this.createCloseButton(this.lineRemoveHandler);
      closeButton.classList.add('col-md-1');
      closeButton.classList.add('col-md-offset-2');
      div.appendChild(closeButton);

      // Append the element to DOM.
      document.getElementById('resize-container').appendChild(div);

      // Disable the button.
      this.classList.add('disabled');
    },

    lineRemoveHandler() {
      const parent = this.parentElement;
      document.getElementById(parent.getAttribute('data-creator-id')).classList.remove('disabled');
      parent.remove();
    },
  },
};
