import { ApiProperty } from "@nestjs/swagger";
import { History, HistoryItem as HistoryItemPrism } from "@prisma/client";

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

export class HistoryDto {

    @ApiProperty({
        example: 123,
        type: Number,
        description: "user id"
    })
    user: number;

    @ApiProperty({
        example: 123,
        type: Number,
        description: "total price"
    })
    totalPrice: number;

    @ApiProperty({
        example: Date.now(),
        type: Date,
        description: "date of purchase"
    })
    time: Date;

    @ApiProperty({
        type: [HistoryItem],
        description: "Items in cart"
    })
    items: HistoryItem[];

    static fromPrisma(prisma: History & { items: HistoryItemPrism[] }): HistoryDto {
        return { ...prisma, user: prisma.userId, totalPrice: prisma.totalPrice.toNumber(), items: prisma.items.map(x => ({ ...x, item: x.itemId, price: x.price.toNumber() })) }
    }
}