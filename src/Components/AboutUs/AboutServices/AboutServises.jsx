export default function AboutServices() {
  return (
    <div>
      <section className="bg-white dark:bg-gray-900 py-12">
        <div className="container px-6 py-8 mx-auto">
          <h2 className="text-3xl font-bold font2 uppercase  text-center text-gray-800  lg:text-4xl dark:text-white">
            Our Professional Team
          </h2>
          <p className="mt-4 text-center text-gray-600 dark:text-gray-300">
            Meet the exceptional individuals driving our success.
          </p>

          <div className="grid gap-8 mt-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {/* Card 1 */}
            <div
              className="w-full max-w-xs mx-auto bg-cover bg-center rounded-lg shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80')",
              }}
            >
              <div className=" p-6 rounded-lg text-center text-white">
                <h3 className="text-lg font-semibold">John Doe</h3>
                <p className="mt-2 text-sm">Chief Executive Officer</p>
              </div>
            </div>

            {/* Card 2 */}
            <div
              className="w-full max-w-xs mx-auto bg-cover bg-center rounded-lg shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80')",
              }}
            >
              <div className=" p-6 rounded-lg text-center text-white">
                <h3 className="text-lg font-semibold">Jane Smith</h3>
                <p className="mt-2 text-sm">Head of Innovation</p>
              </div>
            </div>

            {/* Card 3 */}
            <div
              className="w-full max-w-xs mx-auto bg-cover bg-center rounded-lg shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80')",
              }}
            >
              <div className=" p-6 rounded-lg text-center text-white">
                <h3 className="text-lg font-semibold">Alex Johnson</h3>
                <p className="mt-2 text-sm">Finance Manager</p>
              </div>
            </div>

            {/* Card 4 */}
            <div
              className="w-full max-w-xs mx-auto bg-cover bg-center rounded-lg shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80')",
              }}
            >
              <div className="p-6 rounded-lg text-center text-white">
                <h3 className="text-lg font-semibold">Emily Davis</h3>
                <p className="mt-2 text-sm">Marketing Specialist</p>
              </div>
            </div>

            {/* Card 5 */}
            <div
              className="w-full max-w-xs mx-auto bg-cover bg-center rounded-lg shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80')",
              }}
            >
              <div className=" p-6 rounded-lg text-center text-white">
                <h3 className="text-lg font-semibold">Chris Lee</h3>
                <p className="mt-2 text-sm">Customer Relations</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
