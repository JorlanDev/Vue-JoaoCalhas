import { createRouter, createWebHistory } from 'vue-router'
import home from '../views/HomeView.vue'
import OrcamentoCalha from '../views/OrcamentoCalha.vue'
import TabelaCalhas from '../views/TabelaCalhas'
import TabelaSuportes from '../views/TabelaSuportes.vue'
import OrcamentoManual from '../views/OrcamentoManual.vue'
import ReciboImpressao from '../views/ReciboImpressão.vue'
import ReciboDigitado from '../views/ReciboDigitado.vue'



const routes = [
  {
    path: '/',
    name: 'home',
    component: home
  },
  {
    path: '/orcamento/calha',
    name: 'orcamentocalha',
    component: OrcamentoCalha
  },
  {
  path: '/tabela/calhas',
    name: 'TabelaCalhas',
    component: TabelaCalhas
  },
  {
  path: '/tabela/suportes',
    name: 'TabelaSuportes',
    component: TabelaSuportes
  },
  {
    path: '/orcamento/manual',
    name: 'orcamentomanual',
    component: OrcamentoManual
  },
  {
    path: '/recibo/impressao',
    name: 'reciboimpressao',
    component: ReciboImpressao
  },
  {
    path: '/recibo/digitado',
    name: 'recibodigitado',
    component: ReciboDigitado
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
