import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  trabajadorForm: FormGroup;
  enviado = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.trabajadorForm = this.formBuilder.group({
      nombre: ['',Validators.required],
      ci: ['',Validators.required],
      nroEmpleado: ['',Validators.required],
      areaTrabajo: ['',Validators.required],
      profesion: ['',Validators.required],
      salarioHora: ['',Validators.required],
      salarioMes: ['',Validators.required],

      tipoSangre: ['',Validators.required],
      estatura: ['',Validators.required],
      peso: ['',Validators.required],
      enfermedadesBase: ['',Validators.required],

      email: ['',Validators.required],
      telefono: ['',Validators.required],
      mensaje: ['',Validators.required]
    });
  }

  get f(){
    return this.trabajadorForm.controls;
  }


  processForm() {
    this.enviado = true;

    if(this.trabajadorForm.invalid){
      return;
    }
    const allInfo = `Nombre: ${this.trabajadorForm.value.nombre}. CI: ${this.trabajadorForm.value.ci}. Nro. de Empleado: ${this.trabajadorForm.value.nroEmpleado}. Area de Tranajo: ${this.trabajadorForm.value.areaTrabajo}. Profesion: ${this.trabajadorForm.value.profesion}. Salario Hora: ${this.trabajadorForm.value.salarioHora}. Salario Mes: ${this.trabajadorForm.value.salarioMes}. Tipo de sangre: ${this.trabajadorForm.value.tipoSangre}. Estatura: ${this.trabajadorForm.value.estatura}. Peso: ${this.trabajadorForm.value.peso}. Enfermedades de Base: ${this.trabajadorForm.value.enfermedadesBase} Email: ${this.trabajadorForm.value.email}. Telefono: ${this.trabajadorForm.value.telefono}. Mensaje: ${this.trabajadorForm.value.mensaje}`;
    alert(allInfo); 
  }

}
