/** Renders a closing line with one emphasised phrase wrapped in <b>. */
export function EmNote({ text, em }: { text: string; em: string }) {
  const index = text.indexOf(em);
  if (index === -1) {
    return <>{text}</>;
  }

  return (
    <>
      {text.slice(0, index)}
      <b>{em}</b>
      {text.slice(index + em.length)}
    </>
  );
}
