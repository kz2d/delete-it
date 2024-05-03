import { ApiProperty } from "@nestjs/swagger";

class HistoryItem {

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
        example: 123,
        type: Number,
        description: "number of items in cart of this type"
    })
    count: Number;

    @ApiProperty({
        example: 123,
        type: Number,
        description: "item id, that was bought"
    })
    item: Number;
}

export class CreateHistoryDto {

    @ApiProperty({
        example: 123,
        type: Number,
        description: "user id"
    })
    user: Number;

    @ApiProperty({
        type: [HistoryItem],
        description: "Items in cart"
    })
    items: HistoryItem[];
}