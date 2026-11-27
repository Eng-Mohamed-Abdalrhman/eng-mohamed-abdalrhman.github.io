{
/* ===== CONFIG (edit here) ===== */
const CONFIG={
  name:{en:"MOHAMED ABDALRHMAN ELYAS AHMED",ar:"محمد عبدالرحمن الياس احمد"},
  email:"eng.mohamed.elyas@gmail.com", phone:"+966 50 604 8872", phoneHref:"+966506048872", whatsapp:"966506048872",
  site:"https://eng-mohamed-abdalrhman.github.io",
  linkedin:"",            /* hidden until a verified URL is supplied */
  teamSize:null,          /* e.g. "130–150" — shown only after confirmation */
  draft:false,            /* true = review notes + empty document placeholders */
  photo:""                /* hero portrait, e.g. "img/portrait.jpg" */
};
/* Document samples (AutoCAD, BOQ, reports…) — add items here when supplied:
   {type:"autocad", img:"docs/plan-01.jpg", en:"Title", ar:"العنوان"} */
const DOCS=[];
/* Certificates — originals in docs/certs/*.pdf, previews in img/certs/<id>.jpg (+ -t.jpg thumbnail) */
const SCE={id:"sce-professional-accreditation",no:"1014930",start:["03 February 2024","03 فبراير 2024"],until:["02 March 2027","02 مارس 2027"]};
const BIM={id:"bim-diploma",hours:220,all:"docs/certs/bim-diploma-all-certificates.pdf",
 parts:"BIM Execution Plan · BIM Standards and Codes · Revit · Families · Revit Advanced · Navisworks · 4D & 5D Simulation · Autodesk Construction Cloud · BIM 360 · Dynamo"};
const COURSES=[ /* [id, title, hours, from, to] — exactly as printed on each certificate (Mkademy) */
 ["bim-execution-plan","BIM Execution Plan",12,"31/12/2025","11/01/2026"],
 ["bim-standards-codes","BIM Standards and Codes",16,"18/01/2026","04/02/2026"],
 ["revit","Revit",32,"08/02/2026","15/03/2026"],
 ["families","Revit Families",20,"29/03/2026","12/04/2026"],
 ["revit-advanced","Revit Advanced",20,"19/04/2026","03/05/2026"],
 ["autodesk-construction-cloud","Autodesk Construction Cloud",48,"13/05/2026","05/07/2026"],
 ["navisworks","Navisworks",32,"23/07/2026","17/08/2026"],
 ["dynamo","Dynamo",16,"08/07/2026","19/07/2026"],
 ["4d-5d-simulation","4D & 5D Simulation",12,"25/08/2026","01/09/2026"]];
const SEC={id:"sudanese-engineering-council-registration",no:"76677",reg:["27 September 2022","27 سبتمبر 2022"],iss:["28 September 2022","28 سبتمبر 2022"]};
/* Other certificates: t/by/topic = [en, ar]; h = hours; d = dates exactly as printed */
const OTHER={
 tech:[{id:"jelecom-civil-engineering-training",t:["Professional Training in Civil Engineering","التدريب المهني في الهندسة المدنية"],by:["JELECOM","JELECOM"],h:72,d:["08/02/2015","10/03/2015"],
   topic:["AutoCAD · SAP · ETABS · CSI Column · PlanSwift · Grade: Excellent","AutoCAD · SAP · ETABS · CSI Column · PlanSwift · التقدير: ممتاز"]}],
 mgmt:[{id:"edraak-effective-leadership-management",t:["Effective Leadership and Management","القيادة المؤثرة والإدارة الفعالة"],by:["Edraak","إدراك"],h:2,d:["06/07/2020"],
   topic:["Leadership and management concepts; developing leadership and management skills","مفاهيم القيادة والإدارة، وتطوير المهارات القيادية والإدارية"]},
  {id:"arees-personal-strategic-planning",t:["Personal Strategic Planning","التخطيط الاستراتيجي الشخصي"],by:["AREES International University — Germany","AREES International University — Germany"],d:["23/10/2017","28/10/2017"],
   topic:["Training course held in Khartoum, Sudan","دورة تدريبية أقيمت في الخرطوم، السودان"]}],
 extra:[{id:"zain-marketing-products-services",t:["Marketing, Products and Services — Training","تدريب في التسويق والمنتجات والخدمات"],by:["The Sudanese Mobile Telephone (Zain) Company Ltd.","شركة زين للهاتف السيار (السودان)"],d:["25/09/2014","04/11/2014"],
   topic:["Marketing overview and product development process","مقدمة في التسويق وعملية تطوير المنتجات"]}]};
/* Projects — add only after confirmation. Owner, main contractor and employer are separate fields.
   {verified:true, name:{en:"",ar:""}, owner:{en:"",ar:""}, contractor:{en:"",ar:""}, employer:{en:"",ar:""},
    location:{en:"",ar:""}, type:{en:"",ar:""}, role:{en:"",ar:""}, scope:{en:[""],ar:[""]}, imgs:[17,24]} */
const PROJECTS=[
 /* g: "mrd" maintenance, renovation & development · "rd" renovation & development · "c" construction.
    imgs: only photos confirmed for this project (none confirmed yet). orgIds: links shown on the Organizations page. */
 {id:"canary-village",g:"mrd",verified:true,name:{en:"Canary Village Residential Compound",ar:"كمباوند الكناري فيليج السكني"},type:{en:"Residential compound",ar:"مجمع سكني"}},
 {id:"canary-fiesta",g:"mrd",verified:true,name:{en:"Canary Fiesta Residential Compound",ar:"كمباوند الكناري فستا السكني"},type:{en:"Residential compound",ar:"مجمع سكني"}},
 {id:"karawan",g:"mrd",verified:true,name:{en:"Al Karawan Residential Compound",ar:"كمباوند الكروان السكني"},type:{en:"Residential compound",ar:"مجمع سكني"}},
 {id:"rashed-rakah",g:"mrd",verified:true,name:{en:"Al Rashed Compound – Al Rakah",ar:"كمباوند الراشد – الراكة"},location:{en:"Al Rakah, Al Khobar",ar:"الراكة، الخبر"},type:{en:"Residential compound",ar:"مجمع سكني"},orgIds:["rashed"]},
 {id:"rashed-aziziyah",g:"mrd",verified:true,name:{en:"Al Rashed Rest House & Chalets – Al Aziziyah",ar:"استراحة وشاليهات الراشد – العزيزية"},location:{en:"Al Aziziyah",ar:"العزيزية"},type:{en:"Rest house & chalets",ar:"استراحة وشاليهات"},orgIds:["rashed"]},
 {id:"enab-teen",g:"mrd",verified:true,name:{en:"Enab & Teen Restaurant – Al Khobar",ar:"مطعم عنب وتين – الخبر"},location:{en:"Al Khobar",ar:"الخبر"},type:{en:"Restaurant",ar:"مطعم"}},
 {id:"dammam-hospital",g:"mrd",verified:true,name:{en:"Dammam General Hospital",ar:"مستشفى الدمام العام"},location:{en:"Dammam",ar:"الدمام"},type:{en:"Healthcare facility",ar:"منشأة صحية"}},
 {id:"sda",g:"mrd",verified:true,name:{en:"Sharqia Development Authority",ar:"هيئة تطوير المنطقة الشرقية"},type:{en:"Government facility",ar:"منشأة حكومية"},orgIds:["sda"]},
 {id:"aramco-majd-a",g:"rd",verified:true,name:{en:"Saudi Aramco Offices – Al Majd Tower A",ar:"مكاتب أرامكو – برج المجد A"},type:{en:"Office fit-out",ar:"مكاتب"},orgIds:["aramco"]},
 {id:"aramco-majd-b",g:"rd",verified:true,name:{en:"Saudi Aramco Offices – Al Majd Tower B",ar:"مكاتب أرامكو – برج المجد B"},type:{en:"Office fit-out",ar:"مكاتب"},orgIds:["aramco"]},
 {id:"qahtani-majd-a",g:"rd",verified:true,name:{en:"Al Qahtani Offices – Al Majd Tower A",ar:"مكاتب القحطاني – برج المجد A"},type:{en:"Office fit-out",ar:"مكاتب"},orgIds:["qahtani"]},
 {id:"arsal-majd",g:"rd",verified:true,name:{en:"Arsal Offices – Al Majd Tower",ar:"مكاتب إرسال – برج المجد"},type:{en:"Office fit-out",ar:"مكاتب"},orgIds:["arsal"]},
 {id:"rashed-hq",g:"rd",verified:true,name:{en:"Al Rashed Main Building",ar:"مبنى الراشد الرئيسي"},type:{en:"Office building",ar:"مبنى إداري"},orgIds:["rashed"]},
 {id:"dtv-complex",g:"c",verified:true,name:{en:"DTV Office Complex – Dhahran Techno Valley, with SRACO",ar:"مجمع مكاتب DTV – وادي الظهران للتقنية، بالتعاون مع سراكو"},location:{en:"Dhahran",ar:"الظهران"},type:{en:"Office complex — new construction",ar:"مجمع مكاتب — إنشاء"},orgIds:["kfupm"]}];

/* PROJECTS item — add only confirmed projects. While empty, the Projects page shows clearly-labelled design samples.
   {id:"p1", verified:true, imgs:[17,24,20], name:{en:"",ar:""}, location:{en:"",ar:""},
    summary:{en:"",ar:""}, work:{en:"",ar:""}, orgIds:["aramco"]}
   (older field list below kept for reference)
   {id:"p1", verified:true, logo:"assets/logos/p1.png", img:17, imgs:[17,24],
    name:{en:"",ar:""}, location:{en:"",ar:""}, type:{en:"",ar:""}, summary:{en:"",ar:""},
    ownerId:"aramco", contractorId:"rtcc", employer:{en:"",ar:""}, role:{en:"",ar:""}, scope:{en:[],ar:[]}} */
/* Organizations associated with projects. role: "owner" | "contractor" | "related".
   logo: path in assets/logos/ — only official files used with permission; empty = neutral name tile. */
const ORGS=[
 /* logo: official files supplied by the user (originals kept in ORGANIZATIONS_LOGOS pack); web copies in assets/logos/. Names verified against public sources where possible. */
 {id:"aramco",name:{en:"Saudi Aramco",ar:"أرامكو السعودية"},logo:"assets/logos/aramco.png"},
 {id:"arsal",name:{en:"Arsal",ar:"شركة إرسال"},logo:"assets/logos/arsal.png"},
 {id:"rashed",name:{en:"Rashed Abdul Rahman Al Rashed & Sons Group",ar:"مجموعة راشد عبدالرحمن الراشد وأولاده"},logo:"assets/logos/rashed.png"},
 {id:"abhar",name:{en:"Abhar Real Estate",ar:"شركة أبهار العقارية"},logo:"assets/logos/abhar.png"},
 {id:"qahtani",name:{en:"Al Qahtani Group",ar:"مجموعة القحطاني"},logo:"assets/logos/qahtani.png"},
 {id:"almajdouie",name:{en:"Almajdouie",ar:"المجدوعي"},logo:"assets/logos/almajdouie.png"},
 {id:"kfupm",name:{en:"King Fahd University of Petroleum and Minerals (KFUPM)",ar:"جامعة الملك فهد للبترول والمعادن"},logo:"assets/logos/kfupm.png"},
 {id:"wood",name:{en:"Wood",ar:"وود"},logo:"assets/logos/wood.png"},
 {id:"sda",name:{en:"Sharqia Development Authority",ar:"هيئة تطوير المنطقة الشرقية"},logo:"assets/logos/sda.png"}];
const PAGE=document.body.dataset.page||"home";
let PREVIEW=false;try{PREVIEW=/[?&]preview\b/.test(location.search)}catch(e){}

const T={
en:{dir:"ltr",lang:"العربية",cv:"Download CV",role:"Civil Engineer",
 nav:[["home","Home"],["profile","Profile"],["capabilities","Technical office"],["leadership","Leadership"],["practice","Engineering works"],["gallery","Gallery"],["documents","Documents"],["experience","Experience"],["education","Education"],["contact","Contact"]],
 kick:"Engineering Portfolio · Kingdom of Saudi Arabia",
 title:'Civil Engineer — <em>Project &amp; Site Engineering · Technical Office · Project Management</em>',
 intro:"Civil engineer with 7+ years across construction supervision, finishing and fit-out, maintenance and renovation, and engineering administration — working between the site, the technical office and the project team: execution follow-up, design and drafting, quantity surveying, documentation, coordination and workforce leadership.",
 pills:["Project engineering","Site execution","Project management","Technical office","Design & drafting","Quantity surveying","Engineering documentation","Workforce management"],
 contact:"Contact me",
 tags:["Villa interiors","Marble works","Technical office","Bathroom finishing","Flooring & joinery"],
 facts:[["7+ years","Engineering experience since 2018"],["SCE","Accredited Engineer · valid to 02 Mar 2027"],["BIM Diploma","220 hours · Revit · Navisworks"],["B.Sc. (Hons)","Civil Engineering — Highway & Transportation"],["6 organisations","Private contracting & public sector, KSA · Sudan"]],
 profEy:"Professional profile",profH:"A civil engineer between the site, the technical office and the project team",
 prof:["I work as a Civil Engineer with a general contracting establishment in Saudi Arabia, supervising construction activities against approved drawings, specifications and safety standards, reviewing engineering plans, coordinating site teams and monitoring the quality and progress of works.",
 "As Engineering Administration Manager at Blanco Group I managed engineering and administrative operations — planning, coordination, oversight of daily activities and reporting — and worked with clients and stakeholders. In Sudan I supervised road and bridge works, infrastructure projects and the construction and maintenance of judicial buildings, using AutoCAD for technical documentation and reporting."],
 rolesH:"Positions held",compH:"Areas of competence",
 roles:[["Civil Engineer","2018 – present"],["Engineering Administration Manager","2020 – 2022"],["Trainee Civil Engineer","2017"]],
 comps:["Civil Engineering","Project Engineering","Site Engineering","Construction Supervision","Project Management","Engineering Design & Drafting","Technical Office","Quantity Surveying","Engineering Documentation","Finishing & Fit-Out","Maintenance & Renovation","Construction & Development","Workforce Management"],
 compNote:"Areas of competence describe the scope of skills; positions held are the formal job titles.",
 capEy:"Technical office & engineering capabilities",capH:"The office side of the project",capL:"Design and drafting, quantities, project and commercial documentation, and coordination — the technical-office work that runs alongside site execution.",
 legD:"Documented in professional record or site photographs",legR:"Related working knowledge",
 leadEy:"Project leadership & workforce management",leadH:"Leading large site teams to handover",leadL:"Supervising multi-trade crews and coordinating supervisors, disciplines and contractors on active sites.",
 lead:["Managing large site workforces","Assigning tasks and following up execution","Coordinating labour and supervisors","Tracking daily productivity","Coordinating trades and disciplines","Monitoring quality of works","Solving problems on site","Following progress through to handover"],
 statL:"workers on one project",
 prEy:"Engineering works & professional capabilities",prH:"Scope of works across my projects",prL:"Work scopes I have been involved in — through execution follow-up, site supervision, technical coordination, quality follow-up, project management or documentation, depending on the project.",
 viewPh:"View photographs",
 seqH:[["Ceilings and interior finishes","Stages of the work type; photographs may come from different sites."],["Roof waterproofing — torch-applied membrane","Stages of the work type."],["Interlock paving — from rework to handover","Stages of the work type."]],
 galEy:"Engineering gallery",galH:"Site photographs",all:"All",photos:"photographs",
 docEy:"Documentation & reports",docH:"Drawings, quantities and reports",docL:"Samples of technical-office work — AutoCAD drawings, engineering plans, BOQ samples and reports — will be published here.",
 docTypes:[["AutoCAD drawings","Plans, details and sections"],["Engineering plans","Layouts and coordination drawings"],["Technical drawings","Shop and as-built references"],["BOQ samples","Bills of quantities and take-offs"],["Engineering reports","Daily, weekly and highlight reports"],["Project documentation","Requests, submittals and records"]],
 docDraft:"Review note: document samples pending — this block shows only in the review draft.",
 expEy:"Professional experience",expH:"Experience",current:"Current",pages:[["index.html","home","Home"],["projects.html","projects","Projects"],["organizations.html","orgs","Organizations"],["jobs.html","jobs","My Jobs"],["certifications.html","certs","Certifications"]],
 smpName:"Sample Project – Design Preview",smpBadge:"Design preview — not a real project",smpLoc:"Location — to be added",smpSum:"A short description of the project will appear here: its type, scale and purpose.",smpWork:"A summary of the engineering works I took part in will appear here.",
 prjLoc:"Location",prjWork:"My contribution",
 orgIntro:"Companies and institutions connected to the projects, work and professional experience of Eng. Mohamed Abdalrhman. Listing reflects association with projects — not ownership or employment.",assocP:"Associated Projects",assocNone:"To be added",logoHere:"Logo",
 jobsEy:"My Jobs",jobsH:"Where I have worked",jobsL:"Companies and public bodies I have worked for, with titles and dates from my CV.",
 prjG:{mrd:"Maintenance, renovation & development",rd:"Renovation & development",c:"Construction"},prjNoPh:"Project photographs to be added",prjType:"Type of works",prjDesc:{mrd:"Maintenance, renovation and development works.",rd:"Renovation and development works.",c:"Construction works."},prjWorkTbd:"Details of my scope on this project will be added.",
 prjEy:"Projects",prjH:"Projects I have contributed to",prjL:"Construction, finishing and infrastructure projects, with the organizations involved and my role on each.",
 prjF:{owner:"Project owner",contractor:"Main contractor",employer:"Engaged through",location:"Location",type:"Project type",role:"My role"},
 prjEmpty:"Project details are being documented and will be published here once confirmed.",prjEmptyCta:"See site photographs",
 prjMore:"Scope of work",logoSlot:"Project logo",viewOrg:"View organization",
 tplNote:"Template preview — sample layout only, not a real project. Visible only with ?preview.",tplName:"Project name",tplLoc:"City, Saudi Arabia",tplType:"Project type",tplSum:"Short description of the engineering works carried out.",
 orgEy:"Organizations",orgH:"Organizations across my career and projects",orgL:"Employers I have worked for, organizations connected to the projects I have contributed to, and main contractors and partners on those projects. A listing does not imply ownership, or employment unless shown under Employers.",
 cats:{project:["Project Organizations","Organizations connected to the projects I have worked on — project owners, supervising bodies and other project parties."],employer:["Employers","Companies and public bodies that have employed me, with dates from my professional record."],partner:["Main Contractors & Project Partners","Main contractors, execution partners and related organizations on projects I have worked on."]},
 orgRoles:{owner:"Project owner",supervisor:"Supervising body",contractor:"Main contractor",partner:"Execution partner",related:"Associated organization"},
 empNow:"Current employer",empPast:"Previous employer",
 catEmpty:{project:"Project organizations will be listed here once project details are confirmed."},
 visit:"Official website",linkedPrj:"Related projects",logoPending:"Official logo pending permission",addOrg:"Space for an additional organization",
 tm:"Company names and logos are trademarks of their respective owners and are shown for identification only.",
 eduEy:"Education & certifications",eduH:"Accreditation, education and training",verified:"Verified document",
 conEy:"Contact",conH:"Let's discuss your next project",conL:"Open to civil, project, site and technical-office engineering roles in Saudi Arabia.",
 email:"Email",phone:"Phone / WhatsApp",cvrow:"Curriculum vitae",cvlink:"Download CV (PDF)",
 foot1:"Civil Engineer · Kingdom of Saudi Arabia",foot2:"Updated November 2026",
 prev:"←",next:"→",close:"Close",
 cEy:"Certifications & Professional Training",cH:"Certifications & Professional Training",cL:"Professional accreditation and registration, a 220-hour BIM diploma with its specialised courses, engineering software training, and management development. Each card opens the original certificate.",
 cG:["Professional Accreditation & Registration","Professional Diploma & Technical Certifications","Management & Professional Development","Additional Professional Training"],
 secT:"Sudanese Engineering Council — Professional Registration",secK:[["Registration No.","no"],["Registration grade","Graduate Engineer"],["Specialization","Civil Engineering (Roads & Transportation)"],["Registered on","reg"],["Certificate issued","iss"],["Registered in","Sudan"]],
 bimCourses:"BIM Diploma courses (Mkademy)",engTr:"Engineering software training",by:"Issued by",issued:"Issued",
 sceT:"Saudi Council of Engineers — Professional Accreditation",sceK:[["Membership No.","no"],["Category","Engineer"],["Specialization","Civil Engineering"],["Accreditation start","start"],["Valid until","until"]],
 bimT:"BIM Diploma — 220 Hours",bimK:[["Provider","Mkademy Engineering Training Courses"],["Software","Revit — Navisworks"],["Duration","220 hours"]],bimP:"Covers",
 crs:"Course",hrs:"hours",from:"From",to:"to",pdf:"Open PDF",view:"View",allPdf:"All BIM certificates (PDF)",certsAll:"All certificates",
 waL:"WhatsApp",callL:"Call",mailL:"Email",reachH:"Contact directly",waT:"Chat on WhatsApp",callT:"Call +966 50 604 8872",mailT:"Send an email"},
ar:{dir:"rtl",lang:"English",cv:"تحميل السيرة الذاتية",role:"مهندس مدني",
 nav:[["home","الرئيسية"],["profile","الملف المهني"],["capabilities","المكتب الفني"],["leadership","القيادة"],["practice","الأعمال الهندسية"],["gallery","المعرض"],["documents","المستندات"],["experience","الخبرات"],["education","التعليم"],["contact","التواصل"]],
 kick:"البورتفوليو الهندسي · المملكة العربية السعودية",
 title:'مهندس مدني — <em>هندسة المشاريع والمواقع · المكتب الفني · إدارة المشاريع</em>',
 intro:"مهندس مدني بخبرة تزيد على 7 سنوات في الإشراف على أعمال الإنشاء والتشطيبات والتجهيزات الداخلية والصيانة والتجديد والإدارة الهندسية، يعمل بين الموقع والمكتب الفني وفريق المشروع: متابعة التنفيذ، والتصميم والرسم الهندسي، وحصر الكميات، والتوثيق، والتنسيق، وقيادة فرق العمل.",
 pills:["هندسة المشاريع","التنفيذ الميداني","إدارة المشاريع","المكتب الفني","التصميم والرسم الهندسي","حصر الكميات","التوثيق الهندسي","إدارة القوى العاملة"],
 contact:"تواصل معي",
 tags:["التشطيبات الداخلية للفلل","أعمال الرخام","المكتب الفني","تشطيب الحمّامات","الأرضيات والأعمال الخشبية"],
 facts:[["+7 سنوات","خبرة هندسية منذ 2018"],["مهندس معتمد","الهيئة السعودية للمهندسين · صالح حتى 02 مارس 2027"],["دبلوم BIM","220 ساعة · برنامجا Revit وNavisworks"],["بكالوريوس","الهندسة المدنية (مرتبة الشرف) — الطرق والنقل"],["6 جهات عمل","القطاع الخاص والحكومي، السعودية والسودان"]],
 profEy:"الملف المهني",profH:"مهندس مدني يجمع بين الموقع والمكتب الفني وفريق المشروع",
 prof:["أعمل مهندساً مدنياً في مؤسسة مقاولات عامة بالمملكة العربية السعودية، أشرف على أعمال الإنشاء وفق المخططات والمواصفات المعتمدة ومعايير السلامة، وأراجع المخططات الهندسية، وأنسّق فرق العمل في الموقع، وأتابع جودة الأعمال ونسب تقدمها.",
 "وبصفتي مدير الإدارة الهندسية في Blanco Group، أدرت العمليات الهندسية والإدارية من تخطيط وتنسيق ومتابعة للأنشطة اليومية وإعداد التقارير، وتواصلت مع العملاء والجهات المعنية. وفي السودان أشرفت على أعمال الطرق والجسور ومشاريع البنية التحتية وأعمال إنشاء وصيانة مباني السلطة القضائية، مستخدماً AutoCAD في التوثيق الفني وإعداد التقارير."],
 rolesH:"المسميات الوظيفية",compH:"مجالات الكفاءة",
 roles:[["مهندس مدني","2018 – حتى الآن"],["مدير الإدارة الهندسية","2020 – 2022"],["مهندس مدني متدرب","2017"]],
 comps:["الهندسة المدنية","هندسة المشاريع","الهندسة الميدانية","الإشراف على التنفيذ","إدارة المشاريع","التصميم والرسم الهندسي","المكتب الفني","حصر الكميات","التوثيق الهندسي","التشطيبات والتجهيزات الداخلية","الصيانة والتجديد","الإنشاء والتطوير","إدارة القوى العاملة"],
 compNote:"مجالات الكفاءة تصف نطاق المهارات، أما المسميات الوظيفية فهي المناصب الرسمية التي شغلها.",
 capEy:"المكتب الفني والقدرات الهندسية",capH:"الجانب المكتبي من المشروع",capL:"التصميم والرسم الهندسي، والكميات، ومستندات المشروع والمستندات التجارية، والتنسيق — أعمال المكتب الفني المرافقة للتنفيذ في الموقع.",
 legD:"موثّقة في السجل المهني أو صور المواقع",legR:"معرفة عملية ذات صلة",
 leadEy:"قيادة المشاريع وإدارة القوى العاملة",leadH:"قيادة فرق عمل كبيرة حتى التسليم",leadL:"الإشراف على أطقم متعددة التخصصات وتنسيق المشرفين والتخصصات والمقاولين في المواقع النشطة.",
 lead:["إدارة القوى العاملة الكبيرة في الموقع","توزيع المهام ومتابعة التنفيذ","تنسيق العمالة والمشرفين","متابعة الإنتاجية اليومية","التنسيق بين الفرق والتخصصات","متابعة جودة الأعمال","حل المشكلات الميدانية","متابعة التقدم حتى التسليم"],
 statL:"عامل في مشروع واحد",
 prEy:"الأعمال الهندسية والقدرات المهنية",prH:"نطاق الأعمال في مشاريعي",prL:"نطاقات أعمال شاركت فيها — من خلال متابعة التنفيذ أو الإشراف الميداني أو التنسيق الفني أو متابعة الجودة أو إدارة المشروع أو التوثيق، بحسب المشروع.",
 viewPh:"عرض الصور",
 seqH:[["الأسقف والتشطيبات الداخلية","مراحل نوع العمل؛ قد تكون الصور من مواقع مختلفة."],["عزل الأسطح — لفائف بالحرارة","مراحل نوع العمل."],["رصف الإنترلوك — من الإزالة حتى التسليم","مراحل نوع العمل."]],
 galEy:"المعرض الهندسي",galH:"صور من المواقع",all:"الكل",photos:"صورة",
 docEy:"المستندات والتقارير",docH:"المخططات والكميات والتقارير",docL:"ستُنشر هنا نماذج من أعمال المكتب الفني: مخططات AutoCAD والمخططات الهندسية ونماذج جداول الكميات والتقارير.",
 docTypes:[["مخططات AutoCAD","مساقط وتفاصيل وقطاعات"],["المخططات الهندسية","مخططات التوزيع والتنسيق"],["الرسومات الفنية","مخططات تنفيذية ومخططات As-Built"],["نماذج جداول الكميات","جداول الكميات (BOQ) والحصر"],["التقارير الهندسية","تقارير يومية وأسبوعية وتقارير موجزة"],["توثيق المشاريع","الطلبات والاعتمادات والسجلات"]],
 docDraft:"ملاحظة مراجعة: نماذج المستندات قيد التجهيز — يظهر هذا الجزء في مسودة المراجعة فقط.",
 expEy:"الخبرات المهنية",expH:"الخبرات",current:"حالياً",pages:[["index.html","home","الرئيسية"],["projects.html","projects","المشاريع"],["organizations.html","orgs","الجهات والشركات"],["jobs.html","jobs","جهات العمل"],["certifications.html","certs","الشهادات"]],
 smpName:"مشروع تجريبي – معاينة التصميم",smpBadge:"معاينة تصميم — ليس مشروعاً حقيقياً",smpLoc:"الموقع — يُضاف لاحقاً",smpSum:"سيظهر هنا وصف مختصر للمشروع: نوعه وحجمه والغرض منه.",smpWork:"سيظهر هنا ملخص الأعمال الهندسية التي شاركت فيها.",
 prjLoc:"الموقع",prjWork:"مشاركتي",
 orgIntro:"شركات ومؤسسات ارتبطت بالمشاريع والأعمال والخبرات المهنية للمهندس محمد عبدالرحمن. الإدراج يعني الارتباط بالمشاريع، ولا يعني الملكية أو التوظيف.",assocP:"المشاريع المرتبطة بها",assocNone:"تُضاف لاحقاً",logoHere:"الشعار",
 jobsEy:"جهات العمل",jobsH:"الجهات التي عملت لديها",jobsL:"الشركات والجهات التي عملت لديها، بالمسميات والتواريخ الواردة في سيرتي الذاتية.",
 prjG:{mrd:"أعمال الصيانة والتجديد والتطوير",rd:"أعمال التجديد والتطوير",c:"أعمال الإنشاء"},prjNoPh:"تُضاف صور المشروع لاحقاً",prjType:"نوع الأعمال",prjDesc:{mrd:"أعمال صيانة وتجديد وتطوير.",rd:"أعمال تجديد وتطوير.",c:"أعمال إنشاء."},prjWorkTbd:"تُضاف تفاصيل الأعمال التي شاركت فيها في هذا المشروع لاحقاً.",
 prjEy:"المشاريع",prjH:"المشاريع التي شاركت في العمل عليها",prjL:"مشاريع إنشاء وتشطيبات وبنية تحتية، مع الجهات المرتبطة بكل مشروع ودوري فيه.",
 prjF:{owner:"الجهة المالكة",contractor:"المقاول الرئيسي",employer:"جهة العمل",location:"الموقع",type:"نوع المشروع",role:"دوري"},
 prjEmpty:"يجري توثيق تفاصيل المشاريع، وستُنشر هنا بعد اعتمادها.",prjEmptyCta:"عرض صور المواقع",
 prjMore:"نطاق الأعمال",logoSlot:"شعار المشروع",viewOrg:"عرض الجهة",
 tplNote:"معاينة قالب — تصميم توضيحي فقط وليس مشروعاً حقيقياً. يظهر فقط عند استخدام ?preview.",tplName:"اسم المشروع",tplLoc:"المدينة، المملكة العربية السعودية",tplType:"نوع المشروع",tplSum:"وصف مختصر للأعمال الهندسية المنفذة.",
 orgEy:"الجهات والشركات",orgH:"الجهات والشركات في مسيرتي المهنية ومشاريعي",orgL:"جهات العمل التي عملت لديها، والجهات المرتبطة بالمشاريع التي شاركت فيها، والمقاولون الرئيسيون والشركاء في تلك المشاريع. الإدراج لا يعني الملكية، ولا التوظيف إلا لما يظهر تحت جهات العمل.",
 cats:{project:["الجهات المرتبطة بالمشاريع","الجهات المرتبطة بالمشاريع التي عملت عليها — الجهات المالكة والجهات المشرفة وغيرها من أطراف المشروع."],employer:["جهات العمل","الشركات والجهات التي عملت لديها، بالتواريخ الواردة في سجلي المهني."],partner:["المقاولون الرئيسيون وشركاء المشاريع","المقاولون الرئيسيون وشركاء التنفيذ والجهات المرتبطة بالمشاريع التي عملت فيها."]},
 orgRoles:{owner:"الجهة المالكة",supervisor:"جهة مشرفة",contractor:"المقاول الرئيسي",partner:"شريك تنفيذ",related:"جهة مرتبطة"},
 empNow:"جهة العمل الحالية",empPast:"جهة عمل سابقة",
 catEmpty:{project:"ستُدرج الجهات المرتبطة بالمشاريع هنا بعد اعتماد تفاصيل المشاريع."},
 visit:"الموقع الرسمي",linkedPrj:"المشاريع المرتبطة",logoPending:"الشعار الرسمي بانتظار الإذن",addOrg:"مساحة لجهة إضافية",
 tm:"أسماء الشركات وشعاراتها علامات تجارية مملوكة لأصحابها، وتُعرض للتعريف فقط.",
 eduEy:"التعليم والشهادات",eduH:"الاعتماد المهني والتعليم والتدريب",verified:"مستند موثّق",
 conEy:"التواصل",conH:"لنتحدث عن مشروعك القادم",conL:"متاح لوظائف الهندسة المدنية وهندسة المشاريع والمواقع والمكتب الفني في المملكة العربية السعودية.",
 email:"البريد الإلكتروني",phone:"الهاتف / واتساب",cvrow:"السيرة الذاتية",cvlink:"تحميل السيرة الذاتية (PDF)",
 foot1:"مهندس مدني · المملكة العربية السعودية",foot2:"آخر تحديث: نوفمبر 2026",
 prev:"→",next:"←",close:"إغلاق",
 cEy:"الشهادات والدورات التدريبية",cH:"الشهادات والدورات التدريبية",cL:"الاعتماد والتسجيل المهني، ودبلوم BIM بمدة 220 ساعة مع دوراته المتخصصة، والتدريب على البرامج الهندسية، والتطوير الإداري. كل بطاقة تفتح الشهادة الأصلية.",
 cG:["الاعتماد والتسجيل المهني","الدبلوم المهني والشهادات التقنية","الإدارة والتطوير المهني","تدريب مهني إضافي"],
 secT:"التسجيل المهني — المجلس الهندسي السوداني",secK:[["رقم التسجيل","no"],["درجة التسجيل","مهندس خريج"],["التخصص","هندسة مدنية (طرق ونقل)"],["تاريخ التسجيل","reg"],["تاريخ إصدار الشهادة","iss"],["جهة التسجيل","السودان"]],
 bimCourses:"دورات دبلوم BIM ‏(Mkademy)",engTr:"التدريب على البرامج الهندسية",by:"الجهة",issued:"صدرت",
 sceT:"الاعتماد المهني — الهيئة السعودية للمهندسين",sceK:[["رقم العضوية","no"],["الفئة","مهندس"],["التخصص","هندسة مدنية"],["تاريخ بداية الاعتماد","start"],["صالح حتى","until"]],
 bimT:"دبلوم نمذجة معلومات البناء (BIM) — 220 ساعة",bimK:[["الجهة","Mkademy Engineering Training Courses"],["البرامج","Revit — Navisworks"],["المدة","220 ساعة"]],bimP:"المحاور",
 crs:"دورة",hrs:"ساعة",from:"من",to:"إلى",pdf:"فتح ملف PDF",view:"عرض",allPdf:"جميع شهادات BIM (PDF)",certsAll:"جميع الشهادات",
 waL:"واتساب",callL:"اتصال",mailL:"بريد",reachH:"تواصل مباشر",waT:"محادثة عبر واتساب",callT:"اتصال على ‎+966 50 604 8872",mailT:"إرسال بريد إلكتروني"}};

/* d = documented (CV or photographs), r = related working knowledge */
const CAPS=[
 {l:"A",en:["Engineering Design & Drafting","Drawings, drawing review and design coordination."],ar:["التصميم والرسم الهندسي","المخططات ومراجعتها والتنسيق التصميمي."],i:[
  ["AutoCAD","AutoCAD"],["Engineering drawings","المخططات الهندسية"],["Technical drawings","الرسومات الفنية"],["Drawing review","مراجعة المخططات"],["Design coordination","التنسيق التصميمي"],["Engineering documentation","التوثيق الهندسي"],["Revit & Navisworks (BIM Diploma training)","Revit وNavisworks (تدريب — دبلوم BIM)"],["BIM standards & execution planning (training)","معايير BIM وخطة التنفيذ (تدريب)"]]},
 {l:"B",en:["Quantity Surveying & Estimation","Quantities, measurement and cost inputs."],ar:["حصر الكميات والتقدير","الكميات والقياس ومدخلات التكلفة."],i:[
  ["Bill of Quantities (BOQ)","جداول الكميات (BOQ)"],["Quantity take-off","حصر الكميات"],["Material quantity calculations","حساب كميات المواد"],["Quantity verification","التحقق من الكميات"],["Cost estimation","تقدير التكاليف"],["Material requirements","احتياجات المواد"]]},
 {l:"C",en:["Commercial & Project Documentation","Reports, commercial documents and procurement records."],ar:["المستندات التجارية ومستندات المشروع","التقارير والمستندات التجارية وسجلات المشتريات."],i:[
  ["Quotations","عروض الأسعار"],["Invoices","الفواتير"],["Highlight reports","التقارير الموجزة (Highlight)"],["Daily progress reports","تقارير التقدم اليومية"],["Weekly & monthly reports","التقارير الأسبوعية والشهرية"],["Technical reports","التقارير الفنية"],["Purchase requests (PR)","طلبات الشراء (PR)"],["Purchase orders (PO)","أوامر الشراء (PO)"],["Material requests (MR)","طلبات المواد (MR)"],["Procurement documentation","مستندات المشتريات"],["Supplier coordination","التنسيق مع الموردين"],["Project correspondence","مراسلات المشروع"]]},
 {l:"D",en:["Project Management & Coordination","Planning, teams, quality and follow-up to completion."],ar:["إدارة المشاريع والتنسيق","التخطيط والفرق والجودة والمتابعة حتى الإنجاز."],i:[
  ["Project planning","تخطيط المشاريع"],["Work scheduling","جدولة الأعمال"],["Progress monitoring","متابعة تقدم الأعمال"],["Team coordination","تنسيق فرق العمل"],["Contractor coordination","التنسيق مع المقاولين"],["Resource management","إدارة الموارد"],["Quality control","مراقبة الجودة"],["Technical follow-up","المتابعة الفنية"],["Project documentation","توثيق المشاريع"]]}];

const AREAS=[
 {k:"interiors",img:91,en:"Finishing & Interior Works",ar:"أعمال التشطيبات والأعمال الداخلية",i:[["Finishing works","أعمال التشطيبات"],["Tile works","أعمال البلاط"],["Marble & stone works","أعمال الرخام والحجر"],["Gypsum board works","أعمال الجبس بورد"],["All types of painting works","جميع أنواع أعمال الدهانات"],["Furniture & decoration works","أعمال الأثاث والديكور"],["Glass works","أعمال الزجاج"],["Vinyl flooring & carpet works","أعمال أرضيات الفينيل والموكيت"],["Kitchen works","أعمال المطابخ"],["Wooden works","الأعمال الخشبية"]]},
 {k:"gypsum",img:80,en:"Technical & Building Systems",ar:"الأنظمة الفنية وأنظمة المباني",i:[["Data & low-current systems","أنظمة البيانات والتيار الخفيف"],["HVAC & air-conditioning works","أعمال التكييف والتهوية (HVAC)"],["Cooling & refrigeration works","أعمال التبريد"],["Fire-fighting systems","أنظمة مكافحة الحريق"],["Electrical works","الأعمال الكهربائية"],["Plumbing works","أعمال السباكة"]]},
 {k:"interlock",img:17,en:"External & Landscape Works",ar:"الأعمال الخارجية وتنسيق المواقع",i:[["Landscape works","أعمال تنسيق المواقع (اللاندسكيب)"],["External works","الأعمال الخارجية"],["External paving","الرصف الخارجي"],["Interlock works","أعمال الإنترلوك"],["Roads & parking areas","الطرق والمواقف"]]},
 {k:"structure",img:54,en:"Construction, Maintenance & Development",ar:"الإنشاء والصيانة والتطوير",i:[["Civil construction","الأعمال المدنية"],["Building construction","إنشاء المباني"],["Maintenance works","أعمال الصيانة"],["Renovation works","أعمال التجديد"],["Development works","أعمال التطوير"],["Rehabilitation works","أعمال إعادة التأهيل"],["Improvement works","أعمال التحسين"],["Roof waterproofing","عزل الأسطح"],["Road works & bridges","أعمال الطرق والجسور"]]}];

const CATS={interiors:["Villa interiors","التشطيبات الداخلية للفلل"],bath:["Bathrooms","الحمّامات"],joinery:["Flooring & joinery","الأرضيات والأعمال الخشبية"],tiles:["Tiles & marble","البلاط والرخام"],gypsum:["Ceilings & lighting","الأسقف والإنارة"],painting:["Painting & façades","الدهانات والواجهات"],fitout:["Office fit-out & glass","تجهيز المكاتب والزجاج"],structure:["Structural & construction","الإنشاءات والهيكل"],waterproofing:["Waterproofing","العزل المائي"],external:["Maintenance & rework","الصيانة وإعادة التنفيذ"],roads:["Roads & external works","الطرق والأعمال الخارجية"],interlock:["Interlock paving","رصف الإنترلوك"]};
const P=[
[91,"interiors","Bedroom with cove lighting and parquet","غرفة نوم بإنارة مخفية وأرضية باركيه"],[85,"interiors","Master bedroom with wall paneling","غرفة النوم الرئيسية بتجاليد جدارية"],[92,"interiors","Paneled bedroom","غرفة نوم بتجاليد جدارية"],[87,"interiors","Bedroom with study alcove","غرفة نوم مع ركن مكتب"],[58,"interiors","Living area and marble flooring","صالة بأرضية رخام"],[69,"interiors","Upper hall with balustrade","الصالة العلوية مع الدرابزين"],[61,"interiors","Stair landing with artwork","بسطة الدرج مع لوحة فنية"],
[83,"bath","Master bathroom vanity and bathtub","مغسلة وحوض استحمام الحمّام الرئيسي"],[77,"bath","Freestanding jacuzzi bathtub","حوض جاكوزي مستقل"],[78,"bath","Bathtub with backlit stone panel","حوض استحمام مع لوح حجري مضاء"],[84,"bath","Master bathroom overview","منظر عام للحمّام الرئيسي"],[82,"bath","Master bathroom","الحمّام الرئيسي"],[76,"bath","Vanity with backlit mirror","مغسلة مع مرآة مضاءة"],[79,"bath","Frameless glass shower","شاور زجاجي بدون إطار"],[86,"bath","Rain shower with lit niches","دش مطري مع تجاويف مضاءة"],[81,"bath","Bathroom door and vanity","باب الحمّام والمغسلة"],[72,"bath","WC with cove lighting","دورة مياه بإنارة مخفية"],[74,"bath","Guest WC with cove lighting","دورة مياه الضيوف بإنارة مخفية"],[73,"bath","Shower with fluted glass door","دش بباب زجاج مضلّع"],[71,"bath","Shower room and WC","غرفة الدش ودورة المياه"],
[64,"joinery","Wood-effect flooring and glazed partition","أرضية خشبية المظهر وقاطع زجاجي"],[65,"joinery","Wood-effect flooring by glazed wall","أرضية خشبية بجوار جدار زجاجي"],[93,"joinery","Wall of fitted wardrobes","خزائن حائط مدمجة"],[88,"joinery","Built-in study desk and shelving","مكتب ورفوف مدمجة"],[89,"joinery","Built-in shelving by window","رفوف مدمجة بجوار النافذة"],[90,"joinery","Window bay with fitted units","ركن نافذة مع وحدات مدمجة"],[66,"joinery","Built-in wardrobes and desk","خزائن ومكتب مدمج"],[67,"joinery","Built-in joinery and flooring","أعمال خشبية مدمجة وأرضيات"],[68,"joinery","Built-in desk under window","مكتب مدمج أسفل النافذة"],[70,"joinery","Fitted wardrobe","خزانة مدمجة"],
[60,"tiles","Marble staircase with wrought-iron balustrade","درج رخام مع درابزين حديد مشغول"],[59,"tiles","Marble staircase","درج رخام"],[63,"tiles","Marble upper hall","صالة علوية بأرضية رخام"],
[80,"gypsum","Cove lighting and ceiling diffuser","إنارة مخفية وفتحة تكييف سقفية"],
[62,"painting","Painted stairwell wall","جدار بيت الدرج المدهون"],[75,"painting","Finished wall with AC grilles","جدار مكتمل مع فتحات التكييف"],
[29,"structure","Reinforcement cages","أقفاص التسليح"],[54,"structure","Steel frame and blockwork","هيكل حديدي وأعمال بلوك"],[55,"structure","Blockwork walls","جدران البلوك"],[56,"structure","Steel frame structure","هيكل حديدي"],[35,"structure","Plumbing rough-in in blockwork","تمديدات السباكة داخل البلوك"],
[1,"roads","Marked parking area with planters","مواقف مخططة مع أحواض تشجير"],[2,"roads","Parking with shade structures","مواقف مع مظلات"],[5,"roads","Shade structures and road marking","مظلات وتخطيط طرق"],[3,"roads","Installing wheel stops","تركيب مصدات العجلات"],[4,"roads","Kerb painting","دهان البردورات"],[47,"roads","Mobile crane lifting","رفع بالرافعة المتنقلة"],[14,"roads","Precast kerbs for planters","بردورات مسبقة الصب للأحواض"],[15,"roads","Kerb and landscape layout","توزيع البردورات والتنسيق"],[16,"roads","Curved kerbs with irrigation lines","بردورات منحنية مع خطوط الري"],[22,"roads","Kerb setting","تركيب البردورات"],[26,"roads","Levelling kerbs to string line","ضبط مناسيب البردورات"],[13,"roads","Graded walkway before paving","ممر مُسوّى قبل الرصف"],
[17,"interlock","Curved interlock walkway","ممر إنترلوك منحني"],[19,"interlock","Circular paving feature","ساحة دائرية بالإنترلوك"],[24,"interlock","Completed interlock walkway","ممر إنترلوك مكتمل"],[23,"interlock","Walkway bed between kerbs","تجهيز طبقة الممر بين البردورات"],[20,"interlock","Compacting the sand bed","دمك طبقة الرمل"],[8,"interlock","Laying interlock blocks","رص بلاط الإنترلوك"],[18,"interlock","Interlock laying","تنفيذ الإنترلوك"],[21,"interlock","Cutting and laying blocks","قص ورص البلاط"],[7,"interlock","Reinstating walkway paving","إعادة رصف الممر"],
[6,"external","Removing existing interlock for rework","إزالة إنترلوك قائم لإعادة التنفيذ"],[46,"external","Roof edge finishing","تشطيب حافة السطح"],
[12,"fitout","Completed office space","مكتب مكتمل"],[9,"fitout","Carpet tiles and glass partitions","موكيت وقواطع زجاجية"],[11,"fitout","Furniture installation","تركيب الأثاث"],[10,"fitout","Final cleaning before handover","التنظيف النهائي قبل التسليم"],
[40,"painting","Façade painting","دهان الواجهة"],[41,"painting","Completed villa façade","واجهة فيلا مكتملة"],[48,"painting","Decorative wall paint","دهان ديكوري للجدران"],[49,"painting","Decorative paint and gypsum ceiling","دهان ديكوري وسقف جبس"],
[32,"tiles","Marble flooring","أرضيات الرخام"],[33,"tiles","Marble hall","صالة رخام"],[43,"tiles","Large-format porcelain tiling","بلاط بورسلان كبير المقاس"],[44,"tiles","Tile laying","تركيب البلاط"],[45,"tiles","Tiled floor with levelling system","بلاط بنظام ضبط المستوى"],[39,"tiles","Corridor tiling with levelling clips","بلاط الممر مع مشابك الضبط"],[42,"tiles","Floor tiling in progress","تنفيذ بلاط الأرضيات"],[52,"tiles","Wall tiling","بلاط الجدران"],
[37,"gypsum","Gypsum board ceiling","سقف جبس بورد"],[38,"gypsum","Ceiling joint treatment","معالجة فواصل السقف"],[36,"gypsum","Cornice and lighting first fix","الكرانيش وتمديدات الإنارة"],
[30,"interiors","Finished room","غرفة مكتملة"],[31,"interiors","Finished room with ceiling light","غرفة مكتملة بإنارة سقفية"],[25,"interiors","Installed timber doors","أبواب خشبية مركبة"],[27,"interiors","Door and corridor finish","تشطيب الباب والممر"],[34,"interiors","Stair landing and corridor","بسطة الدرج والممر"],
[50,"waterproofing","Torch-applied waterproofing","عزل لفائف بالحرارة"],[51,"waterproofing","Roof waterproofing","عزل السطح"],[57,"waterproofing","Membrane overlap detail","تفصيلة تراكب اللفائف"],[53,"waterproofing","Completed roof membrane","سطح معزول مكتمل"]];
/* gallery shows photos in CATS order */
P.sort((x,y)=>Object.keys(CATS).indexOf(x[1])-Object.keys(CATS).indexOf(y[1]));
const SEQ=[[36,38,43,48,32],[50,57,53],[6,23,20,8,24]];
const EXP=[
 {cur:1,when:["Feb 2022 – Present","فبراير 2022 – حتى الآن"],loc:["Saudi Arabia","المملكة العربية السعودية"],t:["Civil Engineer","مهندس مدني"],org:"Mostafa Mohammed Al-Rabh General Contracting Est.",orgAr:"Mostafa Mohammed Al-Rabh General Contracting Est.",
  b:[["Supervising construction activities, ensuring compliance with approved drawings, specifications and safety standards.","الإشراف على أعمال الإنشاء وضمان مطابقتها للمخططات والمواصفات المعتمدة ومعايير السلامة."],["Reviewing engineering plans, coordinating site teams, and monitoring quality and progress of works.","مراجعة المخططات الهندسية وتنسيق فرق العمل في الموقع ومتابعة جودة الأعمال ونسب تقدمها."]]},
 {when:["2020 – Oct 2022","2020 – أكتوبر 2022"],loc:["",""],t:["Engineering Administration Manager","مدير الإدارة الهندسية"],org:"Blanco Group",orgAr:"Blanco Group",
  b:[["Managing engineering and administrative operations, including planning, coordination and oversight of daily activities.","إدارة العمليات الهندسية والإدارية، بما يشمل التخطيط والتنسيق والإشراف على الأنشطة اليومية."],["Supervising reporting processes, supporting decision-making, resolving operational issues and communicating with clients and stakeholders.","الإشراف على عمليات إعداد التقارير، ودعم اتخاذ القرار، وحل المشكلات التشغيلية، والتواصل مع العملاء والجهات المعنية."]]},
 {when:["Sep 2020 – Dec 2020","سبتمبر 2020 – ديسمبر 2020"],loc:["Gedaref State, Sudan","ولاية القضارف، السودان"],t:["Civil Engineer","مهندس مدني"],org:"Ministry of Infrastructure and Urban Development",orgAr:"وزارة البنى التحتية والتنمية العمرانية",
  b:[["Supported project management through site supervision, progress monitoring and follow-up on infrastructure projects.","دعم إدارة المشاريع من خلال الإشراف الميداني ومتابعة التقدم في مشاريع البنية التحتية."],["Used AutoCAD for technical documentation, reporting and coordination.","استخدام AutoCAD في التوثيق الفني وإعداد التقارير والتنسيق."]]},
 {when:["Jun 2019 – Jun 2020","يونيو 2019 – يونيو 2020"],loc:["Sudan","السودان"],t:["Civil Engineer","مهندس مدني"],org:"Sudanese Judicial Authority — Engineering Affairs Department",orgAr:"السلطة القضائية السودانية — إدارة الشؤون الهندسية",
  b:[["Supervised construction and maintenance works of judicial buildings.","الإشراف على أعمال إنشاء وصيانة مباني السلطة القضائية."],["Monitored implementation quality, coordinated maintenance activities and ensured compliance with technical standards.","متابعة جودة التنفيذ وتنسيق أعمال الصيانة وضمان الالتزام بالمعايير الفنية."]]},
 {when:["Dec 2018 – Dec 2019","ديسمبر 2018 – ديسمبر 2019"],loc:["Sudan","السودان"],t:["Civil Engineer","مهندس مدني"],org:"General Administration of Urban Planning and Public Utilities",orgAr:"الإدارة العامة للتخطيط العمراني والمرافق العامة",
  b:[["Supervised road and bridge works to ensure compliance with technical specifications.","الإشراف على أعمال الطرق والجسور لضمان مطابقتها للمواصفات الفنية."],["Supported maintenance activities and monitored work progress.","دعم أعمال الصيانة ومتابعة تقدم العمل."]]},
 {when:["Oct 2017 – Dec 2017","أكتوبر 2017 – ديسمبر 2017"],loc:["Sudan","السودان"],t:["Trainee Civil Engineer","مهندس مدني متدرب"],org:"Al Tawfiq Engineering Company",orgAr:"Al Tawfiq Engineering Company",
  b:[["Assisted in basic site supervision and reviewed simple technical drawings.","المساعدة في الإشراف الميداني ومراجعة الرسومات الفنية البسيطة."]]}];
const EDU=[
 {ok:1,en:["Professional Accreditation — Engineer","Saudi Council of Engineers · Civil Engineering · Membership No. 1014930 · valid until 02 March 2027"],ar:["الاعتماد المهني — مهندس","الهيئة السعودية للمهندسين · هندسة مدنية · رقم العضوية 1014930 · صالح حتى 02 مارس 2027"]},
 {ok:1,en:["Professional Registration — Graduate Engineer","Sudanese Engineering Council · Civil Engineering (Roads & Transportation) · Registration No. 76677 · since September 2022"],ar:["التسجيل المهني — مهندس خريج","المجلس الهندسي السوداني · هندسة مدنية (طرق ونقل) · رقم التسجيل 76677 · منذ سبتمبر 2022"]},
 {ok:1,en:["BIM Diploma — 220 Hours","Mkademy · Revit — Navisworks · nine specialised courses, Dec 2025 – Sep 2026"],ar:["دبلوم نمذجة معلومات البناء (BIM) — 220 ساعة","Mkademy · Revit — Navisworks · تسع دورات متخصصة، ديسمبر 2025 – سبتمبر 2026"]},
 {en:["B.Sc. (Honours) Civil Engineering","Highway & Transportation · Sudan University of Science and Technology · 2013 – 2018"],ar:["بكالوريوس الهندسة المدنية (مرتبة الشرف)","تخصص الطرق والنقل · جامعة السودان للعلوم والتكنولوجيا · 2013 – 2018"]},
 {en:["Professional training",""],ar:["التدريب المهني",""],list:[["Professional Training in Civil Engineering (AutoCAD, SAP, ETABS, CSI Column, PlanSwift) — JELECOM, 72 h, 2015","التدريب المهني في الهندسة المدنية (AutoCAD وSAP وETABS وCSI Column وPlanSwift) — JELECOM، ‏72 ساعة، 2015"],["Effective Leadership and Management — Edraak, 2020","القيادة المؤثرة والإدارة الفعالة — إدراك، 2020"],["Personal Strategic Planning — AREES International University, 2017","التخطيط الاستراتيجي الشخصي — AREES International University، ‏2017"],["Marketing, Products and Services — Zain, 2014","التسويق والمنتجات والخدمات — زين، 2014"]]}];

/* ===== render ===== */
const pad=n=>String(n).padStart(2,"0");
const esc=s=>String(s).replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[c]);
let L="en";try{const s=localStorage.getItem("lang");if(s==="ar"||s==="en")L=s}catch(e){}
/* Language link: ?lang=en / ?lang=ar opens that language directly (used by the CV links).
   Saved like a manual switch; the parameter is then removed from the address so the language button keeps working on reload. */
