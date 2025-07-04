//loginorsignin.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function LogInOrSignIn() {
  
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('user'); // لو بدك تتحكم بالدور
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null); // رسالة نجاح أو خطأ
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setMessage(null);

    const endpoint = isLogin ? 'login' : 'register';

    try {
      const res = await fetch(`http://localhost:3001/${endpoint}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password, role }),
      });

      const data = await res.json();

      if (!res.ok) {
        setMessage({ type: 'error', text: data.message || 'حدث خطأ غير معروف' });
      } else {
        if (isLogin) {
          localStorage.setItem('token', data.token);
          setMessage({ type: 'success', text: 'تم تسجيل الدخول بنجاح!' });
          // تأخير بسيط قبل التنقل عشان تشوف الرسالة
          setTimeout(() => navigate('/'), 1000);
        } else {
          setMessage({ type: 'success', text: 'تم إنشاء الحساب بنجاح! سجل دخولك الآن.' });
          setIsLogin(true);
          setEmail('');
          setPassword('');
          setRole('user');
        }
      }
    } catch (err) {
      setMessage({ type: 'error', text: 'فشل الاتصال بالخادم، حاول مرة ثانية' });
    } finally {
      setLoading(false);
    }
  }

  return (
    <div style={{ textAlign: 'center', marginTop: 50 }}>
      <h2>{isLogin ? 'تسجيل الدخول' : 'إنشاء حساب'}</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="الإيميل"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          disabled={loading}
        />
        <br /><br />

        <input
          type="password"
          placeholder="كلمة المرور"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          disabled={loading}
        />
        <br /><br />

        
        
        <button type="submit" disabled={loading}>
          {loading ? 'جارٍ المعالجة...' : isLogin ? 'دخول' : 'تسجيل'}
        </button>
      </form>

      {message && (
        <p style={{ color: message.type === 'error' ? 'red' : 'green', marginTop: 20 }}>
          {message.text}
        </p>
      )}

      <p style={{ marginTop: 20 }}>
        {isLogin ? 'ما عندك حساب؟' : 'عندك حساب؟'}{' '}
        <button onClick={() => {
          setIsLogin(!isLogin);
          setMessage(null);
          setEmail('');
          setPassword('');
          setRole('user');
        }}>
          {isLogin ? 'أنشئ حساب' : 'سجّل دخول'}
        </button>
      </p>
    </div>
  );
}

export default LogInOrSignIn;
