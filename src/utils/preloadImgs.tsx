const preloadImgs = (imgPaths: string[]) => {
  let links: JSX.Element[] = [];
  imgPaths.map((path) => {
    links.push(<link rel="preload" as="image" href={path} />);
  });
  return links;
};
export default preloadImgs;
