import React from "react";

export default function MainLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<div className="lg:pl-2 lg:pt-2 flex-1 bg-gray-100">
			<div className="min-h-screen bg-white lg:rounded-tl-xl border border-transparent lg:border-neutral-200 overflow-y-auto">
				<main className="py-20 px-4 max-w-4xl w-full mx-auto">{children}</main>
			</div>
		</div>
	);
}
