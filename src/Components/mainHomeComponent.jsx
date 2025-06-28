// src/App.js
import React, { useState, useEffect } from 'react';
import { FaBars,
   FaTimes,
    FaChevronRight,
     FaChevronLeft,
      FaFacebookF,
       FaTwitter,
        FaInstagram,
         FaPhone,
          FaEnvelope,
           FaMapMarkerAlt } from 'react-icons/fa';
           
import logo from '.../public/logo.png';
import styles from '../moduleCss/home.module.css';

function HomePage(){
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [language, setLanguage] = useState('عربي');

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const workshops = [
  {
    id: 1,
    title: "ورشة التايكوندو",
    description: "تعلم فنون الدفاع عن النفس وتنمية الثقة بالنفس",
    image: "https://cdn.pixabay.com/photo/2016/11/29/05/15/taekwondo-1868590_1280.jpg"
  },
  {
    id: 2,
    title: "ورشة الرسم والفنون",
    description: "اكتشف موهبتك الفنية وتعلم تقنيات الرسم المختلفة",
    image: "https://cdn.pixabay.com/photo/2015/09/09/18/07/girl-932553_1280.jpg"
  },
  {
    id: 3,
    title: "ورشة البرمجة للأطفال",
    description: "تعلم أساسيات البرمجة وإنشاء تطبيقاتك الأولى",
    image: "https://cdn.pixabay.com/photo/2015/06/24/15/45/code-820275_1280.jpg"
  },
  {
    id: 4,
    title: "ورشة الطبخ الصحي",
    description: "تعلم تحضير وجبات صحية ولذيذة لعائلتك",
    image: "https://cdn.pixabay.com/photo/2017/12/09/08/18/cooking-3000271_1280.jpg"
  },
  {
    id: 5,
    title: "ورشة الموسيقى والغناء",
    description: "اكتشف عالم النغمات وتعلم العزف على الآلات الموسيقية",
    image: "https://cdn.pixabay.com/photo/2015/07/17/13/44/guitar-849928_1280.jpg"
  },
  {
    id: 6,
    title: "ورشة الزراعة المنزلية",
    description: "تعلم كيفية زراعة الخضروات والفواكه في منزلك",
    image: "https://cdn.pixabay.com/photo/2017/04/27/08/25/gardening-2261005_1280.jpg"
  }
];


  const sponsors = [
    { id: 1, name: "بلدية القدس", initial: "ب" },
    { id: 2, name: "جوجل", initial: "ج" },
    { id: 3, name: "مايكروسوفت", initial: "م" },
    { id: 4, name: "وزارة التربية والتعليم", initial: "و" },
    { id: 5, name: "بنك فلسطين", initial: "ب" },
    { id: 6, name: "جمعية الهلال الأحمر", initial: "ج" }
  ];


  const changeLanguage = (lang) => {
    setLanguage(lang);
    setSidebarOpen(false);
  };


  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % workshops.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [workshops.length]);


  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % workshops.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + workshops.length) % workshops.length);
  };

  return (
    <div className={styles.app}>
      {/* الهيدر */}
      <header className={styles.header}>
        <div className={styles.logoContainer}>
          <img className={styles.logo} src={logo}/>
          <div className={styles.logoText}>المركز الجماهيري - ضواحي القدس</div>
        </div>
        <button className={styles.menuButton} onClick={toggleSidebar}>
          <FaBars />
        </button>
      </header>

      {/* السايدبار */}
      <div className={`${styles.sidebar} ${sidebarOpen ? styles.open : ''}`}>
        <div className={styles.sidebarHeader}>
          <button className={styles.closeButton} onClick={toggleSidebar}>
            <FaTimes />
          </button>
        </div>
        
        <div className={styles.languageSelector}>
          <h3>تغيير اللغة</h3>
          <div className={styles.languageButtons}>
            <button 
              className={`${styles.langBtn} ${language === 'عربي' ? styles.active : ''}`}
              onClick={() => changeLanguage('عربي')}
            >
              عربي
            </button>
            <button 
              className={`${styles.langBtn} ${language === 'English' ? styles.active : ''}`}
              onClick={() => changeLanguage('English')}
            >
              English
            </button>
            <button 
              className={`${styles.langBtn} ${language === 'עברית' ? styles.active : ''}`}
              onClick={() => changeLanguage('עברית')}
            >
              עברית
            </button>
          </div>
        </div>
        
        <nav className={styles.nav}>
          <ul>
            <li><a href="#about">من نحن</a></li>
            <li><a href="#workshops">الورشات</a></li>
            <li><a href="#events">الفعاليات</a></li>
            <li><a href="#contact">تواصل معنا</a></li>
          </ul>
        </nav>
        
        <div className={styles.contactInfo}>
          <h3>معلومات التواصل</h3>
          <p><FaPhone /> 02-1234567</p>
          <p><FaEnvelope /> info@example.com</p>
          <p><FaMapMarkerAlt /> كفر عقب - بجانب سوبر ماركت اورلند - شارع المطار</p>
        </div>
      </div>

      {/* المحتوى الرئيسي */}
      <main>
        {/* قسم البطل */}
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <h1>مرحباً بكم في المركز الجماهيري بضواحي القدس</h1>
            <p>مكان يجتمع فيه المجتمع لبناء مستقبل أفضل معاً</p>
            <div className={styles.ctaButtons}>
              <button className={styles.primaryBtn}>انضم إلينا</button>
              <button className={styles.secondaryBtn}>تعرف على فعالياتنا</button>
            </div>
          </div>
        </section>

        {/* قسم الورشات */}
        <section id="workshops" className={styles.workshops}>
  <div className={styles.sectionHeader}>
    <h2>ورشاتنا التثقيفية</h2>
    <p>اكتشف مجموعة متنوعة من الورشات المصممة لتنمية مهاراتك ومواهبك</p>
  </div>

  <div className={styles.slider}>
    <button className={styles.prevBtn} onClick={prevSlide}>
      <FaChevronLeft />
    </button>

    <div className={styles.slideContainer}>
      {workshops.map((workshop, index) => (
        <div
          key={workshop.id}
          className={`${styles.slide} ${index === currentSlide ? styles.active : ''}`}
        >
          <div className={styles.slideContent}>
            {workshop.image && (
              <img
                src={workshop.image}
                alt={workshop.title}
                className={styles.workshopImage}
              />
            )}
            <h3>{workshop.title}</h3>
            <p>{workshop.description}</p>
            <button className={styles.detailsBtn}>التفاصيل</button>
          </div>
        </div>
      ))}
    </div>

    <button className={styles.nextBtn} onClick={nextSlide}>
      <FaChevronRight />
    </button>
  </div>

  <div className={styles.indicators}>
    {workshops.map((_, index) => (
      <div
        key={index}
        className={`${styles.indicator} ${index === currentSlide ? styles.active : ''}`}
        onClick={() => setCurrentSlide(index)}
      />
    ))}
  </div>

  <a href="/more" className={styles.moreBtn}>
    المزيد من الورشات
  </a>
</section>

        {/* قسم الرعاة */}
        <section className={styles.sponsors}>
          <div className={styles.sectionHeader}>
            <h2>رعاة المركز</h2>
            <p>نشكر رعاة المركز على دعمهم المتواصل لبرامجنا وفعالياتنا</p>
          </div>
          
          <div className={styles.sponsorsGrid}>
            {sponsors.map(sponsor => (
              <div key={sponsor.id} className={styles.sponsorCard}>
                <div className={styles.logoPlaceholder}>
                  {sponsor.initial}
                </div>
                <h3>{sponsor.name}</h3>
              </div>
            ))}
          </div>
        </section>

        {/* قسم من نحن */}
        <section id="about" className={styles.about}>
          <div className={styles.sectionHeader}>
            <h2>من نحن</h2>
            <p>تعرف على المركز الجماهيري ورسالتنا وأهدافنا</p>
          </div>
          
          <div className={styles.aboutContent}>
            <div className={styles.aboutText}>
              <p>
                المركز الجماهيري في ضواحي القدس هو مؤسسة مجتمعية تأسست عام 2005 بهدف خدمة المجتمع المحلي وتنمية قدرات أفراده. 
                نسعى لخلق بيئة تعليمية وترفيهية للجميع من خلال تقديم برامج متنوعة تلبي احتياجات مختلف الفئات العمرية.
              </p>
              <p>
                نؤمن بأهمية العمل الجماعي ودوره في بناء مجتمع قوي ومتماسك. نسعى لتمكين الأفراد وتطوير مهاراتهم من خلال ورشات العمل والدورات التدريبية والفعاليات الثقافية والاجتماعية.
              </p>
              <ul className={styles.missionList}>
                <li>تنمية المهارات الشخصية والمهنية</li>
                <li>تعزيز القيم المجتمعية والهوية الثقافية</li>
                <li>توفير فرص تعليمية وترفيهية للجميع</li>
                <li>دعم المبادرات الشبابية والمشاريع المجتمعية</li>
              </ul>
            </div>
            <div className={styles.aboutImage}></div>
          </div>
        </section>
      </main>

      {/* الفوتر */}
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.footerSection}>
            <h3>عن المركز</h3>
            <p>المركز الجماهيري في ضواحي القدس هو مؤسسة مجتمعية تهدف إلى تنمية المجتمع المحلي وتقديم خدمات ثقافية وترفيهية وتعليمية لجميع الفئات العمرية.</p>
          </div>
          
          <div className={styles.footerSection}>
            <h3>روابط سريعة</h3>
            <ul>
              <li><a href="#about">من نحن</a></li>
              <li><a href="#workshops">الورشات</a></li>
              <li><a href="#events">الفعاليات</a></li>
              <li><a href="#contact">اتصل بنا</a></li>
            </ul>
          </div>
          
          <div className={styles.footerSection}>
            <h3>اتصل بنا</h3>
            <ul className={styles.contactList}>
              <li><FaPhone /> 02-1234567</li>
              <li><FaEnvelope /> info@example.com</li>
              <li><FaMapMarkerAlt /> ضواحي القدس، شارع المجتمع، بناية ١٢</li>
            </ul>
          </div>
          
          <div className={styles.footerSection}>
            <h3>تابعنا</h3>
            <div className={styles.socialLinks}>
              <a href="#"><FaFacebookF /></a>
              <a href="#"><FaTwitter /></a>
              <a href="#"><FaInstagram /></a>
            </div>
          </div>
        </div>
        
        <div className={styles.footerBottom}>
          <p>&copy; {new Date().getFullYear()} المركز الجماهيري - ضواحي القدس. جميع الحقوق محفوظة.</p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;