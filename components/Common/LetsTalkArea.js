import React from 'react';
import Link from 'next/link';

const LetsTalkArea = () => {
    return (
        <div className="lats-talk-area ptb-100">
			<div className="container">
				<div className="lats-talk-content">
					<h2>Ready To Get Started? Let's do it then!</h2>
					<p>Reach out to us, and let's initiate the discussion to address your project ideas and challenges.</p>
                    <Link href="/contact">
                        <a className="default-btn six">
                            <i className="bx bx-file"></i>
                            Let’s Talk
                        </a>
                    </Link>
				</div>
			</div>
		</div>
    )
}

export default LetsTalkArea;
