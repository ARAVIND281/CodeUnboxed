import os
import requests
from dotenv import load_dotenv

load_dotenv()

GROQ_API_KEY = os.getenv("GROQ_API_KEY")
GROQ_API_URL = "https://api.groq.com/openai/v1/chat/completions"

def get_code_explanation(code: str, language: str, level: str = "basic") -> str:
    if not GROQ_API_KEY:
        return "Error: GROQ API key is missing."

    if level == "advanced":
        prompt = f"""
You are a highly intelligent and helpful programming assistant.

Explain the following {language} code in clear, well-structured markdown with the following format:

### 🔍 Summary
Give a one-line description of what the code does.

### 🧠 Step-by-Step Explanation
Break down the code logic line-by-line or block-by-block.

### 🎯 Inputs and Outputs
Describe the function inputs and the expected outputs.

### ⚠️ Edge Cases
Mention any important conditions, constraints, or special behavior.

### ⏱️ Time and Space Complexity
Estimate Big-O complexity and explain why.

Code:
```{language}
{code}
```

Explain in beginner-friendly, readable markdown.
"""
    else:
        prompt = f"""
You're a helpful assistant. Briefly explain what the following {language} code does in plain English.

Also mention time and space complexity if it's obvious.

Code:
```{language}
{code}
```

Format your answer in markdown with headings and bullets.
"""

    try:
        response = requests.post(
            GROQ_API_URL,
            headers={
                "Authorization": f"Bearer {GROQ_API_KEY}",
                "Content-Type": "application/json"
            },
            json={
                "model": "llama-3.1-8b-instant",
                "messages": [{"role": "user", "content": prompt}],
                "temperature": 0.3,
            },
            timeout=20,
        )

        if response.status_code != 200:
            return f"Error: Groq API failed with status {response.status_code} - {response.text}"

        return response.json()["choices"][0]["message"]["content"]

    except Exception as e:
        return f"Error: {str(e)}"
