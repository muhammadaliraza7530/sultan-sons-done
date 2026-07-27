export function TeamSection() {
  const team = [
    { name: "Eng. Farhan Sultan", role: "Managing Director" },
    { name: "Haider Naqvi", role: "Principal Architect" },
    { name: "Miss Rimsha", role: "Interior Designer" },
    { name: "Ar. Jannat Saleem", role: "Interior Designer" },
    { name: "Muhammad Ajmal", role: "Quantity Surveyor" },
  ];

  return (
    <section className="shine-box mx-auto mt-24 w-[min(1200px,calc(100%-2rem))] rounded-3xl border border-border bg-card p-8 sm:p-12">
      <div className="text-center">
        <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-accent">
          At Your Service
        </span>
        <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
          The Sultan Sons team supporting your project.
        </h2>
        <p className="mx-auto mt-4 max-w-3xl text-sm leading-relaxed text-muted-foreground sm:text-base">
          Our dedicated leadership and design staff guide every project, from planning and architecture to interior finish and final delivery.
        </p>
      </div>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {team.map((member) => (
          <article key={member.name} className="rounded-3xl border border-border bg-primary/5 p-6 text-center text-sm text-foreground shadow-sm">
            <h3 className="text-lg font-semibold text-foreground">{member.name}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{member.role}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
