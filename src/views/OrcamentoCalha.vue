<template>
  <div >
    <br><h1>Orçamento</h1>
    <div id="container-orca" class="container">
    <hr><div v-if="CardValorFinal == false" class="card">
        <div class="card-header">
            <h3>Calha</h3>
        </div>
        <div class="card-body">
            <div id="div-pano">
                <h5>Pano da calha:</h5>
                <select  @click=" AutoSelectSup" v-model="SelectPano" class="form-select" aria-label="Default select example">
                    <option value="0" selected>Selecione</option>
                    <option value="33">Pano de 33</option>
                    <option value="40">Pano de 40</option>
                    <option value="50">Pano de 50</option>
                    <option value="60">Pano de 60</option>
                    <option value="70">Pano de 70</option>
                </select>
            </div>
            <div>
                <br><h5>Material:</h5>
                <select v-model="SelectMaterial" class="form-select" aria-label="Default select example">
                    <option value="0" selected>Selecione</option>
                    <option value="1">Alumínio</option>
                    <option value="2">Zinco</option>
                </select>
            </div>               
            <div>
                <br><h5>Pintura:</h5>
                <select v-model="SelectPintura" class="form-select" aria-label="Default select example">
                    <option value="0" selected>Selecione</option>
                    <option value="1">Sim</option>
                    <option value="2">Não</option>
                </select>
            </div>
            <div>
                <br><h5 id="select-montagem">Montagem:</h5>
                <select @click="DisableMontagem" v-model="SelectMontagem" class="form-select" aria-label="Default select example">
                    <option value="0" selected>Selecione</option>
                    <option value="1">Sim</option>
                    <option value="2">Não</option>
                </select>
            </div>
            <div v-if="SelectMontagem == 1" id="select-altura">
                    <br><h6>Altura:</h6>
                    <select v-model="SelectAltura" class="form-select form-select-sm" aria-label="Default select example">
                        <option value="0" selected>Selecione</option>
                        <option value="1">Alto</option>
                        <option value="2">Baixo</option>
                    </select>
            </div>
            <div>
                <br><h5>Esquadro:</h5>
                <select @click="DisableEsquadro" qaw v-model="SelectEsquadro" class="form-select" aria-label="Default select example">
                    <option value="0" selected>Selecione</option>
                    <option value="1">Sim</option>
                    <option value="2">Não</option>
                </select>
            </div>
            <div v-if="SelectPano == 0 || SelectPano == 33 || SelectPano == 40 " >
                <br><h5>Suporte:</h5>
                <select @click="DisableSuporte" v-model="SelectSuporte" class="form-select" aria-label="Default select example">
                    <option value="0" selected>Selecione</option>
                    <option value="1">Sim</option>
                    <option value="2">Não</option>
                </select>
            </div>
            <div v-if="SelectEsquadro == 1" >
                <br><h5>Quantidade de esquadros:</h5>
                <input v-model="InputEsquadro" id="input-metragem" type="number" class="form-control" placeholder="00" >
            </div>
            <div>
                <br><h5>Metragem:</h5>
                <input @keyup="MaskMedida" v-model="InputMetragem" id="input-metragem" type="text" class="form-control" placeholder="0,00" >
            </div>
        </div> 
    </div>
      

   <!--Card Suporte-->
    <div v-if="SelectSuporte == 1 && CardValorFinal == false"  id="card-suporte" class="card">
        <div class="card-header">
            <h3>Suporte</h3>
        </div>
        <div class="card-body">
            <div>
                <br><h5>Material:</h5>
                <select v-model="SelectMaterialSup" id="select-material-sup" class="form-select" aria-label="Default select example">
                    <option value="0" selected>Selecione</option>
                    <option value="1">Alumínio</option>
                    <option value="2">Ferro</option>
                </select>
            </div>
                
            <div>
                <br><h5>Pintura:</h5>
                <select  v-model="SelectPinturaSup" id="select-pintura-sup" class="form-select" aria-label="Default select example">
                    <option value="0" selected>Selecione</option>
                    <option value="1">Sim</option>
                    <option value="2">Não</option>
                </select>
            </div>
            <div>
                <br><h5>Quantidade:</h5>
                <input v-model="InputQuantidadeSup" id="input-quantidade-sup" type="number" class="form-control" placeholder="00"  >
            </div>
        </div> 
    </div>
    <div>
        <br><button v-if="CardValorFinal == false" id="btn-calcular" class="btn btn-fluid" @click="calcular">Calcular</button>
    </div>

    
    <!--Card Orçamento  -->
    <div v-if="CardValorFinal == true" id="test05">
    <div  class="card">
        <div id="card-orçamento"  class="card-header">
            <img id="imglogo"  src="../assets/LogoNova.png" alt="">
        </div>
    <div class="card-body">
        <table id="table-final" class="table table-bordered border-dark">
            <tbody>
                <tr>
                    <th id="final-tr">Data:</th>
                    <th><input placeholder="DD/MM/AAAA" maxlength="10" @keyup="MaskData" autocomplete="off" v-model="DataTabela" id="input-quant-tb" type="text"></th>
                </tr>               
            </tbody>
        </table>
        <table class="table table-bordered border-dark">
            <tbody>
                <tr>
                    <th id="nome-tb">Nome:</th>
                    <th><input autocomplete="off" v-model="NomeTabela" id="input-nome" type="text"></th>
                </tr>
                <tr>
                    <th id="nome-tb">Endereço:</th>
                    <th><input autocomplete="off" v-model="EndereçoTabela" id="input-nome" type="text"></th>
                </tr>
                <tr>
                    <th id="nome-tb">Telefone:</th>
                    <th><input placeholder="(99) 99999-9999" maxlength="15" @keyup="MaskTel" autocomplete="off" v-model="TelefoneTabela" id="input-nome" type="text"></th>
                </tr>               
            </tbody>
        </table><br>
        <h3>Orçamento de Produtos e Serviços</h3>   
    <!--Tabela Formulario Orçamento-->
    <table id="table" class=" table table-bordered border-dark">
    <thead>
    <tr id="coluna-tr">
      <th id="quantidade-tr" scope="col">Quant</th>
      <th id="descrição-tr" scope="col">Descrição</th>
      <th id="valor-un-tr" scope="col">Valor Unit</th>
      <th id="valor-tot-tr" scope="col">Valor Total</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td ><input autocomplete="off" v-model="InputMetragem" id="input-quant-tb" type="text"></td>
      <td ><input autocomplete="off" v-model="DescriCalha" id="input-desc-tb" type="text"></td>
      <td ><input autocomplete="off" v-model="PrecoUnidadeIntl"  id="input-val-un" type="text"></td>
      <td ><input autocomplete="off" v-model="MetroFinalIntl" id="input-val-tot" type="text"></td>
    </tr>
    <tr v-if="SelectSuporte == 1" >
      <td ><input  autocomplete="off" v-model="InputQuantidadeSup" id="input-quant-tb" type="text"><input v-if="SelectSuporte == 2" autocomplete="off" v-model="InputEsquadro" id="input-quant-tb" type="text"></td>
      <td ><input  autocomplete="off" v-model="DescriSuporte" id="input-desc-tb" type="text"><input v-if="SelectSuporte == 2" autocomplete="off" v-model="DescriEsquadro" id="input-desc-tb" type="text"></td>
      <td ><input autocomplete="off" v-model="PrecoUnidadeSupIntl" id="input-val-un" type="text"><input v-if="SelectSuporte == 2" autocomplete="off" v-model="PrecoUnidadeEsquaIntl" id="input-val-un" type="text"></td>
      <td><input  autocomplete="off" v-model="SuporteFinalIntl" id="input-val-tot" type="text"><input v-if="SelectSuporte == 2" autocomplete="off" v-model="EsquadroFinalIntl" id="input-val-tot" type="text"></td>
    </tr>
    <tr v-if="SelectEsquadro == 1">
      <td ><input  autocomplete="off" v-model="InputEsquadro"  id="input-quant-tb" type="text"></td>
      <td ><input  autocomplete="off" v-model="DescriEsquadro" id="input-desc-tb" type="text"></td>
      <td ><input  autocomplete="off" v-model="PrecoUnidadeEsquaIntl" id="input-val-un" type="text"></td>
      <td><input  autocomplete="off" v-model="EsquadroFinalIntl" id="input-val-tot" type="text"></td>
    </tr>
    <tr v-if="SelectSuporte == 2 || SelectSuporte == 0 ">
      <td><input autocomplete="off" id="input-quant-tb" type="text"></td>
      <td ><input autocomplete="off" id="input-desc-tb" type="text"></td>
      <td ><input autocomplete="off" id="input-val-un" type="text"></td>
      <td><input autocomplete="off" id="input-val-tot" type="text"></td>
    </tr>
    <tr v-if="SelectEsquadro == 2 ">
      <td><input autocomplete="off" id="input-quant-tb" type="text"></td>
      <td ><input autocomplete="off" id="input-desc-tb" type="text"></td>
      <td ><input autocomplete="off" id="input-val-un" type="text"></td>
      <td><input autocomplete="off" id="input-val-tot" type="text"></td>
    </tr>
    <tr>
      <th ><input autocomplete="off" id="input-quant-tb" type="text"></th>
      <td ><input autocomplete="off" id="input-desc-tb" type="text"></td>
      <td ><input autocomplete="off" id="input-val-un" type="text"></td>
      <td><input autocomplete="off" id="input-val-tot" type="text"></td>
    </tr>
    <tr>
      <th ><input autocomplete="off" id="input-quant-tb" type="text" ></th>
      <td ><input autocomplete="off" id="input-desc-tb" type="text"></td>
      <td ><input autocomplete="off" id="input-val-un" type="text"></td>
      <td><input autocomplete="off" id="input-val-tot" type="text"></td>
    </tr>
    <tr>
      <th ><input autocomplete="off" id="input-quant-tb" type="text"></th>
      <td ><input autocomplete="off" id="input-desc-tb" type="text"></td>
      <td ><input autocomplete="off" id="input-val-un" type="text"></td>
      <td><input autocomplete="off" id="input-val-tot" type="text"></td>
    </tr>
    <tr>
      <th ><input autocomplete="off"  id="input-quant-tb" type="text"></th>
      <td ><input autocomplete="off" id="input-desc-tb" type="text"></td>
      <td ><input autocomplete="off" id="input-val-un" type="text"></td>
      <td><input autocomplete="off" id="input-val-tot" type="text"></td>
    </tr>
    <tr>
      <th ><input autocomplete="off" id="input-quant-tb" type="text"></th>
      <td ><input autocomplete="off" id="input-desc-tb" type="text"></td>
      <td ><input autocomplete="off" id="input-val-un" type="text"></td>
      <td><input autocomplete="off" id="input-val-tot" type="text"></td>
    </tr>
    <tr>
      <th ><input autocomplete="off" id="input-quant-tb" type="text"></th>
      <td ><input autocomplete="off" id="input-desc-tb" type="text"></td>
      <td ><input autocomplete="off" id="input-val-un" type="text"></td>
      <td><input autocomplete="off" id="input-val-tot" type="text"></td>
    </tr>
  </tbody>
