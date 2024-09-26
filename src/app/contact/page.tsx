"use client";
import React, { useState } from "react";
import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

export default function Contact() {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: "",
	});

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const { name, value } = e.target;
		setFormData((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	useEffect(() => {
		(async () => {
			const cal = await getCalApi({ namespace: "30min" });
			cal("ui", {
				theme: "light",
				hideEventTypeDetails: false,
				layout: "month_view",
			});
		})();
	}, []);

	return (
		<>
			<h1 className="text-3xl font-bold mb-4">
				Contattami <span>✉️</span>
			</h1>
			<p>
				Compila il Form sottostante e cercherò di risponderti il prima possibile
				o prenota una chiamata
			</p>
			<form onSubmit={(e) => e.preventDefault()}>
				<div className="grid grid-cols-2 grid-rows-[40px] gap-5 mt-6">
					<input
						type="text"
						placeholder="Nome"
						name="name"
						value={formData.name}
						required
						onChange={handleChange}
						className="border indent-3 bg-neutral-100 focus:outline-none focus-visible:ring-gray-500 focus:border-gray-400 rounded-xl"
					/>
					<input
						type="email"
						placeholder="Email"
						name="email"
						value={formData.email}
						required
						onChange={handleChange}
						className="border indent-3 bg-neutral-100 focus:outline-none focus-visible:ring-gray-500 focus:border-gray-400 rounded-xl"
					/>

					<textarea
						className="col-span-2 border indent-3 bg-neutral-100 focus:outline-none focus-visible:ring-gray-500 focus:border-gray-400 rounded-xl pt-3"
						rows={10}
						placeholder="Inserisci il tuo messaggio"
						required
						onChange={handleChange}
						name="message"
						value={formData.message}
					/>
				</div>
				<div className="flex justify-end w-full mt-10">
					<button
						className="bg-neutral-100 border-gray-700 px-4 py-2 rounded-full font-semibold w-full"
						type="submit"
					>
						Invia!
					</button>
				</div>
			</form>

			<div className="mt-7">
				<button
					className="px-3 py-3 rounded-full text-white bold bg-gray-900 text-xs font-semibold "
					data-cal-namespace="30min"
					data-cal-link="riccardo-mannino-mogao4/30min"
					data-cal-config='{"layout":"month_view"}'
				>
					Prenota chiamata
				</button>
			</div>
		</>
	);
}
