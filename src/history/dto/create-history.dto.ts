import { ApiProperty } from "@nestjs/swagger";

class HistoryItem {

    @ApiProperty({
        example: "Candle",
        type: String,
    })
    title: string;

    @ApiProperty({
        example: "A big one",
        type: String,
    })
    subtitle: string;

    @ApiProperty({
        example: "automobile",
        type: String,
        description: "name of default image"
    })
    img: string;

    @ApiProperty({
        example: 123,
        type: Number,
    })
    price: number;

    @ApiProperty({
        example: 123,
        type: Number,
        description: "number of items in cart of this type"
    })
    count: number;

    @ApiProperty({
        example: 123,
        type: Number,
        description: "item id, that was bought"
    })
    item: number;
}

export class CreateHistoryDto {

    @ApiProperty({
        example: 123,
        type: Number,
        description: "user id"
    })
    user: number;

    @ApiProperty({
        type: [HistoryItem],
        description: "Items in cart"
    })
    items: HistoryItem[];
}