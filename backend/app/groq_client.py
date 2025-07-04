import os
import requests
from dotenv import load_dotenv

load_dotenv()

GROQ_API_KEY = os.getenv("GROQ_API_KEY")
GROQ_API_URL = "https://api.groq.com/openai/v1/chat/completions"

def get_code_explanation(code: str, language: str) -> str:
    prompt = f"""You are a helpful AI assistant. Explain the following {language} code in simple terms.
Also include time and space complexity if applicable.

Code:
{code}
"""

    res = requests.post(
        GROQ_API_URL,
        headers={
            "Authorization": f"Bearer {GROQ_API_KEY}",
            "Content-Type": "application/json"
        },
        json={
            "model": "mixtral-8x7b-32768",
            "messages": [{"role": "user", "content": prompt}],
            "temperature": 0.3,
        }
    )

    try:
        return res.json()["choices"][0]["message"]["content"]
    except:
        return "Error: Failed to get a valid response from Groq."
