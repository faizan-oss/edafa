import { useEffect, useRef, useState } from "react";
import { beforeYouHirePage, type FitVerdictState } from "../../byhuContent";
import { VerdictGlyph, type GlyphState } from "../VerdictGlyph";
import { SectionLink } from "../SectionLink";

type FitCopy = (typeof beforeYouHirePage.fitCheck);

type FitCheckProps = {
  copy: FitCopy;
};

type Answer = boolean | null;

function leanToGlyph(lean: FitVerdictState): GlyphState {
  if (lean === "yes") return "build";
  if (lean === "maybe") return "change";
  if (lean === "no") return "drop";
  return "none";
}

function computeVerdict(answers: Answer[]): {
  state: FitVerdictState;
  lean: FitVerdictState;
  answered: number;
} {
  const answered = answers.filter((a) => a !== null).length;
  const nos = answers.filter((a) => a === false).length;

  let state: FitVerdictState = "none";
  if (nos >= 3) {
    state = "no";
  } else if (answered === 5) {
    state = nos === 0 ? "yes" : "maybe";
  } else if (answered > 0) {
    state = "progress";
  }

  const lean: FitVerdictState =
    state === "progress" ? (nos === 0 ? "yes" : "maybe") : state;

  return { state, lean, answered };
}

declare global {
  interface Window {
    plausible?: (event: string, options?: { props?: Record<string, string> }) => void;
  }
}

export function FitCheck({ copy }: FitCheckProps) {
  const [answers, setAnswers] = useState<Answer[]>(() =>
    Array.from({ length: copy.questions.length }, () => null),
  );
  const firedRef = useRef(false);

  const { state, lean, answered } = computeVerdict(answers);
  const glyphState = leanToGlyph(lean);

  useEffect(() => {
    if (state !== "yes" && state !== "maybe" && state !== "no") {
      return;
    }
    if (firedRef.current) {
      return;
    }
    firedRef.current = true;
    window.plausible?.("fit_check_complete", { props: { state } });
  }, [state]);

  const heading =
    state === "progress"
      ? `${answered} of 5 answered.`
      : copy.verdict[state === "none" ? "none" : state].heading;

  const body =
    state === "progress"
      ? copy.verdict.progress.body
      : copy.verdict[state === "none" ? "none" : state].body;

  const setAnswer = (index: number, value: boolean) => {
    setAnswers((prev) => {
      const next = [...prev];
      next[index] = value;
      return next;
    });
  };

  return (
    <div className="byhu-fitband">
      <div className="byhu-ch">
        <span className="n">{copy.number}</span>
        <h2>{copy.title}</h2>
      </div>
      <p className="byhu-lede">{copy.lede}</p>
      <div className="byhu-fit">
        <div className="byhu-qs">
          {copy.questions.map((question, index) => (
            <div className="byhu-q" key={question}>
              <p>{question}</p>
              <div className="byhu-seg" role="group" aria-label={question}>
                <button
                  type="button"
                  className="is-yes"
                  aria-pressed={answers[index] === true}
                  onClick={() => setAnswer(index, true)}
                >
                  {copy.yes}
                </button>
                <button
                  type="button"
                  aria-pressed={answers[index] === false}
                  onClick={() => setAnswer(index, false)}
                >
                  {copy.no}
                </button>
              </div>
            </div>
          ))}
        </div>

        <aside
          className="byhu-verdict"
          data-state={state}
          data-lean={lean}
          aria-live="polite"
        >
          <div className="byhu-gwrap">
            <VerdictGlyph state={glyphState} />
          </div>
          <h3>{heading}</h3>
          <p>{body}</p>
          <div className="byhu-meter" aria-hidden="true">
            {answers.map((answer, index) => (
              <i
                key={copy.questions[index]}
                className={answer === null ? undefined : answer ? "is-y" : "is-n"}
              />
            ))}
          </div>
          <SectionLink
            href={copy.verdict.yes.href}
            className="byhu-btn byhu-verdict-act is-go"
          >
            {copy.verdict.yes.action}
          </SectionLink>
          <a href={copy.verdict.maybe.href} className="byhu-link byhu-verdict-act is-read">
            {copy.verdict.maybe.action}
          </a>
          <a href={copy.verdict.no.href} className="byhu-link byhu-verdict-act is-else">
            {copy.verdict.no.action}
          </a>
        </aside>
      </div>
    </div>
  );
}
