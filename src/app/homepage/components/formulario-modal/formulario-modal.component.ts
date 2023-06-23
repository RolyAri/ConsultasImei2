import { Component, EventEmitter, Output } from '@angular/core';
import { IconService } from 'src/app/services/icon.service';

@Component({
  selector: 'app-formulario-modal',
  templateUrl: './formulario-modal.component.html',
  styleUrls: ['./formulario-modal.component.css']
})
export class FormularioModalComponent {
  private _open:boolean = true; 
  private _typeDialog:number = 0;
  private _headTitle:string = 'Formulario'; 
  private _info:string = 'Rellene los campos del formulario';
  private _rutaUrl:string = 'assets/images/share/question.png';
  /* @Output() close: EventEmitter<boolean> = new EventEmitter(); */
  @Output() closeModalEvent = new EventEmitter();

  constructor(public icoSrv: IconService){ }

  set headTitle(v) { this._headTitle = v; }
  set info(v) { this._info = v; }
  set open(v) { this._open = v; }
  set rutaUrl(v) { this._rutaUrl = v; }
  set typeDialog(v) { this._typeDialog = v; }
  get headTitle():string { return this._headTitle; }
  get info():string { return this._info; }
  get open():boolean { return this._open; }
  get rutaUrl():string { return this._rutaUrl; }
  get typeDialog():number { return this._typeDialog; }

  ngOnInit() {
  }

  fnInit(typeDialog:number = 1){
      this.typeDialog = typeDialog;
  }

  fnCancel(){
      this.open = false;
      this.closeModalEvent.emit();
  }

  fnAcept(){
      this.open = false;
      this.closeModalEvent.emit();
  }
  public GetFileOnLoad(event: any) {
    var file = event.target.files[0];
    var element = document.getElementById("fakeFileInput") as HTMLInputElement | null;
    if(element != null) {
      element.value = file?.name;
    }
  }
  
}
