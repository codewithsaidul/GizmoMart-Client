import { testimonials } from "../../data/Data";

const Testimonial = () => {
  return (
    <div className="my-20">
      <h2 className="text-2xl font-bold text-slate-700 mb-10 text-center sm:text-left">
        What Our <span className="text-primary">Client</span> Say
      </h2>

      {/* =============== Testimonial Container ====================== */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {testimonials.map((review) => (
          <div key={review.id} className="flex flex-col justify-center items-center border-2 border-primary rounded-lg py-8 px-6 gap-7">
            <div className="flex flex-col gap-4">
              <p className="text-base font-medium text-slate-400 text-center">
                {review.review}
              </p>
            </div>

            <div className="flex items-center gap-4">
              <img
                src={review.profile}
                alt={review.userName}
                className="w-16 h-16 rounded-full"
              />
              <h3 className="text-lg font-bold text-primary">
                {review.userName}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
