<template>
    <div>
        <div id="container-orca" class="container">
            <br><h1>Preencha o Formulário</h1><hr>
            <div class="card">
                <div class="card-header">
                    <h3>Formulário</h3>
                </div>
                <div class="card-body">
                    <h5>Recibi(emos) de:</h5>
                    <input v-model="InputRecebi" autocomplete="off" type="text" class="form-control">
                    <br><h5>A quantidade de:</h5>
                    <input @keyup="FormQuant" v-model="InputQuant" autocomplete="off" type="text" class="form-control">
                    <br><h5>Referente a:</h5>
                    <input @keyup="FormRef" v-model="InputRef" autocomplete="off" type="text" class="form-control">
                    <br><h5>Assinatura</h5>
                    <input v-model="InputAss" autocomplete="off" type="text" class="form-control">
                    <br><h5>CPF ou CNPJ:</h5>
                    <div class="form-check form-check-inline">
                        <input @click="ResetInput" v-model="RadioDoc"  class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="CPF">
                        <label class="form-check-label" for="inlineRadio1" >CPF</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input @click="ResetInput" v-model="RadioDoc"  class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="CNPJ">
                        <label class="form-check-label" for="inlineRadio2" >CNPJ</label>
                    </div>
                    <input  placeholder="000.000.000-00" v-if="RadioDoc == 'CPF' " maxlength="14" @keyup="MaskCpf" v-model="InputDoc" autocomplete="off" type="text" class="form-control">
                    <input placeholder="00.000.000/0000-00" v-if="RadioDoc == 'CNPJ' " maxlength="18" @keyup="MaskCpf" v-model="InputDoc" autocomplete="off" type="text" class="form-control">
                    <br><h5>Data:</h5>
                    <input  placeholder="DD/MM/AAAA" autocomplete="off" maxlength="10"  v-model="InputData" @keyup="MaskData" type="text" class="form-control">
                    <br><h5>Valor:</h5>
                    <div class="input-group mb-3">
                        <span class="input-group-text" id="basic-addon1">R$</span>
                        <input  placeholder="0,00" @keyup="MaskMoeda" v-model="InputMoeda"  autocomplete="off" type="text" class="form-control"  aria-label="Username" >
                    </div>
                </div>                
            </div>
            <br><button  @click="GerarPdf" id="btn-calcular" class="btn btn-fluid">Imprimir</button>
        </div>
    </div>
</template>


<script>
import Recibo from '../assets/Recibo.png'
import jsPDF from 'jspdf'


