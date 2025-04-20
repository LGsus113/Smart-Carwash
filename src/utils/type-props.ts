//Props para componente page-base.astro
type AstroComponent = () => Promise<{ html: string }>;

export interface ClassProps {
  class?: string;
}

export interface BaseProps {
  MainComponent: AstroComponent;
}

// Props para componente anchor.astro
export interface AnchorProps {
  href: string;
}

// Props para componente button-content.astro
type LinkType = "/" | `/${string}`;

export interface ButtonProps {
  variant?: "primary" | "secondary";
  to?: LinkType;
}

// Props para componente consumer-card-data.astro
export interface AttributosProps {
  duración: string;
  precio: string;
  garantía: string;
}

export interface ItemProps {
  title: string;
  description: string;
  icon: any;
  imageLink: string;
  atributos: AttributosProps;
  imagesCarousel: string[];
}

export interface ConsumerCardProps {
  item: ItemProps;
  varible?: "flex" | "grid";
  indice?: number;
}

// Props para componente contener-div.astro
export interface ContenerDivProps {
  varible?: "flex" | "grid";
}

// Props para componente h1-title.astro
type fontSizeClass =
  | "text-xs"
  | "text-sm"
  | "text-base"
  | "text-lg"
  | "text-xl"
  | "text-2xl"
  | "text-3xl"
  | "text-4xl"
  | "text-5xl"
  | "text-6xl"
  | "text-7xl"
  | "text-8xl"
  | "text-9xl";
type CustomFontSize = `text-[${number}px]`;
type AllowedTextSize = fontSizeClass | CustomFontSize;

type colorTextCustom =
  | "text-primary"
  | "text-secondary"
  | "text-tertiary"
  | "text-accent"
  | "text-uni-secondary"
  | "text-white"
  | "text-black";
type colorText = `text-${string}-${number}`;
type AllowedColorText = colorTextCustom | colorText;

export interface H1TitleProps {
  color?: AllowedColorText;
  size?: AllowedTextSize;
  responsive?: string;
}

// Props para componente mascara.astro
export interface MascaraProps {
  direction?: "left" | "bottom";
}

// Props para componente presentation-pages.astro y otros componentes que lo usen
export interface TitleProps {
  title: string;
}

// Props para componente section-scheme.astro
export interface SectionSchemeProps {
  id: string;
}

// Props para componente list-contact.astro
export interface ListContactProps {
  description?: string;
  items?: { icon: any; label: string; link?: string }[];
}

// Props para componente ListLink.astro
export interface ListLinkProps {
  href: string;
  label: string;
}

// Props para componente input-label-card.astro
export interface InputLabelCardProps {
  type?: any;
  varible?: "type" | "textarea";
}

// Props para componente layout.astro
export interface LayoutProps {
  title: string;
  description: string;
}

// Props para componente dialog-element.astro
export interface DialogElementProps {
  id: string;
  tipo?: "form" | "multipoint" | "workpoint";
}

//Props para componente shadow-inner-image.astro
type ZIndex =
  | "-z-50"
  | "-z-40"
  | "-z-30"
  | "-z-20"
  | "-z-10"
  | "z-0"
  | "z-10"
  | "z-20"
  | "z-30"
  | "z-40"
  | "z-50"
  | "z-auto";
type ZIndexCustom = `z-[${number}]` | `-z-[${number}]`;

export interface ZPositionProps {
  zposition?: ZIndex | ZIndexCustom;
}

//Props para article-data-icon.astro
export interface IconProps {
  value: string;
  color: string;
}
