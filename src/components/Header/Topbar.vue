<template>
  <div class="row header">
    <div class="col-md-2 offset-md-1">
      <image-upload />
    </div>
    <p class="text-uppercase font-weight-light d-flex align-items-lg-end" style="margin-left:2.5%;">OR</p>
    <div class="col-md-1">
      <button class="btn btn-primary" type="button" data-toggle="collapse" data-target="#collapse-templates" aria-expanded="false" aria-controls="collapseExample">
        <i class="fa fa-clone" aria-hidden="true"></i> Use our templates
      </button>
    </div>

    <div class="col-md-6">
      <div class="float-right">
        <select v-model="sIndex" @change="setState(states[sIndex])">
          <option v-for="(state,index) in states" :key="index" :value="index">{{index == 0 ? "New Template" : index}}</option>
        </select>
        <button class="btn btn-success" @click="saveState()">
          <i class="fa fa-floppy-o" aria-hidden="true"></i> Save
        </button>
        <remove-buttons :disabled="noItemsExist" />
        <save-button :disabled="noItemsExist" />
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import { mapState, mapActions } from 'vuex';
import ImageUpload from './ImageUpload';
import RemoveButtons from './RemoveButtons';
import SaveButton from './SaveButton';
import axios from 'axios';

export default {
  name: 'Topbar',
  data() {
    return {
      states: [],
      sIndex: 0,
    };
  },
  components: {
    ImageUpload,
    RemoveButtons,
    SaveButton,
  },
  computed: {
    noItemsExist() {
      return !(this.draggableItems.length > 0 || this.background !== '');
    },
    ...mapState({
      buttons: state => state.topbar.buttons,
      draggableItems: state => state.draggable.items,
      background: state => state.page.background,
      state: state => state,
    }),
  },
  methods: {
    saveState() {
      axios
        .post('/layouts', JSON.stringify(this.state))
        .then(function(response) {
          console.log(response);
        })
        .catch(function(error) {
          console.log(error);
        });
      this.states.push(JSON.parse(JSON.stringify(this.state)));
      this.sIndex = this.states.length - 1;
    },
    ...mapActions(['setState']),
  },
  created() {
    axios.defaults.baseURL = 'http://165.227.160.150/api';
    axios
      .get('/layouts')
      .then(response => {
        this.states = response.data;
        this.states.unshift(JSON.parse(JSON.stringify(this.state)));
        this.sIndex = 0;
      })
      .catch(error => {
        console.log(error);
      });
  },
};
</script>

<style>
.header {
  margin-top: 24px;
  margin-bottom: 24px;
}

.btn-danger {
  border: none;
}

.seperator {
  text-align: center;
}
button {
  cursor: pointer;
}
</style>
