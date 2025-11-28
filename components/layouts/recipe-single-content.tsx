interface RecipeContentProps {
  content: string[];
  coverImage?: string;
}

function RecipeSingleContent({ content, coverImage }: RecipeContentProps) {
  return (
    <article className="space-y-8">
      {coverImage && (
        <div className="bg-muted aspect-video w-full overflow-hidden rounded-xl">
          <img
            src={coverImage}
            alt="Blog cover"
            className="h-full w-full object-cover"
          />
        </div>
      )}

      <div className="prose prose-lg max-w-none">
        {content.map((paragraph, index) => (
          <p key={index} className="mb-4 leading-relaxed">
            {paragraph}
          </p>
        ))}
      </div>
    </article>
  );
}

export default RecipeSingleContent;
