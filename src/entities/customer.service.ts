import { Injectable } from "@nestjs/common";
import { Customer } from "./customer.entity";

@Injectable()
export default class CustomerService {
    private readonly customers: Customer[] = []

    constructor() {
        this.customers = [];
    }

    create(customer: Customer): Customer {
        this.customers.push(customer);
        return customer;
    }

    findAll(): Customer[] {
        return this.customers
    }

    findById(id: number): Customer {
        return this.customers.find(customer => customer.id === id)
    }

    update(id: number, newCustomer: Customer): Customer {
        const customer = this.findById(id)
        if (customer) {
            Object.assign(customer, newCustomer)
            return customer;
        }
        return null
    }

    delete(id: number): boolean {
        const index = this.customers.findIndex(customer => customer.id === id)
        if (index !== -1) {
            this.customers.splice(index, 1)
            return true;
        } return false;
    }

}