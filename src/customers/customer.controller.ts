import CustomerService from "./customer.service";
import { Customer } from "../database/entities/customer.entity";
import { Body, Controller, Delete, Get, HttpCode, Param, Patch, Post } from "@nestjs/common";
import { UpdateCustomerDto } from "./dtos/index";
import { Priority, Status } from "./enums";

@Controller("customers")
export class CustomerController {
    constructor(private readonly customerService: CustomerService) { }
    private customers: Customer[] = [{
        id: 1, name: "John", surname: "Doe", email: "JD@mail.com", telephone: 3334567233, priority: Priority.HIGH,
        status: Status.PENDING,
        createdAt: new Date(),
        updatedAt: new Date(),
    },
    {
        id: 2, name: "Phil", surname: "Deen", email: "pdoo@mail.com", telephone: 3334567210, priority: Priority.LOW,
        status: Status.COMPLETED,
        createdAt: new Date(),
        updatedAt: new Date(),
    },
    {
        id: 3, name: "Paul", surname: "Phinn", email: "fai@mail.com", telephone: 3334566540, priority: Priority.MEDIUM,
        status: Status.COMPLETED,
        createdAt: new Date(),
        updatedAt: new Date(),
    },
    {
        id: 4, name: "Mike", surname: "Street", email: "street@mail.com", telephone: 3334567650, priority: Priority.HIGH,
        status: Status.IN_PROGRESS,
        createdAt: new Date(),
        updatedAt: new Date(),
    },]
    @Get()
    findAll() {
        return this.customers
    }

    @Get(":id")
    async findOne(@Param("id") id: number) {
        const customer = this.customers.find((customer) => customer.id === id)
        return customer
    }

    @Post()
    async create(@Body() input) { // customerData: Customer): Promise<Customer> {
        const customer = {
            ...input,
            name: input.name,
            surname: input.surname,
            email: input.email,
            telephone: input.telephone,
            createdAt: new Date(input.createdAt),
            updatedAt: new Date(input.createdAt),
            id: this.customers.length + 1
        }
        this.customers.push(customer)
    }

    @Patch(":id")
    update(@Param(":id") id: number, @Body() input: UpdateCustomerDto) { // , @Body() customerData: Customer) {
        const index = this.customers.findIndex((customer) => customer.id === id)
        this.customers[index] = {
            ...this.customers[index],
            ...input,
            createdAt: input.createdAt
                ? new Date(input.createdAt)
                : this.customers[index].createdAt,
            updatedAt: input.updatedAt
                ? new Date(input.updatedAt)
                : this.customers[index].updatedAt
        }
        return this.customers[index]
    }
    @Delete(':id')
    @HttpCode(204)
    remove(@Param('id') id) {
        this.customers = this.customers.filter((goal) => goal.id !== id)
    }
}