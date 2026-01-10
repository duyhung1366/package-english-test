import {
  Gender,
  UserStatus,
  Difficulty,

  TopicType,
  SubmitType,
  CardGame,
  Status
} from './enums';

// Base interfaces for models
export interface IMedia {
  bucket: string;
  key: string;
  content_type: string;
  is_nsfw: boolean;
  debug_id: string;
  url: string;
  hostname: string | null;
  created_at: Date;
  deleted_at: Date | null;

  // Virtual properties (calculated)
  isDeleted?: boolean;
}

export interface IUser {
  _id?: string;
  id?: string;
  name: string;
  account: string;
  phoneNumber: string;
  password: string;
  avatar?: string | null;
  gender: Gender;
  registerDate: number; // unix timestamp
  status: UserStatus;
  lastLogin: number;
  lastUpdatePassword: number;
  ip: string;
  country: string;
  googleId?: string;
  resetPasswordToken?: string;
  resetPasswordExpires?: Date;
  refreshToken?: string;

  // Virtual properties
  isActive?: boolean;
}

export interface IApp {
  _id?: string;
  id?: string;
  name: string;
  slug: string;
  description?: string;
  siteAddress?: string;
  bucket?: string;
  status: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface ITopic {
  _id?: string;
  name: string;
  description: string;
  appId: string;
  parentId?: string | null;
  questionNum: number;
  slug: string;
  mediaId?: string | null;
  difficulty: Difficulty;
  type: TopicType;
  submitType?: SubmitType | null;
  createdAt: Date;
  updatedAt: Date;
  orderIndex: number;

  // Virtual populated fields (không lưu trong database)
  media_data?: IMedia | null;
  parent_topic?: ITopic | null;

  // Virtual properties
  isParent?: boolean;
  isChild?: boolean;
  children?: ITopic[];
}

export interface ICardQuestion {
  text: string;
  image?: string | null;
  audio?: string | null;
  image_data?: IMedia,
  audio_data?: IMedia
}

export class CardQuestion implements ICardQuestion { 
  audio?: string | null | undefined;
  audio_data?: IMedia | undefined;
  image?: string | null | undefined;
  image_data?: IMedia | undefined;
  text: string;

  constructor(args: ICardQuestion) {
    this.audio = args.audio_data?.key ? `${process.env.NEXT_PUBLIC_BASE_URL || ""}/uploads/${args.audio_data?.key || ""}` : args.audio;
    this.image = args.image_data?.key ? `${process.env.NEXT_PUBLIC_BASE_URL || ""}/uploads/${args.image_data?.key || ""}` : args.image;
    this.audio_data = args.audio_data;
    this.image_data = args.image_data;
    this.text = args.text;
  }

  toJSON(): ICardQuestion {
    return { ...this };
  }
}

export interface IChoice {
  id: number;
  textId: string;
  content: string;
  isCorrect: boolean;
}

// Card Vocab Status Enum (if not already defined)
export enum CardStatus {
  ACTIVE = 1,
  INACTIVE = 2,
  DRAFT = 3
}

export interface ICard {
  _id?: string;
  topicId: string;
  question: ICardQuestion;
  explanation: string;
  explanationLang: Record<string, any>;
  explanationDefaultLang: string;
  difficulty: Difficulty;
  status: CardStatus;
  parentId?: string | null;
  choices: IChoice[];
  mapLangChoice: Record<string, any>;
  defaultChoiceLang: string;
  cardGame: CardGame;
  childCards?: ICard[]; // Child cards for spelling exercises
  createdAt: Date;
  updatedAt: Date;

  // Virtual properties
  isActive?: boolean;
  isDeleted?: boolean;
}

export class Card implements ICard {
  _id?: string;
  topicId: string;
  question: ICardQuestion;
  explanation: string;
  explanationLang: Record<string, any>;
  explanationDefaultLang: string;
  difficulty: Difficulty;
  status: CardStatus;
  parentId?: string | null;
  choices: IChoice[];
  mapLangChoice: Record<string, any>;
  defaultChoiceLang: string;
  cardGame: CardGame;
  childCards?: ICard[];
  createdAt: Date;
  updatedAt: Date;
  isActive?: boolean;
  isDeleted?: boolean;

  constructor(data: ICard) {
    this._id = data._id;
    this.topicId = data.topicId;
    this.question = new CardQuestion(data.question).toJSON();
    this.explanation = data.explanation;
    this.explanationLang = data.explanationLang || {};
    this.explanationDefaultLang = data.explanationDefaultLang;
    this.difficulty = data.difficulty;
    this.status = data.status;
    this.parentId = data.parentId ?? null;
    this.choices = data.choices || [];
    this.mapLangChoice = data.mapLangChoice || {};
    this.defaultChoiceLang = data.defaultChoiceLang;
    this.cardGame = data.cardGame;
    this.childCards = (data.childCards || []).map(c => new Card(c).toJSON());
    this.createdAt = data.createdAt ? new Date(data.createdAt) : new Date();
    this.updatedAt = data.updatedAt ? new Date(data.updatedAt) : new Date();
    this.isActive = data.isActive ?? true;
    this.isDeleted = data.isDeleted ?? false;
  }

  toJSON(): ICard {
    return { ...this };
  }
}

export interface IImageSharingMeta {
  title: string;
  alt: string;
  caption: string;
  description: string;
}

export interface ISeo {
  _id?: string;
  id?: string;
  slug: string;
  title: string;
  description: string;
  keyword: string;
  imageSharing: {
    url: string;
    _id?: string;
  };
  imageSharingMeta: IImageSharingMeta;
  imageSharingUrl?: string;
  headerScript: string;
  bodyScript: string;
  metaRobot: number;
  titleH1: string;
  appId: string;
  summary: string;
  content: string;
  jsonLd: string[];
  locale: string;
  seo301: string;
  status: Status;
  createdAt: Date;
  updatedAt: Date;

  // Virtual properties
  metaRobotsContent?: string;
}
