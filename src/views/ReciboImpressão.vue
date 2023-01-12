<template>
    <div>
        <div id="container-orca" class="container">
            <br><h1>Impressão folha de recibo</h1><hr>
            <div class="card">               
                <img src="../assets/Recibo.png" alt="">
            </div>
            <br><button  @click="GerarPdf" id="btn-calcular" class="btn btn-fluid">Imprimir</button>  
        </div>
    </div>
</template>


<script>

import Recibo from '../assets/Recibo.png'
import jsPDF from 'jspdf';


export default {
   methods:{
    GerarPdf: function(){
            var doc = new jsPDF("landscape","mm","a5");

            doc.setFontSize(12);
            doc.addImage(Recibo,0,0,210,148); 
            
            doc.save()
        },
   }    
}

</script>


<style scoped>
#btn-calcular{
    background: #00acb7;
    position: absolute;
    left: 50%;
    transform: translate(-50%);
}
h1{
    text-align: center;
}
.card{
    margin-top: 50px;
}
#container-orca{
        width: 50%;
    }
    @media (max-width: 1500px){
         #container-orca{
            width: 100%;
         }
    }
</style>