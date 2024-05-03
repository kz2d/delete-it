import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto {
    @ApiProperty({
        example: "lol@example.com",
        type: String,
    })
    email: String;

    @ApiProperty({
        example: "kz2d",
        type: String,
    })
    name: String;

    @ApiProperty({
        example: "strong_password123*",
        type: String,
    })
    password: String;
}
