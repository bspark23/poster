export interface MemorialGalleryImage {
  url: string;
  alt?: string;
  caption?: string;
}

export interface MemorialTimeline {
  event: string;
  description?: string;
  date?: string;
  image?: string;
}

export interface MemorialCondolence {
  id: string;
  name: string;
  message: string;
  createdAt: string;
  attachmentUrl?: string;
}

export interface Memorial {
  id: string;
  
  // Basic Information
  firstName: string;
  lastName: string;
  title?: string; // e.g., "Hon.", "Dr."
  age?: number;
  dateOfBirth?: string;
  dateOfDeath: string;
  
  // Biographical
  bio?: string;
  profileImage?: string;
  profileImageAlt?: string;
  
  // Life Sections
  heroSection?: {
    title: string;
    subtitle?: string;
    tagline?: string;
    backgroundImage?: string;
  };
  
  sections?: {
    heritage?: {
      title: string;
      description: string;
      image?: string;
    };
    service?: {
      title: string;
      description: string;
      image?: string;
    };
    family?: {
      title: string;
      description: string;
      image?: string;
    };
    cherished?: {
      title: string;
      description: string;
      images?: MemorialGalleryImage[];
    };
  };
  
  // Events
  events?: {
    serviceOfSongs?: {
      date: string;
      time: string;
      location: string;
      address: string;
      mapUrl?: string;
    };
    funeralService?: {
      date: string;
      bodyLeaveTime?: string;
      stops?: Array<{
        location: string;
        description: string;
        time?: string;
      }>;
      serviceTime?: string;
      address?: string;
      mapUrl?: string;
    };
  };
  
  // Contact & Social
  contacts?: Array<{
    type: 'phone' | 'email' | 'whatsapp';
    value: string;
  }>;
  
  contactPerson?: {
    name: string;
    relation?: string;
    phone?: string;
    email?: string;
  };
  
  socialLinks?: Array<{
    platform: string;
    url: string;
  }>;
  
  // Gallery
  galleryImages?: MemorialGalleryImage[];
  
  // Condolences
  condolences?: MemorialCondolence[];
  allowCondolences?: boolean;
  
  // Timeline
  timeline?: MemorialTimeline[];
  
  // Metadata
  published: boolean;
  featured?: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface MemorialCreate extends Omit<Memorial, 'id' | 'createdAt' | 'updatedAt'> {}

export type MemorialUpdateInput = Partial<Memorial>;
