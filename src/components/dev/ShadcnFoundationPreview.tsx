import { useState } from 'react';

import { Button } from '../ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../ui/card';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '../ui/dialog';
import { Input } from '../ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../ui/tooltip';

export default function ShadcnFoundationPreview() {
	const [name, setName] = useState('AI-900 Learner');

	return (
		<div className="mx-auto w-full max-w-2xl space-y-4">
			<Card>
				<CardHeader>
					<CardTitle>shadcn Foundation Ready</CardTitle>
					<CardDescription>React islands, Tailwind tokens, and core UI primitives are configured.</CardDescription>
				</CardHeader>
				<CardContent className="space-y-4">
					<Tabs defaultValue="form">
						<TabsList>
							<TabsTrigger value="form">Form</TabsTrigger>
							<TabsTrigger value="dialog">Dialog</TabsTrigger>
						</TabsList>
						<TabsContent value="form" className="space-y-2">
							<label className="block text-sm font-medium">Display name</label>
							<Input value={name} onChange={(event) => setName(event.target.value)} />
						</TabsContent>
						<TabsContent value="dialog">
							<p className="text-sm text-muted-foreground">Open the dialog to verify portal and layering behavior.</p>
						</TabsContent>
					</Tabs>
				</CardContent>
				<CardFooter className="flex items-center justify-between gap-2">
					<div className="text-sm text-muted-foreground">Hello, {name}.</div>
					<div className="flex items-center gap-2">
						<TooltipProvider delayDuration={150}>
							<Tooltip>
								<TooltipTrigger asChild>
									<Button variant="outline" type="button">
										Hover me
									</Button>
								</TooltipTrigger>
								<TooltipContent>Tooltip is wired.</TooltipContent>
							</Tooltip>
						</TooltipProvider>
						<Dialog>
							<DialogTrigger asChild>
								<Button type="button">Open Dialog</Button>
							</DialogTrigger>
							<DialogContent>
								<DialogHeader>
									<DialogTitle>Dialog Works</DialogTitle>
									<DialogDescription>Radix dialog + shadcn wrapper is active in Astro.</DialogDescription>
								</DialogHeader>
							</DialogContent>
						</Dialog>
					</div>
				</CardFooter>
			</Card>
		</div>
	);
}
