<template>
  <baidu-map class="bm-view" label="动心" :center="center" :zoom="zoom" @ready="handler" ak="ZRTTCAdUZS5w0dQeLhdEqZyz9PviTdZn" :scroll-wheel-zoom="true" :autoLocation="true">
    <bm-marker :position="center" :dragging="true" animation="BMAP_ANIMATION_BOUNCE">
      <bm-label content="东信昆辰科技" :labelStyle="{color: 'red', fontSize : '24px'}" />
    </bm-marker>  </baidu-map>
</template>
<script>
import BaiduMap from 'vue-baidu-map/components/map/Map.vue'
import {BmMarker} from 'vue-baidu-map'
export default {
  components: {
    BaiduMap,
    BmMarker
  },
  data () {
    return {
      center: {lng: 120.151908, lat: 30.184036},
      zoom: 20
    }
  },
  methods: {
    handler ({BMap, map}) {
    }
  }
}
</script>
<style scoped>
  .bm-view {
    width: 100%;
    height: 400px;
  }
</style>
