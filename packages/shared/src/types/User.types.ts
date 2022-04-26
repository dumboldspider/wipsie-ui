export type User = {
  id: string;
  email: string;
  username: string;
  name: string;
  profile: UserProfile;

  createdAt: Date;
  expiresAt: Date;
};

export type PublicUser = {
  id: string;
  username: string;
  name: string;
  profile: UserProfile;

  createdAt: Date;
};

export type UserProfile = any;

export type PublicUserProfile = any;
