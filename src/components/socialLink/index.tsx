type SocialLinkProps = {
  icon: React.ReactNode;
  link: string;
};

export const SocialLink = (props: SocialLinkProps) => {
  const { icon, link } = props;
  return (
    <a href={link} target="_blank">
      {icon}
    </a>
  );
};
