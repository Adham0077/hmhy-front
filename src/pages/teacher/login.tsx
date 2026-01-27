import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'sonner'
import { request } from '../../config/request'

const BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:2026/api/v1'


export const TeacherLogin = () => {

  const navigate = useNavigate()
  const [email, setEmail] = useState('adham011905@gmail.com')
  const [password, setPassword] = useState('Password123!')
  const [loading, setLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)

  const handleLogin = async () => {
    if (!email || !password) {
      toast.error('Please fill all fields')
      return
    }

    setLoading(true)
    try {
      const res = await request.post('/signin/teacher', { email, password })
      email
      console.log('LOGIN RESPONSE:', res.data)

      const token = res.data.data

      localStorage.setItem('token', token)
      localStorage.setItem('role', 'teacher')

      toast.success('Login successful!')
      navigate('/teacher/lesson')


    } catch (err: any) {
      toast.error(err?.response?.data?.message || 'Login failed')
    } finally {
      setLoading(false)
    }
  }


  const handleGoogleLogin = () => {
    console.log('🔗 Redirecting to Google OAuth')
    window.location.href = `${BASE_URL}/teacher/google`
  }


  return (
    <div className="fixed inset-0 bg-linear-to-br from-gray-200 to-gray-300 flex items-center justify-center font-sans">
      <div className="w-113 bg-white rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.3)] p-10">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-black m-0">
            HMHY
          </h1>
          <p className="text-[#718096] mt-2">Teacher Panel</p>
        </div>

        <div className="text-center mb-8">
          <h2 className="text-2xl font-semibold text-[#2d3748]">
            Welcome Back!
          </h2>
          <p className="text-[#718096] mt-2">Sign in to continue</p>
        </div>

        <button
          onClick={handleGoogleLogin}
          type='button'
          className="w-full h-12 flex items-center justify-center gap-3 bg-white border-2 border-[#e2e8f0] rounded-lg text-base font-medium cursor-pointer mb-6"
        >
          <span className="text-xl">🔗</span>
          Continue with Google
        </button>

        <div className="flex items-center gap-3 mb-6">
          <div className="flex-1 h-px bg-[#e2e8f0]" />
          <span className="text-sm text-[#718096]">or</span>
          <div className="flex-1 h-px bg-[#e2e8f0]" />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">
            Email Address
          </label>
          <input
            type='email'
            autoComplete='email'
            placeholder='teacher@example.com'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={loading}
            className="w-full p-3 border border-[#e2e8f0] rounded-lg text-base box-border"
          />
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium mb-1">
            Password
          </label>
          <div className="relative">
            <input
              type={showPassword ? 'text' : 'password'}
              autoComplete='current-password'
              placeholder='Enter your password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleLogin()}
              disabled={loading}
              className="w-full py-3 px-3 pr-11 border border-[#e2e8f0] rounded-lg text-base box-border"
            />
            <button
              type='button'
              onClick={() => setShowPassword((prev) => !prev)}
              aria-label={showPassword ? 'Hide password' : 'Show password'}
              disabled={loading}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 bg-transparent border-none cursor-pointer text-base text-[#718096] p-1 disabled:cursor-not-allowed"
            >
              {showPassword ? '🙈' : '👁️'}
            </button>
          </div>
        </div>

        <button
          onClick={handleLogin}
          disabled={loading}
          type='button'
          className="w-full py-3.5 px-0 bg-sky-700 hover:bg-sky-800 text-white border-none rounded-lg text-base font-semibold cursor-pointer mb-6 disabled:bg-[#718096] disabled:cursor-not-allowed"
        >
          {loading ? 'Signing in...' : 'Sign In'}
        </button>

        <div className="text-center text-xs text-[#718096] mb-4">
          By continuing, you agree to HMHY's Terms of Service and Privacy Policy
        </div>

        <div className="text-center">
          <a href='/' className="text-sm text-[#667eea] no-underline">
            ← Login as Admin
          </a>
        </div>
      </div>
    </div>
  )
}