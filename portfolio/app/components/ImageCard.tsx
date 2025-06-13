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
    <Link href={link} target="_blank" className="block max-w-150">
      <div className="relative w-full h-78 group rounded-sm overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300">
        <Image
          src={imageUrl}
          alt="project image"
          // width={600}
          // height={400}
          fill
          className="object-cover rounded-sm max-h-100"
        />

      <TagBar tags={tags}/>
      </div>
    </Link>
  );
}

export default ImageCard
