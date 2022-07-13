<template>
  <div>
    <typeNav />
    <listContainer />
    <recommend />
    <rank />
    <like />
    <floor v-for="floor in floorList" :key="floor.id" :list="floor" />
    <brand />
  </div>
</template>

<script>
import listContainer from "@/pages/Home/listContainer";
import recommend from "@/pages/Home/recommend";
import rank from "@/pages/Home/rank";
import like from "@/pages/Home/like";
import floor from "@/pages/Home/floor";
import brand from "@/pages/Home/brand";
import { mapState } from "vuex";

export default {
  name: "",
  components: {
    listContainer,
    recommend,
    rank,
    like,
    floor,
    brand,
  },
  mounted() {
    this.$store.dispatch("getFloorList");
  },
  computed: {
    ...mapState({
      floorList: (state) => state.home.floorList,
    }),
  },
};
</script>

<style>
</style>