const tripData = {
  title: "华东13日游",
  dateRange: {
    start: "2026-03-23",
    end: "2026-04-04",
  },
  route: ["南京", "无锡", "苏州", "乌镇", "杭州"],
  hotels: [
    {
      city: "南京",
      name: "南京东方珍珠voco酒店",
      checkIn: "2026-03-23",
      checkOut: "2026-03-28",
      nights: 5,
      stage: "南京驻点",
      phones: ["025-86883888"],
      sourceLabel: "携程",
      sourceUrl: "https://hotels.ctrip.com/hotels/80597138.html",
      notes: [
        "前 5 晚驻点，适合把集合节奏与叫早规则固定下来。",
        "可继续补充前台电话、早餐时间和行李上下车点。",
      ],
    },
    {
      city: "无锡",
      name: "无锡太湖饭店",
      checkIn: "2026-03-28",
      checkOut: "2026-03-29",
      nights: 1,
      stage: "中转一晚",
      phones: ["0510-85517888"],
      sourceLabel: "携程",
      sourceUrl: "https://hotels.ctrip.com/hotels/3447741.html",
      notes: [
        "无锡段只有 1 晚，建议提前确认第二天退房与发车时间。",
        "后续可补司机停车点与团队集合点。",
      ],
    },
    {
      city: "苏州",
      name: "苏州观前街桔子水晶酒店",
      checkIn: "2026-03-29",
      checkOut: "2026-04-01",
      nights: 3,
      stage: "苏州驻点",
      phones: ["0512-68815999"],
      sourceLabel: "携程",
      sourceUrl: "https://hotels.ctrip.com/hotels/112026836.html",
      notes: [
        "连续住 3 晚，适合按房号整理游客分房信息。",
        "可补周边便利店、药店与夜间应急联系人。",
      ],
    },
    {
      city: "乌镇",
      name: "乌镇望津里精品酒店",
      checkIn: "2026-04-01",
      checkOut: "2026-04-02",
      nights: 1,
      stage: "景区过夜",
      phones: ["0573-88731230-1", "0573-88732222"],
      sourceLabel: "携程",
      sourceUrl: "https://hotels.ctrip.com/hotels/436546.html",
      notes: [
        "与西栅景区联动较强，建议把夜游集合点同步放进后续版本。",
        "可补入住证件要求与景区步行路线。",
      ],
    },
    {
      city: "杭州",
      name: "杭州西湖国宾馆·西湖第一名园",
      checkIn: "2026-04-02",
      checkOut: "2026-04-04",
      nights: 2,
      stage: "返程前驻点",
      phones: ["0571-87979889"],
      sourceLabel: "携程",
      sourceUrl: "https://hotels.ctrip.com/hotels/445394.html",
      notes: [
        "最后 2 晚，适合把返程通知与行李提醒统一前置。",
        "可补早餐开餐时间、上车口与返程集合提醒。",
      ],
    },
  ],
  itinerary: [
    {
      day: 1,
      date: "2026-03-23",
      city: "南京",
      title: "夫子庙-秦淮河风光带",
      transport: "市内短驳",
      focus: "首日重在集合、节奏建立和夜游秩序。",
      stops: ["夫子庙", "秦淮河风光带"],
      hotel: "南京东方珍珠voco酒店",
      note: "适合做开团说明、集合时间统一和次日提醒。",
    },
    {
      day: 2,
      date: "2026-03-24",
      city: "南京",
      title: "纪念馆-南堡公园",
      transport: "南京市内",
      focus: "控时比内容更重要，避免午后节奏拖慢。",
      stops: ["纪念馆", "南堡公园"],
      hotel: "南京东方珍珠voco酒店",
      note: "可在后续版本补午餐点、卫生间点位和集合位。",
    },
    {
      day: 3,
      date: "2026-03-25",
      city: "南京",
      title: "总统府-南京博物院",
      transport: "南京市内",
      focus: "讲解内容密度较高，建议拆成两段说。",
      stops: ["总统府", "南京博物院"],
      hotel: "南京东方珍珠voco酒店",
      note: "适合提前准备车上讲解词和馆内自由活动时间。",
    },
    {
      day: 4,
      date: "2026-03-26",
      city: "南京",
      title: "鸡鸣寺-明城墙-玄武湖公园",
      transport: "南京市内",
      focus: "点位较多，集合口径要统一。",
      stops: ["鸡鸣寺", "明城墙", "玄武湖公园"],
      hotel: "南京东方珍珠voco酒店",
      note: "建议用更短的景点播报，避免多点位切换造成疲劳。",
    },
    {
      day: 5,
      date: "2026-03-27",
      city: "南京",
      title: "中山陵-音乐台",
      transport: "南京市内",
      focus: "山地步行稍多，适合强调穿着与集合时间。",
      stops: ["中山陵", "音乐台"],
      hotel: "南京东方珍珠voco酒店",
      note: "可在后续补台阶强度提示和拍照停留建议。",
    },
    {
      day: 6,
      date: "2026-03-28",
      city: "无锡",
      title: "惠山古镇-宿无锡",
      transport: "南京 → 无锡",
      focus: "切城当天要盯紧车程与入住衔接。",
      stops: ["惠山古镇"],
      hotel: "无锡太湖饭店",
      note: "建议把发车时间和行李上车提醒置顶。",
    },
    {
      day: 7,
      date: "2026-03-29",
      city: "苏州",
      title: "鼋头渚-蠡园-前往苏州-宿苏州",
      transport: "无锡 → 苏州",
      focus: "当天是中转+入住，提醒频次要高。",
      stops: ["鼋头渚", "蠡园", "前往苏州"],
      hotel: "苏州观前街桔子水晶酒店",
      note: "无锡转苏州当日，注意车程与入住衔接。",
    },
    {
      day: 8,
      date: "2026-03-30",
      city: "苏州",
      title: "拙政园-苏州博物馆-平江路-宿苏州",
      transport: "苏州市内",
      focus: "人流密度会上来，集合点要说得足够明确。",
      stops: ["拙政园", "苏州博物馆", "平江路"],
      hotel: "苏州观前街桔子水晶酒店",
      note: "适合增加自由活动边界与回车时间提醒。",
    },
    {
      day: 9,
      date: "2026-03-31",
      city: "苏州",
      title: "寒山寺-留园-宿苏州",
      transport: "苏州市内",
      focus: "景点转换频繁，注意控制游客掉队风险。",
      stops: ["寒山寺", "留园"],
      hotel: "苏州观前街桔子水晶酒店",
      note: "建议后续补一键通知模板和景点播报词。",
    },
    {
      day: 10,
      date: "2026-04-01",
      city: "乌镇",
      title: "前往乌镇-西栅景区-宿乌镇",
      transport: "苏州 → 乌镇",
      focus: "景区步行段较长，入住与夜游需衔接顺。",
      stops: ["前往乌镇", "西栅景区"],
      hotel: "乌镇望津里精品酒店",
      note: "适合补景区路线、夜游集合点与返酒店口径。",
    },
    {
      day: 11,
      date: "2026-04-02",
      city: "杭州",
      title: "前往杭州-西溪湿地-宿杭州",
      transport: "乌镇 → 杭州",
      focus: "换城后信息量大，先把第二天节奏讲清楚。",
      stops: ["前往杭州", "西溪湿地"],
      hotel: "杭州西湖国宾馆·西湖第一名园",
      note: "可后续增加路况提醒与团队分批集合策略。",
    },
    {
      day: 12,
      date: "2026-04-03",
      city: "杭州",
      title: "灵隐寺-西湖风景区-宿杭州",
      transport: "杭州市内",
      focus: "收官日适合把返程通知穿插进讲解里。",
      stops: ["灵隐寺", "西湖风景区"],
      hotel: "杭州西湖国宾馆·西湖第一名园",
      note: "可补返程提醒、行李打包和第二天集合话术。",
    },
    {
      day: 13,
      date: "2026-04-04",
      city: "返程",
      title: "温馨返程",
      transport: "杭州 → 返程地",
      focus: "最后一天重点是行李、人数和出发时间。",
      stops: ["温馨返程"],
      hotel: "无",
      note: "建议把退房提醒和车上清点流程单独列出来。",
    },
  ],
};

