from fastapi import APIRouter
from app.models import ExplainRequest, ExplainResponse
from app.groq_client import get_code_explanation

router = APIRouter()

@router.post("/api/explain", response_model=ExplainResponse)
def explain_code(req: ExplainRequest):
    explanation = get_code_explanation(req.code, req.language)
    return ExplainResponse(explanation=explanation)
