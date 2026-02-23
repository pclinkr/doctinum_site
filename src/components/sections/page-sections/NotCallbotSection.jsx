import SectionHeading from '../SectionHeading';

export default function NotCallbotSection() {
  return (
    <section className="mx-auto w-full max-w-[1200px] px-16 py-24 text-center max-[1024px]:px-8 max-[768px]:px-5">
      <SectionHeading
        className="rev"
        title={
          <>
            Une <span className="si">infrastructure clinique</span>, pas un simple agent vocal.
          </>
        }
        style={{ marginBottom: '56px' }}
      />
      <div className="rev grid grid-cols-3 gap-px overflow-hidden rounded-[var(--r-md)] border border-[var(--border)] bg-[var(--border)] max-[809px]:grid-cols-1">
        <div className="flex flex-col gap-[14px] bg-[var(--bg)] px-8 py-[44px] text-left transition-colors duration-200 ease-out hover:bg-[var(--white-55)]">
          <div>
            <div className="flex h-[34px] w-[34px] items-center justify-center rounded-[var(--r-sm)] bg-[var(--black)]">
              <svg className="h-[17px] w-[17px] fill-none stroke-2 stroke-white [stroke-linecap:round] [stroke-linejoin:round]" viewBox="0 0 24 24">
                <path d="M12 20h9M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4Z" />
              </svg>
            </div>
          </div>
          <div>
            <h3 className="text-[17px] font-[var(--w500)] tracking-[var(--track)]">Protocoles paramétrables et sécurisés</h3>
            <p className="text-[14px] leading-[1.65] text-[var(--muted)]">
              Le suivi repose sur un protocole appliqué de manière rigoureuse par vos agents dans une conversation fluide avec le patient.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-[14px] bg-[var(--bg)] px-8 py-[44px] text-left transition-colors duration-200 ease-out hover:bg-[var(--white-55)]">
          <div>
            <div className="flex h-[34px] w-[34px] items-center justify-center rounded-[var(--r-sm)] bg-[var(--black)]">
              <svg className="h-[17px] w-[17px] fill-none stroke-2 stroke-white [stroke-linecap:round] [stroke-linejoin:round]" viewBox="0 0 24 24">
                <path d="M3 13h6l3 8 4-18 3 10h2" />
              </svg>
            </div>
          </div>
          <div>
            <h3 className="text-[17px] font-[var(--w500)] tracking-[var(--track)]">Suivi longitudinal</h3>
            <p className="text-[14px] leading-[1.65] text-[var(--muted)]">
              Les données sont organisées dans le temps, pas traitées comme des échanges isolés.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-[14px] bg-[var(--bg)] px-8 py-[44px] text-left transition-colors duration-200 ease-out hover:bg-[var(--white-55)]">
          <div>
            <div className="flex h-[34px] w-[34px] items-center justify-center rounded-[var(--r-sm)] bg-[var(--black)]">
              <svg className="h-[17px] w-[17px] fill-none stroke-2 stroke-white [stroke-linecap:round] [stroke-linejoin:round]" viewBox="0 0 24 24">
                <path d="M12 3l8 4v5c0 5-3.5 8-8 9-4.5-1-8-4-8-9V7l8-4z" />
              </svg>
            </div>
          </div>
          <div>
            <h3 className="text-[17px] font-[var(--w500)] tracking-[var(--track)]">Supervision médicale constante</h3>
            <p className="text-[14px] leading-[1.65] text-[var(--muted)]">
              Aucune décision médicale autonome. Les alertes sont définies par l’équipe.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
