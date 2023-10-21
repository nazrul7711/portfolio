import "@/styles/contact.scss";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Contact = () => {
  let oneref = useRef(null);
  let variants = {
    initial: { opacity: 0, y: 500 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, staggerChildren: 1 },
    },
  };
  let pathVariant = {
    initial: { opacity: 0, pathLength: 0 },
    animate: {
      opacity: 1,
      pathLength: 1,
      transition: { duration: 2},
    },
  };
  let inView = useInView(oneref, { margin: "-100px" });
  console.log(inView)
  return (
    <motion.div
      ref={oneref}
      className="contact"
      variants={variants}
      initial="initial"
      whileInView="animate"
    >
      <motion.div className="detailContainer" variants={variants}>
        <h1>Let's work together</h1>
        <div className="item">
          <h2>Email</h2>
          <span>Nazrul7711@gmail.com</span>
        </div>
        <div className="item">
          <h2>Address</h2>
          <span>Guwahati Assam</span>
        </div>
        <div className="item">
          <h2>Phone</h2>
          <span>8638419270</span>
        </div>
      </motion.div>
      <motion.div className="formContainer" variants={variants}>
        <motion.div
          className="phoneSvg"
          initial={{ opacity: 1 }}
          whileInView={{ opacity: 0 }}
          transition={{ duration: 3, delay: 3 }}
        >
          <svg height="450px" width="450px" viewBox="0 0 550.001 550.001">
            <g>
              <g>
                <motion.path
                  strokeWidth={2}
                  fill="none"
                  initial={{ pathLength: 0 }}
                  animate={inView && { pathLength: 1 }}
                  transition={{ duration: 3 }}
                  d="M498.816,371.03c-24.32-24.32-77.278-46.976-115.618-59.75c-54.741-18.244-36.497,72.994-72.994,72.994
			c-18.244,0-63.863-36.497-104.926-77.551c-41.054-41.062-77.551-86.682-77.551-104.926c0-36.497,91.238-18.253,72.994-72.994
			c-12.783-38.349-35.43-91.298-59.759-115.618C130.56,2.783,119.86-2.389,109.483,1.067C54.742,19.32,0,74.062,0,110.559
			c0,72.986,18.244,164.224,127.735,273.715c109.483,109.474,200.721,127.727,273.707,127.727
			c36.497,0,91.238-54.741,109.483-109.491C514.381,392.142,509.219,381.432,498.816,371.03z M401.451,486.196
			c-62.993,0-148.949-13.662-255.471-120.175C39.467,259.508,25.805,173.543,25.805,110.55c0-20.267,41.993-67.644,90.24-84.463
			c1.118,0.589,3.354,2.022,6.673,5.333c16.717,16.717,37.726,58.138,53.521,105.54c0.725,2.185,0.973,3.618,1.05,4.429
			c-3.635,2.918-14.874,6.46-21.768,8.636c-20.045,6.315-53.598,16.887-53.598,51.763c0,31.454,46.285,84.343,85.112,123.17
			c38.827,38.827,91.716,85.111,123.17,85.111c34.884,0,45.449-33.553,51.763-53.598c2.176-6.903,5.709-18.133,8.636-21.768
			c0.811,0.077,2.244,0.324,4.429,1.05c47.394,15.804,88.823,36.813,105.532,53.521c3.319,3.311,4.745,5.547,5.333,6.673
			C469.095,444.203,421.709,486.196,401.451,486.196z"
                />
              </g>
            </g>
            <g>
              <g>
                <motion.path
                  variants={pathVariant}
                  initial="initial"
                  d="M256,102.401v25.6c70.69,0,128,57.31,128,128h25.6C409.6,171.307,340.694,102.401,256,102.401z"
                />
              </g>
            </g>
            <g>
              <g>
                <motion.path
                  variants={pathVariant}
                  initial="initial"
                  d="M256,51.201v25.6c98.97,0,179.2,80.23,179.2,179.2h25.6C460.8,143.071,368.931,51.201,256,51.201z"
                />
              </g>
            </g>
            <g>
              <g>
                <motion.path
                  variants={pathVariant}
                  initial="initial"
                  d="M256,0.001v25.6c127.249,0,230.4,103.151,230.4,230.4H512C512,114.842,397.159,0.001,256,0.001z"
                />
              </g>
            </g>
          </svg>
        </motion.div>

        <motion.form
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 2, delay: 5 }}
        >
          <input type="text" placeholder="Name" />
          <input type="text" placeholder="Email" />
          <textarea
            name="message"
            id="message"
            cols="30"
            rows="10"
            placeholder="message"
          ></textarea>

          <button>Submit</button>
        </motion.form>
      </motion.div>
    </motion.div>
  );
};

export default Contact;
