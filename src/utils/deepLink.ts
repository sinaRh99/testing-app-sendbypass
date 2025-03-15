export const deepLink = ({
  access,
  refresh,
}: {
  access: string;
  refresh: string;
}) => {
  const deepLinkPath = localStorage.getItem("deepLinkPath");
  if (deepLinkPath) {
    window.location.href = `${deepLinkPath}?access=${access}&refresh=${refresh}`;
  }
};
