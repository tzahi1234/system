
// assets/js/data.js
// Shared data & helpers ported from the React app

// Scenarios
const SCENARIOS = [
  {
    id: "routine",
    name: "ניהול שגרה ושמירת כשירות",
    description: "פעילות שוטפת לשמירה על מוכנות הצוות",
    icon: "clock",
    priority: "low",
    color: "from-green-500 to-green-600",
    bgColor: "bg-green-50",
    borderColor: "border-green-200"
  },
  {
    id: "general_emergency",
    name: "אירוע חירום כללי",
    description: "אירוע חירום שאינו בקטגוריה ספציפית",
    icon: "alert-triangle",
    priority: "high",
    color: "from-orange-500 to-red-500",
    bgColor: "bg-orange-50",
    borderColor: "border-orange-200"
  },
  {
    id: "fire",
    name: "שריפה",
    description: "שריפת יער, מבנים או שטחים פתוחים",
    icon: "flame",
    priority: "critical",
    color: "from-red-500 to-red-600",
    bgColor: "bg-red-50",
    borderColor: "border-red-200"
  },
  {
    id: "rockets",
    name: "ירי רקטות וטילים",
    description: "התקפת טילים או רקטות על האזור",
    icon: "target",
    priority: "critical",
    color: "from-red-600 to-red-700",
    bgColor: "bg-red-50",
    borderColor: "border-red-200"
  },
  {
    id: "earthquake",
    name: "רעידת אדמה",
    description: "רעידת אדמה או נזקים הנגרמים ממנה",
    icon: "zap",
    priority: "critical",
    color: "from-purple-500 to-purple-600",
    bgColor: "bg-purple-50",
    borderColor: "border-purple-200"
  },
  {
    id: "building_collapse",
    name: "קריסת מבנה",
    description: "קריסה או נזק חמור למבנה",
    icon: "building",
    priority: "critical",
    color: "from-gray-600 to-gray-700",
    bgColor: "bg-gray-50",
    borderColor: "border-gray-200"
  },
  {
    id: "hazmat",
    name: "חומרים מסוכנים",
    description: "שחרור או חשיפה לחומרים מסוכנים",
    icon: "droplets",
    priority: "high",
    color: "from-yellow-500 to-orange-500",
    bgColor: "bg-yellow-50",
    borderColor: "border-yellow-200"
  },
  {
    id: "infiltration",
    name: "חדירה ליישוב",
    description: "חדירת מחבלים או פעילות חבלנית",
    icon: "shield",
    priority: "critical",
    color: "from-red-700 to-red-800",
    bgColor: "bg-red-50",
    borderColor: "border-red-200"
  },
  {
    id: "infrastructure",
    name: "פגיעה בתשתיות",
    description: "נזק לתשתיות חיוניות (חשמל, מים, תקשורת)",
    icon: "zap",
    priority: "high",
    color: "from-blue-500 to-blue-600",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-200"
  },
  {
    id: "evacuation",
    name: "פינוי יישוב",
    description: "פינוי מלא או חלקי של תושבי היישוב",
    icon: "car",
    priority: "critical",
    color: "from-red-500 to-red-600",
    bgColor: "bg-red-50",
    borderColor: "border-red-200"
  }
];

const PRIORITY_LABELS = {
  low: { text: "רגיל", color: "bg-green-100 text-green-800" },
  medium: { text: "בינוני", color: "bg-yellow-100 text-yellow-800" },
  high: { text: "גבוה", color: "bg-orange-100 text-orange-800" },
  critical: { text: "קריטי", color: "bg-red-100 text-red-800" }
};

