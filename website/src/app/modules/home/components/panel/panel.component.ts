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
     title: 'Desenvolvimentos que participei', 
     description: 'Softwares em que estive presente no desenvolvimento, seja profissionalmente ou relacionados a estudos.' },

    { image: 'undraw_developer_activity.svg', imageAlt: 'Developer Activity',
     title: 'Minhas últimas atividades', description: 'Estudos e projetos pessoais meus estão armazenados em meu repositório no Github. Fique à vontade para explorar, clonar, contribuir!' },

    { image: 'undraw_sharing_articles.svg', imageAlt: 'Sharing Articles',
     title: 'Contribuições para comunidade', description: 'Aqui estão minhas principais publicações e vídeos em que compartilho o conhecimento, afinal, ninguém cresce sozinho.' }
  ];

  ngOnInit(): void {
  }

}
