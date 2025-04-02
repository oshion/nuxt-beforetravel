import { Destination, SpecialOffer } from '~/types/travel';

export default defineEventHandler((): { destinations: Destination[], specialOffer: SpecialOffer } => {
  const destinations: Destination[] = [
    {
      id: 0,
      contryName: '대한민국',
      cityName: '서울',
      image: '/images/seoul.jpg',
      contentCnt: 12
    },
    {
      id: 1,
      contryName: '일본',
      cityName: '도쿄',
      image: '/images/tokyo.jpg',
      contentCnt: 18
    },
    {
      id: 2,
      contryName: '프랑스',
      cityName: '파리',
      image: '/images/paris.jpg',
      contentCnt: 15
    },
    {
      id: 3,
      contryName: '미국',
      cityName: '뉴욕',
      image: '/images/newyork.jpg',
      contentCnt: 20
    },
    {
      id: 4,
      contryName: '이탈리아',
      cityName: '로마',
      image: '/images/rome.jpg',
      contentCnt: 16
    },
    {
      id: 5,
      contryName: '호주',
      cityName: '시드니',
      image: '/images/sydney.jpg',
      contentCnt: 11
    },
    {
      id: 6,
      contryName: '영국',
      cityName: '런던',
      image: '/images/london.jpg',
      contentCnt: 19
    }
  ];

  const specialOffer: SpecialOffer = {
    id: 'hotel-discount',
    title: '인기 호텔 특가 상품',
    description: '전 세계 인기 특가 상품으로 최대 35% 할인받으세요.',
    discount: '최대 35% 할인'
  };

  return {
    destinations,
    specialOffer
  };
});