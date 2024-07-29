import random

def generate_conlang(vowels: list[str], consonants: list[str]) -> dict:
    phonemes = vowels + consonants
    name = "PLACEHOLDER"
    allowed_syllables = ['CCV', 'V', 'VVV', 'CVC', 'VCCC', 'CVCVV']
    words = []
    for _ in range(100):
        current_syllable = random.choice(allowed_syllables)
        preWord = ''
        for i in current_syllable:
            if i == 'C':
                preWord  += random.choice(consonants)
            if i == 'V':
                preWord += random.choice(vowels)
        words.append(preWord)
    
    grammar_rules = {
        "word_order": random.choice(["SVO", "SOV", "VSO"]),
        "cases": random.randint(2, 8),
        "genders": random.randint(0, 3)
    }
    
    return {
        "name": name,
        "phonemes": phonemes,
        "grammar_rules": grammar_rules,
        "words": words
    }


    



