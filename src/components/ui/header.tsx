'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button, buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { MenuToggleIcon } from '@/components/ui/menu-toggle-icon';
import { useScroll } from '@/components/ui/use-scroll';

export function Header() {
	const [open, setOpen] = React.useState(false);
	const scrolled = useScroll(10);

	const links = [
		{ label: 'About', href: '#about' },
		{ label: 'Events', href: '#events' },
		{ label: 'Team', href: '#team' },
		{ label: 'Membership', href: '#membership' },
		{ label: 'Sponsors', href: '#sponsors' },
		{ label: 'Contact', href: '#contact' },
	];

	React.useEffect(() => {
		if (open) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = '';
		}
		return () => {
			document.body.style.overflow = '';
		};
	}, [open]);

	return (
		<header
			className={cn(
				'sticky top-0 z-50 mx-auto w-full max-w-7xl border-b border-transparent md:rounded-md md:border md:transition-all md:ease-out',
				{
					'bg-background/95 supports-[backdrop-filter]:bg-background/50 border-border backdrop-blur-lg md:top-4 md:max-w-6xl md:shadow':
						scrolled && !open,
					'bg-background/90': open,
				},
			)}
		>
			<nav
				className={cn(
					'flex h-14 w-full items-center justify-between px-4 md:h-12 md:transition-all md:ease-out',
					{
						'md:px-2': scrolled,
					},
				)}
			>
				<Link href="/" className="flex items-center gap-2 font-heading font-bold text-lg">
					<Image src="/brand/logo.png" alt="ADP TES Logo" width={32} height={32} className="h-8 w-8 object-contain" />
					<span>ADP TES</span>
				</Link>
				<div className="hidden items-center gap-2 md:flex">
					{links.map((link, i) => (
						<Link key={i} className={buttonVariants({ variant: 'ghost' })} href={link.href}>
							{link.label}
						</Link>
					))}
					<Button variant="outline" asChild>
						<Link href="#membership">Join</Link>
					</Button>
				</div>
				<Button size="icon" variant="outline" onClick={() => setOpen(!open)} className="md:hidden">
					<MenuToggleIcon open={open} className="size-5" duration={300} />
				</Button>
			</nav>

			<div
				className={cn(
					'bg-background/90 fixed top-14 right-0 bottom-0 left-0 z-50 flex flex-col overflow-hidden border-y md:hidden',
					open ? 'block' : 'hidden',
				)}
			>
				<div
					data-slot={open ? 'open' : 'closed'}
					className={cn(
						'data-[slot=open]:animate-in data-[slot=open]:zoom-in-95 data-[slot=closed]:animate-out data-[slot=closed]:zoom-out-95 ease-out',
						'flex h-full w-full flex-col justify-between gap-y-2 p-4',
					)}
				>
					<div className="grid gap-y-2">
						{links.map((link) => (
							<Link
								key={link.label}
								className={buttonVariants({
									variant: 'ghost',
									className: 'justify-start',
								})}
								href={link.href}
								onClick={() => setOpen(false)}
							>
								{link.label}
							</Link>
						))}
					</div>
					<div className="flex flex-col gap-2">
						<Button variant="default" className="w-full" asChild>
							<Link href="/membership">Join the Society</Link>
						</Button>
					</div>
				</div>
			</div>
		</header>
	);
}
