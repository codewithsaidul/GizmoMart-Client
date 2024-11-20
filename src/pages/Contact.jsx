const Contact = () => {
  return (
    <div className="px-4 sm:px-8 md:px-12 lg:px-20 mb-20">
      <h2 className="text-center text-3xl text-primary font-bold my-10">
        Contact With Us
      </h2>

      {/* ================== Contact Container =========================== */}
      <div>
        <div className="min-h-[calc(100vh-100px)]">
          <div className="hero-content flex-col">
            <div className="card bg-base-100 w-full max-w-md  shadow-2xl">
              <form className="card-body">

                {/* ========== for name field */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Full Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Your Full Name"
                    className="input input-bordered"
                    required
                  />
                </div>

                {/* ========== for email field */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="email"
                    className="input input-bordered"
                    required
                  />
                </div>

                {/* ========== for message field */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Message</span>
                  </label>
                  <textarea className="input input-bordered h-40 resize-none py-4 text-slate-500" placeholder="Message"></textarea>
                </div>
                <div className="form-control mt-6">
                  <button className="btn bg-primary text-white hover:bg-primary">Send Message</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
