export interface IEvent {
  id: number;
  title: string;
  description: string;
  datetime: Date;
  tickets: number;
  price: number;
  location: {
    address: string ;
    city: string ;
    country: string ;
  };
  images: string[]
}

export interface IEventEntity {
    key: number;
    events: IEvent[];
  }