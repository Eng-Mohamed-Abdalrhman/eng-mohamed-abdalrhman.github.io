{
/* ===== CONFIG (edit here) ===== */
const CONFIG={
  name:{en:"MOHAMED ABDALRHMAN ELYAS AHMED",ar:"محمد عبدالرحمن الياس احمد"},
  email:"eng.mohamedabdalrhman6@gmail.com", phone:"+966 50 604 8872", phoneHref:"+966506048872",
  linkedin:"",            /* hidden until a verified URL is supplied */
  teamSize:null,          /* e.g. "130–150" — shown only after confirmation */
  draft:false,            /* true = review notes + empty document placeholders */
  photo:""                /* hero portrait, e.g. "img/portrait.jpg" */
};
/* Document samples (AutoCAD, BOQ, reports…) — add items here when supplied:
   {type:"autocad", img:"docs/plan-01.jpg", en:"Title", ar:"العنوان"} */
const DOCS=[];
/* Projects — add only after confirmation. Owner, main contractor and employer are separate fields.
   {verified:true, name:{en:"",ar:""}, owner:{en:"",ar:""}, contractor:{en:"",ar:""}, employer:{en:"",ar:""},
    location:{en:"",ar:""}, type:{en:"",ar:""}, role:{en:"",ar:""}, scope:{en:[""],ar:[""]}, imgs:[17,24]} */
const PROJECTS=[];
/* PROJECTS item (publish only after confirmation):
   {id:"p1", verified:true, logo:"assets/logos/p1.png", img:17, imgs:[17,24],
    name:{en:"",ar:""}, location:{en:"",ar:""}, type:{en:"",ar:""}, summary:{en:"",ar:""},
    ownerId:"aramco", contractorId:"rtcc", employer:{en:"",ar:""}, role:{en:"",ar:""}, scope:{en:[],ar:[]}} */
/* Organizations associated with projects. role: "owner" | "contractor" | "related".
   logo: path in assets/logos/ — only official files used with permission; empty = neutral name tile. */
const ORGS=[
 {id:"aramco",name:{en:"Saudi Aramco",ar:"أرامكو السعودية"},short:"",site:"https://www.aramco.com",logo:"",role:"related"},
 {id:"rtcc",name:{en:"Al-Rashid Trading & Contracting Co.",ar:"شركة الراشد للتجارة والمقاولات"},short:"RTCC",site:"https://www.rtcc.com.sa/",logo:"",role:"related"}];
const PAGE=document.body.dataset.page||"home";
let PREVIEW=false;try{PREVIEW=/[?&]preview\b/.test(location.search)}catch(e){}

const T={
en:{dir:"ltr",lang:"العربية",cv:"Download CV",role:"Civil Engineer",
 nav:[["home","Home"],["profile","Profile"],["capabilities","Capabilities"],["leadership","Leadership"],["practice","Practice areas"],["gallery","Gallery"],["documents","Documents"],["experience","Experience"],["education","Education"],["contact","Contact"]],
 kick:"Engineering Portfolio · Kingdom of Saudi Arabia",
 title:'Civil Engineer — <em>Project &amp; Site Engineering · Technical Office · Construction Supervision</em>',
 intro:"Civil engineer with 7+ years across construction supervision, infrastructure and maintenance projects, and engineering administration — combining site execution with planning, documentation, coordination and team leadership.",
 pills:["Engineering knowledge","Site execution","Project management","Technical office","Engineering documentation","Team leadership"],
 contact:"Contact me",
 tags:["Parking & external works","Reinforcement","Technical office","Gypsum ceilings","Office fit-out"],
 facts:[["7+ years","Engineering experience since 2018"],["SCE","Accredited Engineer — Civil Engineering"],["B.Sc. (Hons)","Civil Engineering — Highway & Transportation"],["6 organisations","Private contracting & public sector, KSA · Sudan"]],
 profEy:"Professional profile",profH:"A civil engineer between the site, the technical office and the project team",
 prof:["I work as a Civil Engineer with a general contracting establishment in Saudi Arabia, supervising construction activities against approved drawings, specifications and safety standards, reviewing engineering plans, coordinating site teams and monitoring the quality and progress of works.",
 "As Engineering Administration Manager at Blanco Group I managed engineering and administrative operations — planning, coordination, oversight of daily activities and reporting — and worked with clients and stakeholders. In Sudan I supervised road and bridge works, infrastructure projects and the construction and maintenance of judicial buildings, using AutoCAD for technical documentation and reporting."],
 rolesH:"Positions held",compH:"Areas of competence",
 roles:[["Civil Engineer","2018 – present"],["Engineering Administration Manager","2020 – 2022"],["Trainee Civil Engineer","2017"]],
 comps:["Civil Engineering","Project Engineering","Site Engineering","Technical Office","Engineering Design & Drafting","Quantity Surveying","Project Coordination","Construction Management","Engineering Administration","Construction Supervision"],
 compNote:"Areas of competence describe the scope of skills; positions held are the formal job titles.",
 capEy:"Engineering & technical capabilities",capH:"What I bring beyond the site",capL:"Field, office and commercial skills across the project lifecycle.",
 legD:"Documented in professional record or site photographs",legR:"Related working knowledge",
 leadEy:"Project leadership & workforce management",leadH:"Leading large site teams to handover",leadL:"Supervising multi-trade crews and coordinating supervisors, disciplines and contractors on active sites.",
 lead:["Managing large site workforces","Assigning tasks and following up execution","Coordinating labour and supervisors","Tracking daily productivity","Coordinating trades and disciplines","Monitoring quality of works","Solving problems on site","Following progress through to handover"],
 statL:"workers on one project",
 prEy:"Engineering practice areas",prH:"Construction, finishing and infrastructure scope",prL:"The types of work in my professional environment. Markers show which items are documented and which are related knowledge.",
 viewPh:"View photographs",
 seqH:[["Interlock paving — from rework to handover","Stages of the work type; photographs may come from different sites."],["Ceilings and interior finishes","Stages of the work type."],["Roof waterproofing — torch-applied membrane","Stages of the work type."]],
 galEy:"Engineering gallery",galH:"Site photographs",all:"All",photos:"photographs",
 docEy:"Documentation & reports",docH:"Drawings, quantities and reports",docL:"Samples of technical-office work — AutoCAD drawings, engineering plans, BOQ samples and reports — will be published here.",
 docTypes:[["AutoCAD drawings","Plans, details and sections"],["Engineering plans","Layouts and coordination drawings"],["Technical drawings","Shop and as-built references"],["BOQ samples","Bills of quantities and take-offs"],["Engineering reports","Daily, weekly and highlight reports"],["Project documentation","Requests, submittals and records"]],
 docDraft:"Review note: document samples pending — this block shows only in the review draft.",
 expEy:"Professional experience",expH:"Experience",current:"Current",pages:[["index.html","home","Home"],["projects.html","projects","Projects"],["organizations.html","orgs","Organizations"]],
 prjEy:"Projects",prjH:"Projects I have contributed to",prjL:"Construction, finishing and infrastructure projects, with the organizations involved and my role on each.",
 prjF:{owner:"Project owner",contractor:"Main contractor",employer:"Engaged through",location:"Location",type:"Project type",role:"My role"},
 prjEmpty:"Project details are being documented and will be published here once confirmed.",prjEmptyCta:"See site photographs",
 prjMore:"Scope of work",logoSlot:"Project logo",viewOrg:"View organization",
 tplNote:"Template preview — sample layout only, not a real project. Visible only with ?preview.",tplName:"Project name",tplLoc:"City, Saudi Arabia",tplType:"Project type",tplSum:"Short description of the engineering works carried out.",
 orgEy:"Project organizations & main contractors",orgH:"Organizations associated with projects I have contributed to",orgL:"Project owners, main contractors and related organizations connected to the projects I have worked on. A listing shows association with a project — not ownership, employment or a client relationship unless stated.",
 orgRoles:{owner:"Project owner",contractor:"Main contractor",related:"Related organization"},
 visit:"Official website",linkedPrj:"Related projects",logoPending:"Official logo pending permission",addOrg:"Space for an additional organization",
 tm:"Company names and logos are trademarks of their respective owners and are shown for identification only.",
 eduEy:"Education & certifications",eduH:"Accreditation, education and training",verified:"Verified document",
 conEy:"Contact",conH:"Let's discuss your next project",conL:"Open to civil, project, site and technical-office engineering roles in Saudi Arabia.",
 email:"Email",phone:"Phone / WhatsApp",cvrow:"Curriculum vitae",cvlink:"Download CV (PDF)",
 foot1:"Civil Engineer · Kingdom of Saudi Arabia",foot2:"Updated November 2026",
 prev:"←",next:"→",close:"Close"},
ar:{dir:"rtl",lang:"English",cv:"تحميل السيرة الذاتية",role:"مهندس مدني",
 nav:[["home","الرئيسية"],["profile","الملف المهني"],["capabilities","القدرات"],["leadership","القيادة"],["practice","مجالات العمل"],["gallery","المعرض"],["documents","المستندات"],["experience","الخبرات"],["education","التعليم"],["contact","التواصل"]],
 kick:"البورتفوليو الهندسي · المملكة العربية السعودية",
 title:'مهندس مدني — <em>هندسة المشاريع والمواقع · المكتب الفني · الإشراف على التنفيذ</em>',
 intro:"مهندس مدني بخبرة تزيد على 7 سنوات في الإشراف على أعمال الإنشاء ومشاريع البنية التحتية والصيانة والإدارة الهندسية، يجمع بين التنفيذ الميداني والتخطيط والتوثيق والتنسيق وقيادة فرق العمل.",
 pills:["المعرفة الهندسية","التنفيذ الميداني","إدارة المشاريع","المكتب الفني","التوثيق الهندسي","قيادة فرق العمل"],
 contact:"تواصل معي",
 tags:["المواقف والأعمال الخارجية","أعمال التسليح","المكتب الفني","أسقف الجبس بورد","تجهيز المكاتب"],
 facts:[["+7 سنوات","خبرة هندسية منذ 2018"],["مهندس معتمد","الهيئة السعودية للمهندسين — هندسة مدنية"],["بكالوريوس","الهندسة المدنية (مرتبة الشرف) — الطرق والنقل"],["6 جهات عمل","القطاع الخاص والحكومي، السعودية والسودان"]],
 profEy:"الملف المهني",profH:"مهندس مدني يجمع بين الموقع والمكتب الفني وفريق المشروع",
 prof:["أعمل مهندساً مدنياً في مؤسسة مقاولات عامة بالمملكة العربية السعودية، أشرف على أعمال الإنشاء وفق المخططات والمواصفات المعتمدة ومعايير السلامة، وأراجع المخططات الهندسية، وأنسّق فرق العمل في الموقع، وأتابع جودة الأعمال ونسب تقدمها.",
 "وبصفتي مدير الإدارة الهندسية في Blanco Group، أدرت العمليات الهندسية والإدارية من تخطيط وتنسيق ومتابعة للأنشطة اليومية وإعداد التقارير، وتواصلت مع العملاء والجهات المعنية. وفي السودان أشرفت على أعمال الطرق والجسور ومشاريع البنية التحتية وأعمال إنشاء وصيانة مباني السلطة القضائية، مستخدماً AutoCAD في التوثيق الفني وإعداد التقارير."],
 rolesH:"المسميات الوظيفية",compH:"مجالات الكفاءة",
 roles:[["مهندس مدني","2018 – حتى الآن"],["مدير الإدارة الهندسية","2020 – 2022"],["مهندس مدني متدرب","2017"]],
 comps:["الهندسة المدنية","هندسة المشاريع","الهندسة الميدانية","المكتب الفني","التصميم والرسم الهندسي","حصر الكميات","تنسيق المشاريع","إدارة الإنشاءات","الإدارة الهندسية","الإشراف على التنفيذ"],
 compNote:"مجالات الكفاءة تصف نطاق المهارات، أما المسميات الوظيفية فهي المناصب الرسمية التي شغلها.",
 capEy:"القدرات الهندسية والفنية",capH:"ما أقدّمه أبعد من الموقع",capL:"مهارات ميدانية ومكتبية وتجارية تغطي دورة حياة المشروع.",
 legD:"موثّقة في السجل المهني أو صور المواقع",legR:"معرفة عملية ذات صلة",
 leadEy:"قيادة المشاريع وإدارة القوى العاملة",leadH:"قيادة فرق عمل كبيرة حتى التسليم",leadL:"الإشراف على أطقم متعددة التخصصات وتنسيق المشرفين والتخصصات والمقاولين في المواقع النشطة.",
 lead:["إدارة القوى العاملة الكبيرة في الموقع","توزيع المهام ومتابعة التنفيذ","تنسيق العمالة والمشرفين","متابعة الإنتاجية اليومية","التنسيق بين الفرق والتخصصات","متابعة جودة الأعمال","حل المشكلات الميدانية","متابعة التقدم حتى التسليم"],
 statL:"عامل في مشروع واحد",
 prEy:"مجالات الممارسة الهندسية",prH:"نطاق أعمال الإنشاء والتشطيبات والبنية التحتية",prL:"أنواع الأعمال في بيئتي المهنية، وتوضّح العلامات البنود الموثّقة والبنود التي تمثل معرفة ذات صلة.",
 viewPh:"عرض الصور",
 seqH:[["رصف الإنترلوك — من الإزالة حتى التسليم","مراحل نوع العمل؛ قد تكون الصور من مواقع مختلفة."],["الأسقف والتشطيبات الداخلية","مراحل نوع العمل."],["عزل الأسطح — لفائف بالحرارة","مراحل نوع العمل."]],
 galEy:"المعرض الهندسي",galH:"صور من المواقع",all:"الكل",photos:"صورة",
 docEy:"المستندات والتقارير",docH:"المخططات والكميات والتقارير",docL:"ستُنشر هنا نماذج من أعمال المكتب الفني: مخططات AutoCAD والمخططات الهندسية ونماذج جداول الكميات والتقارير.",
 docTypes:[["مخططات AutoCAD","مساقط وتفاصيل وقطاعات"],["المخططات الهندسية","مخططات التوزيع والتنسيق"],["الرسومات الفنية","مخططات تنفيذية ومخططات As-Built"],["نماذج جداول الكميات","جداول الكميات (BOQ) والحصر"],["التقارير الهندسية","تقارير يومية وأسبوعية وتقارير موجزة"],["توثيق المشاريع","الطلبات والاعتمادات والسجلات"]],
 docDraft:"ملاحظة مراجعة: نماذج المستندات قيد التجهيز — يظهر هذا الجزء في مسودة المراجعة فقط.",
 expEy:"الخبرات المهنية",expH:"الخبرات",current:"حالياً",pages:[["index.html","home","الرئيسية"],["projects.html","projects","المشاريع"],["organizations.html","orgs","الجهات والشركات"]],
 prjEy:"المشاريع",prjH:"المشاريع التي شاركت في العمل عليها",prjL:"مشاريع إنشاء وتشطيبات وبنية تحتية، مع الجهات المرتبطة بكل مشروع ودوري فيه.",
 prjF:{owner:"الجهة المالكة",contractor:"المقاول الرئيسي",employer:"جهة العمل",location:"الموقع",type:"نوع المشروع",role:"دوري"},
 prjEmpty:"يجري توثيق تفاصيل المشاريع، وستُنشر هنا بعد اعتمادها.",prjEmptyCta:"عرض صور المواقع",
 prjMore:"نطاق الأعمال",logoSlot:"شعار المشروع",viewOrg:"عرض الجهة",
 tplNote:"معاينة قالب — تصميم توضيحي فقط وليس مشروعاً حقيقياً. يظهر فقط عند استخدام ?preview.",tplName:"اسم المشروع",tplLoc:"المدينة، المملكة العربية السعودية",tplType:"نوع المشروع",tplSum:"وصف مختصر للأعمال الهندسية المنفذة.",
 orgEy:"الجهات المرتبطة بالمشاريع والمقاولون الرئيسيون",orgH:"الجهات والشركات المرتبطة بالمشاريع التي شاركت في العمل عليها",orgL:"الجهات المالكة والمقاولون الرئيسيون والجهات المرتبطة بالمشاريع التي عملت عليها. الإدراج يعني الارتباط بمشروع، ولا يعني الملكية أو التوظيف المباشر أو علاقة عميل ما لم يُذكر ذلك.",
 orgRoles:{owner:"الجهة المالكة",contractor:"المقاول الرئيسي",related:"جهة مرتبطة"},
 visit:"الموقع الرسمي",linkedPrj:"المشاريع المرتبطة",logoPending:"الشعار الرسمي بانتظار الإذن",addOrg:"مساحة لجهة إضافية",
 tm:"أسماء الشركات وشعاراتها علامات تجارية مملوكة لأصحابها، وتُعرض للتعريف فقط.",
 eduEy:"التعليم والشهادات",eduH:"الاعتماد المهني والتعليم والتدريب",verified:"مستند موثّق",
 conEy:"التواصل",conH:"لنتحدث عن مشروعك القادم",conL:"متاح لوظائف الهندسة المدنية وهندسة المشاريع والمواقع والمكتب الفني في المملكة العربية السعودية.",
 email:"البريد الإلكتروني",phone:"الهاتف / واتساب",cvrow:"السيرة الذاتية",cvlink:"تحميل السيرة الذاتية (PDF)",
 foot1:"مهندس مدني · المملكة العربية السعودية",foot2:"آخر تحديث: نوفمبر 2026",
 prev:"→",next:"←",close:"إغلاق"}};

/* d = documented (CV or photographs), r = related working knowledge */
const CAPS=[
 {l:"A",en:["Engineering Design & Drafting","Drawings, documentation and design coordination."],ar:["التصميم والرسم الهندسي","المخططات والتوثيق والتنسيق التصميمي."],i:[
  ["d","AutoCAD — technical documentation","AutoCAD — التوثيق الفني"],["d","Engineering plan & drawing review","مراجعة المخططات الهندسية"],["d","Technical drawings","الرسومات الفنية"],["d","Engineering documentation","التوثيق الهندسي"],["r","Engineering drawings","المخططات الهندسية"],["r","Design coordination","التنسيق التصميمي"],["d","Revit (training, 2025)","Revit (تدريب، 2025)"],["d","BIM standards (training, 2025)","معايير BIM (تدريب، 2025)"]]},
 {l:"B",en:["Quantity Surveying & Estimation","Quantities, measurement and cost inputs."],ar:["حصر الكميات والتقدير","الكميات والقياس ومدخلات التكلفة."],i:[
  ["r","Bill of Quantities (BOQ)","جداول الكميات (BOQ)"],["r","Quantity take-off","حصر الكميات"],["r","Material quantity calculations","حساب كميات المواد"],["r","Cost estimation","تقدير التكاليف"],["r","Material requirements","احتياجات المواد"],["r","Measurement & quantification","القياس والتكميم"],["r","Quantity verification","التحقق من الكميات"],["d","PlanSwift (training)","PlanSwift (تدريب)"]]},
 {l:"C",en:["Technical Office & Documentation","Reports, records and technical coordination."],ar:["المكتب الفني والتوثيق","التقارير والسجلات والتنسيق الفني."],i:[
  ["d","Technical reports","التقارير الفنية"],["d","Reporting processes","إدارة عمليات إعداد التقارير"],["d","Project documentation","توثيق المشاريع"],["d","Technical coordination","التنسيق الفني"],["d","Work progress documentation","توثيق تقدم الأعمال"],["r","Daily progress reports","تقارير التقدم اليومية"],["r","Weekly & monthly reports","التقارير الأسبوعية والشهرية"],["r","Highlight reports","التقارير الموجزة (Highlight)"],["r","Engineering correspondence","المراسلات الهندسية"],["r","Drawing registers","سجلات المخططات"],["r","Material submittals","اعتمادات المواد"]]},
 {l:"D",en:["Commercial & Procurement Documentation","The documents that move between site, procurement and suppliers."],ar:["المستندات التجارية والمشتريات","المستندات المتداولة بين الموقع والمشتريات والموردين."],i:[
  ["r","Quotations","عروض الأسعار"],["r","Invoices","الفواتير"],["r","Purchase requests (PR)","طلبات الشراء (PR)"],["r","Purchase orders (PO)","أوامر الشراء (PO)"],["r","Material requests (MR)","طلبات المواد (MR)"],["r","Supplier coordination","التنسيق مع الموردين"],["r","Procurement documentation","مستندات المشتريات"],["r","Cost & quantity records","سجلات التكاليف والكميات"]]},
 {l:"E",wide:1,en:["Project Coordination & Management","Planning, teams, quality and follow-up to completion."],ar:["تنسيق المشاريع وإدارتها","التخطيط والفرق والجودة والمتابعة حتى الإنجاز."],i:[
  ["d","Project planning","تخطيط المشاريع"],["d","Resource coordination","تنسيق الموارد"],["d","Site team management","إدارة فرق الموقع"],["d","Progress monitoring","متابعة تقدم الأعمال"],["d","Quality control","مراقبة الجودة"],["d","Project reporting","تقارير المشاريع"],["d","Problem solving","حل المشكلات"],["d","Execution follow-up","متابعة التنفيذ"],["d","Client & stakeholder communication","التواصل مع العملاء والجهات المعنية"],["r","Work scheduling","جدولة الأعمال"],["r","Contractor coordination","التنسيق مع المقاولين"]]}];

const AREAS=[
 {k:"structure",img:54,en:"Civil Construction & Structural Works",ar:"الأعمال المدنية والإنشائية",i:[["d","Civil construction","الأعمال المدنية"],["d","Reinforced concrete works","أعمال الخرسانة المسلحة"],["d","Blockwork","أعمال البلوك"],["d","Steel structures","الهياكل الحديدية"],["d","Infrastructure works","أعمال البنية التحتية"],["d","Road works & bridges","أعمال الطرق والجسور"]]},
 {k:"painting",img:49,en:"Building Finishing Works",ar:"أعمال تشطيب المباني",i:[["d","Interior & exterior painting","الدهانات الداخلية والخارجية"],["d","Decorative finishes","التشطيبات الديكورية"],["d","Tiles & marble","البلاط والرخام"],["d","Gypsum board","الجبس بورد"],["d","Villa finishing","تشطيب الفلل"],["r","Plastering","اللياسة"]]},
 {k:"interlock",img:17,en:"Flooring & External Paving",ar:"الأرضيات والرصف الخارجي",i:[["d","Interlock paving","رصف الإنترلوك"],["d","Parking areas","المواقف"],["d","External paving & kerbs","الرصف الخارجي والبردورات"],["d","Surface preparation","تجهيز الأسطح"],["r","Epoxy flooring","أرضيات الإيبوكسي"],["r","Concrete flooring","الأرضيات الخرسانية"]]},
 {k:"waterproofing",img:51,en:"Waterproofing & Insulation",ar:"العزل المائي والحراري",i:[["d","Roof waterproofing","عزل الأسطح"],["d","Torch-applied membrane systems","أنظمة اللفائف بالحرارة"],["r","Roof treatment","معالجة الأسطح"],["r","Thermal insulation","العزل الحراري"]]},
 {k:"fitout",img:9,en:"Glass & Office Fit-Out",ar:"الزجاج وتجهيز المكاتب",i:[["d","Office fit-out","تجهيز المكاتب"],["d","Glass partitions","القواطع الزجاجية"],["d","Workspace finishing","تشطيب مساحات العمل"],["r","Office renovation","تجديد المكاتب"],["r","Interior modifications","التعديلات الداخلية"]]},
 {k:"external",img:46,en:"Renovation & Maintenance",ar:"التجديد والصيانة",i:[["d","Building maintenance","صيانة المباني"],["d","Repair & rework","أعمال الإصلاح وإعادة التنفيذ"],["d","General construction works","أعمال الإنشاء العامة"],["r","Building renovation","تجديد المباني"],["r","Rehabilitation & refurbishment","إعادة التأهيل والتحديث"]]}];

const CATS={structure:["Structural & construction","الإنشاءات والهيكل"],roads:["Roads & external works","الطرق والأعمال الخارجية"],interlock:["Interlock paving","رصف الإنترلوك"],fitout:["Office fit-out & glass","تجهيز المكاتب والزجاج"],painting:["Painting & façades","الدهانات والواجهات"],tiles:["Tiles & marble","البلاط والرخام"],gypsum:["Gypsum & ceilings","الجبس والأسقف"],interiors:["Interior finishes","التشطيبات الداخلية"],waterproofing:["Waterproofing","العزل المائي"],external:["Maintenance & rework","الصيانة وإعادة التنفيذ"]};
const P=[
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
const SEQ=[[6,23,20,8,24],[36,38,43,48,32],[50,57,53]];
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
 {ok:1,en:["Professional Accreditation — Engineer","Saudi Council of Engineers · Civil Engineering"],ar:["الاعتماد المهني — مهندس","الهيئة السعودية للمهندسين · الهندسة المدنية"]},
 {en:["B.Sc. (Honours) Civil Engineering","Highway & Transportation · Sudan University of Science and Technology · 2013 – 2018"],ar:["بكالوريوس الهندسة المدنية (مرتبة الشرف)","تخصص الطرق والنقل · جامعة السودان للعلوم والتكنولوجيا · 2013 – 2018"]},
 {en:["Professional training",""],ar:["التدريب المهني",""],list:[["Revit, BIM Standards & Families — Mkademy, 2025","Revit ومعايير BIM والعائلات — Mkademy، 2025"],["AutoCAD, SAP2000, ETABS, CSI Column, PlanSwift — JELECOM, 2015","AutoCAD وSAP2000 وETABS وCSI Column وPlanSwift — JELECOM، 2015"],["Impactful Leadership & Effective Management — Edraak, 2020","القيادة المؤثرة والإدارة الفعّالة — إدراك، 2020"],["Personal Strategic Planning — AREES International University, 2020","التخطيط الاستراتيجي الشخصي — جامعة أريس الدولية، 2020"]]}];

/* ===== render ===== */
const pad=n=>String(n).padStart(2,"0");
const esc=s=>String(s).replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[c]);
let L="en";try{const s=localStorage.getItem("lang");if(s==="ar"||s==="en")L=s}catch(e){}
let filter="all",view=[],current="home";
const mk=t=>`<span class="mk ${t}" aria-hidden="true"></span>`;
const ico={mail:'<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>',phone:'<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z"/></svg>',file:'<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/></svg>'};
const dwg=`<svg viewBox="0 0 300 300" preserveAspectRatio="xMidYMid slice" aria-hidden="true"><defs><pattern id="g" width="20" height="20" patternUnits="userSpaceOnUse"><path d="M20 0H0V20" fill="none" stroke="rgba(255,255,255,.08)"/></pattern></defs><rect width="300" height="300" fill="url(#g)"/><g fill="none" stroke="#d6b27a" stroke-width="2"><rect x="60" y="70" width="180" height="140"/><path d="M60 140h80v70M140 70v40h100"/></g><g stroke="rgba(255,255,255,.55)" stroke-width="1"><path d="M60 230h180M60 224v12M240 224v12M260 70v140M254 70h12M254 210h12"/></g><g fill="rgba(255,255,255,.7)" font-family="IBM Plex Sans" font-size="11"><text x="140" y="246" text-anchor="middle">12.00</text><text x="276" y="144" transform="rotate(90 276 144)" text-anchor="middle">9.50</text></g><circle cx="190" cy="160" r="16" fill="none" stroke="rgba(255,255,255,.4)"/></svg>`;

