import{s as g,n as s,d as a,b as p,i as c,m as n,o as f,c as d,g as m,p as y,h,j as v}from"../chunks/BpfV9EC9.js";import{S as w,i as b}from"../chunks/DiNUyno1.js";function T(u){let e,i,t,l=`<div class="max-w-3xl mx-auto prose prose-invert prose-indigo"><h1>Privacy Policy</h1> <p class="text-sm text-rit-text-muted">Last updated: March 31, 2026</p> <h2 id="who-we-are">Who We Are</h2> <p>This website is operated by
			<strong>The Rhoades Institute of Technology</strong> (RIT), a Wisconsin 501(c)(3) nonprofit
			organization. For the purposes of this privacy policy, the data controller is
			Johnathon Rhoades / The Rhoades Institute of Technology.</p> <h2 id="what-we-collect">What We Collect</h2> <p>We collect almost nothing. Here is the complete list:</p> <ul><li><strong>Contact form submissions:</strong> Your name, email address, and message, submitted
				voluntarily through our contact form. Submissions are processed by a
				Cloudflare Worker and stored in Cloudflare D1. We retain contact form data for 90 days after the inquiry is resolved, then delete it.</li> <li><strong>File attachments:</strong> If you attach a file to the contact form,
				it is uploaded directly to Cloudinary (a cloud media service) before form submission.
				Files are stored on Cloudinary&#39;s infrastructure under our account.</li> <li><strong>Waitlist and survey submissions:</strong> Name, email, and your responses,
				submitted voluntarily through TVN Bridge waitlist or community surveys.
				Stored in Cloudflare D1 alongside contact submissions.</li> <li><strong>Donation information:</strong> When you make a donation, payment processing
				is handled by <a href="https://stripe.com">Stripe</a>. We do not store your credit
				card number, bank account details, or other payment credentials on our servers.
				Stripe collects and processes your payment information in accordance with their
				<a href="https://stripe.com/privacy">privacy policy</a>. We receive only a
				confirmation of your donation amount, your name, and your email address for
				receipt and acknowledgment purposes.</li> <li><strong>QR code scan data:</strong> QR codes on RIT printed materials link through
				a URL shortener operated by RIT and hosted on Vercel. When you scan one of our QR codes,
				we record: the timestamp of your visit, your browser name, operating system, device type
				(desktop/mobile/tablet), and your approximate geographic region (state and country level only).
				We store a non-reversible hash of your IP address for deduplication — we cannot identify
				you from this hash. No cookies are set. Raw scan data is retained for 365 days,
				then aggregated into anonymous totals and purged.</li> <li><strong>Browser preferences:</strong> Your language and content lens preferences are stored
				locally in your browser (<code>localStorage</code>). These values never leave your browser
				and are never transmitted to us.</li></ul> <p>That&#39;s it. No analytics. No ad pixels. No fingerprinting. No tracking scripts on this site.</p> <h2 id="legal-basis">Legal Basis for Processing (GDPR)</h2> <p>Under GDPR Article 6(1), we process personal data on the following legal bases:</p> <ul><li><strong>Consent:</strong> Contact form submissions, waitlist signups, and survey responses — you voluntarily provide this information.</li> <li><strong>Contract performance:</strong> Donation processing — necessary to complete your donation and issue a receipt.</li> <li><strong>Legal obligation:</strong> Donation records retained for 7 years as required for 501(c)(3) organizations.</li> <li><strong>Legitimate interest:</strong> QR scan analytics — measuring outreach effectiveness with minimal, non-identifying data.</li></ul> <h2 id="how-we-use-data">How We Use Your Data</h2> <ul><li><strong>Email:</strong> To respond to inquiries and send donation receipts. Nothing else.</li> <li><strong>Donation records:</strong> To issue tax-deductible receipts as required for a 501(c)(3) organization and to maintain legally required financial records.</li> <li><strong>QR scan data:</strong> To measure which outreach materials are effective, understand what platforms our audience uses, and verify that our efforts are reaching our authorized service area (Wisconsin). We never use this data to identify or track individuals.</li></ul> <h2 id="data-retention">Data Retention</h2> <ul><li><strong>Contact form submissions:</strong> 90 days after inquiry is resolved</li> <li><strong>Waitlist/survey submissions:</strong> 90 days after inquiry is resolved</li> <li><strong>File attachments:</strong> Stored on Cloudinary until manually deleted</li> <li><strong>Donation records:</strong> 7 years (legally required for 501(c)(3) organizations)</li> <li><strong>QR scan data (raw):</strong> 365 days, then aggregated and purged</li> <li><strong>QR scan data (aggregated totals):</strong> Retained indefinitely for reporting</li> <li><strong>Browser preferences:</strong> Stored in your browser until you clear it</li></ul> <h2 id="third-parties">Third Parties</h2> <p>We use a limited number of third-party services, each for a specific purpose.
			We do not sell, rent, or share your data with anyone beyond what is described here.</p> <ul><li><strong>Cloudflare</strong> — Provides DNS proxy and CDN for this website. All site traffic
				passes through Cloudflare&#39;s network, meaning Cloudflare processes every HTTP request
				(IP address, URL, headers). Cloudflare also routes email sent to <code>contact@rit-tech.org</code>
				to our inbox via their Email Routing service. Additionally, Cloudflare Workers process
				form submissions and Cloudflare D1 stores submission data.
				See Cloudflare&#39;s <a href="https://www.cloudflare.com/privacypolicy/" target="_blank" rel="noopener noreferrer">privacy policy</a>.</li> <li><strong>Cloudflare Turnstile</strong> — Bot protection on forms. Turnstile loads a script from
				<code>challenges.cloudflare.com</code> on pages with forms. It analyzes browser signals to
				distinguish humans from bots. Turnstile may set functional cookies (e.g., <code>cf_clearance</code>)
				for verification persistence. These are not used for tracking.</li> <li><strong>Cloudinary</strong> — Serves optimized images for this website and stores contact form
				file attachments. When images load, Cloudinary receives standard HTTP request data
				(IP address, user-agent, referer). See their
				<a href="https://cloudinary.com/privacy" target="_blank" rel="noopener noreferrer">privacy policy</a>.</li> <li><strong>Stripe</strong> — Processes donations. PCI-DSS compliant. See their
				<a href="https://stripe.com/privacy">privacy policy</a>.</li> <li><strong>GitHub Pages</strong> — Hosts this website. GitHub may log standard web server
				access data (IP address, user agent) per their
				<a href="https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement">privacy statement</a>.</li> <li><strong>Vercel</strong> — Hosts the QR code redirect service. Vercel processes
				requests through their serverless infrastructure per their
				<a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer">privacy policy</a>.</li> <li><strong>Vercel Postgres (Neon)</strong> — Stores QR scan analytics data.
				Data at rest on Vercel&#39;s infrastructure.</li> <li><strong>Prisma</strong> — Database connection pooling for the QR service.
				Query traffic routes through Prisma&#39;s infrastructure.</li></ul> <h2 id="cookies">Cookie Policy</h2> <p>This site stores three items in your browser&#39;s local storage:
			<code>rit_cookie_consent</code> (your consent preference),
			<code>rit_lens</code> (content perspective preference), and
			<code>rit_lang</code> (language preference).
			These values never leave your browser and are used only for site functionality.</p> <p>We set no tracking cookies, no analytics cookies, and no advertising cookies.
			Cloudflare Turnstile may set functional cookies for bot verification on pages with forms.
			These are not used for tracking.
			The QR code redirect service sets no cookies on end users.</p> <h2 id="email-routing">Email</h2> <p>Email sent to <code>contact@rit-tech.org</code> is processed through Cloudflare
			Email Routing and delivered to Gmail (<code>rit.ptaa@gmail.com</code>). Both Cloudflare
			and Google process email content and metadata in accordance with their respective privacy policies.</p> <h2 id="your-rights">Your Rights</h2> <p>You have the right to:</p> <ul><li><strong>Access</strong> any data we hold about you</li> <li><strong>Rectify</strong> inaccurate personal data</li> <li><strong>Delete</strong> your data at any time</li> <li><strong>Restrict processing</strong> of your data while a dispute is resolved</li> <li><strong>Object</strong> to processing based on legitimate interest</li> <li><strong>Withdraw consent</strong> for any communications</li> <li><strong>Export</strong> your data in a portable format</li></ul> <p>To exercise any of these rights, email
			<a href="mailto:contact@rit-tech.org">contact@rit-tech.org</a>.
			We will respond within 30 days.</p> <h2 id="breach-notification">Breach Notification</h2> <p>In the event of a data breach that affects your personal information, RIT will
			notify affected individuals within 72 hours of becoming aware of the breach.
			Notification will be sent via email where possible, and a notice will be posted
			on this website. We will disclose: what happened, what data was affected, what
			we are doing about it, and what steps you can take.</p> <h2 id="do-not-sell">Do Not Sell My Personal Information</h2> <p>We do not sell your personal information. We never have and never will. This applies
			to all users regardless of jurisdiction, including under the California Consumer
			Privacy Act (CCPA) and the California Privacy Rights Act (CPRA).</p> <h2 id="children">Children&#39;s Privacy</h2> <p>This website is not directed at children under 13. We do not
			knowingly collect data from children.</p> <h2 id="changes">Changes to This Policy</h2> <p>If we change this policy, we will update the date at the top of this page. Material
			changes will be communicated via email to those who have provided their contact information.</p> <h2 id="contact">Contact</h2> <p>Johnathon Rhoades / The Rhoades Institute of Technology<br/> <a href="mailto:contact@rit-tech.org">contact@rit-tech.org</a></p></div>`;return{c(){e=h("meta"),i=v(),t=h("section"),t.innerHTML=l,this.h()},l(o){const r=f("svelte-ho16ta",document.head);e=d(r,"META",{name:!0,content:!0}),r.forEach(a),i=m(o),t=d(o,"SECTION",{class:!0,"data-svelte-h":!0}),y(t)!=="svelte-k2ndko"&&(t.innerHTML=l),this.h()},h(){document.title="Privacy Policy | RIT",n(e,"name","description"),n(e,"content","Rhoades Institute of Technology privacy policy. We collect almost nothing and tell you exactly what."),n(t,"class","py-12 px-4")},m(o,r){p(document.head,e),c(o,i,r),c(o,t,r)},p:s,i:s,o:s,d(o){o&&(a(i),a(t)),a(e)}}}class k extends w{constructor(e){super(),b(this,e,null,T,g,{})}}export{k as component};
