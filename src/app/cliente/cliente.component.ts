import { Component } from '@angular/core';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
})
export class ClienteComponent {
  tipoDocumento: string = 'C'; // Default: Cédula de Ciudadanía
  numeroDocumento: string = '';
  resultado: any = null; // Aquí almacenaremos el resultado de la consulta

  // Método para manejar la acción de enviar el formulario
  onSubmit() {
    // Simular consulta a la base de datos o API
    this.consultarDocumento(this.tipoDocumento, this.numeroDocumento);
  }

  // Simulación de la consulta a un API
  consultarDocumento(tipo: string, numero: string) {
    // Lógica de consulta (esto es solo un ejemplo)
    if (numero === '12345678') {
      this.resultado = {
        success: true,
        tipoDocumento: tipo === 'C' ? 'Cédula de Ciudadanía' : 'Pasaporte',
        numeroDocumento: numero,
        nombre: 'Juan',
        apellido: 'Pérez',
        telefono: '3001234567'
      };
    } else {
      this.resultado = {
        error: 'Documento no encontrado'
      };
    }
  }
}
