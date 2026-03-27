export const ROUTES = [
  {
    id: 'nowon', name: '노원 노선', fee: 3000, durationMin: 50,
    finalStop: '노원역', finalCoord: { x: 127.0615, y: 37.6558 },
    stops: ['수락산역', '마들역', '노원역'], transfer: '4호선·7호선 환승',
    schedules: {
      weekday: ['09:10','09:20','09:30','09:40','10:30','11:00','13:00','13:15','13:30','13:45','14:00','14:30','15:00','15:10','15:20','15:30','15:40','16:00','16:30','16:45','17:00','17:10','17:20','17:30','17:40','18:00','19:00'],
      fri:     ['09:10','09:20','09:30','09:40','10:30','11:00','13:00','13:15','13:30','13:45','14:00','14:30','15:00','15:10','15:20','15:30'],
    },
  },
  {
    id: 'jamsil', name: '잠실·강변 노선', fee: 4000, durationMin: 65,
    finalStop: '잠실역', finalCoord: { x: 127.1000, y: 37.5130 },
    stops: ['강변역', '잠실역'], transfer: '2호선·8호선 환승',
    schedules: {
      weekday: ['13:45','15:45','17:45'],
      fri:     ['13:45','17:45'],
    },
  },
  {
    id: 'hanam', name: '하남·천호 노선', fee: 4000, durationMin: 65,
    finalStop: '하남풍산역', finalCoord: { x: 127.2060, y: 37.5430 },
    stops: ['천호역', '강동역', '황산사거리', '하남풍산역'], transfer: '5호선 환승 (천호역)',
    schedules: {
      weekday: ['12:30','13:45','15:45','17:45'],
      fri:     ['12:30','13:45'],
    },
  },
  {
    id: 'daehwaA', name: '대화A 노선 (일산)', fee: 4000, durationMin: 80,
    finalStop: '대화역', finalCoord: { x: 126.7697, y: 37.6677 },
    stops: ['백석역', '마두역', '정발산역', '주엽역', '대화역'], transfer: '3호선 환승',
    schedules: {
      weekday: ['12:30','13:45','15:45','16:45'],
      fri:     ['13:45'],
    },
  },
  {
    id: 'hwajung', name: '화정·원당 노선', fee: 4000, durationMin: 70,
    finalStop: '화정역', finalCoord: { x: 126.8318, y: 37.6311 },
    stops: ['원당역', '화정역'], transfer: '3호선 환승',
    schedules: {
      weekday: ['13:45','14:45','15:45','17:45'],
      fri:     ['13:45'],
    },
  },
  {
    id: 'gupahbal', name: '구파발·삼송 노선', fee: 4000, durationMin: 75,
    finalStop: '구파발역', finalCoord: { x: 126.9160, y: 37.6361 },
    stops: ['삼송역', '구파발역'], transfer: '3호선 환승',
    friWarning: '금요일 미운행 → 연신내 노선 이용',
    schedules: {
      weekday: ['13:45','15:45'],
      fri:     [],
    },
  },
  {
    id: 'yeonsinnae', name: '연신내·발산 노선', fee: 4000, durationMin: 80,
    finalStop: '발산역', finalCoord: { x: 126.8484, y: 37.5598 },
    stops: ['삼송역', '구파발역', '연신내역', '가양역', '발산역'], transfer: '5호선·공항철도 환승',
    schedules: {
      weekday: ['13:45','17:45'],
      fri:     ['13:45'],
    },
  },
  {
    id: 'guri', name: '구리 노선', fee: 3500, durationMin: 65,
    finalStop: '구리역', finalCoord: { x: 127.1294, y: 37.5966 },
    stops: ['구리역'], transfer: '경의중앙선 환승',
    schedules: {
      weekday: ['13:45','15:45'],
      fri:     ['13:45'],
    },
  },
  {
    id: 'guri_hop', name: '구리·호평 노선', fee: 3500, durationMin: 70,
    finalStop: '평내호평역', finalCoord: { x: 127.2021, y: 37.6356 },
    stops: ['구리역', '금곡양병원', '평내호평역'], transfer: '경춘선 환승',
    schedules: {
      weekday: ['13:45','17:45'],
      fri:     ['13:45'],
    },
  },
  {
    id: 'deokjeong', name: '덕정 노선 (양주)', fee: 2000, durationMin: 50,
    finalStop: '덕정역', finalCoord: { x: 127.0626, y: 37.8140 },
    stops: ['옥정중심상가', '덕계역', '덕정역'], transfer: '경의중앙선 환승',
    schedules: {
      weekday: ['12:30','13:45','15:45','17:45'],
      fri:     ['12:30','13:45'],
    },
  },
  {
    id: 'bupyung', name: '부평 노선 (인천)', fee: 4500, durationMin: 90,
    finalStop: '부평역', finalCoord: { x: 126.7218, y: 37.4900 },
    stops: ['갈산역', '부평역'], transfer: '1호선·7호선 환승',
    schedules: {
      weekday: ['13:45','17:45'],
      fri:     ['13:45'],
    },
  },
  {
    id: 'byeolnae', name: '별내·청학리 노선', fee: 3000, durationMin: 65,
    finalStop: '별내역', finalCoord: { x: 127.1186, y: 37.6407 },
    stops: ['청학리', '초원타워', '별내역'], transfer: '경춘선 환승',
    schedules: {
      weekday: ['13:45','15:45','17:45'],
      fri:     ['13:45'],
    },
  },
  {
    id: 'onam', name: '오남 노선', fee: 3000, durationMin: 65,
    finalStop: '오남도서관', finalCoord: { x: 127.1710, y: 37.6690 },
    stops: ['반도유보라', '16단지 금강아파트', '오남도서관'], transfer: '버스·택시 이용',
    schedules: {
      weekday: ['13:45','15:45','17:45'],
      fri:     ['13:45'],
    },
  },
]
