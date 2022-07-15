<template>
  <v-row justify="center">
    <v-dialog v-model="state" persistent max-width="290">
      <v-card style="background: rgba(0, 0, 0, 0.7)">
        <v-card-title class="text-h5">
          Use Google's location service?
        </v-card-title>
        <v-card-text
          >Let Google help apps determine location. This means sending anonymous
          location data to Google, even when no apps are running.</v-card-text
        >
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="green darken-1"
            text
            @click="setOpenDialogTraining(false)"
          >
            Disagree
          </v-btn>
          <v-btn
            color="green darken-1"
            text
            @click="setOpenDialogTraining(false)"
          >
            Agree
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  methods: {
    ...mapMutations({
      setOpenDialogTraining: "setOpenDialogTraining",
    }),
  },
  props: ["state"],
};
</script>
