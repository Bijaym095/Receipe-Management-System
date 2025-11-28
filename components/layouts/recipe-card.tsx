import { ArrowRight } from "lucide-react";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

interface ReceipeCardProps extends React.ComponentProps<"div"> {
  id: string;
  title: string;
  summary: string;
  label: string;
  author: string;
  published: string;
  url: string;
  image: string;
}

function ReceipeCard({ id, url, image, title, summary }: ReceipeCardProps) {
  return (
    <Card
      key={id}
      className="grid grid-rows-[auto_auto_1fr_auto] overflow-hidden pt-0"
    >
      <div className="aspect-16/9 w-full">
        <Link
          href={url}
          className="fade-in transition-opacity duration-200 hover:opacity-70"
        >
          <Image
            src={image}
            alt={title}
            width={400}
            height={400}
            className="h-full w-full object-cover object-center"
          />
        </Link>
      </div>
      <CardHeader className="gap-0">
        <h3 className="text-lg font-semibold hover:underline md:text-xl">
          <Link href={url}>{title}</Link>
        </h3>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">{summary}</p>
      </CardContent>
      <CardFooter>
        <Link
          href={url}
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
