<template>
  <section style="display: flex">
    <div class="left">
      <div class="model">
        <Model />
      </div>
    </div>
    <div class="right">
      <v-card style="background: rgba(0, 0, 0, 0.3); margin: 1vw">
        <SingleLineChart />
      </v-card>
      <v-card style="background: rgba(0, 0, 0, 0.3); margin: 1vw">
        <BarChartHorizontal />
      </v-card>
      <ButtonTraining />
    </div>
    <DialogTraining :state="openDialogTraining" />
  </section>
</template>

<script>
import Model from "~/components/Model";
import SingleLineChart from "~/components/SingleLineChart.vue";
import BarChartHorizontal from "~/components/BarChartHorizontal.vue";
import ButtonTraining from "~/components/ButtonTraining.vue";
import DialogTraining from "~/components/DialogTraining.vue";
import Logo from "~/components/Logo.vue";
import VuetifyLogo from "~/components/VuetifyLogo.vue";

import { mapState } from "vuex";
export default {
  transition: {
    name: "home",
    mode: "out-in",
  },
  components: {
    Model,
    SingleLineChart,
    BarChartHorizontal,
    ButtonTraining,
    DialogTraining,
    Logo,
    VuetifyLogo,
  },
  computed: {
    ...mapState({
      openDialogTraining: (state) => state.openDialogTraining,
    }),
  },
  async mounted() {
    this.socket = this.$nuxtSocket({
      channel: "/index",
    });
    /* Listen for events: */
    this.socket.on("test", (msg, cb) => {
      /* Handle event */
      // socket.emit("test", "hello");
      console.log(msg);
    });
    this.socket.on("error", (msg, cb) => {
      /* Handle event */
      // console.log(msg);
    });
    this.socket.emit("test", "HELLo");
  },
};
</script>

<style lang="scss">
.home-enter-active,
.home-leave-active {
  transition: opacity 0.5s;
}
.home-enter,
.home-leave-active {
  opacity: 0;
}
.left {
  width: 60vw !important;
  height: calc(100vh - 46px - 10vh);
}
.right {
  width: 40vw !important;
  height: calc(100vh - 46px - 10vh);
}
.model {
  @include frame-border;
  // width: 60vw !important;
  margin: 1vh;
  // height: 80vh;
  height: calc(100vh - 65px);
  // height: calc(80vh + 20px);
  overflow: hidden;
}
</style>
