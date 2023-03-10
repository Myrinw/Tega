import Hero from "../../components/hero/hero";
import IntroText from "../../components/intro-text/intro-text";
import Form from "../../components/form/form";
import Members from "../../components/members/members";

function Contact() {
	return (
		<div>
			<Hero title="CONTACT US"></Hero>
			<IntroText mbnone="true">
				Curabitur lobortis id lorem id bibendum. Ut id consectetur magna.
				Quisque volutpat augue enim, pulvinar lobortis nibh lacinia at.
				Vestibulum nec erat ut mi sollicitudin porttitor id sit amet risus. Nam
				tempus vel odio vitae aliquam. In imperdiet eros id lacus vestibulum
				vestibulum. Suspendisse fermentum sem sagittis ante venenatis egestas
				quis vel justo. Maecenas semper suscipit nunc, sed aliquam sapien
				convallis eu. Nulla ut turpis in diam dapibus consequat.Cras quis nulla
				commodo,.
			</IntroText>

			<section className="title-text">
				<div className="container">
					<h4 className="faqs__question">Stay connected</h4>
					<div className="faqs__line"></div>
					<p className="faqs__answer">
						If you are interested in joining{" "}
						<strong className="green">TEGA</strong>, or have questions about
						meeting compliance requirements to join, please contact us so we can
						help you get on the path to membership.
					</p>
				</div>
			</section>
			<Form />
			<Members />
		</div>
	);
}

export default Contact;
