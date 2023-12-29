import React from 'react';

const SecurityApproach = () => {
    return (
        <section className="approach-area pb-100">
			<div className="container">
				<div className="row align-items-center">
					<div className="col-lg-6">
						<div className="approach-img">
							<img src="/img/approach-img.jpg" alt="Image" />
						</div>
					</div>

					<div className="col-lg-6">
						<div className="approach-content">
							<h2>At nexaya we can be your strong partner</h2>
							<p>Wether you are a startup, an enterprise, a Business Angel or VC, togethe we can establish a tailored partnership to support you with added value for your business and your portfolios. </p>

							<ul>
								<li>
									<i className="flaticon-cyber"></i>
									<h3>nexaya, your Technology Partner</h3>
									<p>From the improvement of internal processes to the commitment to innovation</p>
								</li>
								<li>
									<i className="flaticon-cyber-security"></i>
									<h3>nexaya, your technical Co-Founder</h3>
									<p>Building and managing your venture in all technological aspects to ensure the realisation of your business objectives </p>
								</li>
								<li>
									<i className="flaticon-profile"></i>
									<h3>nexaya, your Technical Investment Advisor</h3>
									<p>Supporting Business Angels and VC companies to assess their Tech investments for a better investment decisions</p>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</section>
    )
}

export default SecurityApproach;
