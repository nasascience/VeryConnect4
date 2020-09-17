import { Injectable } from '@angular/core';
declare var $: any

@Injectable({
  providedIn: 'root'
})
export class AlertsService {

  constructor() { }

  showSuccess(message: string){
    $("#success-alert").text(message)
    $("#success-alert").fadeIn(400)
    setTimeout(()=>{
      $("#success-alert").fadeOut(400)
    },3000)
  }

  showDanger(message: string){
    $("#danger-alert").text(message)
    $("#danger-alert").fadeIn(400)
    setTimeout(()=>{
      $("#danger-alert").fadeOut(400)
    },3000)
  }
}
