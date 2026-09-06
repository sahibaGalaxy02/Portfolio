import DecryptedText from '../reactbits/DecryptedText'

export default function SectionHeading({ text }: { text: string }) {
  return (
    <h2 className="font-display text-3xl font-medium italic text-ink">
      <DecryptedText
        text={text}
        animateOn="view"
        revealDirection="start"
        speed={35}
        maxIterations={8}
        sequential
        useOriginalCharsOnly
        parentClassName="inline-block not-italic font-medium"
      />
    </h2>
  )
}
