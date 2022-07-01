		import { Component, OnInit } from '@angular/core';
		import { KeycloakService } from 'keycloak-angular';
		import { KeycloakProfile, KeycloakRoles } from 'keycloak-js';

		@Component({
		  selector: 'app-root',
		  templateUrl: './app.component.html',
		  styleUrls: ['./app.component.css']
		})

		export class AppComponent implements OnInit {
      	title(title: any) {
        throw new Error('Método no implementado.');
      }

		  public isLogueado = false;
		  public perfilUsuario: KeycloakProfile | null = null;
		 
		  constructor(private readonly keycloak: KeycloakService) {}

		  public async ngOnInit() {

		    this.isLogueado = await this.keycloak.isLoggedIn();

		    type rolesUsuarios = Array<{id: number, text: string}>;

		    if (this.isLogueado) {
		      this.perfilUsuario = await this.keycloak.loadUserProfile();
		    }

		  }

		  public iniciarSesion() {
		    this.keycloak.login();
		  }

		  public cerrarSesion() {
		    this.keycloak.logout();
		  }
		  
		}
