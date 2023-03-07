function Form() {
	return (
		<section className="form">
			<div className="container">
				<div className="form-block">
					<div className="form-block__row">
						<input
							className="form-block__input"
							type="text"
							name=""
							id=""
							placeholder="Your Name *"
						/>
						<input
							className="form-block__input"
							type="text"
							name=""
							id=""
							placeholder="Your Email *"
						/>
					</div>
					<input
						className="form-block__input"
						type="text"
						name=""
						id=""
						placeholder="Your Message *"
					/>
					<button type="submit" className="form-block__btn">
						SEND
					</button>
				</div>
			</div>
		</section>
	);
}
export default Form;
