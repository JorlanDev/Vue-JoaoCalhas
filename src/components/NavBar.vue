<template >
<ul id="alert">
  <div>  
  <header id="header">
  <a id="logo-img" href="/">
    <img id="imglogo"  src="../assets/LogoNova.png" alt="imagem da logo"> <!--observe que aqui uso ../assets/ uso 2 pontos antes.-->
  </a>
    <nav id="nav" :class="{'MenuMobileOff': MenuMobile == false, 'MenuMobileOn': MenuMobile == true,'MenuDropOff01': DropDow01 == false, 'MenuDropOn01': DropDow01 == true,'MenuMobileOn': MenuMobile == true,'MenuDropOff02': DropDow02 == false, 'MenuDropOn02': DropDow02 == true,'MenuDropOff03': DropDow03 == false, 'MenuDropOn03': DropDow03 == true }">
      <div id="overlay" @click="FexarMenu" > </div> <!--Muinto importante a div overlay deve estar antes dos itens que vão ficar sobre ela-->
      <button  @click="AbrirMenu" id="btn-mobile"><img id="imgmob" width="35px" height="28px" src="../assets/menu.png" alt=""></button>
      <div id="head-menu"><a id="a1" href=""><strong>Menu</strong></a><button id="btn-head"  @click="FexarMenu"><img id="imgclose" width="35px" height="28px" src="../assets/close.png" alt=""></button></div>
      <ul id="menu" >
        <li ><div  id="drop-orçamento" @click="BtnDrop01" >Orçamento</div>
          <ul id="menu-drop1">
              <li><a href="/orcamento/calha">Automatizado</a></li>
              <li><a href="/orcamento/manual">Manual</a></li>
          </ul>
        </li>
        <li ><div id="drop-recibos" @click="BtnDrop02" >Recibos</div>
          <ul id="menu-drop2">
            <li><a href="/recibo/digitado">Recibo Digitado</a></li>
            <li><a href="/recibo/impressao">Recibo Impresso</a></li>
          </ul>
        </li>
           <li><div id="drop-recibos" @click="BtnDrop03" >Preços</div>
            <ul id="menu-drop3">
              <li><a href="/tabela/calhas">Tabela Calhas</a></li>
              <li><a href="/tabela/suportes">Tabela Suportes</a></li>
            </ul>
           </li>
      </ul>
    </nav>
  </header>
  </div>
  </ul>
</template>

<!--Aqui é a parte do javaScript do projeto observe que estou exportando o componente -->
<script>
export default { //export deve vir antes da vairavel
  data(){
    return{
      MenuMobile:false,
      DropDow01:false,
      DropDow02:false,
      DropDow03:false,
    }
  },
  methods: {

        //observe que nessa função estou trocando a classe para verdadeiro ou falso sempre que clico//
        //obs tenho que colocar "this" antes da variavel pois ela esta dentro de data.//
        AbrirMenu: function(){
            var NavBar = document.getElementById("NavBar")           
            this.MenuMobile = true
            NavBar.classList.remove("exit") ;  //Aqui estou me comunicando dierto com o Htmal para conseguir fechar overflow//
            NavBar.classList.toggle("active")
            this.$emit("AbertoMobile")//enviando evento.
        },
        BtnDrop01: function(){
          this.DropDow01 = !this.DropDow01
        },
        BtnDrop02: function(){
          this.DropDow02 = !this.DropDow02
        },
        BtnDrop03: function(){
          this.DropDow03 = !this.DropDow03
        },
        FexarMenu: function(){
          var NavBar = document.getElementById("NavBar")    
          this.MenuMobile = false
          this.DropDow01 = false 
          this.DropDow02 = false
          this.DropDow03 = false
          NavBar.classList.remove("active");//Aqui estou me comunicando dierto com o Htmal para conseguir fechar overflow//
          NavBar.classList.toggle("exit");
          this.$emit("FechadoMobile")//enviando evento.
                
        },
    },
}
</script>

<!--Aqui esta o CSS do componente quando adiciono a tag "scoped" ele é usado apenas nesse componente-->
<style scoped>
  #imgclose{
    width: 35px;
    height: 28px;
  }
  #imglogo{
    width: 250px;
    height: 80px;
  }
  #imgmob{
    width: 35px;
    height: 28px;
  }
  body{
    margin: 0;
    padding: 0;
    overflow-x: hidden; /*que dizer que tudo que passar para os lados da tela vai ficar invisivel*/
  }
  #menu{
    z-index: 1000;
  }
  body ul{
    margin: 0;
    padding: 0;
    list-style: none; /*remove a Bolinha ao lado do "li" */
  }
