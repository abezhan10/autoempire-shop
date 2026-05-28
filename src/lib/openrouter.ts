import OpenAI from 'openai'

let client: OpenAI | null = null

export function getOpenRouterClient(): OpenAI {
  if (!client) {
    client = new OpenAI({
      apiKey: process.env.OPENROUTER_API_KEY!,
      baseURL: process.env.OPENROUTER_BASE_URL || 'https://openrouter.ai/api/v1',
    })
  }
  return client
}

export async function generateContent(prompt: string): Promise<string> {
  const openrouter = getOpenRouterClient()
  const response = await openrouter.chat.completions.create({
    model: 'openai/gpt-4o',
    messages: [
      {
        role: 'system',
        content: 'Du bist ein KI-Education-Assistent. Antworte auf Deutsch und sei präzise.',
      },
      { role: 'user', content: prompt },
    ],
    temperature: 0.7,
  })
  return response.choices[0]?.message?.content || ''
}
