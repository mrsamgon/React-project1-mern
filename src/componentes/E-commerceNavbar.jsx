


function Ecommmerce(){
    return(
        <>

<nav className="bg-gray-800">
  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div className="relative flex h-16 items-center justify-between">
      {/* Logo */}
      <div className="flex items-center">
        <img
          className="h-10 w-auto"
          src="https://tailwindui.com/plus/img/logos/mark.svg?color=yellow&shade=500"
          alt="E-Shop Logo"
        />
        <span className="text-white text-xl font-bold ml-2">SARO</span>
      </div>

      {/* Search Bar */}
      <div className="flex flex-1 items-center justify-center sm:ml-6">
        <input
          type="text"
          className="w-full max-w-md rounded-md bg-gray-700 text-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
          placeholder="Search for products..."
        />
      </div>

      {/* Icons for Cart and Profile */}
      <div className="absolute right-0 flex items-center space-x-4">
        {/* Cart */}
        <button className="relative rounded-full bg-gray-800 p-2 text-gray-400 hover:text-white focus:ring-2 focus:ring-yellow-500">
          <span className="sr-only">View Cart</span>
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 3h2l.4 2M7 13h10l3.6-7H5.4M7 13l-1.4 2.8A2 2 0 0 0 7.6 18h8.8a2 2 0 0 0 1.8-1.2L17 13M7 13h10"
            />
          </svg>
          <span className="absolute -top-2 -right-2 rounded-full bg-yellow-500 text-xs font-bold text-gray-900 px-2 py-1">
            3
          </span>
        </button>

        {/* User Menu */}
        <div className="relative">
          <button
            type="button"
            className="flex items-center rounded-full bg-gray-800 text-sm focus:ring-2 focus:ring-yellow-500"
          >
            <span className="sr-only">Open user menu</span>
            <img
              className="h-8 w-8 rounded-full"
              src="https://via.placeholder.com/150"
              alt="User Avatar"
            />
          </button>
          {/* Dropdown */}
          <div className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black/5 focus:outline-none hidden group-hover:block">
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              Profile
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              Orders
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              Sign out
            </a>
          </div>
        </div>
      </div>
    </div>

    {/* Categories Section */}
    <div className="mt-4 flex justify-center space-x-4">
      <a
        href="#"
        className="text-sm font-medium text-gray-300 hover:text-yellow-500"
      >
        Electronics
      </a>
      <a
        href="#"
        className="text-sm font-medium text-gray-300 hover:text-yellow-500"
      >
        Clothing
      </a>
      <a
        href="#"
        className="text-sm font-medium text-gray-300 hover:text-yellow-500"
      >
        Home Appliances
      </a>
      <a
        href="#"
        className="text-sm font-medium text-gray-300 hover:text-yellow-500"
      >
        Sports
      </a>
      <a
        href="#"
        className="text-sm font-medium text-gray-300 hover:text-yellow-500"
      >
        More
      </a>
    </div>
  </div>
</nav>

        </>
    )
}

export default Ecommmerce