type DownloadButtonProps = {
  className?: string;
  text: string;
};

export const Button = (props: DownloadButtonProps) => {
  const { className, text } = props;
  return (
    <a
      href="/documents/tiago_rocha_cv.pdf"
      download
      className={`w-fit px-8 py-3 rounded-3xl border-solid border transition-colors delay-100 ease-linear font-bold ${className}`}
    >
      {text}
    </a>
  );
};
