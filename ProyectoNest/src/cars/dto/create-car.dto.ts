import { IsString, MinLength  } from "class-validator";

export class CreateCarDto{
    
    @IsString()
    readonly marca:string;

    @IsString()
    @MinLength(3)
    readonly modelo:string;

    @IsString()
    readonly año:string;

    @IsString()
    readonly kilometraje:string;

    @IsString()
    readonly color:string;

    @IsString()
    readonly tipo_combustible:string;

    @IsString()
    readonly transmision:string;
}