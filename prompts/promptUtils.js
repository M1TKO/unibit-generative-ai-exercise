// file: /prompts/promptUtils.js

export function getSystemPrompt() {
  return {
    role: "system",
    content: "You are a helpful assistant specializing in generating creative and effective brand names and taglines.",
  };
}

export function getUserPrompt(input) {
  return {
    role: "user",
    content: `Generate a list of brand names and taglines for a business that focuses on ${input.keywords}. The business values are ${input.values}.`,
  };
}

export function getFunctions() {
  return [
    {
      name: "generate_brand_names",
      description: "Generate brand names and taglines based on business type, values, and keywords.",
      parameters: {
        type: "object",
        properties: {
          brandName: {
            type: "string",
            description: "The generated brand name",
          },
          tagline: {
            type: "string",
            description: "The generated tagline for the brand",
          },
          explanation: {
            type: "string",
            description: "Why the name and tagline fit the business",
          },
        },
        "required": ["brandName", "tagline", "explanation"]
      },
    },
  ];
}
