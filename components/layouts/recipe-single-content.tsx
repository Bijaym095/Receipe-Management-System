import { hybridParser, sanitizeHtml } from "@/lib/utils";

interface RecipeContentProps {
  content: string;
  coverImage?: string;
}

function RecipeSingleContent({ content, coverImage }: RecipeContentProps) {
  return (
    <article className="space-y-6 2xl:space-y-8">
      {coverImage && (
        <div className="bg-muted aspect-video w-full overflow-hidden rounded-xl">
          <img
            src={coverImage}
            alt="Blog cover"
            className="h-full w-full object-cover"
          />
        </div>
      )}

      <div
        className="[&_a]:underline [&_p:not(:last-child)]:mb-4"
        dangerouslySetInnerHTML={{
          __html: sanitizeHtml(hybridParser(content)),
        }}
      ></div>
    </article>
  );
}

export default RecipeSingleContent;
