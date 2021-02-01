<template>
  <div>
    <section class="action">
      <input type="text" name="" id="" v-model="title" />
      <button @click="handleAddItemClick">handleAddItemClick</button>
    </section>
    <ul>
      <li v-for="(item, index) in list" :key="index">
        <input type="checkbox" @click="handleClick(index)" />{{ item.title }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Key",
  data() {
    return {
      title: "",
      id: 3,
      list: [
        {
          id: 0,
          title: "index是0",
        },
        {
          id: 1,
          title: "index是1",
        },
        {
          id: 2,
          title: "index是2",
        },
      ],
    };
  },
  methods: {
    handleAddItemClick() {
      this.list.unshift({
        id: ++this.id,
        title: this.title,
      });
    },
    handleClick(index){
        this.list.splice(index,1)
    }
  },
  mounted() {},
};
</script>
<style scoped lang="scss"></style>
