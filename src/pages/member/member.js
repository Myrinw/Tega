import Hero from "../../components/hero/hero";
import IntroText from "../../components/intro-text/intro-text";
import Form from "../../components/form/form";
import Members from "../../components/members/members";

function Member() {
	return (
		<div>
			<Hero title="BECOME A MEMBER"></Hero>
			<IntroText bold="We are here to help" mbnone="true">
				Our association endeavors to represent member interests to all important
				third parties, including exchanges, data feed providers, platform
				providers, and regulatory bodies. The association is open to any new
				member of good faith who can submit to a compliance check and commit to
				our association pledge and meet the financial requirements of
				membership.
			</IntroText>

			<section className="title-text">
				<div className="container">
					<h4 className="faqs__question mt-0">Stay connected</h4>
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

export default Member;
