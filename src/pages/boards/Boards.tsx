/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import {
  Container,
  Page,
  Search,
  SplitPane,
  Toolbar,
  SearchButton,
  BoardList,
  Board,
  ToolbarButtons,
  NavItem,
} from "./Boards.styled";

const Boards = () => {
  return (
    <Container>
      <SplitPane>
        <div className="flex items-center px-4 -mx-2">
          <img
            className="object-cover mx-2 rounded-full h-9 w-9"
            src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
            alt="avatar"
          />
          <h4 className="mx-3 font-sans text-2xl font-bold text-gray-800 dark:text-gray-200 hover:underline">
            Casium
          </h4>
        </div>
        <div className="relative mt-8"></div>
        <div className="flex flex-col justify-between flex-1 mt-6 font-serif">
          <nav>
            <NavItem href="#" selected={true}>
              <svg
                className="w-6 h-6"
                viewBox="0 0 40 40"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 5.33333C12 6.28267 11.8027 7.184 11.4453 8H20C20.3536 8 20.6928 8.14048 20.9428 8.39052C21.1929 8.64057 21.3333 8.97971 21.3333 9.33333V14.6667H20C18.5855 14.6667 17.229 15.2286 16.2288 16.2288C15.2286 17.229 14.6667 18.5855 14.6667 20V21.3333H9.33333C8.97971 21.3333 8.64057 21.1929 8.39052 20.9428C8.14048 20.6928 8 20.3536 8 20V11.4453C6.7422 11.9956 5.34484 12.1428 4 11.8667V20C4 21.4145 4.5619 22.771 5.5621 23.7712C6.56229 24.7714 7.91885 25.3333 9.33333 25.3333H14.6667V30.6667C14.6667 32.0812 15.2286 33.4377 16.2288 34.4379C17.229 35.4381 18.5855 36 20 36H28.1333C27.8607 34.655 28.0078 33.2587 28.5547 32H20C19.6464 32 19.3072 31.8595 19.0572 31.6095C18.8071 31.3594 18.6667 31.0203 18.6667 30.6667V25.3333H20C21.4145 25.3333 22.771 24.7714 23.7712 23.7712C24.7714 22.771 25.3333 21.4145 25.3333 20V18.6667H30.6667C31.0203 18.6667 31.3594 18.8071 31.6095 19.0572C31.8595 19.3072 32 19.6464 32 20V28.5547C33.2578 28.0042 34.6552 27.857 36 28.1333V20C36 18.5855 35.4381 17.229 34.4379 16.2288C33.4377 15.2286 32.0812 14.6667 30.6667 14.6667H25.3333V9.33333C25.3333 7.91885 24.7714 6.56229 23.7712 5.5621C22.771 4.5619 21.4145 4 20 4H11.8667C11.9547 4.432 12 4.87733 12 5.33333ZM21.3333 18.6667V20C21.3333 20.3536 21.1929 20.6928 20.9428 20.9428C20.6928 21.1929 20.3536 21.3333 20 21.3333H18.6667V20C18.6667 19.6464 18.8071 19.3072 19.0572 19.0572C19.3072 18.8071 19.6464 18.6667 20 18.6667H21.3333Z" />
                <path d="M9.3335 5.33325C9.3335 6.39412 8.91207 7.41153 8.16192 8.16168C7.41178 8.91182 6.39436 9.33325 5.3335 9.33325C4.27263 9.33325 3.25521 8.91182 2.50507 8.16168C1.75492 7.41153 1.3335 6.39412 1.3335 5.33325C1.3335 4.27239 1.75492 3.25497 2.50507 2.50482C3.25521 1.75468 4.27263 1.33325 5.3335 1.33325C6.39436 1.33325 7.41178 1.75468 8.16192 2.50482C8.91207 3.25497 9.3335 4.27239 9.3335 5.33325Z" />
                <path d="M38.667 34.6665C38.667 35.7274 38.2456 36.7448 37.4954 37.4949C36.7453 38.2451 35.7279 38.6665 34.667 38.6665C33.6061 38.6665 32.5887 38.2451 31.8386 37.4949C31.0884 36.7448 30.667 35.7274 30.667 34.6665C30.667 33.6056 31.0884 32.5882 31.8386 31.8381C32.5887 31.0879 33.6061 30.6665 34.667 30.6665C35.7279 30.6665 36.7453 31.0879 37.4954 31.8381C38.2456 32.5882 38.667 33.6056 38.667 34.6665Z" />
                <path d="M38.667 5.33325C38.667 6.39412 38.2456 7.41153 37.4954 8.16168C36.7453 8.91182 35.7279 9.33325 34.667 9.33325C33.6061 9.33325 32.5887 8.91182 31.8386 8.16168C31.0884 7.41153 30.667 6.39412 30.667 5.33325C30.667 4.27239 31.0884 3.25497 31.8386 2.50482C32.5887 1.75468 33.6061 1.33325 34.667 1.33325C35.7279 1.33325 36.7453 1.75468 37.4954 2.50482C38.2456 3.25497 38.667 4.27239 38.667 5.33325Z" />
                <path d="M9.3335 34.6665C9.3335 35.7274 8.91207 36.7448 8.16192 37.4949C7.41178 38.2451 6.39436 38.6665 5.3335 38.6665C4.27263 38.6665 3.25521 38.2451 2.50507 37.4949C1.75492 36.7448 1.3335 35.7274 1.3335 34.6665C1.3335 33.6056 1.75492 32.5882 2.50507 31.8381C3.25521 31.0879 4.27263 30.6665 5.3335 30.6665C6.39436 30.6665 7.41178 31.0879 8.16192 31.8381C8.91207 32.5882 9.3335 33.6056 9.3335 34.6665Z" />
              </svg>

              <span className="mx-4 font-medium text-current">Boards</span>
            </NavItem>

            <NavItem href="#">
              <svg
                className="w-6 h-6"
                viewBox="0 0 34 34"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M17 33.25C8.03984 33.25 0.75 25.9602 0.75 17C0.75 8.03984 8.03984 0.75 17 0.75C25.9602 0.75 33.25 8.03984 33.25 17C33.25 25.9602 25.9602 33.25 17 33.25ZM17 3.25C9.42188 3.25 3.25 9.42188 3.25 17C3.25 24.5781 9.42188 30.75 17 30.75C24.5781 30.75 30.75 24.582 30.75 17C30.75 9.41797 24.582 3.25 17 3.25Z" />
                <path d="M22.2865 19.8125C20.9271 19.8125 19.6138 19.2094 18.588 18.1148C17.5734 17.0143 16.9668 15.5992 16.8693 14.1055C16.7545 12.4883 17.2505 11 18.2662 9.91641C19.2818 8.83281 20.7013 8.25 22.2865 8.25C23.8599 8.25 25.2841 8.84531 26.2966 9.92656C27.3091 11.0078 27.8177 12.5047 27.7029 14.107C27.6036 15.5998 26.9972 17.0139 25.9841 18.1148C24.9576 19.2094 23.6451 19.8125 22.2865 19.8125Z" />
                <path d="M9.79853 20.075C7.47353 20.075 5.429 17.9258 5.2415 15.2836C5.14541 13.9305 5.56572 12.6797 6.42666 11.7617C7.28759 10.8438 8.47509 10.3555 9.79775 10.3555C11.1204 10.3555 12.3071 10.8586 13.1626 11.7727C14.0181 12.6867 14.4517 13.9461 14.354 15.2883C14.1634 17.9266 12.1196 20.075 9.79853 20.075Z" />
                <path d="M29.8414 24.7562C29.7172 24.389 29.4149 23.9976 28.8086 23.6265C26.9758 22.507 24.7211 21.9148 22.2868 21.9148C19.8985 21.9148 17.5813 22.532 15.761 23.6531C13.7102 24.9164 12.3321 26.7585 11.7766 28.9796C11.6453 29.5023 11.4539 30.4749 11.6586 31.0195C14.9434 32.2686 18.5622 32.3259 21.8849 31.1814C25.2076 30.0369 28.0235 27.7632 29.8422 24.7562H29.8414Z" />
                <path d="M9.78359 28.3569C10.3359 26.153 11.5117 24.3155 13.3359 22.8296C13.4222 22.7584 13.4878 22.6655 13.5258 22.5603C13.5639 22.4552 13.5731 22.3418 13.5524 22.232C13.5318 22.1221 13.482 22.0198 13.4083 21.9357C13.3347 21.8516 13.2398 21.7888 13.1336 21.7538C12.1961 21.4546 11.1258 21.2944 9.79844 21.2944C7.9375 21.2944 5.96172 21.7983 4.475 22.714C4.05312 22.9741 3.63906 23.0741 3.32031 23.1632C4.60006 25.9916 6.72234 28.3557 9.39687 29.9319L9.53672 29.921C9.5673 29.3928 9.64999 28.8689 9.78359 28.3569Z" />
              </svg>

              <span className="mx-4 font-medium">Invites</span>
            </NavItem>

            <NavItem href="#">
              <svg
                className="w-6 h-6"
                viewBox="0 0 31 31"
                stroke="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M25.3333 18.6667V2M15.3333 5.33333V2V5.33333ZM15.3333 5.33333C14.4493 5.33333 13.6014 5.68452 12.9763 6.30964C12.3512 6.93477 12 7.78261 12 8.66667C12 9.55072 12.3512 10.3986 12.9763 11.0237C13.6014 11.6488 14.4493 12 15.3333 12V5.33333ZM15.3333 5.33333C16.2174 5.33333 17.0652 5.68452 17.6904 6.30964C18.3155 6.93477 18.6667 7.78261 18.6667 8.66667C18.6667 9.55072 18.3155 10.3986 17.6904 11.0237C17.0652 11.6488 16.2174 12 15.3333 12V5.33333ZM5.33333 25.3333C6.21739 25.3333 7.06523 24.9821 7.69036 24.357C8.31548 23.7319 8.66667 22.8841 8.66667 22C8.66667 21.1159 8.31548 20.2681 7.69036 19.643C7.06523 19.0179 6.21739 18.6667 5.33333 18.6667V25.3333ZM5.33333 25.3333C4.44928 25.3333 3.60143 24.9821 2.97631 24.357C2.35119 23.7319 2 22.8841 2 22C2 21.1159 2.35119 20.2681 2.97631 19.643C3.60143 19.0179 4.44928 18.6667 5.33333 18.6667V25.3333ZM5.33333 25.3333V28.6667V25.3333ZM5.33333 18.6667V2V18.6667ZM15.3333 12V28.6667V12ZM25.3333 25.3333C26.2174 25.3333 27.0652 24.9821 27.6904 24.357C28.3155 23.7319 28.6667 22.8841 28.6667 22C28.6667 21.1159 28.3155 20.2681 27.6904 19.643C27.0652 19.0179 26.2174 18.6667 25.3333 18.6667V25.3333ZM25.3333 25.3333C24.4493 25.3333 23.6014 24.9821 22.9763 24.357C22.3512 23.7319 22 22.8841 22 22C22 21.1159 22.3512 20.2681 22.9763 19.643C23.6014 19.0179 24.4493 18.6667 25.3333 18.6667V25.3333ZM25.3333 25.3333V28.6667V25.3333Z"
                  stroke-width="3.33333"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>

              <span className="mx-4 font-medium">Statistics</span>
            </NavItem>

            <hr className="my-6 border-gray-300 dark:border-gray-600" />
            <NavItem href="#">
              <svg
                className="w-6 h-6"
                viewBox="0 0 31 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 18.6667H6.31C6.75199 18.6668 7.17585 18.8424 7.48833 19.155L11.5117 23.1783C11.8242 23.4909 12.248 23.6666 12.69 23.6667H17.9767C18.4187 23.6666 18.8425 23.4909 19.155 23.1783L23.1783 19.155C23.4908 18.8424 23.9147 18.6668 24.3567 18.6667H28.6667M8.66667 3.66667H5.33333C4.44928 3.66667 3.60143 4.01786 2.97631 4.64298C2.35119 5.2681 2 6.11594 2 7V27C2 27.8841 2.35119 28.7319 2.97631 29.357C3.60143 29.9821 4.44928 30.3333 5.33333 30.3333H25.3333C26.2174 30.3333 27.0652 29.9821 27.6904 29.357C28.3155 28.7319 28.6667 27.8841 28.6667 27V7C28.6667 6.11594 28.3155 5.2681 27.6904 4.64298C27.0652 4.01786 26.2174 3.66667 25.3333 3.66667H22H8.66667ZM15.3333 2V15.3333V2ZM15.3333 15.3333L20.3333 10.3333L15.3333 15.3333ZM15.3333 15.3333L10.3333 10.3333L15.3333 15.3333Z"
                  stroke="currentColor"
                  stroke-opacity="0.75"
                  stroke-width="3.33333"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>

              <span className="mx-4 font-medium">Support</span>
            </NavItem>
            <NavItem href="#">
              <svg
                className="w-6 h-6"
                viewBox="0 0 34 31"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18.6667 22V23.6667C18.6667 24.9927 18.1399 26.2645 17.2022 27.2022C16.2645 28.1399 14.9927 28.6667 13.6667 28.6667H7C5.67392 28.6667 4.40215 28.1399 3.46447 27.2022C2.52678 26.2645 2 24.9927 2 23.6667V7C2 5.67392 2.52678 4.40215 3.46447 3.46447C4.40215 2.52678 5.67392 2 7 2H13.6667C14.9927 2 16.2645 2.52678 17.2022 3.46447C18.1399 4.40215 18.6667 5.67392 18.6667 7V8.66667M25.3333 22L32 15.3333L25.3333 22ZM32 15.3333L25.3333 8.66667L32 15.3333ZM32 15.3333H8.66667H32Z"
                  stroke="currentColor"
                  stroke-width="3.33333"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>

              <span className="mx-4 font-medium">Sign out</span>
            </NavItem>
          </nav>
        </div>
      </SplitPane>
      <Page>
        <Toolbar>
          <Search>
            <input
              type="text"
              className="relative flex-grow w-full h-full px-4 rounded-lg shadow-sm appearance-none focus:border-0 focus:outline-none"
              name="displayName"
              key="displayName"
            />
            <SearchButton>
              <svg
                width="30"
                height="30"
                viewBox="0 0 39 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M14.6362 4.88062C12.0484 4.88062 9.56653 5.90863 7.73665 7.73852C5.90676 9.5684 4.87875 12.0503 4.87875 14.6381C4.87875 17.226 5.90676 19.7078 7.73665 21.5377C9.56653 23.3676 12.0484 24.3956 14.6362 24.3956C17.2241 24.3956 19.7059 23.3676 21.5358 21.5377C23.3657 19.7078 24.3937 17.226 24.3937 14.6381C24.3937 12.0503 23.3657 9.5684 21.5358 7.73852C19.7059 5.90863 17.2241 4.88062 14.6362 4.88062ZM2.76775e-07 14.6381C-0.000293675 12.3346 0.543108 10.0636 1.58601 8.0097C2.62891 5.95582 4.14187 4.1771 6.00182 2.81819C7.86178 1.45928 10.0162 0.558564 12.2899 0.189294C14.5636 -0.179977 16.8924 -0.00737299 19.0868 0.693066C21.2812 1.39351 23.2793 2.602 24.9186 4.22027C26.5579 5.83853 27.7921 7.82087 28.5208 10.0061C29.2495 12.1913 29.4522 14.5176 29.1123 16.7959C28.7724 19.0741 27.8996 21.24 26.5648 23.1174L38.3152 34.8678C38.7596 35.3279 39.0055 35.9441 38.9999 36.5837C38.9943 37.2233 38.7378 37.8351 38.2855 38.2874C37.8332 38.7397 37.2214 38.9962 36.5818 39.0018C35.9422 39.0073 35.326 38.7615 34.866 38.3171L23.1179 26.5691C20.9283 28.1261 18.3523 29.0503 15.6722 29.2405C12.9921 29.4307 10.3114 28.8794 7.92382 27.6472C5.53623 26.415 3.53389 24.5494 2.13622 22.2547C0.738545 19.96 -0.00052215 17.3249 2.76775e-07 14.6381Z"
                  fill="#9EA6B2"
                />
              </svg>
            </SearchButton>
          </Search>
          <ToolbarButtons>
            <svg
              className="transition duration-200 cursor-pointer text-colors-darkgray hover:text-colors-primary"
              width="39"
              height="38"
              viewBox="0 0 39 38"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M30.75 20C29.6271 20 28.7083 20.9 28.7083 22V32.44C28.7083 33.54 27.7896 34.44 26.6667 34.44H6.25C5.12708 34.44 4.20833 33.54 4.20833 32.44V12C4.20833 10.9 5.12708 10 6.25 10H16.4583C17.5813 10 18.5 9.1 18.5 8C18.5 6.9 17.5813 6 16.4583 6H4.20833C1.9625 6 0.125 7.8 0.125 10V34C0.125 36.2 1.9625 38 4.20833 38H28.7083C30.9542 38 32.7917 36.2 32.7917 34V22C32.7917 20.9 31.8729 20 30.75 20ZM36.9158 6H32.7917V1.96C32.7917 0.88 31.8933 0 30.7908 0H30.7296C29.6067 0 28.7083 0.88 28.7083 1.96V6H24.6046C23.5021 6 22.6038 6.88 22.5833 7.96V8.02C22.5833 9.12 23.4817 10 24.6046 10H28.7083V14.02C28.7083 15.1 29.6067 16 30.7296 15.98H30.7908C31.8933 15.98 32.7917 15.1 32.7917 14.02V10H36.9158C38.0183 10 38.9167 9.12 38.9167 8.04V7.96C38.9167 6.88 38.0183 6 36.9158 6Z" />
              <path d="M22.5833 14H10.3333C9.21038 14 8.29163 14.9 8.29163 16C8.29163 17.1 9.21038 18 10.3333 18H22.5833C23.7062 18 24.625 17.1 24.625 16C24.625 14.9 23.7062 14 22.5833 14ZM22.5833 20H10.3333C9.21038 20 8.29163 20.9 8.29163 22C8.29163 23.1 9.21038 24 10.3333 24H22.5833C23.7062 24 24.625 23.1 24.625 22C24.625 20.9 23.7062 20 22.5833 20ZM22.5833 26H10.3333C9.21038 26 8.29163 26.9 8.29163 28C8.29163 29.1 9.21038 30 10.3333 30H22.5833C23.7062 30 24.625 29.1 24.625 28C24.625 26.9 23.7062 26 22.5833 26Z" />
            </svg>

            <svg
              className="pt-1 transition duration-200 cursor-pointer text-colors-darkgray hover:text-colors-primary"
              width="39"
              height="38"
              viewBox="0 0 41 34"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M40.2796 21.7605C39.8184 21.305 39.1927 21.0491 38.5403 21.049C37.8879 21.0489 37.2622 21.3047 36.8008 21.7601L32.8002 25.7089L32.8002 12.1428C32.8002 11.4987 32.541 10.881 32.0797 10.4255C31.6183 9.97009 30.9926 9.71423 30.3402 9.71423C29.6877 9.71423 29.062 9.97009 28.6007 10.4255C28.1393 10.881 27.8801 11.4987 27.8801 12.1428L27.8802 25.7083L23.8796 21.7589C23.4169 21.3095 22.7932 21.0589 22.1443 21.0615C21.4953 21.0641 20.8737 21.3198 20.4148 21.7728C19.9559 22.2258 19.6969 22.8395 19.6943 23.4801C19.6916 24.1208 19.9455 24.7365 20.4007 25.1932L28.6007 33.2884C28.6046 33.2925 28.6089 33.2955 28.6128 33.2994C28.6665 33.3518 28.7223 33.402 28.7807 33.4491C28.81 33.473 28.841 33.4936 28.8711 33.5159C28.9052 33.5412 28.9388 33.5673 28.974 33.5908C29.0093 33.6141 29.046 33.6343 29.0823 33.6555C29.1151 33.675 29.1469 33.6952 29.1807 33.713C29.2172 33.7322 29.2551 33.7486 29.2924 33.766C29.3279 33.7826 29.3625 33.8 29.399 33.8148C29.4351 33.8298 29.4722 33.8417 29.5089 33.8547C29.5478 33.8685 29.5862 33.883 29.6261 33.8952C29.663 33.9061 29.7002 33.9142 29.7375 33.9235C29.7781 33.9336 29.818 33.9447 29.8594 33.9528C29.9025 33.9611 29.9455 33.9662 29.9888 33.9723C30.0251 33.9775 30.0605 33.9844 30.0974 33.9879C30.1782 33.9957 30.2592 34 30.3402 34L30.3422 34C30.4224 33.9998 30.5027 33.9955 30.5829 33.9879C30.619 33.9842 30.6538 33.9777 30.6895 33.9727C30.7332 33.9666 30.7772 33.9613 30.8209 33.9528C30.8613 33.9447 30.9004 33.934 30.94 33.9241C30.9783 33.9146 31.0169 33.9063 31.0548 33.895C31.0931 33.8834 31.1304 33.8693 31.1682 33.8559C31.2063 33.8423 31.2444 33.83 31.2819 33.8146C31.3168 33.8005 31.3504 33.7837 31.3844 33.7677C31.4234 33.7499 31.4623 33.7327 31.5003 33.7128C31.5322 33.6958 31.5628 33.6764 31.594 33.6582C31.6317 33.6359 31.6698 33.6147 31.7067 33.5904C31.7405 33.5681 31.7721 33.5432 31.8047 33.5195C31.8365 33.4961 31.8691 33.4742 31.8998 33.4491C31.9541 33.4052 32.0056 33.3583 32.0556 33.3101C32.0634 33.3026 32.072 33.2963 32.0794 33.2888L40.2794 25.1951C40.5079 24.9695 40.6891 24.7018 40.8127 24.4072C40.9364 24.1125 41 23.7967 41 23.4778C41 23.1588 40.9364 22.843 40.8127 22.5484C40.6891 22.2537 40.5079 21.986 40.2794 21.7605L40.2796 21.7605ZM2.46001 12.9523L17.2199 12.9523C17.8723 12.9523 18.498 13.2082 18.9594 13.6636C19.4207 14.1191 19.6799 14.7368 19.6799 15.3809C19.6799 16.025 19.4207 16.6427 18.9594 17.0981C18.498 17.5536 17.8723 17.8094 17.2199 17.8094L2.46001 17.8094C1.80758 17.8094 1.18186 17.5536 0.720519 17.0981C0.259177 16.6427 -1.57143e-06 16.025 -1.62774e-06 15.3809C-1.68405e-06 14.7368 0.259177 14.1191 0.720519 13.6636C1.18186 13.2082 1.80758 12.9523 2.46001 12.9523V12.9523ZM2.46001 25.9046L13.9399 25.9046C14.5923 25.9046 15.218 26.1605 15.6794 26.6159C16.1407 27.0714 16.3999 27.6891 16.3999 28.3332C16.3999 28.9773 16.1407 29.595 15.6794 30.0504C15.218 30.5059 14.5923 30.7617 13.9399 30.7617L2.46001 30.7617C1.80758 30.7617 1.18186 30.5059 0.720521 30.0504C0.259179 29.595 -4.39102e-07 28.9773 -4.9541e-07 28.3332C-5.51719e-07 27.6891 0.259178 27.0714 0.72052 26.6159C1.18186 26.1605 1.80758 25.9046 2.46001 25.9046V25.9046ZM30.34 4.85711L2.46001 4.85712C1.80757 4.85712 1.18186 4.60125 0.720518 4.14581C0.259176 3.69037 -2.70375e-06 3.07265 -2.76006e-06 2.42856C-2.81637e-06 1.78447 0.259176 1.16676 0.720518 0.711312C1.18186 0.25587 1.80757 3.36149e-06 2.46001 3.27731e-06L30.34 8.39968e-07C30.9924 8.10077e-07 31.6181 0.255867 32.0794 0.71131C32.5408 1.16675 32.8 1.78446 32.8 2.42856C32.8 3.07265 32.5408 3.69037 32.0795 4.14581C31.6181 4.60125 30.9924 4.85711 30.34 4.85711V4.85711Z" />
            </svg>
          </ToolbarButtons>
        </Toolbar>
        <BoardList>
          <Board></Board>
          <Board></Board>
        </BoardList>
      </Page>
    </Container>
  );
};

export default Boards;
