import 'reflect-metadata';
import { Field, InputType } from '@nestjs/graphql';

@InputType()
export default class UserInput {
  @Field()
  readonly email: string;

  @Field()
  readonly name: string;

  @Field()
  readonly password: string;
}
