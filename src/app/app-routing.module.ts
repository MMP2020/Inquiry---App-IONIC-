import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { LoginGuard } from './guards/login.guard';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', loadChildren: './pages/home/home.module#HomePageModule' , canActivate: [LoginGuard] },
  { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule', canActivate: [LoginGuard]  },
  { path: 'login1', loadChildren: './pages/login1/login1.module#Login1PageModule' , canActivate: [LoginGuard] },
  { path: 'cadastro', loadChildren: './pages/cadastro/cadastro.module#CadastroPageModule', canActivate: [LoginGuard]  },
  { path: 'principal', loadChildren: './pages/principal/principal.module#PrincipalPageModule', canActivate: [AuthGuard] },
  { path: 'novaproposta', loadChildren: './pages/novaproposta/novaproposta.module#NovapropostaPageModule', canActivate: [AuthGuard] },
  { path: 'textoexplicativo', loadChildren: './pages/textoexplicativo/textoexplicativo.module#TextoexplicativoPageModule', canActivate: [AuthGuard] },
  { path: 'qsc', loadChildren: './pages/qsc/qsc.module#QscPageModule',canActivate: [AuthGuard] },
  { path: 'modelo', loadChildren: './pages/modelo/modelo.module#ModeloPageModule',canActivate: [AuthGuard] },
  { path: 'youtube', loadChildren: './pages/youtube/youtube.module#YoutubePageModule',canActivate: [AuthGuard] },
  { path: 'orientacao', loadChildren: './pages/orientacao/orientacao.module#OrientacaoPageModule',canActivate: [AuthGuard] },
  { path: 'textos', loadChildren: './pages/textos/textos.module#TextosPageModule',canActivate: [AuthGuard] },
  { path: 'envio', loadChildren: './pages/envio/envio.module#EnvioPageModule',canActivate: [AuthGuard] },
  { path: 'problematizacao', loadChildren: './pages/problematizacao/problematizacao.module#ProblematizacaoPageModule',canActivate: [AuthGuard] },
  { path: 'hipoteses', loadChildren: './pages/hipoteses/hipoteses.module#HipotesesPageModule',canActivate: [AuthGuard] },
  { path: 'analise', loadChildren: './pages/analise/analise.module#AnalisePageModule',canActivate: [AuthGuard] },
  { path: 'conteudo', loadChildren: './pages/conteudo/conteudo.module#ConteudoPageModule',canActivate: [AuthGuard] },
  { path: 'cooperacao', loadChildren: './pages/cooperacao/cooperacao.module#CooperacaoPageModule',canActivate: [AuthGuard] },
  { path: 'planejamento', loadChildren: './pages/planejamento/planejamento.module#PlanejamentoPageModule',canActivate: [AuthGuard] },
  { path: 'texto', loadChildren: './pages/texto/texto.module#TextoPageModule',canActivate: [AuthGuard] },
  { path: 'investigacao', loadChildren: './pages/investigacao/investigacao.module#InvestigacaoPageModule',canActivate: [AuthGuard] },
  { path: 'menu', loadChildren: './pages/menu/menu.module#MenuPageModule',canActivate: [AuthGuard] },
  { path: 'dados', loadChildren: './pages/dados/dados.module#DadosPageModule',canActivate: [AuthGuard] },
  { path: 'sobre', loadChildren: './pages/sobre/sobre.module#SobrePageModule',canActivate: [AuthGuard] },
  { path: 'introducao', loadChildren: './pages/introducao/introducao.module#IntroducaoPageModule',canActivate: [AuthGuard] },
  { path: 'analise2', loadChildren: './pages/analise2/analise2.module#Analise2PageModule',canActivate: [AuthGuard] },
  { path: 'retomada', loadChildren: './pages/retomada/retomada.module#RetomadaPageModule',canActivate: [AuthGuard] },
  { path: 'acao', loadChildren: './pages/acao/acao.module#AcaoPageModule',canActivate: [AuthGuard] },
  { path: 'comunicacao', loadChildren: './pages/comunicacao/comunicacao.module#ComunicacaoPageModule',canActivate: [AuthGuard] },
  { path: 'redes', loadChildren: './pages/redes/redes.module#RedesPageModule',canActivate: [AuthGuard] },
  { path: 'form', loadChildren: './pages/form/form.module#FormPageModule',canActivate: [AuthGuard] },
  { path: 'atividades', loadChildren: './pages/atividades/atividades.module#AtividadesPageModule' ,canActivate: [AuthGuard]},
  { path: 'disponiveis', loadChildren: './pages/disponiveis/disponiveis.module#DisponiveisPageModule',canActivate: [AuthGuard]},
  { path: 'minhas', loadChildren: './pages/minhas/minhas.module#MinhasPageModule' ,canActivate: [AuthGuard]},
  { path: 'proposta', loadChildren: './pages/proposta/proposta.module#PropostaPageModule',canActivate: [AuthGuard] },
  { path: 'embasamento', loadChildren: './pages/embasamento/embasamento.module#EmbasamentoPageModule',canActivate: [AuthGuard] },
  { path: 'contexto', loadChildren: './pages/contexto/contexto.module#ContextoPageModule',canActivate: [AuthGuard] },
  { path: 'context', loadChildren: './pages/context/context.module#ContextPageModule',canActivate: [AuthGuard] },
  { path: 'liberdade', loadChildren: './pages/liberdade/liberdade.module#LiberdadePageModule',canActivate: [AuthGuard] },
  { path: 'ensino', loadChildren: './pages/ensino/ensino.module#EnsinoPageModule',canActivate: [AuthGuard] },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
