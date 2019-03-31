import { Component, OnInit } from '@angular/core';
import { ParticipanteService} from '../../services/service.index';


@Component({
  selector: 'app-participante',
  templateUrl: './participante.component.html',
  styleUrls: ['./participante.component.scss']
})
export class ParticipanteComponent implements OnInit {

  constructor(private _gameService: ParticipanteService) { }

  ngOnInit() {
    this._gameService.obtenerParticipantes().subscribe (
      res => console.log(res),
      err => console.error(err)
    );
  }

}
