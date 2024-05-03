import { ApiProperty } from "@nestjs/swagger";

export class CreateItemDto {

    @ApiProperty({
        example: "Candle",
        type: String,
    })
    title: String;

    @ApiProperty({
        example: "A big one",
        type: String,
    })
    subtitle: String;

    @ApiProperty({
        example: "automobile",
        type: String,
        description: "name of default image"
    })
    img: String;

    @ApiProperty({
        example: 123,
        type: Number,
    })
    price: Number;

    @ApiProperty({
        example: 1,
        type: Number,
    })
    supplier: Number;
}

