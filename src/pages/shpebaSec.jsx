import React from "react";
import { useNavigate } from "react-router-dom";
import {
  FaBook,
  FaBolt,
  FaBrain,
  FaShoePrints,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaHome
} from "react-icons/fa";
import styles from "../moduleCss/ShpebaSec.module.css";

import workTeamImg from "../assets/work-team.jpg";
 // Assuming you have an image for the section



const YouthSection = () => {
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
  };
  const info = [
    {
      location: 'كفر عقب - بجانب سوبر ماركت اورلند - شارع المطار',
      phone: '0733330869',
      celPhone: '054-1234567'
    }
  ];
  return (
    <div className={styles.youthSectionContainer}>

      {/* Header */}
      <header className={styles.mainHeader}>
        <div className={styles.headerLeft} onClick={() => navigate("/")}>
          <FaHome size={24} style={{ cursor: "pointer", marginRight: "10px" }} />
          <span>الرئيسية</span>
        </div>

        <div className={styles.logoTitle}>
          <img
            src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
            alt="Youth Logo"
            width={50}
          />
          <h1>قسم الشبيبة</h1>
        </div>

        <div className={styles.headerSpacer} /> {/* Spacer for symmetry */}
      </header>

      {/* مدير القسم */}
      <section className={styles.managerIntro}>
        <h2>مديرة القسم: هدى سلهب</h2>
        <p>
          بخبرة تربوية وقيادية، تقود هدى سلهب قسم الشبيبة نحو التميز والإبداع. 
          تهدف إلى بناء بيئة تمكّن كل شاب من التعبير، التعلّم، والنمو بثقة.
        </p>
      </section>

      {/* وصف عام */}
      <section className={styles.sectionIntro}>
        <p>
          يقدّم قسم الشبيبة مساحة تعليمية وتنموية متكاملة، من خلال برامج تعليمية 
          وتنشيطية متنوعة تهدف إلى تمكين الشباب وتوسيع مداركهم الفكرية والاجتماعية.
        </p>
      </section>
{/* شبكة البطاقات */}
<section className={styles.cardsGridSmall}>

  <div className={styles.smallCard} onClick={() => handleNavigate("/courses")}>
    <img
      src="https://images.pexels.com/photos/4145190/pexels-photo-4145190.jpeg"
      alt="دورات تعليمية"
    />
    <h4><FaBook /> الدورات التعليمية</h4>
  </div>

  <div className={styles.smallCard} onClick={() => handleNavigate("/activities")}>
    <img
      src="https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg"
      alt="برامج تنشيطية"
    />
    <h4><FaBolt /> البرامج التنشيطية</h4>
  </div>

  <div className={styles.smallCard} onClick={() => handleNavigate("/yalla")}>
    <img
      src=""
      alt="برنامج يلا"
    />
    <h4><FaBrain /> برنامج يلا</h4>
  </div>

  <div className={styles.smallCard} onClick={() => handleNavigate("/steps")}>
    <img
      src= { workTeamImg }
      alt="برنامج خطوات"
    />
    <h4><FaShoePrints /> برنامج خطوات</h4>
  </div>

</section>


      {/* اقتباس تحفيزي */}
      <section className={styles.motivationalQuote}>
        <blockquote>
          "نحن لا نُعد الشباب للمستقبل... بل نُعد المستقبل للشباب."
        </blockquote>
      </section>

      {/* فوائد القسم */}
      <section className={styles.youthBenefits}>
        <h2>ليش تنضم لقسم الشبيبة؟</h2>
        <ul>
          <li>📘 برامج تعليمية مواكبة للعصر</li>
          <li>⚡ أنشطة ترفيهية تنموية</li>
          <li>🤝 مجتمع شبابي داعم وفعّال</li>
          <li>🎤 ورشات وفعاليات متواصلة</li>
        </ul>
      </section>

      {/* دعوة للانضمام */}
      <section className={styles.callToAction}>
        <h2>ابدأ رحلتك الآن</h2>
        <p>اضغط على القسم اللي حابب تستكشفه وخوض تجربة شبابية فريدة!</p>
      </section>

      {/* Footer */}
      <footer className={styles.mainFooter}>
        <div className={styles.footerContent}>
          <h3>قسم الشبيبة</h3>
          <p>معًا نحو شباب فعّال، واعٍ، ومبادر.</p>
          <ul className={styles.footerContact}>
            <li><FaPhoneAlt /> {info[0].phone}</li>
            <li><FaMapMarkerAlt /> {info[0].location}</li>
            <li style={{ cursor: "pointer" }} onClick={() => navigate("/")}>
              <FaHome /> العودة للصفحة الرئيسية
            </li>
          </ul>
        </div>
        <div className={styles.footerBottom}>
          <p>© {new Date().getFullYear()} المركز الجماهيري - ضواح القدس - جميع الحقوق محفوظة</p>
        </div>
      </footer>

    </div>
  );
};

export default YouthSection;