type DownloadButtonProps = {
  className: string;
};

export const DownloadButton = (props: DownloadButtonProps) => {
  const { className } = props;
  return (
    <a
      href="/documents/tiago_rocha_cv.pdf"
      download
      className={`w-fit px-8 py-3 rounded-3xl border-solid border transition-colors delay-100 ease-linear font-bold ${className}`}
    >
      DOWNLOAD CV
    </a>
  );
};
