import { AvatarContainer } from "./styles";

type Sizes = "sm" | "md" | "lg";

interface ImageSizeOptions {
  width: number;
  height: number;
}

interface AvatarProps {
  imageUrl: string;
  size: Sizes;
}

const imageSize: Record<Sizes, ImageSizeOptions> = {
  sm: {
    width: 32,
    height: 32
  },
  md: {
    width: 40,
    height: 40
  },
  lg: {
    width: 72,
    height: 72
  }
};

export function Avatar({ imageUrl, size }: AvatarProps) {
  return (
    <AvatarContainer
      src={{
        src: imageUrl,
        width: imageSize[size].width,
        height: imageSize[size].height
      }}
      quality={100}
      alt="Foto de perfil do usuário"
      size={size}
    />
  );
}
