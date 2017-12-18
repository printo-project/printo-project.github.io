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
            <button v-bind:style="{'visibility': (entries.length == 1) ? 'hidden' : 'visible' }" class="btn btn-danger" @click="deleteEntry(index);changeState()">-</button>
          </td>
          <td>
            <button v-if="index == entries.length - 1" class="btn btn-success" @click="addNewEntry();testState()">+</button>
          </td>

        </tr>
      </tbody>
    </table>
    <div class="row">
      <div class="col-md-1 offset-md-11" @click="saveEntries()">
        <router-link to="/builder/print" class="btn btn-success">
          <i class="fa fa-floppy-o" aria-hidden="true"></i> Save
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import { mapState, mapActions } from 'vuex';
import axios from 'axios';

export default {
  name: 'DataInput',
  data() {
    return {
      name: 'Name',
      entries: [],
      states: [],
    };
  },
  computed: mapState({
    items: state => state.draggable.items,
    state: state => state,
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
    testState() {
      this.states.push(this.state);
      console.log(this.state);
    },
    changeState() {
      this.setState(this.states[0]);
    },
    deleteEntry(index) {
      this.entries.splice(index, 1);
    },
    saveEntries() {
      this.setEntries(this.entries);
    },
    ...mapActions(['setEntries','setState']),
  },
  mounted() {
    this.addNewEntry();
  },
};
</script>

<style scoped>
button:not(#save-button) {
  cursor: pointer;
  width: 40px;
}
th {
  text-align: center;
}
h1 {
  padding-top: 5vh;
  padding-bottom: 5vh;
}
</style>
