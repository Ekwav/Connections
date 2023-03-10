import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { ApiModule } from './api.module';
import { EditorComponent } from './editor/editor.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { BASE_PATH } from './variables';

export function getBaseUrl(): string {
  return "";
}

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    EditorComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    NgSelectModule,
    ApiModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'counter', component: CounterComponent },
      { path: 'editor', component: EditorComponent}
    ])
  ],
  providers: [{ provide: BASE_PATH, useFactory: getBaseUrl }],
  bootstrap: [AppComponent]
})
export class AppModule { }
