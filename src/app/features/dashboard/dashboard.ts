import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenubarModule } from 'primeng/menubar';
import { TableModule } from 'primeng/table';

@Component({
    selector: 'app-dashboard',
    standalone: true,
    imports: [
        CommonModule,
        MenubarModule,
        TableModule
    ],
    templateUrl: './dashboard.html',
    styleUrls: ['./dashboard.css']
})
export class Dashboard {
    menuOpen = false;

    menuItems = [
        {
            label: 'Visão geral',
            icon: 'pi pi-home'
        },
        {
            label: 'Pessoas',
            icon: 'pi pi-users',
            items: [
                { label: 'Ver todos', icon: 'pi pi-list' },
                { label: 'Adicionar pessoa', icon: 'pi pi-user-plus' },
                { label: 'Campos adicionais', icon: 'pi pi-cog' },
                { label: 'Categorias', icon: 'pi pi-tags' },
                { label: 'Função', icon: 'pi pi-briefcase' },
                { label: 'Credencial', icon: 'pi pi-id-card' },
                { label: 'Aniversariantes', icon: 'pi pi-gift' },
                { label: 'Relatórios', icon: 'pi pi-chart-line' },
                { label: 'Importar', icon: 'pi pi-upload' },
                { label: 'Exportar', icon: 'pi pi-download' }
            ]
        },
        {
            label: 'Departamentos',
            icon: 'pi pi-sitemap'
        },
        {
            label: 'Congregação',
            icon: 'pi pi-building'
        },
        {
            label: 'Ensino',
            icon: 'pi pi-book'
        },
        {
            label: 'Financeiro',
            icon: 'pi pi-wallet'
        },
        {
            label: 'Patrimônio',
            icon: 'pi pi-box'
        },
        {
            label: 'Agenda',
            icon: 'pi pi-calendar'
        },
        {
            label: 'Mídias',
            icon: 'pi pi-image'
        },
        {
            label: 'Ajuda',
            icon: 'pi pi-question-circle'
        }
    ];

    membros = [
        { nome: 'João Silva', email: 'joao@email.com', status: 'Ativo' },
        { nome: 'Maria Souza', email: 'maria@email.com', status: 'Ativo' },
        { nome: 'Pedro Lima', email: 'pedro@email.com', status: 'Inativo' }
    ];

    toggleMenu() {
        this.menuOpen = !this.menuOpen;
    }
}