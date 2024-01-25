import { AxiosResponse } from 'axios';
import { Category, PostInfo, SearchInfo, Guestbook, Comment } from '@/types';

interface CategoryFetch {
  tistory: {
    status: string;
    item: {
      url: string;
      secondaryUrl: string;
      categories: Category[];
    };
  };
}
type CategoryRes = Promise<AxiosResponse<CategoryFetch>>;

interface PostFetch {
  tistory: {
    status: '200';
    item: {
      url: string;
      secondaryUrl: string;
      id: string;
      slogan: string;
      title: string;
      content: string;
      categoryId: string;
      postUrl: string;
      visibility: string;
      acceptComment: string;
      acceptTrackback: string;
      comments: string;
      trackbacks: string;
      date: string;
      tags: {
        tag: string[];
      };
    };
  };
}
type PostRes = Promise<AxiosResponse<PostFetch>>;

interface PostListFetch {
  tistory: {
    status: string;
    item: {
      url: string;
      secondaryUrl: string;
      page: string;
      count: string;
      totalCount: string;
      posts: PostInfo[];
    };
  };
}
type PostLstRes = Promise<AxiosResponse<PostListFetch>>;

interface GuestbookInit {
  code: number;
  message: string;
  result: {
    config: {
      allowComment: boolean;
      allowCommentToGuest: boolean;
      allowGuestbook: boolean;
      allowGuestbookToGuest: boolean;
      useCommentRecognition: boolean;
      useGuestbookRecognition: boolean;
      isSupport: boolean;
    };
    requestUser: {
      id: number;
      name: string;
      profileImage: string;
      homepage: string;
      role: string;
      canManage: boolean;
      isRequestUser: boolean;
    };
  };
}
type GuestbookInitRes = Promise<AxiosResponse<GuestbookInit>>;

interface SearchTagsPosts {
  code: number;
  message: string;
  result: {
    items: SearchInfo[];
    isLast: boolean;
    nextPage: boolean;
    total: number;
  };
}
type SearchRes = Promise<AxiosResponse<SearchTagsPosts>>;

type GuestbookCountRes = Promise<
  AxiosResponse<{
    data: {
      count: number;
    };
  }>
>;

interface GuestbookFetch {
  data: {
    isLast: boolean;
    items: Guestbook[];
    nextId: number;
    totalItems: number;
  };
}
type GuestbookRes = Promise<AxiosResponse<GuestbookFetch>>;

interface CommentsFetch {
  tistory: {
    status: string;
    item: {
      url: string;
      secondaryUrl: string;
      postId: string;
      totalCount: string;
      comments: Comment[];
    };
  };
}
type CommentsRes = Promise<AxiosResponse<CommentsFetch>>;

interface ProcessComment {
  tistory: {
    status: string;
    commentUrl: string;
    result: string;
  };
}
type ProcessCommentRes = Promise<AxiosResponse<ProcessComment>>;

export type {
  CategoryRes,
  PostRes,
  PostLstRes,
  GuestbookInitRes,
  SearchRes,
  GuestbookCountRes,
  GuestbookRes,
  CommentsRes,
  ProcessCommentRes,
};
