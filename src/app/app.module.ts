import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {ExampleComponent} from './example/example.component';

@NgModule({
  declarations: [AppComponent,
    ExampleComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ExampleComponent],
})
export class AppModule {
}
