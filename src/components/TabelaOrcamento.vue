<template>
    <div>
    <div id="container-orca" class="container">
    <br><h1>Orçamento</h1><hr>
    <!--Card Orçamento-->
    <div id="test05">
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
    <!--Aqui é onde fica o orçamento-->
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
      <td ><input autocomplete="off" v-model="Quant01" id="input-quant-tb" type="text"></td>
      <td ><input autocomplete="off" v-model="Descri01" id="input-desc-tb" type="text"></td>
      <td ><input autocomplete="off" v-model="PrecoUnidade01" id="input-val-un" type="text"></td>
      <td ><input autocomplete="off" v-model="PrecoFinal01" id="input-val-tot" type="text"></td>
    </tr>
    <tr>
      <td ><input autocomplete="off" v-model="Quant02" id="input-quant-tb" type="text"></td>
      <td ><input autocomplete="off" v-model="Descri02" id="input-desc-tb" type="text"></td>
      <td ><input autocomplete="off" v-model="PrecoUnidade02" id="input-val-un" type="text"></td>
      <td><input autocomplete="off" v-model="PrecoFinal02" id="input-val-tot" type="text"></td>
    </tr>
    <tr>
       <td ><input autocomplete="off" v-model="Quant03" id="input-quant-tb" type="text"></td>
      <td ><input autocomplete="off" v-model="Descri03" id="input-desc-tb" type="text"></td>
      <td ><input autocomplete="off" v-model="PrecoUnidade03" id="input-val-un" type="text"></td>
      <td ><input autocomplete="off" v-model="PrecoFinal03" id="input-val-tot" type="text"></td>
    </tr>  
    <tr>
      <td ><input autocomplete="off" v-model="Quant04" id="input-quant-tb" type="text"></td>
      <td ><input autocomplete="off" v-model="Descri04" id="input-desc-tb" type="text"></td>
      <td ><input autocomplete="off" v-model="PrecoUnidade04" id="input-val-un" type="text"></td>
      <td><input autocomplete="off" v-model="PrecoFinal04" id="input-val-tot" type="text"></td>
    </tr>
    <tr>
      <td ><input autocomplete="off" v-model="Quant05" id="input-quant-tb" type="text"></td>
      <td ><input autocomplete="off" v-model="Descri05" id="input-desc-tb" type="text"></td>
      <td ><input autocomplete="off" v-model="PrecoUnidade05" id="input-val-un" type="text"></td>
      <td><input autocomplete="off" v-model="PrecoFinal05" id="input-val-tot" type="text"></td>
    </tr>
    <tr>
      <td ><input autocomplete="off" v-model="Quant06" id="input-quant-tb" type="text"></td>
      <td ><input autocomplete="off" v-model="Descri06" id="input-desc-tb" type="text"></td>
      <td ><input autocomplete="off" v-model="PrecoUnidade06" id="input-val-un" type="text"></td>
      <td><input autocomplete="off" v-model="PrecoFinal06" id="input-val-tot" type="text"></td>
    </tr>
    <tr>
      <td ><input autocomplete="off" v-model="Quant07" id="input-quant-tb" type="text"></td>
      <td ><input autocomplete="off" v-model="Descri07" id="input-desc-tb" type="text"></td>
      <td ><input autocomplete="off" v-model="PrecoUnidade07" id="input-val-un" type="text"></td>
      <td><input autocomplete="off" v-model="PrecoFinal07" id="input-val-tot" type="text"></td>
    </tr>
    <tr>
      <td ><input autocomplete="off" v-model="Quant08" id="input-quant-tb" type="text"></td>
      <td ><input autocomplete="off" v-model="Descri08" id="input-desc-tb" type="text"></td>
      <td ><input autocomplete="off" v-model="PrecoUnidade08" id="input-val-un" type="text"></td>
      <td><input autocomplete="off" v-model="PrecoFinal08" id="input-val-tot" type="text"></td>
    </tr>
    <tr>
      <td ><input autocomplete="off" v-model="Quant09" id="input-quant-tb" type="text"></td>
      <td ><input autocomplete="off" v-model="Descri09" id="input-desc-tb" type="text"></td>
      <td ><input autocomplete="off" v-model="PrecoUnidade09" id="input-val-un" type="text"></td>
      <td><input autocomplete="off" v-model="PrecoFinal09" id="input-val-tot" type="text"></td>
    </tr>
  </tbody>
</table>
        <table id="table-final" class="table table-bordered border-dark">
            <tbody>
                <tr>
                    <th id="final-tr">Total:</th>
                    <th><input autocomplete="off" v-model="TotalFinal" id="input-quant-tb" type="text"></th>
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
     <br><button @click="GerarPdf" id="btn-calcular" class="btn btn-fluid">Imprimir</button>  
</div>
</div>
</template>

<script>
import jsPDF from 'jspdf';
import imgorçamento from '../assets/orçamento04.png';

