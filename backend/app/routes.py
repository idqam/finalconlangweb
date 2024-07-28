from fastapi import APIRouter
from .models import ConlangRequest, ConlangResponse
from .services.conlang_generator import generate_conlang

router = APIRouter()

@router.post("/generate", response_model=ConlangResponse)
async def generate_conlang_route(request: ConlangRequest):
    return generate_conlang(request.seed)