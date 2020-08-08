import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

// Material
import { MatSnackBarModule, MAT_SNACK_BAR_DEFAULT_OPTIONS } from '@angular/material/snack-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatPaginatorModule } from '@angular/material/paginator';

// Routing
import { AppRoutingModule } from './app-routing.module';

// Components
import { AppComponent } from './app.component';
import { ListComponent, ViewComponent } from './components';

// Services and providers
import { httpInterceptorProvider } from './core/services/http-interceptor';
import { ApiService } from './services';

// App module
@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    ViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
    MatCardModule,
    MatButtonModule,
    MatDividerModule,
    MatPaginatorModule
  ],
  providers: [
    httpInterceptorProvider,
    ApiService,
    {
      provide: MAT_SNACK_BAR_DEFAULT_OPTIONS,
      useValue: { duration: 5000, verticalPosition: 'top' },
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
