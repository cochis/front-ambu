import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// Rutas
import { APP_ROUTING } from './app.routes';

// Servicios
// import { HeroesService } from './servicios/heroes.service';


//primefaces
import {AccordionModule} from 'primeng/accordion';     //accordion and accordion tab
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'; // Animaciones
import {TabViewModule} from 'primeng/tabview'; // Vista de tablas
import {FieldsetModule} from 'primeng/fieldset'; // 
import {TooltipModule} from 'primeng/tooltip';
import {CardModule} from 'primeng/card';
import {PasswordModule} from 'primeng/password';
import {ButtonModule} from 'primeng/button';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import {MenuModule} from 'primeng/menu';
import {MegaMenuModule} from 'primeng/megamenu';
import {PanelMenuModule} from 'primeng/panelmenu'
import {SidebarModule} from 'primeng/sidebar';
import {FullCalendarModule} from 'primeng/fullcalendar';
import {DialogModule} from 'primeng/dialog';
import {InputTextModule} from 'primeng/inputtext';
import {CalendarModule} from 'primeng/calendar';
import {CheckboxModule} from 'primeng/checkbox';
import {CodeHighlighterModule} from 'primeng/codehighlighter';
import {TableModule} from 'primeng/table';
import {DropdownModule} from 'primeng/dropdown';
import {ProgressBarModule} from 'primeng/progressbar';
import {SliderModule} from 'primeng/slider';
import {ProgressSpinnerModule} from 'primeng/progressspinner';



// Componentes
import { AppComponent } from './app.component';
// import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';


//shared components
import { SlideComponent } from './components/slide/slide.component';
import { AboutComponent } from './components/about/about.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { ServicesComponent } from './components/services/services.component';
import { LoginComponent } from './components/login/login.component';
import { InicioComponent } from './components/intra/inicio/inicio.component';
import { MenuComponent } from './components/intra/shared/menu/menu.component';
import { EmpleadosComponent } from './components/intra/empleados/empleados/empleados.component';
import { EmpleadoDetailComponent } from './components/intra/empleados/empleado-detail/empleado-detail.component';
import { EmpleadoViewComponent } from './components/intra/empleados/empleado-view/empleado-view.component';
import { EmpleadoJoinComponent } from './components/intra/empleados/empleado-join/empleado-join.component';
import { CatalogosComponent } from './components/intra/catalogos/catalogos/catalogos.component';
import { RolesComponent } from './components/intra/catalogos/roles/roles/roles.component';
import { RolesDetailComponent } from './components/intra/catalogos/roles/roles-detail/roles-detail.component';
import { RolesJoinComponent } from './components/intra/catalogos/roles/roles-join/roles-join.component';
import { RolesViewComponent } from './components/intra/catalogos/roles/roles-view/roles-view.component';
import { DatosEmpleadoComponent } from './components/intra/datosEmpleados/datos-empleado/datos-empleado.component';
import { DetailEmpleadoComponent } from './components/intra/datosEmpleados/detail-empleado/detail-empleado.component';
import { ContactComponent } from './components/contact/contact.component';
import { EstadoCivilComponent } from './components/intra/catalogos/estado-civil/estado-civil/estado-civil.component';
import { EstadoCivilDetailComponent } from './components/intra/catalogos/estado-civil/estado-civil-detail/estado-civil-detail.component';
import { EstadoCivilJoinComponent } from './components/intra/catalogos/estado-civil/estado-civil-join/estado-civil-join.component';
import { EstadoCivilViewComponent } from './components/intra/catalogos/estado-civil/estado-civil-view/estado-civil-view.component';
import { RolesPermisosComponent } from './components/intra/catalogos/roles/roles-permisos/roles-permisos.component';
import { DatosEmpleadosJoinComponent } from './components/intra/datosEmpleados/datos-empleados-join/datos-empleados-join.component';
import { AmbulanciasComponent } from './components/intra/ambulancias/ambulancias.component';
import { AmbulanciaDetailComponent } from './components/intra/ambulancias/ambulancia-detail/ambulancia-detail.component';
import { AmbulanciaViewComponent } from './components/intra/ambulancias/ambulancia-view/ambulancia-view.component';
import { AmbulanciaJoinComponent } from './components/intra/ambulancias/ambulancia-join/ambulancia-join.component';
import { RegistrosComponent } from './components/intra/registros/registros/registros.component';
import { RegistroDetailComponent } from './components/intra/registros/registro-detail/registro-detail.component';
import { RegistroViewComponent } from './components/intra/registros/registro-view/registro-view.component';
import { RegistroJoinComponent } from './components/intra/registros/registro-join/registro-join.component';
import { LocalidadesComponent } from './components/intra/localidades/localidades/localidades.component';
import { LocalidadViewComponent } from './components/intra/localidades/localidad-view/localidad-view.component';
import { LocalidadJoinComponent } from './components/intra/localidades/localidad-join/localidad-join.component';
import { LocalidadDetailComponent } from './components/intra/localidades/localidad-detail/localidad-detail.component';
import { SitiosComponent } from './components/intra/sitios/sitios/sitios.component';
import { SitiosDetailComponent } from './components/intra/sitios/sitios-detail/sitios-detail.component';
import { SitiosJoinComponent } from './components/intra/sitios/sitios-join/sitios-join.component';
import { SitiosViewComponent } from './components/intra/sitios/sitios-view/sitios-view.component';
import { ClientesComponent } from './components/intra/clientes/clientes/clientes.component';
import { ClienteViewComponent } from './components/intra/clientes/cliente-view/cliente-view.component';
import { ClienteJoinComponent } from './components/intra/clientes/cliente-join/cliente-join.component';
import { ClienteDetailComponent } from './components/intra/clientes/cliente-detail/cliente-detail.component';
import { FormulariosRegistroComponent } from './components/intra/catalogos/formularios-registro/formularios-registro/formularios-registro.component';
import { FormulariosRegistroDetailComponent } from './components/intra/catalogos/formularios-registro/formularios-registro-detail/formularios-registro-detail.component';
import { FormulariosRegistroViewComponent } from './components/intra/catalogos/formularios-registro/formularios-registro-view/formularios-registro-view.component';
import { FormulariosRegistroJoinComponent } from './components/intra/catalogos/formularios-registro/formularios-registro-join/formularios-registro-join.component';
import { TipoCamposComponent } from './components/intra/catalogos/tipo-campos/tipo-campos/tipo-campos.component';
import { TipoCampoDetailComponent } from './components/intra/catalogos/tipo-campos/tipo-campo-detail/tipo-campo-detail.component';
import { TipoCampoViewComponent } from './components/intra/catalogos/tipo-campos/tipo-campo-view/tipo-campo-view.component';
import { TipoCampoJoinComponent } from './components/intra/catalogos/tipo-campos/tipo-campo-join/tipo-campo-join.component';







