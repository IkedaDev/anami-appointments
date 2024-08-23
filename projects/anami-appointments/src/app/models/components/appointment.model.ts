import moment from "moment";
import { FacialCleansing, MassageDuration, NailCut } from "../../interfaces"
import 'moment-timezone';
import { UUID } from "../../adapters/uuid";
interface Props{
    id?: string
    status?: 'OK'
    execDate?: Date
    patient?: string
    details: Details
    amounts?: AppointmentAmounts
}


export class Appointment {
    id: string;
    status: 'OK';
    execDate: Date;
    patient: string;
    details: Details;
    amounts: AppointmentAmounts = { hotel: 0, anami: 0 };

    constructor( props : Props) {
        this.id = props.id || UUID.generate()
        this.status = props.status || 'OK';
        this.execDate = props.execDate || moment.tz('America/Santiago').toDate();
        this.patient = props.patient || '';
        this.details = props.details;
        this.calcAmounts()
    }

    private calcAmounts(){
        const total: AppointmentAmounts = { hotel: 0, anami: 0 };

        if(!this.details) return
        if(this.details.massageDuration){
            total.hotel += this.details.massageDuration.price * (this.details.massageDuration.profit.hotel / 100)
            total.anami += this.details.massageDuration.price * (this.details.massageDuration.profit.anami / 100)
        }
        if(this.details.nailCuts){
            total.hotel += this.details.nailCuts.price * (this.details.nailCuts.profit.hotel / 100)
            total.anami += this.details.nailCuts.price * (this.details.nailCuts.profit.anami / 100)
        }
        if(this.details.facialCleansing){
            total.hotel += this.details.facialCleansing.price * (this.details.facialCleansing.profit.hotel / 100)
            total.anami += this.details.facialCleansing.price * (this.details.facialCleansing.profit.anami / 100)
        }
        this.amounts = total;
        return total
    }

    total(){
        return this.amounts.anami + this.amounts.hotel
    }
}

interface Details {
    massageDuration: MassageDuration;
    facialCleansing: FacialCleansing;
    nailCuts: NailCut;
}

export interface AppointmentAmounts {
    hotel: number;
    anami: number;
}
