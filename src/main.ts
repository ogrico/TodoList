import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { AppComponent } from './app/app.component';  // Asegúrate de importar correctamente el componente

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)]  // Proporciona las rutas
}).catch(err => console.error(err));
