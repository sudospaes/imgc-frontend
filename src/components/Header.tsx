import { useDispatch, useSelector } from "react-redux";
import { toggleDarkMode } from "../redux/settings-reducer";
import { SunIcon, MoonIcon } from "./ThemeIcons";

const HeaderC = () => {
    const dispatch = useDispatch()
    const { isDarkMode } = useSelector((state: any) => state.settings)

    const handleTheme = () => {
        dispatch(toggleDarkMode())
        localStorage.setItem('isDarkMode', JSON.stringify(!isDarkMode))
        document.getElementsByTagName('body')[0].className = (isDarkMode ? 'light-bg' : 'dark-bg')
    }

    return (
        <div className='w-auto h-auto mx-4 rounded-lg '>
            <div>
                <h2 className="flex flex-row flex-nowrap items-center px-4 py-4">
                    <span className="flex-none block mr-4 px-4 py-2.5 text-xs leading-none bg-black font-medium text-white dark:bg-[#cccccce0] dark:text-zinc-900" >
                        Image Tools
                    </span>
                    <span className="flex-grow block border-t border-black dark:border-[#cccccce0]" aria-hidden="true" role="presentation"></span>
                    <button className="ml-2.5" onClick={handleTheme}>{isDarkMode ? <MoonIcon /> : <SunIcon />}</button>
                </h2>
            </div>
        </div>
    );
}

export default HeaderC;