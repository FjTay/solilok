function weatherIcon(data, folder) {
  return `${process.env.PUBLIC_URL}/${folder}/${data}.png`;
}
export default weatherIcon;
