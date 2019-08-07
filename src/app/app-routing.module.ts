import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeroComponent } from './hero/hero.component';

const routes: Routes = [
{
	path: 'heroes',
	component: HeroComponent,
	data: { title: 'Heroes List' }
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
