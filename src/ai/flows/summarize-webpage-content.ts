'use server';

/**
 * @fileOverview This file defines a Genkit flow to summarize the content of a webpage section.
 *
 * - summarizeWebpageContent - A function that takes webpage content as input and returns a summary.
 * - SummarizeWebpageContentInput - The input type for the summarizeWebpageContent function, containing the webpage content.
 * - SummarizeWebpageContentOutput - The output type for the summarizeWebpageContent function, containing the summary.
 */

import { ai } from '@/ai/ai-instance';
import { z } from 'genkit';

const SummarizeWebpageContentInputSchema = z.object({
  webpageContent: z.string().describe('The content of the webpage section to summarize.'),
});

export type SummarizeWebpageContentInput = z.infer<typeof SummarizeWebpageContentInputSchema>;

const SummarizeWebpageContentOutputSchema = z.object({
  summary: z.string().describe('A short summary of the webpage content.'),
});

export type SummarizeWebpageContentOutput = z.infer<typeof SummarizeWebpageContentOutputSchema>;

export async function summarizeWebpageContent(
  input: SummarizeWebpageContentInput
): Promise<SummarizeWebpageContentOutput> {
  return summarizeWebpageContentFlow(input);
}

const summarizeWebpageContentPrompt = ai.definePrompt({
  name: 'summarizeWebpageContentPrompt',
  input: {
    schema: z.object({
      webpageContent: z
        .string()
        .describe('The content of the webpage section that needs to be summarized.'),
    }),
  },
  output: {
    schema: z.object({
      summary: z.string().describe('A concise summary of the webpage content.'),
    }),
  },
  prompt: `Summarize the following webpage content in one short sentence:\n\n{{webpageContent}}`,
});

const summarizeWebpageContentFlow = ai.defineFlow<
  typeof SummarizeWebpageContentInputSchema,
  typeof SummarizeWebpageContentOutputSchema
>({
  name: 'summarizeWebpageContentFlow',
  inputSchema: SummarizeWebpageContentInputSchema,
  outputSchema: SummarizeWebpageContentOutputSchema,
},
async input => {
    const { output } = await summarizeWebpageContentPrompt(input);
    return output!;
  }
);
