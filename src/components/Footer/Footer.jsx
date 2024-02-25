import React from 'react'

const Footer = () =>
{
    return (
        <div>
            <footer class="bg-gray-800 py-6">
                <div class="container mx-auto flex justify-between items-center px-4">
                    <div class="text-white text-sm">© 2024 Your Portfolio Name</div>
                    <ul class="flex space-x-4">
                        <li>
                            <a href="#" class="text-gray-400 hover:text-white transition duration-300">Home</a>
                        </li>
                        <li>
                            <a href="#" class="text-gray-400 hover:text-white transition duration-300">About</a>
                        </li>
                        <li>
                            <a href="#" class="text-gray-400 hover:text-white transition duration-300">Portfolio</a>
                        </li>
                        <li>
                            <a href="#" class="text-gray-400 hover:text-white transition duration-300">Contact</a>
                        </li>
                        {/* <!-- Social Media Icons --> */ }
                        <li>
                            <a href="#" class="text-gray-400 hover:text-white transition duration-300">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 5a3 3 0 0-1 3 3v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h9z"></path>
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 13a3 3 0 0-1 3 3"></path>
                                </svg>
                            </a>
                        </li>
                        <li>
                            <a href="#" class="text-gray-400 hover:text-white transition duration-300">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                                </svg>
                            </a>
                        </li>
                        <li>
                            <a href="#" class="text-gray-400 hover:text-white transition duration-300">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 20c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8zM17.5 9a.5.5 0 110-1 .5.5 0 010 1zM7.5 9a.5.5 0 110-1 .5.5 0 010 1zm10 2a1 1 0 00-1-1h-2a1 1 0 100 2h2a1 1 0 001-1zM9.5 12a1 1 0 100 2 1 1 0 000-2zm6 0a1 1 0 100 2 1 1 0 000-2zm-3 3a5 5 0 01-5-5 5 5 0 015-5 5 5 0 015 5 5 5 0 01-5 5z"></path>
                                </svg>
                            </a>
                        </li>
                    </ul>
                </div>
            </footer>

        </div>
    )
}

export default Footer
