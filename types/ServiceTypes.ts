export interface ServiceCardData {
  image: string;
  width: string;
  height: string;
  title: string;
  introduction: string;
}

export interface ServicePageData {
  title: string;
  subtitle: string;
  services: ServiceCardData[];
}