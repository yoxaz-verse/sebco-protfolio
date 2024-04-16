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
  },
  type?:string;
  move?:string;
}
export interface ApproachCardProps{
  approach:{
    img:string;
    title:string;
    index:string;
  }
}
export interface RecentPostCardProps{
  data:{
    image:string;
    read:string;
    title:string;
  }
}
export interface JobOpeningCardProps{
  job:{
    image:string,
    alt:string,
    title:string,
    location:string,
    description:string,
  }
}
export interface ConnectWithMeProps{
  data:{
    name:string,
    designation:string,
    instagram:string,
    twitter:string,
    facebook:string,
    email:string,
    phone:string,
    img:string,
  }
}
export interface HomePageAboutProps{
  data:{
    title:string;
    image:string;
    description:string;
    achievements:Achievements[];
  }
} 
export interface Achievements{
  heading:string,
  description:string,
}
export interface Methods{
  title:string,
  description:string,
}
export interface HomePageWorkProps{
  data:{
    image:string;
    title:string;
    methods:Methods[];
  }
}
export interface ClientSaysCardProps{
  client:{
    image:string;
    name:string;
    link:string;
  }
}