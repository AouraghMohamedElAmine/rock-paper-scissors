<template>
  <div>
    <div
      class="
        flex
        justify-center
        md:justify-end md:mr-10
        mt-10
        md:mt-4
        text-slate-200
      "
    >
      <div class="modal-vue">
        <!-- button show -->

        <button
          class="border-2 mb-4 rounded-lg px-10 p-1"
          @click="showModal = true"
        >
          RULES
        </button>

        <!-- overlay -->
        <div class="overlay" v-if="showModal" @click="showModal = false"></div>

        <!-- modal -->
        <div class="modal" v-if="showModal">
          <div>
            <div class="flex mb-10 justify-between items-center">
              <div id="rule-title" class="text-slate-400 font-bold text-3xl">
                RULES
              </div>

              <button class="close" @click="showModal = false">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20">
                  <path
                    fill="#3B4262"
                    fill-rule="evenodd"
                    d="M16.97 0l2.122 2.121-7.425 7.425 7.425 7.425-2.121 2.12-7.425-7.424-7.425 7.425L0 16.97l7.425-7.425L0 2.121 2.121 0l7.425 7.425L16.971 0z"
                    opacity=".25"
                  />
                </svg>
              </button>
            </div>

            <img :src="rules" class="img" alt="rules" />
          </div>
          <div class="text-center my-4"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import rules from "../assets/images/image-rules.png";
export default {
  data() {
    return {
      showModal: false,
      rules: rules,
    };
  },
};
</script>

<style scoped>
.rules {
  background-image: url("../assets/images/image-rules.png");
}
#rule-title {
  color: #2a46c0;
}
.modal-vue .overlay {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
}

.modal-vue .modal {
  position: absolute;
  top: 10vh;
  left: 33vw;
  width: 30vw;
  color: #000;
  height: 30vw;
  z-index: 9999;
  margin: 0 auto;
  padding: 50px;
  background-color: #fff;
}

.modal-vue .close {
  top: 10px;
  right: 10px;
}
.img {
  width: 100%;
  height: 100%;
}

@media only screen and (max-width: 600px) {
  .modal-vue .overlay {
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
  }

  .modal-vue .modal {
    position: absolute;
    top: 10vh;
    left: 10vw;
    width: 80vw;
    color: #000;
    height: 60vh;
    z-index: 9999;
    margin: 0 auto;
    padding: 50px;
    background-color: #fff;
  }
}
</style>