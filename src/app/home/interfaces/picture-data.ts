

export interface PictureData {
    id: string;
    created_at: string;
    updated_at: string;
    promoted_at?: string;
    width: number;
    height: number;
    color: string;
    blur_hash: string;
    description?: string;
    alt_description?: string;
    urls: Urls;
    links: Links;
    likes: number;
    liked_by_user: boolean;
    current_user_collections: any[];
    sponsorship?: Sponsorship;
    topic_submissions: Topicsubmissions;
    user: User;
}

export interface User {
    id: string;
    updated_at: string;
    username: string;
    name: string;
    first_name: string;
    last_name?: string;
    twitter_username?: string;
    portfolio_url?: string;
    bio?: string;
    location?: string;
    links: Links2;
    profile_image: Profileimage;
    instagram_username?: string;
    total_collections: number;
    total_likes: number;
    total_photos: number;
    accepted_tos: boolean;
    for_hire: boolean;
    social: Social2;
}

export interface Social2 {
    instagram_username?: string;
    portfolio_url?: string;
    twitter_username?: string;
    paypal_email?: any;
}

export interface Topicsubmissions {
}

export interface Sponsorship {
    impression_urls: string[];
    tagline: string;
    tagline_url: string;
    sponsor: Sponsor;
}

export interface Sponsor {
    id: string;
    updated_at: string;
    username: string;
    name: string;
    first_name: string;
    last_name?: any;
    twitter_username: string;
    portfolio_url: string;
    bio: string;
    location?: any;
    links: Links2;
    profile_image: Profileimage;
    instagram_username: string;
    total_collections: number;
    total_likes: number;
    total_photos: number;
    accepted_tos: boolean;
    for_hire: boolean;
    social: Social;
}

export interface Social {
    instagram_username: string;
    portfolio_url: string;
    twitter_username: string;
    paypal_email?: any;
}

export interface Profileimage {
    small: string;
    medium: string;
    large: string;
}

export interface Links2 {
    self: string;
    html: string;
    photos: string;
    likes: string;
    portfolio: string;
    following: string;
    followers: string;
}

export interface Links {
    self: string;
    html: string;
    download: string;
    download_location: string;
}

export interface Urls {
    raw: string;
    full: string;
    regular: string;
    small: string;
    thumb: string;
    small_s3: string;
}