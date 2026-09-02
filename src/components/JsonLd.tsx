/**
 * Renders one or more JSON-LD schema objects into the page.
 *
 * < is escaped in the serialised output so a stray angle bracket in
 * content can never close the script tag early.
 */
export function JsonLd({ schema }: { schema: object | object[] }) {
  const payload = Array.isArray(schema) ? schema : [schema];
  return (
    <>
      {payload.map((item, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(item).replace(/</g, String.fromCharCode(92) + "u003c"),
          }}
        />
      ))}
    </>
  );
}
