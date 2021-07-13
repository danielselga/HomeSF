<template>
      <div>
  <b-navbar class="shadow-sm" toggleable="lg" type="light" sticky>
    <img class="logo" src="../assets/logo.jpeg"><img>

    <b-navbar-brand href="">Sales Farm</b-navbar-brand>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item href="#" >Sou Empresa</b-nav-item>
        <b-nav-item href="#" >Sou Vendedor</b-nav-item>
      </b-navbar-nav>    
    </b-collapse>
      <b-button >LogIn</b-button>
      <b-button >SignIn</b-button>
  </b-navbar>
</div>
</template>

<script>
  export default {
    data() {
      return {
       
      }
    }
  }
</script>


<style>

  .logo{
    width: 70px;
    height: 70px;
  }


  .btn-secondary {
    background-color: #16B0D4;
    border: transparent;
    color: #2D3645;
    margin-right: 1rem;
    
     
  }

  .btn-secondary:hover {
    background-color: #16B0D4;
    border: transparent;
    color: #2D3645;
    margin-right: 3rem;
     
  }

  .navbar-light .navbar-brand{
    color: #16B0D4;
  }
  .navbar-light .navbar-brand:hover{
    color: #16B0D4;
  }
  
  .navbar-light .navbar-nav .nav-link {
    color: #16B0D4;
  }

  .navbar {
    background-color: #2D3645;
  }

   @media (max-width: 1024px) {
    .btn-secondary, .navbar-light .navbar-brand {
      display: none;
    }
  }

  .navbar-light .navbar-toggler-icon {
    color: #16B0D4;
  }

</style>