const placeCatalog = {
  "南京|夫子庙": {
    query: "夫子庙",
    label: "南京夫子庙",
    location: [118.788899, 32.02066],
    mode: "navigation",
  },
  "南京|秦淮河风光带": {
    query: "秦淮河风光带",
    label: "夫子庙秦淮风光带",
    location: [118.788972, 32.020699],
    mode: "navigation",
  },
  "南京|纪念馆": {
    query: "侵华日军南京大屠杀遇难同胞纪念馆",
    label: "侵华日军南京大屠杀遇难同胞纪念馆",
    location: [118.742372, 32.035217],
    mode: "navigation",
  },
  "南京|南堡公园": {
    query: "南堡公园",
    label: "南堡公园",
    location: [118.752397, 32.109434],
    mode: "search",
  },
  "南京|总统府": {
    query: "南京总统府",
    label: "总统府",
    location: [118.797398, 32.044228],
    mode: "navigation",
  },
  "南京|南京博物院": {
    query: "南京博物院",
    label: "南京博物院",
    location: [118.825064, 32.040802],
    mode: "navigation",
  },
  "南京|鸡鸣寺": {
    query: "鸡鸣寺",
    label: "古鸡鸣寺",
    location: [118.795246, 32.061061],
    mode: "navigation",
  },
  "南京|明城墙": {
    query: "南京城墙",
    label: "南京城墙台城景区",
    location: [118.801956, 32.061456],
    mode: "navigation",
  },
  "南京|玄武湖公园": {
    query: "玄武湖公园",
    label: "玄武湖景区",
    location: [118.812688, 32.069455],
    mode: "navigation",
  },
  "南京|中山陵": {
    query: "中山陵",
    label: "中山陵景区",
    location: [118.854097, 32.054508],
    mode: "navigation",
  },
  "南京|音乐台": {
    query: "中山陵音乐台",
    label: "中山陵音乐台",
    location: [118.855382, 32.055096],
    mode: "navigation",
  },
  "无锡|惠山古镇": {
    query: "惠山古镇",
    label: "惠山古镇景区",
    location: [120.274704, 31.579416],
    mode: "navigation",
  },
  "无锡|鼋头渚": {
    query: "鼋头渚",
    label: "太湖鼋头渚风景区",
    location: [120.226545, 31.523085],
    mode: "navigation",
  },
  "无锡|蠡园": {
    query: "蠡园",
    label: "蠡园",
    location: [120.258709, 31.516275],
    mode: "navigation",
  },
  "苏州|拙政园": {
    query: "拙政园",
    label: "拙政园",
    location: [120.629211, 31.324194],
    mode: "navigation",
  },
  "苏州|苏州博物馆": {
    query: "苏州博物馆",
    label: "苏州博物馆(本馆)",
    location: [120.627856, 31.322948],
    mode: "navigation",
  },
  "苏州|平江路": {
    query: "平江路历史街区",
    label: "平江路",
    location: [120.634556, 31.313969],
    mode: "navigation",
  },
  "苏州|寒山寺": {
    query: "寒山寺",
    label: "寒山寺",
    location: [120.568391, 31.310469],
    mode: "navigation",
  },
  "苏州|留园": {
    query: "留园",
    label: "留园",
    location: [120.59226, 31.315369],
    mode: "navigation",
  },
  "乌镇|西栅景区": {
    query: "乌镇西栅景区",
    label: "乌镇西栅景区",
    location: [120.484263, 30.75027],
    mode: "navigation",
  },
  "杭州|西溪湿地": {
    query: "西溪湿地",
    label: "西溪国家湿地公园",
    location: [120.061159, 30.255079],
    mode: "navigation",
  },
  "杭州|灵隐寺": {
    query: "灵隐寺",
    label: "灵隐寺",
    location: [120.101406, 30.240826],
    mode: "navigation",
  },
  "杭州|西湖风景区": {
    query: "杭州西湖风景名胜区",
    label: "杭州西湖风景名胜区",
    location: [120.121358, 30.222692],
    mode: "navigation",
  },
  "南京|南京东方珍珠voco酒店": {
    query: "南京东方珍珠voco酒店",
    label: "南京东方珍珠voco酒店",
    location: [118.795478, 32.049247],
    mode: "navigation",
  },
  "无锡|无锡太湖饭店": {
    query: "无锡太湖饭店",
    label: "太湖饭店",
    location: [120.213611, 31.541726],
    mode: "navigation",
  },
  "苏州|苏州观前街桔子水晶酒店": {
    query: "苏州观前街桔子水晶酒店",
    label: "苏州观前街桔子水晶酒店",
    location: [120.623131, 31.307202],
    mode: "navigation",
  },
  "乌镇|乌镇望津里精品酒店": {
    query: "乌镇望津里精品酒店",
    label: "乌镇望津里精品酒店",
    location: [120.479988, 30.751952],
    mode: "navigation",
  },
  "杭州|杭州西湖国宾馆·西湖第一名园": {
    query: "杭州西湖国宾馆",
    label: "杭州西湖国宾馆",
    location: [120.133672, 30.235031],
    mode: "navigation",
  },
};

