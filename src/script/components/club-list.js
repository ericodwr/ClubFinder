import "./club-item.js"

class ClubList extends HTMLElement {

  constructor() {
    super()
    this.shadowDom = this.attachShadow({mode:"open"})
  }


  set clubs(clubs) {
    this._clubs = clubs
    this.render()
  }

  render() {
    this.shadowDom.innerHTML = ''
    this._clubs.forEach(club => {
      const clubElement = document.createElement('club-item')
      clubElement.club = club
      this.shadowDom.append(clubElement)
    });
  }

  renderError(messages) {
    this.shadowDom.innerHTML = `
      <style>
        .placeholder {
            font-weight: lighter;
            color: rgba(0,0,0,0.5);
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
        }
      </style>
    `
    this.shadowDom.innerHTML = `
      <h2 class = "placeholder">${messages}</h2>
    `
  }
}

customElements.define('club-list', ClubList)