try{const q=new URLSearchParams(location.search).get("lang");if(q==="ar"||q==="en"){L=q;try{localStorage.setItem("lang",L)}catch(e){}
 const u=new URL(location.href);u.searchParams.delete("lang");history.replaceState(null,"",u.pathname+u.search+u.hash)}}catch(e){}
let filter="all",view=[],current="home";
const mk=t=>`<span class="mk ${t}" aria-hidden="true"></span>`;
const ico={mail:'<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>',phone:'<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z"/></svg>',wa:'<svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2.2a9.8 9.8 0 0 0-8.4 14.8L2.3 21.8l4.9-1.3A9.8 9.8 0 1 0 12 2.2zm0 1.8a8 8 0 1 1-4.2 14.8l-.3-.2-2.9.8.8-2.8-.2-.3A8 8 0 0 1 12 4zm-3.2 3.9c-.2 0-.5 0-.7.3-.3.3-1 1-1 2.4s1 2.8 1.2 3c.1.2 2 3.1 4.9 4.3 2.4 1 2.9.8 3.4.7.5 0 1.7-.7 1.9-1.4.2-.7.2-1.3.2-1.4-.1-.1-.3-.2-.6-.3l-1.9-.9c-.3-.1-.5-.1-.6.1-.2.3-.7.9-.9 1.1-.2.2-.3.2-.6.1-.3-.1-1.2-.5-2.3-1.4-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.4.1-.6l.4-.5.3-.5c.1-.2 0-.4 0-.5l-.9-2c-.2-.5-.4-.5-.6-.5h-.5z"/></svg>',call:'<svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z"/></svg>',env:'<svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>',file:'<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/></svg>'};
const dwg=`<svg viewBox="0 0 300 300" preserveAspectRatio="xMidYMid slice" aria-hidden="true"><defs><pattern id="g" width="20" height="20" patternUnits="userSpaceOnUse"><path d="M20 0H0V20" fill="none" stroke="rgba(255,255,255,.08)"/></pattern></defs><rect width="300" height="300" fill="url(#g)"/><g fill="none" stroke="#d6b27a" stroke-width="2"><rect x="60" y="70" width="180" height="140"/><path d="M60 140h80v70M140 70v40h100"/></g><g stroke="rgba(255,255,255,.55)" stroke-width="1"><path d="M60 230h180M60 224v12M240 224v12M260 70v140M254 70h12M254 210h12"/></g><g fill="rgba(255,255,255,.7)" font-family="IBM Plex Sans" font-size="11"><text x="140" y="246" text-anchor="middle">12.00</text><text x="276" y="144" transform="rotate(90 276 144)" text-anchor="middle">9.50</text></g><circle cx="190" cy="160" r="16" fill="none" stroke="rgba(255,255,255,.4)"/></svg>`;

