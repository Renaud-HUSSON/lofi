import { useContext } from "react"
import { DarkContext } from "../../context/Dark"

const Loading = () => {
  const [dark, ] = useContext(DarkContext)
  
  return <svg className="animate-spin" width="39" height="39" viewBox="0 0 39 39" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M33 19.5C33 26.9558 26.9558 33 19.5 33C12.0442 33 6 26.9558 6 19.5C6 12.0442 12.0442 6 19.5 6C26.9558 6 33 12.0442 33 19.5ZM8.66411 19.5C8.66411 25.4845 13.5155 30.3359 19.5 30.3359C25.4845 30.3359 30.3359 25.4845 30.3359 19.5C30.3359 13.5155 25.4845 8.66411 19.5 8.66411C13.5155 8.66411 8.66411 13.5155 8.66411 19.5Z" fill="#E48181"/>
    <path d="M29.7785 10.7476C27.923 8.56869 25.4231 7.03576 22.6397 6.37017C19.8563 5.70458 16.9334 5.94077 14.2929 7.04464C11.6525 8.14851 9.43116 10.0629 7.94965 12.5115C6.46815 14.9601 5.80313 17.8162 6.0506 20.6674C6.29807 23.5185 7.44523 26.2173 9.32645 28.374C11.2077 30.5307 13.7256 32.0338 16.5168 32.6662C19.3079 33.2987 22.2278 33.0277 24.8549 31.8925C27.4821 30.7573 29.6805 28.8166 31.1327 26.3506L28.8371 24.9987C27.6714 26.9781 25.9069 28.5358 23.7982 29.447C21.6895 30.3582 19.3458 30.5756 17.1055 30.068C14.8652 29.5604 12.8441 28.3539 11.3341 26.6228C9.82414 24.8917 8.90336 22.7255 8.70473 20.437C8.50609 18.1485 9.03988 15.856 10.229 13.8906C11.4182 11.9253 13.2011 10.3886 15.3205 9.5026C17.4399 8.61657 19.786 8.42699 22.0201 8.96123C24.2543 9.49547 26.2608 10.7259 27.7501 12.4748L29.7785 10.7476Z" fill={dark ? '#FFF' : '#161616'}/>
  </svg>
}

export default Loading