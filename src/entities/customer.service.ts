import { Injectable } from "@nestjs/common";
import { Customer } from "./customer.entity";

@Injectable()
export default class CustomerService {
    // private è un modificatore di accesso, che indica che customers
    // è accessibile solo all'interno della stessa classe, readonly sola lettura
    private readonly customers: Customer[] = []
    // customers: Customer[] è la tipizzazione, = [] viene assegnato il valore predefinito di array vuoto

    // metodo che si aspetta un parametro customer e lo pusha in customers[]
    create(customer: Customer): Customer {
        this.customers.push(customer);

        return customer;
    }
    // metodo che mostra l'array customers
    findAll(): Customer[] {
        return this.customers
    }
    // metodo che cerca un singolo cliente in base all'id 
    findById(id: number): Customer {
        return this.customers.find(customer => customer.id === id)
    }
    // metodo che modifica un cliente esistente
    // si aspetta un id e un oggetto newCustomer di tipo Customer, 
    // per poter ricoosscere quale clinte e come modificarlo
    update(id: number, newCustomer: Customer): Customer {
        // inizializziamo il customer identificandolo tramite id
        const customer = this.findById(id)
        // se corrisponde allora  
        if (customer) {
            //copia le proprietà enumerabili di  
            //                         newCustomer 
            // nell'oggetto customer
            Object.assign(customer, newCustomer)
            return customer;
        }
        return null
    }
    // metodo per eliminare un cliente da customers
    // Si aspetta l'ID del cliente da eliminare
    delete(id: number): boolean {
        // Cerca l'indice del cliente nell'array dei 
        // clienti in base all'ID fornito
        const index = this.customers.findIndex(customer => customer.id === id);
        // Se l'indice del cliente è diverso da -1
        // (cioè se il cliente è stato trovato)
        if (index !== -1) {
            // Elimina il cliente dall'array utilizzando 
            //l'indice trovato
            this.customers.splice(index, 1);

            // Restituisce true per indicare 
            // che il cliente è stato eliminato con successo
            return true;
        }
        // Se l'indice del cliente è -1 
        // Restituisce false per indicare che il cliente
        // non è stato trovato e quindi non è stato eliminato
        return false;
    }


}