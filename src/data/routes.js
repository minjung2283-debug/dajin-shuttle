export const ROUTES = [
  {
    id: 'nowon', name: '노원 노선', fee: 3000,
    stops: [
      { name: '수락산역', coord: { x: 127.0472, y: 37.6702 }, minsFromDep: 35 },
      { name: '마들역',   coord: { x: 127.0537, y: 37.6639 }, minsFromDep: 42 },
      { name: '노원역',   coord: { x: 127.0615, y: 37.6558 }, minsFromDep: 50 },
    ],
    transfer: '4호선·7호선 환승',
    schedules: {
      weekday: ['09:10','09:20','09:30','09:40','10:30','11:00','13:00','13:15','13:30','13:45','14:00','14:30','15:00','15:10','15:20','15:30','15:40','16:00','16:30','16:45','17:00','17:10','17:20','17:30','17:40','18:00','19:00'],
      fri:     ['09:10','09:20','09:30','09:40','10:30','11:00','13:00','13:15','13:30','13:45','14:00','14:30','15:00','15:10','15:20','15:30'],
    },
  },
  {
    id: 'jamsil', name: '잠실·강변 노선', fee: 4000,
    stops: [
      { name: '강변역', coord: { x: 127.0943, y: 37.5345 }, minsFromDep: 55 },
      { name: '잠실역', coord: { x: 127.1000, y: 37.5130 }, minsFromDep: 65 },
    ],
    transfer: '2호선·8호선 환승',
    schedules: {
      weekday: ['13:45','15:45','17:45'],
      fri:     ['13:45','17:45'],
    },
  },
  {
    id: 'hanam', name: '하남·천호 노선', fee: 4000,
    stops: [
      { name: '천호역',      coord: { x: 127.1239, y: 37.5385 }, minsFromDep: 40 },
      { name: '강동역',      coord: { x: 127.1313, y: 37.5305 }, minsFromDep: 48 },
      { name: '황산사거리',  coord: { x: 127.1530, y: 37.5520 }, minsFromDep: 55 },
      { name: '하남풍산역',  coord: { x: 127.2060, y: 37.5430 }, minsFromDep: 65 },
    ],
    transfer: '5호선 환승 (천호역)',
    schedules: {
      weekday: ['12:30','13:45','15:45','17:45'],
      fri:     ['12:30','13:45'],
    },
  },
  {
    id: 'daehwaA', name: '대화A 노선 (일산)', fee: 4000,
    stops: [
      { name: '백석역',   coord: { x: 126.8001, y: 37.6580 }, minsFromDep: 55 },
      { name: '마두역',   coord: { x: 126.7840, y: 37.6580 }, minsFromDep: 62 },
      { name: '정발산역', coord: { x: 126.7755, y: 37.6620 }, minsFromDep: 67 },
      { name: '주엽역',   coord: { x: 126.7730, y: 37.6640 }, minsFromDep: 73 },
      { name: '대화역',   coord: { x: 126.7697, y: 37.6677 }, minsFromDep: 80 },
    ],
    transfer: '3호선 환승',
    schedules: {
      weekday: ['12:30','13:45','15:45','16:45'],
      fri:     ['13:45'],
    },
  },
  {
    id: 'hwajung', name: '화정·원당 노선', fee: 4000,
    stops: [
      { name: '원당역', coord: { x: 126.8480, y: 37.6386 }, minsFromDep: 60 },
      { name: '화정역', coord: { x: 126.8318, y: 37.6311 }, minsFromDep: 70 },
    ],
    transfer: '3호선 환승',
    schedules: {
      weekday: ['13:45','14:45','15:45','17:45'],
      fri:     ['13:45'],
    },
  },
  {
    id: 'gupahbal', name: '구파발·삼송 노선', fee: 4000,
    stops: [
      { name: '삼송역',   coord: { x: 126.9221, y: 37.6520 }, minsFromDep: 65 },
      { name: '구파발역', coord: { x: 126.9160, y: 37.6361 }, minsFromDep: 75 },
    ],
    transfer: '3호선 환승',
    friWarning: '금요일 미운행 → 연신내 노선 이용',
    schedules: {
      weekday: ['13:45','15:45'],
      fri:     [],
    },
  },
  {
    id: 'yeonsinnae', name: '연신내·발산 노선', fee: 4000,
    stops: [
      { name: '삼송역',   coord: { x: 126.9221, y: 37.6520 }, minsFromDep: 30 },
      { name: '구파발역', coord: { x: 126.9160, y: 37.6361 }, minsFromDep: 40 },
      { name: '연신내역', coord: { x: 126.9193, y: 37.6023 }, minsFromDep: 55 },
      { name: '가양역',   coord: { x: 126.8548, y: 37.5610 }, minsFromDep: 70 },
      { name: '발산역',   coord: { x: 126.8484, y: 37.5598 }, minsFromDep: 80 },
    ],
    transfer: '5호선·공항철도 환승',
    schedules: {
      weekday: ['13:45','17:45'],
      fri:     ['13:45'],
    },
  },
  {
    id: 'guri', name: '구리 노선', fee: 3500,
    stops: [
      { name: '구리역', coord: { x: 127.1294, y: 37.5966 }, minsFromDep: 65 },
    ],
    transfer: '경의중앙선 환승',
    schedules: {
      weekday: ['13:45','15:45'],
      fri:     ['13:45'],
    },
  },
  {
    id: 'guri_hop', name: '구리·호평 노선', fee: 3500,
    stops: [
      { name: '구리역',      coord: { x: 127.1294, y: 37.5966 }, minsFromDep: 55 },
      { name: '금곡양병원',  coord: { x: 127.1620, y: 37.6200 }, minsFromDep: 62 },
      { name: '평내호평역',  coord: { x: 127.2021, y: 37.6356 }, minsFromDep: 70 },
    ],
    transfer: '경춘선 환승',
    schedules: {
      weekday: ['13:45','17:45'],
      fri:     ['13:45'],
    },
  },
  {
    id: 'deokjeong', name: '덕정 노선 (양주)', fee: 2000,
    stops: [
      { name: '옥정중심상가', coord: { x: 127.0720, y: 37.7950 }, minsFromDep: 35 },
      { name: '덕계역',       coord: { x: 127.0754, y: 37.7849 }, minsFromDep: 43 },
      { name: '덕정역',       coord: { x: 127.0626, y: 37.8140 }, minsFromDep: 50 },
    ],
    transfer: '경의중앙선 환승',
    schedules: {
      weekday: ['12:30','13:45','15:45','17:45'],
      fri:     ['12:30','13:45'],
    },
  },
  {
    id: 'bupyung', name: '부평 노선 (인천)', fee: 4500,
    stops: [
      { name: '갈산역', coord: { x: 126.7255, y: 37.5045 }, minsFromDep: 82 },
      { name: '부평역', coord: { x: 126.7218, y: 37.4900 }, minsFromDep: 90 },
    ],
    transfer: '1호선·7호선 환승',
    schedules: {
      weekday: ['13:45','17:45'],
      fri:     ['13:45'],
    },
  },
  {
    id: 'byeolnae', name: '별내·청학리 노선', fee: 3000,
    stops: [
      { name: '청학리',   coord: { x: 127.1080, y: 37.6280 }, minsFromDep: 45 },
      { name: '초원타워', coord: { x: 127.1120, y: 37.6360 }, minsFromDep: 55 },
      { name: '별내역',   coord: { x: 127.1186, y: 37.6407 }, minsFromDep: 65 },
    ],
    transfer: '경춘선 환승',
    schedules: {
      weekday: ['13:45','15:45','17:45'],
      fri:     ['13:45'],
    },
  },
  {
    id: 'onam', name: '오남 노선', fee: 3000,
    stops: [
      { name: '반도유보라',        coord: { x: 127.1650, y: 37.6620 }, minsFromDep: 45 },
      { name: '16단지 금강아파트', coord: { x: 127.1680, y: 37.6660 }, minsFromDep: 55 },
      { name: '오남도서관',        coord: { x: 127.1710, y: 37.6690 }, minsFromDep: 65 },
    ],
    transfer: '버스·택시 이용',
    schedules: {
      weekday: ['13:45','15:45','17:45'],
      fri:     ['13:45'],
    },
  },
]
