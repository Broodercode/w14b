import axios from "axios";
import { defineStore } from "pinia";
import cookies from "vue-cookies";

export const useMainStore = defineStore("main", {
  state: () => {
    return {
      playerChoice: undefined,
      computerChoice: undefined,
      playerScore: 0,
      computerScore: 0,
      drawScore: 0,
      errorMessage: undefined,
      choiceArr: [
        { name: "sun", icon: require("@/assets/sun.png") },
        { name: "snow", icon: require("@/assets/snow.png") },
        { name: "rain", icon: require("@/assets/rain.png") },
      ],
      playerCard: { name: "question", icon: require("@/assets/question.png") },
      computerCard: {
        name: "question",
        icon: require("@/assets/question.png"),
      },
    };
  },
  actions: {
    async getLogin(event) {
      let email = event.path[1].children[0].children[0].value;
      let pw = event.path[1].children[1].children[0].value;

      cookies.set("email", email);
      cookies.set("password", pw);
      axios
        .post("https://reqres.in/api/login", {
          email: email,
          password: pw,
        })
        .then((response) => console.log(response))
        .catch((error) => console.log(error));
    },
    getSun() {
      this.playerChoice = 0;

      this.getCompChoice();
      this.getOutcome();
      this.playerCard = this.choiceArr[this.playerChoice];
    },
    getSnow() {
      this.playerChoice = 1;
      this.getCompChoice();
      this.getOutcome();
      this.playerCard = this.choiceArr[this.playerChoice];
    },
    getRain() {
      this.playerChoice = 2;
      this.getCompChoice();
      this.getOutcome();
      this.playerCard = this.choiceArr[this.playerChoice];
    },
    getCompChoice() {
      let num = Math.floor(Math.random() * 3);
      this.computerChoice = num;
    },
    getOutcome() {
     let pScore = cookies.get('playerScore', this.playerScore)
     let cScore =  cookies.get('computerScore', this.computerScore)
     let dScore = cookies.get('drawScore', this.computerScore)
     this.playerScore = Number(pScore)
     this.computerScore = Number(cScore)
     this.drawScore = Number(dScore)

      if (this.playerChoice == 0 && this.computerChoice == 0) {
        this.drawScore = this.drawScore + 1;
      } else if (this.playerChoice == 0 && this.computerChoice == 1) {
        this.playerScore = this.playerScore + 1;
      } else if (this.playerChoice == 0 && this.computerChoice == 2) {
        this.computerScore = this.computerScore + 1;
      } else if (this.playerChoice == 1 && this.computerChoice == 1) {
        this.drawScore = this.drawScore + 1;
      } else if (this.playerChoice == 1 && this.computerChoice == 2) {
        this.playerScore = this.playerScore + 1;
      } else if (this.playerChoice == 1 && this.computerChoice == 0) {
        this.computerScore = this.computerScore + 1;
      } else if (this.playerChoice == 2 && this.computerChoice == 2) {
        this.drawScore = this.drawScore + 1;
      } else if (this.playerChoice == 2 && this.computerChoice == 0) {
        this.playerScore = this.playerScore + 1;
      } else if (this.playerChoice == 2 && this.computerChoice == 1) {
        this.computerScore = this.computerScore + 1;
      }
      cookies.set("playerScore", this.playerScore);
      cookies.set("computerScore", this.computerScore);
      cookies.set("drawScore", this.drawScore);
    },
  },
  getters: {},
});
