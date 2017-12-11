<template>
  <div class="container">
    <div class="jumbotron jumbotron-fluid text-center">
      <img id="logo" src="/static/img/PrintoLogo.png">
      <p class="lead">You need invitations, invoices or certificates to give away to people? Just design how it looks, give the necessary information to fill in, and just print!</p>
      <br />
      <div class="card-deck">
        <div class="card">
          <img class="card-img-top" src="/static/img/wedding.jpg" alt="Card image cap">
          <div class="card-body">
            <div class="row">
              <div class="col-md-8">
                <h5 id="invitation-title">Invitation</h5>
              </div>
              <div class="col-md-4">
                <router-link to="/builder/wedding" class="btn btn-secondary btn-sm">Start Now
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
                <h5 id="invoice-title">Invoice</h5>
              </div>
              <div class="col-md-4">
                <router-link to="/builder/invoice" class="btn btn-secondary btn-sm">Start Now
                  <i class="fa fa-arrow-right" aria-hidden="true"></i>
                </router-link>
              </div>
            </div>
          </div>
        </div>
        <div class="card">
          <img class="card-img-top" src="/static/img/certificate.jpg" alt="Card image cap">
          <div class="card-body">
            <div class="row">
              <div class="col-md-8">
                <h5 id="certificate-title">Certificate</h5>
              </div>
              <div class="col-md-4">
                <router-link to="/builder/certificate" class="btn btn-secondary btn-sm">Start Now
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
import ImageCard from './../components/Common/ImageCard';

export default {
  name: 'index',
  components: {
    ImageCard,
  },
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
h4 {
  margin-bottom: 0;
}
i {
  margin-left: 2vh;
}
.jumbotron{
  padding-top: 0px;
}
#logo{
  max-width: 60vh;
}
</style>
