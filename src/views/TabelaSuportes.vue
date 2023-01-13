<template>
   <div>
        <div id="container-orca" class="container">
        <br><h1>Tabelas de Preços</h1><hr>
        <div class="card">
        <div class="card-header">
            <h3>Tabela Suportes</h3>
        </div>
        <div class="card-body">
        <table class="table table-bordered border-dark">
             <thead>
    <tr>
      <th scope="col">Pano</th>
      <th scope="col">Material</th>
      <th scope="col">Pintura</th>
      <th id="th-montagem" scope="col">Montagem</th>
      <th scope="col">Preço</th>
       <th scope="col">Ação</th>     
    </tr>
  </thead>
  <tbody>
    <tr v-for="preco in precosuportes" :key="preco.id" >
      <td >{{preco.Pano}}</td>
      <td>{{preco.Material}}</td>
      <td>{{preco.Pintura}}</td>
      <td>{{preco.Montagem}}</td>
      <td>{{preco.Preço.toLocaleString('pt-BR',{style:'currency', currency:'BRL'})}}</td>
      <td><button :value="preco.id" @click="ValueButtonSup" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
            Editar
          </button>
      </td>
    </tr>
  </tbody>
        </table>
    </div>
    </div>
    </div>
   
  
    
                                            
                                            <!-- Modal -->
  <div  class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Valor:</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <h1></h1>
        <div class="input-group mb-3">
          <span class="input-group-text" id="basic-addon1">R$</span>
          <input  placeholder="0,00" @keyup="MaskMoeda02"  v-model="ValorInputPrecoIntl"  autocomplete="off" type="text" class="form-control"  aria-label="Username" >
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
        <button @click="Update" type="button" class="btn btn-primary">Editar</button>
      </div>
    </div>
  </div>
</div>
</div>
</template>


<script>

import axios from 'axios';

export default {
      //Importando a API
      created(){


            //Suportes.
        axios.get("http://localhost:3000/dados/suportes",).then(res => {
            console.log(res)
            this.precosuportes = res.data;
        }).catch(err => {
            console.log(err)
        });
        console.log("ola")

    },
    data(){
      return{
        precosuportes:[],//tabela Mysql
        ValorInputPreco:"",
        ValorInputPrecoIntl:"",
        PrecoTabela:"",
        PrecoTabelaIntl:"",
        IdValue:"",
        ValorInputCalc:"",
      }
    },
    methods:{
      ValueButtonSup: function(event){  // Nesta função estou pegando os valores que coloquei dentro dos botoes//
        let elementoClicado = (event.target);
        if (elementoClicado.value >= 1){
          this.ValorInputPreco = this.precosuportes.find(x => x.id == elementoClicado.value).Preço;
          this.ValorInputPrecoIntl =  new Intl.NumberFormat('pt-BR', {minimumFractionDigits:'2'}).format(this.ValorInputPreco) //Aqui estou colocando o valor sem o Cifrão 
          this.IdValue = elementoClicado.value
        }   
      },
      MaskMoeda: function(e){
            this.ValorInputPrecoIntl= e.target.value.replace(/\D/g,"");
            this.ValorInputPrecoIntl = (this.ValorInputPrecoIntl/100).toFixed(2) + "";
            this.ValorInputPrecoIntl = this.ValorInputPrecoIntl.replace(".", ",");
            this.ValorInputPrecoIntl = this.ValorInputPrecoIntl.replace(/(\d)(\d{3})(\d{3}),/g, "$1.$2.$3,");
            this.ValorInputPrecoIntl = this.ValorInputPrecoIntl.replace(/(\d)(\d{3}),/g, "$1.$2,");
            this.ValorInputCalc = parseFloat(this.ValorInputPrecoIntl.replace(',','.'))     
        },
        MaskMoeda02: function(e){ //essa masca não coloca o ponto na casa dos mil.
            this.ValorInputPrecoIntl= e.target.value.replace(/\D/g,"");
            this.ValorInputPrecoIntl  = (this.ValorInputPrecoIntl /100).toFixed(2) + "";
            this.ValorInputPrecoIntl = this.ValorInputPrecoIntl .replace(".", ",");
            this.ValorInputPrecoIntl = this.ValorInputPrecoIntl.replace(/(\d)(\d{3})(\d{3}),/g, "$1$2$3,");
            this.ValorInputPrecoIntl  = this.ValorInputPrecoIntl .replace(/(\d)(\d{3}),/g, "$1$2,"); 
            this.ValorInputCalc = parseFloat(this.ValorInputPrecoIntl.replace(',','.'))//aqui estou dizendo que quando a mascara colocar uma "," ele ser transformado em um ponto.   
        },
    Update: function(){
      axios.put("http://localhost:3000/dados/suportes/" + this.IdValue + "/" + this.ValorInputCalc,{
                
            }).then(res => {
                console.log(res);
                this.$router.push({name: 'TabelaCalhas'});           
            }).catch(err => {
                var msgErro = err.response.data.err;
                this.error = msgErro;
            })
      document.location.reload(true);
    },
  },
}
</script>


<style scoped>
    th{
      background: #00acb7;
    }
    th,td,tr{
      left: 0px;
      position:relative;
      max-width: 100vh;
      text-align: center;
    }
    .card{
        margin-top: 50px;
        margin-bottom: 100px;
    }
    #container-orca{
        width: 50%;
    }
    h3,h1{
        text-align: center;
    }
    @media (max-width: 1300px){
      th,td,tr{
        left: 0px;
        position:relative;
        max-width: 100vh;
        text-align: center;
        font-size: 90%;
    }
         #container-orca{
            width: 100%;
         }
    }
</style>