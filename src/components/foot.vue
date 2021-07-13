<template>
    <footer class="site-footer">
      <div class="container">
        <div class="row">
          <div class="col-sm-12 col-md-6">
            <h6>SALES FARM</h6>
            <p class="text-justify">Escritório RJ Rua Helio Sellinger 155 - Barra da Tijuca - RJ
            Escritório VIX Avenida Nossa Senhora da Penha 387 - Santa Lúcia - Vitória, ES</p>
            <p class="text-justify">Escritório RJ Rua Helio Sellinger 155 - Barra da Tijuca - RJ
            Escritório VIX Avenida Nossa Senhora da Penha 387 - Santa Lúcia - Vitória, ES</p>
          </div>

            <div class="col-xs-6 col-md-3">
            <h6>Paginas</h6>
            <ul class="footer-links">
              <li><a href="#">Sou Empresa</a></li>
              <li><a href="#">Sou Vendedor</a></li>
            </ul>
          </div>

          <div class="col-xs-6 col-md-3">
            <h6>Social</h6>
            <ul class="footer-links">
              <li><a href="#">Instagram</a></li>
              <li><a href="#">Facebook</a></li>
              <li><a href="#">LinkedIn</a></li>
              <li><a href="#">GitHub</a></li>
              <li><a href="#">Twitter</a></li>
            </ul>
          </div>
        </div>
        <hr>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-md-8 col-sm-6 col-xs-12">
            <p class="copyright-text">Copyright &copy; 2021 todos os direitos reservados a 
         <a href="#">SalesFarm</a>.
            </p>
          </div>

          
        </div>
      </div>
</footer>
</template>

<script>
export default {
    
}
</script>

<style scoped>
.site-footer
{
  background-color:#2D3645;
  padding:45px 0 20px;
  font-size:15px;
  line-height:24px;
  color:#16B0D4;
}
.site-footer hr
{
  border-top-color:#bbb;
  opacity:0.5
}
.site-footer hr.small
{
  margin:20px 0
}
.site-footer h6
{
  color:#fff;
  font-size:16px;
  text-transform:uppercase;
  margin-top:5px;
  letter-spacing:2px
}
.site-footer a
{
  color:#16B0D4;
}
.site-footer a:hover
{
  color:#3366cc;
  text-decoration:none;
}
.footer-links
{
  padding-left:0;
  list-style:none
}
.footer-links li
{
  display:block
}
.footer-links a
{
  color:#16B0D4
}
.footer-links a:active,.footer-links a:focus,.footer-links a:hover
{
  color:#3366cc;
  text-decoration:none;
}
.footer-links.inline li
{
  display:inline-block
}
.site-footer .social-icons
{
  text-align:right
}
.site-footer .social-icons a
{
  width:40px;
  height:40px;
  line-height:40px;
  margin-left:6px;
  margin-right:0;
  border-radius:100%;
  background-color:#33353d
}
.copyright-text
{
  margin:0
}


</style>