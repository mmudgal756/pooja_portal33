'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { getPujaInfo } from '@/ai/flows/puja-info-flow';
import { Loader2 } from 'lucide-react';
import { ScrollArea } from '@/components/ui/scroll-area';

export default function PujaQuestion() {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!question) return;

    setIsLoading(true);
    setAnswer('');
    try {
      const result = await getPujaInfo({ question });
      if (result) {
        setAnswer(result.answer);
      }
    } catch (error) {
      console.error('Error getting puja info:', error);
      setAnswer('Sorry, I encountered an error while fetching the information. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="border-0 shadow-none">
      <CardHeader className="text-center p-2">
        <CardTitle>Ask About a Puja</CardTitle>
        <CardDescription>Our AI assistant can help answer your questions.</CardDescription>
      </CardHeader>
      <CardContent className="p-2">
        <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
          <Input
            type="text"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="e.g., Why is Satyanarayan katha done?"
            disabled={isLoading}
          />
          <Button type="submit" disabled={isLoading}>
            {isLoading ? <Loader2 className="animate-spin" /> : 'Ask'}
          </Button>
        </form>
        {isLoading && !answer && <Loader2 className="animate-spin mx-auto" />}
        {answer && (
          <ScrollArea className="h-[200px] w-full">
            <div className="p-4 bg-muted rounded-md">
                <p className="text-sm">{answer}</p>
            </div>
          </ScrollArea>
        )}
      </CardContent>
    </Card>
  );
}
