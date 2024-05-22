import React from "react";
import ButtonTheme from "./components/buttonTheme";
import Card from "./components/Card";
class App extends React.Component {
  constructor(props) {
    super(props);
    // Initialisation de l'état avec les informations de la personne et une variable `shows`
    this.state = {
      Person: {
        fullName: "Mbaye Diao",
        bio: "👋 Hello, I'm Mbaye Diao, 🌟Passionate about building innovative solutions.",
        imgSrc: "./IMG.jpg",
        profession: "Fullstack Developer",
      },
      shows: false,
      timeInterval: 0,
    };
    this.toggleShow = this.toggleShow.bind(this);
  }

  // Méthode appelée après que le composant a été monté sur le DOM
  componentDidMount() {
    this.intervalID = setInterval(() => {
      // Mise à jour de l'état toutes les secondes pour incrémenter `timeInterval`
      this.setState((prevState) => ({
        timeInterval: prevState.timeInterval + 1,
      }));
    }, 1000);
  }

  // Méthode appelée juste avant que le composant soit démonté du DOM
  componentWillUnmount() {
    // Nettoyage de l'intervalle pour éviter les fuites de mémoire
    clearInterval(this.intervalID);
  }

  // Méthode pour basculer l'état de `shows` (afficher/cacher l'image du profil)
  toggleShow() {
    this.setState((prevState) => ({
      shows: !prevState.shows,
    }));
  }

  render() {
    const { Person, shows, timeInterval } = this.state;
    console.log(timeInterval);
    return (
      <>
        <ButtonTheme />
        <div className="h-[100vh] flex justify-center items-center">
          <div className="flex flex-col items-center">
            {/* Affichage du profil avec condition */}
            <Card {...Person} shows={shows} />
            {/* Bouton pour afficher ou cacher l'image du profil */}
            <button className="btn btn-accent w-96 mt-20" onClick={this.toggleShow}>
              {shows
                ? "Cacher l'image du profil"
                : "Afficher l'image du profil"}
            </button>
          </div>
        </div>
      </>
    );
  }
}

export default App;
