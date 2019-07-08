//imports dependencies and files
import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import Card from "./components/Cards";
import puppy from "./puppy.json";
import "./App.css";

class App extends Component {
  state = {
    puppy,
    clickedPuppy: [],
    score: 0,
    highscore: 0
  };

  imageClick = event => {
    let currentHighScore = this.state.highscore;
    const currentPuppy = event.target.alt;
    const PuppyAlreadyClicked =
      this.state.clickedPuppy.indexOf(currentPuppy) > -1;

    if (PuppyAlreadyClicked) {
      if (this.state.score > currentHighScore) {
        currentHighScore = this.state.score
      } this.setState({
        puppy: this.state.puppy.sort(function(a, b) {
          return 0.5 - Math.random();
        }),
        highscore: currentHighScore,
        clickedPuppy: [],
        score: 0
      });
        alert("You lost. Would you like to play again?");
      
    } else {
      this.setState(
        {
          puppy: this.state.puppy.sort(function(a, b) {
            return 0.5 - Math.random();
          }),
          clickedPuppy: this.state.clickedPuppy.concat(
            currentPuppy
          ),
          score: this.state.score + 1,
        },
        
        () => {
          if (this.state.score === 12) {
            alert("Yay! You Win!");
            this.setState({
              puppy: this.state.puppy.sort(function(a, b) {
                return 0.5 - Math.random();
              }),
              clickedPuppy: [],
              score: 0,
              highscore: 0
            });
          }
        }
      );
    }
  };

  render() {
    return (
      <div>
        <Navbar 
          score={this.state.score}
          highscore={this.state.highscore}
        />
        <Jumbotron/>
        <div className="wrapper">
          {this.state.puppy.map(puppy => (
            <Card
              imageClick={this.imageClick}
              id={puppy.id}
              key={puppy.id}
              image={puppy.image}
            />
          ))}
        </div>
      </div>
    );
  }
}
export default App;
