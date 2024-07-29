from fastapi import APIRouter
from app.models import ConlangRequest, ConlangResponse
from app.services.language_gen import generate_conlang

router = APIRouter()

@router.post("/generate", response_model=ConlangResponse)
async def generate_conlang_route(request: ConlangRequest):
    return generate_conlang(request.vowels, request.consonants)