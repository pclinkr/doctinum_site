import Button from '../../ui/Button';

export default function NotFoundSection({ onNavigate }) {
  return (
    <div className="not-found"><div className="not-found-num rev">404</div><p className="not-found-msg rev">Whoops, that page doesn't exist</p><Button className="rev" size="lg" onClick={() => onNavigate('home')}>Go home</Button></div>
  );
}
