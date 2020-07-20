import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookDataComponent } from './book-data/book-data.component';
import { HelpComponent } from './help/help.component';
import { HomeComponent } from './home/home.component';
import { TermsComponent } from './terms/terms.component';



const routes: Routes = [
{ path: 'books', component: BookDataComponent },
{ path: 'help', component: HelpComponent },
{ path: 'home', component: HomeComponent },
{ path: 'terms', component: TermsComponent },
{path: '', redirectTo: '/home', pathMatch: 'full' },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
