import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS } from "@contentful/rich-text-types";
import type { Document } from "@contentful/rich-text-types";

type RichTextContentProps = {
  document: Document;
  className?: string;
};

export default function RichTextContent({
  document,
  className = "",
}: RichTextContentProps) {
  return (
    <div
      className={`prose prose-neutral font-primary max-w-none text-black/80 [&_h2]:mt-8 [&_h2]:font-primary [&_h2]:text-2xl [&_h2]:font-bold [&_h3]:mt-6 [&_h3]:font-primary [&_h3]:text-xl [&_h3]:font-semibold [&_li]:my-1 [&_li]:font-primary [&_ol]:list-decimal [&_ol]:pl-6 [&_p]:my-4 [&_p]:font-primary [&_p]:leading-relaxed [&_ul]:list-disc [&_ul]:pl-6 ${className}`}
    >
      {documentToReactComponents(document, {
        renderNode: {
          [BLOCKS.EMBEDDED_ASSET]: () => null,
        },
      })}
    </div>
  );
}
