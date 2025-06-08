import Image from 'next/image';
import Link from 'next/link';
import TagBar from './TagBar';

type ImageCardProps = {
	imageUrl: string;
	link: string
	tags: string[]
}


const ImageCard = ({imageUrl, link, tags}: ImageCardProps) => {
	return (
    <Link href={link} target="_blank" className="block max-w-xl">
      <div className="relative group rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300">
        <Image
          src={imageUrl}
          alt="Crossing the uncanny valley of conversational voice"
          width={600}
          height={400}
          className="rounded-2xl max-h-100"
        />

      <TagBar tags={tags}/>
      </div>
    </Link>
  );
}

export default ImageCard
