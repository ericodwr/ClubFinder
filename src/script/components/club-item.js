class ClubItem extends HTMLElement {
  constructor() {
    super();
    this.shadowDom = this.attachShadow({ mode: 'open' });
  }

  set club(club) {
    this._club = club;
    this.render();
  }

  render() {
    this.shadowDom.innerHTML = `
      <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        :host {
            display: block;
            margin-bottom: 18px;
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
            border-radius: 10px;
            overflow: hidden;
        }
      
        .fan-art-club {
            margin-top:2rem;
            width: 100%;
            height: 300px;
            display:flex;
            justify-content:center;
        }
        img {
          width:auto;
          height:auto;
        }

      
        .club-info {
            padding: 24px;
        }
      
        .club-info > h2 {
            font-weight: lighter;
        }
      
        .club-info > p {
            margin-top: 10px;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 10; /* number of lines to show */
        }
      </style>
      <div class="fan-art-club">
      <img  src="${this._club.strTeamBadge}" alt="Fan Art">
      </div>
           <div class="club-info">
               <h2>${this._club.strTeam}</h2>
               <p>${this._club.strDescriptionEN}</p>
           </div>;
    `;
  }
}

customElements.define('club-item', ClubItem);
