import productFlatlay from '../assets/images/flat-lay-composition-of-6-different-skincare-produ.jpeg';
import whiteJar from '../assets/images/high-quality-product-photo-of-a-large-elegant-whit.jpeg';
import lipBalm2 from '../assets/images/close-up-studio-photo-of-elegant-lip-balm-tube-sau (1).jpeg';
import premiumSerum from '../assets/images/photorealistic-studio-product-photography-of-a-pre.jpeg';
import lipBalm from '../assets/images/close-up-studio-photo-of-elegant-lip-balm-tube-sau.jpeg';
import pumpBottle from '../assets/images/photorealistic-premium-pump-bottle-of-body-lotion-.jpeg';
import pumpBottle2 from '../assets/images/photorealistic-premium-pump-bottle-of-body-lotion- (1).jpeg';
import heroBanner2 from '../assets/images/luxurious-hero-banner-for-arabic-skincare-website--1.jpeg';

export const products = [
  { 
    id: 1, 
    name: "مجموعة العناية المتكاملة", 
    description: "مجموعة متكاملة للعناية بالبشرة مع الفازلين الكلاسيكي المعالج.", 
    longDescription: "تجمع هذه المجموعة الفريدة بين الجل البترولي النقي 'فرقيبح هلد' والمرطبات الكلاسيكية لتحصلي على بشرة ناعمة ومرطبة بعمق وحماية تدوم طوال اليوم.",
    price: "189.00", 
    image: productFlatlay,
    category: "مجموعات العناية",
    ingredients: "مستخلصات تنقية ثلاثية، جل بترولي نقي 100%.",
    usage: "نظام متكامل للعناية اليومية. استخدمي اللوشن بعد الاستحمام والفازلين للأماكن شديدة الجفاف.",
    rating: 5
  },
  { 
    id: 2, 
    name: "كريم الإشراقة الذهبية", 
    description: "كريم ليلي مكثف يعيد حيوية البشرة بلمسة ذهبية فاخرة.", 
    longDescription: "يجمع هذا الكريم الفاخر بين سر الترطيب العميق ومستخلصات مجددة للخلايا. تم تصميم عبوته الذهبية المميزة لمنحك شعوراً بالفخامة وحيوية لا مثيل لها.",
    price: "89.00", 
    image: whiteJar,
    category: "كريمات الوجه والجسم",
    ingredients: "جل بترولي معالج، فيتامين هـ، مستخلصات نباتية ذهبية، زبدة الشيا.",
    usage: "خذي كمية مناسبة ودلكيها على بشرة نظيفة قبل النوم للحصول على أقصى ترطيب.",
    rating: 5
  },
  { 
    id: 3, 
    name: "زبدة الشفاه الملكية", 
    description: "زبدة شفاه غنية تذوب لتغذيها بعمق وتمنحها مظهراً مشرقاً.", 
    longDescription: "تتميز هذه الزبدة بقوامها الكثيف الذي يذوب بمجرد ملامستها للشفاه. مصممة لتنعيم أكثر المناطق جفافاً ومنح الشفاه ملمساً حريرياً ناعماً وتوهجاً ملكياً.",
    price: "115.00", 
    image: lipBalm2,
    category: "مراهم الشفاه",
    ingredients: "مزيج من زبدة الكاكاو والشيا، زيوت طبيعية مركزة.",
    usage: "ضعيها على الشفاه الجافة والمتشققة كعناية يومية مكثفة.",
    rating: 5
  },
  { 
    id: 4, 
    name: "مصل الحلى السحري", 
    description: "مصل سحري بتركيبة خفيفة وسريعة الامتصاص لحماية فائقة.", 
    longDescription: "تأتي بعبوة أنيقة بتركيبة متطورة تحمل اسم 'الحلى السحري'. يعمل هذا المصل المتكامل على بناء حاجز واقي للبشرة ويحميها من العوامل البيئية بقوام خفيف جداً.",
    price: "145.00", 
    image: premiumSerum,
    category: "سيرومات الوجه",
    ingredients: "حمض الهيالورونيك، خلاصة الصبار، مستخلصات عشبية.",
    usage: "دلكي قطرات قليلة بلطف على الوجه والرقبة يومياً قبل وضع المرطب.",
    rating: 5
  },
  { 
    id: 5, 
    name: "مرطب الشفاه المخملي", 
    description: "مرطب مخصص للعناية السريعة والترطيب الفوري للشفاه.", 
    longDescription: "في عبوة أنبوبية أنيقة، يأتي هذا المرطب ليذكرك كل يوم بالاهتمام بشفتيك. مصمم للترطيب السريع أثناء التنقل بدون أي أثر دهني مزعج.",
    price: "65.00", 
    image: lipBalm,
    category: "مراهم الشفاه",
    ingredients: "خلاصة البابونج، نعناع ملطف، جلسرين نباتي.",
    usage: "استخدميه متى شعرتِ بجفاف شفتيك خلال اليوم.",
    rating: 4
  },
  { 
    id: 6, 
    name: "لوشن شير الشلي الحريري", 
    description: "لوشن غني للبشرة الحساسة والجافة جداً يمنحها نعومة الحرير.", 
    longDescription: "بفضل تركيبته السلسة في عبوة المضخة العملية الفاخرة، يوفر لوشن 'شير الشلي' ترطيباً يدوم. تركيبته اللطيفة تناسب البشرات التي تحتاج لعناية فائقة وتغليف مائي مكثف.",
    price: "95.00", 
    image: pumpBottle,
    category: "مرطبات الجسم",
    ingredients: "زيت اللوز الحلو، نسبة عالية من الجلسرين، ماء مقطر نقي.",
    usage: "اضغطي المضخة واستخدمي اللوشن بحرية على كامل الجسم لمزيد من المرونة.",
    rating: 5
  },
  { 
    id: 7, 
    name: "لوشن العناية الكلاسيكية بالمضخة", 
    description: "لوشن العناية الكلاسيكية بعبوة مضخة عملية لترطيب يومي مريح.", 
    longDescription: "لوشن غني مصمم خصيصاً للاستخدام اليومي المريح عبر العبوة ذات المضخة. يمنح إحساساً بالنعومة والانتعاش بينما يعمل على استعادة ترطيب البشرة ليتركها بملمس مخملي أبيض.",
    price: "85.00", 
    image: pumpBottle2,
    category: "مرطبات الجسم",
    ingredients: "مستخلصات مسكنة وملطفة، مرطبات نباتية كلاسيكية.",
    usage: "مثالي للاستخدام اليومي بعد الاستحمام لكافة مناطق الجسم.",
    rating: 4
  },
  { 
    id: 8, 
    name: "مجموعة الإشراقة الفاخرة", 
    description: "مجموعة فاخرة لعناية متكاملة بإشراقة ساحرة.", 
    longDescription: "ارتقي بروتين العناية الخاص بك مع مجموعة الإشراقة الفاخرة التي توفر التغذية العميقة واللمسة الحريرية لبشرتك.",
    price: "220.00", 
    image: heroBanner2,
    category: "مجموعات العناية",
    ingredients: "خلاصات طبيعية مركزة، فيتامينات متعددة.",
    usage: "استخدمي منتجات المجموعة كروتين ليلي مكثف.",
    rating: 5
  }
];

export const categories = [
  { name: "مجموعات العناية", image: productFlatlay, id:"care-sets" },
  { name: "مرطبات الجسم", image: pumpBottle, id:"body-lotion" },
  { name: "كريمات الوجه والجسم", image: whiteJar, id:"creams" },
  { name: "سيرومات الوجه", image: premiumSerum, id:"serums" },
  { name: "مراهم الشفاه", image: lipBalm, id:"lip-balms" },
];
