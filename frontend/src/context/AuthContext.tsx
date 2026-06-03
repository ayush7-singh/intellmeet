import {
  createContext,
  useContext,
  useState,
  ReactNode,
} from 'react'

type UserType = {
  _id: string
  name: string
  email: string
  token: string
}

type AuthContextType = {
  user: UserType | null
  login: (userData: UserType) => void
  logout: () => void
}

const AuthContext = createContext<AuthContextType>(
  {} as AuthContextType
)

export const AuthProvider = ({
  children,
}: {
  children: ReactNode
}) => {
  const [user, setUser] = useState<UserType | null>(
    JSON.parse(
      localStorage.getItem('userInfo') || 'null'
    )
  )

  const login = (userData: UserType) => {
    localStorage.setItem(
      'userInfo',
      JSON.stringify(userData)
    )

    setUser(userData)
  }

  const logout = () => {
    localStorage.removeItem('userInfo')
    setUser(null)
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)