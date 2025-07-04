import os
import requests
from dotenv import load_dotenv

load_dotenv()

GROQ_API_KEY = os.getenv("GROQ_API_KEY")
GROQ_API_URL = "https://api.groq.com/openai/v1/chat/completions"

def get_code_explanation(code: str, language: str) -> str:
    prompt = f"""
    You are a highly intelligent and helpful programming assistant.

    Given the following {language} code snippet, provide a clear and detailed explanation that includes:

    1. A one-line summary of what the code does.
    2. A step-by-step breakdown of how it works (line-by-line or block-wise).
    3. An explanation of input parameters and output behavior.
    4. If applicable, describe any edge cases or special conditions.
    5. Estimate time and space complexity in Big-O notation.

    Code:
    {code}

    Please explain in plain, beginner-friendly English with no assumptions.
    """
    print("GROQ KEY:", GROQ_API_KEY)
    res = requests.post(
        GROQ_API_URL,
        headers={
            "Authorization": f"Bearer {GROQ_API_KEY}",
            "Content-Type": "application/json"
        },
        json={
            "model": "llama-3.1-8b-instant",
            "messages": [{"role": "user", "content": prompt}],
            "temperature": 0.3,
        }
    )

    try:
        return res.json()["choices"][0]["message"]["content"]
    except:
        return "Error: Failed to get a valid response from Groq."
