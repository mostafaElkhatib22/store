export default function AboutPage() {
  return (
    <section>
      <h1 className="flex flex-wrap gap-2 sm:gap-x-6 items-center justify-center text-4xl font-bold leading-none tracking-wide sm:text-6xl">
        We love
        <span className="bg-destructive py-2 px-4 rounded-lg tracking-widest text-white dark:bg-destructive">
          {" "}
          Store
        </span>
      </h1>
      <p className="mt-6 text-lg tracking-wide leading-8 max-w-2xl mx-auto text-muted-foreground">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
        accusantium aliquam corrupti quam officia officiis pariatur voluptate,
        deserunt ducimus culpa voluptatum facilis quis dolores eligendi labore
        exercitationem corporis quaerat odio.
      </p>
    </section>
  );
}
