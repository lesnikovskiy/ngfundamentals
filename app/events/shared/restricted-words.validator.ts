import { FormControl } from "@angular/forms";

export function restrictedWords(restrictedWords: string[]) {
        return (control: FormControl): { [key: string]: any } => {
            if (!restrictedWords)
                return null;

            let invalidWords = restrictedWords.map(w => control.value.includes(w) ? w : null)
                .filter(w => w != null);

            return invalidWords && invalidWords.length > 0 
                ? { "restrictedWords": invalidWords.join(", ") } 
                : null;
        }
    }