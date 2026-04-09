import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { AvatarModule } from 'primeng/avatar';
import { DrawerModule } from 'primeng/drawer';
import { TooltipModule } from 'primeng/tooltip';

@Component({
    selector: 'app-dashboard',
    standalone: true,
    imports: [
        CommonModule,
        RouterModule,
        ButtonModule,
        AvatarModule,
        DrawerModule,
        TooltipModule
    ],
    templateUrl: './dashboard.html',
    styleUrls: ['./dashboard.css']
})
export class Dashboard {
    sidebarVisible: boolean = false;
    activeDropdown: string | null = null;
    
    // Menu items para o mobile
    mobileMenuItems = [
        {
            label: 'Visão geral',
            icon: 'pi pi-home',
            routerLink: '/dashboard'
        },
        {
            label: 'Pessoas',
            icon: 'pi pi-users',
            items: [
                { label: 'Ver todos', icon: 'pi pi-list' },
                { label: 'Adicionar pessoa', icon: 'pi pi-plus' },
                { label: 'Campos adicionais', icon: 'pi pi-tags' },
                { label: 'Categorias', icon: 'pi pi-folder' },
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
            icon: 'pi pi-sitemap',
            routerLink: '/departamentos'
        },
        {
            label: 'Congregação',
            icon: 'pi pi-building',
            routerLink: '/congregacao'
        },
        {
            label: 'Ensino',
            icon: 'pi pi-book',
            routerLink: '/ensino'
        },
        {
            label: 'Financeiro',
            icon: 'pi pi-wallet',
            routerLink: '/financeiro'
        },
        {
            label: 'Patrimônio',
            icon: 'pi pi-box',
            routerLink: '/patrimonio'
        },
        {
            label: 'Agenda',
            icon: 'pi pi-calendar',
            routerLink: '/agenda'
        },
        {
            label: 'Mídias',
            icon: 'pi pi-image',
            routerLink: '/midias'
        },
        {
            label: 'Ajuda',
            icon: 'pi pi-question-circle',
            routerLink: '/ajuda'
        }
    ];

    constructor() {
        // Força o ChangeDetection
        console.log('Dashboard inicializado');
    }

    toggleDropdown(dropdownName: string, event: Event): void {
        event.stopPropagation();
        if (this.activeDropdown === dropdownName) {
            this.activeDropdown = null;
        } else {
            this.activeDropdown = dropdownName;
        }
    }

    closeAllDropdowns(): void {
        this.activeDropdown = null;
    }

    openMobileMenu(): void {
        console.log('Abrindo menu mobile, estado atual:', this.sidebarVisible);
        // Força a abertura do drawer
        this.sidebarVisible = true;
        // Força a detecção de mudanças se necessário
        setTimeout(() => {
            console.log('Menu aberto:', this.sidebarVisible);
        }, 0);
    }

    closeMobileMenu(): void {
        console.log('Fechando menu mobile');
        this.sidebarVisible = false;
    }

    // Alterna o menu (opcional)
    toggleMobileMenu(): void {
        console.log('Alternando menu mobile');
        this.sidebarVisible = !this.sidebarVisible;
    }
}