<template>
  <div>Hello World {{ status }} - {{ page }}</div>
</template>

<script>
import { list } from '@/api/user'

export default {
  async asyncData() {
    var data = await list(5);
    return data;
  },
}
</script>
