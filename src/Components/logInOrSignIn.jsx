import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import styles from '../moduleCss/LogInOrSignIn.module.css';
import { FaGoogle, FaTwitter, FaApple, FaFacebookF, FaEye, FaEyeSlash, FaArrowRight } from 'react-icons/fa';

function LogInOrSignIn() {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('user');
  const [message, setMessage] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate(); 

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password) {
      setMessage({
        type: 'success',
        text: isLogin ? 'تم تسجيل الدخول بنجاح!' : 'تم إنشاء الحساب بنجاح!',
      });

      if (isLogin) {
        setTimeout(() => navigate('/'), 1100); // ✅ التنقل بعد ثانية 
      }
    } else {
      setMessage({ type: 'error', text: 'يرجى تعبئة جميع الحقول' });
    }
  };

  return (

    <>
    {/*  زر الرجوع */}
      <div className={styles.backBtn} onClick={() => navigate(-1)}>
        <FaArrowRight className={styles.backIcon} />
        <span>رجوع</span>
      </div>

    <div className={styles.container}>
      
      

      <div className={styles.logoContainer}>
        <div className={styles.logo}>المركز الجماهيري - ضواحي القدس</div>
        <div className={styles.alirt}>ملاحظة: لم يتم ربط هذه الصفحة بأي قواعد بيانات بعد</div>
      </div>

      <div className={styles.card}>
        <h2 className={styles.title}>{isLogin ? 'تسجيل الدخول' : 'إنشاء حساب'}</h2>

        <div className={styles.socialButtons}>
          <button className={`${styles.socialBtn} ${styles.google}`}><FaGoogle /> عبر Google</button>
          <button className={`${styles.socialBtn} ${styles.twitter}`}><FaTwitter /> عبر Twitter</button>
          <button className={`${styles.socialBtn} ${styles.apple}`}><FaApple /> عبر Apple</button>
          <button className={`${styles.socialBtn} ${styles.facebook}`}><FaFacebookF /> عبر Facebook</button>
        </div>

        <div className={styles.divider}>
          <span className={styles.dividerLine}></span>
          <span className={styles.dividerText}>أو</span>
          <span className={styles.dividerLine}></span>
        </div>

        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.inputGroup}>
            <input
              type="email"
              placeholder="الإيميل"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className={styles.input}
            />
          </div>

          <div className={styles.inputGroup}>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="كلمة المرور"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className={styles.input}
            />
            <button 
              type="button" 
              className={styles.passwordToggle}
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>

          <button type="submit" className={styles.button}>
            {isLogin ? 'دخول' : 'تسجيل'}
          </button>
        </form>

        {message && (
          <p className={`${styles.message} ${message.type === 'error' ? styles.error : styles.success}`}>
            {message.text}
          </p>
        )}

        <p className={styles.toggle}>
          {isLogin ? 'ما عندك حساب؟' : 'عندك حساب؟'}{' '}
          <button
            type="button"
            onClick={() => {
              setIsLogin(!isLogin);
              setMessage(null);
              setEmail('');
              setPassword('');
              setRole('user');
            }}
            className={styles.switchButton}
          >
            {isLogin ? 'أنشئ حساب' : 'سجّل دخول'}
          </button>
        </p>
      </div>

      <div className={styles.footer}>
        <p>© {new Date().getFullYear()}  المركز الجماهيري. جميع الحقوق محفوظة.</p>
      </div>
    </div>
    </>
    
  );
}

export default LogInOrSignIn;