/*Itens do menu*/  
  #menu li a{
    display: flex;
    color: white;
    font-family: sans-serif;
    text-decoration: none; /*Remove sublinhado dos links*/
    padding: 8px;
    margin-left: 32px;
  }
  a:hover{
    background: rgba(0, 0, 0, 0,5);
  }
/*Logo*/  
  #logo-img{
    position: absolute;

    left: 50%;
    transform: translate(-50%);
  }
/*Organizar itens na tela*/
  #header{
    box-sizing: border-box;/*Importante o height ser sempre os 90px que eu desinei*/
    height: 90px;
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;/*Serve para alinha os itens*/
    background: #00acb7;
    z-index: 500;
  }
  #menu{
    display: flex;
  }
/*Itens que devem aparecer apenas no menu mobile*/  
  #btn-mobile{
    display: none;
  }
  #head-menu{
    display: none;
  }
/*Menu drop no menu pc*/
  /*#menu-drop{
   /*position: absolute;/*Importante ser absolute para não empurrar os itens para cima*/
   /*background: rgba(0, 0, 0, 0.3);
    height: 0px;
    visibility: hidden;
    overflow-x: hidden;
    overflow: hidden;
  }
  #menu li:hover ul{
  visibility: visible;
  height: 100px;
  } */
/*Btn mobile*/
@media (max-width: 2000px){
/*Estilização Botão mobile*/
  #btn-mobile{
    position: absolute;
    right: 0px;
    top: 23px;
    display: block;
    padding: 8px 16px;
    border: none;
    background: none;
    cursor: pointer;
  }
/*Estilização e animação do menu-mobile*/  
  #menu{
    display: block;
    position: absolute;
    top: 85px;
    right: 0px;
    background: white;
    transition: 0.6s; /*velocidade da Animação da janela descendo*/
    width: 0px;/*local de partida de onde a janela do menu vai descer*/
    height: calc(100vh - 85px);/*Função "calc" no css é muito importante para calcular tamanho dos elemento aqui to caso estou tirando dos 45px o tamanho de minha nav*/ 
    visibility: hidden; /*estou escondendo o menu com "hidden para aparecer so quando eu clicar no "botão menu"*/
    overflow-x: hidden;/*importante para mostrar os itens so apos o menu aparecer inteiro*/
    z-index: 1000;
  }
  #nav.MenuMobileOn #menu { /*aqui é oque vai acontecer com menu se clicar no butão menu e ativar o "active"*/
    width: 350px; /*Otamanho maximo ate onde a janela do menu vai abrir na lateral*/
    visibility: visible; /*Aqui estou fazendo o menu se tornar visivel*/
  }
  #nav.MenuMobileOn ::-webkit-scrollbar{
    overflow: hidden;
  }
  #nav.MenuMobileOff #menu{
    width: -350px;
    visibility: hidden;
    transition: none;/*Aqui coloquei trasition:none,para desativar animação de abrir e fechar*/
  }
/*Estilização dos itens do Menu-mobile*/  
#menu li a{
    font-size: 30px;
    color: #00acb7;
    padding: 25px;
    margin: 2.5px;
    border-bottom: 2px solid rgba(0, 118, 134, 0.411);
    z-index: 1000;
}  
/*Estilização e animação do head menu*/
  #head-menu{
    display: block;
    position: absolute;
    box-sizing: border-box;
    align-items: center;
    justify-content: space-between;
    /*padding: 20px;*/
    display: flex;
    position: absolute;
    top: 0px;
    right: 0px;
    background: #00acb7;
    transition: 0.6s; /*velocidade da Animação da janela descendo*/
    width: 0px;/*local de partida de onde a janela do menu vai descer*/
    height: 85px;/*Função "calc" no css é muito importante para calcular tamanho dos elemento aqui to caso estou tirando dos 45px o tamanho de minha nav*/ 
    visibility: hidden; /*estou escondendo o menu com "hidden para aparecer so quando eu clicar no "botão menu"*/
    overflow: hidden;/*importante para mostrar os itens so apos o menu aparecer inteiro*/
    z-index: 1000;
  }
  #nav.MenuMobileOn #head-menu,body{ /*aqui é oque vai acontecer com menu se clicar no butão menu e ativar o "active"*/
    width: 350px; /*Otamanho maximo ate onde a janela do menu vai abrir na lateral*/
    visibility: visible; /*Aqui estou fazendo o menu se tornar visivel*/
  }
  #nav.MenuMobileOff #head-menu {
    width: -350px;
    visibility: hidden;
    transition: 0s;
  }
