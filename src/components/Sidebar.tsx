"use client";
import Link from "next/link";
import { useState } from "react";

import Avatar from "./Avatar";

import {
	IconChevronRight,
	IconBriefcase,
	IconHomeBolt,
	IconMessage,
	IconMessageBolt,
	IconBrandLinkedin,
	IconBrandGithub,
} from "@tabler/icons-react";
import { useRouter } from "next/navigation";

type Pagine = {
	pagina: string;
	href: string;
	image?: JSX.Element;
};

export default function Sidebar() {
	const [select, setSelect] = useState<string>("Home");

	const router = useRouter();

	const listaPagine: Pagine[] = [
		{
			pagina: "Home",
			href: "/",
			image: (
				<IconHomeBolt
					size={20}
					className={select === "Home" ? "stroke-blue-600" : ""}
				/>
			),
		},
		{
			pagina: "About",
			href: "/about",
			image: (
				<IconMessageBolt
					size={20}
					className={select === "About" ? "stroke-blue-600" : ""}
				/>
			),
		},
		{
			pagina: "Projects",
			href: "/projects",
			image: (
				<IconBriefcase
					size={20}
					className={select === "Projects" ? "stroke-blue-600" : ""}
				/>
			),
		},
		{
			pagina: "Contact",
			href: "/contact",
			image: (
				<IconMessage
					size={20}
					className={select === "Contact" ? "stroke-blue-600" : ""}
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
			<div className="h-full bg-neutral-100 py-10 px-5 fixed left-0 flex flex-col justify-between w-fit z-50">
				<div className="flex flex-col gap-5">
					<Avatar />
					<div className="flex flex-col">
						{listaPagine.map((li) => (
							<Link
								key={li.href}
								onClick={(e) => {
									e.preventDefault();
									setSelect(li.pagina);
									router.push(li.href);
								}}
								className={
									select === li.pagina
										? "flex flex-row p-[6px] shadow-lg rounded-md w-full bg-white stroke-blue-600  text-sm items-center"
										: "flex p-[6px] text-sm  text-neutral-500 stroke-neutral-500 ease-in-out hover:text-neutral-700 hover:stroke-neutral-700 "
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
							e.preventDefault(), setSelect("resume"), router.push("/resume");
						}}
						type="button"
						className="flex justify-between rounded-full text-white bold bg-gray-900 px-4 py-3 text-xs font-semibold items-center"
					>
						Read Resume {<IconChevronRight size={15} color="white" />}
					</button>
				</Link>
			</div>
		</>
	);
}
