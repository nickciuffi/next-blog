type AuthorData = {
  data: {
    id: number;
    attributes: {
      name: string;
      createdAt: string;
      updatedAt: string;
      publishedAt: string;
    };
  };
};
type CategoryData = {
  data: {
    id: number;
    attributes: {
      name: string;
      createdAt: string;
      updatedAt: string;
      publishedAt: string;
    };
  };
};

export type ImageFormats = {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path: null;
  size: number;
  width: number;
  height: number;
  provider_metadata: {
    public_id: string;
    resource_type: string;
  };
};

type ImageData = {
  data: [
    {
      id: number;
      attributes: {
        name: string;
        alternativeText: string;
        caption: string;
        width: number;
        height: number;
        formats: {
          large: ImageFormats;
          small: ImageFormats;
          medium: ImageFormats;
          thumbnail: ImageFormats;
        };
        hash: string;
        ext: string;
        mime: string;
        size: number;
        url: string;
        previewUrl: null;
        provider: string;
        provider_metadata: {
          public_id: string;
          resource_type: string;
        };
        createdAt: string;
        updatedAt: string;
      };
    },
  ];
};

export type PostData = {
  id: number;
  attributes: {
    title: string;
    content: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    slug: string;
    image?: ImageData;
    author?: AuthorData;
    category?: CategoryData;
  };
};
