import { CreateSuggestionDto } from './dto/create-suggestion.dto';
import { Repository } from 'typeorm';
import { Suggestion } from './entities/suggestion.entity';
export declare class SuggestionsService {
    private suggestionsRepository;
    constructor(suggestionsRepository: Repository<Suggestion>);
    create(createSuggestionDto: CreateSuggestionDto): Promise<Suggestion>;
    findAll(): Promise<Suggestion[]>;
    findOne(id: string): Promise<Suggestion>;
    delete(id: string): Promise<import("typeorm").DeleteResult>;
}
