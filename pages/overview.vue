<template>
  <section>
    <!-- <Header header="OVERVIEW" /> -->
    <v-row class="mx-2" style="margin-top: 1vh">
      <!-- <v-col cols="4">
        <Summary />
      </v-col>
      <v-col cols="4">
        <Summary />
      </v-col>
      <v-col cols="4">
        <Summary />
      </v-col> -->
      <v-col v-for="(summary, index) in summaryCard" :key="index" cols="3">
        <Summary
          :icon="summary.icon"
          :description="summary.text"
          :data="summary.data"
          :classIn="summary.class"
        />
      </v-col>
    </v-row>
    <div style="width: 100vw; display: flex; margin-top: 2vh">
      <div class="left mx-5">
        <v-card
          class="mb-2 rounded-lg"
          style="background: rgba(0, 0, 0, 0.5); width: 100%"
        >
          <v-card-subtitle
            class="sidebar rounded-lg pt-3 pb-3 pl-10"
            style="color: white"
          >
            Sessions
          </v-card-subtitle>
          <div style="min-height: 58vh">
            <Status />
          </div>
        </v-card>
        <div class="mt-4">
          <Button />
        </div>
      </div>
      <div class="right mx-5" style="flex-direction: column">
        <v-card class="mb-5 rounded-lg" style="background: rgba(0, 0, 0, 0.5)">
          <SingleLineChartPerformance />
        </v-card>

        <v-card style="background: rgba(0, 0, 0, 0.5)" class="rounded-lg">
          <v-card-subtitle
            class="sidebar rounded-lg pt-3 pb-3 pl-10"
            style="color: white"
          >
            Attempts
          </v-card-subtitle>
          <div style="display: flex">
            <div
              style="
                width: 15vw;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
              "
            >
              <v-card-subtitle style="font-size: 2em"> 200 </v-card-subtitle>
              <v-card-subtitle style="font-size: 1.4em">
                Attempts
              </v-card-subtitle>
            </div>
            <Pie />
          </div>
        </v-card>
      </div>
    </div>
  </section>
</template>

<script>
import { mapState } from "vuex";
import Header from "~/components/Header";
import Summary from "~/components/Summary";
import Status from "~/components/Status.vue";
import SingleLineChartPerformance from "~/components/SingleLineChartPerformance.vue";
import Pie from "~/components/Pie.vue";
import Button from "~/components/Button.vue";
export default {
  layout: "default",
  components: {
    Header,
    Summary,
    Status,
    SingleLineChartPerformance,
    Pie,
    Button,
  },
  computed: {
    ...mapState({
      summaryCard: (state) => state.summaryCard,
    }),
  },
};
</script>

<style scoped>
.left {
  width: 60vw;
  height: calc(75vh);
  min-height: calc(75vh);
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  /* align-items: center; */
  overflow: hidden;
}
.right {
  width: 40vw;
  /* display: flex;
  justify-content: center;
  align-items: center; */
}
</style>
>
