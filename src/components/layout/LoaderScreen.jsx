import BrandWordmark from '../ui/BrandWordmark';

export default function LoaderScreen({ stage }) {
  if (stage === 'done') return null;

  const isCurtainLifting = stage === 'curtain';

  return (
    <div id="ls" role="status" className={isCurtainLifting ? 'hide' : ''}>
      <div className="ls-curtain" aria-hidden="true" />
      <div className="ls-content">
        <div className="ls-logo">
          <BrandWordmark className="ls-wordmark" color="var(--logo-contrast)" symbolColor="var(--logo-contrast)" alt="Doctinum" />
        </div>
        <div className="ls-bar-wrap"><div className="ls-bar" /></div>
      </div>
    </div>
  );
}
