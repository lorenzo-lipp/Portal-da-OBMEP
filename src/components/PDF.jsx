export default function PDF({ code }) {
  return (<iframe className="pdf" src={"https://drive.google.com/file/d/" + code + "/preview"} loading="eager" />);
}