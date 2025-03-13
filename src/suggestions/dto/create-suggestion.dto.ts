import { IsNotEmpty } from "class-validator";

export class CreateSuggestionDto {
    @IsNotEmpty({message: 'Suggestion is required'})
    suggestion: string;

    @IsNotEmpty({message: 'Description is required'})
    description: string;
}
