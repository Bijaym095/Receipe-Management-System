import { ClassValue, clsx } from "clsx";
import DOMPurify from "isomorphic-dompurify";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function sanitizeHtml(dirtyString: string) {
  return DOMPurify.sanitize(dirtyString);
}


export function hybridParser(content: string) {
  const lines = content.split("\n");

  const processedLines = lines.map((line) => {
    const trimmed = line.trim();

    // Detect HTML block tags
    const isHtmlBlock = /^<\/?(p|ul|ol|li|h1|h2|h3|h4|h5|h6|blockquote|pre|code|img|div|span|strong|em|table|thead|tbody|tr|td|th)[>\s]/i.test(
      trimmed
    );

    if (isHtmlBlock) {
      return trimmed; // leave HTML as-is
    }

    if (trimmed === "") {
      return ""; // skip empty lines
    }

    // Convert plain text → <p>text</p>
    return `<p>${trimmed}</p>`;
  });

  return processedLines.join("\n");
}
