import { DataTypes } from "sequelize";
import { AllowNull, AutoIncrement, Column, Model, PrimaryKey, Table} from "sequelize-typescript";

@Table({
    tableName: 'product',
    timestamps: false,
}
)

export class ProductEntity extends Model {
    @PrimaryKey
    @AutoIncrement
    @Column({
        allowNull: false,
        type: DataTypes.INTEGER,
    })
    id: number;

    @Column({
        allowNull: false,
        type: DataTypes.STRING(100),
    })
    name: string;

    @Column({
        allowNull: false,
        type: DataTypes.FLOAT(14, 2),
    })
    value: number;

    @Column({
        allowNull: false,
        type: DataTypes.STRING(500),
    })
    description: string;

    @Column({
        allowNull: false,
        type: DataTypes.INTEGER,
    })
    brandId: number;
}