@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    SlideComponent,
    AboutComponent,
    FooterComponent,
    ServicesComponent,
    LoginComponent,
    InicioComponent,
    MenuComponent,
    EmpleadosComponent,
    EmpleadoDetailComponent,
    EmpleadoViewComponent,
    EmpleadoJoinComponent,
    CatalogosComponent,
    RolesComponent,
    RolesDetailComponent,
    RolesJoinComponent,
    RolesViewComponent,
    DatosEmpleadoComponent,
    DetailEmpleadoComponent,
    ContactComponent,
    EstadoCivilComponent,
    EstadoCivilDetailComponent,
    EstadoCivilJoinComponent,
    EstadoCivilViewComponent,
    RolesPermisosComponent,
    DatosEmpleadosJoinComponent,
    AmbulanciasComponent,
    AmbulanciaDetailComponent,
    AmbulanciaViewComponent,
    AmbulanciaJoinComponent,
    RegistrosComponent,
    RegistroDetailComponent,
    RegistroViewComponent,
    RegistroJoinComponent,
    LocalidadesComponent,
    LocalidadViewComponent,
    LocalidadJoinComponent,
    LocalidadDetailComponent,
    SitiosComponent,
    SitiosDetailComponent,
    SitiosJoinComponent,
    SitiosViewComponent,
    ClientesComponent,
    ClienteViewComponent,
    ClienteJoinComponent,
    ClienteDetailComponent,
    FormulariosRegistroComponent,
    FormulariosRegistroDetailComponent,
    FormulariosRegistroViewComponent,
    FormulariosRegistroJoinComponent,
    TipoCamposComponent,
    TipoCampoDetailComponent,
    TipoCampoViewComponent,
    TipoCampoJoinComponent
    
  ], 
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    APP_ROUTING,
    AccordionModule,
    BrowserAnimationsModule,
    TabViewModule,
    FieldsetModule,
    TooltipModule,
    CardModule,
    PasswordModule,
    ButtonModule,
    MessagesModule,
    MessageModule,
    MenuModule,
    MegaMenuModule,
    PanelMenuModule,
    SidebarModule,
    FullCalendarModule,
    DialogModule,
    InputTextModule,
    CalendarModule,
    CheckboxModule,
    CodeHighlighterModule,
    TableModule,
    DropdownModule,
    ProgressBarModule,
    SliderModule,
    ProgressSpinnerModule
    ],
  providers: [
    // HeroesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
