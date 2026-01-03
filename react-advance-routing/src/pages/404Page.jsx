import React from 'react'

const NotFoundPage = () => {
  return (
    <section class="bg-gray-900">
    <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div class="mx-auto max-w-screen-sm text-center">
            <h1 class="mb-4 text-7xl mb-24 tracking-tight font-extrabold lg:text-9xl text-white">404</h1>
            <p class="mb-4 text-3xl tracking-tight font-bold md:text-4xl text-white">Page not found currently</p>
            <p class="mb-4 text-lg font-light text-gray-300">Sorry, we can't find such page.</p>

          <button type="button" class="text-white text-center bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-1 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">Back To Home</button>
        </div>   
    </div>
</section>
  )
}

export default NotFoundPage