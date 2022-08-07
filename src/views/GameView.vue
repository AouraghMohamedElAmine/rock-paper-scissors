<template>
  <div>
    <div
      class="
        flex
        justify-evenly
        items-center
        w-10/12
        md:8/12
        m-auto
        md:mt-10
        container
      "
    >
      <div
        class="
          text-center
          w-3/6
          md:w-2/6
          text-slate-200 text-3xl
          md:flex-col
          flex flex-col-reverse
        "
      >
        <div class="md:my-10 my-4 text-xl md:text-3xl">You Picked</div>
        <div
          v-if="playerChoice == 'rock'"
          class="circle rock flex justify-center items-center m-auto"
        >
          <img :src="rock" />
        </div>
        <div
          v-if="playerChoice == 'paper'"
          class="circle paper flex justify-center items-center m-auto"
        >
          <img :src="paper" />
        </div>
        <div
          v-if="playerChoice === 'scissor'"
          class="circle scissor flex justify-center items-center m-auto"
        >
          <img :src="scissors" />
        </div>
      </div>

      <div
        v-if="this.message"
        class="text-center mb-4 md:w-2/6 md:block hidden"
      >
        <div class="text-white text-center m-auto text-5xl font-bold my-4">
          {{ this.message }}
        </div>
        <div>
          <button
            @click="$router.push('/')"
            class="bg-slate-200 w-8/12 text-xl py-3 font-bold rounded-md"
          >
            PLAY AGAIN
          </button>
        </div>
      </div>
      <div
        class="
          text-center
          w-3/6
          md:w-2/6
          text-slate-200 text-3xl
          flex flex-col-reverse
          md:flex-col
        "
      >
        <div class="md:my-10 my-4 text-xl md:text-3xl">The House Picked</div>
        <div
          v-show="!pcChoice"
          class="circle empty-circle flex justify-center items-center m-auto"
        ></div>
        <div
          v-show="randomNumber === 1"
          class="circle rock flex justify-center items-center m-auto"
        >
          <img :src="pcChoice" />
        </div>
        <div
          v-show="randomNumber === 2"
          class="circle paper flex justify-center items-center m-auto"
        >
          <img :src="pcChoice" />
        </div>
        <div
          v-show="randomNumber === 3"
          class="circle scissor flex justify-center items-center m-auto"
        >
          <img :src="pcChoice" />
        </div>
      </div>
    </div>
    <div v-if="this.message" class="text-center mb-4 md:hidden">
      <div class="text-white text-center m-auto text-5xl font-bold w-6/12 my-1">
        {{ this.message }}
      </div>
      <div>
        <button
          @click="$router.push('/')"
          class="bg-slate-200 w-6/12 text-xl py-3 font-bold rounded-md"
        >
          PLAY AGAIN
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import rock from "../assets/images/icon-rock.svg";
import paper from "../assets/images/icon-paper.svg";
import scissors from "../assets/images/icon-scissors.svg";

export default {
  name: "MainView",
  methods: {
    chooseForPc(playerChoice) {
      setTimeout(() => {
        this.randomNumber = Math.floor(Math.random() * 3) + 1;
        switch (this.randomNumber) {
          case 1:
            this.pcChoice = this.rock;
            break;
          case 2:
            this.pcChoice = this.paper;

            break;
          case 3:
            this.pcChoice = this.scissors;
            break;

          default:
            break;
        }

        if (
          (playerChoice == "rock" && this.randomNumber == 1) ||
          (playerChoice == "paper" && this.randomNumber == 2) ||
          (playerChoice == "scissor" && this.randomNumber == 3)
        ) {
          console.log(playerChoice + this.randomNumber + "1");
          this.isTie = true;
          this.message = "IT'S A TIE";
        }

        if (
          (playerChoice == "rock" && this.randomNumber == 3) ||
          (playerChoice == "scissor" && this.randomNumber == 2) ||
          (playerChoice == "paper" && this.randomNumber == 1)
        ) {
          console.log(playerChoice + this.randomNumber + "2");
          this.message = "YOU WON";
          this.isWinner = true;
          this.emitter.emit("increment-score");
        } else if (
          (playerChoice == "rock" && this.randomNumber == 2) ||
          (playerChoice == "paper" && this.randomNumber == 1) ||
          (playerChoice == "scissor" && this.randomNumber == 1) ||
          (playerChoice == "paper" && this.randomNumber == 3)
        ) {
          this.isLoser = true;
          this.message = "YOU LOST";
          this.emitter.emit("dencrement-score");
        }

        console.log(
          "loser : " +
            this.isLoser +
            "  tie : " +
            this.isTie +
            "  winner : " +
            this.isWinner
        );
      }, 1000);
      setTimeout(() => {
        console.log(this.message);
      }, 2000);
    },
  },
  mounted() {
    this.playerChoice = this.$route.params.player;
    this.chooseForPc(this.$route.params.player);
  },
  data() {
    return {
      playerChoice: null,
      pcChoice: null,
      randomNumber: null,
      message: "",
      isWinner: false,
      isLoser: false,
      isTie: false,
      rock,
      paper,
      scissors,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  min-height: 50vh;
}
.circle {
  border-radius: 50%;
  width: 20vw;
  height: 20vw;
}
img {
  height: 80px;
  width: 80px;
}
.rock {
  border-radius: 50%;
  background: rgb(226 232 240);
  border: 30px solid hsl(349, 71%, 52%);
}
.paper {
  border-radius: 50%;
  background: rgb(226 232 240);
  border: 30px solid hsl(230, 89%, 62%);
}
.scissor {
  background: rgb(226 232 240);
  border-radius: 50%;
  border: 30px solid hsl(39, 89%, 49%);
}
.empty-circle {
  border-radius: 50%;
  background: hsl(214, 63%, 16%);
  border: none;
}

@media only screen and (max-width: 600px) {
  img {
    transform: scale(0.5);
  }
  .container {
    min-height: 40vh;
  }
  .circle {
    border-radius: 50%;
    width: 30vw;
    height: 30vw;
    border-width: 10px;
    border-style: solid;
  }
}
</style>
