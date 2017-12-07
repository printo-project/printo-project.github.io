<template>
  <div class="container">
    <div class="jumbotron jumbotron-fluid text-center">
      <h1 class="display-3">Tired of copy-pasting?</h1>
      <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
      <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
      <div class="card-deck">
        <div class="card">
          <img class="card-img-top" src="/static/img/background.jpg" alt="Card image cap">
          <div class="card-body">
            <h4 class="card-title">Card title</h4>
            <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            <p class="card-text">
              <small class="text-muted">Last updated 3 mins ago</small>
            </p>
          </div>
          <div class="card-footer">
            <router-link to="/builder" class="btn btn-secondary btn-lg">Go to Bar <span class="glyphicon glyphicon-arrow-right"></span></router-link>
          </div>
        </div>
        <div class="card">
          <img class="card-img-top" src="/static/img/background.jpg" alt="Card image cap">
          <div class="card-body">
            <h4 class="card-title">Card title</h4>
            <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
            <router-link to="/builder" class="btn btn-secondary btn-lg">Go to Bar</router-link>
            <p class="card-text">
              <small class="text-muted">Last updated 3 mins ago</small>
            </p>
          </div>
        </div>
        <div class="card">
          <img class="card-img-top" src="/static/img/background.jpg" alt="Card image cap">
          <div class="card-body">
            <h4 class="card-title">Card title</h4>
            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
            <router-link to="/builder" class="btn btn-secondary btn-lg">Go to Bar</router-link>
            <p class="card-text">
              <small class="text-muted">Last updated 3 mins ago</small>
            </p>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'index',
};
</script>

<style scoped>
.jumbotron {
  background-color: transparent;
}
.card {
  background-color: transparent;
}
.btn{
  float: right;
}
</style>
