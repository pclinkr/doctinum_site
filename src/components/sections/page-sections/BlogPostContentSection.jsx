import SocialButtons from '../../ui/SocialButtons';
import Container from '../../layout/Container';

export default function BlogPostContentSection() {
  return (
    <>
      <Container className="pb-10 pt-[calc(var(--nav-h)+40px)]"><p className="ds-text-meta rev mb-4 text-[var(--muted)]">Oct 17, 2025</p><h1 className="rev mb-4">How to Create Content<br />That Actually Converts</h1><p className="rev mb-7 max-w-[520px] text-[var(--muted)]">Stop creating content that gets likes but doesn't drive sales. Here's what actually works.</p><div className="rev flex gap-2"><SocialButtons /></div></Container>
      <Container className="pb-20">
        <div className="rev mb-14 aspect-[16/9] w-full overflow-hidden rounded-[var(--r-lg)]"><div className="h-full w-full" style={{ background: 'var(--gradient-accent-warm)' }} /></div>
        <div className="rev max-w-[600px] [&_h2]:my-11 [&_h2]:mb-3 [&_h2]:text-[var(--font-size-h3)] [&_h2]:font-[var(--font-weight-h3)] [&_h2]:leading-[var(--line-height-h3)] [&_h2]:tracking-[var(--letter-spacing-h3)] [&_h3]:my-7 [&_h3]:mb-2 [&_h3]:text-[var(--font-size-h4)] [&_h3]:font-[var(--font-weight-h4)] [&_h3]:leading-[var(--line-height-h4)] [&_h3]:tracking-[var(--letter-spacing-h4)] [&_p]:mb-4 [&_p]:text-[var(--font-size-body)] [&_p]:leading-[var(--line-height-body)] [&_p]:tracking-[var(--letter-spacing-body)] [&_p]:text-[var(--muted)]">
          <h2>Understanding the Purpose of Each Post</h2>
          <p>Every piece of content should have a job. That might be to drive traffic, generate leads, educate your audience, or close a sale — it should never just be there to "keep the feed alive." If your goal isn't clear before you post, you can't expect your audience to take action.</p>
          <h3>Why intention matters more than volume</h3>
          <p>Posting every day might look impressive, but if none of it supports your bigger business goals, you're just spinning your wheels. It's better to post three strategic pieces per week than to flood your feed with filler.</p>
          <h2>Creating Content That Moves People</h2>
          <p>Conversion doesn't happen by accident. It starts with understanding what your audience actually wants, what their objections are, and how your product or service solves a real problem in their life.</p>
          <h3>Speak to problems, not just features</h3>
          <p>Great converting content starts with empathy. If you're a brand selling skincare, don't just talk about ingredients. Talk about how it feels to wake up with irritated skin and how your product helps someone start their day with confidence.</p>
          <h3>Make the next step obvious</h3>
          <p>If someone reads your caption, watches your Reel, or taps through your carousel and still doesn't know what to do next, that's on you. Clear CTAs — even soft ones — are what turn interest into action.</p>
          <h2>Measuring What Actually Matters</h2>
          <p>If your top-performing post has 20K views and 500 likes but didn't move your business forward, it's not really a win. Conversion content might not always go viral — but it will convert consistently when built right.</p>
          <h3>Focus on quality engagement over reach</h3>
          <p>Track saves, shares, link clicks, profile visits, and DMs — these are signs that people are taking action, not just scrolling past. The best content builds momentum quietly but powerfully.</p>
          <div className="mt-10 rounded-[var(--r-md)] bg-[var(--surface)] p-8"><h4 className="mb-1">Keep up with what matters.</h4><div className="ds-text-meta mb-4 text-[var(--muted)]">Simple, useful ideas on content, clarity, and growth shared weekly on X and Instagram.</div><div className="flex gap-2"><SocialButtons /></div></div>
        </div>
      </Container>
    </>
  );
}
