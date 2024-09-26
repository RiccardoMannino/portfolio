"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import Avatar from "./Avatar";

import {
	IconChevronRight,
	IconBriefcase,
	IconHome,
	IconMessage,
	IconBrandLinkedin,
	IconBrandGithub,
	IconLayoutSidebarRightCollapse,
	IconLayoutSidebarRightExpand,
} from "@tabler/icons-react";
import { useRouter, usePathname } from "next/navigation";

type Pagine = {
	pagina: string;
	href: string;
	image?: JSX.Element;
};

export default function Sidebar() {
	const [isVisible, setIsVisible] = useState(true);

	const router = useRouter();
	const pathname = usePathname();

	const isActive = (path: string) => pathname === path;

	useEffect(() => {
		pathname === "/"
			? (document.title = "Riccardo Mannino - Home")
			: (document.title = `Riccardo Mannino - ${pathname
					.slice(1)
					.charAt(0)
					.toUpperCase()}${pathname.slice(2)}`);
	}, [pathname]);

	const listaPagine: Pagine[] = [
		{
			pagina: "Home",
			href: "/",
			image: (
				<IconHome
					size={20}
					className={isActive(`/`) ? "stroke-blue-600" : ""}
				/>
			),
		},
		{
			pagina: "Chi sono",
			href: "/about",
			image: (
				<IconMessage
					size={20}
					className={isActive(`/about`) ? "stroke-blue-600" : ""}
				/>
			),
		},
		{
			pagina: "Progetti",
			href: "/projects",
			image: (
				<IconBriefcase
					size={20}
					className={isActive(`/projects`) ? "stroke-blue-600" : ""}
				/>
			),
		},
		{
			pagina: "Contatti",
			href: "/contact",
			image: (
				<IconMessage
					size={20}
					className={isActive(`/contact`) ? "stroke-blue-600" : ""}
				/>
			),
		},
	];

	const social: Pagine[] = [
		{
			pagina: "Linkedin",
			href: "https://www.linkedin.com/in/riccardo-mannino/",
			image: <IconBrandLinkedin size={20} />,
		},
		{
			pagina: "Github",
			href: "https://github.com/RiccardoMannino/",
			image: <IconBrandGithub size={20} />,
		},
	];

	return (
		<>
			<motion.div
				animate={{ x: isVisible ? 0 : -210 }}
				transition={{ type: "spring", duration: 1.5 }}
				className="h-full bg-neutral-100 py-10 px-5 fixed left-0 flex flex-col justify-between w-fit z-50"
			>
				<div className="flex flex-col gap-7">
					<Avatar />
					<div className="flex flex-col ">
						{listaPagine.map((li) => (
							<Link
								key={li.href}
								onClick={() => {
									router.push(li.href);
								}}
								className={
									(isActive(`${li.href}`) &&
										"flex mb-2 flex-row p-[8px] shadow-lg rounded-md w-full bg-white stroke-blue-600  text-sm items-center") ||
									"flex mb-2 p-[6px] text-sm  text-neutral-500 stroke-neutral-500 ease-in-out hover:text-neutral-700 hover:stroke-neutral-700 "
								}
								href={li.href}
							>
								{li.image}
								<span className="ml-[0.8rem] text-black">{li.pagina}</span>
							</Link>
						))}
						<p className="font-bold text-sm mt-8 mx-2">Socials</p>

						{social.map((so) => (
							<Link
								href={so.href}
								target="_blank"
								key={so.href}
								className="flex flex-row items-center p-[6px] text-neutral-500 stroke-neutral-500 hover:text-neutral-700 hover:stroke-neutral-700"
							>
								{so.image} <span className="ml-[0.8rem]">{so.pagina}</span>
							</Link>
						))}
					</div>
				</div>

				<Link className="flex justify-center" href={"/resume"} passHref>
					<button
						onClick={(e) => {
							e.preventDefault(), router.push("/resume");
						}}
						type="button"
						className="flex justify-between rounded-full text-white bold bg-gray-900 px-4 py-3 text-xs font-semibold items-center"
					>
						Read Resume {<IconChevronRight size={15} color="white" />}
					</button>
				</Link>
			</motion.div>
			<motion.button
				animate={{ rotate: !isVisible ? 0 : 180 }}
				transition={{ duration: 1 }}
				className="fixed lg:hidden bottom-10 right-10 border rounded-[50%] p-2 "
				onClick={() => setIsVisible(!isVisible)}
			>
				{isVisible ? (
					<IconLayoutSidebarRightCollapse />
				) : (
					<IconLayoutSidebarRightExpand />
				)}
			</motion.button>
		</>
	);
}
