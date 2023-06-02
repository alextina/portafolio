import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormSubmitService {
  private url = 'https://formsubmit.co/ajax/castilloavilaa@gmail.com';
  private headers = {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  };

  submitForm(formData: any): Promise<any> {
    const body = JSON.stringify(formData);

    return fetch(this.url, {
      method: 'POST',
      headers: this.headers,
      body: body
    })
      .then(response => response.json())
      .catch(error => {
        console.error('Error submitting form:', error);
        throw error;
      });
  }
}
