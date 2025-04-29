'use server';
/**
 * @fileOverview A flow to improve chatbot responses by analyzing user queries and providing relevant information about the company's products and services.
 *
 * - improveChatbotResponses - A function that enhances chatbot responses based on user queries.
 * - ImproveChatbotResponsesInput - The input type for the improveChatbotResponses function.
 * - ImproveChatbotResponsesOutput - The return type for the improveChatbotResponses function.
 */

import {ai} from '@/ai/ai-instance';
import {z} from 'genkit';

const ImproveChatbotResponsesInputSchema = z.object({
  userQuery: z.string().describe('The user query to analyze.'),
  knowledgeBase: z
    .string()
    .describe('The knowledge base containing information about the company.'),
  conversationFlows:
    z.string().describe('The defined logic for handling user interactions.'),
});
export type ImproveChatbotResponsesInput = z.infer<
  typeof ImproveChatbotResponsesInputSchema
>;

const ImproveChatbotResponsesOutputSchema = z.object({
  enhancedResponse: z
    .string()
    .describe('The enhanced response to the user query.'),
});
export type ImproveChatbotResponsesOutput = z.infer<
  typeof ImproveChatbotResponsesOutputSchema
>;

export async function improveChatbotResponses(
  input: ImproveChatbotResponsesInput
): Promise<ImproveChatbotResponsesOutput> {
  return improveChatbotResponsesFlow(input);
}

const prompt = ai.definePrompt({
  name: 'improveChatbotResponsesPrompt',
  input: {
    schema: z.object({
      userQuery: z.string().describe('The user query to analyze.'),
      knowledgeBase:
        z.string().describe('The knowledge base with company information.'),
      conversationFlows:
        z.string().describe('The defined logic for user interactions.'),
    }),
  },
  output: {
    schema: z.object({
      enhancedResponse: z
        .string()
        .describe('The enhanced response to the user query.'),
    }),
  },
  prompt: `You are an AI assistant designed to provide accurate and helpful responses to user queries about a company's products and services. Analyze the user query and use the provided knowledge base and conversation flows to generate an enhanced response that directly addresses the user's needs.

User Query: {{{userQuery}}}

Knowledge Base: {{{knowledgeBase}}}

Conversation Flows: {{{conversationFlows}}}

Enhanced Response:`,
});

const improveChatbotResponsesFlow = ai.defineFlow<
  typeof ImproveChatbotResponsesInputSchema,
  typeof ImproveChatbotResponsesOutputSchema
>({
  name: 'improveChatbotResponsesFlow',
  inputSchema: ImproveChatbotResponsesInputSchema,
  outputSchema: ImproveChatbotResponsesOutputSchema,
},
async input => {
  const {output} = await prompt(input);
  return output!;
});
