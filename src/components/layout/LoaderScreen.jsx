import BrandWordmark from '../ui/BrandWordmark';

export default function LoaderScreen({ stage }) {
  if (stage === 'done') return null;

  const isCurtainLifting = stage === 'curtain';

  return (
    <div id="ls" role="status" className={isCurtainLifting ? 'hide' : ''}>
      <div className="ls-curtain" aria-hidden="true" />
      <div className="ls-content">
        <div className="ls-logo-wrap">
          <BrandWordmark className="block h-auto w-[var(--ls-logo-w)]" color="var(--logo-contrast)" symbolColor="var(--logo-contrast)" alt="Doctinum" />
        </div>
        <div className="ls-progress-wrap">
          <div className="ls-progress-track">
            <div className="ls-progress-fill" />
          </div>
        </div>
      </div>
    </div>
  );
}
