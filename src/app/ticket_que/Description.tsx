import './Description.css';
import Image, { StaticImageData } from 'next/image';

type Props = {
  title?: string;
  content?: string[];
  image?: StaticImageData | string;
};

const Description: React.FC<Props> = ({ 
  title = 'あらすじ', 
  content = ['――――――――――――――――――――――――――――'], 
  image
}) => {
  return (
    <div className="summary-container">
      <div className="summary-title">{title}</div>
      <div className="summary-box">
        <div className="summary-content">{content}</div>
        {image && (
          <Image 
            src={image}
            alt="説明画像"
            className="summary-image"
            width={300} />
        )}
      </div>
    </div>
  );
};

export default Description;

