import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { Car } from './interfaces/car.interface';
import {v4 as uuid} from 'uuid';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto';

@Injectable()
export class CarsService {
    private carro: Car[] = [
        {
            id:uuid(),
            modelo: "Corolla",
            marca: "Toyota",
            año: "2020",
            kilometraje: "35000",
            color: "Blanco",
            tipo_combustible: "Gasolina",
            transmision: "Automática"
          },
          {
            id:uuid(),
            modelo: "Civic",
            marca: "Honda",
            año: "2019",
            kilometraje: "42000",
            color: "Gris",
            tipo_combustible: "Gasolina",
            transmision: "Manual"
          },
          {
            id:uuid(),
            modelo: "Focus",
            marca: "Ford",
            año: "2021",
            kilometraje: "28000",
            color: "Azul",
            tipo_combustible: "Diésel",
            transmision: "Automática"
          }
    ];

    findAll(){
        return this.carro
    }

    findOneById(id:string){
        const car = this.carro.find(car => car.id===id);

        if(!car){
            throw new NotFoundException(`Datos con Id '${id}' no existe!`);
        }

        return car;
    }

    findOneByBrand(marca:string){
        const br = this.carro.filter(car => car.marca===marca);

        return br;
    }


    create(createCarDto: CreateCarDto){
        
        const car: Car={
            id: uuid(), //...createCarDto
            modelo:  createCarDto.modelo,
            marca: createCarDto.marca,
            año: createCarDto.año,
            kilometraje: createCarDto.kilometraje,
            color: createCarDto.color,
            tipo_combustible: createCarDto.tipo_combustible,
            transmision: createCarDto.transmision
        }

        this.carro.push(car);

        return car;
    }

    update(id: string, updateCarDto: UpdateCarDto){
        let carDB = this.findOneById(id);

        if(updateCarDto.id && updateCarDto.id !== id)
            throw new BadRequestException(`El id del carro no es válido`)

        this.carro = this.carro.map(car =>{
            if(car.id===id){
                carDB = {...carDB, ...updateCarDto, id}
                return carDB;
            }
            return car;
        })
        return carDB;
    }

    delete(id:string){
        const car = this.findOneById(id);
        this.carro = this.carro.filter(car => car.id !== id);
        console.log({car})
    }

}
