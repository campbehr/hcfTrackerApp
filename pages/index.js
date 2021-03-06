import { useState } from "react";
import Head from "next/head";

export default function Home() {
	const styles = {
		page: "p-5 h-full bg-purple-100",
		mainContainer: "space-y-5",
		inputContainer:
			"w-full cursor-pointer flex flex-col items-center",
		inputName: "w-full text-center text-lg",
		input: "w-full h-10 rounded-md shadow-lg",
		repRanges: "flex flex-col",
		dropdown: "w-full",
		hidden: "hidden",
	};

	const [percentages, setPercentages] = useState(
		{ snatch: 0 },
		{ cj: 0 },
		{ bs: 0 }
	);

	const [dropdownS, setDropdownS] = useState(false);
	const [dropdownCJ, setDropdownCJ] = useState(false);
	const [dropdownBS, setDropdownBS] = useState(false);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setPercentages({
			...percentages,
			[name]: value,
		});
	};

	return (
		<div className={styles.page}>
			<Head>
				<title>Load Your Weights</title>
				<meta
					name="description"
					content="Generated by create next app"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className={styles.mainContainer}>
				{/* Snatch */}
				<div className={styles.inputContainer}>
					<p
						className={styles.inputName}
						onClick={() =>
							setDropdownS(!dropdownS)
						}
					>
						Snatch
					</p>
					<div
						className={`${
							!dropdownS ? styles.hidden : ""
						}  ${styles.dropdown}`}
					>
						<input
							name="snatch"
							type="number"
							className={styles.input}
							onChange={handleChange}
							value={percentages.snatch}
						/>
						<span className={styles.repRanges}>
							<div>
								{percentages.snatch * 0.95}{" "}
								- 2
							</div>
							<div>
								{percentages.snatch * 0.93}{" "}
								- 3
							</div>
							<div>
								{percentages.snatch * 0.9} -
								4
							</div>
							<div>
								{percentages.snatch * 0.88}{" "}
								- 5
							</div>
							<div>
								{percentages.snatch * 0.85}{" "}
								- 6
							</div>
							<div>
								{percentages.snatch * 0.83}{" "}
								- 7
							</div>
							<div>
								{percentages.snatch * 0.8} -
								8
							</div>
							<div>
								{percentages.snatch * 0.77}{" "}
								- 9
							</div>
							<div>
								{percentages.snatch * 0.75}{" "}
								- 10
							</div>
						</span>
					</div>
				</div>
				{/* Clean and Jerk */}
				<div className={styles.inputContainer}>
					<p
						className={styles.inputName}
						onClick={() =>
							setDropdownCJ(!dropdownCJ)
						}
					>
						Clean & Jerk
					</p>
					<div
						className={`${
							!dropdownCJ ? styles.hidden : ""
						}  ${styles.dropdown}`}
					>
						<input
							name="cj"
							type="number"
							className={styles.input}
							onChange={handleChange}
							value={percentages.cj}
						/>
						<span className={styles.repRanges}>
							<div>
								{percentages.cj * 0.95} - 2
							</div>
							<div>
								{percentages.cj * 0.93} - 3
							</div>
							<div>
								{percentages.cj * 0.9} - 4
							</div>
							<div>
								{percentages.cj * 0.88} - 5
							</div>
							<div>
								{percentages.cj * 0.85} - 6
							</div>
							<div>
								{percentages.cj * 0.83} - 7
							</div>
							<div>
								{percentages.cj * 0.8} - 8
							</div>
							<div>
								{percentages.cj * 0.77} - 9
							</div>
							<div>
								{percentages.cj * 0.75} - 10
							</div>
						</span>
					</div>
				</div>
				{/* Back Squat */}
				<div className={styles.inputContainer}>
					<p
						className={styles.inputName}
						onClick={() =>
							setDropdownBS(!dropdownBS)
						}
					>
						Back Squat
					</p>
					<div
						className={`${
							!dropdownBS ? styles.hidden : ""
						}  ${styles.dropdown}`}
					>
						<input
							name="bs"
							type="number"
							className={styles.input}
							onChange={handleChange}
							value={percentages.bs}
						/>
						<span className={styles.repRanges}>
							<div>
								{percentages.bs * 0.95} - 2
							</div>
							<div>
								{percentages.bs * 0.93} - 3
							</div>
							<div>
								{percentages.bs * 0.9} - 4
							</div>
							<div>
								{percentages.bs * 0.88} - 5
							</div>
							<div>
								{percentages.bs * 0.85} - 6
							</div>
							<div>
								{percentages.bs * 0.83} - 7
							</div>
							<div>
								{percentages.bs * 0.8} - 8
							</div>
							<div>
								{percentages.bs * 0.77} - 9
							</div>
							<div>
								{percentages.bs * 0.75} - 10
							</div>
						</span>
					</div>
				</div>
			</main>
		</div>
	);
}
