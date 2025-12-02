import { ArrowRight } from "lucide-react";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { IRecipe } from "@/types/recipe.type";
import Image from "next/image";
import Link from "next/link";

interface RecipeCardProps extends IRecipe {}

function ReceipeCard({ id, name, description }: RecipeCardProps) {
  return (
    <Card
      key={id}
      className="grid grid-rows-[auto_auto_1fr_auto] overflow-hidden pt-0"
    >
      <div className="aspect-video w-full">
        <Link
          href={`/${id}`}
          className="fade-in transition-opacity duration-200 hover:opacity-70"
        >
          <Image
            src="/card-placeholder-img.jpg"
            alt={name}
            width={400}
            height={400}
            className="h-full w-full object-cover object-center"
          />
        </Link>
      </div>
      <CardHeader className="gap-0">
        <h3 className="text-lg font-semibold hover:underline md:text-xl">
          <Link href={`/${id}`}>{name}</Link>
        </h3>
      </CardHeader>
      <CardContent className="[&_p]:line-clamp-3">
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
      <CardFooter>
        <Link
          href={`/${id}`}
          className="text-foreground flex items-center hover:underline"
        >
          Read more
          <ArrowRight className="ml-2 size-4" />
        </Link>
      </CardFooter>
    </Card>
  );
}

export default ReceipeCard;
