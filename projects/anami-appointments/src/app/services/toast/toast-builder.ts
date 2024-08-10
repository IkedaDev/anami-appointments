import Swal, { SweetAlertOptions, SweetAlertIcon } from "sweetalert2"


export class ToastBuilder {
  
    private _toastArguments: SweetAlertOptions = {
      toast: true,
      position: 'top-end',
      timer: 2000,
      showConfirmButton: false,
    }
  
    addTitle(title: string){
      this._toastArguments.title = title
      return this
    }
  
    addIcon(icon: SweetAlertIcon){
      this._toastArguments.icon = icon
      return this
    }

    build(){
      return Swal.fire({ ...this._toastArguments })
    }
  
  }