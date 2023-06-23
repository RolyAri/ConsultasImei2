import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(){}

  modalVisibleImei=false;
  modalVisible=false;
  ngOnInit(): void {
    const input = document.getElementById('inputIMEI') as HTMLInputElement;
    input.addEventListener('input', function(this: HTMLInputElement) {
      if (this.value.length > 15) {
        this.value = this.value.slice(0, 15);
      }
    });
  }

  /* openModalCodigoImei() {
    const dialogRef = this.dialog.open(ModalCodigoImeiComponent,{
      enterAnimationDuration: "500ms",
      exitAnimationDuration: "500ms",
      width: "60%",
    });

    dialogRef.afterClosed().subscribe(result => {
      // Acciones después de que se cierre el modal
    });
  }
  openModalFormularioImei(){
    const dialogRef = this.dialog.open(ModalFormularioImeiComponent,{
      enterAnimationDuration: "500ms",
      exitAnimationDuration: "500ms",
      width: "60%",
    });

    dialogRef.afterClosed().subscribe(result => {
      // Acciones después de que se cierre el modal
    });
  } 
 */
  abrirModal(){
    this.modalVisible = true;
  }
  cerrarModal() {
    this.modalVisible = false;
  }
  openModal(){
    this.modalVisibleImei = true;
  }
  closeModal() {
    this.modalVisibleImei = false;
  }
}