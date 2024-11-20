const Faq = () => {
  return (
    <div className="my-20">
      <h2 className="text-2xl font-bold text-slate-700 mb-10 text-center sm:text-left">
        Frequentlu Ask <span className="text-primary">Question</span>
      </h2>

      {/* =========== Accordion ====================== */}
      <div className="flex flex-col space-y-6">
        {/* =========== Question 1 ====================== */}
        <div className="collapse collapse-plus bg-base-200">
          <input type="radio" name="my-accordion-3" defaultChecked />
          <div className="collapse-title text-xl font-medium">
            What payment methods do you accept?
          </div>
          <div className="collapse-content">
            <p>
              We accept all major credit cards, PayPal, and bank transfers. All
              transactions are secured.
            </p>
          </div>
        </div>

        {/* =========== Question 2 ====================== */}
        <div className="collapse collapse-plus bg-base-200">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-xl font-medium">
            How can I track my order?
          </div>
          <div className="collapse-content">
            <p>
              Once your order is shipped, you&apos;ll receive an email with a
              tracking number to monitor your package in real-time.
            </p>
          </div>
        </div>

        {/* =========== Question 3 ====================== */}
        <div className="collapse collapse-plus bg-base-200">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-xl font-medium">
            What is your return policy?
          </div>
          <div className="collapse-content">
            <p>
              We offer a 30-day return policy on most items. If you&apos;re not
              satisfied, contact our support team for assistance.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
