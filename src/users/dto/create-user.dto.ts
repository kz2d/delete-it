import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto {
    @ApiProperty({
        example: "lol@example.com",
        type: String,
    })
    email: string;

    @ApiProperty({
        example: "kz2d",
        type: String,
    })
    name: string;

    @ApiProperty({
        example: "strong_password123*",
        type: String,
    })
    password: string;
}
