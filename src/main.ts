import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

// AppModule is coming from the app component
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

// bootstrap starts our application
platformBrowserDynamic().bootstrapModule(AppModule) // making a reference to the file
  .catch(err => console.error(err));