/*Estilização dos itens dentro do Head menu*/ 
  #head-menu #a1{
    font-family: sans-serif;
    color: white;
    font-size: 30px;
    position: absolute;
    left: 50%;
    transform: translate(-50%);
    text-decoration: none;
    pointer-events: none; /*Remove a interação com qualquer componente*/
  }
/*Estilização botão dentro do head menu*/
  #btn-head{
    position: absolute;
    right: 0px;
    display: block;
    padding: 8px 16px;
    border: none;
    background: none;
    cursor: pointer;
    z-index: 1000;
  }  
/*Animação menu dropdow Orçamento*/
#drop-orçamento{
    font-family: sans-serif;
    cursor: pointer;/*cursor fica a mãozinha*/
    font-size: 30px;
    color: #00acb7;
    padding: 25px;
    margin: 2.5px;
    border-bottom: 2px solid rgba(0, 118, 134, 0.411);
  }  
#menu-drop1{
  display: block;
  position: relative;/*Position menu dropdow deve em relative,para empurrar os itens para baixo*/
  width: 330px;
  height: 0; /*Extremamente importante para não gerar o afastamento dos itens antes do acionamento do menu*/
  background-color: rgba(0, 0, 0, 0.3);
  visibility: hidden;
  transition: 0.9s;
  overflow-x: hidden;
  overflow: hidden;/*Esconde a barra de rolagem do menu*/
}
/*#menu li:hover #menu-drop{ /*Aqui quer dizer se a "Ul  li"que é "#menu" tiver outra ul dentro elava vai ativar as funçoes a baixo*/
  /*visibility: visible;
  height: 301px;
}*/
nav.MenuDropOn01 #menu-drop1{
  visibility: visible;
  height: 200px;
}
/*Animação menu dropdow Contatos*/
#drop-recibos{
    font-family: sans-serif;
    cursor: pointer; /*cursor fica a mãozinha*/
    font-size: 30px;
    color: #00acb7;
    padding: 25px;
    margin: 2.5px;
    border-bottom: 2px solid rgba(0, 118, 134, 0.411); 
}
#menu-drop2{
  display: block;
  position: relative;/*Position menu dropdow deve em relative,para empurrar os itens para baixo*/
  width: 330px;
  height: 0; /*Extremamente importante para não gerar o afastamento dos itens antes do acionamento do menu*/
  background-color: rgba(0, 0, 0, 0.3);
  visibility: hidden;
  transition: 0.9s;
  overflow-x: hidden;
  overflow: hidden;/*Esconde a barra de rolagem do menu*/
}
/*#menu li:hover #menu-drop{ /*Aqui quer dizer se a "Ul  li"que é "#menu" tiver outra ul dentro elava vai ativar as funçoes a baixo*/
  /*visibility: visible;
  height: 301px;
}*/
nav.MenuDropOn02 #menu-drop2{
  visibility: visible;
  height: 200px;
}
#menu-drop3{
  display: block;
  position: relative;/*Position menu dropdow deve em relative,para empurrar os itens para baixo*/
  width: 330px;
  height: 0; /*Extremamente importante para não gerar o afastamento dos itens antes do acionamento do menu*/
  background-color: rgba(0, 0, 0, 0.3);
  visibility: hidden;
  transition: 0.9s;
  overflow-x: hidden;
  overflow: hidden;/*Esconde a barra de rolagem do menu*/
}
nav.MenuDropOn03 #menu-drop3{
  visibility: visible;
  height: 200px;
}
/*Overlay enbaçar quando menu ativo*/
#overlay{
 /* visibility: hidden;/*estou escondendo o menu com "hidden para aparecer so quando eu clicar no "botão menu"*/
  display: none;
  height: 100%;
  width: 100%;
   top: 0;
   right: 0px;/*Otamanho maximo ate onde a janela do menu vai abrir na lateral*/
   left: 0;
   position: fixed;
 }  
#nav.MenuMobileOn #overlay {
        /*visibility: visible;/*Aqui estou fazendo o overlay se tornar visivel*/
        display: block;
        background-color: rgba(0, 0, 0, 3);
        z-index: 800; /*muito importante colocar o valor do "z-index" no overlay quando ele for ativado */
        opacity: 0.7;
  }
  #nav.MenuMobileOff #overlay {
        visibility: hidden;/*Aqui estou fazendo o overlay se tornar visivel*/
        background-color: rgba(0, 0, 0, 3);
        opacity: 0.7;
  }
}   
</style>
