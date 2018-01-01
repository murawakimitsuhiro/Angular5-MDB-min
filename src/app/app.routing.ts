import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

/**
 * component
 */
import { NotFoundComponent } from './components/notfound/notfound.component';

const routes = [
  /*
  {
    path: '',
    component: TopComponent
  },
  */
  {
    path: '**',
    component: NotFoundComponent
  },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [ RouterModule ],
})

export class AppRoutingModule {}
