import { ApiProperty } from "@nestjs/swagger";

export class UserDto {
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
}
