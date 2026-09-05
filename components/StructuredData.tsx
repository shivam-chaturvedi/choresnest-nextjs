type JsonLdObject = Record<string, unknown>;

type Props = {
  data: JsonLdObject | JsonLdObject[] | null | undefined;
  id: string;
};

export default function StructuredData({ data, id }: Props) {
  if (!data) {
    return null;
  }

  return (
    <script
      id={id}
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data),
      }}
    />
  );
}
