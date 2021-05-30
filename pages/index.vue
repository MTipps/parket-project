<template>
  <v-container>
    <v-row>
      <v-col>
        <h2>Buildings</h2>
        <h4 class="subtitle-1 text--secondary">
          A list of all the buildings you own (click on a building to see the
          parking bays)
        </h4>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-data-table
          :headers="buildingHeaders"
          :items="buildings"
          hide-default-footer
          :loading="buildings.length === 0"
          loading-text="Loading your buildings..."
          @click:row="retrieveParkingBays"
        ></v-data-table>
      </v-col>
    </v-row>

    <v-row v-show="Object.keys(selectedBuilding).length !== 0">
      <v-col>
        <h2>Parking Bays</h2>
        <h4 class="subtitle-1 text--secondary">
          A list of all the parking bays for {{ selectedBuilding.name }}
        </h4>
      </v-col>
    </v-row>
    <v-row v-show="Object.keys(selectedBuilding).length !== 0">
      <v-col>
        <v-data-table
          :headers="parkingBayHeaders"
          :items="parkingBays"
          hide-default-footer
          :loading="parkingBays.length === 0"
          loading-text="Loading your parking bays..."
        ></v-data-table>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      buildingHeaders: [
        {
          text: 'Building Name',
          value: 'name',
        },
        {
          text: 'Building Address',
          value: 'address',
        },
      ],
      parkingBayHeaders: [
        {
          text: 'Parking Name',
          value: 'name',
        },
        {
          text: 'Parking Level',
          value: 'level',
        },
      ],
      buildings: this.$store.state.buildings,
      selectedBuilding: {},
      parkingBays: this.$store.state.parkingBays,
    }
  },
  mounted() {
    this.retrieveBuildings()
  },
  methods: {
    async retrieveBuildings() {
      await this.$store.dispatch('getBuildings')
    },
    async retrieveParkingBays(building) {
      this.selectedBuilding = building
      await this.$store.dispatch('getParkingBays', {
        slug: building.bslug,
      })
    },
  },
}
</script>