</table>
        <table id="table-final" class="table table-bordered border-dark">
            <tbody>
                <tr>
                    <th id="final-tr">Total:</th>
                    <th><input autocomplete="off" v-model="TotalFinalIntl" id="input-quant-tb" type="text"></th>
                </tr>               
            </tbody>
        </table>
        <table id="formas-pag-tb" class="table table-bordered border-dark">
            <tbody>
                <tr>
                    <th id="final-tr">Formas de Pagamento e condições</th>
                </tr>
                <tr>
                    <th id="desc-forma-pag-tb">*Pagamento a vista tem 5% de desconto - 50% para iniciar e 50% ao finalizar.<br>
                    *Em até 2 vezes no cartão sem juros - Acima de 2 vezes sujeito a cobrança de juros.<br>
                    </th>
                </tr>                
            </tbody>
        </table>
    </div>      
    </div>   
    </div>
     <br><button v-if="CardValorFinal == true" @click="GerarPdf" id="btn-calcular" class="btn btn-fluid">Imprimir</button>  
</div>
</div>
</template>


<script>
import imgorçamento from '../assets/orçamento04.png';
import axios from 'axios';
import jsPDF from 'jspdf';

export default {
      //Importando a API
      created(){

        var req = {
            Headers:{
                authorization:"Bearer" + localStorage.getItem('token')
            }
        }
       
        //Calhas
        axios.get("http://localhost:3000/dados/calhas",req).then(res => {
            console.log(res)
            this.precocalhas = res.data;
        }).catch(err => {
            console.log(err)
        });
        console.log("ola")

            //Suportes.
        axios.get("http://localhost:3000/dados/suportes",req).then(res => {
            console.log(res)
            this.precosuportes = res.data;
        }).catch(err => {
            console.log(err)
        });
        console.log("ola")

    },
    data(){
        return{
            precocalhas:[],//tabela Mysql 
            precosuportes:[],//tabela Mysql
            SelectPano:0,
            SelectMaterial:0,
            SelectPintura:0,
            SelectMontagem:0,
            SelectAltura:0,
            SelectEsquadro:0,
            SelectSuporte:0,
            InputMetragem:"",
            InputEsquadro:"",
            //Select Suportes//
            SelectMaterialSup:0,
            SelectPinturaSup:0,
            InputQuantidadeSup:"",
            //Valores Finais//
            MetroFinal:"",
            SuporteFinal:"",
            SuporteFinalIntl:"",
            TotalFinal:"",
            TotalFinalIntl:"",
            CardValorFinal:false,
            PrecoUnidade:"",
            PrecoUnidadeSup:"",
            PrecoUnidadeSupIntl:"",
            EsquadroFinal:"",
            DataTabela:"",
            NomeTabela:"",
            EndereçoTabela:"",
            TelefoneTabela:"",
            DescriCalha:"",
            PrecoUnidadeIntl:"",
            MetroFinalIntl:"",
            DescriSuporte:"",
            DescriEsquadro:"",
            PrecoUnidadeEsquaIntl:"",
            PrecoUnidadeEsqua:"",
            EsquadroFinalIntl:"",
        }           
    },
    methods: {

        //Gerando pdf como foto e Texto por cima//
        GerarPdf: function(){
            var doc = new jsPDF();

            doc.setFontSize(12);
            
            
            doc.addImage(imgorçamento,-0.7,-0.8,211.4,295);
            
            //Cabeçario Orçamento//
            doc.text(`${this.DataTabela}`,189.5,35.8,"center");//O center é ussado para escolher a posição no centro.
            doc.text(`${this.NomeTabela}`,30,53.4); //test de texto
            doc.text(`${this.EndereçoTabela}`,30,66);
            doc.text(`${this.TelefoneTabela}`,30,78.6);
            //Linha do resultado da Calha//
            doc.text(`${this.InputMetragem}`,11.6,127.4,"center");
            doc.text(`${this.DescriCalha}`,22,127.4);
            doc.text(`${this.PrecoUnidadeIntl}`,160,127.4,"center")
            doc.text(`${this.MetroFinalIntl}`,189.5,127.4,"center") 

            //Linha do resultado do Suporte//
           /* doc.text(`${this.InputQuantidadeSup}`,11.6,140,"center");
            doc.text(`${this.DescriSuporte}`,22,140);
            doc.text(`${this.PrecoUnidadeSupIntl}`,160,140,"center") 
            doc.text(`${this.SuporteFinalIntl}`,189.5,140,"center")*/
            
             //Linha do resultado do Esquadro// tenho que fazer um "if" com essa linha
            if(this.SelectSuporte == 1){
            doc.text(`${this.InputEsquadro}`,11.6,152.6,"center");
            doc.text(`${this.DescriEsquadro}`,22,152.6);
            doc.text(`${this.PrecoUnidadeEsquaIntl}`,160,152.6,"center") 
            doc.text(`${this.EsquadroFinalIntl}`,189.5,152.6,"center")  
            }
            else if(this.SelectSuporte == 2 || this.SelectSuporte == 0){
            doc.text(`${this.InputEsquadro}`,11.6,140,"center");
            doc.text(`${this.DescriEsquadro}`,22,140);
            doc.text(`${this.PrecoUnidadeEsquaIntl}`,160,140,"center") 
            doc.text(`${this.EsquadroFinalIntl}`,189.5,140,"center")  
            }

            //Total Final//
            doc.text(`${this.TotalFinalIntl}`,189.5,245,"center")  
            
            doc.save(this.NomeTabela);
        },
        //Remover o erro quando habilito e desabilito esqudro//        
        DisableEsquadro: function() {
            if(this.SelectEsquadro == 2){
                this.InputEsquadro = "";
                this.DescriEsquadro = "";
            }
        },
        //Remover o erro quando habilito e desabilito Montagem//        
        DisableMontagem: function() {
            if(this.SelectMontagem == 2){
                    this.SelectAltura = 0
                }
        },
        //Remover o erro quando habilito e desabilito Suporte//     
        DisableSuporte: function() {
            if(this.SelectSuporte == 2)
            this.SelectMaterialSup = 0;
            this.SelectPinturaSup = 0;
            this.InputQuantidadeSup = "";
            this.PrecoUnidadeSupIntl = "";
            this.DescriSuporte = "";
            this.SuporteFinal = "";
            this.SuporteFinalIntl = "";
        },
        //Mascara Medida//
        MaskMedida: function(e){
            this.InputMetragem = e.target.value.replace(/\D/g,"");
            this.InputMetragem  = (this.InputMetragem /100).toFixed(2) + "";
            this.InputMetragem = this.InputMetragem .replace(".", ",");
            this.InputMetragem = this.InputMetragem.replace(/(\d)(\d{3})(\d{3}),/g, "$1$2$3,");
            this.InputMetragem  = this.InputMetragem .replace(/(\d)(\d{3}),/g, "$1$2,");    
        },        
        //Mascara Campo Data//
        MaskData: function(){
            this.DataTabela = this.DataTabela.replace(/\D/g,"");
            this.DataTabela = this.DataTabela.replace(/(\d{2})(\d)/,"$1/$2") 
            this.DataTabela = this.DataTabela.replace(/(\d{2})(\d)/,"$1/$2")

        },
        //Mascara Campo Telefone//
        MaskTel: function(){
                this.TelefoneTabela = this.TelefoneTabela.replace(/\D/g,"");
                this.TelefoneTabela = this.TelefoneTabela.replace(/^(\d{2})(\d)/g,"($1) $2");
            
                this.TelefoneTabela = this.TelefoneTabela.replace(/(\d)(\d{4})$/,"$1-$2");
            
            
        },
        calcular: function() {

            // condições de erros na calha//    
            if (this.SelectPano == 0 ){
                    window.alert(`[ERRO] Selecione o pano da calha.`)
    
            }else if (this.SelectMaterial == 0){
                window.alert(`[ERRO] Selecione o material da calha.`)
            }else if (this.SelectPintura == 0){
                window.alert(`[ERRO] Selecione a pintura da calha.`)
            }else if (this.SelectMontagem == 0){
                window.alert(`[ERRO] Selecione montagem da calha.`)
            }else if (this.SelectMontagem == 1 & this.SelectAltura == 0 ){
                window.alert(`[ERRO] Selecione a altura da montagem da calha.`)
            }else if (this.SelectEsquadro == 0){
                window.alert(`[ERRO] Selecione se calha tem Esquadro.`)
            }else if (this.SelectSuporte == 0){
                window.alert(`[ERRO] Selecione se calha tem suporte.`)
            }else if (this.InputEsquadro <= 0 & this.SelectEsquadro == 1 ){
                window.alert(`[ERRO] Digite a quantidade de esquadros.`)
            }else if (this.InputMetragem <= 0){
                window.alert(`[ERRO] Digite a metragem da calha.`)
            }
            // condições de erros no card Suporte//
            else if (this.SelectSuporte == 1 & this.SelectMaterialSup == 0){
                window.alert(`[ERRO] Selecione o material do suporte.`)
            }else if (this.SelectSuporte == 1 & this.SelectPinturaSup == 0){
                window.alert(`[ERRO] Selecione o suporte tem pintura.`)
            }else if (this.SelectSuporte == 1 & this.InputQuantidadeSup <= 0){
                window.alert(`[ERRO] Digite a quantidade de suportes.`)
            }
            
            else{
              //transfomando virgula em ponto//
            this.InputMetragemCalc = parseFloat(this.InputMetragem.replace(',','.'))
                     

            
            
            // Calha pano de 33 Alumínio//
               //Calha sem pintar e sem instalar//
               if (this.SelectPano == 33 & this.SelectMaterial == 1 & this.SelectPintura == 2
                & this.SelectMontagem == 2 & this.SelectAltura != 1 ){
                    this.PrecoUnidade = this.precocalhas.find(x => x.id == 1).Preço;
                    this.MetroFinal = this.InputMetragemCalc *  this.PrecoUnidade 
                    this.PrecoUnidadeEsqua = this.PrecoUnidade
                    this.EsquadroFinal = this.InputEsquadro * this.PrecoUnidadeEsqua       
                    this.CardValorFinal = true;                  
                }
                //Calha com pintura sem instalação// 
                else if (this.SelectPano == 33 & this.SelectMaterial == 1 & this.SelectPintura == 1
                & this.SelectMontagem == 2 & this.SelectAltura != 1){
                    this.PrecoUnidade = this.precocalhas.find(x => x.id == 2).Preço;
                    this.MetroFinal = this.InputMetragemCalc * this.PrecoUnidade
                    this.PrecoUnidadeEsqua = this.PrecoUnidade
                    this.EsquadroFinal = this.InputEsquadro * this.PrecoUnidadeEsqua
                    this.CardValorFinal = true;
                }
                //Calha instalada sem pintar baixa//
                else if (this.SelectPano == 33 & this.SelectMaterial == 1 & this.SelectPintura == 2
                & this.SelectMontagem == 1 & this.SelectAltura == 2){
                    this.PrecoUnidade = this.precocalhas.find(x => x.id == 3).Preço;
                    this.MetroFinal = this.InputMetragemCalc * this.PrecoUnidade
                    this.PrecoUnidadeEsqua = this.PrecoUnidade
                    this.EsquadroFinal = this.InputEsquadro * this.PrecoUnidadeEsqua
                    this.CardValorFinal = true;
                }
                //Calha instalada sem pintar alta//
                else if (this.SelectPano == 33 & this.SelectMaterial == 1 & this.SelectPintura == 2
                & this.SelectMontagem == 1 & this.SelectAltura == 1){
                    this.PrecoUnidade = this.precocalhas.find(x => x.id == 4).Preço;
                    this.MetroFinal = this.InputMetragemCalc * this.PrecoUnidade
                    this.PrecoUnidadeEsqua = this.PrecoUnidade
                    this.EsquadroFinal = this.InputEsquadro * this.PrecoUnidadeEsqua
                    this.CardValorFinal = true;
                }
                //Calha instalada e pintada baixa//
                else if (this.SelectPano == 33 & this.SelectMaterial == 1 & this.SelectPintura == 1
                & this.SelectMontagem == 1 & this.SelectAltura == 2){
                    this.PrecoUnidade = this.precocalhas.find(x => x.id == 5).Preço;
                    this.MetroFinal = this.InputMetragemCalc *  this.PrecoUnidade
                    this.PrecoUnidadeEsqua = this.PrecoUnidade
                    this.EsquadroFinal = this.InputEsquadro * this.PrecoUnidadeEsqua
                    this.CardValorFinal = true;
                }
                //Calha instalada e pintada alta//
                else if (this.SelectPano == 33 & this.SelectMaterial == 1 & this.SelectPintura == 1
                & this.SelectMontagem == 1 & this.SelectAltura == 1){
                    this.PrecoUnidade = this.precocalhas.find(x => x.id == 6).Preço;
                    this.MetroFinal = this.InputMetragemCalc * this.PrecoUnidade
                    this.PrecoUnidadeEsqua = this.PrecoUnidade
                    this.EsquadroFinal = this.InputEsquadro * this.PrecoUnidadeEsqua
                    this.CardValorFinal = true;
                }
                //Calha Pano de 33 zinco//
                //Calha sem pintar e sem instalar//
                else if (this.SelectPano == 33 & this.SelectMaterial == 2 & this.SelectPintura == 2
                & this.SelectMontagem == 2 & this.SelectAltura != 1){
                    this.PrecoUnidade = this.precocalhas.find(x => x.id == 7).Preço;
                    this.MetroFinal = this.InputMetragemCalc * this.PrecoUnidade
                    this.PrecoUnidadeEsqua = this.PrecoUnidade
                    this.EsquadroFinal = this.InputEsquadro * this.PrecoUnidadeEsqua
                    this.CardValorFinal = true;
                }
                //Calha com pintura sem instalação//
                else if (this.SelectPano == 33 & this.SelectMaterial == 2 & this.SelectPintura == 1
                & this.SelectMontagem == 2 & this.SelectAltura != 1){
                    this.PrecoUnidade = this.precocalhas.find(x => x.id == 8).Preço;
                    this.MetroFinal = this.InputMetragemCalc * this.PrecoUnidade
                    this.PrecoUnidadeEsqua = this.PrecoUnidade
                    this.EsquadroFinal = this.InputEsquadro * this.PrecoUnidadeEsqua
                    this.CardValorFinal = true;
                }
                //Calha instalada sem pintar baixa//
                else if (this.SelectPano == 33 & this.SelectMaterial == 2 & this.SelectPintura == 2
                & this.SelectMontagem == 1 & this.SelectAltura == 2){
                    this.PrecoUnidade = this.precocalhas.find(x => x.id == 9).Preço;
                    this.MetroFinal = this.InputMetragemCalc * this.PrecoUnidade
                    this.PrecoUnidadeEsqua = this.PrecoUnidade
                    this.EsquadroFinal = this.InputEsquadro * this.PrecoUnidadeEsqua
                    this.CardValorFinal = true;
                }
                //Calha instalada sem pintar alta//
                else if (this.SelectPano == 33 & this.SelectMaterial == 2 & this.SelectPintura == 2
                & this.SelectMontagem == 1 & this.SelectAltura == 1){
                    this.PrecoUnidade = this.precocalhas.find(x => x.id == 10).Preço;
                    this.MetroFinal = this.InputMetragemCalc * this.PrecoUnidade
                    this.PrecoUnidadeEsqua = this.PrecoUnidade
                    this.EsquadroFinal = this.InputEsquadro * this.PrecoUnidadeEsqua
                    this.CardValorFinal = true;
                }
                //Calha instalada e pintada baixa//
                else if (this.SelectPano == 33 & this.SelectMaterial == 2 & this.SelectPintura == 1
                & this.SelectMontagem == 1 & this.SelectAltura == 2){
                    this.PrecoUnidade = this.precocalhas.find(x => x.id == 11).Preço;
                    this.MetroFinal = this.InputMetragemCalc * this.PrecoUnidade
                    this.PrecoUnidadeEsqua = this.PrecoUnidade
                    this.EsquadroFinal = this.InputEsquadro * this.PrecoUnidadeEsqua
                    this.CardValorFinal = true;
                }
                //Calha instalada e pintada alta//
                else if (this.SelectPano == 33 & this.SelectMaterial == 2 & this.SelectPintura == 1
                & this.SelectMontagem == 1 & this.SelectAltura == 1){
                    this.PrecoUnidade = this.precocalhas.find(x => x.id == 12).Preço;
                    this.MetroFinal = this.InputMetragemCalc * this.PrecoUnidade
                    this.PrecoUnidadeEsqua = this.PrecoUnidade
                    this.EsquadroFinal = this.InputEsquadro * this.PrecoUnidadeEsqua 
                    this.CardValorFinal = true;
                }
                //Calha Pano de 40 Alumínio//
                //Calha sem pintar e sem instalar//
                else if (this.SelectPano == 40 & this.SelectMaterial == 1 & this.SelectPintura == 2
                & this.SelectMontagem == 2 & this.SelectAltura != 1){
                    this.PrecoUnidade = this.precocalhas.find(x => x.id == 13).Preço;
                    this.MetroFinal = this.InputMetragemCalc * this.PrecoUnidade
                    this.PrecoUnidadeEsqua = this.PrecoUnidade
                    this.EsquadroFinal = this.InputEsquadro * this.PrecoUnidadeEsqua 
                    this.CardValorFinal = true;
                }
                //Calha com pintura sem instalação//
                else if (this.SelectPano == 40 & this.SelectMaterial == 1 & this.SelectPintura == 1
                & this.SelectMontagem == 2 & this.SelectAltura != 1){
                    this.PrecoUnidade = this.precocalhas.find(x => x.id == 14).Preço;
                    this.MetroFinal = this.InputMetragemCalc * this.PrecoUnidade
                    this.PrecoUnidadeEsqua = this.PrecoUnidade
                    this.EsquadroFinal = this.InputEsquadro * this.PrecoUnidadeEsqua
                    this.CardValorFinal = true;
                }
                //Calha instalada sem pintar baixa//
                else if (this.SelectPano == 40 & this.SelectMaterial == 1 & this.SelectPintura == 2
                & this.SelectMontagem == 1 & this.SelectAltura == 2){
                    this.PrecoUnidade = this.precocalhas.find(x => x.id == 15).Preço;
                    this.MetroFinal = this.InputMetragemCalc* this.PrecoUnidade
                    this.PrecoUnidadeEsqua = this.PrecoUnidade
                    this.EsquadroFinal = this.InputEsquadro * this.PrecoUnidadeEsqua
                    this.CardValorFinal = true;
                }
                //Calha instalada sem pintar alta//
                else if (this.SelectPano == 40 & this.SelectMaterial == 1 & this.SelectPintura == 2
                & this.SelectMontagem == 1 & this.SelectAltura == 1){
                    this.PrecoUnidade = this.precocalhas.find(x => x.id == 16).Preço;
                    this.MetroFinal = this.InputMetragemCalc* this.PrecoUnidade
                    this.PrecoUnidadeEsqua = this.PrecoUnidade
                    this.EsquadroFinal = this.InputEsquadro * this.PrecoUnidadeEsqua
                    this.CardValorFinal = true;
                }
                //Calha instalada e pintada baixa//
                else if (this.SelectPano == 40 & this.SelectMaterial == 1 & this.SelectPintura == 1
                & this.SelectMontagem == 1 & this.SelectAltura == 2){
                    this.PrecoUnidade = this.precocalhas.find(x => x.id == 17).Preço;
                    this.MetroFinal = this.InputMetragemCalc *  this.PrecoUnidade
                    this.PrecoUnidadeEsqua = this.PrecoUnidade
                    this.EsquadroFinal = this.InputEsquadro * this.PrecoUnidadeEsqua
                    this.CardValorFinal = true;
                }
                //Calha instalada e pintada alta//
                else if (this.SelectPano == 40 & this.SelectMaterial == 1 & this.SelectPintura == 1
                & this.SelectMontagem == 1 & this.SelectAltura == 1){
                    this.PrecoUnidade = this.precocalhas.find(x => x.id == 18).Preço;
                    this.MetroFinal = this.InputMetragemCalc* this.PrecoUnidade
                    this.PrecoUnidadeEsqua = this.PrecoUnidade
                    this.EsquadroFinal = this.InputEsquadro * this.PrecoUnidadeEsqua
                    this.CardValorFinal = true;
                }
                //Calha Pano de 40 Zinco//
                //Calha sem pintar e sem instalar//
                else if (this.SelectPano == 40 & this.SelectMaterial == 2 & this.SelectPintura == 2
                & this.SelectMontagem == 2 & this.SelectAltura != 1){
                    this.PrecoUnidade = this.precocalhas.find(x => x.id == 19).Preço;
                    this.MetroFinal = this.InputMetragemCalc * this.PrecoUnidade
                    this.PrecoUnidadeEsqua = this.PrecoUnidade
                    this.EsquadroFinal = this.InputEsquadro * this.PrecoUnidadeEsqua
                    this.CardValorFinal = true;
                }
                //Calha com pintura sem instalação//
                else if (this.SelectPano == 40 & this.SelectMaterial == 2 & this.SelectPintura == 1
                & this.SelectMontagem == 2 & this.SelectAltura != 1){
                    this.PrecoUnidade = this.precocalhas.find(x => x.id == 20).Preço;
                    this.MetroFinal = this.InputMetragemCalc * this.PrecoUnidade 
                    this.PrecoUnidadeEsqua = this.PrecoUnidade
                    this.EsquadroFinal = this.InputEsquadro * this.PrecoUnidadeEsqua
                    this.CardValorFinal = true;
                }
                //Calha instalada sem pintar baixa//
                else if (this.SelectPano == 40 & this.SelectMaterial == 2 & this.SelectPintura == 2
                & this.SelectMontagem == 1 & this.SelectAltura == 2){
                    this.PrecoUnidade = this.precocalhas.find(x => x.id == 21).Preço;
                    this.MetroFinal = this.InputMetragemCalc* this.PrecoUnidade 
                    this.PrecoUnidadeEsqua = this.PrecoUnidade
                    this.EsquadroFinal = this.InputEsquadro * this.PrecoUnidadeEsqua
                    this.CardValorFinal = true;
                }
                //Calha instalada sem pintar alta//
                else if (this.SelectPano == 40 & this.SelectMaterial == 2 & this.SelectPintura == 2
                & this.SelectMontagem == 1 & this.SelectAltura == 1){
                    this.PrecoUnidade = this.precocalhas.find(x => x.id == 22).Preço;
                    this.MetroFinal = this.InputMetragemCalc * this.PrecoUnidade
                    this.PrecoUnidadeEsqua = this.PrecoUnidade
                    this.EsquadroFinal = this.InputEsquadro * this.PrecoUnidadeEsqua
                    this.CardValorFinal = true;
                }
                //Calha instalada e pintada baixa//
                else if (this.SelectPano == 40 & this.SelectMaterial == 2 & this.SelectPintura == 1
                & this.SelectMontagem == 1 & this.SelectAltura == 2){
                    this.PrecoUnidade = this.precocalhas.find(x => x.id == 23).Preço;
                    this.MetroFinal = this.InputMetragemCalc * this.PrecoUnidade
                    this.PrecoUnidadeEsqua = this.PrecoUnidade
                    this.EsquadroFinal = this.InputEsquadro * this.PrecoUnidadeEsqua
                    this.CardValorFinal = true;
                }
                //Calha instalada e pintada alta//
                else if (this.SelectPano == 40 & this.SelectMaterial == 2 & this.SelectPintura == 1
                & this.SelectMontagem == 1 & this.SelectAltura == 1){
                    this.PrecoUnidade = this.precocalhas.find(x => x.id == 24).Preço;
                    this.MetroFinal = this.InputMetragemCalc * this.PrecoUnidade
                    this.PrecoUnidadeEsqua = this.PrecoUnidade
                    this.EsquadroFinal = this.InputEsquadro * this.PrecoUnidadeEsqua
                    this.CardValorFinal = true;
                }
                //Calha Pano de 50 Alumínio//
                //Calha sem pintar e sem instalar//
                else if (this.SelectPano == 50 & this.SelectMaterial == 1 & this.SelectPintura == 2
                & this.SelectMontagem == 2 & this.SelectAltura != 1){
                    this.PrecoUnidade = this.precocalhas.find(x => x.id == 25).Preço;
                    this.MetroFinal = this.InputMetragemCalc * this.PrecoUnidade
                    this.PrecoUnidadeEsqua = this.PrecoUnidade
                    this.EsquadroFinal = this.InputEsquadro * this.PrecoUnidadeEsqua
                    this.CardValorFinal = true;
                }
                //Calha com pintura sem instalação//
                else if (this.SelectPano == 50 & this.SelectMaterial == 1 & this.SelectPintura == 1
                & this.SelectMontagem == 2 & this.SelectAltura != 1){
                    this.PrecoUnidade = this.precocalhas.find(x => x.id == 26).Preço;
                    this.MetroFinal = this.InputMetragemCalc * this.PrecoUnidade
                    this.PrecoUnidadeEsqua = this.PrecoUnidade
                    this.EsquadroFinal = this.InputEsquadro * this.PrecoUnidadeEsqua
                    this.CardValorFinal = true;
                }
                //Calha instalada sem pintar baixa//
                else if (this.SelectPano == 50 & this.SelectMaterial == 1 & this.SelectPintura == 2
                & this.SelectMontagem == 1 & this.SelectAltura == 2){
                    this.PrecoUnidade = this.precocalhas.find(x => x.id == 27).Preço;
                    this.MetroFinal = this.InputMetragemCalc * this.PrecoUnidade
                    this.PrecoUnidadeEsqua = this.PrecoUnidade
                    this.EsquadroFinal = this.InputEsquadro * this.PrecoUnidadeEsqua
                    this.CardValorFinal = true;
                }
                //Calha instalada sem pintar alta//
                else if (this.SelectPano == 50 & this.SelectMaterial == 1 & this.SelectPintura == 2
                & this.SelectMontagem == 1 & this.SelectAltura == 1){
                    this.PrecoUnidade = this.precocalhas.find(x => x.id == 28).Preço;
                    this.MetroFinal = this.InputMetragemCalc * this.PrecoUnidade 
                    this.PrecoUnidadeEsqua = this.PrecoUnidade
                    this.EsquadroFinal = this.InputEsquadro * this.PrecoUnidadeEsqua
                    this.CardValorFinal = true;
                }
                //Calha instalada e pintada baixa//
                else if (this.SelectPano == 50 & this.SelectMaterial == 1 & this.SelectPintura == 1
                & this.SelectMontagem == 1 & this.SelectAltura == 2){
                    this.PrecoUnidade = this.precocalhas.find(x => x.id == 29).Preço;
                    this.MetroFinal = this.InputMetragemCalc * this.PrecoUnidade
                    this.PrecoUnidadeEsqua = this.PrecoUnidade
                    this.EsquadroFinal = this.InputEsquadro * this.PrecoUnidadeEsqua
                    this.CardValorFinal = true;
                }
                //Calha instalada e pintada alta//
                else if (this.SelectPano == 50 & this.SelectMaterial == 1 & this.SelectPintura == 1
                & this.SelectMontagem == 1 & this.SelectAltura == 1){
                    this.PrecoUnidade = this.precocalhas.find(x => x.id == 30).Preço;
                    this.MetroFinal = this.InputMetragemCalc * this.PrecoUnidade
                    this.PrecoUnidadeEsqua = this.PrecoUnidade
                    this.EsquadroFinal = this.InputEsquadro * this.PrecoUnidadeEsqua
                    this.CardValorFinal = true;
                }
                
                //Calha pano de 50 zinco//
                //Calha sem pintar e sem instalar//
                else if (this.SelectPano == 50 & this.SelectMaterial == 2 & this.SelectPintura == 2
                & this.SelectMontagem == 2 & this.SelectAltura != 1){
                    this.PrecoUnidade = this.precocalhas.find(x => x.id == 31).Preço;
                    this.MetroFinal = this.InputMetragemCalc* this.PrecoUnidade
                    this.PrecoUnidadeEsqua = this.PrecoUnidade
                    this.EsquadroFinal = this.InputEsquadro * this.PrecoUnidadeEsqua
                    this.CardValorFinal = true;
                }
                //Calha com pintura sem instalação//
                else if (this.SelectPano == 50 & this.SelectMaterial == 2 & this.SelectPintura == 1
                & this.SelectMontagem == 2 & this.SelectAltura != 1){
                    this.PrecoUnidade = this.precocalhas.find(x => x.id == 32).Preço;
                    this.MetroFinal = this.InputMetragemCalc * this.PrecoUnidade
                    this.PrecoUnidadeEsqua = this.PrecoUnidade
                    this.EsquadroFinal = this.InputEsquadro * this.PrecoUnidadeEsqua
                    this.CardValorFinal = true;
                }
                //Calha instalada sem pintar baixa//
                else if (this.SelectPano == 50 & this.SelectMaterial == 2 & this.SelectPintura == 2
                & this.SelectMontagem == 1 & this.SelectAltura == 2){
                    this.PrecoUnidade = this.precocalhas.find(x => x.id == 33).Preço;
                    this.MetroFinal = this.InputMetragemCalc * this.PrecoUnidade
                    this.PrecoUnidadeEsqua = this.PrecoUnidade
                    this.EsquadroFinal = this.InputEsquadro * this.PrecoUnidadeEsqua
                    this.CardValorFinal = true;
                }
                //Calha instalada sem pintar alta//
                else if (this.SelectPano == 50 & this.SelectMaterial == 2 & this.SelectPintura == 2
                & this.SelectMontagem == 1 & this.SelectAltura == 1){
                    this.PrecoUnidade = this.precocalhas.find(x => x.id == 34).Preço;
                    this.MetroFinal = this.InputMetragemCalc * this.PrecoUnidade
                    this.PrecoUnidadeEsqua = this.PrecoUnidade
                    this.EsquadroFinal = this.InputEsquadro * this.PrecoUnidadeEsqua
                    this.CardValorFinal = true;
                }
                //Calha instalada e pintada baixa//
                else if (this.SelectPano == 50 & this.SelectMaterial == 2 & this.SelectPintura == 1
                & this.SelectMontagem == 1 & this.SelectAltura == 2){
                    this.PrecoUnidade = this.precocalhas.find(x => x.id == 35).Preço;
                    this.MetroFinal = this.InputMetragemCalc * this.PrecoUnidade
                    this.PrecoUnidadeEsqua = this.PrecoUnidade
                    this.EsquadroFinal = this.InputEsquadro * this.PrecoUnidadeEsqua
                    this.CardValorFinal = true;
                }
                //Calha instalada e pintada alta//
                else if (this.SelectPano == 50 & this.SelectMaterial == 2 & this.SelectPintura == 1
                & this.SelectMontagem == 1 & this.SelectAltura == 1){
                    this.PrecoUnidade = this.precocalhas.find(x => x.id == 36).Preço;
                    this.MetroFinal = this.InputMetragemCalc * this.PrecoUnidade
                    this.PrecoUnidadeEsqua = this.PrecoUnidade
                    this.EsquadroFinal = this.InputEsquadro * this.PrecoUnidadeEsqua
                    this.CardValorFinal = true;
                }
                //Calha Pano de 60 Alumínio//
                //Calha sem pintar e sem instalar//
                else if (this.SelectPano == 60 & this.SelectMaterial == 1 & this.SelectPintura == 2
                & this.SelectMontagem == 2 & this.SelectAltura != 1){
                    this.PrecoUnidade = this.precocalhas.find(x => x.id == 37).Preço;
                    this.MetroFinal = this.InputMetragemCalc * this.PrecoUnidade
                    this.PrecoUnidadeEsqua = this.PrecoUnidade
                    this.EsquadroFinal = this.InputEsquadro * this.PrecoUnidadeEsqua
                    this.CardValorFinal = true;
                }
                //Calha com pintura sem instalação//
                else if (this.SelectPano == 60 & this.SelectMaterial == 1 & this.SelectPintura == 1
                & this.SelectMontagem == 2 & this.SelectAltura != 1){
                    this.PrecoUnidade = this.precocalhas.find(x => x.id == 38).Preço;
                   this.MetroFinal = this.InputMetragemCalc * this.PrecoUnidade
                   this.PrecoUnidadeEsqua = this.PrecoUnidade
                    this.EsquadroFinal = this.InputEsquadro * this.PrecoUnidadeEsqua
                    this.CardValorFinal = true;
                }
                //Calha instalada sem pintar baixa//
                else if (this.SelectPano == 60 & this.SelectMaterial == 1 & this.SelectPintura == 2
                & this.SelectMontagem == 1 & this.SelectAltura == 2){
                    this.PrecoUnidade = this.precocalhas.find(x => x.id == 39).Preço;
                   this.MetroFinal = this.InputMetragemCalc * this.PrecoUnidade
                   this.PrecoUnidadeEsqua = this.PrecoUnidade
                    this.EsquadroFinal = this.InputEsquadro * this.PrecoUnidadeEsqua
                    this.CardValorFinal = true;
                }
                //Calha instalada sem pintar alta//
                else if (this.SelectPano == 60 & this.SelectMaterial == 1 & this.SelectPintura == 2
                & this.SelectMontagem == 1 & this.SelectAltura == 1){
                    this.PrecoUnidade = this.precocalhas.find(x => x.id == 40).Preço;
                   this.MetroFinal = this.InputMetragemCalc * this.PrecoUnidade
                   this.PrecoUnidadeEsqua = this.PrecoUnidade
                    this.EsquadroFinal = this.InputEsquadro * this.PrecoUnidadeEsqua 
                    this.CardValorFinal = true;
                }
                //Calha instalada e pintada baixa//
                else if (this.SelectPano == 60 & this.SelectMaterial == 1 & this.SelectPintura == 1
                & this.SelectMontagem == 1 & this.SelectAltura == 2){
                    this.PrecoUnidade = this.precocalhas.find(x => x.id == 41).Preço;
                    this.MetroFinal = this.InputMetragemCalc * this.PrecoUnidade
                    this.PrecoUnidadeEsqua = this.PrecoUnidade
                    this.EsquadroFinal = this.InputEsquadro * this.PrecoUnidadeEsqua 
                    this.CardValorFinal = true;
                }
                //Calha instalada e pintada alta//
                else if (this.SelectPano == 60 & this.SelectMaterial == 1 & this.SelectPintura == 1
                & this.SelectMontagem == 1 & this.SelectAltura == 1){
                    this.PrecoUnidade = this.precocalhas.find(x => x.id == 42).Preço;
                    this.MetroFinal = this.InputMetragemCalc * this.PrecoUnidade
                    this.PrecoUnidadeEsqua = this.PrecoUnidade
                    this.EsquadroFinal = this.InputEsquadro * this.PrecoUnidadeEsqua
                    this.CardValorFinal = true;
                }
                //Calha Pano de 60 Zinco//
                //Calha sem pintar e sem instalar//
                else if (this.SelectPano == 60 & this.SelectMaterial == 2 & this.SelectPintura == 2
                & this.SelectMontagem == 2 & this.SelectAltura != 1){
                    this.PrecoUnidade = this.precocalhas.find(x => x.id == 43).Preço;
                    this.MetroFinal = this.InputMetragemCalc * this.PrecoUnidade
                    this.PrecoUnidadeEsqua = this.PrecoUnidade
                    this.EsquadroFinal = this.InputEsquadro * this.PrecoUnidadeEsqua
                    this.CardValorFinal = true;
                }
                //Calha com pintura sem instalação//
                else if (this.SelectPano == 60 & this.SelectMaterial == 2 & this.SelectPintura == 1
                & this.SelectMontagem == 2 & this.SelectAltura != 1){
                    this.PrecoUnidade = this.precocalhas.find(x => x.id == 44).Preço;
                    this.MetroFinal = this.InputMetragemCalc * this.PrecoUnidade
                    this.PrecoUnidadeEsqua = this.PrecoUnidade
                    this.EsquadroFinal = this.InputEsquadro * this.PrecoUnidadeEsqua
                    this.CardValorFinal = true;
                }
                //Calha instalada sem pintar baixa//
                else if (this.SelectPano == 60 & this.SelectMaterial == 2 & this.SelectPintura == 2
                & this.SelectMontagem == 1 & this.SelectAltura == 2){
                    this.PrecoUnidade = this.precocalhas.find(x => x.id == 45).Preço;
                    this.MetroFinal = this.InputMetragemCalc* this.PrecoUnidade
                    this.PrecoUnidadeEsqua = this.PrecoUnidade
                    this.EsquadroFinal = this.InputEsquadro * this.PrecoUnidadeEsqua
                    this.CardValorFinal = true;
                }
                //Calha instalada sem pintar alta//
                else if (this.SelectPano == 60 & this.SelectMaterial == 2 & this.SelectPintura == 2
                & this.SelectMontagem == 1 & this.SelectAltura == 1){
                    this.PrecoUnidade = this.precocalhas.find(x => x.id == 46).Preço;
                    this.MetroFinal = this.InputMetragemCalc * this.PrecoUnidade
                    this.PrecoUnidadeEsqua = this.PrecoUnidade
                    this.EsquadroFinal = this.InputEsquadro * this.PrecoUnidadeEsqua
                    this.CardValorFinal = true;
                }
                //Calha instalada e pintada baixa//
                else if (this.SelectPano == 60 & this.SelectMaterial == 2 & this.SelectPintura == 1
                & this.SelectMontagem == 1 & this.SelectAltura == 2){
                    this.PrecoUnidade = this.precocalhas.find(x => x.id == 47).Preço;
                    this.MetroFinal = this.InputMetragemCalc * this.PrecoUnidade
                    this.PrecoUnidadeEsqua = this.PrecoUnidade
                    this.EsquadroFinal = this.InputEsquadro * this.PrecoUnidadeEsqua
                    this.CardValorFinal = true;
                }
                //Calha instalada e pintada alta//
                else if (this.SelectPano == 60 & this.SelectMaterial == 2 & this.SelectPintura == 1
                & this.SelectMontagem == 1 & this.SelectAltura == 1){
                    this.PrecoUnidade = this.precocalhas.find(x => x.id == 48).Preço;
                    this.MetroFinal = this.InputMetragemCalc * this.PrecoUnidade
                    this.PrecoUnidadeEsqua = this.PrecoUnidade
                    this.EsquadroFinal = this.InputEsquadro * this.PrecoUnidadeEsqua
                    this.CardValorFinal = true;
                }
                //Calha Pano de 70 Alumínio//
                //Calha sem pintar e sem instalar//
                else if (this.SelectPano == 70 & this.SelectMaterial == 1 & this.SelectPintura == 2
                & this.SelectMontagem == 2 & this.SelectAltura != 1){
                    this.PrecoUnidade = this.precocalhas.find(x => x.id == 49).Preço;
                    this.MetroFinal = this.InputMetragemCalc * this.PrecoUnidade
                    this.PrecoUnidadeEsqua = this.PrecoUnidade
                    this.EsquadroFinal = this.InputEsquadro * this.PrecoUnidadeEsqua
                    this.CardValorFinal = true;
                }
                //Calha com pintura sem instalação//
                else if (this.SelectPano == 70 & this.SelectMaterial == 1 & this.SelectPintura == 1
                & this.SelectMontagem == 2 & this.SelectAltura != 1){
                    this.PrecoUnidade = this.precocalhas.find(x => x.id == 50).Preço;
                    this.MetroFinal = this.InputMetragemCalc * this.PrecoUnidade
                    this.PrecoUnidadeEsqua = this.PrecoUnidade
                    this.EsquadroFinal = this.InputEsquadro * this.PrecoUnidadeEsqua
                    this.CardValorFinal = true;
                }
                //Calha instalada sem pintar baixa//
                else if (this.SelectPano == 70 & this.SelectMaterial == 1 & this.SelectPintura == 2
                & this.SelectMontagem == 1 & this.SelectAltura == 2){
                    this.PrecoUnidade = this.precocalhas.find(x => x.id == 51).Preço;
                    this.MetroFinal = this.InputMetragemCalc * this.PrecoUnidade
                    this.PrecoUnidadeEsqua = this.PrecoUnidade
                    this.EsquadroFinal = this.InputEsquadro * this.PrecoUnidadeEsqua
                    this.CardValorFinal = true;
                }
                //Calha instalada sem pintar alta//
                else if (this.SelectPano == 70 & this.SelectMaterial == 1 & this.SelectPintura == 2
                & this.SelectMontagem == 1 & this.SelectAltura == 1){
                    this.PrecoUnidade = this.precocalhas.find(x => x.id == 52).Preço;
                    this.MetroFinal = this.InputMetragemCalc * this.PrecoUnidade
                    this.PrecoUnidadeEsqua = this.PrecoUnidade
                    this.EsquadroFinal = this.InputEsquadro * this.PrecoUnidadeEsqua
                    this.CardValorFinal = true;
                }
                //Calha instalada e pintada baixa//
                else if (this.SelectPano == 70 & this.SelectMaterial == 1 & this.SelectPintura == 1
                & this.SelectMontagem == 1 & this.SelectAltura == 2){
                    this.PrecoUnidade = this.precocalhas.find(x => x.id == 53).Preço;
                    this.MetroFinal = this.InputMetragemCalc * this.PrecoUnidade
                    this.PrecoUnidadeEsqua = this.PrecoUnidade
                    this.EsquadroFinal = this.InputEsquadro * this.PrecoUnidadeEsqua
                    this.CardValorFinal = true;
                }
                //Calha instalada e pintada alta//
                else if (this.SelectPano == 70 & this.SelectMaterial == 1 & this.SelectPintura == 1
                & this.SelectMontagem == 1 & this.SelectAltura == 1){
                    this.PrecoUnidade = this.precocalhas.find(x => x.id == 54).Preço;
                    this.MetroFinal = this.InputMetragemCalc * this.PrecoUnidade
                    this.PrecoUnidadeEsqua = this.PrecoUnidade
                    this.EsquadroFinal = this.InputEsquadro * this.PrecoUnidadeEsqua
                    this.CardValorFinal = true;
                }
                //Calha Pano de 70 Zinco//
                //Calha sem pintar e sem instalar//
                else if (this.SelectPano == 70 & this.SelectMaterial == 2 & this.SelectPintura == 2
                & this.SelectMontagem == 2 & this.SelectAltura != 1){
                    this.PrecoUnidade = this.precocalhas.find(x => x.id == 55).Preço;
                    this.MetroFinal = this.InputMetragemCalc* this.PrecoUnidade
                    this.PrecoUnidadeEsqua = this.PrecoUnidade
                    this.EsquadroFinal = this.InputEsquadro * this.PrecoUnidadeEsqua
                    this.CardValorFinal = true;
                }
                //Calha com pintura sem instalação//
                else if (this.SelectPano == 70 & this.SelectMaterial == 2 & this.SelectPintura == 1
                & this.SelectMontagem == 2 & this.SelectAltura != 1){
                    this.PrecoUnidade = this.precocalhas.find(x => x.id == 56).Preço;
                    this.MetroFinal = this.InputMetragemCalc * this.PrecoUnidade
                    this.PrecoUnidadeEsqua = this.PrecoUnidade
                    this.EsquadroFinal = this.InputEsquadro * this.PrecoUnidadeEsqua
                    this.CardValorFinal = true;
                }
                //Calha instalada sem pintar baixa//
                else if (this.SelectPano == 70 & this.SelectMaterial == 2 & this.SelectPintura == 2
                & this.SelectMontagem == 1 & this.SelectAltura == 2){
                    this.PrecoUnidade = this.precocalhas.find(x => x.id == 57).Preço;
                    this.MetroFinal = this.InputMetragemCalc * this.PrecoUnidade
                    this.PrecoUnidadeEsqua = this.PrecoUnidade
                    this.EsquadroFinal = this.InputEsquadro * this.PrecoUnidadeEsqua
                    this.CardValorFinal = true;
                }
                //Calha instalada sem pintar alta//
                else if (this.SelectPano == 70 & this.SelectMaterial == 2 & this.SelectPintura == 2
                & this.SelectMontagem == 1 & this.SelectAltura == 1){
                    this.PrecoUnidade = this.precocalhas.find(x => x.id == 58).Preço;
                    this.MetroFinal = this.InputMetragemCalc * this.PrecoUnidade
                    this.PrecoUnidadeEsqua = this.PrecoUnidade
                    this.EsquadroFinal = this.InputEsquadro * this.PrecoUnidadeEsqua
                    this.CardValorFinal = true;
                }
                //Calha instalada e pintada baixa//
                else if (this.SelectPano == 70 & this.SelectMaterial == 2 & this.SelectPintura == 1
                & this.SelectMontagem == 1 & this.SelectAltura == 2){
                    this.PrecoUnidade = this.precocalhas.find(x => x.id == 59).Preço;
                    this.MetroFinal = this.InputMetragemCalc * this.PrecoUnidade
                    this.PrecoUnidadeEsqua = this.PrecoUnidade
                    this.EsquadroFinal = this.InputEsquadro * this.PrecoUnidadeEsqua
                    this.CardValorFinal = true;
                }
                //Calha instalada e pintada alta//
                else if (this.SelectPano == 70 & this.SelectMaterial == 2 & this.SelectPintura == 1
                & this.SelectMontagem == 1 & this.SelectAltura == 1){
                    this.PrecoUnidade = this.precocalhas.find(x => x.id == 60).Preço;
                    this.MetroFinal = this.InputMetragemCalc * this.PrecoUnidade;
                    this.PrecoUnidadeEsqua = this.PrecoUnidade;
                    this.EsquadroFinal = this.InputEsquadro * this.PrecoUnidadeEsqua;
                    this.CardValorFinal = true;
                }
                
                
                //*Suporte pano de 33 alumínio//
                //suporte sem instalar e sem pintar//
                if (this.SelectPano == 33 & this.SelectMontagem == 2 & this.SelectAltura == 0
                & this.SelectMaterialSup == 1 & this.SelectPinturaSup == 2){
                    this.PrecoUnidadeSup = this.precosuportes.find(x => x.id == 1).Preço;
                    this.SuporteFinal = this.InputQuantidadeSup * this.PrecoUnidadeSup;
                    this.CardValorFinal = true;
                }
                //suporte pintado sem instalar//
                else if (this.SelectPano == 33 & this.SelectMontagem == 2 & this.SelectAltura == 0
                & this.SelectMaterialSup == 1 & this.SelectPinturaSup == 1){
                    this.PrecoUnidadeSup = this.precosuportes.find(x => x.id == 2).Preço;
                    this.SuporteFinal = this.InputQuantidadeSup * this.PrecoUnidadeSup;
                    this.CardValorFinal = true;
                }
                //suporte instalado baixo sem pintar//
                else if (this.SelectPano == 33 & this.SelectMontagem == 1 & this.SelectAltura == 2
                & this.SelectMaterialSup == 1 & this.SelectPinturaSup == 2){
                    this.PrecoUnidadeSup = this.precosuportes.find(x => x.id == 3).Preço;
                    this.SuporteFinal = this.InputQuantidadeSup * this.PrecoUnidadeSup;
                    this.CardValorFinal = true;                                                                                                       
                }
                //Suporte instalado alto sem pintar//
                else if (this.SelectPano == 33 & this.SelectMontagem == 1 & this.SelectAltura == 1
                & this.SelectMaterialSup == 1 & this.SelectPinturaSup == 2){
                    this.PrecoUnidadeSup = this.precosuportes.find(x => x.id == 4).Preço;
                    this.SuporteFinal = this.InputQuantidadeSup * this.PrecoUnidadeSup;
                    this.CardValorFinal = true;                                                                                                       
                }
                //Suporte instalado baixo e pintado//
                else if (this.SelectPano == 33 & this.SelectMontagem == 1 & this.SelectAltura == 2
                & this.SelectMaterialSup == 1 & this.SelectPinturaSup == 1){
                    this.PrecoUnidadeSup = this.precosuportes.find(x => x.id == 5).Preço;
                    this.SuporteFinal = this.InputQuantidadeSup * this.PrecoUnidadeSup;
                    this.CardValorFinal = true;                                                                                                       
                }
                //Suporte instaldo alto e pintado//
                else if (this.SelectPano == 33 & this.SelectMontagem == 1 & this.SelectAltura == 1
                & this.SelectMaterialSup == 1 & this.SelectPinturaSup == 1){
                    this.PrecoUnidadeSup = this.precosuportes.find(x => x.id == 6).Preço;
                    this.SuporteFinal = this.InputQuantidadeSup * this.PrecoUnidadeSup;
                    this.CardValorFinal = true;                                                                                                       
                }
                //*Suporte pano de 33 Ferro//
                //suporte sem instalar e sem pintar//
                if (this.SelectPano == 33 & this.SelectMontagem == 2 & this.SelectAltura == 0
                & this.SelectMaterialSup == 2 & this.SelectPinturaSup == 2){
                    this.PrecoUnidadeSup = this.precosuportes.find(x => x.id == 7).Preço;
                    this.SuporteFinal = this.InputQuantidadeSup * this.PrecoUnidadeSup;
                    this.CardValorFinal = true;
                }
                //suporte pintado sem instalar//
                else if (this.SelectPano == 33 & this.SelectMontagem == 2 & this.SelectAltura == 0
                & this.SelectMaterialSup == 2 & this.SelectPinturaSup == 1){
                    this.PrecoUnidadeSup = this.precosuportes.find(x => x.id == 8).Preço;
                    this.SuporteFinal = this.InputQuantidadeSup * this.PrecoUnidadeSup;
                    this.CardValorFinal = true;
                }
                //suporte instalado baixo sem pintar//
                else if (this.SelectPano == 33 & this.SelectMontagem == 1 & this.SelectAltura == 2
                & this.SelectMaterialSup == 2 & this.SelectPinturaSup == 2){
                    this.PrecoUnidadeSup = this.precosuportes.find(x => x.id == 9).Preço;
                    this.SuporteFinal = this.InputQuantidadeSup * this.PrecoUnidadeSup;
                    this.CardValorFinal = true;                                                                                                       
                }
                //Suporte instalado alto sem pintar//
                else if (this.SelectPano == 33 & this.SelectMontagem == 1 & this.SelectAltura == 1
                & this.SelectMaterialSup == 2 & this.SelectPinturaSup == 2){
                    this.SuporteFinal = this.InputQuantidadeSup *this.PrecoUnidadeSup;
                    this.CardValorFinal = true;                                                                                                       
                }
                //Suporte instalado baixo e pintado//
                else if (this.SelectPano == 33 & this.SelectMontagem == 1 & this.SelectAltura == 2
                & this.SelectMaterialSup == 2 & this.SelectPinturaSup == 1){
                    this.PrecoUnidadeSup = this.precosuportes.find(x => x.id == 10).Preço;
                    this.SuporteFinal = this.InputQuantidadeSup * this.PrecoUnidadeSup;
                    this.CardValorFinal = true;                                                                                                       
                }
                //Suporte instaldo alto e pintado//
                else if (this.SelectPano == 33 & this.SelectMontagem == 1 & this.SelectAltura == 1
                & this.SelectMaterialSup == 2 & this.SelectPinturaSup == 1){
                    this.PrecoUnidadeSup = this.precosuportes.find(x => x.id == 12).Preço;
                    this.SuporteFinal = this.InputQuantidadeSup * this.PrecoUnidadeSup;
                    this.CardValorFinal = true;                                                                                                       
                }
                
                
                //Suporte pano de 40 Alumínio//
                //suporte sem instalar e sem pintar//
                if (this.SelectPano == 40 & this.SelectMontagem == 2 & this.SelectAltura == 0
                & this.SelectMaterialSup == 1 & this.SelectPinturaSup == 2){
                    this.PrecoUnidadeSup = this.precosuportes.find(x => x.id == 13).Preço;
                    this.SuporteFinal = this.InputQuantidadeSup * this.PrecoUnidadeSup;
                    this.CardValorFinal = true;
                }
                //suporte pintado sem instalar//
                else if (this.SelectPano == 40 & this.SelectMontagem == 2 & this.SelectAltura == 0
                & this.SelectMaterialSup == 1 & this.SelectPinturaSup == 1){
                    this.PrecoUnidadeSup = this.precosuportes.find(x => x.id == 14).Preço;
                    this.SuporteFinal = this.InputQuantidadeSup * this.PrecoUnidadeSup;
                    this.CardValorFinal = true;
                }
                //suporte instalado baixo sem pintar//
                else if (this.SelectPano == 40 & this.SelectMontagem == 1 & this.SelectAltura == 2
                & this.SelectMaterialSup == 1 & this.SelectPinturaSup == 2){
                    this.PrecoUnidadeSup = this.precosuportes.find(x => x.id == 15).Preço;
                    this.SuporteFinal = this.InputQuantidadeSup * this.PrecoUnidadeSup;
                    this.CardValorFinal = true;                                                                                                       
                }
                //Suporte instalado alto sem pintar//
                else if (this.SelectPano == 40 & this.SelectMontagem == 1 & this.SelectAltura == 1
                & this.SelectMaterialSup == 1 & this.SelectPinturaSup == 2){
                    this.PrecoUnidadeSup = this.precosuportes.find(x => x.id == 16).Preço;
                    this.SuporteFinal = this.InputQuantidadeSup * this.PrecoUnidadeSup;
                    this.CardValorFinal = true;                                                                                                       
                }
                //Suporte instalado baixo e pintado//
                else if (this.SelectPano == 40 & this.SelectMontagem == 1 & this.SelectAltura == 2
                & this.SelectMaterialSup == 1 & this.SelectPinturaSup == 1){
                    this.PrecoUnidadeSup = this.precosuportes.find(x => x.id == 17).Preço;
                    this.SuporteFinal = this.InputQuantidadeSup * this.PrecoUnidadeSup;
                    this.CardValorFinal = true;                                                                                                       
                }
                //Suporte instaldo alto e pintado//
                else if (this.SelectPano == 40 & this.SelectMontagem == 1 & this.SelectAltura == 1
                & this.SelectMaterialSup == 1 & this.SelectPinturaSup == 1){
                    this.PrecoUnidadeSup = this.precosuportes.find(x => x.id == 18).Preço;
                    this.SuporteFinal = this.InputQuantidadeSup * this.PrecoUnidadeSup;
                    this.CardValorFinal = true;                                                                                                       
                }
                //Suporte pano de 40 Ferro//
                //suporte sem instalar e sem pintar//
                if (this.SelectPano == 40 & this.SelectMontagem == 2 & this.SelectAltura == 0
                & this.SelectMaterialSup == 2 & this.SelectPinturaSup == 2){
                    this.PrecoUnidadeSup = this.precosuportes.find(x => x.id == 19).Preço;
                    this.SuporteFinal = this.InputQuantidadeSup * this.PrecoUnidadeSup;
                    this.CardValorFinal = true;
                }
                //suporte pintado sem instalar//
                else if (this.SelectPano == 40 & this.SelectMontagem == 2 & this.SelectAltura == 0
                & this.SelectMaterialSup == 2 & this.SelectPinturaSup == 1){
                    this.PrecoUnidadeSup = this.precosuportes.find(x => x.id == 20).Preço;
                    this.SuporteFinal = this.InputQuantidadeSup * this.PrecoUnidadeSup;
                    this.CardValorFinal = true;
                }
                //suporte instalado baixo sem pintar//
                else if (this.SelectPano == 40 & this.SelectMontagem == 1 & this.SelectAltura == 2
                & this.SelectMaterialSup == 2 & this.SelectPinturaSup == 2){
                    this.PrecoUnidadeSup = this.precosuportes.find(x => x.id == 21).Preço;
                    this.SuporteFinal = this.InputQuantidadeSup * this.PrecoUnidadeSup;
                    this.CardValorFinal = true;                                                                                                       
                }
                //Suporte instalado alto sem pintar//
                else if (this.SelectPano == 40 & this.SelectMontagem == 1 & this.SelectAltura == 1
                & this.SelectMaterialSup == 2 & this.SelectPinturaSup == 2){
                    this.PrecoUnidadeSup = this.precosuportes.find(x => x.id == 22).Preço;
                    this.SuporteFinal = this.InputQuantidadeSup * this.PrecoUnidadeSup;
                    this.CardValorFinal = true;                                                                                                       
                }
                //Suporte instalado baixo e pintado//
                else if (this.SelectPano == 40 & this.SelectMontagem == 1 & this.SelectAltura == 2
                & this.SelectMaterialSup == 2 & this.SelectPinturaSup == 1){
                    this.PrecoUnidadeSup = this.precosuportes.find(x => x.id == 23).Preço;
                    this.SuporteFinal = this.InputQuantidadeSup * this.PrecoUnidadeSup;
                    this.CardValorFinal = true;                                                                                                       
                }
                //Suporte instaldo alto e pintado//
                else if (this.SelectPano == 40 & this.SelectMontagem == 1 & this.SelectAltura == 1
                & this.SelectMaterialSup == 2 & this.SelectPinturaSup == 1){
                    this.PrecoUnidadeSup = this.precosuportes.find(x => x.id == 24).Preço;
                    this.SuporteFinal = this.InputQuantidadeSup * this.PrecoUnidadeSup;
                    this.CardValorFinal = true;                                                                                                       
                }

                
                //Descrição calha sem pintura em aluminio//
                if(this.SelectMaterial == 1 && this.SelectMontagem == 2 && this.SelectPintura == 2){
                    this.DescriCalha = `Confecção de calha pano de ${this.SelectPano} em alumínio.`
                }
                else if(this.SelectMaterial == 1 && this.SelectMontagem == 1 && this.SelectPintura == 2 ){
                    this.DescriCalha = `Confecção e montagem de calha pano de ${this.SelectPano} em alumínio.`
                }
                //Descrição calha com pintura em aluminio//
                else if(this.SelectMaterial == 1 && this.SelectMontagem == 2 && this.SelectPintura == 1){
                    this.DescriCalha = `Confecção de calha pano de ${this.SelectPano} em alumínio pintada.`
                }
                else if(this.SelectMaterial == 1 && this.SelectMontagem == 1 && this.SelectPintura == 1){
                    this.DescriCalha = `Confecção e montagem de calha pano de ${this.SelectPano} em alumínio pintada.`
                }
                //Descrição calha sem pintura em zinco//
                else if(this.SelectMaterial == 2 && this.SelectMontagem == 2 && this.SelectPintura == 2){
                    this.DescriCalha = `Confecção de calha pano de ${this.SelectPano} em zinco.`
                }
                else if(this.SelectMaterial == 2 && this.SelectMontagem == 1 && this.SelectPintura == 2 ){
                    this.DescriCalha = `Confecção e montagem de calha pano de ${this.SelectPano}. em zinco`
                }
                //Descrição calha com pintura em zinco//
                else if(this.SelectMaterial == 2 && this.SelectMontagem == 2 && this.SelectPintura == 1){
                    this.DescriCalha = `Confecção de calha pano de ${this.SelectPano} em zinco pintada.`
                }
                else if(this.SelectMaterial == 2 && this.SelectMontagem == 1 && this.SelectPintura == 1){
                    this.DescriCalha = `Confecção e montagem de calha pano de ${this.SelectPano} em zinco pintada.`
                }
                
                //Descrição suporte sem pintura em aluminio//
                if(this.SelectMaterialSup == 1 && this.SelectMontagem == 2 && this.SelectPinturaSup == 2){
                    this.DescriSuporte = `Confecção de suporte em alumínio.`
                }
                else if(this.SelectMaterialSup == 1 && this.SelectMontagem == 1 && this.SelectPinturaSup == 2 ){
                    this.DescriSuporte = `Confecção e montagem de suporte em alumínio.`
                }
                //Descrição suporte com pintura em aluminio//
                else if(this.SelectMaterialSup == 1 && this.SelectMontagem == 2 && this.SelectPinturaSup == 1){
                    this.DescriSuporte = `Confecção de suporte em alumínio pintado.`
                }
                else if(this.SelectMaterialSup == 1 && this.SelectMontagem == 1 && this.SelectPinturaSup == 1){
                    this.DescriSuporte = `Confecção e montagem de suporte em alumínio pintado.`
                }
                //Descrição suporte sem pintura em ferro//
                else if(this.SelectMaterialSup == 2 && this.SelectMontagem == 2 && this.SelectPinturaSup == 2){
                    this.DescriSuporte = `Confecção de suporte em ferro.`
                }
                else if(this.SelectMaterialSup == 2 && this.SelectMontagem == 1 && this.SelectPinturaSup == 2 ){
                    this.DescriSuporte = `Confecção e montagem de suporte em ferro`
                }
                //Descrição suporte com pintura em ferro//
                else if(this.SelectMaterialSup == 2 && this.SelectMontagem == 2 && this.SelectPinturaSup == 1){
                    this.DescriSuporte = `Confecção de suporte em ferro pintado.`
                }
                else if(this.SelectMaterialSup == 2 && this.SelectMontagem == 1 && this.SelectPinturaSup == 1){
                    this.DescriSuporte= `Confecção e montagem de suporte em ferro pintado.`
                }
                if(this.SelectEsquadro == 1 ){
                    this.DescriEsquadro = `Confecção de esquadro.`
                }
                //Transformando o resultado 0 Invisivel//
                if(this.SelectEsquadro == 1){
                    this.PrecoUnidadeEsquaIntl = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(this.PrecoUnidadeEsqua)
                     this.EsquadroFinalIntl = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(this.EsquadroFinal)                   
                }
                if(this.SelectEsquadro == 2){
                    this.PrecoUnidadeEsqua = "";
                    this.EsquadroFinal = "";
                }
                //Valor Total mask moeda //
                if(this.SelectPano != 0){
                     this.PrecoUnidadeIntl = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(this.PrecoUnidade)
                     this.MetroFinalIntl = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(this.MetroFinal)                   
                }
                if(this.SelectSuporte == 1){
                     this.PrecoUnidadeSupIntl = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(this.PrecoUnidadeSup)
                     this.SuporteFinalIntl = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(this.SuporteFinal)
                }
                else{
                    this.PrecoUnidadeSup = "";
                    this.SuporteFinal = "";
                }
                
                //Total Final//
                if(this.SelectSuporte == 1 & this.SelectEsquadro == 1){
                    this.TotalFinal = this.MetroFinal + this.SuporteFinal + this.EsquadroFinal;
                    this.TotalFinalIntl =new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(this.TotalFinal)
                }
                else if(this.SelectSuporte == 2 & this.SelectEsquadro == 2){
                    this.TotalFinal = this.MetroFinal;
                    this.TotalFinalIntl =new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(this.TotalFinal)
                }
                else if(this.SelectSuporte == 1 & this.SelectEsquadro == 2){
                    this.TotalFinal = this.MetroFinal + this.SuporteFinal;
                    this.TotalFinalIntl =new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(this.TotalFinal)
                }
                else if(this.SelectSuporte == 2 & this.SelectEsquadro == 1){
                    this.TotalFinal = this.MetroFinal + this.EsquadroFinal;
                    this.TotalFinalIntl =new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(this.TotalFinal)
                }               
            }    
        },
        //colocar selectsuporte como não//
        AutoSelectSup: function(){
            if(this.SelectPano >= 40){
                this.SelectSuporte = 2
            }
        }
    }
}
</script>


