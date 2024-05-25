import "./css/Video.css";

export default function Video({ videoSrc }) {
  const link = `https://docs.google.com/viewer?srcid=${videoSrc}&pid=explorer&efh=false&a=v&chrome=false&embedded=true`;

  return (
    <div className="video-wrapper">
      <iframe className="video" src={link}>
      </iframe>
    </div>
  );
}