export default {
    data(){
        return{
        // header table //
            DataTabela:"",
            NomeTabela:"",
            EndereçoTabela:"",
            TelefoneTabela:"",
        //table 01 //
            Quant01:"",
            Descri01:"",
            PrecoUnidade01:"",
            PrecoFinal01:"",
        //table 02 //
            Quant02:"",
            Descri02:"",
            PrecoUnidade02:"",
            PrecoFinal02:"",
        //table 03 //
            Quant03:"",
            Descri03:"",
            PrecoUnidade03:"",
            PrecoFinal03:"",
        //table 04 //
            Quant04:"",
            Descri04:"",
            PrecoUnidade04:"",
            PrecoFinal04:"", 
        //table 05 //
            Quant05:"",
            Descri05:"",
            PrecoUnidade05:"",
            PrecoFinal05:"", 
        //table 06 //
            Quant06:"",
            Descri06:"",
            PrecoUnidade06:"",
            PrecoFinal06:"",  
        //table 07 //
            Quant07:"",
            Descri07:"",
            PrecoUnidade07:"",
            PrecoFinal07:"",
        //table 08 //
            Quant08:"",
            Descri08:"",
            PrecoUnidade08:"",
            PrecoFinal08:"",
        //table 09 //
            Quant09:"",
            Descri09:"",
            PrecoUnidade09:"",
            PrecoFinal09:"",
        //Total Final //
            TotalFinal:"",

        }
    },
    methods:{
    GerarPdf: function(){
            var doc = new jsPDF();

            doc.setFontSize(12);
            
            //Header //
            doc.addImage(imgorçamento,-0.7,-0.8,211.4,295);
            doc.text(`${this.DataTabela}`,189.5,35.8,"center");//O center é ussado para escolher a posição no centro.
            doc.text(`${this.NomeTabela}`,30,53.4); //test de texto
            doc.text(`${this.EndereçoTabela}`,30,66);
            doc.text(`${this.TelefoneTabela}`,30,78.6);
            //Linha 01/
            doc.text(`${this.Quant01}`,11.6,127.4,"center");
            doc.text(`${this.Descri01}`,22,127.4);
            doc.text(`${this.PrecoUnidade01}`,160,127.4,"center")
            doc.text(`${this.PrecoFinal01}`,189.5,127.4,"center") 

            //Linha 02//
            doc.text(`${this.Quant02}`,11.6,140,"center");
            doc.text(`${this.Descri02}`,22,140);
            doc.text(`${this.PrecoUnidade02}`,160,140,"center")
            doc.text(`${this.PrecoFinal02}`,189.5,140,"center") 
            
            //Linha 03// 
            doc.text(`${this.Quant03}`,11.6,152.43,"center");
            doc.text(`${this.Descri03}`,22,152.43);
            doc.text(`${this.PrecoUnidade03}`,160,152.43,"center")
            doc.text(`${this.PrecoFinal03}`,189.5,152.43,"center")
            
            //Linha 04//
            doc.text(`${this.Quant04}`,11.6,164.86,"center");
            doc.text(`${this.Descri04}`,22,164.86);
            doc.text(`${this.PrecoUnidade04}`,160,164.86,"center")
            doc.text(`${this.PrecoFinal04}`,189.5,164.86,"center")
            
            //Linha 05//
            doc.text(`${this.Quant05}`,11.6,177.29,"center");
            doc.text(`${this.Descri05}`,22,177.29);
            doc.text(`${this.PrecoUnidade05}`,160,177.29,"center")
            doc.text(`${this.PrecoFinal05}`,189.5,177.29,"center")
            
            //Linha 06//
            doc.text(`${this.Quant06}`,11.6,189.72,"center");
            doc.text(`${this.Descri06}`,22,189.72);
            doc.text(`${this.PrecoUnidade06}`,160,189.72,"center")
            doc.text(`${this.PrecoFinal06}`,189.5,189.72,"center")
            
            //Linha 07//
            doc.text(`${this.Quant07}`,11.6,202.15,"center");
            doc.text(`${this.Descri07}`,22,202.15);
            doc.text(`${this.PrecoUnidade07}`,160,202.15,"center")
            doc.text(`${this.PrecoFinal07}`,189.5,202.15,"center") 
            
            //Linha 08//
            doc.text(`${this.Quant08}`,11.6,214.58,"center");
            doc.text(`${this.Descri08}`,22,214.58);
            doc.text(`${this.PrecoUnidade08}`,160,214.58,"center")
            doc.text(`${this.PrecoFinal08}`,189.5,214.58,"center")
            
            //Linha 09//
            doc.text(`${this.Quant09}`,11.6,227.01,"center");
            doc.text(`${this.Descri09}`,22,227.01);
            doc.text(`${this.PrecoUnidade09}`,160,227.01,"center")
            doc.text(`${this.PrecoFinal09}`,189.5,227.01,"center")
             
            
            //Total Final//
            doc.text(`${this.TotalFinal}`,189.5,245,"center")  
            
            doc.save(this.NomeTabela);
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
}

}

</script>

<style scoped>
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
        position: relative;
        width: 15%;
        background: #00acb7;
    }
   @media (max-width: 1500px){
         #container-orca{
            width: 100%;
         }
    }
</style>