<style scoped>
    #Td-Des{
        text-align: initial;
    }
    #valor-tot-tr{
        width: 17%;
    }
    button{
        position: relative;
        left: 50%;
        transform: translate(-50%);
    }
    #testtest{
        position: relative;
        left: 75%;
        width:25%;
    }
    #desc-forma-pag-tb{
        text-align: center;
    }
    #formas-pag-tb{
        position: relative;
        left: 50%;
        transform: translate(-50%);
    }
    #coluna-tr{
        background: #00acb7;
    }
    #final-tr{
        text-align: center;
        width: 41.5%;
        background: #00acb7;
    }
    #table-final{
        position: relative;
        left: 71%;
        width:29%;
    }
    #input-nome{
        width: 100%;
        border: none;        
    }
    #nome-tb{
        text-align: center;
        width: 12%;
        background: #00acb7;
    }
    #input-val-tot{
        text-align: center;
        width: 100%;
        border: none;
    }
    #valor-un-tr{
        width: 12%;
    }
    #input-val-un{
        text-align: center;
        width: 100%;
        border: none;
    }
    #input-desc-tb{
        width: 100%;
        border: none;
    }
    #input-quant-tb{
        text-align: center;
        width: 100%;
        border: none;
    }
    #desc-tr{
        width: 63%;
        text-align: initial;
    }
    #table{
        text-align: center;
    }
    #quantidade-tr{
        width: 8%;
    }
    #imglogo{
        height: 65px;
        width: 185px;
        position: relative;
        left: 50%;
        transform: translate(-50%);
    }
    #card-orçamento{
       background-color: #00acb7;
    }
  #div-card-sup{
        margin-top: 50px;
    }
    h1{
        text-align: center;
    }
    h3{
        text-align: center;
    }
    #container-orca{
        width: 50%;
    }
    .card{
        z-index: 2;
        margin-top: 40px;
    }
    #input-metragem{
        width: 20%;
    }
    #input-quantidade-sup{
        width: 20%;
    }
    #btn-calcular{
        position: absolute;
        background: #00acb7;
    }
   @media (max-width: 1500px){
         #container-orca{
            width: 100%;
         }
    }
</style>