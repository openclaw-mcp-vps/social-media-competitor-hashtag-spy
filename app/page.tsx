export default function Page() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-20 flex flex-col gap-20">

      {/* Hero */}
      <section className="flex flex-col gap-6 text-center">
        <div className="inline-block mx-auto bg-[#161b22] border border-[#30363d] rounded-full px-4 py-1 text-sm text-[#58a6ff] font-medium">
          Instagram Hashtag Intelligence
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight">
          Spy on competitor hashtags.<br />
          <span className="text-[#58a6ff]">Outrank them on Instagram.</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto">
          HashtagSpy monitors your competitors&apos; Instagram posts, scores every hashtag by reach and engagement, and surfaces the exact combinations that will grow your account.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="mx-auto bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold px-8 py-3 rounded-lg transition-colors text-base"
        >
          Start Spying – $11/mo
        </a>
        <ul className="flex flex-wrap justify-center gap-4 text-sm text-[#8b949e]">
          <li>✓ Real-time competitor monitoring</li>
          <li>✓ AI hashtag recommendations</li>
          <li>✓ Cancel anytime</li>
        </ul>
      </section>

      {/* Pricing */}
      <section className="flex flex-col gap-6 items-center">
        <h2 className="text-2xl font-bold text-white">Simple, flat pricing</h2>
        <div className="w-full max-w-sm bg-[#161b22] border border-[#30363d] rounded-2xl p-8 flex flex-col gap-6">
          <div className="flex flex-col gap-1">
            <span className="text-4xl font-bold text-white">$11<span className="text-lg font-normal text-[#8b949e]">/mo</span></span>
            <span className="text-[#8b949e] text-sm">Everything you need to dominate your niche</span>
          </div>
          <ul className="flex flex-col gap-3 text-sm">
            {[
              "Track up to 10 competitor accounts",
              "Hashtag performance scoring & ranking",
              "AI-powered hashtag combo suggestions",
              "Background monitoring – updates every 6 hrs",
              "Export hashtag sets as plain text",
              "Email digest with weekly top performers"
            ].map((f) => (
              <li key={f} className="flex items-start gap-2">
                <span className="text-[#58a6ff] mt-0.5">✓</span>
                <span className="text-[#c9d1d9]">{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block text-center bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold px-6 py-3 rounded-lg transition-colors"
          >
            Get Started
          </a>
          <p className="text-xs text-center text-[#8b949e]">Secure checkout via Lemon Squeezy. Cancel anytime.</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="flex flex-col gap-6">
        <h2 className="text-2xl font-bold text-white text-center">FAQ</h2>
        <div className="flex flex-col gap-4">
          {[
            {
              q: "How does HashtagSpy get competitor data?",
              a: "HashtagSpy uses a background job system to periodically fetch public Instagram post data for the competitor accounts you add. No login or Instagram credentials required from you."
            },
            {
              q: "How are hashtag recommendations generated?",
              a: "We score each hashtag by engagement rate, reach, and posting frequency across your tracked competitors, then use an AI model to suggest the optimal combination for your specific niche and audience size."
            },
            {
              q: "Can I cancel my subscription?",
              a: "Yes. You can cancel at any time from your Lemon Squeezy customer portal. You keep access until the end of your billing period with no questions asked."
            }
          ].map(({ q, a }) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6 flex flex-col gap-2">
              <h3 className="font-semibold text-white">{q}</h3>
              <p className="text-sm text-[#8b949e] leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </section>

    </main>
  );
}
