export function Managementcover() {
    return (
      <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
        <div className="absolute inset-0 -z-10 overflow-hidden h-96">
          <img
            className="h-120 !important w-full object-cover object-center brightness-50 sm:h-72 md:h-96 lg:w-full lg:h-full"
            src="https://plus.unsplash.com/premium_photo-1661963209358-0f4d5f509d10?q=80&w=1907&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="nature image"
          />
        </div>
        <div className="flex justify-center items-center h-full">
          <div className="text-center">
            <h1 className="mt-2 text-3xl font-semibold text-white sm:text-4xl">Property Management</h1>
          </div>
        </div>
      </div>
    );
  }