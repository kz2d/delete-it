import { ApiProperty } from "@nestjs/swagger";
import { Prisma, Item } from "@prisma/client";

export class ItemDto {

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
        example: 1,
        type: Number,
    })
    supplier: number;

    static fromPrisma(prisma: Item): ItemDto {
        return { ...prisma, supplier: prisma.supplierId, price: prisma.price.toNumber() };
    };
}

