export const ROUTES = [
  // ── 노원 노선 ──────────────────────────────────────────────────────────
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

  // ── 대화A 노선 ─────────────────────────────────────────────────────────
  {
    id: 'daehwaA', name: '대화A 노선 (일산)', fee: 4000,
    stops: [
      { name: '백석역',   coord: { x: 126.8001, y: 37.6580 }, minsFromDep: 55 },
      { name: '마두역',   coord: { x: 126.7840, y: 37.6580 }, minsFromDep: 62 },
      { name: '정발산역', coord: { x: 126.7755, y: 37.6620 }, minsFromDep: 67 },
      { name: '주엽역',   coord: { x: 126.7730, y: 37.6640 }, minsFromDep: 73 },
      { name: '대화역',   coord: { x: 126.7700, y: 37.6685 }, minsFromDep: 80 },
    ],
    transfer: '3호선 환승',
    schedules: {
      weekday: ['12:30','13:45','15:45','16:45'],
      fri:     ['13:45'],
    },
  },

  // ── 대화B 노선 (화정 경유) ─────────────────────────────────────────────
  {
    id: 'daehwaB', name: '대화B 노선 (화정 경유)', fee: 4000,
    stops: [
      { name: '원당역',   coord: { x: 126.8480, y: 37.6386 }, minsFromDep: 55 },
      { name: '화정역',   coord: { x: 126.8318, y: 37.6311 }, minsFromDep: 65 },
      { name: '백석역',   coord: { x: 126.8001, y: 37.6580 }, minsFromDep: 75 },
      { name: '마두역',   coord: { x: 126.7840, y: 37.6580 }, minsFromDep: 82 },
      { name: '정발산역', coord: { x: 126.7755, y: 37.6620 }, minsFromDep: 87 },
      { name: '주엽역',   coord: { x: 126.7730, y: 37.6640 }, minsFromDep: 93 },
      { name: '대화역',   coord: { x: 126.7700, y: 37.6685 }, minsFromDep: 100 },
    ],
    transfer: '3호선 환승',
    schedules: {
      weekday: ['13:45','15:45'],
      fri:     ['13:45'],
    },
  },

  // ── 대화/장기 노선 ─────────────────────────────────────────────────────
  {
    id: 'daehwaJanggi', name: '대화·장기 노선', fee: 4500,
    stops: [
      { name: '대화역', coord: { x: 126.7700, y: 37.6685 }, minsFromDep: 75 },
      { name: '장기역', coord: { x: 126.7161, y: 37.6153 }, minsFromDep: 90 },
    ],
    transfer: '3호선·김포골드라인 환승',
    schedules: {
      weekday: ['13:45','15:45'],
      fri:     ['13:45'],
    },
  },

  // ── 파주 노선 ──────────────────────────────────────────────────────────
  {
    id: 'paju', name: '파주 노선', fee: 4500,
    stops: [
      { name: '야당역', coord: { x: 126.7508, y: 37.7088 }, minsFromDep: 90 },
    ],
    transfer: '경의중앙선 환승',
    schedules: {
      weekday: ['13:45','15:45'],
      fri:     ['13:45'],
    },
  },

  // ── 화정 노선 ──────────────────────────────────────────────────────────
  {
    id: 'hwajung', name: '화정 노선', fee: 4000,
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

  // ── 구파발 노선 ────────────────────────────────────────────────────────
  {
    id: 'gupahbal', name: '구파발 노선', fee: 4000,
    stops: [
      { name: '삼송역', coord: { x: 126.9221, y: 37.6520 }, minsFromDep: 65 },
      { name: '구파발', coord: { x: 126.9167, y: 37.6388 }, minsFromDep: 75 },
    ],
    transfer: '3호선 환승',
    friWarning: '금요일 미운행 → 연신내 노선 이용',
    schedules: {
      weekday: ['13:45','15:45'],
      fri:     [],
    },
  },

  // ── 연신내/발산 노선 ───────────────────────────────────────────────────
  {
    id: 'yeonsinnae', name: '연신내·발산 노선', fee: 4000,
    stops: [
      { name: '삼송역',     coord: { x: 126.9221, y: 37.6520 }, minsFromDep: 30 },
      { name: '구파발역',   coord: { x: 126.9167, y: 37.6388 }, minsFromDep: 40 },
      { name: '연신내역',   coord: { x: 126.9194, y: 37.6023 }, minsFromDep: 55 },
      { name: '상암중학교', coord: { x: 126.8890, y: 37.5762 }, minsFromDep: 68 },
      { name: '가양역',     coord: { x: 126.8550, y: 37.5610 }, minsFromDep: 74 },
      { name: '발산역',     coord: { x: 126.8484, y: 37.5598 }, minsFromDep: 82 },
    ],
    transfer: '5호선·공항철도 환승',
    schedules: {
      weekday: ['13:45','17:45'],
      fri:     ['13:45'],
    },
  },

  // ── 구리 노선 ──────────────────────────────────────────────────────────
  {
    id: 'guri', name: '구리 노선', fee: 3500,
    stops: [
      { name: '구리(롯데백화점)', coord: { x: 127.1285, y: 37.5989 }, minsFromDep: 65 },
    ],
    transfer: '경의중앙선 환승',
    schedules: {
      weekday: ['13:45','15:45'],
      fri:     ['13:45'],
    },
  },

  // ── 구리/호평 노선 ─────────────────────────────────────────────────────
  {
    id: 'guri_hop', name: '구리·호평 노선', fee: 3500,
    stops: [
      { name: '구리(롯데백화점)', coord: { x: 127.1285, y: 37.5989 }, minsFromDep: 55 },
      { name: '금곡 양병원',      coord: { x: 127.1497, y: 37.6177 }, minsFromDep: 63 },
      { name: '평내호평역',        coord: { x: 127.2021, y: 37.6356 }, minsFromDep: 72 },
    ],
    transfer: '경춘선 환승',
    schedules: {
      weekday: ['13:45','17:45'],
      fri:     ['13:45'],
    },
  },

  // ── 별내(청학리) 노선 ──────────────────────────────────────────────────
  {
    id: 'byeolnae', name: '별내·청학리 노선', fee: 3000,
    stops: [
      { name: '민락IC',           coord: { x: 127.1042, y: 37.6521 }, minsFromDep: 20 },
      { name: '이마트 호반베르디움', coord: { x: 127.1028, y: 37.6483 }, minsFromDep: 25 },
      { name: '청구아파트',        coord: { x: 127.0967, y: 37.6452 }, minsFromDep: 30 },
      { name: '송산주공4단지',     coord: { x: 127.0973, y: 37.6429 }, minsFromDep: 35 },
      { name: '청학리',            coord: { x: 127.1080, y: 37.6280 }, minsFromDep: 47 },
      { name: '초원타워',          coord: { x: 127.1185, y: 37.6358 }, minsFromDep: 56 },
      { name: '별내역',            coord: { x: 127.1183, y: 37.6408 }, minsFromDep: 65 },
    ],
    transfer: '경춘선 환승',
    schedules: {
      weekday: ['13:45','15:45','17:45'],
      fri:     ['13:45'],
    },
  },

  // ── 오남 노선 ──────────────────────────────────────────────────────────
  {
    id: 'onam', name: '오남 노선', fee: 3000,
    stops: [
      { name: '반도유보라',        coord: { x: 127.1592, y: 37.6654 }, minsFromDep: 45 },
      { name: '16단지 금강아파트', coord: { x: 127.1709, y: 37.6615 }, minsFromDep: 55 },
      { name: '오남도서관',        coord: { x: 127.1728, y: 37.6576 }, minsFromDep: 65 },
    ],
    transfer: '버스·택시 이용',
    schedules: {
      weekday: ['13:45','15:45','17:45'],
      fri:     ['13:45'],
    },
  },

  // ── 잠실/강변 노선 ─────────────────────────────────────────────────────
  {
    id: 'jamsil', name: '잠실·강변 노선', fee: 4000,
    stops: [
      { name: '강변역', coord: { x: 127.0918, y: 37.5386 }, minsFromDep: 55 },
      { name: '잠실역', coord: { x: 127.1012, y: 37.5133 }, minsFromDep: 65 },
    ],
    transfer: '2호선·8호선 환승',
    schedules: {
      weekday: ['13:45','15:45','17:45'],
      fri:     ['13:45','17:45'],
    },
  },

  // ── 하남 노선 ──────────────────────────────────────────────────────────
  {
    id: 'hanam', name: '하남·천호 노선', fee: 4000,
    stops: [
      { name: '천호역',        coord: { x: 127.1237, y: 37.5393 }, minsFromDep: 40 },
      { name: '강동역',        coord: { x: 127.1323, y: 37.5295 }, minsFromDep: 48 },
      { name: '상일초등학교',  coord: { x: 127.1663, y: 37.5440 }, minsFromDep: 56 },
      { name: '황산사거리',    coord: { x: 127.1843, y: 37.5466 }, minsFromDep: 63 },
      { name: '제일풍경채',    coord: { x: 127.2010, y: 37.5520 }, minsFromDep: 70 },
      { name: '풍산아이파크5단지', coord: { x: 127.2038, y: 37.5470 }, minsFromDep: 77 },
    ],
    transfer: '5호선 환승 (천호역)',
    schedules: {
      weekday: ['12:30','13:45','15:45','17:45'],
      fri:     ['12:30','13:45'],
    },
  },

  // ── 덕정 노선 ──────────────────────────────────────────────────────────
  {
    id: 'deokjeong', name: '덕정 노선 (양주)', fee: 2000,
    stops: [
      { name: '리젠시빌란트', coord: { x: 127.0683, y: 37.7757 }, minsFromDep: 28 },
      { name: '옥정중심상가', coord: { x: 127.0724, y: 37.7894 }, minsFromDep: 35 },
      { name: '덕계역',       coord: { x: 127.0731, y: 37.7835 }, minsFromDep: 43 },
      { name: '덕정역',       coord: { x: 127.0626, y: 37.8140 }, minsFromDep: 50 },
    ],
    transfer: '경의중앙선 환승',
    schedules: {
      weekday: ['12:30','13:45','15:45','17:45'],
      fri:     ['12:30','13:45'],
    },
  },

  // ── 부평 노선 ──────────────────────────────────────────────────────────
  {
    id: 'bupyung', name: '부평 노선 (인천)', fee: 4500,
    stops: [
      { name: '갈산역', coord: { x: 126.7230, y: 37.5045 }, minsFromDep: 82 },
      { name: '부평역', coord: { x: 126.7218, y: 37.4900 }, minsFromDep: 90 },
    ],
    transfer: '1호선·7호선 환승',
    schedules: {
      weekday: ['13:45','17:45'],
      fri:     ['13:45'],
    },
  },
]
