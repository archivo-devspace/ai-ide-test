// Simple AI Cheat Sheet Data Structure
const cheatsheetData = [
    // ========================================
    // BASICS
    // ========================================
    {
        id: 1,
        category: 'basics',
        title: 'What is AI?',
        title_mm: 'AI ဆိုတာ ဘာလဲ?',
        description: 'Artificial Intelligence explained in simple terms for everyone.',
        description_mm: 'လူတိုင်းအတွက် လွယ်ကူသော အသုံးအနှုန်းများဖြင့် ရှင်းပြထားသော ဉာဏ်ရည်တု။',
        points: [
            'AI is computer software that can think and learn like humans',
            'Answers questions, creates images, writes text, recognizes faces',
            'Examples: ChatGPT, Siri, Google Assistant, Face ID',
            'AI learns from lots of examples, just like you learned to read'
        ],
        points_mm: [
            'AI သည် လူသားများကဲ့သို့ တွေးခေါ်သင်ယူနိုင်သော ကွန်ပျူတာဆော့ဖ်ဝဲဖြစ်သည်',
            'မေးခွန်းများဖြေဆိုခြင်း၊ ပုံများဖန်တီးခြင်း၊ စာရေးခြင်း၊ မျက်နှာများမှတ်မိခြင်း',
            'ဥပမာများ: ChatGPT၊ Siri၊ Google Assistant၊ ဖုန်းမှ Face ID',
            'သင် စာဖတ်သင်သကဲ့သို့ AI သည် ဥပမာပေါင်းများစွာမှ လေ့လာသင်ယူထားခြင်းဖြစ်သည်'
        ]
    },
    {
        id: 2,
        category: 'basics',
        title: 'What is a Token?',
        title_mm: 'Token ဆိုတာ ဘာလဲ?',
        description: 'Understanding tokens - the building blocks of AI conversations.',
        description_mm: 'Token များကို နားလည်ခြင်း - AI စကားပြောဆိုမှု၏ အခြေခံအုတ်မြစ်များ။',
        points: [
            'A token is a small piece of text (usually 3-4 letters)',
            'Example: "Hello world" = 2 tokens ("Hello" + "world")',
            'AI tools count tokens to measure how much you use',
            'Like SMS character limits - each token counts toward your limit'
        ],
        points_mm: [
            'Token သည် စာသား အစိတ်အပိုင်းငယ်တစ်ခုဖြစ်သည် (ပုံမှန်အားဖြင့် ၃-၄ လုံး)',
            'ဥပမာ: "Hello world" = Token ၂ ခု ("Hello" + "world")',
            'သင် မည်မျှအသုံးပြုသည်ကို တိုင်းတာရန် AI ကိရိယာများက Token များကို ရေတွက်သည်',
            'SMS စာတိုများကဲ့သို့ဖြစ်သည် - Token တစ်ခုစီသည် သင်၏ SMS ကန့်သတ်ချက်ထဲမှ စာလုံးတစ်လုံးနှင့်တူသည်'
        ]
    },
    {
        id: 3,
        category: 'basics',
        title: 'What is a Model?',
        title_mm: 'Model ဆိုတာ ဘာလဲ?',
        description: 'AI models are like different versions of the AI brain.',
        description_mm: 'AI Model များသည် AI ဦးနှောက်၏ မတူညီသော ဗားရှင်းများကဲ့သို့ ဖြစ်သည်။',
        points: [
            'A model is a specific version of AI with different abilities',
            'GPT-4 is smarter but slower, GPT-3.5 is faster but simpler',
            'Like phones: iPhone 15 vs iPhone 12 - newer models can do more',
            'Common models: GPT-4, Claude, Gemini, Llama - each has strengths'
        ],
        points_mm: [
            'Model သည် မတူညီသော စွမ်းရည်များရှိသည့် AI ၏ သီးခြား ဗားရှင်းတစ်ခုဖြစ်သည်',
            'GPT-4 သည် ပိုတော်သော်လည်း နှေးသည်၊ GPT-3.5 သည် ပိုမြန်သော်လည်း ရိုးရှင်းသည်',
            'ဖုန်းများနှင့်တူသည်: iPhone 15 နှင့် iPhone 12 ကဲ့သို့ - မော်ဒယ်အသစ်များက ပိုလုပ်ဆောင်နိုင်သည်',
            'အသုံးများသော မော်ဒယ်များ: GPT-4၊ Claude၊ Gemini၊ Llama - တစ်ခုစီတွင် အားသာချက်များရှိသည်'
        ]
    },
    {
        id: 4,
        category: 'basics',
        title: 'What is a Prompt?',
        title_mm: 'Prompt ဆိုတာ ဘာလဲ?',
        description: 'How to ask AI questions the right way.',
        description_mm: 'AI ကို မေးခွန်းမေးရန် မှန်ကန်သော နည်းလမ်း။',
        points: [
            'A prompt is your question or instruction to the AI',
            'Good: "Write a 3-paragraph email to my boss about vacation"',
            'Bad: "Email" (too vague)',
            'Tip: Be specific! Tell the AI exactly what you want'
        ],
        points_mm: [
            'Prompt သည် AI သို့ သင်ပေးသော မေးခွန်း သို့မဟုတ် ညွှန်ကြားချက်ဖြစ်သည်',
            'ကောင်းသော: "ခွင့်ယူခြင်းအကြောင်း ကျွန်ုပ်၏အလုပ်ရှင်ထံ စာပိုဒ် ၃ ပိုဒ်ပါ အီးမေးလ်ရေးပေးပါ"',
            'မကောင်းသော: "အီးမေးလ်" (အဓိပ္ပါယ် မရှင်းလင်းပါ)',
            'အကြံပြုချက်: တိကျပါစေ! သင်ဘာလိုချင်သည်ကို AI အား အတိအကျပြောပါ'
        ]
    },
    {
        id: 5,
        category: 'basics',
        title: 'What is Training?',
        title_mm: 'Training ဆိုတာ ဘာလဲ?',
        description: 'How AI learns to be smart.',
        description_mm: 'AI သည် ဉာဏ်ရည်ထက်မြက်လာရန် မည်သို့ သင်ယူသည်။',
        points: [
            'Training is when AI reads millions of books and websites to learn',
            'Like school: Just like you learned from textbooks, AI learns from data',
            'Takes time: Training a big AI model can take weeks or months',
            'Most AI tools are already trained - you just use them'
        ],
        points_mm: [
            'Training ဆိုသည်မှာ AI က စာအုပ်များနှင့် ဝဘ်ဆိုဒ် သန်းပေါင်းများစွာကို ဖတ်ရှုလေ့လာခြင်းဖြစ်သည်',
            'ကျောင်းနှင့်တူသည်: သင် ကျောင်းသုံးစာအုပ်များမှ လေ့လာသကဲ့သို့ AI သည် ဒေတာများမှ လေ့လာသည်',
            'အချိန်ယူရသည်: AI မော်ဒယ်ကြီးတစ်ခုကို သင်ကြားပေးရာတွင် ရက်သတ္တပတ် သို့မဟုတ် လများစွာ ကြာနိုင်သည်',
            'AI ကိရိယာအများစုသည် သင်ကြားပေးပြီးသားဖြစ်သည် - သင် အသုံးပြုရုံသာဖြစ်သည်'
        ]
    },

    // ========================================
    // USING AI
    // ========================================
    {
        id: 6,
        category: 'using-ai',
        title: 'ChatGPT Basics',
        title_mm: 'ChatGPT အခြေခံများ',
        description: 'How to use ChatGPT effectively.',
        description_mm: 'ChatGPT ကို ထိရောက်စွာ အသုံးပြုနည်း။',
        points: [
            'A chatbot that can answer questions and help with tasks',
            'Free version uses GPT-3.5, paid ($20/month) uses GPT-4',
            'Best for: Writing, brainstorming, explaining concepts, coding help',
            'Can make mistakes, doesn\'t know events after its training date'
        ],
        points_mm: [
            'မေးခွန်းများကို ဖြေဆိုနိုင်ပြီး လုပ်ငန်းဆောင်တာများကို ကူညီပေးနိုင်သော chatbot ဖြစ်သည်',
            'အခမဲ့ဗားရှင်းက GPT-3.5 ကိုသုံးပြီး၊ ငွေပေးရသောဗားရှင်း ($20/လ) က GPT-4 ကိုသုံးသည်',
            'အကောင်းဆုံးအသုံးဝင်ပုံ: စာရေးခြင်း၊ အကြံဉာဏ်ထုတ်ခြင်း၊ အကြောင်းအရာများရှင်းပြခြင်း၊ ကုဒ်ရေးရာတွင်ကူညီခြင်း',
            'အမှားများလုပ်နိုင်သည်၊ ၎င်းသင်ယူခဲ့သည့်ရက်စွဲနောက်ပိုင်း အဖြစ်အပျက်များကို မသိပါ'
        ]
    },
    {
        id: 7,
        category: 'using-ai',
        title: 'Writing Better Prompts',
        title_mm: 'ပိုမိုကောင်းမွန်သော Prompt များ ရေးနည်း',
        description: 'Tips to get better answers from AI.',
        description_mm: 'AI ထံမှ ပိုမိုကောင်းမွန်သော အဖြေများ ရရှိရန် အကြံပြုချက်များ။',
        points: [
            'Be specific: "Write 5 fun facts about Golden Retrievers" not "Write about dogs"',
            'Give context: "I\'m a beginner" or "Explain like I\'m 10 years old"',
            'Set format: "Give me a bullet list" or "Write in 3 paragraphs"',
            'Ask follow-ups: If answer isn\'t perfect, ask AI to improve it'
        ],
        points_mm: [
            'တိကျပါစေ: "Golden Retrievers အကြောင်း စိတ်ဝင်စားဖွယ်အချက် ၅ ချက်ရေးပါ" ဟုပြောပါ',
            'နောက်ခံအကြောင်းအရာပေးပါ: "ကျွန်ုပ်သည် စတင်လေ့လာသူဖြစ်သည်" သို့မဟုတ် "၁၀ နှစ်အရွယ်ကလေးကဲ့သို့ ရှင်းပြပါ"',
            'ပုံစံသတ်မှတ်ပါ: "အချက်အလက်စာရင်းပေးပါ" သို့မဟုတ် "စာပိုဒ် ၃ ပိုဒ်ဖြင့်ရေးပါ"',
            'ဆက်လက်မေးမြန်းပါ: အဖြေက မပြည့်စုံပါက၊ ပိုကောင်းအောင်လုပ်ပေးရန် AI ကို တောင်းဆိုပါ'
        ]
    },
    {
        id: 8,
        category: 'using-ai',
        title: 'AI Image Generators',
        title_mm: 'AI ပုံထုတ်လုပ်ပေးသော ကိရိယာများ',
        description: 'Creating images with AI tools.',
        description_mm: 'AI ကိရိယာများဖြင့် ပုံများ ဖန်တီးခြင်း။',
        points: [
            'Popular tools: DALL-E, Midjourney, Stable Diffusion, Adobe Firefly',
            'How it works: Type a description, AI creates an image',
            'Example: "A sunset over mountains, watercolor style"',
            'Be descriptive - mention colors, style, mood, and details'
        ],
        points_mm: [
            'လူကြိုက်များသော ကိရိယာများ: DALL-E၊ Midjourney၊ Stable Diffusion၊ Adobe Firefly',
            'ဘယ်လိုလုပ်ဆောင်လဲ: ပုံဖော်ပြချက်ကို ရိုက်ထည့်ပါ၊ AI က ပုံတစ်ပုံ ဖန်တီးပေးလိမ့်မည်',
            'ဥပမာ: "တောင်တန်းများပေါ်မှ နေဝင်ချိန်၊ ရေဆေးပန်းချီပုံစံ"',
            'အသေးစိတ်ဖော်ပြပါ - အရောင်များ၊ ပုံစံ၊ ခံစားချက်နှင့် အသေးစိတ်အချက်များကို ထည့်သွင်းပြောပါ'
        ]
    },
    {
        id: 9,
        category: 'using-ai',
        title: 'Voice Assistants',
        title_mm: 'အသံ လက်ထောက်များ',
        description: 'Using AI with your voice.',
        description_mm: 'သင်၏ အသံဖြင့် AI အသုံးပြုခြင်း။',
        points: [
            'Examples: Siri (Apple), Alexa (Amazon), Google Assistant',
            'What they do: Set timers, play music, answer questions, control smart home',
            'How to use: Say "Hey Siri" or "Alexa" then ask your question',
            'Privacy tip: They listen for wake words - you can mute them anytime'
        ],
        points_mm: [
            'ဥပမာများ: Siri (Apple)၊ Alexa (Amazon)၊ Google Assistant',
            'ဘာလုပ်ပေးလဲ: အချိန်ပေးမှတ်ပေးခြင်း၊ သီချင်းဖွင့်ခြင်း၊ မေးခွန်းဖြေခြင်း၊ စမတ်အိမ်ထိန်းချုပ်ခြင်း',
            'ဘယ်လိုသုံးမလဲ: "Hey Siri" သို့မဟုတ် "Alexa" ဟုခေါ်ပြီး သင့်မေးခွန်းကို မေးပါ',
            'လုံခြုံရေး အကြံပြုချက်: ၎င်းတို့သည် နှိုးဆော်သံများကို နားထောင်နေတတ်သည် - လိုအပ်ပါက အသံပိတ်ထားနိုင်သည်'
        ]
    },
    {
        id: 10,
        category: 'using-ai',
        title: 'AI Writing Assistants',
        title_mm: 'AI စာရေးလက်ထောက်များ',
        description: 'Tools that help you write better.',
        description_mm: 'သင့်အား ပိုမိုကောင်းမွန်စွာ ရေးသားနိုင်ရန် ကူညီပေးသော ကိရိယာများ။',
        points: [
            'Grammarly: Fixes grammar and spelling mistakes',
            'Jasper/Copy.ai: Writes marketing copy and social media posts',
            'Notion AI: Helps with notes and documents',
            'When to use: Emails, reports, blog posts, social media'
        ],
        points_mm: [
            'Grammarly: သဒ္ဒါနှင့် စာလုံးပေါင်း အမှားများကို ပြင်ဆင်ပေးသည်',
            'Jasper/Copy.ai: ဈေးကွက်ရှာဖွေရေး စာသားများနှင့် ဆိုရှယ်မီဒီယာ ပို့စ်များ ရေးပေးသည်',
            'Notion AI: မှတ်စုများနှင့် စာရွက်စာတမ်းများအတွက် ကူညီပေးသည်',
            'ဘယ်အချိန်သုံးမလဲ: အီးမေးလ်များ၊ အစီရင်ခံစာများ၊ ဘလော့ဂ်ပို့စ်များ၊ ဆိုရှယ်မီဒီယာ'
        ]
    },

    // ========================================
    // AI TOOLS & PLATFORMS
    // ========================================
    {
        id: 11,
        category: 'tools',
        title: 'What is an AI IDE?',
        title_mm: 'AI IDE ဆိုတာ ဘာလဲ?',
        description: 'AI-powered coding environments for developers.',
        description_mm: 'Developer များအတွက် AI စွမ်းအားသုံး ကုဒ်ရေးသည့် ပတ်ဝန်းကျင်များ။',
        points: [
            'IDE means: Integrated Development Environment (a place to write code)',
            'AI IDE: A coding tool with AI assistant built-in',
            'Examples: GitHub Copilot, Cursor, Replit AI, Antigravity',
            'What it does: Suggests code, finds bugs, explains code, writes functions'
        ],
        points_mm: [
            'IDE ဆိုသည်မှာ: Integrated Development Environment (ကုဒ်ရေးသားသော နေရာ)',
            'AI IDE: AI လက်ထောက် ထည့်သွင်းထားသော ကုဒ်ရေးကိရိယာ',
            'ဥပမာများ: GitHub Copilot၊ Cursor၊ Replit AI၊ Antigravity',
            'ဘာလုပ်ပေးလဲ: ကုဒ်များ အကြံပြုခြင်း၊ အမှားရှာခြင်း၊ ကုဒ်ရှင်းပြခြင်း၊ လုပ်ဆောင်ချက်များ ရေးပေးခြင်း'
        ]
    },
    {
        id: 12,
        category: 'tools',
        title: 'Popular AI Chatbots',
        title_mm: 'လူကြိုက်များသော AI Chatbot များ',
        description: 'Comparison of major AI chat tools.',
        description_mm: 'အဓိက AI စကားပြောကိရိယာများ နှိုင်းယှဉ်ချက်။',
        points: [
            'ChatGPT: Most popular, great for general tasks, $20/month for GPT-4',
            'Claude: Better at long conversations, good for writing',
            'Google Gemini: Free, integrates with Google services',
            'Microsoft Copilot: Free, built into Windows and Edge browser'
        ],
        points_mm: [
            'ChatGPT: လူကြိုက်အများဆုံး၊ အထွေထွေလုပ်ငန်းများအတွက် ကောင်းမွန်၊ GPT-4 အတွက် $20/လ',
            'Claude: ရှည်လျားသော စကားပြောဆိုမှုများတွင် ပိုကောင်း၊ စာရေးသားရာတွင် ကောင်းမွန်',
            'Google Gemini: အခမဲ့၊ Google ဝန်ဆောင်မှုများနှင့် ချိတ်ဆက်ထား',
            'Microsoft Copilot: အခမဲ့၊ Windows နှင့် Edge browser တွင် ထည့်သွင်းထား'
        ]
    },
    {
        id: 13,
        category: 'tools',
        title: 'AI for Productivity',
        title_mm: 'ကုန်ထုတ်စွမ်းအားအတွက် AI',
        description: 'AI tools to help you work faster.',
        description_mm: 'သင့်အား ပိုမိုမြန်ဆန်စွာ အလုပ်လုပ်နိုင်ရန် ကူညီပေးသော AI ကိရိယာများ။',
        points: [
            'Notion AI: Smart notes and documents ($10/month)',
            'Otter.ai: Transcribes meetings automatically',
            'Superhuman: AI email assistant ($30/month)',
            'Reclaim.ai: AI calendar that schedules your day'
        ],
        points_mm: [
            'Notion AI: စမတ် မှတ်စုများနှင့် စာရွက်စာတမ်းများ ($10/လ)',
            'Otter.ai: အစည်းအဝေးများကို အလိုအလျောက် စာမှတ်တမ်းတင်ပေးသည်',
            'Superhuman: AI အီးမေးလ်လက်ထောက် ($30/လ)',
            'Reclaim.ai: သင့်တစ်နေ့တာကို စီစဉ်ပေးသော AI ပြက္ခဒိန်'
        ]
    },
    {
        id: 14,
        category: 'tools',
        title: 'AI for Creative Work',
        title_mm: 'ဖန်တီးမှုလုပ်ငန်းအတွက် AI',
        description: 'Tools for designers and creators.',
        description_mm: 'ဒီဇိုင်နာများနှင့် ဖန်တီးသူများအတွက် ကိရိယာများ။',
        points: [
            'Canva AI: Design graphics with AI help',
            'Runway ML: AI video editing and effects',
            'Adobe Firefly: AI image generation in Photoshop',
            'Descript: Edit videos by editing text transcripts'
        ],
        points_mm: [
            'Canva AI: AI အကူအညီဖြင့် ဂရပ်ဖစ်ဒီဇိုင်းဆွဲခြင်း',
            'Runway ML: AI ဗီဒီယို တည်းဖြတ်ခြင်းနှင့် အထူးပြုလုပ်ချက်များ',
            'Adobe Firefly: Photoshop တွင် AI ပုံထုတ်လုပ်ခြင်း',
            'Descript: စာသားမှတ်တမ်းများကို ပြင်ဆင်ခြင်းဖြင့် ဗီဒီယိုများကို တည်းဖြတ်ခြင်း'
        ]
    },
    {
        id: 15,
        category: 'tools',
        title: 'Free AI Tools',
        title_mm: 'အခမဲ့ AI ကိရိယာများ',
        description: 'Great AI tools you can use for free.',
        description_mm: 'အခမဲ့ အသုံးပြုနိုင်သော အကောင်းဆုံး AI ကိရိယာများ။',
        points: [
            'ChatGPT Free: Limited but still very useful',
            'Google Gemini: Completely free AI chat',
            'Microsoft Copilot: Free in Edge browser',
            'Perplexity AI: Free AI search engine',
            'Claude (limited): Free tier available'
        ],
        points_mm: [
            'ChatGPT အခမဲ့: ကန့်သတ်ချက်ရှိသော်လည်း အလွန်အသုံးဝင်',
            'Google Gemini: လုံးဝအခမဲ့ AI chat',
            'Microsoft Copilot: Edge browser တွင် အခမဲ့',
            'Perplexity AI: အခမဲ့ AI ရှာဖွေရေး အင်ဂျင်',
            'Claude (ကန့်သတ်): အခမဲ့ အသုံးပြုခွင့် ရနိုင်'
        ]
    },

    // ========================================
    // LIMITS & RESTRICTIONS
    // ========================================
    {
        id: 16,
        category: 'limits',
        title: 'Token Limits',
        title_mm: 'Token ကန့်သတ်ချက်များ',
        description: 'Understanding usage limits in AI tools.',
        description_mm: 'AI ကိရိယာများတွင် အသုံးပြုမှု ကန့်သတ်ချက်များကို နားလည်ခြင်း။',
        points: [
            'What it means: How much text you can send/receive in one conversation',
            'Typical limits: Free ChatGPT: ~4,000 tokens, Paid: ~8,000-128,000 tokens',
            'In practice: 4,000 tokens ≈ 3,000 words or 6-7 pages',
            'What happens: If you hit the limit, start a new conversation'
        ],
        points_mm: [
            'ဘာအဓိပ္ပါယ်လဲ: စကားပြောဆိုမှုတစ်ခုတွင် စာသားမည်မျှ ပေးပို့/လက်ခံနိုင်သည်',
            'ပုံမှန် ကန့်သတ်ချက်များ: အခမဲ့ ChatGPT: ~၄,၀၀၀ tokens၊ ငွေပေး: ~၈,၀၀၀-၁၂၈,၀၀၀ tokens',
            'လက်တွေ့တွင်: ၄,၀၀၀ tokens ≈ ၃,၀၀၀ စကားလုံး သို့မဟုတ် ၆-၇ စာမျက်နှာ',
            'ဘာဖြစ်မလဲ: ကန့်သတ်ချက်ပြည့်သွားပါက၊ စကားပြောဆိုမှုအသစ် စတင်ပါ'
        ]
    },
    {
        id: 17,
        category: 'limits',
        title: 'Rate Limits',
        title_mm: 'နှုန်း ကန့်သတ်ချက်များ',
        description: 'How many times you can use AI in a time period.',
        description_mm: 'အချိန်ကာလတစ်ခုအတွင်း AI ကို မည်မျှအကြိမ် အသုံးပြုနိုင်သည်။',
        points: [
            'What it means: Maximum number of requests per hour/day',
            'Example: Free ChatGPT: ~50 messages per 3 hours',
            'Why it exists: Prevents abuse and keeps servers running smoothly',
            'Solution: Wait a bit, or upgrade to paid plan for higher limits'
        ],
        points_mm: [
            'ဘာအဓိပ္ပါယ်လဲ: တစ်နာရီ/တစ်ရက်လျှင် အများဆုံး တောင်းဆိုနိုင်သည့် အကြိမ်အရေအတွက်',
            'ဥပမာ: အခမဲ့ ChatGPT: ၃ နာရီလျှင် မက်ဆေ့ချ် ~၅၀',
            'ဘာကြောင့်ရှိတာလဲ: အလွဲသုံးစားလုပ်မှုကို တားဆီးရန်နှင့် ဆာဗာများ ချောမွေ့စွာ လည်ပတ်နိုင်ရန်',
            'ဖြေရှင်းနည်း: ခဏစောင့်ပါ၊ သို့မဟုတ် ပိုမြင့်သော ကန့်သတ်ချက်များအတွက် ငွေပေးအစီအစဉ်သို့ အဆင့်မြှင့်ပါ'
        ]
    },
    {
        id: 18,
        category: 'limits',
        title: 'What AI Cannot Do',
        title_mm: 'AI မလုပ်နိုင်သည့် အရာများ',
        description: 'Important limitations to understand.',
        description_mm: 'နားလည်ရန် အရေးကြီးသော ကန့်သတ်ချက်များ။',
        points: [
            'No real-time info: AI doesn\'t know today\'s news (unless it has internet access)',
            'Can make mistakes: AI can confidently give wrong answers',
            'No emotions: AI doesn\'t actually feel - it simulates conversation',
            'No memory (usually): Each chat is separate unless the tool saves history',
            'Can\'t browse web: Most AI can\'t access websites (some paid versions can)'
        ],
        points_mm: [
            'အချိန်နှင့်တပြေးညီ သတင်းအချက်အလက်မရှိ: AI သည် ယနေ့ခေတ် သတင်းများကို မသိပါ (အင်တာနက် အသုံးပြုခွင့်မရှိပါက)',
            'အမှားများ လုပ်နိုင်သည်: AI သည် မှားယွင်းသော အဖြေများကို ယုံကြည်မှုရှိရှိ ပေးနိုင်သည်',
            'စိတ်ခံစားမှု မရှိပါ: AI သည် အမှန်တကယ် မခံစားတတ်ပါ - စကားပြောဆိုမှုကို တုပရုံသာဖြစ်သည်',
            'မှတ်ဉာဏ် မရှိပါ (ပုံမှန်အားဖြင့်): Tool က မှတ်တမ်းမသိမ်းဆည်းပါက စကားပြောဆိုမှု တစ်ခုစီသည် သီးခြားစီဖြစ်သည်',
            'ဝဘ်ဆိုဒ် မကြည့်နိုင်ပါ: AI အများစုသည် ဝဘ်ဆိုဒ်များကို ဝင်ရောက်ကြည့်ရှုနိုင်ခြင်း မရှိပါ (အချို့သော ငွေပေးဗားရှင်းများ ရနိုင်သည်)'
        ]
    },
    {
        id: 19,
        category: 'limits',
        title: 'Content Restrictions',
        title_mm: 'အကြောင်းအရာ ကန့်သတ်ချက်များ',
        description: 'What AI tools won\'t help with.',
        description_mm: 'AI ကိရိယာများ မကူညီပေးမည့် အရာများ။',
        points: [
            'Illegal content: Won\'t help with anything illegal',
            'Harmful content: Won\'t create violent or hateful content',
            'Personal data: Won\'t help hack or steal information',
            'Medical/Legal advice: Can give info but says "consult a professional"',
            'Copyrighted work: Won\'t reproduce full books, songs, or movies'
        ],
        points_mm: [
            'တရားမဝင် အကြောင်းအရာ: တရားမဝင်သော ကိစ္စရပ်များတွင် ကူညီမည်မဟုတ်ပါ',
            'အန္တရာယ်ရှိသော အကြောင်းအရာ: အကြမ်းဖက်မှု သို့မဟုတ် မုန်းတီးမှုဖြစ်စေသော အကြောင်းအရာများကို ဖန်တီးမည်မဟုတ်ပါ',
            'ကိုယ်ရေးကိုယ်တာ အချက်အလက်: သတင်းအချက်အလက် ခိုးယူခြင်း သို့မဟုတ် ဟက်ခ်လုပ်ခြင်းများကို ကူညီမည်မဟုတ်ပါ',
            'ဆေးဘက်ဆိုင်ရာ/ဥပဒေရေးရာ အကြံဉာဏ်: အချက်အလက်ပေးနိုင်သော်လည်း "ကျွမ်းကျင်ပညာရှင်နှင့် တိုင်ပင်ပါ" ဟု ပြောပါလိမ့်မည်',
            'မူပိုင်ခွင့်ရှိသော လက်ရာ: စာအုပ်များ၊ သီချင်းများ သို့မဟုတ် ရုပ်ရှင်များကို အပြည့်အစုံ ကူးယူမည်မဟုတ်ပါ'
        ]
    },
    {
        id: 20,
        category: 'limits',
        title: 'Accuracy Limitations',
        title_mm: 'တိကျမှု ကန့်သတ်ချက်များ',
        description: 'Why you should verify AI answers.',
        description_mm: 'AI အဖြေများကို အတည်ပြုစစ်ဆေးသင့်သည့် အကြောင်းရင်း။',
        points: [
            'Hallucinations: AI sometimes makes up fake facts confidently',
            'Outdated info: Training data has a cutoff date',
            'Bias: AI can reflect biases from its training data',
            'Best practice: Always verify important information from reliable sources',
            'Good for: Drafts, ideas, explanations - not final answers'
        ],
        points_mm: [
            'စိတ်ကူးယဉ်အမှားများ: AI သည် တစ်ခါတစ်ရံတွင် မှားယွင်းသော အချက်အလက်များကို ယုံကြည်မှုရှိရှိ လုပ်ဇာတ်ခင်းတတ်သည်',
            'ခေတ်မမီတော့သော အချက်အလက်: သင်ကြားရေးဒေတာတွင် ရက်သတ္တပတ် သို့မဟုတ် လများစွာ ကြာနိုင်သည်',
            'ဘက်လိုက်မှု: AI သည် ၎င်း၏ သင်ကြားရေးဒေတာမှ ဘက်လိုက်မှုများကို ပြန်လည်ပြသနိုင်သည်',
            'အကောင်းဆုံး လုပ်ဆောင်နည်း: အရေးကြီးသော အချက်အလက်များကို ယုံကြည်စိတ်ချရသော အရင်းအမြစ်များမှ အမြဲတမ်း အတည်ပြုပါ',
            'သင့်လျော်သောနေရာ: မူကြမ်းများ၊ အကြံဉာဏ်များ၊ ရှင်းပြချက်များ - အပြီးသတ် အဖြေများ မဟုတ်ပါ'
        ]
    },

    // ========================================
    // TIPS & TRICKS
    // ========================================
    {
        id: 21,
        category: 'tips',
        title: 'Getting Better Results',
        title_mm: 'ပိုမိုကောင်းမွန်သော ရလဒ်များ ရရှိခြင်း',
        description: 'Pro tips for using AI effectively.',
        description_mm: 'AI ကို ထိရောက်စွာ အသုံးပြုရန် ကျွမ်းကျင်သူ အကြံပြုချက်များ။',
        points: [
            'Iterate: If first answer isn\'t good, ask AI to improve it',
            'Give examples: Show AI what you want: "Like this: [example]"',
            'Set a role: "Act as a teacher" or "You\'re a professional writer"',
            'Break it down: For complex tasks, ask step-by-step',
            'Use formatting: Ask for tables, bullet points, or numbered lists'
        ],
        points_mm: [
            'ထပ်မံကြိုးစားပါ: ပထမအဖြေ မကောင်းပါက၊ ပိုကောင်းအောင်လုပ်ပေးရန် AI ကို တောင်းဆိုပါ',
            'ဥပမာပေးပါ: သင်ဘာလိုချင်သည်ကို AI အား ပြပါ: "ဒီလိုပုံစံ: [ဥပမာ]"',
            'အခန်းကဏ္ဍ သတ်မှတ်ပါ: "ဆရာတစ်ယောက်အနေနဲ့ လုပ်ဆောင်ပါ" သို့မဟုတ် "သင်သည် ကျွမ်းကျင် စာရေးဆရာဖြစ်သည်"',
            'ခွဲခြမ်းစိတ်ဖြာပါ: ရှုပ်ထွေးသော အလုပ်များအတွက်၊ အဆင့်လိုက် မေးပါ',
            'ပုံစံချပါ: ဇယားများ၊ အမှတ်စဉ်များ သို့မဟုတ် နံပါတ်စဉ်များဖြင့် တောင်းဆိုပါ'
        ]
    },
    {
        id: 22,
        category: 'tips',
        title: 'Common Use Cases',
        title_mm: 'အသုံးများသော အသုံးပြုမှုများ',
        description: 'Popular ways people use AI daily.',
        description_mm: 'လူများ နေ့စဉ် AI ကို အသုံးပြုသည့် လူကြိုက်များသော နည်းလမ်းများ။',
        points: [
            'Writing emails: Draft professional emails quickly',
            'Summarizing: Condense long articles or documents',
            'Learning: Explain complex topics in simple terms',
            'Brainstorming: Generate ideas for projects or content',
            'Proofreading: Check grammar and improve writing',
            'Coding help: Debug code or learn programming'
        ],
        points_mm: [
            'အီးမေးလ်ရေးခြင်း: ပရော်ဖက်ရှင်နယ် အီးမေးလ်များကို လျင်မြန်စွာ မူကြမ်းရေးဆွဲပါ',
            'အနှစ်ချုပ်ခြင်း: ရှည်လျားသော ဆောင်းပါးများ သို့မဟုတ် စာရွက်စာတမ်းများကို အကျဉ်းချုံ့ပါ',
            'လေ့လာသင်ယူခြင်း: ရှုပ်ထွေးသော အကြောင်းအရာများကို ရိုးရှင်းသော အသုံးအနှုန်းများဖြင့် ရှင်းပြပါ',
            'အကြံဉာဏ်ထုတ်ခြင်း: ပရောဂျက်များ သို့မဟုတ် အကြောင်းအရာများအတွက် အကြံဉာဏ်များ ထုတ်ပါ',
            'စာဖတ်စစ်ဆေးခြင်း: သဒ္ဒါစစ်ဆေးပြီး ရေးသားမှုကို တိုးတက်ကောင်းမွန်အောင် ပြုလုပ်ပါ',
            'ကုဒ်အကူအညီ: ကုဒ်အမှားရှာပါ သို့မဟုတ် ပရိုဂရမ်ရေးဆွဲခြင်းကို လေ့လာပါ'
        ]
    },
    {
        id: 23,
        category: 'tips',
        title: 'Saving Money on AI',
        title_mm: 'AI တွင် ငွေချွေတာခြင်း',
        description: 'How to use AI without breaking the bank.',
        description_mm: 'ငွေများစွာ မကုန်ဘဲ AI အသုံးပြုနည်း။',
        points: [
            'Start free: Try free versions before paying',
            'Use multiple tools: Combine free tiers of different tools',
            'Be efficient: Write clear prompts to avoid wasting tokens',
            'Share accounts: Some plans allow team sharing',
            'Watch for deals: Many tools offer student or annual discounts'
        ],
        points_mm: [
            'အခမဲ့စတင်ပါ: ငွေမပေးချေမီ အခမဲ့ဗားရှင်းများကို စမ်းသုံးကြည့်ပါ',
            'ကိရိယာမျိုးစုံသုံးပါ: မတူညီသော ကိရိယာများ၏ အခမဲ့အဆင့်များကို ပေါင်းစပ်အသုံးပြုပါ',
            'ထိရောက်မှုရှိပါစေ: Token များ ဖြုန်းတီးခြင်းမှ ရှောင်ရှားရန် ရှင်းလင်းသော Prompt များ ရေးပါ',
            'အကောင့်မျှဝေပါ: အချို့သော အစီအစဉ်များသည် အဖွဲ့လိုက် မျှဝေသုံးစွဲခွင့်ပြုသည်',
            'လျှော့စျေးများ ရှာဖွေပါ: ကိရိယာများစွာသည် ကျောင်းသား သို့မဟုတ် နှစ်စဉ် လျှော့စျေးများ ပေးကြသည်'
        ]
    },
    {
        id: 24,
        category: 'tips',
        title: 'Privacy & Security',
        title_mm: 'ကိုယ်ရေးကိုယ်တာနှင့် လုံခြုံရေး',
        description: 'Staying safe while using AI tools.',
        description_mm: 'AI ကိရိယာများ အသုံးပြုစဉ် ဘေးကင်းလုံခြုံစွာ နေထိုင်ခြင်း။',
        points: [
            'Don\'t share secrets: Assume your chats might be reviewed',
            'No passwords: Never give AI your passwords or sensitive data',
            'Check privacy settings: Opt out of data training if available',
            'Use incognito mode: Some tools offer private/temporary chats',
            'Read terms: Know how your data is used and stored'
        ],
        points_mm: [
            'လျှို့ဝှက်ချက်များ မမျှဝေပါနှင့်: သင့်စကားပြောဆိုမှုများကို ပြန်လည်သုံးသပ်နိုင်သည်ဟု ယူဆပါ',
            'စကားဝှက်များ မပေးပါနှင့်: သင့်စကားဝှက်များ သို့မဟုတ် အရေးကြီးသော ဒေတာများကို AI အား ဘယ်တော့မှ မပေးပါနှင့်',
            'လုံခြုံရေး ဆက်တင်များ စစ်ဆေးပါ: ရနိုင်လျှင် ဒေတာသင်ကြားခြင်းမှ ထွက်ပါ',
            'Incognito mode သုံးပါ: အချို့ကိရိယာများသည် သီးသန့်/ယာယီ စကားပြောခန်းများ ပေးသည်',
            'စည်းကမ်းချက်များ ဖတ်ပါ: သင့်ဒေတာကို မည်သို့အသုံးပြုပြီး သိမ်းဆည်းသည်ကို သိရှိပါစေ'
        ]
    },
    {
        id: 25,
        category: 'tips',
        title: 'Keyboard Shortcuts',
        title_mm: 'ကီးဘုတ် အတိုကောက်များ',
        description: 'Quick shortcuts for popular AI tools.',
        description_mm: 'လူကြိုက်များသော AI ကိရိယာများအတွက် မြန်ဆန်သော အတိုကောက်များ။',
        points: [
            'ChatGPT: Cmd/Ctrl + K = New chat, Cmd/Ctrl + Shift + ; = Copy last response',
            'Most AI chats: Enter = Send message, Shift + Enter = New line',
            'This cheat sheet: / = Focus search, Esc = Clear search, T = Toggle theme',
            'Tip: Look for keyboard icon in tools for more shortcuts'
        ],
        points_mm: [
            'ChatGPT: Cmd/Ctrl + K = Chat အသစ်, Cmd/Ctrl + Shift + ; = နောက်ဆုံးအဖြေ ကူးယူ',
            'AI chats အများစု: Enter = မက်ဆေ့ချ်ပို့, Shift + Enter = စာကြောင်းသစ်',
            'ဤ Cheat Sheet: / = ရှာဖွေရန်, Esc = ရှင်းလင်းရန်, T = Theme ပြောင်းရန်',
            'အကြံပြုချက်: အတိုကောက်များ ပိုမိုသိရှိရန် ကိရိယာများရှိ ကီးဘုတ်ပုံကို ရှာပါ'
        ]
    },

    // ========================================
    // UNDERSTANDING AI
    // ========================================
    {
        id: 26,
        category: 'understanding',
        title: 'How AI Actually Works',
        title_mm: 'AI သည် အမှန်တကယ် မည်သို့ လုပ်ဆောင်သည်',
        description: 'Simple explanation of AI technology.',
        description_mm: 'AI နည်းပညာကို ရိုးရှင်းစွာ ရှင်းပြချက်။',
        points: [
            'Step 1: AI reads millions of examples (books, websites, conversations)',
            'Step 2: It finds patterns in how words and ideas connect',
            'Step 3: When you ask a question, it predicts the best answer based on patterns',
            'Not magic: It\'s advanced pattern matching, not true understanding',
            'Like autocomplete: Similar to your phone predicting your next word, but much smarter'
        ],
        points_mm: [
            'အဆင့် ၁: AI သည် ဥပမာ သန်းပေါင်းများစွာ (စာအုပ်များ၊ ဝဘ်ဆိုဒ်များ၊ စကားပြောဆိုမှုများ) ကို ဖတ်ရှုသည်',
            'အဆင့် ၂: စကားလုံးများနှင့် စိတ်ကူးများ မည်သို့ ချိတ်ဆက်နေသည်ကို ပုံစံများ ရှာဖွေသည်',
            'အဆင့် ၃: သင်မေးခွန်းမေးသောအခါ၊ ပုံစံများအပေါ် အခြေခံ၍ အကောင်းဆုံးအဖြေကို ခန့်မှန်းပေးသည်',
            'မျက်လှည့်မဟုတ်ပါ: ၎င်းသည် အဆင့်မြင့် ပုံစံတူညီမှု ရှာဖွေခြင်းသာဖြစ်ပြီး၊ အမှန်တကယ် နားလည်ခြင်းမဟုတ်ပါ',
            'Autocomplete ကဲ့သို့: သင့်ဖုန်းက နောက်လာမည့် စကားလုံးကို ခန့်မှန်းသည်နှင့် တူသော်လည်း ပို၍ ဉာဏ်ကောင်းသည်'
        ]
    },
    {
        id: 27,
        category: 'understanding',
        title: 'AI vs Human Intelligence',
        title_mm: 'AI နှင့် လူသား ဉာဏ်ရည်',
        description: 'Key differences between AI and humans.',
        description_mm: 'AI နှင့် လူသားတို့ကြား အဓိက ကွာခြားချက်များ။',
        points: [
            'AI is faster: Can process huge amounts of text instantly',
            'AI has no feelings: Doesn\'t get tired, bored, or emotional',
            'Humans are creative: True creativity and intuition are still human strengths',
            'AI lacks context: Doesn\'t understand real-world nuances like humans',
            'Best together: AI assists, humans decide and create'
        ],
        points_mm: [
            'AI က ပိုမြန်သည်: စာသား ပမာဏ အများအပြားကို ချက်ချင်း လုပ်ဆောင်နိုင်သည်',
            'AI မှာ ခံစားချက်မရှိပါ: မောပန်းခြင်း၊ ပျင်းရိခြင်း သို့မဟုတ် စိတ်လှုပ်ရှားခြင်း မရှိပါ',
            'လူသားများက ဖန်တီးနိုင်စွမ်းရှိသည်: စစ်မှန်သော ဖန်တီးနိုင်စွမ်းနှင့် အလိုလိုသိစိတ်သည် လူသားတို့၏ အားသာချက်များဖြစ်သည်',
            'AI တွင် နောက်ခံအကြောင်းအရာ မရှိပါ: လူသားများကဲ့သို့ လက်တွေ့ဘဝ အတိမ်အနက်များကို နားမလည်ပါ',
            'အတူတကွ အကောင်းဆုံး: AI က ကူညီသည်၊ လူသားများက ဆုံးဖြတ်ပြီး ဖန်တီးသည်'
        ]
    },
    {
        id: 28,
        category: 'understanding',
        title: 'Common AI Myths',
        title_mm: 'အသုံးများသော AI မှားယွင်းသော ယူဆချက်များ',
        description: 'Separating fact from fiction.',
        description_mm: 'အမှန်တရားနှင့် စိတ်ကူးယဉ်ကို ခွဲခြားခြင်း။',
        points: [
            'Myth: "AI will take all jobs" - Reality: AI changes jobs, creates new ones',
            'Myth: "AI is always right" - Reality: AI makes mistakes regularly',
            'Myth: "AI is conscious" - Reality: AI simulates conversation, doesn\'t think',
            'Myth: "AI knows everything" - Reality: Limited to training data',
            'Myth: "AI is too complex to use" - Reality: Modern AI is user-friendly'
        ],
        points_mm: [
            'အယူအဆမှား: "AI က အလုပ်အားလုံးကို ယူသွားလိမ့်မယ်" - လက်တွေ့: AI က အလုပ်များကို ပြောင်းလဲစေပြီး အသစ်များ ဖန်တီးပေးသည်',
            'အယူအဆမှား: "AI က အမြဲမှန်တယ်" - လက်တွေ့: AI သည် ပုံမှန် အမှားများ ပြုလုပ်တတ်သည်',
            'အယူအဆမှား: "AI မှာ သိစိတ်ရှိတယ်" - လက်တွေ့: AI သည် စကားပြောဆိုမှုကို တုပရုံသာဖြစ်ပြီး မတွေးခေါ်တတ်ပါ',
            'အယူအဆမှား: "AI က အရာအားလုံး သိတယ်" - လက်တွေ့: သင်ကြားရေး ဒေတာသာ ကန့်သတ်ထားသည်',
            'အယူအဆမှား: "AI က သုံးရတာ အရမ်းခက်တယ်" - လက်တွေ့: ခေတ်မီ AI သည် အသုံးပြုရ လွယ်ကူသည်'
        ]
    },
    {
        id: 29,
        category: 'understanding',
        title: 'Types of AI',
        title_mm: 'AI အမျိုးအစားများ',
        description: 'Different categories of AI you\'ll encounter.',
        description_mm: 'သင် ကြုံတွေ့ရမည့် AI အမျိုးအစား အမျိုးမျိုး။',
        points: [
            'Chatbots: Text conversation AI (ChatGPT, Claude)',
            'Image AI: Creates or edits images (DALL-E, Midjourney)',
            'Voice AI: Understands and speaks (Siri, Alexa)',
            'Recommendation AI: Suggests content (Netflix, Spotify)',
            'Recognition AI: Identifies faces, objects, text (Face ID, Google Lens)'
        ],
        points_mm: [
            'Chatbots: စာဖြင့် စကားပြောသော AI (ChatGPT၊ Claude)',
            'Image AI: ပုံများ ဖန်တီးခြင်း သို့မဟုတ် ပြင်ဆင်ခြင်း (DALL-E၊ Midjourney)',
            'Voice AI: နားလည်ပြီး စကားပြောခြင်း (Siri၊ Alexa)',
            'Recommendation AI: အကြောင်းအရာများ အကြံပြုခြင်း (Netflix၊ Spotify)',
            'Recognition AI: မျက်နှာများ၊ အရာဝတ္ထုများ၊ စာသားများကို ခွဲခြားခြင်း (Face ID၊ Google Lens)'
        ]
    },
    {
        id: 30,
        category: 'understanding',
        title: 'AI Ethics',
        title_mm: 'AI ကျင့်ဝတ်',
        description: 'Important ethical considerations.',
        description_mm: 'အရေးကြီးသော ကျင့်ဝတ် ထည့်သွင်းစဉ်းစားရမည့် အချက်များ။',
        points: [
            'Bias: AI can perpetuate stereotypes from training data',
            'Job impact: Some jobs change or disappear, new ones emerge',
            'Misinformation: AI can create convincing fake content',
            'Privacy: Your conversations may be used to improve AI',
            'Responsibility: You\'re responsible for how you use AI output'
        ],
        points_mm: [
            'ဘက်လိုက်မှု: AI သည် သင်ကြားရေး ဒေတာမှ ပုံသေကားချပ်များကို ဆက်လက်ထိန်းသိမ်းထားနိုင်သည်',
            'အလုပ်အကိုင် သက်ရောက်မှု: အချို့အလုပ်များ ပြောင်းလဲခြင်း သို့မဟုတ် ပျောက်ကွယ်ခြင်း၊ အသစ်များ ပေါ်ထွက်လာခြင်း',
            'သတင်းမှား: AI သည် ယုံကြည်လောက်သော အတုအယောင် အကြောင်းအရာများ ဖန်တီးနိုင်သည်',
            'ကိုယ်ရေးကိုယ်တာ: AI ကို တိုးတက်စေရန် သင့်စကားပြောဆိုမှုများကို အသုံးပြုနိုင်သည်',
            'တာဝန်ယူမှု: AI ရလဒ်ကို သင် မည်သို့ အသုံးပြုသည်မှာ သင့်တာဝန်သာ ဖြစ်သည်'
        ]
    },

    // ========================================
    // GETTING STARTED
    // ========================================
    {
        id: 31,
        category: 'getting-started',
        title: 'Your First AI Conversation',
        title_mm: 'သင်၏ ပထမဆုံး AI စကားပြောဆိုမှု',
        description: 'Step-by-step guide to start using AI.',
        description_mm: 'AI အသုံးပြုရန် စတင်ရန် အဆင့်ဆင့် လမ်းညွှန်ချက်။',
        points: [
            'Step 1: Go to chat.openai.com or gemini.google.com',
            'Step 2: Create a free account with your email',
            'Step 3: Type a simple question like "Explain AI in simple terms"',
            'Step 4: Read the response and ask follow-up questions',
            'Step 5: Experiment with different types of requests'
        ],
        points_mm: [
            'အဆင့် ၁: chat.openai.com သို့မဟုတ် gemini.google.com သို့သွားပါ',
            'အဆင့် ၂: သင့်အီးမေးလ်ဖြင့် အခမဲ့အကောင့် ဖွင့်ပါ',
            'အဆင့် ၃: "AI အကြောင်း ရိုးရှင်းစွာ ရှင်းပြပါ" ကဲ့သို့သော ရိုးရှင်းသော မေးခွန်းတစ်ခု ရိုက်ထည့်ပါ',
            'အဆင့် ၄: အဖြေကို ဖတ်ပြီး ဆက်စပ်မေးခွန်းများ မေးပါ',
            'အဆင့် ၅: မတူညီသော တောင်းဆိုမှု ပုံစံများဖြင့် စမ်းသပ်ကြည့်ပါ'
        ]
    },
    {
        id: 32,
        category: 'getting-started',
        title: 'Choosing the Right AI Tool',
        title_mm: 'မှန်ကန်သော AI ကိရိယာ ရွေးချယ်ခြင်း',
        description: 'How to pick the best AI for your needs.',
        description_mm: 'သင့်လိုအပ်ချက်အတွက် အကောင်းဆုံး AI ကို ရွေးချယ်နည်း။',
        points: [
            'For writing: ChatGPT, Claude, or Jasper',
            'For images: DALL-E, Midjourney, or Adobe Firefly',
            'For research: Perplexity AI or Google Gemini',
            'For coding: GitHub Copilot or Cursor',
            'For general use: Start with free ChatGPT or Google Gemini'
        ],
        points_mm: [
            'စာရေးရန်: ChatGPT၊ Claude၊ သို့မဟုတ် Jasper',
            'ပုံများအတွက်: DALL-E၊ Midjourney၊ သို့မဟုတ် Adobe Firefly',
            'သုတေသနပြုရန်: Perplexity AI သို့မဟုတ် Google Gemini',
            'ကုဒ်ရေးရန်: GitHub Copilot သို့မဟုတ် Cursor',
            'အထွေထွေအသုံးပြုရန်: အခမဲ့ ChatGPT သို့မဟုတ် Google Gemini ဖြင့် စတင်ပါ'
        ]
    },
    {
        id: 33,
        category: 'getting-started',
        title: 'Free vs Paid AI',
        title_mm: 'အခမဲ့ နှင့် ငွေပေးရသော AI',
        description: 'Understanding when to upgrade.',
        description_mm: 'မည်သည့်အချိန်တွင် အဆင့်မြှင့်တင်ရမည်ကို နားလည်ခြင်း။',
        points: [
            'Free is enough if: You use AI occasionally, basic tasks only',
            'Upgrade if: You use AI daily, need faster responses, want advanced features',
            'Typical cost: $10-30/month for premium AI tools',
            'Try before buying: Use free version for a month first',
            'Business use: Consider paid plans for commercial projects'
        ],
        points_mm: [
            'အခမဲ့က လုံလောက်သည်: သင်က AI ကို တစ်ခါတစ်ရံမှသာ သုံးပြီး၊ အခြေခံ အလုပ်များသာ လုပ်လျှင်',
            'အဆင့်မြှင့်သင့်သည်: နေ့စဉ်သုံးလျှင်၊ ပိုမြန်သော တုံ့ပြန်မှုလိုလျှင်၊ အဆင့်မြင့် အင်္ဂါရပ်များ လိုချင်လျှင်',
            'ပုံမှန် ကုန်ကျစရိတ်: Premium AI ကိရိယာများအတွက် $10-30/လ',
            'မဝယ်မီ စမ်းသုံးပါ: အခမဲ့ဗားရှင်းကို တစ်လခန့် အရင်သုံးကြည့်ပါ',
            'စီးပွားရေး အသုံးပြုမှု: စီးပွားဖြစ် ပရောဂျက်များအတွက် ငွေပေး အစီအစဉ်များကို စဉ်းစားပါ'
        ]
    },
    {
        id: 34,
        category: 'getting-started',
        title: 'Learning Resources',
        title_mm: 'သင်ယူမှု အရင်းမြစ်များ',
        description: 'Where to learn more about AI.',
        description_mm: 'AI အကြောင်း ပိုမိုသင်ယူရန် နေရာများ။',
        points: [
            'YouTube: Search "AI for beginners" for video tutorials',
            'Official docs: Each AI tool has help guides and tutorials',
            'Reddit: r/ChatGPT and r/artificial for community tips',
            'Practice: Best way to learn is by using AI daily',
            'This cheat sheet: Bookmark for quick reference!'
        ],
        points_mm: [
            'YouTube: ဗီဒီယို သင်ခန်းစာများအတွက် "AI for beginners" ဟု ရှာပါ',
            'တရားဝင် စာရွက်စာတမ်းများ: AI ကိရိယာတိုင်းတွင် အကူအညီ လမ်းညွှန်များနှင့် သင်ခန်းစာများ ရှိသည်',
            'Reddit: အသိုင်းအဝိုင်း အကြံပြုချက်များအတွက် r/ChatGPT နှင့် r/artificial',
            'လေ့ကျင့်ပါ: အကောင်းဆုံး သင်ယူနည်းမှာ AI ကို နေ့စဉ် အသုံးပြုခြင်းဖြစ်သည်',
            'ဤ Cheat Sheet: အမြန် ကိုးကားရန်အတွက် မှတ်သားထားပါ!'
        ]
    },
    {
        id: 35,
        category: 'getting-started',
        title: 'Troubleshooting Common Issues',
        title_mm: 'အသုံးများသော ပြဿနာများ ဖြေရှင်းခြင်း',
        description: 'Solutions to frequent problems.',
        description_mm: 'မကြာခဏ ဖြစ်ပေါ်သော ပြဿနာများအတွက် ဖြေရှင်းချက်များ။',
        points: [
            '"AI is busy": High traffic - wait a few minutes or try off-peak hours',
            '"Hit rate limit": Used too many requests - wait or upgrade',
            '"Bad response": Rephrase your question more clearly',
            '"Can\'t access": Check if service is down (check status page)',
            '"Forgot password": Use password reset - most tools use email login'
        ],
        points_mm: [
            '"AI is busy": အသုံးပြုသူများလွန်းသည် - မိနစ်အနည်းငယ် စောင့်ပါ သို့မဟုတ် လူနည်းချိန်တွင် စမ်းကြည့်ပါ',
            '"Hit rate limit": အကြိမ်များစွာ သုံးမိသည် - စောင့်ပါ သို့မဟုတ် အဆင့်မြှင့်ပါ',
            '"Bad response": သင့်မေးခွန်းကို ပိုမိုရှင်းလင်းအောင် ပြန်မေးပါ',
            '"Can\'t access": ဝန်ဆောင်မှု ရပ်တန့်နေခြင်း ရှိမရှိ စစ်ဆေးပါ (status page ကိုကြည့်ပါ)',
            '"Forgot password": စကားဝှက် ပြန်လည်သတ်မှတ်ပါ - ကိရိယာအများစုသည် အီးမေးလ်ဖြင့် ဝင်ရောက်သည်'
        ]
    },

    // ========================================
    // ADVANCED TIPS
    // ========================================
    {
        id: 36,
        category: 'advanced',
        title: 'Prompt Engineering Basics',
        title_mm: 'Prompt Engineering အခြေခံများ',
        description: 'Crafting prompts like a pro.',
        description_mm: 'ကျွမ်းကျင်သူတစ်ဦးကဲ့သို့ Prompt များ ရေးဆွဲခြင်း။',
        points: [
            'Use templates: "Act as [role]. Create [output] about [topic] in [style]"',
            'Provide constraints: "In 200 words" or "Using simple language"',
            'Give context: "I\'m a small business owner looking to..."',
            'Request format: "Give me a table with 3 columns"',
            'Iterate: "Make it more casual" or "Add more details about X"'
        ],
        points_mm: [
            'ပုံစံခွက်များသုံးပါ: "[အခန်းကဏ္ဍ] အနေဖြင့် လုပ်ဆောင်ပါ။ [ခေါင်းစဉ်] အကြောင်း [ပုံစံ] ဖြင့် [ရလဒ်] ဖန်တီးပါ"',
            'ကန့်သတ်ချက်များပေးပါ: "စကားလုံး ၂၀၀ အတွင်း" သို့မဟုတ် "ရိုးရှင်းသော ဘာသာစကားကို သုံးပါ"',
            'နောက်ခံအကြောင်းအရာပေးပါ: "ကျွန်ုပ်သည် အသေးစား စီးပွားရေးလုပ်ငန်းရှင်တစ်ဦးဖြစ်ပြီး..."',
            'ပုံစံတောင်းဆိုပါ: "ကော်လံ ၃ ခုပါသော ဇယားတစ်ခု ပေးပါ"',
            'ထပ်မံမွမ်းမံပါ: "ပို၍ ပေါ့ပေါ့ပါးပါးဖြစ်အောင် လုပ်ပါ" သို့မဟုတ် "X အကြောင်း အသေးစိတ် ထပ်ထည့်ပါ"'
        ]
    },
    {
        id: 37,
        category: 'advanced',
        title: 'Using AI for Business',
        title_mm: 'စီးပွားရေးအတွက် AI အသုံးပြုခြင်း',
        description: 'Practical business applications.',
        description_mm: 'လက်တွေ့ စီးပွားရေး အသုံးချမှုများ။',
        points: [
            'Customer service: Draft email responses, FAQs',
            'Marketing: Social media posts, ad copy, blog ideas',
            'Analysis: Summarize reports, extract insights from data',
            'Training: Create training materials, onboarding docs',
            'Productivity: Meeting summaries, task lists, scheduling'
        ],
        points_mm: [
            'Customer service: အီးမေးလ် အကြောင်းပြန်စာများ၊ မေးလေ့ရှိသော မေခွန်းများ (FAQs) မူကြမ်းရေးပါ',
            'Marketing: ဆိုရှယ်မီဒီယာ ပို့စ်များ၊ ကြော်ငြာစာသား၊ ဘလော့ဂ် အကြံဉာဏ်များ',
            'Analysis: အစီရင်ခံစာများ အနှစ်ချုပ်ခြင်း၊ ဒေတာမှ ထိုးထွင်းသိမြင်မှုများ ထုတ်ယူခြင်း',
            'Training: သင်တန်း ပစ္စည်းများ၊ ဝန်ထမ်းသစ် ကြိုဆိုရေး စာရွက်စာတမ်းများ ဖန်တီးခြင်း',
            'Productivity: အစည်းအဝေး အနှစ်ချုပ်များ၊ လုပ်ဆောင်ရမည့် စာရင်းများ၊ အချိန်ဇယားဆွဲခြင်း'
        ]
    },
    {
        id: 38,
        category: 'advanced',
        title: 'AI Automation',
        title_mm: 'AI အလိုအလျောက် လုပ်ဆောင်ခြင်း',
        description: 'Connecting AI to other tools.',
        description_mm: 'AI ကို အခြား ကိရိယာများနှင့် ချိတ်ဆက်ခြင်း။',
        points: [
            'Zapier AI: Automate workflows with AI actions',
            'Make (Integromat): Connect AI to 1000+ apps',
            'API access: Advanced users can integrate AI into custom apps',
            'Browser extensions: AI helpers for Gmail, LinkedIn, etc.',
            'Example: Auto-summarize emails and add to your notes app'
        ],
        points_mm: [
            'Zapier AI: AI လုပ်ဆောင်ချက်များဖြင့် လုပ်ငန်းစဉ်များကို အလိုအလျောက် လုပ်ဆောင်ပါ',
            'Make (Integromat): AI ကို အက်ပ် ၁၀၀၀+ နှင့် ချိတ်ဆက်ပါ',
            'API access: အဆင့်မြင့် အသုံးပြုသူများသည် AI ကို စိတ်ကြိုက် အက်ပ်များတွင် ထည့်သွင်းနိုင်သည်',
            'Browser extensions: Gmail၊ LinkedIn စသည်တို့အတွက် AI အကူအညီများ',
            'ဥပမာ: အီးမေးလ်များကို အလိုအလျောက် အနှစ်ချုပ်ပြီး သင့်မှတ်စုအက်ပ်တွင် ထည့်ပါ'
        ]
    },
    {
        id: 39,
        category: 'advanced',
        title: 'Multimodal AI',
        title_mm: 'Multimodal AI',
        description: 'AI that works with images, voice, and text.',
        description_mm: 'ပုံများ၊ အသံ နှင့် စာသားတို့ဖြင့် လုပ်ဆောင်သော AI။',
        points: [
            'GPT-4 Vision: Upload images and ask questions about them',
            'Voice mode: Talk to AI instead of typing (ChatGPT app)',
            'Image + Text: "Make this image more colorful" with uploaded photo',
            'Document analysis: Upload PDFs and ask questions about content',
            'Coming soon: Video understanding and generation'
        ],
        points_mm: [
            'GPT-4 Vision: ပုံများ တင်ပြီး ၎င်းတို့အကြောင်း မေးခွန်းများ မေးပါ',
            'Voice mode: စာရိုက်မည့်အစား AI နှင့် စကားပြောပါ (ChatGPT အက်ပ်)',
            'Image + Text: တင်ထားသော ဓာတ်ပုံဖြင့် "ဒီပုံကို အရောင်ပိုစုံအောင်လုပ်ပါ"',
            'Document analysis: PDF များ တင်ပြီး အကြောင်းအရာအကြောင်း မေးခွန်းများ မေးပါ',
            'မကြာမီလာမည်: ဗီဒီယို နားလည်မှုနှင့် ဖန်တီးမှု'
        ]
    },
    {
        id: 40,
        category: 'advanced',
        title: 'Future of AI',
        title_mm: 'AI ၏ အနာဂတ်',
        description: 'What\'s coming next in AI technology.',
        description_mm: 'AI နည်းပညာတွင် နောက်ထပ် ဘာများ လာမည်နည်း။',
        points: [
            'Better reasoning: AI will handle complex logic better',
            'Longer memory: AI that remembers all your past conversations',
            'Personalization: AI that learns your preferences over time',
            'Real-time info: AI with always-updated knowledge',
            'More accessible: Cheaper, faster, and easier to use for everyone'
        ],
        points_mm: [
            'ပိုမိုကောင်းမွန်သော ကျိုးကြောင်းဆင်ခြင်ခြင်း: AI သည် ရှုပ်ထွေးသော ယုတ္တိဗေဒကို ပိုမိုကောင်းမွန်စွာ ကိုင်တွယ်နိုင်မည်',
            'ပိုရှည်သော မှတ်ဉာဏ်: သင့်အတိတ် စကားပြောဆိုမှု အားလုံးကို မှတ်မိသော AI',
            'စိတ်ကြိုက်ပြုလုပ်ခြင်း: သင့်ကြိုက်နှစ်သက်မှုများကို အချိန်နှင့်အမျှ လေ့လာသော AI',
            'အချိန်နှင့်တပြေးညီ အချက်အလက်: အမြဲတမ်း နောက်ဆုံးရ ဗဟုသုတရှိသော AI',
            'ပိုမို လက်လှမ်းမီနိုင်မှု: လူတိုင်းအတွက် ပိုသက်သာ၊ ပိုမြန်ပြီး အသုံးပြုရ ပိုလွယ်ကူမည်'
        ]
    }
];

// Export for use in script.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = cheatsheetData;
}