const travelDestinationMap = {
  "苏州|前往苏州": "苏州|苏州观前街桔子水晶酒店",
  "乌镇|前往乌镇": "乌镇|乌镇望津里精品酒店",
  "杭州|前往杭州": "杭州|杭州西湖国宾馆·西湖第一名园",
};

const routeLegs = [
  { from: "南京", to: "无锡", distanceM: 180717, durationS: 8040 },
  { from: "无锡", to: "苏州", distanceM: 64192, durationS: 4592 },
  { from: "苏州", to: "乌镇", distanceM: 73494, durationS: 5877 },
  { from: "乌镇", to: "杭州", distanceM: 91157, durationS: 5370 },
];

const routeLegMap = Object.fromEntries(routeLegs.map((leg) => [`${leg.from}->${leg.to}`, leg]));
const routeMetricCatalog = {
  "南京东方珍珠voco酒店->夫子庙": { distanceM: 4589, durationS: 1334, mode: "driving" },
  "夫子庙->秦淮河风光带": { distanceM: 1, durationS: 1, mode: "driving" },
  "秦淮河风光带->南京东方珍珠voco酒店": { distanceM: 4619, durationS: 1221, mode: "driving" },
  "南京东方珍珠voco酒店->纪念馆": { distanceM: 6372, durationS: 1399, mode: "driving" },
  "纪念馆->南堡公园": { distanceM: 10579, durationS: 1364, mode: "driving" },
  "南堡公园->南京东方珍珠voco酒店": { distanceM: 16957, durationS: 1433, mode: "driving" },
  "南京东方珍珠voco酒店->总统府": { distanceM: 1223, durationS: 768, mode: "driving" },
  "总统府->南京博物院": { distanceM: 5061, durationS: 1173, mode: "driving" },
  "南京博物院->南京东方珍珠voco酒店": { distanceM: 4244, durationS: 849, mode: "driving" },
  "南京东方珍珠voco酒店->鸡鸣寺": { distanceM: 3699, durationS: 952, mode: "driving" },
  "鸡鸣寺->明城墙": { distanceM: 4087, durationS: 1229, mode: "driving" },
  "明城墙->玄武湖公园": { distanceM: 3114, durationS: 914, mode: "driving" },
  "玄武湖公园->南京东方珍珠voco酒店": { distanceM: 4314, durationS: 776, mode: "driving" },
  "南京东方珍珠voco酒店->中山陵": { distanceM: 7762, durationS: 1371, mode: "driving" },
  "中山陵->音乐台": { distanceM: 3414, durationS: 1396, mode: "driving" },
  "音乐台->南京东方珍珠voco酒店": { distanceM: 10054, durationS: 1247, mode: "driving" },
  "南京东方珍珠voco酒店->惠山古镇": { distanceM: 171223, durationS: 7335, mode: "driving" },
  "惠山古镇->无锡太湖饭店": { distanceM: 11442, durationS: 1377, mode: "driving" },
  "无锡太湖饭店->鼋头渚": { distanceM: 9102, durationS: 1319, mode: "driving" },
  "鼋头渚->蠡园": { distanceM: 4262, durationS: 1162, mode: "driving" },
  "蠡园->苏州观前街桔子水晶酒店": { distanceM: 57562, durationS: 3723, mode: "driving" },
  "苏州观前街桔子水晶酒店->拙政园": { distanceM: 3948, durationS: 1438, mode: "driving" },
  "拙政园->苏州博物馆": { distanceM: 2889, durationS: 843, mode: "driving" },
  "苏州博物馆->平江路": { distanceM: 2080, durationS: 944, mode: "driving" },
  "平江路->苏州观前街桔子水晶酒店": { distanceM: 2740, durationS: 826, mode: "driving" },
  "苏州观前街桔子水晶酒店->寒山寺": { distanceM: 6652, durationS: 1324, mode: "driving" },
  "寒山寺->留园": { distanceM: 2581, durationS: 744, mode: "driving" },
  "留园->苏州观前街桔子水晶酒店": { distanceM: 4712, durationS: 1130, mode: "driving" },
  "苏州观前街桔子水晶酒店->乌镇望津里精品酒店": { distanceM: 73494, durationS: 5757, mode: "driving" },
  "乌镇望津里精品酒店->西栅景区": { distanceM: 777, durationS: 293, mode: "driving" },
  "西栅景区->乌镇望津里精品酒店": { distanceM: 628, durationS: 458, mode: "driving" },
  "乌镇望津里精品酒店->杭州西湖国宾馆·西湖第一名园": { distanceM: 91157, durationS: 5290, mode: "driving" },
  "杭州西湖国宾馆·西湖第一名园->西溪湿地": { distanceM: 9779, durationS: 1244, mode: "driving" },
  "西溪湿地->杭州西湖国宾馆·西湖第一名园": { distanceM: 11566, durationS: 1314, mode: "driving" },
  "杭州西湖国宾馆·西湖第一名园->灵隐寺": { distanceM: 4495, durationS: 902, mode: "driving" },
  "灵隐寺->西湖风景区": { distanceM: 7379, durationS: 1137, mode: "driving" },
  "西湖风景区->杭州西湖国宾馆·西湖第一名园": { distanceM: 6225, durationS: 1029, mode: "driving" },
};

