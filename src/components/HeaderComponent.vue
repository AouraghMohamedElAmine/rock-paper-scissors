<template>
  <div
    class="
      flex
      justify-between
      items-center
      w-10/12
      md:w-6/12
      m-auto
      border border-1 border-HeaderOutline
      md:p-5
      p-3
      mt-10
      font-bold
      rounded-xl
      text-slate-200
    "
  >
    <div class="md:text-5xl text-3xl title text-white">
      <span>ROCK</span> <br />
      <span>PAPER</span> <br />
      <span>SCISSORS</span>
    </div>
    <div class="text-center bg-slate-200 md:p-5 px-5 p-2 md:px-10 rounded-lg">
      <h1 class="text-ScoreText text-2xl">Score</h1>
      <h1 class="text-DarkText text-4xl">{{ score }}</h1>
    </div>
  </div>
</template>

<script>
export default {
  created() {
    this.emitter.on("increment-score", () => {
      this.score += 5;
    });
    this.emitter.on("dencrement-score", () => {
      this.score -= 5;
    });
  },
  data() {
    return {
      score: 0,
    };
  },
};
</script>

<style>
.title {
  line-height: 80% !important;
}
.border-HeaderOutline {
  color: #606e85;
}
.text-ScoreText {
  color: #2a46c0;
}
.text-DarkText {
  color: #3b4363;
}
</style>