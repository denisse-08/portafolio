import { Component,OnInit} from '@angular/core';

@Component({
  selector: 'app-sobre-mi',
  standalone: true,
  imports: [],
  templateUrl: './sobre-mi.component.html',
  styleUrl: './sobre-mi.component.css'
})
export class SobreMiComponent implements OnInit{
  denisse: DenisseSanJuan;
  formattedCode: string = ''; // Inicializar con una cadena vacía
  constructor() {
    this.denisse = new DenisseSanJuan();
  }
  ngOnInit() {
    this.formatCode();
  }
  formatCode() {
    this.formattedCode = `
class DenisseSanJuan {
  constructor() {
    this.name = '${this.denisse.name}';
    this.age = ${this.denisse.age};
    this.skills = [
      '${this.denisse.skills.join("', '")}'
    ];
    this.experience = [
      { "company": "${this.denisse.experience[0].company}", "role": "${this.denisse.experience[0].role}" },
      { "company": "${this.denisse.experience[1].company}", "role": "${this.denisse.experience[1].role}" }
    ];
  }
}`;
  }
}

class DenisseSanJuan {
  name: string;
  age: number;
  skills: string[];
  experience: { company: string, role: string }[];

  constructor() {
    this.name = 'Denisse';
    this.age = 22;
    this.skills = [
      'HTML', 'CSS', 'JavaScript','C#', 'Angular', 'Ionic', 'Laravel', 'Node.Js','Nets.Js','.NET'
    ];
    this.experience = [
      { company: 'GlobalTech', role: 'Developer' },
      { company: 'EctoTec', role: 'Developer' }
    ];
  }
}

