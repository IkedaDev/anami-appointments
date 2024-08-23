import Swal, { SweetAlertOptions, SweetAlertIcon } from "sweetalert2"


export class AlertBuilder {
  
    private _alertArguments: SweetAlertOptions = {
      confirmButtonColor: '#b3a69a'
    }
  
    title(title: string){
      this._alertArguments.title = title
      return this
    }

    html(html: string){
     this._alertArguments.html = html;
     return this 
    }

    preConfirm( fn: (inputValue: any) => any) {
      this._alertArguments.preConfirm = fn
      return this
    }

    showCancelButton(showCancelButton: boolean){
      this._alertArguments.showCancelButton = showCancelButton
      return this
    }

    confirmButtonText(confirmButtonText: string){
      this._alertArguments.confirmButtonText = confirmButtonText
      return this
    }

    cancelButtonText(cancelButtonText: string){
      this._alertArguments.cancelButtonText = cancelButtonText
      return this
    }

    reverseButtons(reverseButtons: boolean){
      this._alertArguments.reverseButtons = reverseButtons
      return this
    }

    text(text: string){
      this._alertArguments.text = text
      return this
    }

    icon(icon: SweetAlertIcon){
      this._alertArguments.icon = icon
      return this
    }

    build(){
      return Swal.fire({ ...this._alertArguments })
    }
  
  }