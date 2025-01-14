export default function Testimonials() {
  return (
    <div>
      <section className="bg-gray-50 py-12">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-extrabold font2 uppercase text-gray-800 text-center mb-8">What Our Clients Say</h2>
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white p-8 shadow-lg rounded-xl transition-all duration-300 hover:shadow-xl">
              <div className="flex items-center font1 mb-6">
                <div className="flex-shrink-0 w-16 h-16 bg-rose-600 rounded-full text-white flex items-center justify-center">
                  <span className="text-2xl font-bold">1</span>
                </div>
                <div className="ml-4">
                  <h3 className="text-xl uppercase font-semibold text-gray-800">ConsultPro</h3>
                  <p className="text-lg font-semibold text-rose-600">Stayin' Alive</p>
                </div>
              </div>
              <p className="text-gray-700 font1 leading-relaxed">
                "No, Rose, they are not breathing. And they have no arms or legs... Where are they? You mean, what quality of life do we have there?"
              </p>
            </div>

            <div className="bg-white p-8 shadow-lg rounded-xl transition-all duration-300 hover:shadow-xl">
              <div className="flex items-center mb-6">
                <div className="flex-shrink-0 w-16 h-16 bg-rose-600 rounded-full text-white flex items-center justify-center">
                  <span className="text-2xl font-bold">2</span>
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font2 uppercase font-semibold text-gray-800">ConsultPro</h3>
                  <p className="text-lg font-semibold text-rose-600">Stayin' Alive</p>
                </div>
              </div>
              <p className="text-gray-700 font1 leading-relaxed">
                "No, Rose, they are not breathing. And they have no arms or legs... Where are they? You mean, what quality of life do we have there?"
              </p>
            </div>

            <div className="bg-white p-8 shadow-lg rounded-xl transition-all duration-300 hover:shadow-xl">
              <div className="flex items-center mb-6">
                <div className="flex-shrink-0 w-16 h-16 bg-rose-600 rounded-full text-white flex items-center justify-center">
                  <span className="text-2xl font-bold">3</span>
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold font2 uppercase text-gray-800">ConsultPro</h3>
                  <p className="text-lg font-semibold text-rose-600">Stayin' Alive</p>
                </div>
              </div>
              <p className="text-gray-700 font1 leading-relaxed">
                "No, Rose, they are not breathing. And they have no arms or legs... Where are they? You mean, what quality of life do we have there?"
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}