// Roles
const ROLES = [
  {
    id: "commander",
    name: "יו\"ר צח\"י",
    description: "מנהיג הצוות, קבלת החלטות ותיאום כללי",
    icon: "crown",
    color: "from-purple-600 to-purple-700",
    bgColor: "bg-purple-50",
    borderColor: "border-purple-200",
    responsibilities: ["הובלת הצוות", "קבלת החלטות", "תיאום עם גורמי חוץ"]
  },
  {
    id: "security",
    name: "ביטחון",
    description: "אבטחה, הגנה ופעילות מבצעית",
    icon: "shield",
    color: "from-red-600 to-red-700",
    bgColor: "bg-red-50",
    borderColor: "border-red-200",
    responsibilities: ["אבטחת האזור", "הגנה על תושבים", "תיאום עם כוחות ביטחון"]
  },
  {
    id: "welfare",
    name: "רווחה וקהילה",
    description: "טיפול באוכלוסייה וזיהוי צרכים",
    icon: "heart",
    color: "from-pink-500 to-pink-600",
    bgColor: "bg-pink-50",
    borderColor: "border-pink-200",
    responsibilities: ["טיפול באוכלוסייה פגיעה", "זיהוי צרכים", "תמיכה רגשית"]
  },
  {
    id: "logistics",
    name: "לוגיסטיקה ותשתיות",
    description: "אספקה, תחזוקה ותשתיות",
    icon: "truck",
    color: "from-blue-600 to-blue-700",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-200",
    responsibilities: ["אספקת ציוד", "תחזוקת תשתיות", "הסעות"]
  },
  {
    id: "public_info",
    name: "מידע לציבור",
    description: "הפצת מידע והסברה לתושבים",
    icon: "megaphone",
    color: "from-green-600 to-green-700",
    bgColor: "bg-green-50",
    borderColor: "border-green-200",
    responsibilities: ["הפצת הודעות", "קשר עם תקשורת", "עדכון תושבים"]
  },
  {
    id: "medical",
    name: "רפואה",
    description: "טיפול רפואי וחירום רפואי",
    icon: "stethoscope",
    color: "from-red-500 to-pink-500",
    bgColor: "bg-red-50",
    borderColor: "border-red-200",
    responsibilities: ["עזרה ראשונה", "פינוי פצועים", "תיאום עם מד\"א"]
  },
  {
    id: "education",
    name: "חינוך",
    description: "טיפול בילדים ומערכת החינוך",
    icon: "graduation-cap",
    color: "from-orange-500 to-orange-600",
    bgColor: "bg-orange-50",
    borderColor: "border-orange-200",
    responsibilities: ["הגנה על ילדים", "המשכיות חינוכית", "תמיכה הוריות"]
  }
];

// Instructions data
function getInstructions(scenarioId, roleId) {
  const instructionsMap = {
    fire: {
      commander: [
        "גיבוש תמונת מצב וקבלת החלטות",
        "תיאום הצוותים הייעודיים בצח\"י",
        "מסירת הודעות למשפחות הנפגעים בתיאום עם המועצה",
        "המשך תיאום פעולה עם כוחות הצלה חיצוניים"
      ],
      security: [
        "זיהוי מעגלי פגיעות (נפגעים, עדי ראייה, קרובי משפחה)",
        "איתור סיכונים באירוע ונטרולם",
        "הרחקת תושבים מאזורים מסוכנים",
        "אבטחת הישוב או אזור האירוע"
      ]
    },
    general_emergency: {
      commander: [
        "עדכון שוטף של מוקד המועצה/רכז צח\"י מועצתי",
        "תיאום ושיתוף פעולה עם גופי החירום הרלוונטיים",
        "סיוע לצוותים נוספים על פי דרישה הרלוונטית לצוות"
      ]
    }
  };
  return (instructionsMap[scenarioId] && instructionsMap[scenarioId][roleId]) || ["הוראות לא זמינות עבור צירוף זה"];
}

