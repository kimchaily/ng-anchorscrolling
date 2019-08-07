import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeroComponent } from './hero/hero.component';
import { SubzeroComponent } from './subzero/subzero.component';

const routes: Routes = [
{
	path: 'heroes',
	component: HeroComponent,
	data: { title: 'Heroes List' }
},
{
	path: 'subzero',
	component: SubzeroComponent,
	data: { title: 'Subzero List' }
},
{
	path: '',
	redirectTo: '/heroes',
	pathMatch: 'full'
}
];

@NgModule({
	imports: [RouterModule.forRoot(routes, {
		scrollPositionRestoration: 'enabled',
		anchorScrolling: 'enabled'
	})],
	exports: [RouterModule]
})
export class AppRoutingModule { }
