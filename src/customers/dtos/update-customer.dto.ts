import { PartialType } from '@nestjs/mapped-types';
import { CreateCustomerDto } from './create-customer.dto';


// Pulls types from CreateCustomerDto into UpdateCustomerDto
export class UpdateCustomerDto extends PartialType(CreateCustomerDto) { }