function reach(cls){
 const t=T[L];
 return `<div class="reach ${cls||""}" role="group" aria-label="${t.reachH}">
  <a class="ri wa" href="https://wa.me/${CONFIG.whatsapp}" target="_blank" rel="noopener" aria-label="${t.waT}" title="${t.waT}">${ico.wa}<span>${t.waL}</span></a>
  <a class="ri" href="tel:${CONFIG.phoneHref}" aria-label="${t.callT}" title="${t.callT}">${ico.call}<span>${t.callL}</span></a>
  <a class="ri" href="mailto:${CONFIG.email}" aria-label="${t.mailT}: ${CONFIG.email}" title="${CONFIG.email}">${ico.env}<span>${t.mailL}</span></a></div>`;
}
function certsPage(){
 const t=T[L],a=L=="ar"?1:0;
 const kv=(k,v)=>`<div><dt>${k}</dt><dd>${v}</dd></div>`;
 const shot=(id,alt,big)=>`<button class="cshot${big?" big":""}" data-cert="${id}" aria-label="${esc(t.view+" — "+alt)}"><img src="img/certs/${id}-t.jpg" alt="${esc(alt)}" loading="lazy" width="640" height="452"></button>`;
 const pdfBtn=id=>`<a class="btn p" href="docs/certs/${id}.pdf" target="_blank" rel="noopener">${ico.file}${t.pdf}</a>`;
 const sceV={no:`<span class="ltrnum">${SCE.no}</span>`,start:SCE.start[a],until:SCE.until[a]};
 const secV={no:`<span class="ltrnum">${SEC.no}</span>`,reg:SEC.reg[a],iss:SEC.iss[a]};
 const dates=d=>d.length>1?`${t.from} <span class="ltrnum">${d[0]}</span> ${t.to} <span class="ltrnum">${d[1]}</span>`:`${t.issued} <span class="ltrnum">${d[0]}</span>`;
 let n=0;const num=()=>`<span class="cn ltrnum">${pad(++n)}</span>`;
 const course=c=>`<article class="ccard">${shot(c[0],c[1])}<div class="cbody">${num()}<h4><bdi>${c[1]}</bdi></h4>
   <p class="cmeta"><span class="ltrnum">${c[2]}</span> ${t.hrs} · ${dates([c[3],c[4]])}</p>
   <a class="clink" href="docs/certs/${c[0]}.pdf" target="_blank" rel="noopener">${t.pdf}</a></div></article>`;
 const other=o=>`<article class="ccard">${shot(o.id,o.t[a])}<div class="cbody">${num()}<h4>${o.t[a]}</h4>
   <p class="cmeta"><b>${t.by}:</b> <bdi>${o.by[a]}</bdi></p>
   <p class="cmeta">${o.h?(L=="ar"&&o.h==2?"ساعتان · ":`<span class="ltrnum">${o.h}</span> ${t.hrs} · `):""}${dates(o.d)}</p>
   <p class="cmeta">${o.topic[a]}</p>
   <a class="clink" href="docs/certs/${o.id}.pdf" target="_blank" rel="noopener">${t.pdf}</a></div></article>`;
 const total=2+1+COURSES.length+OTHER.tech.length+OTHER.mgmt.length+OTHER.extra.length;
 return `<section class="band" id="certs"><div class="wrap">
  <div class="eyebrow">${t.cEy}<span class="ltrnum">${total}</span></div><h2>${t.cH}</h2><p class="lede">${t.cL}</p>
  <h3 class="cgrp"><small>01</small>${t.cG[0]}</h3>
  <article class="ccard feat">${shot(SCE.id,t.sceT,1)}<div class="cbody"><h4>${t.sceT}</h4>
   <dl>${t.sceK.map(([k,v])=>kv(k,sceV[v]||v)).join("")}</dl>
   <div class="cact">${pdfBtn(SCE.id)}</div></div></article>
  <article class="ccard feat" style="margin-top:18px">${shot(SEC.id,t.secT,1)}<div class="cbody"><h4>${t.secT}</h4>
   <dl>${t.secK.map(([k,v])=>kv(k,secV[v]||v)).join("")}</dl>
   <div class="cact">${pdfBtn(SEC.id)}</div></div></article>
  <h3 class="cgrp"><small>02</small>${t.cG[1]}</h3>
  <article class="ccard feat">${shot(BIM.id,t.bimT,1)}<div class="cbody"><h4>${t.bimT}</h4>
   <dl>${t.bimK.map(([k,v])=>kv(k,v)).join("")}</dl>
   <p class="cparts"><b>${t.bimP}:</b> <bdi>${BIM.parts}</bdi></p>
   <div class="cact">${pdfBtn(BIM.id)}<a class="btn s" href="${BIM.all}" target="_blank" rel="noopener">${t.allPdf}</a></div></div></article>
  <p class="csub">${t.bimCourses}</p>
  <div class="cgrid">${COURSES.map(course).join("")}</div>
  <p class="csub">${t.engTr}</p>
  <div class="cgrid">${OTHER.tech.map(other).join("")}</div>
  <h3 class="cgrp"><small>03</small>${t.cG[2]}</h3>
  <div class="cgrid">${(n=0,OTHER.mgmt.map(other).join(""))}</div>
  <h3 class="cgrp"><small>04</small>${t.cG[3]}</h3>
  <div class="cgrid">${(n=0,OTHER.extra.map(other).join(""))}</div>
 </div></section>`;
}
function page(){
 const t=T[L],a=L=="ar"?1:0,nm=CONFIG.name[L];
 const caps=CAPS.map(c=>`<article class="cap${c.wide?" wide":""}"><span class="ltr">${c.l}</span><h3>${(a?c.ar:c.en)[0]}</h3><p>${(a?c.ar:c.en)[1]}</p><ul>${c.i.map(x=>`<li><span class="dot" aria-hidden="true"></span><span>${a?x[1]:x[0]}</span></li>`).join("")}</ul></article>`).join("");
 const areas=AREAS.map((r,i)=>`<article class="area"><img src="img/thumb/${pad(r.img)}.jpg" alt="${esc(a?r.ar:r.en)}" loading="lazy"><div><h3><small>${String.fromCharCode(65+i)}</small>${a?r.ar:r.en}</h3><ul>${r.i.map(x=>`<li><span class="dot" aria-hidden="true"></span><span>${a?x[1]:x[0]}</span></li>`).join("")}</ul><button type="button" data-go="${r.k}">${t.viewPh}</button></div></article>`).join("");
 const cap=Object.fromEntries(P.map(p=>[p[0],a?p[3]:p[2]]));
 const seqs=SEQ.map((s,i)=>`<div><div class="seqh"><h3>${t.seqH[i][0]}</h3><p>${t.seqH[i][1]}</p></div><div class="steps">${s.map(n=>`<figure><img src="img/thumb/${pad(n)}.jpg" alt="${esc(cap[n])}" loading="lazy" data-open="${n}" data-set="s${i}"><figcaption>${cap[n]}</figcaption></figure>`).join("")}</div></div>`).join("");
 const docs=DOCS.length?`<div class="grid" style="margin-top:28px">${DOCS.map((d,i)=>`<button data-doc="${i}"><img src="${d.img}" alt="${esc(a?d.ar:d.en)}" loading="lazy"><span>${a?d.ar:d.en}</span></button>`).join("")}</div>`:`<div class="docs">${t.docTypes.map(d=>`<div class="doc">${ico.file}<div><h3>${d[0]}</h3><p>${d[1]}</p></div></div>`).join("")}</div>${CONFIG.draft?`<span class="draftnote">${t.docDraft}</span>`:""}`;
 return `
<section class="band" id="home"><div class="wrap hero">
 <div>
  <div class="kick">${t.kick}</div>
  <h1>${nm}</h1>
  <div class="title">${t.title}</div>
  <p>${t.intro}</p>
  <ul class="pills">${t.pills.map(p=>`<li>${p}</li>`).join("")}</ul>
  <div class="btns"><a class="btn p" href="#contact">${t.contact}</a><a class="btn s" href="${L=="ar"?"cv-ar.pdf":"cv.pdf"}">${t.cv}</a></div>
  ${reach("hero-r")}
 </div>
 <div class="plate">
  <figure class="p1">${CONFIG.photo?`<img src="${CONFIG.photo}" alt="${esc(nm)}" fetchpriority="high" style="object-position:50% 20%">`:""}<img ${CONFIG.photo?"hidden ":""}src="img/full/91.jpg" alt="${esc(t.tags[0])}" fetchpriority="high"><span class="tag">${t.tags[0]}</span></figure>
  <figure class="p2"><img src="img/full/60.jpg" alt="${esc(t.tags[1])}"><span class="tag">${t.tags[1]}</span></figure>
  <figure class="p3 dwg">${dwg}<span class="tag">${t.tags[2]}</span></figure>
  <figure class="p4"><img src="img/thumb/83.jpg" alt="${esc(t.tags[3])}"><span class="tag">${t.tags[3]}</span></figure>
  <figure class="p5"><img src="img/thumb/64.jpg" alt="${esc(t.tags[4])}"><span class="tag">${t.tags[4]}</span></figure>
 </div>
</div></section>
<section class="facts" aria-label="Key facts">${t.facts.map(f=>`<div><b>${f[0]}</b><span>${f[1]}</span></div>`).join("")}</section>

<section class="band" id="profile"><div class="wrap">
 <div class="eyebrow">${t.profEy}<span>01</span></div>
 <div class="prof">
  <div><h2>${t.profH}</h2><div style="margin-top:22px">${t.prof.map(p=>`<p>${p}</p>`).join("")}</div></div>
  <aside class="box"><h3>${t.rolesH}</h3><ul class="roles">${t.roles.map(r=>`<li>${r[0]}<span class="ltrnum">${r[1]}</span></li>`).join("")}</ul>
   <h3>${t.compH}</h3><div class="chips">${t.comps.map(c=>`<span>${c}</span>`).join("")}</div><p class="note">${t.compNote}</p></aside>
 </div>
</div></section>

<section class="band stone" id="capabilities"><div class="wrap">
 <div class="eyebrow">${t.capEy}<span>02</span></div>
 <h2>${t.capH}</h2><p class="lede">${t.capL}</p>
 <div class="caps">${caps}</div>
</div></section>

<section class="band dark" id="leadership"><div class="wrap lead">
 <div><div class="eyebrow">${t.leadEy}<span>03</span></div><h2>${t.leadH}</h2><p class="lede">${t.leadL}</p>
  <ol>${t.lead.map(x=>`<li>${x}</li>`).join("")}</ol></div>
 <figure><img src="img/full/07.jpg" alt="${esc(t.leadH)}" loading="lazy">${CONFIG.teamSize?`<div class="stat"><b class="ltrnum">${CONFIG.teamSize}</b><span>${t.statL}</span></div>`:""}</figure>
</div></section>

<section class="band" id="practice"><div class="wrap">
 <div class="eyebrow">${t.prEy}<span>04</span></div>
 <h2>${t.prH}</h2><p class="lede">${t.prL}</p>
 <div class="areas">${areas}</div>
 <div class="seqs">${seqs}</div>
</div></section>

<section class="band stone" id="gallery"><div class="wrap">
 <div class="eyebrow">${t.galEy}<span>05</span></div>
 <h2>${t.galH}</h2>
 <div class="filters" id="filters" role="group"></div>
 <p class="count" id="count"></p>
 <div class="grid" id="grid"></div>
</div></section>

${DOCS.length||CONFIG.draft?`<section class="band" id="documents"><div class="wrap">
 <div class="eyebrow">${t.docEy}<span>06</span></div>
 <h2>${t.docH}</h2><p class="lede">${t.docL}</p>${docs}
</div></section>`:""}

<section class="band stone" id="experience"><div class="wrap">
 <div class="eyebrow">${t.expEy}<span>07</span></div>
 <h2>${t.expH}</h2>
 <ol class="tl">${EXP.map(e=>`<li><div><div class="when">${e.when[a]}</div>${e.loc[a]?`<div class="loc">${e.loc[a]}</div>`:""}</div><div><h3>${e.t[a]}${e.cur?`<span class="cur">${t.current}</span>`:""}</h3><div class="org"><bdi>${a?e.orgAr:e.org}</bdi></div><ul>${e.b.map(b=>`<li>${b[a]}</li>`).join("")}</ul></div></li>`).join("")}</ol>
</div></section>

<section class="band" id="education"><div class="wrap">
 <div class="eyebrow">${t.eduEy}<span>08</span></div>
 <h2>${t.eduH}</h2>
 <div class="cred">${EDU.map(e=>{const x=a?e.ar:e.en;return`<div class="card"><h3>${x[0]}</h3>${x[1]?`<p>${x[1]}</p>`:""}${e.list?`<ul>${e.list.map(l=>`<li>${l[a]}</li>`).join("")}</ul>`:""}${e.ok?`<span class="ok">${t.verified}</span>`:""}</div>`}).join("")}</div>
 <p style="margin-top:22px"><a class="btn s" href="certifications.html">${t.certsAll} →</a></p>
</div></section>

<section class="band dark" id="contact"><div class="wrap contact">
 <div><div class="eyebrow">${t.conEy}<span>09</span></div><h2>${t.conH}</h2><p class="lede">${t.conL}</p>${reach("dark-r")}</div>
 <div class="rows">
  <a class="row" href="mailto:${CONFIG.email}"><span class="ic">${ico.mail}</span><span><small>${t.email}</small><b>${CONFIG.email}</b></span></a>
  <a class="row" href="tel:${CONFIG.phoneHref}"><span class="ic">${ico.phone}</span><span><small>${t.phone}</small><b>${CONFIG.phone}</b></span></a>
  <a class="row" href="${L=="ar"?"cv-ar.pdf":"cv.pdf"}"><span class="ic">${ico.file}</span><span><small>${t.cvrow}</small><b style="direction:inherit">${t.cvlink}</b></span></a>
  ${CONFIG.linkedin?`<a class="row" href="${CONFIG.linkedin}"><span class="ic">in</span><span><small>LinkedIn</small><b>LinkedIn</b></span></a>`:""}
 </div>
</div></section>`;
}


