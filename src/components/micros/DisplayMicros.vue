<template>
    <tiles></tiles>
    <hero></hero>
</template>

<script>
import Tiles from './Tiles.vue';
import Hero from './Hero.vue';

export default {
  components: {
    Tiles,
    Hero
  },
  data() {
    return {
      selectedTab: 'tiles',
      storedResources: [
        {
          id: '1',
          tileHeight: 300,
          title: 'New Hampshire',
          description: 'A U.S. state in New England, is defined by its quaint towns and large expanses of wilderness.',
          link: 'https://en.wikipedia.org/wiki/New_Hampshire',
          background: "#08718c"
        },
        {
          id: '2',
          tileHeight: 300,
          title: 'Maine',
          description: 'The northeasternmost U.S. state, is known for its rocky coastline, maritime history and nature areas like the granite and spruce islands of Acadia National Park. ',
          link: 'https://en.wikipedia.org/wiki/Maine',
          background: "#02232c"
        },
        {
          id: '3',
          tileHeight: 300,
          title: 'Massachusetts',
          description: 'officially known as the Commonwealth of Massachusetts, is the most populous state in the New England region of the northeastern United States.',
          link: 'https://en.wikipedia.org/wiki/Maine',
          background: "#02161c"
        }
      ],
      heroData: [
        {
          id: '1',
          heroHeight: 800,
          title: 'New England',
          description: 'New England is a northeastern region of the United States comprising the states of Maine, Vermont, New Hampshire, Massachusetts, Connecticut and Rhode Island. It&#44;s known for its Colonial past, Atlantic coastline, changing autumn foliage and forested mountains. Boston, Massachusetts, the region&#44;s hub, pre-dates the American Revolution, and its Freedom Trail passes sites that were critical to the nation&#44;s founding.',
          link: 'https://en.wikipedia.org/wiki/New_Hampshire',
          background: "#29896f"
        }
      ],
    };
  },
  provide() {
    return {
      resources: this.storedResources,
      heroData: this.heroData,
    };
  },
};
</script>