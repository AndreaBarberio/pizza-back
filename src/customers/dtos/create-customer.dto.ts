import { Priority, Status } from "../enums";

export class CreateCustomerDto {
    id: number;
    name: string;
    surname: string;
    email: string;
    telephone: number;
    priority: Priority;
    status: Status;
    createdAt: string;
    updatedAt: string;
}