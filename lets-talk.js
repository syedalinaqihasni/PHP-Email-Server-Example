// import React, { useRef, useState } from "react";
// import { services } from "../../helper/services";
// import letsTalkImage from "../../assets/images/letsTalk.svg";
// import emailjs from "@emailjs/browser";
// import { toast } from "react-hot-toast";
// import Button from "../button/button";
// import style from "./style.module.css";
// import SectionTitle from "../sectionTitle";
// import { IMaskInput } from "react-imask";
// import "../../assets/css/responsive.css";
// const EmailAddressMask = /^\S*@?\S*$/;
// const ContactNumberMask = "+{00}(000)000-00000";

// const LetsTalk = ({ modal, modelClose, link, h1 }) => {
//   const [email, setEmail] = useState("");
//   const [name, setName] = useState("");
//   const [subject, setSubject] = useState("");
//   const [message, setMessage] = useState("");

//   const [errors, setErrors] = useState({});
//   const form = useRef();

//   const clearState = () => {
//     setEmail("");
//     setMessage("");
//     setName("");
//     setSubject("");
//   };

//   const sendEmail = (e) => {
//     e.preventDefault();

//     // Check for errors in form fields
//     let errors = {};
//     if (!name) {
//       errors.name = "Name is required";
//     }
//     if (!email) {
//       errors.email = "Email is required";
//     } else if (!/\S+@\S+\.\S+/.test(email)) {
//       errors.email = "Invalid email format";
//     }
//     if (!subject) {
//       errors.subject = "Subject is required";
//     }
//     if (!message) {
//       errors.message = "Message is required";
//     }

//     // If there are errors, set them in state and exit
//     if (Object.keys(errors).length > 0) {
//       setErrors(errors);
//       return;
//     }

//     emailjs.init("bo0d42dcDbZL1U83o");

//     emailjs
//       .send("service_0n1v6bm", "template_88hqabf", {
//         from_name: name,
//         from_email: "info@esparkconsultants.com",
//         reply_to: email,
//         subject: subject,
//         message: message,
//       })
//       .then(
//         (result) => {
//           toast.success("Thank you for Connecting");
//           clearState();
//         },
//         (error) => {
//           toast.error("Something Went Wrong");
//         }
//       );
//   };

//   return (
//     <div>
//       <div className={`contact-area  ${!modal ? "pb-80" : null}`}>
//         <div className="container-fluid p-4  ">
//           <div className={`${style.letsTalk} row border sizeControl  `}>
//             <div className="col-lg-8 text-center">
//               <SectionTitle
//                 heading={"Let’s Talk"}
//                 paragraph={
//                   <p>
//                     Have any queries, ideas, or feedback for us?
//                     <br /> We got you all covered! Just fill out the form below
//                     to connect with us.
//                   </p>
//                 }
//                 width={"100px"}
//                 padding={"0"}
//               />
//             </div>
//             <div className="col-lg-4 hidden-md hidden-sm   ">
//               <div className={style.letsTalkImage}>
//                 <img src={letsTalkImage} alt="" />
//               </div>
//             </div>
//           </div>
//           <div className="row sizeControl ">
//             <div
//               className={`${style.formcol} col-lg-8 col-md-12 col-sm-12   text-center`}>
//               <div className={`${style.formbox} col-lg-12 `}>
//                 <form
//                   id="contactForm"
//                   className=""
//                   ref={form}
//                   onSubmit={sendEmail}>
//                   <div className="row ">
//                     <div className="col-lg-6 col-md-6">
//                       <div className="form-group">
//                         <label className={`${style.label} d-flex`}>Name</label>
//                         <input
//                           type="text"
//                           required
//                           name="name"
//                           placeholder="Your Name *"
//                           className="form-control"
//                           value={name}
//                           onChange={(e) => setName(e.target.value)}
//                         />
//                         <div className="invalid-feedback"></div>
//                       </div>
//                     </div>
//                     <div className="col-lg-6 col-md-6">
//                       <div className="form-group">
//                         <label className={`${style.label} d-flex`}>
//                           Email Address
//                         </label>
//                         <input
//                           type="email"
//                           required
//                           name="email"
//                           placeholder="Your email address *"
//                           className="form-control"
//                           value={email}
//                           onChange={(e) => setEmail(e.target.value)}
//                         />
//                         <div className="invalid-feedback"></div>
//                       </div>
//                     </div>
//                     <div className="col-lg-12 col-md-12">
//                       <div className="form-group">
//                         <label className={`${style.label} d-flex`}>
//                           Subject
//                         </label>
//                         <input
//                           type="text"
//                           name="subject"
//                           placeholder="Your Subject *"
//                           className="form-control"
//                           required
//                           value={subject}
//                           onChange={(e) => setSubject(e.target.value)}
//                         />
//                         <div className="invalid-feedback"></div>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="col-lg-12 col-md-12">
//                     <div className="form-group">
//                       <label className={`${style.label} d-flex`}>Message</label>
//                       <textarea
//                         name="text"
//                         required
//                         cols="30"
//                         rows="5"
//                         placeholder={"Write your message ...*"}
//                         className="form-control"
//                         value={message}
//                         onChange={(e) => setMessage(e.target.value)}></textarea>
//                       <div className="invalid-feedback"></div>
//                     </div>
//                   </div>
//                   <div className="col-lg-12 col-sm-12 d-flex justify-content-center justify-content-sm-start ">
//                     <Button
//                       type="submit"
//                       onClick={sendEmail}
//                       title="SUBMIT"
//                       design={0}
//                     />
//                   </div>
//                 </form>
//               </div>
//             </div>
//             <div className="col-lg-4 hidden-md hidden-sm"></div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LetsTalk;