export default {
    data(){
        return{
            InputRecebi:"",
            InputQuant:"",
            InputRef:"",
            InputAss:"",
            InputData:"",
            DiaData:"",
            MesData:"",
            AnoData:"",
            InputMoeda:"",
            InputDoc:"",
            RadioDoc:"CPF",
            Linha01Quant:"",
            Linha02Quant:"",
            Linha01Ref:"",
            Linha02Ref:"",
            Linha03Ref:"",
        }
    }, 
    methods:{
        GerarPdf: function(){ //88
            var doc = new jsPDF("landscape","mm","a5");

            doc.setFontSize(14);
            doc.addImage(Recibo,0,0,210,148); 

            //Recebimos//
             doc.text(`${this.InputRecebi}`,46,51.2);
            
            //Quantidade//
             doc.text(`${this.Linha01Quant}`,46,59.5);
             doc.text(`${this.Linha02Quant}`,16,67.5);

            //Referente//
             doc.text(`${this.Linha01Ref}`,36.5,75.6);
             doc.text(`${this.Linha02Ref}`,16,82.6);
             doc.text(`${this.Linha03Ref}`,16,89.6);

            //Assinatura//
             doc.text(`${this.InputAss}`,160,132.8,"center");

            //CPF OU CNPJ//
             doc.text(`${this.InputDoc}`,160,122.2,"center");

            //Data//
             doc.text(`${this.DiaData}`,146,113.3,"center");
             doc.text(`${this.MesData}`,164.7,113.3,"center");
             doc.text(`${this.AnoData}`,187.5,113.3,"center");

            //Valor Moeda//
             doc.text(`${this.InputMoeda}`,185,36.5,"center");
            
            doc.save()
        },   

        //Zerar os Valores ao mudar o radio//
        ResetInput: function(){
            this.InputDoc = "";
        },
        FormQuant: function(){
            if(this.InputQuant.length > 67){
            this.Linha01Quant = this.InputQuant.substr(0,67) + "-";
            this.Linha02Quant = this.InputQuant.substr(67);
            }
            else if(this.InputQuant.length < 67){
                this.Linha01Quant = this.InputQuant.substr(0,67)
            }
        },
        //observe que nessa função estou deizendo o tamanho da linha para impressão//
        FormRef: function(){
            if(this.InputRef.length > 150){
                this.Linha01Ref = this.InputRef.substr(0,72) + "-";
                this.Linha02Ref = this.InputRef.substr(72,81) + "-";
                this.Linha03Ref = this.InputRef.substr(153);
            }
            else if(this.InputRef.length < 144 && this.InputRef.length > 72){
                this.Linha01Ref = this.InputRef.substr(0,72) + "-";
                this.Linha02Ref = this.InputRef.substr(72);
                this.Linha03Ref = "";
            }
            else if(this.InputRef.length < 72){
                this.Linha01Ref = this.InputRef.substr(0,72);
            }

        },
        MaskData: function(){
            this.InputData = this.InputData.replace(/\D/g,"");
            this.InputData = this.InputData.replace(/(\d{2})(\d)/,"$1/$2") 
            this.InputData = this.InputData.replace(/(\d{2})(\d)/,"$1/$2")
            this.DiaData = this.InputData.substr(0,2)
            this.MesData = this.InputData.substr(3,2)
            this.AnoData = this.InputData.substr(6,4)
        },
        MaskMoeda: function(e){
            this.InputMoeda = e.target.value.replace(/\D/g,"");
            this.InputMoeda = (this.InputMoeda/100).toFixed(2) + "";
            this.InputMoeda = this.InputMoeda.replace(".", ",");
            this.InputMoeda = this.InputMoeda.replace(/(\d)(\d{3})(\d{3}),/g, "$1.$2.$3,");
            this.InputMoeda = this.InputMoeda.replace(/(\d)(\d{3}),/g, "$1.$2,");    
        },
        MaskCpf: function(e){
            if(this.RadioDoc == "CPF"){
            this.InputDoc = e.target.value.replace(/\D/g,"");
            this.InputDoc = this.InputDoc.replace(/(\d{3})(\d)/,"$1.$2");
            this.InputDoc = this.InputDoc.replace(/(\d{3})(\d)/,"$1.$2");
            this.InputDoc = this.InputDoc.replace(/(\d{3})(\d{1,2})$/,"$1-$2");
            e.target.value = this.InputDoc;
            }
            else if(this.RadioDoc == "CNPJ"){
            this.InputDoc = e.target.value.replace(/\D/g,"");
            this.InputDoc = this.InputDoc.replace(/^(\d{2})(\d)/,"$1.$2");
            this.InputDoc = this.InputDoc.replace(/^(\d{2})\.(\d{3})(\d)/,"$1.$2.$3");
            this.InputDoc = this.InputDoc.replace(/\.(\d{3})(\d)/,".$1/$2");
            this.InputDoc = this.InputDoc.replace(/(\d{4})(\d)/,"$1-$2");  
            e.target.value = this.InputDoc;    
            }
        }, 
    }

}
</script>



<style scoped>
h1,h3{
    text-align: center;
}
.card{
    margin-top: 50px;
}
#container-orca{
    width: 50%;
}
#btn-calcular{
    background: #00acb7;
    position:absolute;
    left: 50%;
    transform: translate(-50%);
}
@media (max-width: 1500px){
         #container-orca{
            width: 100%;
         }
    }
</style>