// Checklist data
function getChecklist(scenarioId, roleId) {
  const checklists = {
    routine: {
      commander: {
        before: [
          { task: "הקמת הצוותים ועדכון רשימות ודרכי תקשורת", priority: "high", estimatedTime: "30 דקות" },
          { task: "בניית תיק צח\"י יישובי בסיוע מזכירות היישוב", priority: "medium", estimatedTime: "2 שעות" },
          { task: "עדכון רשימת אנשי קשר רלוונטיים במועצה", priority: "high", estimatedTime: "15 דקות" },
          { task: "ריענון ובדיקה אחת לחצי שנה כולל עדכון בעלי תפקידים במועצה", priority: "medium", estimatedTime: "1 שעה" }
        ]
      },
      security: {
        before: [
          { task: "עדכון רשימות מתנדבי כיתת הכוננות ונושאי נשק ביישוב", priority: "high", estimatedTime: "20 דקות" },
          { task: "ציוד חמ\"ל וכיתת כוננות, אמצעי קשר", priority: "medium", estimatedTime: "30 דקות" },
          { task: "אנשי קשר במג\"ב, משטרה, צבא ומועצה", priority: "high", estimatedTime: "10 דקות" },
          { task: "ריענון ובדיקה אחת לחצי שנה", priority: "low", estimatedTime: "1 שעה" }
        ]
      },
      welfare: {
        before: [
          { task: "עדכון רשימות אנשים ומשפחות הזקוקים לתשומת לב מיוחדת", priority: "high", estimatedTime: "45 דקות" },
          { task: "רשימת מתנדבים לסיוע פסיכו סוציאלי בקהילה", priority: "medium", estimatedTime: "30 דקות" },
          { task: "עדכון אנשי קשר רלוונטיים במועצה", priority: "high", estimatedTime: "15 דקות" },
          { task: "בדיקת תיק התערבות, רענון ובדיקה אחת לחצי שנה", priority: "medium", estimatedTime: "1 שעה" }
        ]
      }
    },
    fire: {
      commander: {
        during: [
          { task: "לאחר הנחייה/הבנה על היערכות או ביצוע פינוי", priority: "critical", estimatedTime: "מיידי" },
          { task: "הנחייה על בנייה תכנית עבודה לפינוי ותכלול כל הצוותים", priority: "critical", estimatedTime: "5 דקות" },
          { task: "שליטה בתמונת מצב אוכלוסייה", priority: "high", estimatedTime: "10 דקות" },
          { task: "הוצאה לפועל של תכנית הפינוי אם נדרש", priority: "critical", estimatedTime: "זמן משתנה" }
        ]
      },
      security: {
        during: [
          { task: "המשך לחימה באש, תוך דגש על עיכוב התקדמות האש לנתיב הפינוי המתוכנן", priority: "critical", estimatedTime: "מתמשך" },
          { task: "חבירה לכוחות ההצלה והעברת הטיפול להם/יחד איתם", priority: "high", estimatedTime: "15 דקות" },
          { task: "הכשרת דרכי כניסה ויציאה מהיישוב והמלצה על תוואי הפינוי למחלקת ביטחון", priority: "high", estimatedTime: "20 דקות" },
          { task: "שילוט תוואי הפינוי", priority: "medium", estimatedTime: "30 דקות" }
        ]
      },
      logistics: {
        during: [
          { task: "סיוע ראשוני לצוות הביטחון באמצעים לוגיסטיים", priority: "high", estimatedTime: "10 דקות" },
          { task: "הפצת תמונת מצב דינמית לצוות יחד עם יו\"ר הצוות", priority: "high", estimatedTime: "מתמשך" },
          { task: "הגשת עזרה ראשונה לפצועים וסיוע בפינוי", priority: "high", estimatedTime: "זמן משתנה" }
        ]
      }
    },
    rockets: {
      commander: {
        during: [
          { task: "קבלת הנחיות התגוננות רמה מפקע\"ר מהמועצה", priority: "critical", estimatedTime: "מיידי" },
          { task: "והבנת המשמעויות בדגש על לימודים", priority: "high", estimatedTime: "5 דקות" },
          { task: "היערכות לקליטת מתנדבים בודדים/ארגוניים תרומות", priority: "medium", estimatedTime: "15 דקות" },
          { task: "קבלת עדכונים יומיים מקבט המועצה", priority: "high", estimatedTime: "מתמשך" }
        ]
      },
      security: {
        during: [
          { task: "הכרת נהלי חירום והפעלת הצוות, וידוא ציוד רפואי תקין", priority: "high", estimatedTime: "10 דקות" },
          { task: "רשימת תושבים בעלי הכשרה רפואית", priority: "medium", estimatedTime: "15 דקות" },
          { task: "רשימת מוסדות רפואיים בישוב ובמרחב", priority: "medium", estimatedTime: "10 דקות" }
        ]
      }
    },
    earthquake: {
      commander: {
        during: [
          { task: "מענה ראשוני יצירת תמונת מצב יישובית", priority: "critical", estimatedTime: "5 דקות" },
          { task: "אוכלוסייה ונזק לבתים ותשתיות", priority: "high", estimatedTime: "15 דקות" },
          { task: "הכוונת יצירת תמונת מצב של זירות עם בתים שקרסו", priority: "high", estimatedTime: "10 דקות" }
        ]
      },
      security: {
        during: [
          { task: "מיפוי נזקי תשתיות - חשמל, מים, דרכי גישה", priority: "high", estimatedTime: "20 דקות" },
          { task: "טיפול בסיכונים בתשתיות", priority: "critical", estimatedTime: "זמן משתנה" }
        ]
      }
    },
    building_collapse: {
      commander: {
        during: [
          { task: "מענה ראשוני יצירת תמונת מצב יישוב וזירה", priority: "critical", estimatedTime: "5 דקות" },
          { task: "מי נוכח, מי צריך סיוע, מי מנותק קשר", priority: "high", estimatedTime: "10 דקות" },
          { task: "חבירה למנהל הזירה ובידוד הזירה", priority: "high", estimatedTime: "מיידי" }
        ]
      }
    },
    hazmat: {
      commander: {
        during: [
          { task: "מענה ראשוני יצירת תמונת מצב יישוב", priority: "critical", estimatedTime: "5 דקות" },
          { task: "וזירה מי נוכח, מי צריך סיוע", priority: "high", estimatedTime: "10 דקות" },
          { task: "חבירה למנהל הזירה ובידוד הזירה", priority: "critical", estimatedTime: "מיידי" }
        ]
      }
    },
    infiltration: {
      commander: {
        during: [
          { task: "דיווח למוקד פתיחת ערוץ תקשורת", priority: "critical", estimatedTime: "מיידי" },
          { task: "עם רבש\"ץ/סגן צ וכדו'", priority: "high", estimatedTime: "2 דקות" },
          { task: "קבלת תמונת מצב בתצורת עבודה מבוזרת", priority: "high", estimatedTime: "5 דקות" }
        ]
      }
    },
    infrastructure: {
      commander: {
        during: [
          { task: "הבנת חומרת הפגיעה - מקומי רמת היישוב/מועצה או ברמת המדינה", priority: "critical", estimatedTime: "5 דקות" },
          { task: "לבדוק עם המועצה הערכות להחמרה בהתאם להערכת המצב", priority: "high", estimatedTime: "10 דקות" },
          { task: "שיתוף סיוע ללוגיסטיקה בטיפול בתקלה אם מקומית", priority: "medium", estimatedTime: "15 דקות" }
        ]
      }
    },
    evacuation: {
      commander: {
        before: [
          { task: "ההחלטה תתקבל יחד עם ועד הישוב והמועצה", priority: "critical", estimatedTime: "מיידי" },
          { task: "פתיחת קו תקשורת עם הגורם האחראי מחוז מר\"חט/פקע\"ר", priority: "high", estimatedTime: "5 דקות" },
          { task: "קבלת הנחיה לביצוע", priority: "high", estimatedTime: "10 דקות" }
        ],
        during: [
          { task: "וידוא זמינות צוותים רפואיים", priority: "high", estimatedTime: "5 דקות" },
          { task: "איתור ראשוני של תושבים עם מוגבלויות", priority: "high", estimatedTime: "15 דקות" },
          { task: "קיום קשר עם גורמי רווחה", priority: "medium", estimatedTime: "10 דקות" }
        ]
      }
    }
  };

  const scenario = checklists[scenarioId];
  if (!scenario || !scenario[roleId]) {
    return {
      before: [{ task: "צ'ק ליסט לא זמין עבור צירוף זה", priority: "low", estimatedTime: "-" }],
      during: [],
      after: []
    };
  }
  return scenario[roleId];
}