import React, { useRef, useState } from "react";
import { toast } from "react-hot-toast";
import Button from "../button/button";
import style from "./style.module.css";
import SectionTitle from "../sectionTitle";
import letsTalkImage from "../../assets/images/letsTalk.svg";
import "../../assets/css/responsive.css";

const LetsTalk = ({ modal, modelClose, link, h1 }) => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const [errors, setErrors] = useState({});
  const form = useRef();
  const clearState = () => {
    setEmail("");
    setMessage("");
    setName("");
    setSubject("");
  };

  const sendEmail = async (e) => {
    e.preventDefault();

    const formData = {
      name: name,
      email: email,
      subject: subject,
      message: message,
    };

    try {
      const response = await fetch("https://your-backend-api.com/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success("Thank you for Connecting");
        clearState();
      } else {
        toast.error("Something Went Wrong");
      }
    } catch (error) {
      toast.error("Something Went Wrong");
    }
  };

  // Rest of your component JSX remains unchanged...
    
    return (
    <div>
      <div className={`contact-area  ${!modal ? "pb-80" : null}`}>
        <div className="container-fluid p-4  ">
          <div className={`${style.letsTalk} row border sizeControl  `}>
            <div className="col-lg-8 text-center">
              <SectionTitle
                heading={"Let’s Talk"}
                paragraph={
                  <p>
                    Have any queries, ideas, or feedback for us?
                    <br /> We got you all covered! Just fill out the form below
                    to connect with us.
                  </p>
                }
                width={"100px"}
                padding={"0"}
              />
            </div>
            <div className="col-lg-4 hidden-md hidden-sm   ">
              <div className={style.letsTalkImage}>
                <img src={letsTalkImage} alt="" />
              </div>
            </div>
          </div>
          <div className="row sizeControl ">
            <div
              className={`${style.formcol} col-lg-8 col-md-12 col-sm-12   text-center`}>
              <div className={`${style.formbox} col-lg-12 `}>
                <form
                  id="contactForm"
                  className=""
                  ref={form}
                  onSubmit={sendEmail}>
                  <div className="row ">
                    <div className="col-lg-6 col-md-6">
                      <div className="form-group">
                        <label className={`${style.label} d-flex`}>Name</label>
                        <input
                          type="text"
                          required
                          name="name"
                          placeholder="Your Name *"
                          className="form-control"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                        />
                        <div className="invalid-feedback"></div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="form-group">
                        <label className={`${style.label} d-flex`}>
                          Email Address
                        </label>
                        <input
                          type="email"
                          required
                          name="email"
                          placeholder="Your email address *"
                          className="form-control"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                        <div className="invalid-feedback"></div>
                      </div>
                    </div>
                    <div className="col-lg-12 col-md-12">
                      <div className="form-group">
                        <label className={`${style.label} d-flex`}>
                          Subject
                        </label>
                        <input
                          type="text"
                          name="subject"
                          placeholder="Your Subject *"
                          className="form-control"
                          required
                          value={subject}
                          onChange={(e) => setSubject(e.target.value)}
                        />
                        <div className="invalid-feedback"></div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12 col-md-12">
                    <div className="form-group">
                      <label className={`${style.label} d-flex`}>Message</label>
                      <textarea
                        name="text"
                        required
                        cols="30"
                        rows="5"
                        placeholder={"Write your message ...*"}
                        className="form-control"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}></textarea>
                      <div className="invalid-feedback"></div>
                    </div>
                  </div>
                  <div className="col-lg-12 col-sm-12 d-flex justify-content-center justify-content-sm-start ">
                    <Button
                      type="submit"
                      onClick={sendEmail}
                      title="SUBMIT"
                      design={0}
                    />
                  </div>
                </form>
              </div>
            </div>
            <div className="col-lg-4 hidden-md hidden-sm"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LetsTalk;

