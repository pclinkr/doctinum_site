import Container from '../../layout/Container';

export default function EditorsArchitectureSection({
  title = '',
  steps = [],
  description = '',
  className = '',
  containerClassName = '',
}) {
  return (
    <Container className={`py-20 ${containerClassName}`}>
      <section className={`rev ${className}`}>
        <h2 className="mb-12 text-center text-[clamp(34px,4.2vw,50px)] leading-[1.02] tracking-[-0.045em]">
          {title}
        </h2>

        <div className="mx-auto">
          <div className="relative rounded-lg overflow-hidden drop-shadow-lg">
            <img src="/assets/images/process_api_doctinum.png" alt="Architecture" className="w-full h-auto" />
          </div>

          {description && (
            <p className="mt-8 text-center text-[15px] leading-[1.6] text-[var(--muted)]">
              {description}
            </p>
          )}
        </div>
      </section>
    </Container>
  );
}
