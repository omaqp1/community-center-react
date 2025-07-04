// src/mainHomeComponent
import React, { useState, useEffect, useRef } from 'react';
import {
  FaBars,
  FaTimes,
  FaChevronRight,
  FaChevronLeft,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaGlobe,
  FaUser
} from 'react-icons/fa';

import logo from '../assets/logo.png';
import styles from '../moduleCss/home.module.css';

import { Link, useNavigate } from 'react-router-dom';

import chessimg from '../assets/chess.jpeg';
import plantimg from '../assets/plant.jpeg';
import songimg from '../assets/song.jpeg';
import taekwondoimg from '../assets/taekwondo.jpeg';
import cookingimg from '../assets/cooking.jpeg';
import drowimg from '../assets/drow.jpeg';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

function HomePage() {
  const navigate = useNavigate();

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [language, setLanguage] = useState('عربي');
  const [open, setOpen] = useState(false);

  const languages = [
    { code: 'ar', name: 'العربية', path: '/' },
    { code: 'en', name: 'English', path: '/enHomepage' },
    { code: 'he', name: 'עברית', path: '/heHomepage' },
  ];
    const workshops = [
  {
    id: 1,
    title: "ورشة التايكوندو",
    description: "تعلم فنون الدفاع عن النفس وتنمية الثقة بالنفس",
    image: taekwondoimg
  },
  {
    id: 2,
    title: "ورشة الرسم والفنون",
    description: "اكتشف موهبتك الفنية وتعلم تقنيات الرسم المختلفة",
    image: drowimg
  },
  {
    id: 3,
    title: "ورشة الشطرنج للأطفال",
    description: "تعلم أساسيات الشطرنج وإنشاء التكتيكات الأولى",
    image: chessimg
  },
  {
    id: 4,
    title: "ورشة الطبخ الصحي",
    description: "تعلم تحضير وجبات صحية ولذيذة لعائلتك",
    image: cookingimg
  },
  {
    id: 5,
    title: "ورشة الموسيقى والغناء",
    description: "اكتشف عالم النغمات وتعلم العزف على الآلات الموسيقية",
    image: songimg
  },
  {
    id: 6,
    title: "ورشة الزراعة المنزلية",
    description: "تعلم كيفية زراعة الخضروات والفواكه في منزلك",
    image: plantimg
  }
];
 
  const managementData = [
  {
    id: 1,
    name: "اسم",
    p: "المدير",
    image: 'https://www.gravatar.com/avatar/?d=mp'
  },
  {
    id: 2,
    name: "اسم",
    p: "نائب المدير",
    image: "https://www.gravatar.com/avatar/?d=mp"
  },
  {
    id: 3,
    name: "اسم ",
    p: "السكرتيرا",
    image: "https://www.gravatar.com/avatar/?d=mp"
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

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const changeLanguageAr = () => {
    setLanguage('عربي');
    navigate('/');
    setSidebarOpen(false);
  };
  const changeLanguageEn = () => {
    setLanguage('English');
    navigate('/enHomepage');
    setSidebarOpen(false);
  };
  const changeLanguageHe = () => {
    setLanguage('עברית');
    navigate('/heHomepage');
    setSidebarOpen(false);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % workshops.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [workshops.length]);

  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className={styles.app}>
      {/* الهيدر */}
      <header className={styles.header}>
        <button className={styles.menuButton} onClick={toggleSidebar}>
          <FaBars />
        </button>

        <div className={styles.logoContainer}>
          <img className={styles.logo} src={logo} alt="شعار المركز" />
          <div className={styles.logoText}>المركز الجماهيري - ضواحي القدس</div>
        </div>
        {/* /////////////// header nav bar //////////////////////////// */}
        <nav className={styles.headernav}>
          <ul>
            <li><a href="#about">من نحن</a></li>
            <li><a href="#workshops">الورشات</a></li>
            <li><a href="#events">الفعاليات</a></li>
            <li><a href="#contact">تواصل معنا</a></li>
          </ul>
        </nav>

        {/* زر اللغة + القائمة */}
        <div className={styles.languageContainer} ref={dropdownRef}>
          <button
            onClick={() => setOpen(!open)}
            className={styles.dropdownButton}
          >
            <FaGlobe />
          </button>

          {open && (
            <div className={styles.dropdownMenu}>
              {languages.map((lang) => (
                <Link
                  key={lang.code}
                  to={lang.path}
                  className={styles.dropdownItem}
                  onClick={() => setOpen(false)}
                >
                  {lang.name}
                </Link>
              ))}
            </div>
          )}
        </div>

        <Link to="/logInOrSignIn" className={styles.userIcon}>
          <FaUser />
        </Link>
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
              onClick={changeLanguageAr}
            >
              عربي
            </button>
            <button
              className={`${styles.langBtn} ${language === 'English' ? styles.active : ''}`}
              onClick={changeLanguageEn}
            >
              English
            </button>
            <button
              className={`${styles.langBtn} ${language === 'עברית' ? styles.active : ''}`}
              onClick={changeLanguageHe}
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

          <Swiper
            className={styles.slider}
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation={{
              nextEl: `.${styles.nextBtn}`,
              prevEl: `.${styles.prevBtn}`,
            }}
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000 }}
            loop={true}
          >
            {workshops.map((workshop) => (
              <SwiperSlide key={workshop.id} className={styles.slide}>
                <div className={styles.slideContent}>
                  <img
                    src={workshop.image}
                    className={styles.workshopImage}
                    alt={workshop.title}
                  />
                  <h3>{workshop.title}</h3>
                  <p>{workshop.description}</p>
                  <button className={styles.detailsBtn}>التفاصيل</button>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className={styles.sliderControls}>
            <button className={styles.prevBtn}><FaChevronLeft /></button>
            <button className={styles.nextBtn}><FaChevronRight /></button>
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
              {/* قسم الادارة */}
          <section className={styles.edara}>
            <h3>
              الإدارة
            </h3>
            
              {managementData.map((managementData) => (
                <div key={managementData.id} className={styles.slide}>
                  <div className={styles.slideContent}>
                    <img
                      src={managementData.image}
                      className={styles.managementDataImage}
                      alt={managementData.title}
                    />
                    <h3>{managementData.name}</h3>
                    <p>{managementData.p}</p>
                    <button className={styles.detailsBtn}>تواصل</button>
                  </div>
                </div>
              ))}
          </section>

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
}

export default HomePage;
