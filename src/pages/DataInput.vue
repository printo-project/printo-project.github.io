<template>
  <div class="container">
    <h1 align="center" class="display-3">What should we fill {{(entries.length == 1) ? 'it' : 'them'}} with?
    </h1>
    <table class="table table-bordered">
      <thead>
        <tr>
          <th>#</th>
          <th v-for="(item,index) in items" :key="index">
            {{item.name}}
          </th>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(entry,index) in entries" :key="index">
          <td scope="row">
            <b>{{(index + 1) + '-'}}</b>
          </td>
          <td v-for="(item,index) in items" :key="index">
            <input type="text" class="form-control" v-model="entry[item.name]">
          </td>
          <td>
            <button v-bind:style="{'visibility': (entries.length == 1) ? 'hidden' : 'visible' }" class="btn btn-danger" @click="deleteEntry(index)">-</button>
          </td>
          <td>
            <button v-if="index == entries.length - 1" class="btn btn-success" @click="addNewEntry()">+</button>
          </td>

        </tr>
      </tbody>
    </table>

  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'DataInput',
  data() {
    return {
      name: 'Name',
      entries: [],
    };
  },
  computed: mapState({
    items: state => state.draggable.items,
  }),
  methods: {
    addNewEntry() {
      const newEntry = {};
      let i;
      for (i = 0; i < this.items.length; i += 1) {
        if (i !== 0) {
          newEntry[this.items[i].name] = '';
        }
      }
      this.entries.push(newEntry);
    },
    deleteEntry(index) {
      this.entries.splice(index, 1);
    },
  },
  mounted() {
    this.addNewEntry();
  },
};
</script>

<style scoped>
button {
  cursor: pointer;
  width: 40px;
}
th{
  text-align: center;
}
h1{
  padding-top: 5vh;
  padding-bottom: 5vh;
}
</style>