const PRIORITY_COLORS = {
  critical: "bg-red-100 text-red-800 border-red-200",
  high: "bg-orange-100 text-orange-800 border-orange-200",
  medium: "bg-yellow-100 text-yellow-800 border-yellow-200",
  low: "bg-green-100 text-green-800 border-green-200"
};

const PRIORITY_HE = {
  critical: "קריטי",
  high: "דחוף",
  medium: "בינוני",
  low: "רגיל"
};

// Resources
const RESOURCES_DATA = {
  contacts: [
    { title: "מוקד המועצה", phone: "1-700-505-000", description: "מוקד מרכזי לתיאום עם הרשויות", category: "מועצה" },
    { title: "מטה צח\"י מחוזי", phone: "03-1234567", description: "תיאום עם מטה צח\"י ברמה המחוזית", category: "צח\"י" },
    { title: "כב\"ה מקומי", phone: "102", description: "כיבוי אש וחילוץ מקומי", category: "חירום" },
    { title: "מד\"א אזורי", phone: "101", description: "שירותי רפואה חירום", category: "רפואה" },
    { title: "משטרה מחוזית", phone: "100", description: "משטרה וביטחון פנים", category: "ביטחון" },
    { title: "מוקד פיקוד העורף", phone: "104", description: "הנחיות והתרעות מפיקוד העורף", category: "פיקע\"ר" }
  ],
  procedures: [
    { title: "נוהל פינוי חירום", content: "סדר פעולות מפורט לפינוי תושבים במצב חירום", category: "פינוי" },
    { title: "נוהל הפעלת מקלטים", content: "הוראות להכנה והפעלה של מרחבים מוגנים", category: "הגנה" },
    { title: "נוהל תקשורת בחירום", content: "דרכי תקשורת חלופיות ונוהלי דיווח", category: "תקשורת" },
    { title: "נוהל עזרה ראשונה", content: "עקרונות בסיסיים למתן עזרה ראשונה", category: "רפואה" }
  ],
  equipment: [
    { title: "ערכת עזרה ראשונה", content: "מיקום: מזכירות היישוב, חדר צח\"י", category: "רפואה" },
    { title: "מטפים ומערכות כיבוי", content: "מיקום: ליד כל מבנה ציבורי", category: "כיבוי" },
    { title: "מכשירי קשר", content: "ערוץ חירום: 446.5 MHz", category: "תקשורת" },
    { title: "גנרטור חירום", content: "מיקום: מבנה המועצה, דלק ל-8 שעות", category: "חשמל" }
  ],
  forms: [
    { title: "טופס דיווח אירוע", content: "לדיווח ותיעוד אירועי חירום", category: "דיווחים" },
    { title: "רשימת נוכחות צח\"י", content: "לרישום נוכחות חברי הצוות", category: "ניהול" },
    { title: "טופס הערכת נזקים", content: "להערכה ותיעוד נזקים", category: "הערכה" }
  ]
};

// Helpers
function saveScenario(s) {
  sessionStorage.setItem('selectedScenario', JSON.stringify(s));
}
function getSavedScenario() {
  const s = sessionStorage.getItem('selectedScenario');
  return s ? JSON.parse(s) : null;
}
function saveRole(r) {
  sessionStorage.setItem('selectedRole', JSON.stringify(r));
}
function getSavedRole() {
  const r = sessionStorage.getItem('selectedRole');
  return r ? JSON.parse(r) : null;
}
