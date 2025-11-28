import RecipeCard from "@/components/layouts/recipe-card";

const RECEIPES = [
  {
    id: "post-1",
    title: "Getting Started with shadcn/ui Components",
    summary:
      "Learn how to quickly integrate and customize shadcn/ui components in your Next.js projects. We'll cover installation, theming, and best practices for building modern interfaces.",
    label: "Tutorial",
    author: "Sarah Chen",
    published: "1 Jan 2024",
    url: "1",
    image:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-1.svg",
  },
  {
    id: "post-2",
    title: "Building Accessible Web Applications",
    summary:
      "Explore how to create inclusive web experiences using shadcn/ui's accessible components. Discover practical tips for implementing ARIA labels, keyboard navigation, and semantic HTML.",
    label: "Accessibility",
    author: "Marcus Rodriguez",
    published: "1 Jan 2024",
    url: "1",
    image:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-1.svg",
  },
  {
    id: "post-3",
    title: "Modern Design Systems with Tailwind CSS",
    summary:
      "Dive into creating scalable design systems using Tailwind CSS and shadcn/ui. Learn how to maintain consistency while building flexible and maintainable component libraries.",
    label: "Design Systems",
    author: "Emma Thompson",
    published: "1 Jan 2024",
    url: "1",
    image:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-1.svg",
  },
  {
    id: "post-4",
    title: "Getting Started with shadcn/ui Components",
    summary:
      "Learn how to quickly integrate and customize shadcn/ui components in your Next.js projects. We'll cover installation, theming, and best practices for building modern interfaces.",
    label: "Tutorial",
    author: "Sarah Chen",
    published: "1 Jan 2024",
    url: "1",
    image:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-1.svg",
  },
  {
    id: "post-5",
    title: "Building Accessible Web Applications",
    summary:
      "Explore how to create inclusive web experiences using shadcn/ui's accessible components. Discover practical tips for implementing ARIA labels, keyboard navigation, and semantic HTML.",
    label: "Accessibility",
    author: "Marcus Rodriguez",
    published: "1 Jan 2024",
    url: "1",
    image:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-1.svg",
  },
  {
    id: "post-6",
    title: "Modern Design Systems with Tailwind CSS",
    summary:
      "Dive into creating scalable design systems using Tailwind CSS and shadcn/ui. Learn how to maintain consistency while building flexible and maintainable component libraries.",
    label: "Design Systems",
    author: "Emma Thompson",
    published: "1 Jan 2024",
    url: "1",
    image:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-1.svg",
  },
];

export default function Home() {
  return (
    <section className="container my-12 lg:my-16 xl:my-20 2xl:my-24">
      <header className="mb-6 2xl:mb-9 text-center">
        <h1 className="font-semibold text-3xl lg:text-5xl">
          Recipes
        </h1>
      </header>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {RECEIPES.map((recipe) => (
          <RecipeCard key={recipe.id} {...recipe} />
        ))}
      </div>
    </section>
  );
}