const icoBld='<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M3 21h18M5 21V7l7-4 7 4v14M9 21v-4h6v4M9 10h.01M15 10h.01M9 14h.01M15 14h.01"/></svg>';
const orgById=id=>ORGS.find(o=>o.id==id);
function projectCard(p,t,a){
 const g=o=>o?(a?o.ar:o.en):"";
 const im=p.imgs||[];const set=`pj-${p.id}`;
 return `<article class="pcard" id="${p.id}">
  ${im.length?`<div class="pimg"><img src="img/thumb/${pad(im[0])}.jpg" alt="${esc(g(p.name))}" loading="lazy" data-open="${im[0]}" data-set="${set}"></div>${im.length>1?`<div class="pthumbs">${im.slice(1,5).map(n=>`<img src="img/thumb/${pad(n)}.jpg" alt="" loading="lazy" data-open="${n}" data-set="${set}">`).join("")}</div>`:""}`:`<div class="pimg noph"><span>${icoBld}<small>${t.prjNoPh}</small></span></div>`}
  <div class="pbody"><h3>${g(p.name)}</h3>
   <div class="pmeta">${g(p.location)?`<span>${g(p.location)}</span>`:""}<span>${g(p.type)}</span></div>
   <p>${g(p.summary)||t.prjDesc[p.g]}</p>
   <div class="pwork"><b>${t.prjWork}</b><p>${g(p.work)||`<span class="tbd">${t.prjWorkTbd}</span>`}</p></div>
  </div></article>`;
}
function projectsPage(){
 const t=T[L],a=L=="ar"?1:0,pr=PROJECTS.filter(p=>p.verified);
 const groups=["mrd","rd","c"].map(k=>{const l=pr.filter(p=>p.g==k);return l.length?`<section class="pgroup"><h3 class="gh">${t.prjG[k]}<small>${l.length}</small></h3><div class="pgrid">${l.map(p=>projectCard(p,t,a)).join("")}</div></section>`:""}).join("");
 return `<section class="band" id="projects"><div class="wrap">
  <div class="eyebrow">${t.prjEy}<span class="ltrnum">${pr.length}</span></div><h2>${t.prjH}</h2>
  ${groups}
 </div></section>`;
}
function orgsPage(){
 const t=T[L],a=L=="ar"?1:0,g=o=>o?(a?o.ar:o.en):"";
 return `<section class="band" id="organizations"><div class="wrap">
  <div class="eyebrow">${t.pages[2][2]}</div><h2>${t.pages[2][2]}</h2><p class="lede">${t.orgIntro}</p>
  <div class="ogrid simple">${ORGS.map(o=>{const prj=PROJECTS.filter(p=>p.verified&&(p.orgIds||[]).includes(o.id));
   return `<article class="otile" id="org-${o.id}">
    <div class="ologo">${o.logo?`<img src="${o.logo}" alt="${esc(g(o.name))}">`:`<span class="lslot">${icoBld}<small>${t.logoHere}</small></span>`}</div>
    <div class="obody"><h3>${g(o.name)}</h3>
     <div class="assoc"><small>${t.assocP}:</small>${prj.length?`<ul>${prj.map(p=>`<li><a href="projects.html#${p.id}">${g(p.name)}</a></li>`).join("")}</ul>`:`<ul><li class="none">${t.assocNone}</li></ul>`}</div>
    </div></article>`}).join("")}</div>
  <p class="note" style="margin-top:28px">${t.tm}</p>
 </div></section>`;
}
function jobsPage(){
 const t=T[L],a=L=="ar"?1:0;
 return `<section class="band" id="jobs"><div class="wrap">
  <div class="eyebrow">${t.jobsEy}</div><h2>${t.jobsH}</h2><p class="lede">${t.jobsL}</p>
  <div class="jgrid">${EXP.map(e=>`<article class="jcard${e.cur?" now":""}">
   <div class="jtop"><span class="when">${e.when[a]}</span>${e.cur?`<span class="cur">${t.current}</span>`:""}</div>
   <h3><bdi>${a?e.orgAr:e.org}</bdi></h3>
   <div class="jt">${e.t[a]}${e.loc[a]?` · <span>${e.loc[a]}</span>`:""}</div>
   <ul>${e.b.map(b=>`<li>${b[a]}</li>`).join("")}</ul></article>`).join("")}</div>
 </div></section>`;
}
function renderGallery(){
 const t=T[L],a=L=="ar"?1:0;
 view=P.filter(p=>filter=="all"||p[1]==filter);
 const keys=Object.keys(CATS).filter(k=>P.some(p=>p[1]==k));
 document.getElementById("filters").innerHTML=[["all",t.all,P.length],...keys.map(k=>[k,CATS[k][a],P.filter(p=>p[1]==k).length])].map(([k,l,n])=>`<button class="f" data-f="${k}" aria-pressed="${k==filter}">${l}<small>${n}</small></button>`).join("");
 document.getElementById("grid").innerHTML=view.map(p=>`<button data-open="${p[0]}" aria-label="${esc(a?p[3]:p[2])}"><img src="img/thumb/${pad(p[0])}.jpg" alt="${esc(a?p[3]:p[2])}" loading="lazy"><span>${a?p[3]:p[2]}</span></button>`).join("");
 document.getElementById("count").textContent=`${view.length} ${t.photos}`+(filter=="all"?"":` · ${CATS[filter][a]}`);
}

