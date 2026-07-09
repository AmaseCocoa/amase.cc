type BannerList = {
    href: string;
    src: ImageMetadata;
    alt: string;
}[]

type Config = {
    baseUrl: string;
    title: string;
    description: string;

    author: {
        avatar: string | ImageMetadata
        name: string;
    };

    socialLinks: {
        icon: string;
        url: string;
    }[];
}

function defineDefineConfig<T>() {
    return (v: T) => {return v}
}

export const defineConfig = defineDefineConfig<Config>()
export const defineBanners = defineDefineConfig<BannerList>()
