import {defineStore} from 'pinia'
// import axios from 'axios'

export const useMainStore = defineStore("main", {
    state: () => {
        return {
            playerChoice: undefined,
            computerChoice: undefined,
            playerScore: 0,
            computerScore: 0,
            choiceArr: ['sun', 'snow', 'rain']
        }
    },
    actions: {
        getSun() {
            this.playerChoice = 0
            console.log(this.playerChoice)
            console.log(`Player choose ${this.choiceArr[this.playerChoice]}`)
            this.getCompChoice()
            this.getOutcome()
        },
        getSnow() {
            this.playerChoice = 1
            console.log(this.playerChoice)
            console.log(`Player choose ${this.choiceArr[this.playerChoice]}`)
            this.getCompChoice()
            this.getOutcome()
        },
        getRain() {
            this.playerChoice = 2
            console.log(this.playerChoice)
            console.log(`Player choose ${this.choiceArr[this.playerChoice]}`)
            this.getCompChoice()
            this.getOutcome()
        },
        getCompChoice() {
            let num = Math.floor(Math.random() * 3)
            this.computerChoice = num
            console.log(`The Computer num is ${num}`)
            console.log(`Computer choose ${this.choiceArr[this.computerChoice]}`)
        },
        getOutcome() {
            if (this.playerChoice == 0 && this.computerChoice == 0) {
                console.log(`Draw`)
            } else if (this.playerChoice == 0 && this.computerChoice == 1) {
                console.log('player wins')
                this.playerScore = this.playerScore+ 1
                console.log(`Player Score: ${this.playerScore}, Computer Score: ${this.computerScore}`)
            }  else if (this.playerChoice == 0 && this.computerChoice == 2) {
                console.log('player loses')
                this.computerScore = this.computerScore+ 1
                console.log(`Player Score: ${this.playerScore}, Computer Score: ${this.computerScore}`)
                
            } 
             else if (this.playerChoice == 1 && this.computerChoice == 1) {
                console.log('draw')
            } else if (this.playerChoice == 1 && this.computerChoice == 2) {
                console.log('player wins')
                this.playerScore = this.playerScore+ 1
                console.log(`Player Score: ${this.playerScore}, Computer Score: ${this.computerScore}`)
            }  else if (this.playerChoice == 1 && this.computerChoice == 0) {
                console.log('player loses')
                this.computerScore = this.computerScore+ 1
                console.log(`Player Score: ${this.playerScore}, Computer Score: ${this.computerScore}`)
            } 
             else if (this.playerChoice == 2 && this.computerChoice == 2) {
                console.log('draw')
            } else if (this.playerChoice == 2 && this.computerChoice == 0) {
                console.log('player wins')
                this.playerScore = this.playerScore + 1
                console.log(`Player Score: ${this.playerScore}, Computer Score: ${this.computerScore}`)
            }  else if (this.playerChoice == 2 && this.computerChoice == 1) {
                console.log('player loses')
                this.computerScore = this.computerScore+ 1
                console.log(`Player Score: ${this.playerScore}, Computer Score: ${this.computerScore}`)
            } 
        } 
    },
    getters: {}
})