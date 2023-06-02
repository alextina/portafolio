import { Component } from '@angular/core';
import { FormSubmitService } from '../services/form-submit.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  form: any = {
    name: '',
    email: '',
    message: ''
  };
  formError: string = ''; // Variable para almacenar el mensaje de error
  messageSent: boolean = false;
  sending: boolean = false; // Variable para controlar el estado de envío

  constructor(private formSubmitService: FormSubmitService) { }

  onSubmit(): void {
    if (this.validateForm()) {
      this.sending = true; // Activar el estado de envío

      this.formSubmitService.submitForm(this.form)
        .then(data => {
          this.messageSent = true; // Activar el mensaje de éxito
          this.sending = false; // Desactivar el estado de envío

          setTimeout(() => {
            this.messageSent = false; // Desactivar el mensaje después de 5 segundos
            this.clearForm(); // Borrar los campos completados
          }, 2000);
        })
        .catch(error => {
          console.error('Error submitting form:', error);
          this.sending = false; // Desactivar el estado de envío en caso de error
        });
    }
  }

  validateForm(): boolean {
    this.formError = ''; // Reiniciar el mensaje de error

    if (!this.form.name || !this.form.email || !this.form.message) {
      this.formError = 'Todos los campos son requeridos.';
      return false;
    }

    if (!this.isValidEmail(this.form.email)) {
      this.formError = 'Formato de correo electrónico no válido.';
      return false;
    }

    return true;
  }

  isValidEmail(email: string): boolean {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  }

  clearForm(): void {
    this.form.name = '';
    this.form.email = '';
    this.form.message = '';
  }
}