let io;
function render(keep){
 const t=T[L];
 document.documentElement.lang=L;document.documentElement.dir=t.dir;
 const sub={projects:[t.prjEy],orgs:[t.pages[2][2]],jobs:[t.pages[3][2]],certs:[t.pages[4][2]]}[PAGE];document.title=(sub?sub[0]+" — ":"")+(L=="ar"?CONFIG.name.ar+" — مهندس مدني":"Mohamed Abdalrhman Elyas Ahmed — Civil Engineer");
 document.getElementById("hdrName").textContent=CONFIG.name[L];
 document.getElementById("hdrRole").textContent=t.role;
 document.getElementById("hdrCv").textContent=t.cv;document.getElementById("hdrCv").href=L=="ar"?"cv-ar.pdf":"cv.pdf";
 const lb=document.getElementById("lang");lb.textContent=t.lang;lb.lang=L=="ar"?"en":"ar";lb.setAttribute("aria-label",L=="ar"?"Switch to English":"التبديل إلى العربية");
 document.getElementById("secnav").innerHTML=(PAGE=="home"?t.nav:[]).filter(n=>n[0]!="home"&&(n[0]!="documents"||DOCS.length||CONFIG.draft)).map(([id,l])=>`<a href="#${id}" data-id="${id}">${l}</a>`).join("");
 document.getElementById("app").innerHTML=PAGE=="projects"?projectsPage():PAGE=="orgs"?orgsPage():PAGE=="jobs"?jobsPage():PAGE=="certs"?certsPage():page();
 document.getElementById("pagenav").innerHTML=t.pages.map(([h,k,l])=>`<a href="${h}"${k==PAGE?' aria-current="page" class="on"':""}>${l}</a>`).join("");
 document.getElementById("secnav").hidden=PAGE!="home";
 {const on=document.querySelector("#pagenav a.on");const nv=document.getElementById("pagenav");if(on&&nv.scrollWidth>nv.clientWidth)nv.scrollLeft+=on.getBoundingClientRect().left-nv.getBoundingClientRect().left-(nv.clientWidth-on.offsetWidth)/2;}
 document.getElementById("foot1").textContent=CONFIG.name[L]+" · "+t.foot1;
 document.getElementById("foot2").textContent=t.foot2;
 const fr=document.getElementById("footReach");if(fr)fr.innerHTML=reach("foot-r");
 ["prev","next","close"].forEach(k=>document.getElementById(k).textContent=t[k]);
 if(PAGE=="home")renderGallery();
 if(io)io.disconnect();
 io=new IntersectionObserver(es=>{es.forEach(e=>{if(e.isIntersecting){current=e.target.id;document.querySelectorAll("#secnav a").forEach(x=>{const on=x.dataset.id==current;x.classList.toggle("on",on);if(on)x.scrollIntoView({block:"nearest",inline:"nearest"})})}})},{rootMargin:"-45% 0px -50% 0px"});
 document.querySelectorAll("main section[id]").forEach(s=>io.observe(s));
 if(keep){const el=document.getElementById(keep);if(el){document.documentElement.style.scrollBehavior="auto";el.scrollIntoView();document.documentElement.style.scrollBehavior=""}}
}

