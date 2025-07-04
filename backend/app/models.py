from pydantic import BaseModel

class ExplainRequest(BaseModel):
    code: str
    language: str = "Python"

class ExplainResponse(BaseModel):
    explanation: str
