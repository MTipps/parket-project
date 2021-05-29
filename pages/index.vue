<template>
  <div class="home">Home</div>
</template>

<script>
export default {
  mounted() {
    console.log('MOUNTED')
    console.log(this.$store.state.bearerToken)
    this.retrieveBuildings()
    console.log(this.$store.state.buildings)
  },
  methods: {
    async retrieveBuildings() {
      await this.$store.dispatch('getBuildings')
    },
  },
}
</script>
