<template>
  <div class="container">
    <div class="jumbotron jumbotron-fluid text-center">
      <h1 class="display-3">Tired of copy-pasting?</h1>
      <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
      <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
      <div class="card-deck">
        <div class="card">
          <img class="card-img-top" src="/static/img/wedding.jpg" alt="Card image cap">
          <div class="card-body">
            <div class="row">
              <div class="col-md-8">
                <h5>Wedding Invitation</h5>
              </div>
              <div class="col-md-4">
                <router-link to="/builder" class="btn btn-secondary btn-sm">Start Now
                  <i class="fa fa-arrow-right" aria-hidden="true"></i>
                </router-link>
              </div>
            </div>
          </div>
        </div>
        <div class="card">
          <img class="card-img-top" src="/static/img/invoice.jpg" alt="Card image cap">
          <div class="card-body">
            <div class="row">
              <div class="col-md-8">
                <h5>Invoice</h5>
              </div>
              <div class="col-md-4">
                <router-link to="/builder" class="btn btn-secondary btn-sm">Start Now
                  <i class="fa fa-arrow-right" aria-hidden="true"></i>
                </router-link>
              </div>
            </div>
          </div>
        </div>
        <div class="card">
          <img class="card-img-top" src="/static/img/background.jpg" alt="Card image cap">
          <div class="card-body">
            <div class="row">
              <div class="col-md-8">
                <h5>Wedding Invitation</h5>
              </div>
              <div class="col-md-4">
                <router-link to="/builder" class="btn btn-secondary btn-sm">Start Now
                  <i class="fa fa-arrow-right" aria-hidden="true"></i>
                </router-link>
              </div>
            </div>
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
.btn {
  float: right;
}
h4{
  margin-bottom: 0;
}
i {
  margin-left: 2vh;
}
</style>
