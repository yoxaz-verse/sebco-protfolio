  export interface ToastMessage{
    type:string;
    message:string;
    position?:string;
  }
  export interface TopbarProps{
    username:string,
  }
  export interface ImageCarouselProps{
    src:string;
    alt:string;
  }
  export interface ProjectDetailProps{
    data: {
      image:string,
      project: string;
      description: string;
      location: string;
      services_provided: string;
      client: string;
      completion_date: string;
      images_carousel: ImageCarouselProps[];
    };
  }
  export interface ImageRowProps{
    data:ImageCarouselProps[];
  }

export interface OurServicesModalProps{
    data: {
      image:string;
      title: string;
      description: string;
    };
  }
export interface OurTeamCardProps{
    data: {
      image:string;
      name: string;
      designation: string;
    };
  }
export interface ServiceCardProps{
  service:{
    alt:string;
    src:string;
    title:string;
  }
}
export interface RecentPostCardProps{
  data:{
    image:string;
    read:string;
    title:string;
  }
}