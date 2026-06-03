import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import { auth, db } from '../firebase';

const Register = () => {
  const { search } = useLocation();
  const params = new URLSearchParams(search);
  const referralFromUrl = params.get('ref') || params.get('referral') || params.get('utm_source') || '';
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [userIdName, setUserIdName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [freeFireId, setFreeFireId] = useState('');
  const [referralCode, setReferralCode] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  async function registerUser(email, password, firstName, lastName, phone, referralFromUrl) {
    try {
      // 1. Create the user in Firebase Auth
      const userCredential = await auth.createUserWithEmailAndPassword(email, password);
      const user = userCredential.user;

      // 2. Generate a Unique Referral Code for the new user (matches Android logic)
      const prefix = firstName.substring(0, 3).toUpperCase();
      const randomNum = Math.floor(1000 + Math.random() * 9000);
      const myReferralCode = prefix + randomNum;

      // 3. Save to Firestore "users" collection (MUST match Kotlin User class)
      await db.collection('users').doc(user.uid).set({
        uid: user.uid,
        firstName: firstName,
        lastName: lastName,
        username: userIdName || firstName + Math.floor(Math.random() * 999),
        email: email,
        phone: phone,
        profileImage: '',
        freeFireId: freeFireId || '',
        walletBalance: 0.0,
        totalWinnings: 0.0,
        totalReferralEarnings: 0.0,
        referralCode: myReferralCode,
        referredBy: referralFromUrl,
        referralCount: 0,
        deviceId: '',
        isAdmin: false,
        isBanned: false
      });

      setSuccess('Account Created Successfully! You can now log in to the DC Esports App.');
      setError('');
    } catch (error) {
      console.error('Signup Error:', error.message);
      setError(error.message);
      setSuccess('');
    }
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    await registerUser(email, password, firstName, lastName, phone, referralFromUrl || referralCode);
  };

  return (
    <main className="px-5 py-20 sm:px-8 lg:px-10 text-white">
      <Helmet>
        <title>DC eSports | Register</title>
        <meta
          name="description"
          content="Register for DC eSports and unlock premium esports events, referral rewards, and app access."
        />
      </Helmet>

      <div className="mx-auto max-w-4xl space-y-10">
        <section className="rounded-[2.5rem] border border-white/10 bg-panel p-10 shadow-glow">
          <div className="space-y-6">
            <p className="text-sm uppercase tracking-[0.32em] text-purple-300">Register</p>
            <h1 className="text-4xl font-semibold text-white sm:text-5xl">Create your DC eSports account.</h1>
            <p className="text-slate-300">
              Sign up to join events, claim referral rewards, and keep your esports schedule in one place.
            </p>
            {referralFromUrl && (
              <div className="rounded-3xl border border-purple-400/20 bg-purple-500/10 p-5 text-purple-200">
                <p className="text-sm uppercase tracking-[0.24em] text-purple-300">Referral code detected</p>
                <p className="mt-2 text-base">You are registering with referral: <span className="font-semibold text-white">{referralFromUrl}</span></p>
              </div>
            )}
          </div>
        </section>

        <section className="rounded-[2.5rem] border border-white/10 bg-panel p-10 shadow-glow">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid gap-6 sm:grid-cols-2">
              <label className="block space-y-2 text-sm text-slate-300">
                <span>First Name</span>
                <input
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  placeholder="First name"
                  className="w-full rounded-[1.5rem] border border-white/10 bg-white/5 px-5 py-4 text-white outline-none transition focus:border-purple-400/60"
                />
              </label>
              <label className="block space-y-2 text-sm text-slate-300">
                <span>Last Name</span>
                <input
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  placeholder="Last name"
                  className="w-full rounded-[1.5rem] border border-white/10 bg-white/5 px-5 py-4 text-white outline-none transition focus:border-purple-400/60"
                />
              </label>
              <label className="block space-y-2 text-sm text-slate-300">
                <span>User ID</span>
                <input
                  type="text"
                  value={userIdName}
                  onChange={(e) => setUserIdName(e.target.value)}
                  placeholder="gamer99"
                  className="w-full rounded-[1.5rem] border border-white/10 bg-white/5 px-5 py-4 text-white outline-none transition focus:border-purple-400/60"
                />
              </label>
              <label className="block space-y-2 text-sm text-slate-300">
                <span>Email Address</span>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="w-full rounded-[1.5rem] border border-white/10 bg-white/5 px-5 py-4 text-white outline-none transition focus:border-purple-400/60"
                />
              </label>
              <label className="block space-y-2 text-sm text-slate-300">
                <span>Phone Number</span>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="123-456-7890"
                  className="w-full rounded-[1.5rem] border border-white/10 bg-white/5 px-5 py-4 text-white outline-none transition focus:border-purple-400/60"
                />
              </label>
              <label className="block space-y-2 text-sm text-slate-300">
                <span>Free Fire Player ID</span>
                <input
                  type="text"
                  value={freeFireId}
                  onChange={(e) => setFreeFireId(e.target.value)}
                  placeholder="Free Fire Player ID"
                  className="w-full rounded-[1.5rem] border border-white/10 bg-white/5 px-5 py-4 text-white outline-none transition focus:border-purple-400/60"
                />
              </label>
              <label className="sm:col-span-2 block space-y-2 text-sm text-slate-300">
                <span>Referral Code <span className="text-slate-500">(optional)</span></span>
                <input
                  type="text"
                  value={referralCode}
                  onChange={(e) => setReferralCode(e.target.value)}
                  placeholder="Referral code"
                  className="w-full rounded-[1.5rem] border border-white/10 bg-white/5 px-5 py-4 text-white outline-none transition focus:border-purple-400/60"
                />
              </label>
              <label className="sm:col-span-2 block space-y-2 text-sm text-slate-300">
                <span>Create Password</span>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Create a password"
                  className="w-full rounded-[1.5rem] border border-white/10 bg-white/5 px-5 py-4 text-white outline-none transition focus:border-purple-400/60"
                />
              </label>
            </div>

            {error && <p className="text-sm text-red-400">{error}</p>}
            {success && <p className="text-sm text-emerald-400">{success}</p>}

            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-purple-500 to-sky-400 px-8 py-4 text-sm font-semibold text-slate-950 shadow-glow transition hover:brightness-110"
            >
              Register Now
            </button>
          </form>
        </section>

        <section className="grid gap-6 sm:grid-cols-2">
          <div className="rounded-[2.5rem] border border-white/10 bg-white/5 p-8 text-slate-300 shadow-glow">
            <p className="text-sm uppercase tracking-[0.24em] text-purple-300">Why register?</p>
            <ul className="mt-4 space-y-3 text-sm leading-7">
              <li>• Access exclusive esports events and tournaments.</li>
              <li>• Save referral rewards and app link history.</li>
              <li>• Keep your team and match schedule synced.</li>
            </ul>
          </div>
          <div className="rounded-[2.5rem] border border-white/10 bg-white/5 p-8 text-slate-300 shadow-glow">
            <p className="text-sm uppercase tracking-[0.24em] text-purple-300">Need the app?</p>
            <p className="mt-4 text-sm leading-7">
              If your Android app is not installed, the Netlify redirect will keep you on this page flow and preserve your referral parameters.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Register;
