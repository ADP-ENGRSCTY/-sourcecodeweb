'use client';
import React from 'react';
import type { ComponentProps, ReactNode } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { FacebookIcon, Instagram, Linkedin, Calendar, Mail } from 'lucide-react';
import Image from 'next/image';

interface FooterLink {
	title: string;
	href: string;
	icon?: React.ComponentType<{ className?: string }>;
}

interface FooterSection {
	label: string;
	links: FooterLink[];
}

const footerLinks: FooterSection[] = [
	{
		label: 'Navigate',
		links: [
			{ title: 'About', href: '#about' },
			{ title: 'Events', href: '#events' },
			{ title: 'Team', href: '#team' },
			{ title: 'Membership', href: '#membership' },
		],
	},
	{
		label: 'Resources',
		links: [
			{ title: 'Sponsors', href: '#sponsors' },
			{ title: 'Contact', href: '#contact' },
			{ title: 'Event Calendar', href: 'https://luma.com/tesadp', icon: Calendar },
		],
	},
	{
		label: 'Connect',
		links: [
			{ title: 'Instagram', href: 'https://www.instagram.com/tes.adp/', icon: Instagram },
			{ title: 'LinkedIn', href: '#', icon: Linkedin },
			{ title: 'Email', href: 'mailto:taylorsengineering2021@gmail.com', icon: Mail },
		],
	},
];

export function Footer() {
	return (
		<footer className="md:rounded-t-6xl relative w-full max-w-7xl mx-auto flex flex-col items-center justify-center rounded-t-4xl border-t border-iron-700 bg-[radial-gradient(35%_128px_at_50%_0%,theme(backgroundColor.white/8%),transparent)] px-6 py-12 lg:py-16">
			<div className="bg-rust/20 absolute top-0 right-1/2 left-1/2 h-px w-1/3 -translate-x-1/2 -translate-y-1/2 rounded-full blur" />

			<div className="grid w-full gap-8 xl:grid-cols-3 xl:gap-8">
				<AnimatedContainer className="space-y-4">
					<Image src="/brand/logo.png" alt="ADP TES Logo" width={48} height={48} className="h-12 w-12 object-contain" />
					<h3 className="font-heading font-bold text-lg">ADP TES</h3>
					<p className="text-muted-foreground text-sm">
						Taylor&apos;s Engineering Society - Building, learning, and leading together.
					</p>
					<p className="text-muted-foreground mt-8 text-xs md:mt-4">
						© {new Date().getFullYear()} ADP TES, Taylor&apos;s University. All rights reserved.
					</p>
				</AnimatedContainer>

				<div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-8 xl:col-span-2 xl:mt-0">
					{footerLinks.map((section, index) => (
						<AnimatedContainer key={section.label} delay={0.1 + index * 0.1}>
							<div className="mb-10 md:mb-0">
								<h3 className="text-sm font-heading font-semibold mb-4">{section.label}</h3>
								<ul className="text-muted-foreground space-y-3 text-sm">
									{section.links.map((link) => (
										<li key={link.title}>
											<a
												href={link.href}
												target={link.href.startsWith('http') ? '_blank' : undefined}
												rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
												className="hover:text-rust inline-flex items-center transition-all duration-300"
											>
												{link.icon && <link.icon className="me-2 size-4" />}
												{link.title}
											</a>
										</li>
									))}
								</ul>
							</div>
						</AnimatedContainer>
					))}
				</div>
			</div>
		</footer>
	);
};

type ViewAnimationProps = {
	delay?: number;
	className?: ComponentProps<typeof motion.div>['className'];
	children: ReactNode;
};

function AnimatedContainer({ className, delay = 0.1, children }: ViewAnimationProps) {
	const shouldReduceMotion = useReducedMotion();

	if (shouldReduceMotion) {
		return <div className={className}>{children}</div>;
	}

	return (
		<motion.div
			initial={{ filter: 'blur(4px)', translateY: -8, opacity: 0 }}
			whileInView={{ filter: 'blur(0px)', translateY: 0, opacity: 1 }}
			viewport={{ once: true }}
			transition={{ delay, duration: 0.8 }}
			className={className}
		>
			{children}
		</motion.div>
	);
};
