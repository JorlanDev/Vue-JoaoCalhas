<template >
    <div :class="{'MenuMobileOff': MenuMobile == false, 'MenuMobileOn': MenuMobile == true }">
    <NavBar @AbertoMobile="RecebendoEventoAberto" @FechadoMobile="RecebendoEventoFechado"/><!--Observe que estou recebendo 2 eventos do componente filho,o evento tem que ser recebido pelo mesmo componente-->
    <router-view/>
    <FooterTest id="FooterTest"/>
    </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue"
import FooterTest from "@/components/FooterTest.vue"

export default {
  data(){
    return{
      MenuMobile:false,
    }
  },
  methods:{
    //Recebendo Eventos de ligar e desligar menumobile//
    RecebendoEventoAberto: function(){
      this.MenuMobile = true
      console.log("recebendo evento")
    },
    RecebendoEventoFechado: function(){
      this.MenuMobile = false
      console.log("recebendo evento 2")
    }
  },
  components: {
    NavBar,
    FooterTest
  }
}
</script>

<style >
body{
  background-color: #e9eae9; /*Back-groud color*/
  margin: 0px;
}

</style>
