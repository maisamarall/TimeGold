<template>
    <!-- Navbar -->
        <header class="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-[#7021D8] to-[#3B1172] text-white shadow-lg">
            <div class="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-20">

                <!-- Logo -->
                <div class="flex items-center">
                    <img src="@/assets/logo.png" alt="Logo" class="h-16 sm:h-20 w-auto mr-3">
                </div>

                <!-- Navegação -->
                <nav class="hidden md:flex items-center space-x-6">
                   <img id="avatarButton" type="button" data-dropdown-toggle="userDropdown" data-dropdown-placement="bottom-start" class="w-10 h-10 rounded-full cursor-pointer" src="https://img.icons8.com/color/48/user-female-circle--v11.png" alt="Usuário">
                   <span class="text-semibold">Maisa Amaral</span>
                </nav>
            </div>
        </header>

    <!-- Conteúdo da página-->
     <main class="mt-24 p-6 min-h-screen">
        <div class="container mx-auto items-center justify-center">
            <!-- Menu Lateral -->
             <button data-drawer-target="default-sidebar" data-drawer-toggle="default-sidebar" aria-controls="default-sidebar" type="button" class="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200">
             <span class="sr-only">Open sidebar</span>
             <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
             <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
            </svg>
            </button>

                    <aside id="default-sidebar" class="fixed top-20 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
                        <div class="h-full px-3 py-4 overflow-y-auto bg-gray-50">
                            <ul class="space-y-2 font-medium">
                                <li>
                                    <a href="#" class="flex items-center p-4 text-black rounded-lg hover:bg-[#7021D8] hover:text-white">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-speedometer2 w-6 h-6 font-semibold ml-3" viewBox="0 0 16 16">
                                        <path d="M8 4a.5.5 0 0 1 .5.5V6a.5.5 0 0 1-1 0V4.5A.5.5 0 0 1 8 4M3.732 5.732a.5.5 0 0 1 .707 0l.915.914a.5.5 0 1 1-.708.708l-.914-.915a.5.5 0 0 1 0-.707M2 10a.5.5 0 0 1 .5-.5h1.586a.5.5 0 0 1 0 1H2.5A.5.5 0 0 1 2 10m9.5 0a.5.5 0 0 1 .5-.5h1.5a.5.5 0 0 1 0 1H12a.5.5 0 0 1-.5-.5m.754-4.246a.39.39 0 0 0-.527-.02L7.547 9.31a.91.91 0 1 0 1.302 1.258l3.434-4.297a.39.39 0 0 0-.029-.518z"/>
                                        <path fill-rule="evenodd" d="M0 10a8 8 0 1 1 15.547 2.661c-.442 1.253-1.845 1.602-2.932 1.25C11.309 13.488 9.475 13 8 13c-1.474 0-3.31.488-4.615.911-1.087.352-2.49.003-2.932-1.25A8 8 0 0 1 0 10m8-7a7 7 0 0 0-6.603 9.329c.203.575.923.876 1.68.63C4.397 12.533 6.358 12 8 12s3.604.532 4.923.96c.757.245 1.477-.056 1.68-.631A7 7 0 0 0 8 3"/>
                                        </svg>
                                        <span class="ms-3 font-semibold">Dashboard</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" class="flex items-center p-4 text-black rounded-lg hover:bg-[#7021D8] hover:text-white">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-person-circle w-6 h-6 font-semibold ml-3" viewBox="0 0 16 16">
                                        <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
                                        <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/>
                                        </svg>
                                        <span class="ml-3 font-semibold">Usúarios</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" class="flex items-center p-4 text-black rounded-lg hover:bg-[#7021D8] hover:text-white">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-calendar3 w-6 h-6 font-semibold ml-3" viewBox="0 0 16 16">
                                        <path d="M14 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2M1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857z"/>
                                        <path d="M6.5 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/>
                                        </svg>
                                        <span class="ml-3 font-semibold">Agendamento</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" class="flex items-center p-4 text-black rounded-lg hover:bg-[#7021D8] hover:text-white">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-file-earmark-text-fill w-6 h-6 font-semibold ml-3" viewBox="0 0 16 16">
                                    <path d="M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0M9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1M4.5 9a.5.5 0 0 1 0-1h7a.5.5 0 0 1 0 1zM4 10.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m.5 2.5a.5.5 0 0 1 0-1h4a.5.5 0 0 1 0 1z"/>
                                    </svg> 
                                    <span class="ml-3 font-semibold">Planos  & Assinaturas</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" class="flex items-center p-4 text-black rounded-lg hover:bg-[#7021D8] hover:text-white">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-file-earmark-bar-graph-fill w-6 h-6 font-semibold ml-3" viewBox="0 0 16 16">
                                    <path d="M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0M9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1m.5 10v-6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5m-2.5.5a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5zm-3 0a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5z"/>
                                    </svg>
                                    <span class="ml-3 font-semibold">Relatórios</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" class="flex items-center p-4 text-black rounded-lg hover:bg-[#7021D8] hover:text-white">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-gear-wide-connected w-6 h-6 font-semibold ml-3" viewBox="0 0 16 16">
                                    <path d="M7.068.727c.243-.97 1.62-.97 1.864 0l.071.286a.96.96 0 0 0 1.622.434l.205-.211c.695-.719 1.888-.03 1.613.931l-.08.284a.96.96 0 0 0 1.187 1.187l.283-.081c.96-.275 1.65.918.931 1.613l-.211.205a.96.96 0 0 0 .434 1.622l.286.071c.97.243.97 1.62 0 1.864l-.286.071a.96.96 0 0 0-.434 1.622l.211.205c.719.695.03 1.888-.931 1.613l-.284-.08a.96.96 0 0 0-1.187 1.187l.081.283c.275.96-.918 1.65-1.613.931l-.205-.211a.96.96 0 0 0-1.622.434l-.071.286c-.243.97-1.62.97-1.864 0l-.071-.286a.96.96 0 0 0-1.622-.434l-.205.211c-.695.719-1.888.03-1.613-.931l.08-.284a.96.96 0 0 0-1.186-1.187l-.284.081c-.96.275-1.65-.918-.931-1.613l.211-.205a.96.96 0 0 0-.434-1.622l-.286-.071c-.97-.243-.97-1.62 0-1.864l.286-.071a.96.96 0 0 0 .434-1.622l-.211-.205c-.719-.695-.03-1.888.931-1.613l.284.08a.96.96 0 0 0 1.187-1.186l-.081-.284c-.275-.96.918-1.65 1.613-.931l.205.211a.96.96 0 0 0 1.622-.434zM12.973 8.5H8.25l-2.834 3.779A4.998 4.998 0 0 0 12.973 8.5m0-1a4.998 4.998 0 0 0-7.557-3.779l2.834 3.78zM5.048 3.967l-.087.065zm-.431.355A4.98 4.98 0 0 0 3.002 8c0 1.455.622 2.765 1.615 3.678L7.375 8zm.344 7.646.087.065z"/>
                                    </svg> 
                                    <span class="ml-3 font-semibold">Configurações</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </aside>  
                <!-- Fim do Menu Lateral -->

                <!-- Botão Gerenciar Assinatura -->
                <div class="flex justify-end mb-6 mr-8">
                    <a href="#">
                    <button class="bg-[#7021D8] text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-[#3B1172] transition-colors">
                    Gerenciar Assinatura
                    </button>
                    </a>
                </div>

                <!-- Grupo de Cards -->
                 <div class="p-5 sm:ml-64">
                    <div class="p-5">
                       <div class="grid grid-cols-3 md:grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-6 mb-4">
                        <div class="flex flex-col items-center justify-center h-44 rounded-lg bg-gray-50 border shadow-md space-y-3">
                            <div class="flex items-center justify-center space-x-4">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-calendar3 w-16 h-16 text-[#B074FF]" viewBox="0 0 16 16">
                                    <path d="M14 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2M1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857z"/>
                                    <path d="M6.5 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/>
                                </svg>
                                <span class="ml-10 text-[32px] font-semibold">12</span>
                            </div>
                            <p class="text-gray-900 font-medium text-[20px] text-center p-2"> Atendimentos confirmados para hoje</p>
                        </div>

                        <div class="flex flex-col items-center justify-center h-44 rounded-lg bg-gray-50 border shadow-md space-y-3">
                            <div class="flex items-center justify-center space-x-4">
                                <svg xmlns="http://www.w3.org/2000/svg"  fill="currentColor" class="bi bi-person-fill w-16 h-16 text-[#B074FF]" viewBox="0 0 16 16">
                                    <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
                                </svg>
                                <span class="ml-10 text-[32px] font-semibold">8</span>
                            </div>
                            <p class="text-gray-900 font-medium text-[20px] text-center p-2">Usúarios Ativos</p>
                        </div>

                        <div class="flex flex-col items-center justify-center h-44 rounded-lg bg-gray-50 border shadow-md space-y-3">
                            <div class="flex items-center justify-center space-x-4">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-stopwatch w-16 h-16 text-[#B074FF]" viewBox="0 0 16 16">
                                    <path d="M8.5 5.6a.5.5 0 1 0-1 0v2.9h-3a.5.5 0 0 0 0 1H8a.5.5 0 0 0 .5-.5z"/>
                                    <path d="M6.5 1A.5.5 0 0 1 7 .5h2a.5.5 0 0 1 0 1v.57c1.36.196 2.594.78 3.584 1.64l.012-.013.354-.354-.354-.353a.5.5 0 0 1 .707-.708l1.414 1.415a.5.5 0 1 1-.707.707l-.353-.354-.354.354-.013.012A7 7 0 1 1 7 2.071V1.5a.5.5 0 0 1-.5-.5M8 3a6 6 0 1 0 .001 12A6 6 0 0 0 8 3"/>
                                </svg>
                                <span class="ml-10 text-[32px] font-semibold">3</span>
                                <p class="text-gray-900 font-medium text-[20px] text-center p-2">novos</p>
                            </div>
                            <p class="text-gray-900 font-medium text-[20px] text-center p-2">Agendamentos pendentes</p>
                        </div>
                    </div>
                </div>

                <!-- Fim do grupo de Cards -->

                <!-- Calendário e agendamentos -->
                  <div class="grid grid-cols-2  gap-4 mt-[100px]">
                    <div class="flex items-center justify-center rounded-lg bg-gray-50 border shadow-md space-y-3 w-[450px] h-[300px] ml-5">
                        
                    </div>
                    <!-- Fim do calendário -->
                    
                    <div class="flex items-center justify-center rounded-lg bg-gray-50 border shadow-md space-y-3 w-[500px] h-[250px] mt-6 ml-20 mr-10 mb-6">
                        
                    </div>
                </div>
                
            </div>
            
        </div>
     </main>
</template>