import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {

  constructor() { }

  panelItems: Object[] = [
    { image: 'undraw_building_websites.svg', imageAlt: 'Building Softwares',
     title: 'Projetos e Softwares', 
     description: 'Conheça os principais sistemas que desenvolvi ou participei do desenvolvimento em ambiente profissional e de estudos.',
     path: '#' },

    { image: 'undraw_developer_activity.svg', imageAlt: 'Developer Activity',
     title: 'Atividades', 
     description: 'Meus estudos e projetos pessoais estão armazenados em meu repositório no Github. Fique à vontade para explorar, clonar e contribuir!',
     path: '/atividades' },

    { image: 'undraw_sharing_articles.svg', imageAlt: 'Sharing Articles',
     title: 'Blog', description: 'Aqui estão minhas principais publicações e vídeos em que compartilho o conhecimento, afinal, ninguém cresce sozinho.',
     path: '#' }
  ];

  ngOnInit(): void {
  }

}
