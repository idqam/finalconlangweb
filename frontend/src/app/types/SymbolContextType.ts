export interface SymbolContextType {
  vowels: string[];
  consonants: string[];
  activeVowels: string[];
  activeConsonants: string[];
  toggleSymbol: (symbol: string) => void;
  isSymbolActive: (symbol: string) => boolean;
  updateInputMapToPhoneme: (key: any, value: any) => void;
  inputMapToPhoneme: Map<string, string>;
}
