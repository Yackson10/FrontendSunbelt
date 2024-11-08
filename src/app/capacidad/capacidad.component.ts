import { Component } from '@angular/core';
import { CapacidadService, Capacidad, CapacidadRes} from '../service/capacidad.service';
import { TecnologiaService, Tecnologia } from '../service/tecnologia.service';
import { Cliente, ConsultaService } from '../service/cliente.service';

@Component({
  selector: 'app-capacidad',
  templateUrl: './capacidad.component.html',
  styleUrls: ['./capacidad.component.scss']
})
export class CapacidadComponent {
  tipoDocumento: string = 'C'; // Default: Cédula de Ciudadanía
  numeroDocumento: string = '';
  resultado: any = null; // Aquí almacenaremos el resultado de la consulta

  conflicto: string = '';
  constructor(private consultaService: ConsultaService) { } 

  // Método para manejar la acción de enviar el formulario
  onSubmit() {
    // Simular consulta a la base de datos o API
    this.consultarDocumento(this.tipoDocumento, this.numeroDocumento);
  }

  // Simulación de la consulta a un API
  consultarDocumento(tipo: string, numero: string) {
    // Lógica de consulta (esto es solo un ejemplo)
    this.conflicto = '';
    this.resultado = undefined;
    this.consultaService.consultarUsuario(tipo, numero).subscribe(response => {
      this.resultado = {
        success: true,
        nombre: response?.primerNombre,
        segundoNombre: response?.segundoNombre,
        apellido: response?.primerApellido,
        segundoApellido: response?.segundoApellido,
        telefono: response?.telefono,
        direccion: response?.direccion,
        ciudad: response?.ciudadResidencia
      };
      

    },
    (error) => {
      this.conflicto = error.error.message;
      console.log('Error al guardar la tecnología:', error);
    }
  );
      
    
  }

}
