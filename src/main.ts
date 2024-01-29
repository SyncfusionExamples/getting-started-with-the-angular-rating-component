import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { registerLicense } from '@syncfusion/ej2-base';

registerLicense('ORg4AjUWIQA/Gnt2UVhhQlVAfV1dXGNWfFN0QXNYfVRyfF9GZ0wgOX1dQl9nSX9Sd0VjW3dddH1WRWE=');

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
