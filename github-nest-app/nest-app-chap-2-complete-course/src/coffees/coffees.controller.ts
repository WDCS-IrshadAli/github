import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post, Query, Res } from '@nestjs/common';
import { CoffeesService } from './coffees.service';
import { CreateCoffeeDto } from './dto/create-coffee.dto/create-coffee.dto';
import { UpdateCoffeeDto } from './dto/update-coffee.dto/update-coffee.dto';

// nest g co | nest generate controller (to make controller)
// nest g s  | nest generate service
// nest g module coffees | (to generate module[mo] -to avoid importing 2 files{controller & serviceProvider}) --to maintain structure
// nest g class coffees/dto/create-coffee.dto --no-spec (it generate dto directory & file in it) with class name;
// class-validator(to validate types) | class-transformer | mapped-types(to reuse or extend (validation types --clas-validator))

@Controller('coffees')
export class CoffeesController {
    constructor(private readonly coffeesService: CoffeesService) {}

    @Get("flavors/abc/max")
    findAll(@Query() paginationQuery) {
        // const { limit, offset } = paginationQuery;
        // return `This action returns all coffees. Limit = ${limit} & Offset = ${offset}`;
        return this.coffeesService.findAll();
    }
    // findAll(@Res() response) {
    //     response.status(200).send('This returns all coffees...')
    // }

    // @Get(":id")
    // findOne(@Param() params) {
    //     return `This action return id: #${params.id}`;
    // }

    @Get(":id")
    findOne(@Param("id") id: number) {
        console.log(typeof id);
        
        // return `This action return id: #${id}`;
        return this.coffeesService.findOne(id);
    }

    @Post()
    // @HttpCode(HttpStatus.GONE)
    create(@Body() createCoffeeDto: CreateCoffeeDto) {
        console.log(createCoffeeDto instanceof CreateCoffeeDto);
        
    // create(@Body("name") body) {
        // return body;
        return this.coffeesService.create(createCoffeeDto);
    }

    @Patch(":id")
    update(@Param("id") id: string, @Body() updateCoffeeDto: UpdateCoffeeDto) {
        // return `This action updates #${id} coffee`
        return this.coffeesService.update(id, updateCoffeeDto);
    }

    @Delete(":id")
    delete(@Param("id") id: string) {
        // return `This action deletes #${id} coffee`
        return this.coffeesService.remove(id);
    }

    





}
