import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { Livro } from "./livro.model";
import { LivrosService } from "./livros.service";

@Controller('livros')
export class LivrosController {
    constructor(private livrosService: LivrosService) {

    }

    @Get()
    async obterTodos(): Promise<Livro[]> {
        return this.livrosService.obterTodos();
    }

    @Get(':id')
    async obterLivro(@Param() params): Promise<Livro> {
        return this.livrosService.obterUm(params.id);
    }

    @Post()
    async criarLivro(@Body() livro: Livro) {
        this.livrosService.criar(livro);
    }

    @Put()
    async alterarLivro(@Body() livro: Livro): Promise<[number, Livro[]]>  {
        return this.livrosService.alterar(livro);
    }

    @Delete(':id')
    apagarLivro(@Param() params) {
        this.livrosService.apagar(params.id);
    }
}