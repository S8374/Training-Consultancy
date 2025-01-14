export default function Faq() {
    return (
      <div className=" flex flex-col items-center py-10 px-5 md:flex-row md:space-x-8 md:px-20">
        {/* FAQ Header with Image */}
        <div className="text-center mb-8 md:mb-0 md:w-1/2">
          <img
            src="https://media.istockphoto.com/id/1412891663/photo/virtual-assistant-and-crm-software-automation-technology-customer-using-online-service-with.jpg?s=612x612&w=0&k=20&c=SxoykNjcHmG7zZSo3AWt84yMuTYcgr97h1Ii5MYUlzg="
            alt="FAQ Header"
            className="mx-auto w-full max-w-md rounded-lg shadow-lg"
          />
        </div>
  
        {/* FAQ Content */}
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold text-gray-800 text-center md:text-left md:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-2 text-gray-600 text-center md:text-left md:text-lg">
            Find answers to the most common questions below.
          </p>
  
          {/* FAQ Accordion */}
          <div className="join join-vertical w-full max-w-xl mx-auto bg-white rounded-lg shadow-lg mt-5 md:mt-8">
            <div className="collapse collapse-arrow join-item border border-gray-200">
              <input type="radio" name="faq-accordion" defaultChecked />
              <div className="collapse-title text-lg font-medium text-gray-800">
                What is your return policy?
              </div>
              <div className="collapse-content">
                <p className="text-gray-600">
                  We offer a 30-day return policy with a full refund for unused and undamaged items.
                </p>
              </div>
            </div>
  
            <div className="collapse collapse-arrow join-item border border-gray-200">
              <input type="radio" name="faq-accordion" />
              <div className="collapse-title text-lg font-medium text-gray-800">
                How do I track my order?
              </div>
              <div className="collapse-content">
                <p className="text-gray-600">
                  You can track your order using the tracking number provided in your email.
                </p>
              </div>
            </div>
  
            <div className="collapse collapse-arrow join-item border border-gray-200">
              <input type="radio" name="faq-accordion" />
              <div className="collapse-title text-lg font-medium text-gray-800">
                Do you offer international shipping?
              </div>
              <div className="collapse-content">
                <p className="text-gray-600">
                  Yes, we ship to over 100 countries. Shipping costs may vary depending on the destination.
                </p>
              </div>
            </div>
  
            <div className="collapse collapse-arrow join-item border border-gray-200">
              <input type="radio" name="faq-accordion" />
              <div className="collapse-title text-lg font-medium text-gray-800">
                Can I cancel my order?
              </div>
              <div className="collapse-content">
                <p className="text-gray-600">
                  Yes, orders can be canceled within 24 hours of placing them.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  