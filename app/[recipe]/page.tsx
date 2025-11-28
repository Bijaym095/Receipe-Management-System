import RecipeSingleContent from "@/components/layouts/recipe-single-content";
import RecipeSingleHeader from "@/components/layouts/recipe-single-header";

const RECIPE = {
  label: "Company",
  title: "The Best Way to Write a Recurring Email Newsletter",
  author: {
    name: "Esther Howard",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  publishedDate: "Nov 24, 2023",
  content: [
    "You cannot avoid the importance of the first outreach email for increasing your sales in the email campaign. But how can you move out from the crowd and evoke a meaningful and personalized response?",
    "Personalizing the emails for prospects and clients can get you the results you want from your email marketing strategy. As a result, you can engage prospects and drive them toward action, leading to a successful lead prospecting strategy in your sales outreach emails.",
    "Although you cannot personalize every email with great accuracy, you can add a few elements that are enough to spark interest.",
    "To get you in the right direction, here is the complete guide to email personalization for sales outreach that will help you create more engaging and effective email campaigns.",
    "The key to successful email marketing lies in understanding your audience deeply and crafting messages that resonate with their specific needs, challenges, and goals. This approach not only improves open rates but also builds stronger relationships with your prospects.",
  ],
};

async function RecipePostPage({
  params,
}: {
  params: Promise<{ recipe: string }>;
}) {
  const { recipe } = await params;

  return (
    <div className="container my-12 lg:my-16 xl:my-20 2xl:my-24 bg-background min-h-screen">
      <div className="py-8">
        <RecipeSingleHeader label={RECIPE.label} title={RECIPE.title} />

        <div className="mt-16">
          <RecipeSingleContent
            content={RECIPE.content}
            coverImage="https://plus.unsplash.com/premium_photo-1683211783920-8c66ab120c09"
          />
        </div>
      </div>
    </div>
  );
}

export default RecipePostPage;
