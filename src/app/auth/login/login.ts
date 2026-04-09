import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-login',
    standalone: true,
    imports: [
        CommonModule,
        InputTextModule,
        ButtonModule,
        FormsModule
    ],
    templateUrl: './login.html',
    styleUrls: ['./login.css']
})
export class Login {
    constructor(private router: Router) { }

    // controle de visibilidade da senha
    passwordVisible = false;
    usuario: string = '';
    senha: string = '';

    togglePassword() {
        this.passwordVisible = !this.passwordVisible;
    }

    login() {
        const usuario = this.usuario;
        const senha = this.senha;

        // MOCK de autenticação
        if (usuario === 'admin' && senha === '123') {

            // salva token fake
            localStorage.setItem('token', 'fake-jwt-token');

            // redireciona
            this.router.navigateByUrl('/');

        } else {
            alert('Usuário ou senha inválidos');
        }
    }
}