import { IsOptional, IsString, IsUUID  } from "class-validator";

export class UpdateCarDto{
    
    @IsUUID()
    @IsString()
    @IsOptional()
    readonly id?: string;

    @IsString()
    @IsOptional()
    readonly brand?:string;

    @IsString()
    @IsOptional()
    readonly model?:string;

    @IsString()
    @IsOptional()
    readonly año?: string;

    @IsString()
    @IsOptional()
    readonly kilometraje?: string;

    @IsString()
    @IsOptional()
    readonly color?: string;

    @IsString()
    @IsOptional()
    readonly tipo_combustible?: string;

    @IsString()
    @IsOptional()
    readonly transmision?: string;
}