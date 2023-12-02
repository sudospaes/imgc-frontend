import { useDispatch, useSelector } from "react-redux"
import { ConfigProvider, theme } from "antd"
import { useEffect } from "react"
import { setIsDarkMode } from "./redux/settings-reducer"
// Components
import FooterC from "./components/Footer"
import HeaderC from "./components/Header"
import MainC from "./components/Main"

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    if (document.getElementsByTagName('body')[0].className === 'dark-bg')
      dispatch(setIsDarkMode(true))
    else
      dispatch(setIsDarkMode(false))

  }, [])

  const { isDarkMode } = useSelector((state: any) => state.settings)
  const { defaultAlgorithm, darkAlgorithm } = theme;

  return (
    <>
      <div className={`${isDarkMode ? 'dark' : ''}`}>
        <ConfigProvider theme={{ algorithm: isDarkMode ? darkAlgorithm : defaultAlgorithm }}>
          <div className='flex flex-col justify-between min-h-screen py-4'>
            <HeaderC />
            <MainC />
            <FooterC />
          </div>
        </ConfigProvider>
      </div>
    </>
  )
}

export default App
