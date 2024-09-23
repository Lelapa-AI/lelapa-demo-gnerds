import PropTypes from "prop-types";
import { Back, SubHeading } from "../common";
import { useScreen } from "../../hooks";

export const PageLayout = ({
	children,
	hasBack = false,
	title = "",
	rightHeader = "",
}) => {
	const { isWeb } = useScreen();
	return (
		<section className="flex flex-col gap-3 px-4 py-1">
			{!isWeb && (
				<section className="flex items-center justify-between">
					{hasBack && <Back />}
					<section className="flex flex-col justify-center items-center ">
						{title && <SubHeading title={title} />}
					</section>
					{rightHeader ? rightHeader : <div className="w-8" />}
				</section>
			)}
			{children}
		</section>
	);
};

PageLayout.propTypes = {
	children: PropTypes.node.isRequired,
	hasBack: PropTypes.bool,
	title: PropTypes.string,
	rightHeader: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
};
