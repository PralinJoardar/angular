import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CustomDirectiveComponent } from './custom-directive/custom-directive.component';
import { VisibilityDirective } from './custom-directive/visibility.directive';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    CustomDirectiveComponent,
    VisibilityDirective,
  ],

  imports: [BrowserModule, AppRoutingModule, AuthModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
