/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable no-unused-expressions */
// @ts-nocheck
import {
    useState,
    useEffect,
    useRef,
  } from 'react';
  
  import {
    NavLink,
    useLocation,
  } from 'react-router-dom';
    
  import SidebarLinkGroup from '../../components/SidebarLinkGroup';  
  
  function Sidebar({ sidebarOpen, setSidebarOpen }) {

    const location = useLocation();
    const { pathname } = location;
    const trigger = useRef(null);
    const sidebar = useRef(null);
    
    const routes = [
      {
        id: 42,
        title: 'Control de procesos',
        num: 1,
        options: [
          {
            id: 29,
            name: 'Ingesta',
            url: 'intake',
          },
          {
            id: 1,
            name: 'Control de calculos',
            url: 'calculateProfitability',
          },
          {
            id: 30,
            name: 'Reportes',
            url: '#/',
          },
        ],
      },
      
    ];  
    const storedSidebarExpanded = localStorage.getItem('sidebar-expanded');
    const [sidebarExpanded, setSidebarExpanded] = useState(
      storedSidebarExpanded === null ? false : storedSidebarExpanded === 'true',
    );
  
    // close on click outside
    useEffect(() => {
      const clickHandler = ({ target }) => {
        if (!sidebar.current || !trigger.current) return;
        if (
          !sidebarOpen
            || sidebar.current.contains(target)
            || trigger.current.contains(target)
        ) { return; }
        setSidebarOpen(true);
      };
      document.addEventListener('click', clickHandler);
      return () => document.removeEventListener('click', clickHandler);
    });
  
    useEffect(() => {
      const keyHandler = ({ keyCode }) => {
        if (!sidebarOpen || keyCode !== 27) return;
        setSidebarOpen(false);
      };
      document.addEventListener('keydown', keyHandler);
      return () => document.removeEventListener('keydown', keyHandler);
    });
  
    useEffect(() => {
      localStorage.setItem('sidebar-expanded', sidebarExpanded);
      if (sidebarExpanded) {
        document.querySelector('body').classList.add('sidebar-expanded');
      } else {
        document.querySelector('body').classList.remove('sidebar-expanded');
      }
    }, [sidebarExpanded]);
  
    return (
      <div className="bg-bgWhite dark:bg-bgSidebar">
        <div
          className={`fixed inset-0 bg-opacity-30 z-40 lg:hidden lg:z-auto transition-opacity duration-200 ${sidebarOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
          aria-hidden="true"
        />
        <div
          id="sidebar"
          ref={sidebar}
          className={`flex flex-col dark:border-slate-600 absolute z-40 left-0 top-0 lg:static lg:left-auto lg:top-auto lg:translate-x-0 transform h-screen overflow-y-scroll lg:overflow-y-auto no-scrollbar w-64 lg:w-20 lg:sidebar-expanded:!w-64 2xl:!w-64 shrink-0 border-r p-4 transition-all duration-200 ease-in-out ${sidebarOpen ? 'translate-x-0' : '-translate-x-64'}`}
        >
          <div className="flex justify-between mb-10 pr-3 sm:px-2">
            <button
              type="button"
              ref={trigger}
              className="lg:hidden text-slate-500 hover:text-slate-400"
              onClick={() => setSidebarOpen(!sidebarOpen)}
              aria-controls="sidebar"
              aria-expanded={sidebarOpen}
            >
              <span className="sr-only">Close sidebar</span>
              <svg
                className="w-6 h-6 fill-current"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10.7 18.7l1.4-1.4L7.8 13H20v-2H7.8l4.3-4.3-1.4-1.4L4 12z" />
              </svg>
            </button>
            <NavLink end to="/#" className="block">
            <img
              className="w-auto h-6"
              src='https://companieslogo.com/img/orig/BCH-1e8f26ec.png?t=1654513008'
              width="32"
              height="32"
              alt="Logo"
            />
          </NavLink>
          </div>
            <>
              <div className="space-y-8">
                <div>
                  <ul className="mt-3">
                    <li
                      className={`px-3 py-2 rounded-lg mb-6 last:mb-4 text-slate-600 dark:text-slate-400 dark:hover:text-accent hover:text-accent ${pathname === '/'
                      && 'text-accent sidebar-expanded:text-accent'
                      }`}
                    >
                      <NavLink
                        to="/"
                        className={`block truncate transition duration-150 ${pathname === '/'}`}
                      >
                        <div className="flex items-center">
                          <span
                            className={`fill-current text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200 dark:text-textWhite ${pathname === '/' && 'text-accent'}`}
                          >
                            Inicio
                          </span>
                        </div>
                      </NavLink>
                    </li>
                    <SidebarLinkGroup activecondition={pathname.includes('voc')}>
                      {(handleClick, open) => (
                        <>
                          <a
                            href="#0"
                            data-testid="voc"
                            className={`block truncate transition duration-150 ${pathname.includes('voc') && ''
                            }`}
                            onClick={(e) => {
                              e.preventDefault();
                              sidebarExpanded
                                ? handleClick()
                                : setSidebarExpanded(true);
                            }}
                          >
                            <div className="flex items-center justify-between">
                              <div className="flex items-center">
                                <span className="dark:text-textWhite text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                                  {routes[0]?.title}
                                </span>
                              </div>
                              <div className="flex shrink-0 ml-2">
                                <svg
                                  className={`w-3 h-3 shrink-0 ml-1 fill-current text-slate-600 dark:text-slate-400 ${open && 'transform rotate-180'}`}
                                  viewBox="0 0 12 12"
                                >
                                  <path d="M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z" />
                                </svg>
                              </div>
                            </div>
                          </a>
                          <div className="lg:hidden lg:sidebar-expanded:block 2xl:block">
                            <ul className={`pl-9 mt-1 ${!open && 'hidden'}`}>
                              {routes[0]?.options.map((item) => (
                                <li className="mb-1 last:mb-0" key={Math.random()}>
                                  <NavLink
                                    to={`/${item.url}`}
                                    data-testid={item.name}
                                    className={`block text-slate-500 dark:text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition duration-150 truncate ${pathname.includes(item.path) && 'text-slate-900 font-semibold dark:text-white'}`}
                                  >
                                    <span className="text-sm lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                                      {item.name}
                                    </span>
                                  </NavLink>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </>
                      )}
                    </SidebarLinkGroup>
                    <li
                      className={`px-3 py-2 rounded-lg mb-6 last:mb-4 text-slate-600 dark:text-slate-400 dark:hover:text-accent hover:text-accent ${pathname === '/'
                      && 'text-accent sidebar-expanded:text-accent'
                      }`}
                    >
                      <NavLink
                        to="/"
                        className={`block truncate transition duration-150 ${pathname === '/'}`}
                      >
                        <div className="flex items-center">
                          <span
                            className={`fill-current text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200 dark:text-textWhite ${pathname === '/parameters' && 'text-accent'}`}
                          >
                            Calculo de rentabilidad
                          </span>
                        </div>
                      </NavLink>
                    </li>
                    <li
                      className={`px-3 py-2 rounded-lg mb-6 last:mb-4 text-slate-600 dark:text-slate-400 dark:hover:text-accent hover:text-accent ${pathname === '/'
                      && 'text-accent sidebar-expanded:text-accent'
                      }`}
                    >
                      <NavLink
                        to="/"
                        className={`block truncate transition duration-150 ${pathname === '/'}`}
                      >
                        <div className="flex items-center">
                          <span
                            className={`fill-current text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200 dark:text-textWhite ${pathname === '/parameters' && 'text-accent'}`}
                          >
                            Modulo de ajustes
                          </span>
                        </div>
                      </NavLink>
                    </li>
                  <li
                      className={`px-3 py-2 rounded-lg mb-6 last:mb-4 text-slate-600 dark:text-slate-400 dark:hover:text-accent hover:text-accent ${pathname === '/'
                      && 'text-accent sidebar-expanded:text-accent'
                      }`}
                    >
                      <NavLink
                        to="/parameters"
                        className={`block truncate transition duration-150 ${pathname === '/parameters'}`}
                      >
                        <div className="flex items-center">
                          <span
                            className={`fill-current text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200 dark:text-textWhite ${pathname === '/parameters' && 'text-accent'}`}
                          >
                            Modulo de parametros
                          </span>
                        </div>
                      </NavLink>
                    </li>
                    <li
                      className={`px-3 py-2 rounded-lg mb-6 last:mb-4 text-slate-600 dark:text-slate-400 dark:hover:text-accent hover:text-accent ${pathname === '/'
                      && 'text-accent sidebar-expanded:text-accent'
                      }`}
                    >
                      <NavLink
                        to="/"
                        className={`block truncate transition duration-150 ${pathname === '/'}`}
                      >
                        <div className="flex items-center">
                          <span
                            className={`fill-current text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200 dark:text-textWhite ${pathname === '/parameters' && 'text-accent'}`}
                          >
                            Procesos
                          </span>
                        </div>
                      </NavLink>
                    </li>
                    <li
                      className={`px-3 py-2 rounded-lg mb-6 last:mb-4 text-slate-600 dark:text-slate-400 dark:hover:text-accent hover:text-accent ${pathname === '/'
                      && 'text-accent sidebar-expanded:text-accent'
                      }`}
                    >
                      <NavLink
                        to="/"
                        className={`block truncate transition duration-150 ${pathname === '/'}`}
                      >
                        <div className="flex items-center">
                          <span
                            className={`fill-current text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200 dark:text-textWhite ${pathname === '/parameters' && 'text-accent'}`}
                          >
                            Agendamiento
                          </span>
                        </div>
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="pt-4 hidden lg:inline-flex 2xl:hidden justify-end border-t border-slate-200 dark:border-slate-600">
                <div className="px-4 sidebar-expanded:pr-0">
                  <button
                    type="button"
                    data-testid="expand-sidebar"
                    onClick={() => setSidebarExpanded(!sidebarExpanded)}
                  >
                    <span className="sr-only">Expand / collapse sidebar</span>
                    <svg
                      className="w-5 h-5 fill-current rotate-180 sidebar-expanded:rotate-0"
                      viewBox="0 0 24 24"
                    >
                      <path className="text-slate-600 dark:text-slate-400" d="M11.67 3.87L9.9 2.1 0 12l9.9 9.9 1.77-1.77L3.54 12z" />
                    </svg>
                  </button>
                </div>
              </div>
  
            </>
        </div>
      </div>
    );
  }
  
  export default Sidebar;
  