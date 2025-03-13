import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SuggestionsService } from './suggestions.service';
import { CreateSuggestionDto } from './dto/create-suggestion.dto';

@Controller('suggestions')
export class SuggestionsController {
  constructor(private readonly suggestionsService: SuggestionsService) {}

  @Post()
  create(@Body() createSuggestionDto: CreateSuggestionDto) {
    return this.suggestionsService.create(createSuggestionDto);
  }

  @Get()
  findAll() {
    return this.suggestionsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.suggestionsService.findOne(id);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.suggestionsService.delete(id);
  }
}