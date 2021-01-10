import { MEDIA_ASSET } from "@config/index";
import {
  faAddressBook,
  faChurch,
  faClipboardList,
  faClock,
  faChessKing,
  faStar,
  faUtensils,
  faListAlt,
  faLanguage,
  faCog,
  faImage,
  faFile,
  faCalendarAlt,
  faServer,
  faQuoteRight,
} from "@fortawesome/free-solid-svg-icons";
import { sidebar } from "@translateKey/index";

export interface INav {
  title: {
    USA: string;
    VNM: string;
  };
  icon?: any;
  flgAwesome?: boolean;
  path: string;
  children?: Array<INav> | null;
  activePath: Array<string>;
}

const listNav: Array<INav> = [
  {
    title: sidebar.SCHEDULE,
    icon: faCalendarAlt,
    flgAwesome: true,
    path: "/",
    activePath: [ "/" ],
    children: [
      // {
      //   title: sidebar.HELLO,
      //   icon: faFile,
      //   flgAwesome: true,
      //   path: "/",
      //   activePath: [ "/" ],
      //   children: [],
      // },
      // {
      //   title: sidebar.SCHEDULE_BG,
      //   icon: faFile,
      //   flgAwesome: true,
      //   path: "/schedulebg",
      //   activePath: [ "/schedulebg" ],
      //   children: [],
      // }
    ],
  },
  {
    title: sidebar.PAGE,
    icon: faFile,
    flgAwesome: true,
    path: "/page",
    activePath: [ "/page" ],
    children: [],
  },
  // {
  //   title: sidebar.LIST_PRODUCT,
  //   icon: faUtensils,
  //   flgAwesome: true,
  //   path: "/list-product",
  //   activePath: ["/list-product"],
  //   children: [],
  // },
  {
    title: sidebar.CATEGORY,
    icon: faServer,
    flgAwesome: true,
    path: "/categories/none/article",
    activePath: [ "/categories" ],
    children: [],
  },
  {
    title: sidebar.MEDIA_ASSET,
    icon: faImage,
    flgAwesome: true,
    path: MEDIA_ASSET,
    activePath: [ MEDIA_ASSET ],
    children: [],
  },
  {
    title: sidebar.RATING,
    icon: faStar,
    flgAwesome: true,
    path: "/rating",
    activePath: [ "/rating" ],
    children: [],
  },
  {
    title: sidebar.SYSTEM,
    icon: faCog,
    flgAwesome: true,
    activePath: [ "/system" ],
    path: "/system",
    children: [
      {
        title: sidebar.LANGUAGE,
        icon: faLanguage,
        flgAwesome: true,
        path: "/system/language",
        activePath: [ "/system", "/system/language" ],
        children: [],
      },
      {
        title: sidebar.PARAMETER,
        icon: faQuoteRight,
        flgAwesome: true,
        activePath: [ "/system/parameter" ],
        path: "/system/parameter",
        children: [],
      },
    ],
  },
];

export default listNav;
