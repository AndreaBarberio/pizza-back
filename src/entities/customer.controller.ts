import CustomerService from "./customer.service";
import { Customer } from "./customer.entity";
import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";

@Controller("customers")
export class CustomerController {
    constructor(private readonly customerService: CustomerService) { }

    @Get()
    async findAll(): Promise<Customer[]> {
        return this.customerService.findAll()
    }

    @Get(":id")
    async findOne(@Param("id") id: number): Promise<Customer> {
        return this.customerService.findById(id);
    }

    @Post()
    async create(@Body() customerData: Customer): Promise<Customer> {
        return this.customerService.create(customerData)
    }
    @Put(":id")
    update(@Param(":id") id: number, @Body() customerData: Customer) {
        return this.customerService.update(id, customerData)
    }
    @Delete(":id")
    async delete(@Param("id") id: number): Promise<boolean> {
        return this.customerService.delete(id)
    }
}