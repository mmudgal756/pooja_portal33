'use server';
/**
 * @fileOverview An AI agent that provides information about Hindu pujas.
 *
 * - getPujaInfo - A function that answers questions about pujas.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const PujaInfoInputSchema = z.object({
  question: z.string().describe('The user\'s question about a specific puja or ritual.'),
});

const PujaInfoOutputSchema = z.object({
  answer: z.string().describe('A detailed and helpful answer to the user\'s question.'),
});

export async function getPujaInfo(input) {
  return pujaInfoFlow(input);
}

const prompt = ai.definePrompt({
  name: 'pujaInfoPrompt',
  input: {schema: PujaInfoInputSchema},
  output: {schema: PujaInfoOutputSchema},
  prompt: `You are an expert on Hindu rituals and pujas. Your role is to provide clear, helpful, and respectful information to users of a Puja Portal app.

A user has a question about a puja. Please provide a detailed and informative answer.

User's Question: {{{question}}}

Your answer should be easy to understand for someone who may not be an expert.
`,
});

const pujaInfoFlow = ai.defineFlow(
  {
    name: 'pujaInfoFlow',
    inputSchema: PujaInfoInputSchema,
    outputSchema: PujaInfoOutputSchema,
  },
  async (input) => {
    const {output} = await prompt(input);
    return output;
  }
);