function page(){
 const t=T[L],a=L=="ar"?1:0,nm=CONFIG.name[L];
 const caps=CAPS.map(c=>`<article class="cap${c.wide?" wide":""}"><span class="ltr">${c.l}</span><h3>${(a?c.ar:c.en)[0]}</h3><p>${(a?c.ar:c.en)[1]}</p><ul>${c.i.map(x=>`<li>${mk(x[0])}<span>${a?x[2]:x[1]}</span></li>`).join("")}</ul></article>`).join("");
 const areas=AREAS.map((r,i)=>`<article class="area"><img src="img/thumb/${pad(r.img)}.jpg" alt="${esc(a?r.ar:r.en)}" loading="lazy"><div><h3><small>${String.fromCharCode(65+i)}</small>${a?r.ar:r.en}</h3><ul>${r.i.map(x=>`<li>${mk(x[0])}<span>${a?x[2]:x[1]}</span></li>`).join("")}</ul><button type="button" data-go="${r.k}">${t.viewPh}</button></div></article>`).join("");
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
  <div class="btns"><a class="btn p" href="#contact">${t.contact}</a><a class="btn s" href="cv.pdf">${t.cv}</a></div>
 </div>
 <div class="plate">
  <figure class="p1">${CONFIG.photo?`<img src="${CONFIG.photo}" alt="${esc(nm)}" fetchpriority="high" style="object-position:50% 20%">`:""}<img ${CONFIG.photo?"hidden ":""}src="img/full/01.jpg" alt="${esc(t.tags[0])}" fetchpriority="high"><span class="tag">${t.tags[0]}</span></figure>
  <figure class="p2"><img src="img/full/29.jpg" alt="${esc(t.tags[1])}"><span class="tag">${t.tags[1]}</span></figure>
  <figure class="p3 dwg">${dwg}<span class="tag">${t.tags[2]}</span></figure>
  <figure class="p4"><img src="img/thumb/37.jpg" alt="${esc(t.tags[3])}"><span class="tag">${t.tags[3]}</span></figure>
  <figure class="p5"><img src="img/thumb/12.jpg" alt="${esc(t.tags[4])}"><span class="tag">${t.tags[4]}</span></figure>
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
 <div class="legend"><span>${mk("d")}${t.legD}</span><span>${mk("r")}${t.legR}</span></div>
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
 <div class="legend"><span>${mk("d")}${t.legD}</span><span>${mk("r")}${t.legR}</span></div>
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
 <ol class="tl">${EXP.map(e=>`<li><div><div class="when">${e.when[a]}</div>${e.loc[a]?`<div class="loc">${e.loc[a]}</div>`:""}</div><div><h3>${e.t[a]}${e.cur?`<span class="cur">${t.current}</span>`:""}</h3><div class="org">${a?e.orgAr:e.org}</div><ul>${e.b.map(b=>`<li>${b[a]}</li>`).join("")}</ul></div></li>`).join("")}</ol>
</div></section>

<section class="band" id="education"><div class="wrap">
 <div class="eyebrow">${t.eduEy}<span>08</span></div>
 <h2>${t.eduH}</h2>
 <div class="cred">${EDU.map(e=>{const x=a?e.ar:e.en;return`<div class="card"><h3>${x[0]}</h3>${x[1]?`<p>${x[1]}</p>`:""}${e.list?`<ul>${e.list.map(l=>`<li>${l[a]}</li>`).join("")}</ul>`:""}${e.ok?`<span class="ok">${t.verified}</span>`:""}</div>`}).join("")}</div>
</div></section>

<section class="band dark" id="contact"><div class="wrap contact">
 <div><div class="eyebrow">${t.conEy}<span>09</span></div><h2>${t.conH}</h2><p class="lede">${t.conL}</p></div>
 <div class="rows">
  <a class="row" href="mailto:${CONFIG.email}"><span class="ic">${ico.mail}</span><span><small>${t.email}</small><b>${CONFIG.email}</b></span></a>
  <a class="row" href="tel:${CONFIG.phoneHref}"><span class="ic">${ico.phone}</span><span><small>${t.phone}</small><b>${CONFIG.phone}</b></span></a>
  <a class="row" href="cv.pdf"><span class="ic">${ico.file}</span><span><small>${t.cvrow}</small><b style="direction:inherit">${t.cvlink}</b></span></a>
  ${CONFIG.linkedin?`<a class="row" href="${CONFIG.linkedin}"><span class="ic">in</span><span><small>LinkedIn</small><b>LinkedIn</b></span></a>`:""}
 </div>
</div></section>`;
}


const icoBld='<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M3 21h18M5 21V7l7-4 7 4v14M9 21v-4h6v4M9 10h.01M15 10h.01M9 14h.01M15 14h.01"/></svg>';
const orgById=id=>ORGS.find(o=>o.id==id);
function projectCard(p,t,a,tpl){
 const g=o=>o?(a?o.ar:o.en):"";
 const logo=p.logo?`<img src="${p.logo}" alt="${esc(t.logoSlot)}">`:`<span class="lgph" aria-label="${esc(t.logoSlot)}">${icoBld}</span>`;
 const orgLink=(id,k)=>{const o=orgById(id);return o?`<li><span class="k">${t.prjF[k]}</span><a href="organizations.html#org-${o.id}">${g(o.name)}</a></li>`:""};
 const rows=[orgLink(p.ownerId,"owner"),orgLink(p.contractorId,"contractor"),...["employer","role"].filter(k=>g(p[k])).map(k=>`<li><span class="k">${t.prjF[k]}</span><span>${g(p[k])}</span></li>`)].join("");
 const sc=p.scope?(a?p.scope.ar:p.scope.en):[];
 return `<article class="pcard${tpl?" tpl":""}" id="${p.id||""}">
  <div class="pimg">${p.img?`<img src="img/thumb/${pad(p.img)}.jpg" alt="${esc(g(p.name))}" loading="lazy" ${p.imgs?`data-open="${p.img}" data-set="pj-${p.id}"`:""}>`:""}<div class="plogo">${logo}</div></div>
  <div class="pbody"><h3>${g(p.name)}</h3>
   <div class="pmeta">${g(p.location)?`<span>${g(p.location)}</span>`:""}${g(p.type)?`<span>${g(p.type)}</span>`:""}</div>
   ${g(p.summary)?`<p>${g(p.summary)}</p>`:""}
   ${rows?`<ul class="kv">${rows}</ul>`:""}
   ${sc.length?`<details><summary>${t.prjMore}</summary><ul>${sc.map(x=>`<li>${x}</li>`).join("")}</ul></details>`:""}
   ${p.imgs&&p.imgs.length>1?`<div class="pthumbs">${p.imgs.slice(1,5).map(n=>`<img src="img/thumb/${pad(n)}.jpg" alt="" loading="lazy" data-open="${n}" data-set="pj-${p.id}">`).join("")}</div>`:""}
  </div></article>`;
}
function projectsPage(){
 const t=T[L],a=L=="ar"?1:0,pr=PROJECTS.filter(p=>p.verified);
 const tpl=PREVIEW?[1,32,12].map(n=>({img:n,name:{en:t.tplName,ar:t.tplName},location:{en:t.tplLoc,ar:t.tplLoc},type:{en:t.tplType,ar:t.tplType},summary:{en:t.tplSum,ar:t.tplSum}})):[];
 return `<section class="band" id="projects"><div class="wrap">
  <div class="eyebrow">${t.prjEy}</div><h2>${t.prjH}</h2><p class="lede">${t.prjL}</p>
  ${pr.length?`<div class="pgrid">${pr.map(p=>projectCard(p,t,a)).join("")}</div>`:`<div class="empty"><p>${t.prjEmpty}</p><a class="btn s" href="index.html#gallery">${t.prjEmptyCta}</a></div>`}
  ${tpl.length?`<p class="draftnote">${t.tplNote}</p><div class="pgrid">${tpl.map(p=>projectCard(p,t,a,1)).join("")}</div>`:""}
 </div></section>`;
}
function orgsPage(){
 const t=T[L],a=L=="ar"?1:0,g=o=>o?(a?o.ar:o.en):"";
 const tiles=ORGS.map(o=>{
  const prj=PROJECTS.filter(p=>p.verified&&(p.ownerId==o.id||p.contractorId==o.id));
  const host=o.site.replace(/^https?:\/\//,"").replace(/\/$/,"");
  return `<article class="otile" id="org-${o.id}">
   <div class="ologo">${o.logo?`<img src="${o.logo}" alt="${esc(g(o.name))}">`:`<div class="oname-tile"><b>${o.short||g(o.name)}</b>${o.short?`<small>${o.name.en}</small>`:""}</div>`}</div>
   <div class="obody"><h3>${g(o.name)}</h3>${a?`<div class="alt">${o.name.en}${o.short?" ("+o.short+")":""}</div>`:`<div class="alt" lang="ar" dir="rtl">${o.name.ar}</div>`}
    <span class="role r-${o.role}">${t.orgRoles[o.role]}</span>
    ${prj.length?`<div class="oprj"><small>${t.linkedPrj}</small>${prj.map(p=>`<a href="projects.html#${p.id}">${g(p.name)}</a>`).join("")}</div>`:""}
    <a class="osite" href="${o.site}" rel="noopener">${t.visit} <span class="ltrnum">${host}</span></a>
    ${!o.logo&&PREVIEW?`<span class="draftnote">${t.logoPending}</span>`:""}
   </div></article>`}).join("");
 const extra=PREVIEW?`<div class="otile add"><span>${t.addOrg}</span></div>`.repeat(2):"";
 return `<section class="band" id="organizations"><div class="wrap">
  <div class="eyebrow">${t.orgEy}</div><h2>${t.orgH}</h2><p class="lede">${t.orgL}</p>
  <div class="legend">${["owner","contractor","related"].map(r=>`<span><i class="role r-${r}">${t.orgRoles[r]}</i></span>`).join("")}</div>
  <div class="ogrid">${tiles}${extra}</div>
  <p class="note" style="margin-top:28px">${t.tm}</p>
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
 const sub={projects:[t.prjEy,t.prjEy],orgs:[t.pages[2][2],t.pages[2][2]]}[PAGE];document.title=(sub?sub[0]+" — ":"")+(L=="ar"?CONFIG.name.ar+" — مهندس مدني":"Mohamed Abdalrhman Elyas Ahmed — Civil Engineer");
 document.getElementById("hdrName").textContent=CONFIG.name[L];
 document.getElementById("hdrRole").textContent=t.role;
 document.getElementById("hdrCv").textContent=t.cv;
 const lb=document.getElementById("lang");lb.textContent=t.lang;lb.lang=L=="ar"?"en":"ar";lb.setAttribute("aria-label",L=="ar"?"Switch to English":"التبديل إلى العربية");
 document.getElementById("secnav").innerHTML=(PAGE=="home"?t.nav:[]).filter(n=>n[0]!="home"&&(n[0]!="documents"||DOCS.length||CONFIG.draft)).map(([id,l])=>`<a href="#${id}" data-id="${id}">${l}</a>`).join("");
 document.getElementById("app").innerHTML=PAGE=="projects"?projectsPage():PAGE=="orgs"?orgsPage():page();
 document.getElementById("pagenav").innerHTML=t.pages.map(([h,k,l])=>`<a href="${h}"${k==PAGE?' aria-current="page" class="on"':""}>${l}</a>`).join("");
 document.getElementById("secnav").hidden=PAGE!="home";
 document.getElementById("foot1").textContent=CONFIG.name[L]+" · "+t.foot1;
 document.getElementById("foot2").textContent=t.foot2;
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
 const o=e.target.closest("[data-open]");if(o){
  const id=+o.dataset.open;
  list=o.dataset.set?[...document.querySelectorAll(`[data-set="${o.dataset.set}"]`)].map(x=>+x.dataset.open):view.map(p=>p[0]);
  pos=list.indexOf(id);show();try{dlg.showModal()}catch(err){dlg.setAttribute("open","")}
 }
});
const dlg=document.getElementById("lb"),li=document.getElementById("lbimg"),lc=document.getElementById("lbcap");
let list=[],pos=0;
function show(){const a=L=="ar"?1:0,id=list[pos],p=P.find(x=>x[0]==id);li.src=`img/full/${pad(id)}.jpg`;li.alt=p?p[2+a]:"";lc.textContent=`${p?p[2+a]:""} — ${pos+1} / ${list.length}`}
const step=d=>{pos=(pos+d+list.length)%list.length;show()};
document.getElementById("prev").onclick=()=>step(-1);
document.getElementById("next").onclick=()=>step(1);
document.getElementById("close").onclick=()=>dlg.close();
dlg.addEventListener("click",e=>{if(e.target==dlg)dlg.close()});
document.addEventListener("keydown",e=>{if(!dlg.open)return;const r=L=="ar";if(e.key=="ArrowLeft")step(r?1:-1);if(e.key=="ArrowRight")step(r?-1:1)});
render();
if(location.hash){const el=document.getElementById(location.hash.slice(1));if(el)el.scrollIntoView()}
}