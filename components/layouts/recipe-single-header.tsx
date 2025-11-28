import { Badge } from "../ui/badge";

interface RecipeSingleHeaderProps {
  title: string;
  label: string;
}

const RecipeSingleHeader = ({ title, label }: RecipeSingleHeaderProps) => {
  return (
    <header className="space-y-6">
      <Badge variant="outline">{label}</Badge>
      <h1 className="text-foreground text-4xl leading-15 font-bold tracking-tight md:text-4xl lg:text-5xl">
        {title}
      </h1>
    </header>
  );
};

export default RecipeSingleHeader;
