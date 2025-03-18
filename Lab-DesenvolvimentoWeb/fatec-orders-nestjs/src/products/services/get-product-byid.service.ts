import { Injectable } from '@nestjs/common';

@Injectable()
export class GetProductByidService {
    execute(id: number): any{
        return[{
            id,
            name: "Bolacha",
            value: 2.59,
            brand: "Trakinas",
            weight: 100,
        }]
    }
}
