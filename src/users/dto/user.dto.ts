import { ApiProperty } from "@nestjs/swagger";

export class UserDto {
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
}
