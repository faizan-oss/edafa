import { beforeYouHirePage } from "../../byhuContent";

type FaqCopy = (typeof beforeYouHirePage.questions);

type ClauseFaqProps = {
  copy: FaqCopy;
};

export function ClauseFaq({ copy }: ClauseFaqProps) {
  return (
    <section className="byhu-clause" id={copy.id}>
      <div className="byhu-ch">
        <span className="n">{copy.number}</span>
        <h2>{copy.title}</h2>
      </div>
      <div className="byhu-faq">
        {copy.items.map((item) => (
          <details key={item.question}>
            <summary>{item.question}</summary>
            <p>{item.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
