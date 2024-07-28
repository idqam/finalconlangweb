from pydantic import BaseModel

class ConlangRequest(BaseModel):
    seed: str

class ConlangResponse(BaseModel):
    name: str
    phonemes: list
    grammar_rules: dict