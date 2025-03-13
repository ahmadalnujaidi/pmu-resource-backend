import { Injectable } from '@nestjs/common';
import { CreateSuggestionDto } from './dto/create-suggestion.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Suggestion } from './entities/suggestion.entity';

@Injectable()
export class SuggestionsService {

  constructor(
    @InjectRepository(Suggestion)
    private suggestionsRepository: Repository<Suggestion>,
  ) {}

  async create(createSuggestionDto: CreateSuggestionDto) {
    const suggestion = this.suggestionsRepository.create(createSuggestionDto);
    return this.suggestionsRepository.save(suggestion);
  }

  async findAll() {
    return this.suggestionsRepository.find();
  }

  async findOne(id: string) {
    return this.suggestionsRepository.findOne({ where: { id } });
  }

  async delete(id: string) {
    return this.suggestionsRepository.delete(id);
  }
}