document.getElementById("lang").addEventListener("click",()=>{
 const keep=current;L=L=="en"?"ar":"en";try{localStorage.setItem("lang",L)}catch(e){}render(keep);
});
document.addEventListener("click",e=>{
 const f=e.target.closest("[data-f]");if(f){filter=f.dataset.f;renderGallery();return}
 const g=e.target.closest("[data-go]");if(g){filter=g.dataset.go;renderGallery();document.getElementById("gallery").scrollIntoView();return}
 const ce=e.target.closest("[data-cert]");if(ce){
  certList=[...document.querySelectorAll("[data-cert]")].map(x=>[x.dataset.cert,x.getAttribute("aria-label")]);certPos=certList.findIndex(x=>x[0]==ce.dataset.cert);mode="cert";show();try{dlg.showModal()}catch(err){dlg.setAttribute("open","")}return}
 const o=e.target.closest("[data-open]");if(o){mode="photo";
  const id=+o.dataset.open;
  list=o.dataset.set?[...document.querySelectorAll(`[data-set="${o.dataset.set}"]`)].map(x=>+x.dataset.open):view.map(p=>p[0]);
  pos=list.indexOf(id);show();try{dlg.showModal()}catch(err){dlg.setAttribute("open","")}
 }
});
const dlg=document.getElementById("lb"),li=document.getElementById("lbimg"),lc=document.getElementById("lbcap");
let list=[],pos=0;
let mode="photo",certList=[],certPos=0;
function show(){if(mode=="cert"){const c=certList[certPos];li.src=`img/certs/${c[0]}.jpg`;li.alt=c[1];lc.textContent=`${c[1].replace(/^[^—]*— /,"")} — ${certPos+1} / ${certList.length}`;return}const a=L=="ar"?1:0,id=list[pos],p=P.find(x=>x[0]==id);li.src=`img/full/${pad(id)}.jpg`;li.alt=p?p[2+a]:"";lc.textContent=`${p?p[2+a]:""} — ${pos+1} / ${list.length}`}
const step=d=>{if(mode=="cert")certPos=(certPos+d+certList.length)%certList.length;else pos=(pos+d+list.length)%list.length;show()};
document.getElementById("prev").onclick=()=>step(-1);
document.getElementById("next").onclick=()=>step(1);
document.getElementById("close").onclick=()=>dlg.close();
dlg.addEventListener("click",e=>{if(e.target==dlg)dlg.close()});
document.addEventListener("keydown",e=>{if(!dlg.open)return;const r=L=="ar";if(e.key=="ArrowLeft")step(r?1:-1);if(e.key=="ArrowRight")step(r?-1:1)});
render();
if(location.hash){const el=document.getElementById(location.hash.slice(1));if(el)el.scrollIntoView()}
}