const parseDate = (value) => new Date(`${value}T00:00:00`);

const formatMonthDay = (value) => {
  const date = parseDate(value);
  return `${date.getMonth() + 1}月${date.getDate()}日`;
};

const diffDays = (from, to) => {
  const start = parseDate(from);
  const end = parseDate(to);
  return Math.round((end - start) / 86400000);
};

const uniqueCities = [...new Set(tripData.itinerary.map((item) => item.city))].filter(
  (city) => city !== "返程"
);
const validViews = ["overview", "timeline", "hotels"];
const viewScrollPositions = {
  overview: 0,
  timeline: 0,
  hotels: 0,
};

const today = new Date();
today.setHours(0, 0, 0, 0);

function getTripState() {
  const start = parseDate(tripData.dateRange.start);
  const end = parseDate(tripData.dateRange.end);

  if (today < start) {
    return {
      phase: "出发前",
      label: `距离出发还有 ${Math.max(1, Math.ceil((start - today) / 86400000))} 天`,
      currentDay: tripData.itinerary[0],
      nextHotel: tripData.hotels[0],
      checklist: [
        "确认首日集合时间、上车地点与司机联系人。",
        "把南京段 5 晚驻点信息发给团队并核对入住名单。",
        "提前准备首日晚间开团说明和次日叫早提醒。",
      ],
    };
  }

  if (today > end) {
    return {
      phase: "已结束",
      label: "本团行程已完成，可用于复盘与资料回查",
      currentDay: tripData.itinerary[tripData.itinerary.length - 1],
      nextHotel: tripData.hotels[tripData.hotels.length - 1],
      checklist: [
        "整理游客反馈、异常记录与路线调整点。",
        "补齐酒店联系人、房型与景点集合点，为下次复用做模板。",
        "把每日日志与最终结算信息归档。",
      ],
    };
  }

  const currentDay =
    tripData.itinerary.find((item) => parseDate(item.date).getTime() === today.getTime()) ??
    tripData.itinerary[0];

  const activeHotel =
    tripData.hotels.find(
      (hotel) => today >= parseDate(hotel.checkIn) && today < parseDate(hotel.checkOut)
    ) ?? tripData.hotels[tripData.hotels.length - 1];

  return {
    phase: "进行中",
    label: `当前进行到 D${currentDay.day} · ${currentDay.city}`,
    currentDay,
    nextHotel: activeHotel,
    checklist: [
      `确认 ${currentDay.city} 当天的集合时间、讲解节奏与酒店衔接。`,
      "把下一段转场提醒提前半天发出，避免游客信息滞后。",
      "当天结束前记录临时变更，为后续模板沉淀做准备。",
    ],
  };
}

