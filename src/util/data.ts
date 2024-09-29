import IMAGE1 from "@/../public/image 12.svg";
import IMAGE2 from "@/../public/image 9.png";
import IMAGE3 from "@/../public/image 7.png";
import IMAGE4 from "@/../public/image 15.png";
import IMAGE5 from "@/../public/image 11.png";
import IMAGE6 from "@/../public/image 8.png";
import IMAGE7 from "@/../public/image 14.png";
import IMAGE8 from "@/../public/image 6.png";

import wallet from "@/../public/wallet.svg";
import upload from "@/../public/upload.svg";
import bookmark from "@/../public/bookmark.svg";

import Article1 from "@/../public/article1.png";
import Article2 from "@/../public/article2.png";
import Article3 from "@/../public/article3.png";

import Rectangle1 from "@/../public/Rectangle 11.png";
import Rectangle2 from "@/../public/Rectangle 12.png";
import Rectangle3 from "@/../public/Rectangle 13.png";
import Rectangle4 from "@/../public/image 27.png";
import Rectangle5 from "@/../public/image 26.png";

export const collectionData = [
  {
    img: IMAGE1,
    name: "COOLGUYZZ",
    collection: "Coolguyzz.io",
    floor_price_eth: 1.5,
    floor_price_usd: "$2045.12",
    price_change: "-12.45%",
  },
  {
    img: IMAGE2,
    name: "gangstaboi v.1",
    collection: "GB_Gangs",
    floor_price_eth: 2.53,
    floor_price_usd: "$4487",
    price_change: "+34.5%",
  },
  {
    img: IMAGE3,
    name: "HyperApe",
    collection: "HyperApe.co",
    floor_price_eth: 1.31,
    floor_price_usd: "$1743.4",
    price_change: "-5.5%",
  },
  {
    img: IMAGE4,
    name: "Lyodd$1",
    collection: "Naomi Po",
    floor_price_eth: 1.156,
    floor_price_usd: "$1670",
    price_change: "+12.45%",
  },
  {
    img: IMAGE5,
    name: "Azuki 3D",
    collection: "AZUKI.JP",
    floor_price_eth: 1.5,
    floor_price_usd: "$1907",
    price_change: "+1.6%",
  },
  {
    img: IMAGE6,
    name: "CuteApe White",
    collection: "CuteApe",
    floor_price_eth: 0.045,
    floor_price_usd: "$245.6",
    price_change: "-14.5%",
  },
  {
    img: IMAGE7,
    name: "SneakerHead Vol.1",
    collection: "SneakerHead.Corp",
    floor_price_eth: 1.4,
    floor_price_usd: "$1790",
    price_change: "+67.9%",
  },
  {
    img: IMAGE8,
    name: "cvltB3AR",
    collection: "CVLTBEAR",
    floor_price_eth: 0.88,
    floor_price_usd: "$545",
    price_change: "+12.45%",
  },
];

export const createSellData = [
  {
    img: wallet,
    title: "Set up your wallet",
    description:
      "Once you've set up your wallet of choice, connect it to OpenSea by clicking the wallet icon in the top right corner. Learn about the wallets we support.",
  },
  {
    img: upload,
    title: "Upload & Create Collection",
    description:
      "Upload your work then Click My Collections and set up your collection. Add social links, a description, profile & banner images, and set a secondary sales fee.",
  },
  {
    img: bookmark,
    title: "List them for sale",
    description:
      "Choose between auctions, fixed-price listings, and declining-price listings. You choose how you want to sell your NFTs, and we help you sell them.",
  },
];

export const articlesData = [
  {
    title: "We've lowered marketplace fees on all your favorite NFTs",
    date: "January 23, 2022",
    image: Article1,
    description: "Information about lowering marketplace fees for NFTs.",
  },
  {
    title: "Your Ultimate Guide to Getting Started With NFTs on Rarible",
    date: "April 03, 2022",
    image: Article2,
    description: "A guide to starting with NFTs on Rarible.",
  },
  {
    title: "Why Community Marketplaces are the future of NFT trading",
    date: "July 7, 2022",
    image: Article3,
    description:
      "An article on the role of community marketplaces in NFT trading.",
  },
];

export const nftListing = [
  {
    id: 1,
    name: "CryptoPunk 3D #13",
    collection: "3D cryptopunk",
    latestBid: "9.61 ETH",
    from: "4.12 ETH",
    priceUSD: "$103,025",
    change: "-2.23%",
    image: Rectangle1,
    order: 1,
    previous: 5,
    next: 2,
  },
  {
    id: 2,
    name: "HAPE #8064",
    collection: "HAPE PRIME",
    latestBid: "15.8 ETH",
    from: "9.45 ETH",
    priceUSD: "$180,345",
    change: "+12.45%",
    image: Rectangle2,
    order: 2,
    previous: 1,
    next: 3,
  },
  {
    id: 3,
    name: "InvisibleFriend #54",
    collection: "INVISIBLE_FRIEND.CO",
    latestBid: "6.73 ETH",
    from: "1.55 ETH",
    priceUSD: "$9,945.1",
    change: "+3.57%",
    image: Rectangle3,
    order: 3,
    previous: 2,
    next: 4,
  },
  {
    id: 4,
    name: "Meebits #21",
    collection: "Meebits Collection",
    latestBid: "12.3 ETH",
    from: "6.45 ETH",
    priceUSD: "$75,234",
    change: "+5.15%",
    image: Rectangle4,
    order: 4,
    previous: 3,
    next: 5,
  },
  {
    id: 5,
    name: "CloneX #892",
    collection: "CloneX Collection",
    latestBid: "7.92 ETH",
    from: "3.22 ETH",
    priceUSD: "$54,123",
    change: "+1.87%",
    image: Rectangle5,
    order: 5,
    previous: 4,
    next: 1,
  },
];
