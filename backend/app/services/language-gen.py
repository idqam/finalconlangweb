import random

def generate_conlang(seed: str) -> dict:
    random.seed(seed)
    
    vowels = ['a', 'e', 'i', 'o', 'u']
    consonants = ['b', 'd', 'f', 'g', 'k', 'l', 'm', 'n', 'p', 'r', 's', 't']
    
    name = ''.join(random.choice(consonants + vowels) for _ in range(6))
    phonemes = random.sample(vowels + consonants, random.randint(10, 20))
    grammar_rules = {
        "word_order": random.choice(["SVO", "SOV", "VSO"]),
        "cases": random.randint(2, 8),
        "genders": random.randint(0, 3)
    }
    
    return {
        "name": name,
        "phonemes": phonemes,
        "grammar_rules": grammar_rules
    }