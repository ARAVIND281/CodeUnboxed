from pydantic import BaseModel

class ExplainRequest(BaseModel):
    code: str
    language: str = "Python"
    level: str = "basic"  # "basic" or "advanced"

class ExplainResponse(BaseModel):
    explanation: str
