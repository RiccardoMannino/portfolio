import Image from "next/image";
import React from "react";
import profilePic from "../Me.jpg";

export default function Avatar() {
	return (
		<div className="flex space-x-2 ">
			<div className="w-fit content-center">
				<Image
					src={profilePic}
					alt="Riccardo Mannino"
					width={40}
					height={40}
					className="rounded-[50%]"
				/>
			</div>

			<div className="flex flex-col text-sm">
				<p className="font-bold">Riccardo Mannino</p>
				<p className="font-thin"> Frontend Developer</p>
			</div>
		</div>
	);
}
