import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule,   NbDatepickerModule,  NbDialogModule,NbMenuModule,NbToastrModule,NbWindowModule, NbLayoutModule, NbButtonModule, NbSidebarModule, NbCardModule, NbActionsModule, NbSearchModule, NbUserModule, NbTooltipModule} from '@nebular/theme';
import { NbEvaIconsModule  } from '@nebular/eva-icons';
import { HeaderComponent } from './components/header/header.component';
import { NbIconModule } from '@nebular/theme';
import { CoreModule } from './@core/core.module';
import { ThemeModule } from './@theme/theme.module';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { EngineComponent } from './engine/engine.component';
import { SubheaderComponent } from './components/subheader/subheader.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    EngineComponent,
    SubheaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'dark' }),
    NbLayoutModule,
    NbCardModule,
    NbEvaIconsModule,
    NbMenuModule.forRoot(),
    NbDatepickerModule.forRoot(),
    NbDialogModule.forRoot(),
    NbWindowModule.forRoot(),
    NbToastrModule.forRoot(),
    NbSidebarModule.forRoot(), // NbSidebarModule.forRoot(), //if this is your app.module
    NbButtonModule,
    NbActionsModule,
    NbSearchModule,
    NbTooltipModule,
    NbIconModule,
    NbUserModule,
    CoreModule.forRoot(),
    ThemeModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