function getHotelStatus(hotel) {
  const checkIn = parseDate(hotel.checkIn);
  const checkOut = parseDate(hotel.checkOut);

  if (today < checkIn) {
    return "下一站";
  }

  if (today >= checkIn && today < checkOut) {
    return "当前入住";
  }

  return "已完成";
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function isIOSDevice() {
  return /iPhone|iPad|iPod/i.test(window.navigator.userAgent);
}

function isAndroidDevice() {
  return /Android/i.test(window.navigator.userAgent);
}

function getPlaceKey(name, city = "") {
  return `${city}|${name}`;
}

function getPlaceMeta(name, city = "") {
  const directMatch = placeCatalog[getPlaceKey(name, city)];

  if (directMatch) {
    return directMatch;
  }

  const mappedKey = travelDestinationMap[getPlaceKey(name, city)];
  return mappedKey ? placeCatalog[mappedKey] ?? null : null;
}

function buildAmapQuery(name, city = "") {
  const placeMeta = getPlaceMeta(name, city);

  if (placeMeta?.query) {
    return placeMeta.query;
  }

  if (!city || city === "返程" || name.includes(city)) {
    return name;
  }

  return `${city} ${name}`;
}

function buildAmapSearchUrl(name, city = "") {
  const query = buildAmapQuery(name, city);
  const params = new URLSearchParams({
    keyword: query,
    callnative: "1",
    src: "huadong13",
  });

  if (city && city !== "返程") {
    params.set("city", city);
  }

  return `https://uri.amap.com/search?${params.toString()}`;
}

function buildAmapWebNavigationUrl(name, city = "") {
  const placeMeta = getPlaceMeta(name, city);

  if (!placeMeta?.location || placeMeta.mode === "search") {
    return buildAmapSearchUrl(name, city);
  }

  const params = new URLSearchParams({
    to: `${placeMeta.location[0]},${placeMeta.location[1]},${placeMeta.label ?? name}`,
    mode: "car",
    policy: "1",
    src: "huadong13",
    callnative: "1",
  });

  return `https://uri.amap.com/navigation?${params.toString()}`;
}

function buildAmapAppNavigationUrl(name, city = "") {
  const placeMeta = getPlaceMeta(name, city);

  if (!placeMeta?.location || placeMeta.mode === "search") {
    return buildAmapAppSearchUrl(name, city);
  }

  const baseParams = {
    sourceApplication: "huadong13",
    poiname: placeMeta.label ?? name,
    lat: String(placeMeta.location[1]),
    lon: String(placeMeta.location[0]),
    dev: "0",
    style: "4",
  };

  if (isIOSDevice()) {
    return `iosamap://navi?${new URLSearchParams(baseParams).toString()}`;
  }

  if (isAndroidDevice()) {
    return `androidamap://navi?${new URLSearchParams(baseParams).toString()}`;
  }

  return buildAmapWebNavigationUrl(name, city);
}

function buildAmapAppSearchUrl(name, city = "") {
  const query = buildAmapQuery(name, city);

  if (isIOSDevice()) {
    const params = new URLSearchParams({
      sourceApplication: "huadong13",
      name: query,
    });
    return `iosamap://poi?${params.toString()}`;
  }

  if (isAndroidDevice()) {
    const params = new URLSearchParams({
      sourceApplication: "huadong13",
      keywords: query,
      dev: "0",
    });
    return `androidamap://poi?${params.toString()}`;
  }

  return buildAmapSearchUrl(name, city);
}

function buildAmapUrls(name, city = "") {
  const placeMeta = getPlaceMeta(name, city);

  if (placeMeta?.location && placeMeta.mode !== "search") {
    const webUrl = buildAmapWebNavigationUrl(name, city);
    const appUrl = buildAmapAppNavigationUrl(name, city);

    return {
      webUrl,
      appUrl,
      mode: "navigation",
    };
  }

  return {
    webUrl: buildAmapSearchUrl(name, city),
    appUrl: buildAmapAppSearchUrl(name, city),
    mode: "search",
  };
}

function isNavigablePlace(name, city = "") {
  if (name === "无" || name.includes("返程")) {
    return false;
  }

  if (name.startsWith("前往")) {
    return Boolean(getPlaceMeta(name, city));
  }

  return true;
}

function renderPlaceLink(name, city = "", className = "place-link") {
  const safeName = escapeHtml(name);

  if (!isNavigablePlace(name, city)) {
    return safeName;
  }

  const { webUrl, appUrl } = buildAmapUrls(name, city);

  return `<a class="${className}" href="${escapeHtml(webUrl)}" data-amap-link="true" data-web-href="${escapeHtml(webUrl)}" data-app-href="${escapeHtml(appUrl)}">${safeName}</a>`;
}

function renderStatusCard(state) {
  const countdown = diffDays(tripData.dateRange.start, tripData.dateRange.end) + 1;
  const currentStops = state.currentDay.stops
    .map((stop) => renderPlaceLink(stop, getStopCity(state.currentDay, stop), "place-inline-link"))
    .join('<span class="inline-sep"> · </span>');

  document.getElementById("statusCard").innerHTML = `
    <div class="status-topline">
      <span class="eyebrow">现场状态</span>
      <span class="status-chip">${state.phase}</span>
    </div>
    <div class="status-layout">
      <div>
        <h3>${state.label}</h3>
      </div>
      <div class="status-stamp">
        <span>Focus Day</span>
        <strong>D${state.currentDay.day}<br />${formatMonthDay(state.currentDay.date)}</strong>
      </div>
    </div>
    <div class="status-callout">${escapeHtml(state.currentDay.city)}<span class="inline-sep"> · </span>${currentStops}</div>
    <div class="spotlight-foot">
      <div class="mini-stat">
        <strong>${countdown} 天</strong>
        <span>整段行程跨度</span>
      </div>
      <div class="mini-stat">
        <strong>${tripData.hotels.length} 家酒店</strong>
        <span>住宿接力节点</span>
      </div>
    </div>
  `;
}

function formatDateSpan(start, end) {
  return `${formatMonthDay(start)}-${formatMonthDay(end)}`;
}

function formatLegDistance(distanceM) {
  return `${Math.round(distanceM / 1000)} km`;
}

function formatLegDuration(durationS) {
  const hours = Math.floor(durationS / 3600);
  const minutes = Math.round((durationS % 3600) / 60);

  if (hours && minutes) {
    return `${hours}小时${minutes}分`;
  }

  if (hours) {
    return `${hours}小时`;
  }

  return `${Math.max(1, minutes)}分`;
}

function formatCompactDistance(distanceM) {
  if (distanceM < 100) {
    return "<0.1 km";
  }

  if (distanceM < 1000) {
    return `${distanceM} m`;
  }

  return `${(distanceM / 1000).toFixed(distanceM < 10000 ? 1 : 0)} km`;
}

function getHotelByName(name) {
  return tripData.hotels.find((hotel) => hotel.name === name) ?? null;
}

function renderResolvedPlaceLink(label, targetName, city, className = "place-link") {
  const safeLabel = escapeHtml(label);
  const { webUrl, appUrl } = buildAmapUrls(targetName, city);

  return `<a class="${className}" href="${escapeHtml(webUrl)}" data-amap-link="true" data-web-href="${escapeHtml(webUrl)}" data-app-href="${escapeHtml(appUrl)}">${safeLabel}</a>`;
}

function getStopCity(dayItem, stopLabel) {
  const hotel = getHotelByName(stopLabel);
  if (hotel) {
    return hotel.city;
  }

  const mappedKey = travelDestinationMap[getPlaceKey(stopLabel, dayItem.city)];
  if (mappedKey) {
    return mappedKey.split("|")[0] || dayItem.city;
  }

  const transferIndex = dayItem.stops.findIndex((stop) => stop.startsWith("前往"));
  const stopIndex = dayItem.stops.indexOf(stopLabel);

  if (transferIndex > -1 && stopIndex > -1 && stopIndex < transferIndex) {
    const startHotelName = getStartHotelForDay(dayItem);
    const startHotel = startHotelName ? getHotelByName(startHotelName) : null;
    return startHotel?.city ?? dayItem.city;
  }

  return dayItem.city;
}

function getStartHotelForDay(dayItem) {
  const previousDay = tripData.itinerary.find((item) => item.day === dayItem.day - 1);

  if (previousDay?.hotel && previousDay.hotel !== "无") {
    return previousDay.hotel;
  }

  return dayItem.hotel !== "无" ? dayItem.hotel : null;
}

function resolveTimelinePoint(pointLabel, dayItem) {
  if (pointLabel === "无" || pointLabel.includes("返程")) {
    return null;
  }

  const hotel = getHotelByName(pointLabel);
  if (hotel) {
    return {
      label: pointLabel,
      targetName: pointLabel,
      city: hotel.city,
    };
  }

  const mappedHotelKey = travelDestinationMap[getPlaceKey(pointLabel, dayItem.city)];
  if (mappedHotelKey) {
    const [mappedCity = dayItem.city, mappedName = pointLabel] = mappedHotelKey.split("|");
    const mappedHotel =
      tripData.hotels.find((item) => getPlaceKey(item.name, item.city) === mappedHotelKey) ??
      getHotelByName(mappedName);

    return {
      label: pointLabel,
      targetName: mappedHotel?.name ?? mappedName,
      city: mappedHotel?.city ?? mappedCity,
    };
  }

  return {
    label: pointLabel,
    targetName: pointLabel,
    city: getStopCity(dayItem, pointLabel),
  };
}

function getDayRouteLegs(dayItem) {
  const startHotelName = getStartHotelForDay(dayItem);
  const points = [];

  if (startHotelName) {
    points.push(resolveTimelinePoint(startHotelName, dayItem));
  }

  dayItem.stops.forEach((stop) => {
    const point = resolveTimelinePoint(stop, dayItem);

    if (point) {
      points.push(point);
    }
  });

  if (dayItem.hotel !== "无") {
    const endHotelPoint = resolveTimelinePoint(dayItem.hotel, dayItem);
    const lastPoint = points.at(-1);

    if (!lastPoint || lastPoint.targetName !== endHotelPoint.targetName) {
      points.push(endHotelPoint);
    }
  }

  return points
    .map((point, index) => {
      if (index === 0) {
        return null;
      }

      const previous = points[index - 1];
      const routeKey = `${previous.targetName}->${point.targetName}`;
      const metric = routeMetricCatalog[routeKey];

      if (!metric) {
        return null;
      }

      return {
        from: previous,
        to: point,
        ...metric,
      };
    })
    .filter(Boolean);
}

function renderPhoneLinks(phones, className = "hotel-phone-link") {
  return phones
    .map((phone) => {
      const hrefPhone = phone.replace(/[^\d+]/g, "");
      return `<a class="${className}" href="tel:${hrefPhone}">${escapeHtml(phone)}</a>`;
    })
    .join("");
}

function getRouteStages() {
  return tripData.hotels
    .map((hotel, index) => {
      const placeMeta = getPlaceMeta(hotel.name, hotel.city);

      if (!placeMeta?.location) {
        return null;
      }

      const nextHotel = tripData.hotels[index + 1];
      const nextLeg = nextHotel ? routeLegMap[`${hotel.city}->${nextHotel.city}`] ?? null : null;

      return {
        index: index + 1,
        city: hotel.city,
        hotelName: hotel.name,
        checkIn: hotel.checkIn,
        checkOut: hotel.checkOut,
        location: placeMeta.location,
        nextCity: nextHotel?.city ?? "",
        nextLeg,
      };
    })
    .filter(Boolean);
}

function projectRouteStages(stages) {
  if (!stages.length) {
    return [];
  }

  const width = 1000;
  const height = 620;
  const padX = 108;
  const padY = 92;
  const lngValues = stages.map((stage) => stage.location[0]);
  const latValues = stages.map((stage) => stage.location[1]);
  const minLng = Math.min(...lngValues);
  const maxLng = Math.max(...lngValues);
  const minLat = Math.min(...latValues);
  const maxLat = Math.max(...latValues);
  const lngRange = maxLng - minLng || 1;
  const latRange = maxLat - minLat || 1;

  return stages.map((stage) => ({
    ...stage,
    x: padX + ((stage.location[0] - minLng) / lngRange) * (width - padX * 2),
    y: height - padY - ((stage.location[1] - minLat) / latRange) * (height - padY * 2),
  }));
}

function buildRoutePath(points) {
  if (!points.length) {
    return "";
  }

  return points.reduce((path, point, index) => {
    if (index === 0) {
      return `M ${point.x} ${point.y}`;
    }

    const previous = points[index - 1];
    const pivotX = (previous.x + point.x) / 2;
    return `${path} C ${pivotX} ${previous.y}, ${pivotX} ${point.y}, ${point.x} ${point.y}`;
  }, "");
}

function renderRouteTrack(currentCity) {
  const stages = getRouteStages();
  const projectedStages = projectRouteStages(stages);
  const routePath = buildRoutePath(projectedStages);
  const routeMarkup = projectedStages
    .map(
      (stage) => `
        <g class="route-map-stop" data-active="${String(stage.city === currentCity)}" transform="translate(${stage.x} ${stage.y})">
          <circle class="route-stop-halo" r="26"></circle>
          <circle class="route-stop-dot" r="14"></circle>
          <text class="route-stop-index" y="5">${stage.index}</text>
          <text class="route-stop-city" y="-40">${escapeHtml(stage.city)}</text>
          <text class="route-stop-date" y="48">${escapeHtml(formatDateSpan(stage.checkIn, stage.checkOut))}</text>
        </g>
      `
    )
    .join("");

  const stageCards = stages
    .map((stage) => {
      const isActive = stage.city === currentCity;
      const legCopy = stage.nextLeg
        ? `下一段 ${stage.nextCity} · ${formatLegDistance(stage.nextLeg.distanceM)} · ${formatLegDuration(stage.nextLeg.durationS)}`
        : "返程前最后驻点";

      return `
        <article class="route-stage-card" data-active="${String(isActive)}">
          <div class="route-stage-topline">
            <span>${String(stage.index).padStart(2, "0")}</span>
            <strong>${escapeHtml(stage.city)}</strong>
          </div>
          <p class="route-stage-hotel">${renderPlaceLink(stage.hotelName, stage.city, "route-stage-link")}</p>
          <small class="route-stage-window">${formatDateSpan(stage.checkIn, stage.checkOut)}</small>
          <p class="route-stage-meta">${escapeHtml(legCopy)}</p>
        </article>
      `;
    })
    .join("");

  document.getElementById("routeTrack").innerHTML = `
    <div class="route-map-shell">
      <svg class="route-map-svg" viewBox="0 0 1000 620" aria-hidden="true">
        <defs>
          <linearGradient id="routeLineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#1562aa" stop-opacity="0.72" />
            <stop offset="55%" stop-color="#1b7cc9" stop-opacity="0.96" />
            <stop offset="100%" stop-color="#d18f46" stop-opacity="0.96" />
          </linearGradient>
        </defs>
        <rect class="route-map-backdrop" x="48" y="34" width="904" height="552" rx="34"></rect>
        <path class="route-map-shadow" d="${routePath}"></path>
        <path class="route-map-line" d="${routePath}"></path>
        ${routeMarkup}
      </svg>
    </div>
    <div class="route-stage-grid">
      ${stageCards}
    </div>
  `;
}

function renderMetrics() {
  const metricItems = [
    {
      label: "行程天数",
      value: `${tripData.itinerary.length}`,
    },
    {
      label: "城市段数",
      value: `${uniqueCities.length}`,
    },
    {
      label: "酒店接力",
      value: `${tripData.hotels.length}`,
    },
    {
      label: "景点节点",
      value: `${tripData.itinerary.reduce((sum, item) => sum + item.stops.length, 0)}`,
    },
  ];

  document.getElementById("metricGrid").innerHTML = metricItems
    .map(
      (item) => `
        <article class="metric-card">
          <span>${item.label}</span>
          <strong>${item.value}</strong>
        </article>
      `
    )
    .join("");
}

function renderFocusCard(state) {
  const day = state.currentDay;

  document.getElementById("focusCard").innerHTML = `
    <div class="detail-topline">
      <span class="tag">今日焦点</span>
      <span class="phase-pill">${formatMonthDay(day.date)}</span>
    </div>
    <h3>D${day.day} · ${day.title}</h3>
    <div class="detail-meta">
      <span class="city-chip">${day.city}</span>
      <span class="city-chip">${day.transport}</span>
      ${
        day.hotel !== "无"
          ? renderPlaceLink(day.hotel, day.city, "city-chip place-chip-link")
          : `<span class="city-chip">${day.hotel}</span>`
      }
    </div>
    <ul class="detail-list">
      ${day.stops.map((stop) => `<li>${renderPlaceLink(stop, getStopCity(day, stop))}</li>`).join("")}
    </ul>
  `;
}

function renderChecklistCard(state) {
  document.getElementById("checklistCard").innerHTML = `
    <div class="detail-topline">
      <span class="tag">执行提醒</span>
      <span class="phase-pill">${state.phase}</span>
    </div>
    <ul class="detail-list">
      ${state.checklist.map((item) => `<li>${item}</li>`).join("")}
    </ul>
  `;
}

function renderRelayCard(state) {
  const hotel = state.nextHotel;
  const currentHotelStatus = getHotelStatus(hotel);

  document.getElementById("relayCard").innerHTML = `
    <div class="relay-topline">
      <span class="tag">酒店接力</span>
      <span class="phase-pill">${currentHotelStatus}</span>
    </div>
    <h3>${renderPlaceLink(hotel.name, hotel.city)}</h3>
    <p>${hotel.stage} · ${formatMonthDay(hotel.checkIn)} 入住，${formatMonthDay(hotel.checkOut)} 离店，共 ${hotel.nights} 晚。</p>
    <div class="detail-meta">
      <span class="city-chip">${hotel.city}</span>
      <span class="night-badge">${hotel.nights} 晚</span>
    </div>
  `;
}

function renderTimeline(state) {
  const openDay = state.currentDay.day;
  const timelineList = document.getElementById("timelineList");

  timelineList.innerHTML = tripData.itinerary
    .map((item) => {
      const isOpen = item.day === openDay;
      const routeLegs = getDayRouteLegs(item);

      return `
        <article class="timeline-item" data-open="${isOpen}">
          <button class="timeline-toggle" type="button" aria-expanded="${isOpen}" data-day="${item.day}">
            <div class="timeline-header">
              <div class="day-badge">
                <strong>D${item.day}</strong>
                <span>${formatMonthDay(item.date)}</span>
              </div>
              <div class="timeline-title">
                <div class="timeline-topline">
                  <span class="tag">${item.city}</span>
                  <div class="timeline-meta">
                    <span class="city-chip">${item.transport}</span>
                    <span class="city-chip">${item.hotel}</span>
                  </div>
                </div>
                <h3>${item.title}</h3>
              </div>
              <span class="expand-mark">+</span>
            </div>
          </button>
          <div class="timeline-body" aria-hidden="${String(!isOpen)}" ${isOpen ? "" : "inert"}>
            <div class="timeline-body-inner">
              <div class="timeline-body-content">
                ${
                  item.hotel !== "无"
                    ? `<div class="timeline-place-row">${renderPlaceLink(item.hotel, item.city)}</div>`
                    : ""
                }
                <ul class="timeline-listing">
                  ${item.stops.map((stop) => `<li>${renderPlaceLink(stop, getStopCity(item, stop))}</li>`).join("")}
                </ul>
                ${
                  routeLegs.length
                    ? `
                      <div class="timeline-route-block">
                        <div class="timeline-route-kicker">路线段</div>
                        <ul class="timeline-route-list">
                          ${routeLegs
                            .map(
                              (leg) => `
                                <li class="timeline-route-item">
                                  <div class="timeline-route-line">
                                    ${renderResolvedPlaceLink(leg.from.label, leg.from.targetName, leg.from.city, "timeline-route-link")}
                                    <span class="timeline-route-arrow">→</span>
                                    ${renderResolvedPlaceLink(leg.to.label, leg.to.targetName, leg.to.city, "timeline-route-link")}
                                  </div>
                                  <div class="timeline-route-meta">
                                    <span>${formatCompactDistance(leg.distanceM)}</span>
                                    <span>${formatLegDuration(leg.durationS)}</span>
                                  </div>
                                </li>
                              `
                            )
                            .join("")}
                        </ul>
                      </div>
                    `
                    : ""
                }
              </div>
            </div>
          </div>
        </article>
      `;
    })
    .join("");

  timelineList.addEventListener("click", (event) => {
    const button = event.target.closest(".timeline-toggle");

    if (!button) {
      return;
    }

    const activeItem = button.closest(".timeline-item");
    const shouldOpen = activeItem.dataset.open !== "true";

    timelineList.querySelectorAll(".timeline-item").forEach((item) => {
      const isActive = shouldOpen && item === activeItem;
      const body = item.querySelector(".timeline-body");
      item.dataset.open = String(isActive);
      item.querySelector(".timeline-toggle")?.setAttribute("aria-expanded", String(isActive));
      body?.setAttribute("aria-hidden", String(!isActive));
      body?.toggleAttribute("inert", !isActive);
    });
  });
}

function renderHotels() {
  document.getElementById("hotelGrid").innerHTML = tripData.hotels
    .map((hotel, index) => {
      const status = getHotelStatus(hotel);
      const startDay = tripData.itinerary.find((item) => item.hotel === hotel.name)?.day ?? "-";
      const endDay =
        tripData.itinerary
          .filter((item) => item.hotel === hotel.name)
          .slice(-1)[0]?.day ?? startDay;

      return `
        <article class="hotel-card" data-status="${status}">
          <div class="hotel-topline">
            <span class="hotel-badge">${status}</span>
            <span class="phase-pill">第 ${index + 1} 站</span>
          </div>
          <h3>${renderPlaceLink(hotel.name, hotel.city)}</h3>
          <p>${hotel.city} · ${formatMonthDay(hotel.checkIn)} 入住，${formatMonthDay(hotel.checkOut)} 离店，共 ${hotel.nights} 晚。</p>
          <div class="hotel-meta">
            <span class="night-badge">${hotel.stage}</span>
            <span class="city-chip">覆盖 D${startDay}${endDay !== startDay ? `-D${endDay}` : ""}</span>
          </div>
          <div class="hotel-contact-row">
            <span class="hotel-contact-label">联系电话</span>
            <div class="hotel-contact-value">${renderPhoneLinks(hotel.phones ?? [])}</div>
          </div>
        </article>
      `;
    })
    .join("");
}

function getInitialView() {
  const hashView = window.location.hash.replace("#", "");
  return validViews.includes(hashView) ? hashView : "overview";
}

function setActiveView(view, { updateHash = true, behavior = "smooth", force = false } = {}) {
  if (!validViews.includes(view)) {
    return;
  }

  const currentPanel = document.querySelector(".view-panel.active");
  const currentView = currentPanel?.dataset.view;

  if (!force && currentView === view) {
    return;
  }

  if (currentView) {
    viewScrollPositions[currentView] = window.scrollY;
  }

  document.querySelectorAll(".nav-pill").forEach((button) => {
    const isActive = button.dataset.view === view;
    button.classList.toggle("active", isActive);
    button.setAttribute("aria-selected", String(isActive));
    button.tabIndex = isActive ? 0 : -1;
  });

  document.querySelectorAll(".view-panel").forEach((panel) => {
    const isActive = panel.dataset.view === view;
    panel.classList.toggle("active", isActive);
    panel.hidden = !isActive;
  });

  if (updateHash) {
    history.replaceState(null, "", `#${view}`);
  }

  const targetY = viewScrollPositions[view] ?? 0;

  requestAnimationFrame(() => {
    window.scrollTo({
      top: targetY,
      behavior,
    });
  });
}

function bindTabs() {
  document.querySelectorAll(".nav-pill").forEach((button) => {
    button.addEventListener("click", () => {
      setActiveView(button.dataset.view);
    });

    button.addEventListener("keydown", (event) => {
      if (!["ArrowLeft", "ArrowRight"].includes(event.key)) {
        return;
      }

      event.preventDefault();
      const buttons = [...document.querySelectorAll(".nav-pill")];
      const currentIndex = buttons.indexOf(button);
      const offset = event.key === "ArrowRight" ? 1 : -1;
      const nextIndex = (currentIndex + offset + buttons.length) % buttons.length;
      const nextButton = buttons[nextIndex];

      nextButton.focus();
      setActiveView(nextButton.dataset.view);
    });
  });

  window.addEventListener("hashchange", () => {
    setActiveView(getInitialView(), { updateHash: false, behavior: "auto" });
  });

  setActiveView(getInitialView(), { updateHash: false, behavior: "auto", force: true });
}

function openAmapLink(appUrl, webUrl) {
  if (!appUrl || appUrl === webUrl) {
    window.location.href = webUrl;
    return;
  }

  let fallbackTimer = 0;

  const clearFallback = () => {
    if (fallbackTimer) {
      window.clearTimeout(fallbackTimer);
      fallbackTimer = 0;
    }
    document.removeEventListener("visibilitychange", handleVisibilityChange);
    window.removeEventListener("pagehide", clearFallback);
  };

  const handleVisibilityChange = () => {
    if (document.visibilityState === "hidden") {
      clearFallback();
    }
  };

  document.addEventListener("visibilitychange", handleVisibilityChange);
  window.addEventListener("pagehide", clearFallback, { once: true });

  fallbackTimer = window.setTimeout(() => {
    clearFallback();

    if (document.visibilityState === "visible") {
      window.location.href = webUrl;
    }
  }, 900);

  window.location.href = appUrl;
}

function bindAmapLinks() {
  document.addEventListener("click", (event) => {
    const link = event.target.closest("a[data-amap-link]");

    if (!link) {
      return;
    }

    event.preventDefault();
    openAmapLink(link.dataset.appHref || link.href, link.dataset.webHref || link.href);
  });
}

function init() {
  const state = getTripState();
  renderStatusCard(state);
  renderRouteTrack(state.currentDay.city);
  renderMetrics();
  renderFocusCard(state);
  renderChecklistCard(state);
  renderRelayCard(state);
  renderTimeline(state);
  renderHotels();
  bindTabs();
  bindAmapLinks();
}

init();
