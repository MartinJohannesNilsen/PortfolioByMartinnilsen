const preloadImgs = (imgPaths: string[]) => {
  let links: JSX.Element[] = [];
  imgPaths.map((path, index) => {
    links.push(<link rel="preload" as="image" href={path} key={index} />);
  });
  return links;
};
export default preloadImgs;
