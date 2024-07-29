from pydantic import BaseModel
from typing import List

class ConlangRequest(BaseModel):
    vowels: List[str]
    consonants: List[str]

class ConlangResponse(BaseModel):
    name: str
    phonemes: List[str]
    grammar_rules: dict
    words: List[str]