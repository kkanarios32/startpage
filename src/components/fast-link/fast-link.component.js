class FastLink extends Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  imports() {
    return [];
  }

  style() {
    return `
      :host {
        display: contents;
      }

      .fast-link {
          border: 0;
          background: var(--nord2);
          color: var(--nord4);
          cursor: pointer;
          width: 30px;
          height: 30px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: 5px 15px 15px 5px;
          margin-top: 1px;
      }

      .fast-link:hover {
          filter: brightness(1.2);
      }

      .fast-link-icon {
          width: 24px;
          height: 24px;
      }
    `;
  }

  template() {
    return `
      <button class="+ fast-link">
        <img class="fast-link-icon" src="src/img/openai.png"/>
      </button>
    `;
  }

  activate() {
    this.handleClick();
  }

  handleClick() {
    if (CONFIG.config.fastLink) {
      window.location.href = CONFIG.config.fastLink;
    }
  }

  setEvents() {
    const button = this.querySelector('.fast-link');
    if (button) {
      button.onclick = this.handleClick;
    }
  }

  connectedCallback() {
    this.render().then(() => {
      this.setEvents();
    });
  }
}

customElements.define('fast-link', FastLink);
